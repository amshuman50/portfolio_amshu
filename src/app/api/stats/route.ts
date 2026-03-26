// import { NextRequest, NextResponse } from 'next/server';

// export async function GET(request: NextRequest) {
//     try {
//         const redisUrl = process.env.UPSTASH_REDIS_URL;
//         const redisToken = process.env.UPSTASH_REDIS_TOKEN;

//         if (!redisUrl || !redisToken) {
//             return NextResponse.json(
//                 { error: 'Redis configuration missing' },
//                 { status: 500 }
//             );
//         }

//         // Fetch all stats from Redis
//         const keys = ['visitors', 'github_clicks', 'linkedin_clicks', 'instagram_clicks'];
//         const responses = await Promise.all(
//             keys.map((key) =>
//                 fetch(`${redisUrl}/get/${key}`, {
//                     method: 'POST',
//                     headers: {
//                         'Authorization': `Bearer ${redisToken}`,
//                         'Content-Type': 'application/json',
//                     },
//                 })
//             )
//         );

//         const allData = await Promise.all(responses.map((res) => res.json()));

//         const visitors = allData[0].result ? parseInt(allData[0].result, 10) : 0;
//         const github_clicks = allData[2].result ? parseInt(allData[2].result, 10) : 0;
//         const linkedin_clicks = allData[3].result ? parseInt(allData[3].result, 10) : 0;
//         const instagram_clicks = allData[4].result ? parseInt(allData[4].result, 10) : 0;

//         return NextResponse.json(
//             {
//                 success: true,
//                 visitors,
//                 github_clicks,
//                 linkedin_clicks,
//                 instagram_clicks
//             },
//             { status: 200 }
//         );
//     } catch (error) {
//         console.error('Stats API error:', error);
//         return NextResponse.json(
//             {
//                 error: 'Internal server error',
//                 visitors: 0,
//                 github_clicks: 0,
//                 linkedin_clicks: 0,
//                 instagram_clicks: 0
//             },
//             { status: 500 }
//         );
//     }
// }


import { NextRequest, NextResponse } from 'next/server';
import { redis } from '../../../lib/redisClient';

// Define the keys and their types
type StatsKey = 'visitors' | 'github_clicks' | 'linkedin_clicks' | 'instagram_clicks';
type Stats = Record<StatsKey, number>;

export async function GET(request: NextRequest) {
  const keys: StatsKey[] = ['visitors', 'github_clicks', 'linkedin_clicks', 'instagram_clicks'];

  try {
    // Fetch all stats from Redis
    const results: number[] = await Promise.all(
      keys.map(async (key) => {
        const value = await redis.get(key); // Upstash Redis returns string | null
        // Convert string to number safely
        return typeof value === 'string' ? parseInt(value, 10) : 0;
      })
    );

    // Map results back to the keys
    const stats: Stats = keys.reduce((acc, key, index) => {
      acc[key] = results[index];
      return acc;
    }, {} as Stats);

    return NextResponse.json(
      { success: true, ...stats },
      { status: 200 }
    );
  } catch (error) {
    console.error('Stats API error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        visitors: 0,
        github_clicks: 0,
        linkedin_clicks: 0,
        instagram_clicks: 0
      },
      { status: 500 }
    );
  }
}