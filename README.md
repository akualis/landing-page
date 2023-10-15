# Akualis (akualis-landing-page)
Akualis landing page
- host : Google App Engine
- backend : NodeJS - Express (via Quasar SSR mode)
- frontend : Vue.js - quasar.dev

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

### Format the files
```sh
npm run format
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
