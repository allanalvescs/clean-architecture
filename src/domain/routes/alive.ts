import { Router, Request, Response } from "express";

export class AliveRouter {
    private static instance: AliveRouter;

    static getInstance(): AliveRouter {
        if (!this.instance) {
            this.instance = new AliveRouter();
        }

        return this.instance;
    }

    getRoutes() {
        const router = Router();

        router.get("/", (_req: Request, res: Response) => {
            return res.status(200).json({ status: "Everthing is OK!" });
        });

        return router;
    }
}