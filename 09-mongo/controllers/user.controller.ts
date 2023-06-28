import {ExpressController} from "./controller.interface";
import {Request, Response, Router} from 'express';
import * as express from "express";

export class UserController implements ExpressController {

    readonly path: string;

    constructor() {
        this.path = '/auth';
    }

    async subscribe(req: Request, res: Response): Promise<void> {
        res.status(501).end(); // UNIMPLEMENTED
    }

    buildRoutes(): Router {
        const router = express.Router();
        router.post('/subscribe', this.subscribe.bind(this));
        return router;
    }

}