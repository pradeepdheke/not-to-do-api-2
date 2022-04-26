import TaskListSchema from './TaskList.schema.js';

// new entry

export const insertTask = (obj) => {
    return TaskListSchema(obj).save();
}


// read all data

// delete data