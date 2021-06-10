import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TodoEntity } from '../entity/todo.entity'
import { Repository } from 'typeorm'
import { inputTodo } from 'src/input/todo.input'
import { TodoModule } from 'src/modules/todo.module'

@Injectable()
export class TodoService {
    constructor (
        @InjectRepository(TodoEntity)
        private readonly TodoRepository: Repository<TodoEntity>
    ) {}

    async getTodo(name: string) {
        return await this.TodoRepository.findOne({
            where: {name:name}
        })
    }

    async getTodos() {
        return await this.TodoRepository.find({
            order: {
                id: "DESC"
            }
        })
    }
    
    async createTodo (data: inputTodo): Promise<TodoEntity> {
        let todo = new TodoEntity()
        todo.name = data.name
        todo.done = data.done
        await this.TodoRepository.save(todo)
        return todo
    }

    async updateTodo (data: inputTodo) {
        await this.TodoRepository.update(data.id, { done: data.done })
        return this.getTodo(data.name)
    }

    async deleteTodo (id: number) {
        await this.TodoRepository.delete(id)
        return {code:200, msg:"删除成功"}
    }
}