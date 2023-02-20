DATABASE_URL = 'mongodb://localhost:27017'

const fastify = require('fastify')({ logger: true })

fastify.register(require('@fastify/swagger'))
fastify.register(require('@fastify/swagger-ui'),{
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {title: 'fastify-api'},
    },
    externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
})
const dbConnect = require('./db')

// Database Connection
dbConnect()

fastify.register(require('./routes/routes'))

const PORT = 5000

const start = async () => {
    try {
        await fastify.listen({ port: PORT })
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start() 