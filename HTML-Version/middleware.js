export const config = {
  matcher: '/:path*',
};

const PASSWORD = 'pmsbauenapps';

export default function middleware(request) {
  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(' ');
    if (scheme === 'Basic' && encoded) {
      const decoded = atob(encoded);
      const password = decoded.slice(decoded.indexOf(':') + 1);
      if (password === PASSWORD) {
        return;
      }
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Protected Area"',
    },
  });
}
