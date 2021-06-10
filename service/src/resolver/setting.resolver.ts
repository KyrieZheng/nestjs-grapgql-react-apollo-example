import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { SettingEntity } from '../entity/setting.entity'
import { CreateSettingDto } from '../dto/create-settings.dto'
import { SettingService } from '../service/setting.service'
import { inputSetting } from '../input/settings.input'

@Resolver(() => SettingEntity)
export class SettingResolver {
    constructor (private readonly SettingService: SettingService) {}

    @Query(() => [ CreateSettingDto ])
    async getSetting (@Args('key') key:string) {
        return this.SettingService.getSetting(key)
    }

    @Query(() => CreateSettingDto) 
    async getSettingOne (@Args('key') key:string) {
        return this.SettingService.getOneSetting(key)
    }

    @Mutation(() => CreateSettingDto)
    async createSetting(@Args('data') data: inputSetting) {
        return this.SettingService.createSetting(data)
    }
}