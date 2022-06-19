import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { SubOrder } from "./suborder.entity";
import { User } from "./user.entity";


@Entity()
export class Orders {

    @PrimaryGeneratedColumn()
    @OneToMany(()=>SubOrder,(SubOrder)=>SubOrder.id_Order)
    id_Order: number;

    @Column()
    @ManyToOne(()=>User, (User) =>User.id_User)
    id_User: String;

    @Column()
    DateOrder: Date
    static id_User: any;

}

