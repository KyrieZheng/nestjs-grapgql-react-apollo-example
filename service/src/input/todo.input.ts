import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class inputTodo {
    @Field()
    readonly id?: number
    @Field()
    readonly name: string
    @Field()
    readonly done: boolean
}