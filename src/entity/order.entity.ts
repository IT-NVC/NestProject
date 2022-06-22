import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { SubOrder } from "./suborder.entity";
import { User } from "./user.entity";


@Entity()
export class Orders {

    @PrimaryColumn()
    @OneToMany(()=>SubOrder,(SubOrder)=>SubOrder.id_Order)
    id_Order: String;

    @Column()
    @ManyToOne(()=>User, (User) =>User.id_User)
    id_User: String;

    @Column()
    amount: number

    @Column()
    totalMoney: String
    static id_User: any;

}

