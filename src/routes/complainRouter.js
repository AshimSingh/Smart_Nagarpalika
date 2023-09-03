import express from 'express'
import {getComplain,createComplain} from '../controllers/complainController.js'
const complainRouter = express.Router()

complainRouter
    .route('/')
    .get(getComplain)
    .post(createComplain)


export default complainRouter