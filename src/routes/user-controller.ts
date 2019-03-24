import { Request, Response } from 'express';

export class UserController{
    public getAll(req:Request,res:Response){
        req.params()
        res.send("get all");
    }

    public getOne(req:Request,res:Response){
        res.send("get one");
    }

    public save(req:Request,res:Response){
        res.send("save user");
    }

    public update(req:Request,res:Response){
        res.send("update user");
    }

    public delete(req:Request,res:Response){
        res.send("delete user");
    }
}