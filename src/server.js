const Hapi = require('@hapi/hapi');

(async () => {
  const server = Hapi.server({
    port: 3000,
    host: process.argv[2] ?? '127.0.0.1',
  });

  server.route([
    {
      method: 'GET',
      path: '/',
      handler: (req, h) => {
        return h.response({
          message: `Hello ${req.query.name ?? 'world'}!`,
        });
      },
    },
    {
      method: 'GET',
      path: '/about',
      handler: (req, h) => {
        return h.response({
          message: `This page about ${req.query.name ?? 'world'}!`,
        });
      },
    },
  ]);

  await server.start();
  console.log('Running server on ', server.info.uri);
})();
