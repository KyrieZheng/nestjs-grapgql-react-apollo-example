import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { SettingEntity } from '../entity/setting.entity'
import { Repository } from 'typeorm'
import { inputSetting } from '../input/settings.input'

@Injectable()
export class SettingService {
    constructor (
        @InjectRepository(SettingEntity)
        private readonly SettingRepository: Repository<SettingEntity>
    ) {}

    async getSetting (name:string): Promise<SettingEntity[]> {
        let result: SettingEntity[] | undefined =  await this.SettingRepository.find({
            where: {key:name}
        })

        return result.map((item: SettingEntity) => {
            return item
        })
    }

    async getOneSetting(id: string) {
        return await this.SettingRepository.findOne(id)
    }
    
    async createSetting (data: inputSetting): Promise<SettingEntity> {
        let setting = new SettingEntity()
        setting.key = data.key
        setting.value = data.value
        setting.is_front = data.is_front
        await this.SettingRepository.save(setting)
        return setting
    }
}