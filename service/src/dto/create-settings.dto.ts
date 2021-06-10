import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class CreateSettingDto {
    @Field() readonly ID?: string
    @Field() readonly key: string
    @Field() readonly value: string
    @Field() readonly is_front: number
}