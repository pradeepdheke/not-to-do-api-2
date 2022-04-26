import express from 'express'
const router = express.Router();

import {getAllTask, getTask, insertTask} from '../models/task/TaskList.model.js'

router.get("/:_id?", async (req, res) => {
    const {_id} = req.params;
    console.log(_id);

    const result = _id? await getTask(_id) : await getAllTask();
    res.json({
        status: "success",
        message: "get method",
        result,
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