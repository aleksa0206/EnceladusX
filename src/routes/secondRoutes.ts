import express, { Request, Response, Router } from 'express';
import { createUser, getUsers } from '../controllers/userControllers.js';
const router = express.Router()

router.get("/", (req, res) => { 
    res.send({data: "Here is your data"});
});

router.post("/", (req, res) => { 
    res.send({data: "User Created"})
}); 

router.put("/", (req, res) => { 
    res.send({data: "User Updated"})
})

router.delete("/", (req, res) => { 
    res.send({data: "User delted :("})
})

router.get('/',getUsers);
router.post('/',createUser)

module.exports = router;

export default router
