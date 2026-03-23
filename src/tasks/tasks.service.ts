import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
    listAllTasks() {
        return [
            {id: 1, task: "comprar pão"}
            {id: 2, task: "Estudar para prova"}
        ]
    }

    findOneTask(id: number) {
        return { id: 1, task: "Comprar pão"}
    }
}
