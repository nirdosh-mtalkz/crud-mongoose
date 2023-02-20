const mongoose = require('mongoose')


const personSchema  = new mongoose.Schema({
    id: {type:Number, required:true},
    name: {type:String, required:true, trim:true},
    age: {type:Number, required:true},
})

const personModel = mongoose.model("Person",personSchema, "person")

module.exports = personModel