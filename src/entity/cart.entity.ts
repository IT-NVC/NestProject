import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id_Cart: number

    @Column({default: null})
    @ManyToOne(()=>User,(User)=>User.id_User)
    @JoinColumn()
    id_User:number


    @ManyToOne(()=>Product,(Product)=>Product.id_Product)
    @Column()
    id_Product: number

    @Column()
    addressIp: string
}
