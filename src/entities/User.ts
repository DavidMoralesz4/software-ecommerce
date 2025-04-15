import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    declare id: number

    @Column({ unique: true })
    declare userName: string

    @Column()
    declare firstName: string

    @Column()
    declare lastName: string

    @Column({ unique: true })
    declare email: string

    @Column()
    declare password: string
}