import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { SubOrder } from "./suborder.entity";
import { User } from "./user.entity";


@Entity()
export class Orders {

    @PrimaryColumn()
    @OneToMany(()=>SubOrder,(SubOrder)=>SubOrder.id_Order)
    id_Order: string;

    @Column()
    @ManyToOne(()=>User, (User) =>User.id_User)
    id_User: string;

    @Column()
    amount: number

    @Column()
    totalMoney: string
}

