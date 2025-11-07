import express from "express";
import route from "./routes/route.js"
import path from 'path';
const app = express();
const port = 5000;

// setup ejs template
app.set('views', './views');
app.set('view engine','ejs');


//setup static file
app.use(express.static(path.join(process.cwd(),'public')))
//routes 
app.use('/',route)

app.listen(port,()=>{
    console.log('Server is running at http://localhost:${port}')
})