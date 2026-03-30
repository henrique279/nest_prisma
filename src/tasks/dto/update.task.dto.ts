import { IsString, IsOptional, IsBoolean, IsNotEmpty, MinLength } from "class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDto } from "./create.task.dto";

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
@IsOptional()
@IsBoolean()
readonly Completed?: boolean;
    
}