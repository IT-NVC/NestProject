import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Account } from "./account.entity";
import { Orders } from "./order.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    @OneToMany(()=>Orders,(Orders)=>Orders.id_User)
    id_User: number

    @Column('text')
    Name: string

    @Column('text')
    Address: string

    @Column('text')
    Phone: string

    @ManyToOne(()=>Account, (Account) => Account.username)
    @Column({unique: true,default: null})
    username: string

}
