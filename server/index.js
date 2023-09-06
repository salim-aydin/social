import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/posts', postRoutes)


const MONGO_URI = 'mongodb+srv://salim:4545@cluster0.tvns3og.mongodb.net/sosyallDB'
const PORT = process.env.PORT || 5000;

mongoose.connect(MONGO_URI)
        .then(()=> {
            app.listen(PORT,() => {
                console.log(`Server ${PORT}. portta çalışıyor, BAŞARILI`)
            })
        })
        .catch(err => {
            console.log(err.message)
        })