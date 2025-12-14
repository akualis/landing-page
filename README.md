# Akualis (akualis-landing-page)
Akualis landing page
- host : Google App Engine
- backend : NodeJS - NextJS
- frontend : React - NextJS

## Install the dependencies
```sh
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```sh
npm run dev
```

### Lint the files
```sh
npm run lint
```

### Test locally in App Engine Environement
```sh
npm run staging
```

## Deploy
If it's not already set
```sh
npm run gcloud:login
```

### Production deployment
```sh
npm run deploy:production
```

### TODO

Autodeploy on appengine or switch to Cloudflare or Vercel
