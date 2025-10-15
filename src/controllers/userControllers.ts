import {Request, Response} from 'express';


// we are accessing the table users from the database
let users:{id: number, name:string}[] = [
    {id:1, name:'Jack'}
]

export const getUsers = (req: Request, res:Response) => { 
    res.status(200).json(users)
}
export const createUser = (req: Request, res: Response) => { 
    const { id, name} = req.body; 

    if(!id || !name) { 
        return res.status(400).json({message:"ID And Name is required"});
    }

    // add the info to the database

    users.push({id, name})
    res.status(201).json({message:"User created successfully", user:{id, name}})
}