import app from "./app.js"
import 'dotenv/config'
import {connectDB} from './src/config/connection.js'

connectDB()
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`App is running on port ${port}`)
})