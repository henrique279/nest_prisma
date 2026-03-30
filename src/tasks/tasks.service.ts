import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entitie';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';
import { DatabaseService } from 'src/database/database.service';

import {
    HttpException,
    injectable,
    notFoundException,
    HttpStatus
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create.task.dto';
import { UpdateTaskDto } from './dto/update.task.dto';

@Injectable()
export class TasksService {
constructor(private readonly databaseService: DatabaseService) { }

async listAllTasks() {
  try {
    const allTasks = await this.databaseService.task.findMany();
    return allTasks;
  } catch (error) {
    throw new HttpException(
      "Erro ao listar as tarefas",
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}

    
}

    listAllTasks() {
        const tasks = this.databaseService.getTasks();
        return tasks;
          
    }

    findOneTask(id: string) {
        return {
            return this.tasks.find(task => task.id === Number(id));
            if (task) {
                return task;
            }
            throw neW hTTP   }

    create(CreateTaskDto: CreateTaskDto) { 
       
    }

    async update(id: Number, UpdateTaskDto: UpdateTaskDto) {
        const task = this.databaseService.getTaskById(id);
        if (!task) 
        }
     

delete(id: string) {

    const taskindex = this.task.findindex(task => task.id === Number(id));
    if (taskindex === -1) {
        throw new HttpException("tarefas não encotradas", HttpStatus.NOT_FOUND);
    }
    this.task.splice(taskindex, 1)
    return "deletar a tarerfa " + id;
}