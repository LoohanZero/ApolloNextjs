
module.exports = {
  env: {
    PRODUCTION_URL: 'http://0.0.0.0:3000',
    X_HASURA_URL: process.env.X_HASURA_URL,
    X_HASURA_ADMIN_SECRET: process.env.X_HASURA_ADMIN_SECRET,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      }
    ]
  },
}
