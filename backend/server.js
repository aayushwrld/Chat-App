import express from 'express'
import dotenv from 'dotenv'

import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

dotenv.config()

const port = process.env.PORT || 8080

app.use(express.json())

app.get('/', (req, res)=>{
    res.json("Backend Route Working ✅")
})

app.use('/api/auth', authRoutes)

app.listen(port, ()=>{
    connectToMongoDB()
    console.log(`Listening to ${port} 🚀!`);
})