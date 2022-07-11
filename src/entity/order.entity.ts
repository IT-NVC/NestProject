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
    id_User: number;

    @Column()
    AddressShip: string

    @Column({default: false})
    statusOrder: boolean
}

