import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const redisUrl = "https://amazing-pika-84857.upstash.io";
    const redisToken = "gQAAAAAAAUt5AAIncDJiNmNhNzcwMjk4NzU0M2U2YTk4YTk0ZDZjZGFkNWE0OHAyODQ4NTc";

    if (!redisUrl || !redisToken) {
      return NextResponse.json(
        { error: 'Redis configuration missing' },
        { status: 500 }
      );
    }

    // Get the click type from query parameter (github, linkedin, instagram)
    const { searchParams } = new URL(request.url);
    const clickType = searchParams.get('type');
    
    const redisKey = `${clickType}_clicks`;

    // Increment the specific click count
    const response = await fetch(`${redisUrl}/incr/${redisKey}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${redisToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to increment clicks count');
    }

    const data = await response.json();

    return NextResponse.json(
      { success: true, clicks: data.result },
      { status: 200 }
    );
  } catch (error) {
    console.error('Click API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
