import express from "express";
import cors from "cors";
import blogsRoutes from './routes/blogs.js'

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{
    res.send('Hello from homepage')
})

app.use('/blogs', blogsRoutes)

app.listen(PORT, (req,res) =>{ console.log(`Server is started and listenting on port ${PORT}`)})

