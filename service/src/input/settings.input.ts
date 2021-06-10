import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class inputSetting {
    @Field()
    readonly key: string

    @Field()
    readonly value: string

    @Field()
    readonly is_front: number
}