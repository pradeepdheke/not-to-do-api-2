import express from 'express'
const app = express();

const PORT = 8000;
app.use(express.json());

// mongo connection
import mongoClient from './src/config/db.js'
mongoClient();

// handlebar, ejs, ...
app.get("/", (req, res)=>{
    // res.send("<h1>My first node server</h1>");
   const person = {
       fn: "Pradeep",
       ln: "Dheke"
   };
   res.json(person);
});
//

// load routers
import taskRouter from './src/routers/taskRouter.js';
app.use("/api/v1/task", taskRouter);

app.listen(PORT, (error) => {

    if(error){
        console.log(error)
    }

    console.log(`Your server is running at http://localhost:${PORT}`);
});