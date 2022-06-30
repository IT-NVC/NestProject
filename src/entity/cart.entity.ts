import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id_Cart: number

    @Column()
    @ManyToOne(()=>User,(User)=>User.id_User)
    @JoinColumn()
    id_User:string


    @ManyToOne(()=>Product,(Product)=>Product.id_Product)
    @Column()
    id_Product: number
}
