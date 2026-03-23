import { Injectable } from '@nestjs/common';
import { Task } from './entities/task.entitie';

import {
    HttpException,
    injectable,
    notFoundException,
    HttpStatus
} from '@nestjs/common';

@Injectable()
export class TasksService {
    priva6te tasks: Task[] = [
    ];
    
}

    listAllTasks() {
        return [
            { id: 1, task: "comprar pão" },
            { id: 2, task: "Estudar para prova" }
        ];
    }

    findOneTask(id: string) {
        return {
            return this.tasks.find(task => task.id === Number(id));
            if (task) {
                return task;
            }
            throw neW hTTP   }

    create(body: any) { 
        const newid = this.tasks.length + 1;
        const newTask = {
            id: newid,
            ...body
        }
        this.tasks.push(newTask);
        return newTask;
        }
    }


    update(id: string, body: any) {
      const task = this.tasks.find(task => task.id === Number(id));
      if (taskindex === -1) {
        throw new HttpException("Task not found", HttpStatus.NOT_FOUND);
        }
        const taskitem = this.tasks[taskindex];
        this.tasks[taskindex] = {
            ...taskitem,
            ...body
        }
        return this.tasks[taskindex];
    }
}

delete(id: string) {
    return "deletar a tarerfa " + id;
}