# React frontend

## Local development

From this directory:

```bash
npm install
npm run dev
```

Vite runs on `http://localhost:5173` and proxies `/api` requests to `http://127.0.0.1:3000` by default. Set `VITE_DEV_API_ORIGIN` in a `.env.local` file to use another local backend origin.

## Production

For a Render Static Site, use these settings when this directory is the repository root:

- Build command: `npm ci && npm run build`
- Publish directory: `dist`
- Environment variable: `VITE_API_BASE_URL` = the deployed LavaLust API origin, for example `https://your-api.onrender.com`

If the repository contains this app in a `react-frontend` subdirectory, set that as Render's Root Directory. Add a Render rewrite from `/*` to `/index.html` with status `200` if the site needs client-side routes.

The frontend sends credentialed requests and supports product `GET`, `POST`, `PUT`, and `DELETE` calls. The deployed API must allow the exact frontend origin, credentials, and these methods. Session-cookie authentication across separate Render domains also requires HTTPS cookies configured for cross-site use, or the backend can use a token-based flow. Never put database credentials in frontend environment variables; Vite variables are public in the built assets.

The root `Dockerfile` also builds this app at `/react/` in the combined application image. It sets `VITE_BASE_PATH=/react/` for that deployment; standalone Render deployments use `/` by default.