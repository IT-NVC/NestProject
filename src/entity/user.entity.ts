import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Account } from "./account.entity";
import { Orders } from "./order.entity";

@Entity()
export class User {
    @PrimaryColumn()
    @OneToMany(()=>Orders,(Orders)=>Orders.id_User)
    id_User: string

    @Column('text')
    Name: string

    @Column('text')
    Address: string

    @Column('text')
    Phone: string

    @ManyToOne(()=>Account, (Account) => Account.username)
    @Column({unique: true})
    username: string

}
