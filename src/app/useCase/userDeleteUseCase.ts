import { IUserRepository } from "../../domain/repository/IUserRepository";

export class UserDeleteUseCase {
    constructor(private readonly repository: IUserRepository) {}

    async execute(id: string): Promise<boolean> {
        const user = await this.repository.findById(id);

        if (!user) {
            throw new Error("User not found");
        }

        return this.repository.delete(id);
    }
}