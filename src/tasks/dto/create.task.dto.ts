
import { IsString, MinLength } from "class-validator";

export class CreateTaskDto {
    @IsString({ message: 'Name mus be a string'})
    @MinLength(5, {message: 'Name mus be at '})
    readonly name: string;
    @IsString({ message: 'Name mus be a string'})
    readonly description: string;
}