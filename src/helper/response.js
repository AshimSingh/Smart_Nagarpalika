export const successResponse=(res,statusCode,message,data)=>{
    var statusCode = statusCode || 500
    var data = data || []
    return res.status(statusCode).send({'message':message,data:data})
}
export const errorResponse =(res,statusCode,message)=>{
    var statusCode = statusCode || 500
    var message = message || 'Internal Server Error'
    return res.status(statusCode).send({'message':message})
}