import express from 'express'
const router = express.Router();

import {insertTask} from '../models/task/TaskList.model.js'

router.get("/", (req, res) => {
    res.json({
        message: "get method",
    });
});

router.post("", async (req, res) => {
    const data = req.body;
    console.log(data);

    // send data to database
    const result = await insertTask(data);
    res.json({
        message: "post method",
        result,
    });
});

router.delete("", (req, res) => {
    res.json({
        message: "delete method",
    });
    
});

export default router;