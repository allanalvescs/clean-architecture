import { Router } from "express";
import { UserController } from "../../app/controllers/userController";

export class UsersRouter {
    private static instance: UsersRouter;

    static getInstance(): UsersRouter {
        if (!this.instance) {
            this.instance = new UsersRouter();
        }

        return this.instance;
    }
    
    getRoutes() {
        const router = Router();
        const controller = new UserController();

        router.post("/", (req, res) => controller.create(req, res));
        router.get("/", (req, res) => controller.getAll(req, res));
        router.get("/:id", (req, res) => controller.getById(req, res));
        router.put("/:id", (req, res) => controller.update(req, res));
        router.delete("/:id", (req, res) => controller.delete(req, res));
        
        return router;
    }
}