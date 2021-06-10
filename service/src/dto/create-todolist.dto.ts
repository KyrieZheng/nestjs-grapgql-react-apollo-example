import {Field, ObjectType} from '@nestjs/graphql'

@ObjectType()
export class CreateTodoListDto {
    @Field({ nullable: true }) readonly id?: number
    @Field({ nullable: true }) readonly name?: string
    @Field({ nullable: true }) readonly done?: boolean
}