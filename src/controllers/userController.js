// const getUser =(req,res,next)=>{
//     res.status(200).message('heyyy')
// }

// export{
//     getUser
// }
import User from '../models/users.js'
import { errorResponse, successResponse } from '../helper/response.js';

const getUser = async (req, res, next) => {
   try{
    const data = await User.find().exec()
    if(data){
        return successResponse(res,200,'Users',data)
    }
    else{
        return errorResponse(res,204,'User not found')
    }
   }
   catch(err){
    console.log(err)
    next()
   }
}

const createUser =async(req,res,next)=>{
    try{
        /// user Validation yesbata garye naw la use client side validataion
        var {firstname,lastname,email,password} = req.body
        const user =await User.findOne({email}).exec()
        if(user){
            return res.status(200).send('user Exist')
        }
        const result = await User.create({firstname,lastname,email,password})
        if(result){
            return successResponse(res,200,'Successfully created',[result])
        }
        else{
            return errorResponse(res,200,'Cannot create user')
        }
    }
    catch(err){
        console.log(err)
        next()
    }
}

export {
    getUser,
    createUser
}