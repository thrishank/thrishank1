import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
  let obj = req;
  return NextResponse.json({ method: obj.method });
}

export async function POST() {
  return new Response(JSON.stringify({ method: 'Hello world' }));
}
