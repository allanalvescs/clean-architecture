import { UserCreateDto } from "../../app/dtos/userCreateDto";
import { UserUpdateDto } from "../../app/dtos/userUpdateDto";
import { User } from "../entities/User";

export interface IUserRepository {
    save(user: UserCreateDto): Promise<User>;
    findAll(): Promise<User[]>;
    findById(id: string): Promise<User | null>;
    findByEmail(email: string): Promise<User | null>;
    update(id: string, user: UserUpdateDto): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}