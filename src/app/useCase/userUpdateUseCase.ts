import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repository/IUserRepository";
import { UserUpdateDto } from "../dtos/userUpdateDto";

export class UserUpdateUseCase {
    constructor(private readonly repository: IUserRepository) {}

    async execute({ id, data }: { id: string; data: UserUpdateDto }): Promise<boolean> {
        const user = await this.repository.findById(id);

        if (!user) {
            throw new Error("Usuário não encontrado");
        };

        const updateUser = new User(id, data.name, data.email, user.password);

        return this.repository.update(id, updateUser);
    }
}