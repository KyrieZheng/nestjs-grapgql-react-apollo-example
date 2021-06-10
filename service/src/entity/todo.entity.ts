import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('code_todo')
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', { length:200, unique: true })
    name: string

    @Column('tinyint')
    done: boolean
}