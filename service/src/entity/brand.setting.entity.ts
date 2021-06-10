import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('brand_config')
export class BrandConfigEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column('numeric')
    host_id: number

    @Column('varchar', { length:200, unique: true })
    brnad_name: string

    @Column('text')
    value: string

    @Column('numeric')
    is_front: number
}