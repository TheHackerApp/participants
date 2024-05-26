import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server';

import { isContextSuccess, loadContext } from '@/lib/context';

const INTERNAL_SERVER_ERROR = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8"></meta>
    <title>Internal Server Error</title>
  </head>
  <body>
    <h1>Internal Server Error</h1>
    <p>We couldn't process your request, please try again later</p>
  </body>
</html>
`;

export const config: MiddlewareConfig = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};

export async function middleware(request: NextRequest): Promise<NextResponse | undefined> {
  const session = request.cookies.get('session');
  const host = request.headers.get('host')!;

  const context = await loadContext(session?.value, host);
  if (!isContextSuccess(context)) {
    // TODO: gracefully handle unknown event errors
    console.error(`[middleware] failed to get user info:`, context.errors.map((err) => err.message).join(', '));
    return internalServerError();
  }

  if (context.user.type !== 'authenticated') {
    const url = new URL('/api/session', process.env.ACCOUNTS_URL);
    url.searchParams.set('domain', host);

    // TODO: handle returning to requested page

    return NextResponse.redirect(url);
  }

  return;
}

function internalServerError(): NextResponse {
  return new NextResponse(INTERNAL_SERVER_ERROR, {
    status: 500,
    headers: { 'Content-Type': 'text/html;charset=utf-8' },
  });
}
