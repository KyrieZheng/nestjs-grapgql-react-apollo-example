//import { SettingResolver } from '../resolver/setting.resolver'
import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TodoEntity } from 'src/entity/todo.entity'
import { TodoResolver } from 'src/resolver/todo.resolver'
import { TodoService } from 'src/service/todo.service'

@Module({
    imports: [TypeOrmModule.forFeature([ TodoEntity ])],
    providers: [ TodoService, TodoResolver ],
    controllers: [],
})
export class TodoModule {}