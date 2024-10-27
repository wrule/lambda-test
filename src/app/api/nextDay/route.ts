import { NextResponse } from 'next/server';
import dayjs from 'dayjs';

export
async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    date: dayjs(body.date).add(1, 'days').format('YYYY-MM-DD'),
  });
}

export
async function GET(request: Request) {
  return NextResponse.json({
    date: dayjs().add(1, 'weeks').format('YYYY-MM-DD'),
  });
}
