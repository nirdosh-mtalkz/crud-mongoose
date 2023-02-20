const mongoose = require('mongoose')
module.exports = async() =>{
    try {
        const DB_OPTIONS = {
            dbName: 'Person',
        }
        mongoose.set('strictQuery', false)
        mongoose.connect('mongodb://127.0.0.1:27017', DB_OPTIONS)
        console.log('Connected')
    } catch (err) {
        console.log(err)
    }
}