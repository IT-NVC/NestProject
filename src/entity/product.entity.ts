import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category.entity";
import { SubOrder } from "./suborder.entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    @OneToMany(()=>SubOrder,(SubOrder) => SubOrder.id_Product)
    id_Product: number

    @Column()
    @ManyToOne(()=>Category,(Category)=>Category.id_Category)
    id_Category: number

    @Column('text')
    NameProduct:string

    @Column()
    quantity: number

    @Column({default: 0})
    quantitySold: number

    @Column()
    price: string

    @Column()
    LinkImg: string

    @Column()
    createDate: string
}
