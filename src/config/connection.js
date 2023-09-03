import mongoose from "mongoose";

const config = {
    connectTimeoutMS: 5000,
    socketTimeoutMS: 5000,
    useUnifiedTopology: true
  }
  const connectDB = async()=>{
      try{
          // const mongod = await MongoMemoryServer.create();
          // const uri = mongod.getUri();
          // await mongoose.connect(uri,config)
           await mongoose.connect(process.env.DATABASE_URI,config)
          console.log("connection Sucessful")
      }catch(err){
          setTimeout(()=>{
              connectDB()
          },3000)
      }
      // setTimeout(()=>{
      //     connectDB()
      // },3000)
  }
export  {connectDB}