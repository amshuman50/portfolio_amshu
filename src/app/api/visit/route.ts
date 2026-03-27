// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   try {
//     const redisUrl = "https://amazing-pika-84857.upstash.io";
//     const redisToken = "gQAAAAAAAUt5AAIncDJiNmNhNzcwMjk4NzU0M2U2YTk4YTk0ZDZjZGFkNWE0OHAyODQ4NTc";

//     if (!redisUrl || !redisToken) {
//       return NextResponse.json(
//         { error: 'Redis configuration missing' },
//         { status: 500 }
//       );
//     }

//     // Increment the visitors count
//     const response = await fetch(`${redisUrl}/incr/visitors`, {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${redisToken}`,
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error('Failed to increment visitors count');
//     }

//     const data = await response.json();

//     return NextResponse.json(
//       { success: true, visitors: data.result },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error('Visit API error:', error);
//     return NextResponse.json(
//       { error: 'Internal server error' },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import { getRedis } from "../../../lib/redisClient";

export async function POST() {
  try {
    const redis = getRedis();
    // Increment the visitors count
    const visitors = await redis.incr("visitors");

    return NextResponse.json(
      { success: true, visitors },
      { status: 200 }
    );
  } catch (error) {
    console.error('Visit API error:', error);
    
    if (error instanceof Error && error.message.includes('Missing required Redis configuration')) {
      return NextResponse.json(
        { error: 'Redis is not configured. Set UPSTASH_REDIS_URL and UPSTASH_REDIS_TOKEN in Vercel environment variables.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}