// const fs = require('fs')
// It reads data of file "app.txt"
// fs.readFile('./app.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Data Readed');
//     }
// })
// It overwrites the data of file "app.txt"

// fs.writeFile('./app.txt','Hello World',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Data Updated');
//     }
// })

// It adds data to file "app.txt" without removing previous data
// fs.appendFile('./app.txt','Muneim',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('Data Appended');
//     }
// })

// It gives the path of current directory 
// console.log(__dirname);
// It gives the path of current directory with current file name 
// console.log(__filename);

// Creating A Server By Using Node JS ==============================

// const http = require('http')
// const courses = ['HTML','CSS','JS']

// const server = http.createServer((req,res)=>{
//     if(req.url == '/courses'){
//      console.log('courses request');
//      res.write(JSON.stringify(courses))
//     }
// res.end()
// })
// server.listen(3000)

// Express JS Started ============================

// Creating A Server By Using Express JS And Calling APIS of GET,PUSH,PUT,DELETE ==============================
// In Node JS,"res.write(JSON.Stringify(Array Name)) In Express JS,res.send(Array Name)"

// const express = require('express')
// const courses = ['HTML','CSS','JS']
// const App = express()
// App.get('/courses',(req,res)=>{
//     if(req.url == '/courses'){
//         res.send(courses)
//     }
// })


// const courses = ['HTML','CSS','JS','SQL']

// const express = require('express')

// const App = express()

// App.get('/courses',(req,res)=>{
//     if(req.url == '/courses'){
//         res.send(courses)
//     }
// })
// App.get('/courses/HTML',(req,res)=>{
//     if(req.url == '/courses/HTML'){
//         res.send(courses[0])
//     }
// })
// App.get('/courses/CSS',(req,res)=>{
//     if(req.url == '/courses/CSS'){
//         res.send(courses[1])
//     }
// })
// App.get('/courses/JS',(req,res)=>{
//     if(req.url == '/courses/JS'){
//         res.send(courses[2])
//     }
// })
// App.get('/courses/SQL',(req,res)=>{
//     if(req.url == '/courses/SQL'){
//         res.send(courses[3])
//     }
// })



// App.listen(5000)


const express = require("express")
const mongoose = require('mongoose')
const courseRoute = require('./routes/courseRoute')
const App = express()
require('dotenv').config()
App.use(express.json())
App.use('/courses',courseRoute)

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    App.listen(process.env.PORT,()=>{console.log(`Database Is Connected And Server Is Listening At http://localhost:${process.env.PORT}`)})
}).catch((err)=>{
    console.log(`===> ${err}`);
})

