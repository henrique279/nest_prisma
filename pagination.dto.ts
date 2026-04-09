import { IsInt, IsOptional, Min, Max} from 'class-validator';
import { type } from 'class-transformer';


export class paginationDto {
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(50)
    @type(() => Number)
    limit?: number;

    @IsOptional()
    @IsInt()
    @Min(0)
    offset?: number;
}