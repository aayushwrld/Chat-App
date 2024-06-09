import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import path from 'path'

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();

dotenv.config({ path: path.resolve('../.env') });

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.json("Backend Route Working ✅");
})

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(port, ()=>{
    connectToMongoDB();
    console.log(`Listening to ${port} 🚀!`);
})