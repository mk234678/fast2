// Import the framework and instantiate it
import Fastify from 'fastify'
const port = process.env.PORT || 9000;
const host = ("RENDER" in process.env) ? `0.0.0.0` : `localhost`;
const fastify = Fastify({
  logger: true
})

// Declare a route
fastify.get('/', async function handler (request, reply) {
  return { hello: 'world' }
})

// Run the server!
fastify.listen({host: host, port: port }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })