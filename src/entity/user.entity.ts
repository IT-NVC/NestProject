import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import { Account } from "./account.entity";
import { Orders } from "./order.entity";

@Entity()
export class User {
    @PrimaryColumn()
    @OneToMany(()=>Orders,(Orders)=>Orders.id_User)
    id_User: String

    @Column('text')
    Name: String

    @Column('text')
    Address: String

    @Column('text')
    Phone: String

    @OneToOne(()=>Account, (Account) => Account.username)
    @Column()
    username: string

}
