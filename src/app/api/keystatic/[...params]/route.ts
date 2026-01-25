import { makeRouteHandler } from '@keystatic/next/route-handler';
import keystaticConfig from '../../../../../keystatic.config';

function rewriteUrl(request: Request) {
    const forwardedHost = request.headers.get("x-forwarded-host");
    const forwardedProto = request.headers.get("x-forwarded-proto");

    if (forwardedHost && forwardedProto) {
        const url = new URL(request.url);

        url.hostname = forwardedHost;
        url.protocol = forwardedProto;
        url.port = "";

        return new Request(url, request);
    }

    return request;
}

export async function GET(request: Request) {
  const { GET: _GET } = makeRouteHandler({
    config: keystaticConfig,
  });
  return _GET(rewriteUrl(request));
}

export async function POST(request: Request) {
  const { POST: _POST } = makeRouteHandler({
    config: keystaticConfig,
  });
  return _POST(rewriteUrl(request));
}
