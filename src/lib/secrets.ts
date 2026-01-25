// import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
/*
const secretsToFetch = [
  'KEYSTATIC_GITHUB_CLIENT_ID',
  'KEYSTATIC_GITHUB_CLIENT_SECRET',
  'KEYSTATIC_SECRET',
] as const;
*/

let secretsLoaded = false;

export async function loadSecrets() {
  if (secretsLoaded) return;
  
  console.log('Secrets management is now handled via Environment Variables (Cloudflare Pages).');
  secretsLoaded = true;

  /*
  // Only fetch secrets in production or if explicitly enabled
  // In development, we usually use .env.local
  if (process.env.NODE_ENV !== 'production' && !process.env.FORCE_FETCH_SECRETS) {
    return;
  }

  try {
    const client = new SecretManagerServiceClient();
    // In GAE, GOOGLE_CLOUD_PROJECT is usually set. If not, it falls back to default logic of the client.
    // However, for constructing the path, we need a project ID.
    // simpler method: client.accessSecretVersion({ name: ... }) can take the full path.
    // We need the project ID.
    const projectId = await client.getProjectId();

    if (!projectId) {
      console.warn('Could not determine GCP Project ID, skipping secret fetch.');
      return;
    }

    console.log(`Fetching secrets for project ${projectId} from Secret Manager...`);

    const results = await Promise.allSettled(
      secretsToFetch.map(async (secretName) => {
        const name = `projects/${projectId}/secrets/${secretName}/versions/latest`;
        const [version] = await client.accessSecretVersion({ name });
        const payload = version.payload?.data?.toString();

        if (payload) {
             process.env[secretName] = payload;
        } else {
             console.warn(`Secret ${secretName} payload was empty.`);
        }
      })
    );
    
    const failures = results.filter(r => r.status === 'rejected');
    if (failures.length > 0) {
        console.error(`Failed to load some secrets:`, failures);
    } else {
        console.log('Secrets loaded successfully.');
    }

    secretsLoaded = true;

  } catch (error) {
    console.error('Error initializing Secret Manager client or fetching secrets:', error);
  }
  */
}
