import { UserCreateDto } from "./userCreateDto";

export type UserUpdateDto = Omit<UserCreateDto, "password">;