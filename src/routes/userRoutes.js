import express from 'express'
import {getUser,createUser} from '../controllers/userController.js'
const userRouter = express.Router()

userRouter
    .route('/')
    .get(getUser)
    .post(createUser)
    // // (req,res,next)=>{
    //     res.status(200).send('heloa aedfa')
    // // }

export default userRouter