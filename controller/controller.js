const personModel = require('../models/model')


const hello = async (req, res) => {
    res.send('Hello World!!')
}

const read = async (req, res) => {
    try {
        const result = await personModel.find()
        res.send(result)
    } catch (error) {
        console.log(error)
    }
}

const readOne = async (req, res) => {
    try {
        const { id } = req.params
        const result = await personModel.findOne({ id })
        res.send({ message: 'User Found Successfully', result: result });
    } catch (error) {
        console.log(error)
    }
}

const createOne = async (req, res) => {
    try {
        const { id, name, age } = req.body
        const item = new personModel({
            id,
            name,
            age,
        })
        await item.save()
        const result = await personModel.findOne({ id })
        res.send({ message: 'User added Successfully', addedUser: result })
    } catch (error) {
        console.log(error)
    }
}

const updateOne = async (req, res) => {
    try {
        const { id } = req.params
        const { name, age } = req.body
        await personModel.findOneAndUpdate({ id }, { name, age })
        const result = await personModel.findOne({ id })
        res.send({ message: 'User Updated Successfully', updatedUser: result })
    } catch (error) {
        console.log(error)
    }
}

const deleteOne = async (req, res) => {
    try {
        const { id } = req.params
        const result = await personModel.findOne({ id })
        await personModel.findOneAndDelete({ id })
        res.send({ message: 'User Deleted Successfully', deletedUser: result })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    hello,
    read,
    readOne,
    createOne,
    deleteOne,
    updateOne
}