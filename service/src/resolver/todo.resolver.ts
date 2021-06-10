import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TodoEntity } from '../entity/todo.entity'
import { CreateTodoListDto } from '../dto/create-todolist.dto'
import { TodoService } from '../service/todo.service'
import { inputTodo } from '../input/todo.input'
import { HttpResponse } from 'src/dto/http-response.dto'

@Resolver(() => TodoEntity)
export class TodoResolver {
    constructor (private readonly TodoService: TodoService) {}

    @Query(() => CreateTodoListDto, { nullable: true }) 
    async getTodo (@Args('name') name:string) {
        return await this.TodoService.getTodo(name)
    }

    @Query(() => [CreateTodoListDto]) 
    async getTodos () {
        return this.TodoService.getTodos()
    }

    @Mutation(() => CreateTodoListDto)
    async createTodo(@Args('data') data: inputTodo) {
        return this.TodoService.createTodo(data)
    }

    @Mutation(() => CreateTodoListDto)
    async updateTodo (@Args('data') data: inputTodo) {
        return this.TodoService.updateTodo(data)
    }

    @Mutation(() => HttpResponse)
    async deleteTodo(@Args('id') id: number) {
        return this.TodoService.deleteTodo(id)
    }
}