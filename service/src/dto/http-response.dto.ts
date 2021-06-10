import {Field, ObjectType} from '@nestjs/graphql'

@ObjectType()
export class HttpResponse {
    @Field() readonly code: number
    @Field() readonly msg: string
}