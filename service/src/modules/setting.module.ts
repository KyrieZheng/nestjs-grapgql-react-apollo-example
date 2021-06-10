import { SettingResolver } from '../resolver/setting.resolver'
import { Module } from '@nestjs/common'
import { SettingService } from '../service/setting.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SettingEntity } from '../entity/setting.entity'
import { SettingController } from '../controller/setting.controller'

@Module({
    imports: [TypeOrmModule.forFeature([ SettingEntity ])],
    providers: [ SettingResolver, SettingService ],
    controllers: [SettingController],
})
export class SettingModule {}