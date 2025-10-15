import express, { Request, Response, Router } from 'express';
const router = express.Router()

router.get("/users", (req, res) => { 
    res.send({data: "Here is your data"});
});

router.post("/users", (req, res) => { 
    res.send({data: "User Created"})
}); 

router.put("/users", (req, res) => { 
    res.send({data: "User Updated"})
})

router.delete("/users", (req, res) => { 
    res.send({data: "User delted :("})
})

module.exports = router;