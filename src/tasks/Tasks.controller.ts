import { Controller, Get} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')

export class TasksController {
    constructor(private readonly taskService: TasksService) { }
    @Get()
    getTasks() {
        return this.taskService.listAllTasks()
    }

    @Get("/busca")
    findMnayTask(@query queryParam: any) {
        return this.taskService.listAllTasks()
    }

    @Get(":id")
    findsingleTask(@Param('id') id: string) {
        return this.taskService.findOneTask(id)
    }

}