module.exports = {
  apps: [
    {
      name: 'web-client',
      script: './apps/web-client/.next/standalone/apps/web-client/server.js',
      env: {
        NODE_ENV: 'production',
        APP_ENV: 'production',
        PORT: 3002,
      },
    },
    {
      name: 'cms',
      script: './apps/cms/.next/standalone/apps/cms/server.js',
      env: {
        NODE_ENV: 'production',
        APP_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
