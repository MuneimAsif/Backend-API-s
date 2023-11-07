const mongoose = require('mongoose')
const CourseSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    shortName:{
        type:String,
        required:true
    },
    fee:{
        type:Number,
    },
},{timeStamp: true})
const CourseModel = mongoose.model('courses',CourseSchema)
module.exports = CourseModel;