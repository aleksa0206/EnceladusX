import express,{Request, Response} from "express";
import secondRoutes from "../routes/secondRoutes.js";

export const app = express();
export const port = 3000;

app.use(express.json())

app.get("/user", (req:Request, res:Response)=> { 
    res.send("Hello, Typescript with Express")
})


app.listen(port, ()=>{ 
    console.log(`Server is running at http://localhost:${port}`);
})

app.use("/", secondRoutes)

