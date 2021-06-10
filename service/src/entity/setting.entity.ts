import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('code_setting')
export class SettingEntity {
    @PrimaryGeneratedColumn()
    ID: string

    @Column('varchar', { length:200, unique: true })
    key: string

    @Column('text')
    value: string

    @Column('numeric')
    is_front: number
}