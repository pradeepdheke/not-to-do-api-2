import express from 'express'
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "get method",
    });
});

router.post("", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        message: "post method",
        data,
    });
});

router.delete("", (req, res) => {
    res.json({
        message: "delete method",
    });
    
});

export default router;