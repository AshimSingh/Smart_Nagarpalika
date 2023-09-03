
import Complain from '../models/complain.js'
import { errorResponse, successResponse } from '../helper/response.js';

const getComplain = async (req, res, next) => {
   try{
    const data = await Complain.find().populate({
        path: 'author',
        select: ['firstname', 'lastname'],
      })
    if(data){
        return successResponse(res,200,'Complains',data)
    }
    else{
        return errorResponse(res,204,'Complain not found')
    }
   }
   catch(err){
    console.log(err)
    next()
   }
}

const createComplain =async(req,res,next)=>{
    try{
        console.log(req.body,'hello')
        /// Complain Validation yesbata garye naw la use client side validataion
        var {author,title,complain,checked} = req.body
        const result = await Complain.create({author,title,complain,checked})
        if(result){
            var data = await result.populate({
                path: 'author',
                select: ['firstname', 'lastname'],
              })
            return successResponse(res,200,'Successfully created',[data])
        }
        else{
            return errorResponse(res,200,'Cannot create Complain')
        }
    }
    catch(err){
        console.log(err)
        next()
    }
}

export {
    getComplain,
    createComplain
}