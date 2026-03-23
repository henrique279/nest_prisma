import { Controller, Get, Post, Param, Query, Body, Put, INJE} from '@nestjs/common';
import { TasksService } from './tasks.service';

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
        return this.taskService.findOneTask(id);
    }

    @Post()
    createTask(@Body() body: any) {
        return this.taskService.createTask(body);
    }
    
    @Put(":id")  //Patch
    updateTask(@Param('id') id:string, @Body() body: any) {
        return this.taskService.update(id, body);
    }
}