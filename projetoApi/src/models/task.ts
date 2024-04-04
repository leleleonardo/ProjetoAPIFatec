import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import User from "./user.entity"

@Entity ()
export default class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column ()
    title!: string

    @Column ({default: false})
    completed!: boolean
   // user: any
        
    @Column({name: 'user_id', nullable: true})
    userId!: number

    @ManyToOne(() => User, user => user.tasks)
    user!: User
}