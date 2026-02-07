import { Request, Response } from "express";
import { UserRepositoryInMemory } from "../../infra/repository/userRepositoryInMemory";
import { UserCreateUseCase } from "../useCase/userCreateUseCase";
import { UserListAllUseCase } from "../useCase/userListAllCase";
import { UserFindOneUseCase } from "../useCase/userFindOneUseCase";
import { UserUpdateUseCase } from "../useCase/userUpdateUseCase";
import { UserDeleteUseCase } from "../useCase/userDeleteUseCase";

export class UserController {
    private readonly repository: UserRepositoryInMemory;

    constructor() {
        this.repository = new UserRepositoryInMemory();
    }

    async create(req: Request, res: Response) {
        const userCreateUseCase = new UserCreateUseCase(this.repository);

        const user = await userCreateUseCase.execute(req.body);
        
        return res.status(201).json(user);
    }

    async getAll(_: Request, res: Response) {
        const userFindAllUseCase = new UserListAllUseCase(this.repository);

        const users = await userFindAllUseCase.execute();
        
        return res.status(200).json(users);
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;
        const userFindOneUseCase = new UserFindOneUseCase(this.repository);

        const result = await userFindOneUseCase.execute(id.toString());
        return res.status(200).json(result);
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const userUpdateUseCase = new UserUpdateUseCase(this.repository);

        const result = await userUpdateUseCase.execute({ id: id.toString(), data: req.body });
        return res.status(200).json({ message: "Usuário atualizado com sucesso" });
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const userDeleteUseCase = new UserDeleteUseCase(this.repository);
        const result = await userDeleteUseCase.execute(id.toString());

        return res.status(200).json({ message: "Usuário deletado com sucesso" });
    }
}