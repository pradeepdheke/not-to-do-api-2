const express = require('express');
const res = require('express/lib/response');
const app = express();

const PORT = 8000;

// handlebar, ejs, ...
app.get("/", (req, res)=>{
    // res.send("<h1>My first node server</h1>");
   const person = {
       fn: "Pradeep",
       ln: "Dheke"
   };
   res.json(person);
});

// task api
const taskFunc = (req, res) => {
    
    res.json({
        message: "Hello world"
    });
}
app.use("/api.v1/task", taskFunc)


app.listen(PORT, (error) => {

    if(error){
        console.log(error)
    }

    console.log(`Your server is running at http://localhost:${PORT}`);
});