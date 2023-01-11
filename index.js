import express from 'express'
import connectDatabase from './database/database.js'
import router from './routes/userRouter.js'
import Errormiddleware from './utils/Middleware/middleware.js'

const app = express()
const port = process.env.PORT || 4000
app.use("/", router)

app.listen(port, () => {
    console.log(`server is running on localhost ${port}`)
})
app.use(Errormiddleware)
connectDatabase()
