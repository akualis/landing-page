import { makeRouteHandler } from '@keystatic/next/route-handler';
import keystaticConfig from '../../../../../keystatic.config';

import { loadSecrets } from '@/lib/secrets';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  await loadSecrets();
  const { GET: _GET } = makeRouteHandler({
    config: keystaticConfig,
  });
  return _GET(request);
}

export async function POST(request: Request) {
  await loadSecrets();
  const { POST: _POST } = makeRouteHandler({
    config: keystaticConfig,
  });
  return _POST(request);
}
