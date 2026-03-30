import { Controller, Get, Post, Param, Query, Body, Put, INJE,p} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) { }

    @Get()
    getTasks() {
        return this.taskService.listAllTasks();
    }

    @Get("/busca")
    findManyTask(@Query() queryParam: any) {
        return this.taskService.listAllTasks();
    }

    @Get(":id")
    findSingleTask(@Param('id') id: string) {

    }

    @Post()
    createTask(@Body() CreateTaskDto: CreateTaskDto {
        return this.taskService.create(CreateTaskDto);
    }
    
    @Put(":id")
updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto) {
  return this.taskService.update(id, body);
}