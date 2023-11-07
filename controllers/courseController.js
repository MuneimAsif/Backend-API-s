// const { SendData } = require("../helpers/sendData");
const CourseModel = require('../models/courseModel')
// const courses = [
//   {
//     id: shortName,
//     shortName: "Graphic Designing",
//     shortName: "Graphic Design",
//     fee: 1500,
//   },
//   {
//     id: 2,
//     name: "MERN Stack Development",
//     shortName: "MERN Stack",
//     fee: 2500,
//   },
//   {
//     id: 3,
//     name: "Python Programming",
//     shortName: "Python",
//     fee: 1200,
//   },
//   {
//     id: 4,
//     name: "Web Development",
//     shortName: "Web Dev",
//     fee: 2000,
//   },
//   {
//     id: 5,
//     name: "Java Programming",
//     shortName: "Java",
//     fee: 1800,
//   },
//   {
//     id: 6,
//     name: "Data Science",
//     shortName: "Data Science",
//     fee: 3000,
//   },
//   {
//     id: 7,
//     name: "iOS App Development",
//     shortName: "iOS Dev",
//     fee: 2800,
//   },
//   {
//     id: 8,
//     name: "Android App Development",
//     shortName: "Android Dev",
//     fee: 2700,
//   },
//   {
//     id: 9,
//     name: "Cloud Computing",
//     shortName: "Cloud Computing",
//     fee: 2200,
//   },
//   {
//     id: 10,
//     name: "Network Security",
//     shortName: "Net Security",
//     fee: 2600,
//   },
//   {
//     id: 11,
//     name: "Full Stack Web Development",
//     shortName: "Full Stack Dev",
//     fee: 2300,
//   },
//   // Add more courses as needed
// ];

const CourseController = {
  get: async (req, res) => {
    try {
      const result = await CourseModel.find()
      if(result){
        res.send({ isSuccessfull: true, message: 'Data Getted Successfully', data: result })
      }else{
        res.send({ isSuccessfull: true, message: 'Data Not Found', data: err })
      }
      

    } catch (e) {
      res.send({
        isSuccessfull:false,
        message:'Internal Server Error',
        data:e
      })
    }
  },
  getById: async (req, res) => {
    try {
       const id = req.params.id
    const result = await  CourseModel.findById(id)
    if(result){
      res.send({isSuccessfull:true,message:"Data Founded",data:result})
    }else{
      res.send({isSuccessfull:true,message:"Data Not Found",data:null})
    }
    
  } catch (e) {
    res.send({isSuccessfull:false,message:"Internal Server Error",data:e})
    }
  },
  post: async (req, res) => {
    try {
      let obj = req.body
      const { name, shortName, fee } = obj
      const errorArray = []
      if (!name) {
        errorArray.push('Required Name')
      }
      if (!shortName) {
        errorArray.push('Required Name')
      }
      if (errorArray.length > 0) {
        res.status(400).send({
          isSuccessfull:false,
          message:'Validation Error',
          data:errorArray

        })
      } else {
        const Course = new CourseModel(obj)
        const result = await Course.save()
        if(result){
            res.status(200).send({ isSuccessfull: true, message: 'Data Posted Successfully', data: result })
          }else{
          res.status(400).send({ isSuccessfull: false, message: 'Bad Request (Data Not Saved)', data: null })
        }
      }
    } catch (e) {
      res.send({
        isSuccessfull:false,
        message:'Internal Server Error',
        data:e
      })
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id
      // const index = courses.findIndex(x => x.id == id)
      const result = await CourseModel.findByIdAndDelete(id)
      if(result){
        res.send({
          isSuccessfull:true,
          message:'Data Deleted',
          data:result
        })
      }else{
        res.send({
          isSuccessfull:true,
          message:'Data Not Found',
          data:result
        })

      }
    } catch (e) {
      res.send({
        isSuccessfull:false,
        message:"Internal Server Error",
        data:e
      })
    }

    
    // if (result) {
    //   const deletedObj = courses.splice(index, 1)[0]
    //   res.send({
    //     isSuccessful: true,
    //     message: 'Data Deleted',
    //     data: courses
    //   })
    //   console.log(deletedObj);
    // } else {
    //   res.send(SendData(true, 'Data Not Found', courses))
    // }


  },
  edit: async (req, res) => {
    try {
      const id = req.params.id
      const obj = req.body
      const { name, shortName, fee } = obj
      const result = await CourseModel.findByIdAndUpdate(id,{name:obj.name,shortName:obj.shortName,fee:obj.fee ?? ""})
      if(result){
        res.send({
          isSuccessful:true,
          message:'Data Updated Successfully',
          data:result
        })
      }else{
        res.send({
          isSuccessful:false,
          message:"Bad Request (Data hasn't updated)",
          data:null
        })
      }
    } catch (e) {
      res.send({
        isSuccessful:false,
        message:"Internal Server Error",
        data:e
      })
    }
    // const index = courses.findIndex(x => x.id == id)
    if (index !== -1) {
      // courses.find(x=>x.id == id)
      // courses.splice(index,1)[0]
      // obj.id == courses.length + 1
      const Name = courses[index].name = name
      const ShortName = courses[index].shortName = shortName
      const Fee = courses[index].fee = fee

      if (Name && ShortName && Fee) {
        res.send({
          isSuccessful: true,
          message: 'Data Updated',
          data: obj,
          allData: courses
        })
      } else {
        res.send({
          isSuccessful: true,
          message: 'Data Already Exists',
          data: obj
        })
      }


    }

  },
}

module.exports = CourseController