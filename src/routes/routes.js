import express from 'express'
import userRouter from './userRoutes.js'
import complainRouter from './complainRouter.js'

const router = express.Router()

router.use('/users',userRouter
)
router.use('/complain',complainRouter)

export {router}