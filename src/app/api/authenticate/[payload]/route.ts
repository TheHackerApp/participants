import { cookies as requestCookies } from 'next/headers';

import { decrypt, loadKey } from '@/lib/crypto';

export const runtime = 'edge';

const MAX_SKEW = 60 * 1000; // 60 seconds
const SCHEME = process.env.NODE_ENV === 'development' ? 'http' : 'https';

export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const raw = url.pathname.substring(url.pathname.lastIndexOf('/') + 1);

  const key = await loadKey(process.env.EVENT_SESSION_KEY);
  let payload;
  try {
    const serialized = await decrypt(key, raw, 'base64url');
    payload = JSON.parse(serialized);
  } catch {
    return Response.json({ error: 'malformed payload' }, { status: 400 });
  }

  const now = new Date().getTime();
  const timestamp = new Date(payload.timestamp).getTime();
  if (now - timestamp > MAX_SKEW) return Response.json({ error: 'expired' }, { status: 403 });

  const cookies = requestCookies();
  cookies.set({
    name: 'session',
    value: payload.token,
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production',
  });

  // TODO: set cookie with signed event slug

  const host = request.headers.get('host')!;
  return Response.redirect(`${SCHEME}://${host}/`);
}
