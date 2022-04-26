import express from 'express'
const router = express.Router();

import {deleteTask, getAllTask, getTask, insertTask, updateTask} from '../models/task/TaskList.model.js'

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
//updating task
router.patch("/", async (req, res) => {
    try {
        const result = await updateTask(req.body);
        console.log(result);

        res.json({
            status: "success",
            message: "the task has been updated",
            result,
        });
    } catch(error) {
        res.json({
            status: "error",
            message: error.message
        })
    }
})

router.delete("/:_id?", async (req, res) => {
    const {_id} = req.params;
    console.log(_id);

    const result = await deleteTask(_id);
    res.json({
        status: "success",
        message: "delete method",
        result,
    });
    
});

export default router;