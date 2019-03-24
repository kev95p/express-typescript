import express from "express";
import {Request,NextFunction,Response} from "express";
import * as bodyParser from "body-parser";
import path from "path";
import createError from "http-errors";
import { Routes } from "./routes";
import morgan from "morgan";

class App {

    public app: express.Application;
    public routes = new Routes();

    constructor(){
        this.app = express();
        this.routes.routes(this.app);
        this.setup();
    }

    private setup(){
        //logger
        this.app.use(morgan("dev"));
        //view engine
        this.app.set('views', path.join(__dirname, 'views'));    
        this.app.set('view engine', 'pug');
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        //errors 
        this.app.use(this.error404);
        this.app.use(this.errorHandler);
    }

    private error404(req:Request, res:Response, next:NextFunction) {
        next(createError(404));
    }

    private errorHandler(err:any, req:Request, res:Response, next:NextFunction) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
      
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    }
}

export default new App().app;