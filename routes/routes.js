const { hello,read,readOne,createOne,deleteOne,updateOne } = require('../controller/controller')


const User = {
    type: 'object',
    properties: {
        id: {type: 'number'},
        name: {type: 'string'},
        age: {type: 'number'},
    },
}


const helloUser = {
    schema: {
        summary: 'Say hello',
        description: 'End Point just to say hello',
        response: {
            200: {type: 'string'},
        },
        tags: ['Home Route'],
    },
    handler: hello,
}


const getUsers = {
    schema: {
        summary: 'Get all users',
        response: {
            200: {
                type: 'array',
                items: User,
            },
        },
        tags: ['Crud Operations'],
    },
    handler: read,
}


const getUser = {
    schema: {
        summary: 'Get user by ID',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'User ID',
                },
            },
            required: ['id'],
        },
        response: {
            200: {
                message: {type: 'string'},
                result: User,
            },
        },
        tags: ['Crud Operations'],
    },
    handler: readOne,
}


const addUser = {
    schema: {
        summary: 'Add new user',
        body: {
            description: 'Details of the user',
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'User ID',
                }, 
                name: {
                    type:'string',
                    description: 'User name',
                },
                age: {
                    type: 'number',
                    description: 'User age',
                },
            },
            required: ['id', 'name', 'age'],
        },
        response: {
            200: {
                message: {type: 'string'},
                addedUser: User,
            },
        },
        tags: ['Crud Operations'],
    },
    handler: createOne,
}


const updateUser = {
    schema: {
        summary: 'Update user by ID',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'User ID',
                },
            },
            required: ['id'],
        },
        body: {
            description: 'Details of the user',
            type: 'object',
            properties: {
                name: {
                    type:'string',
                    description: 'User name',
                },
                age: {
                    type: 'number',
                    description: 'User age',
                },
            },
            required: ['name', 'age'],
        },
        response: {
            200: {
                message: {type: 'string'},
                updatedUser: User,
            },
        },
        tags: ['Crud Operations'],
    },
    handler: updateOne,
}


const deleteUser = {
    schema: {
        summary: 'Delete user by ID',
        params: {
            type: 'object',
            properties: {
                id: {
                    type: 'number',
                    description: 'User ID',
                },
            },
            required: ['id'],
        },
        response: {
            200: {
                message: {type: 'string'},
                deletedUser: User,
            },
        },
        tags: ['Crud Operations'],
    },
    handler: deleteOne,
}


function Routes(fastify, options, done){

    //Say hello
    fastify.get('/', helloUser)

    //Get all items
    fastify.get('/read', getUsers)
    
    //Get single item
    fastify.get('/read/:id', getUser)

    //Add item
    fastify.post('/create', addUser)

    //Delete item
    fastify.delete('/delete/:id', deleteUser)

    //Update item
    fastify.put('/update/:id', updateUser)

    done()
}


module.exports = Routes