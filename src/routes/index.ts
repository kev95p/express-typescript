import { UserController } from './user-controller';
import {Request, Response,Application} from "express";

export class Routes {

    public userController = new UserController();

    public routes(app:Application):void{
        app.route("/").get(this.index)

        //user endpoints

        app.route("/api/users")
            .get(this.userController.getAll)
            .post(this.userController.save);
        app.route("/api/users/:id")
            .get(this.userController.getOne)
            .put(this.userController.update)
            .delete(this.userController.delete)
    }
    private index(req:Request,res:Response){
        res.send("template api");
    }
}