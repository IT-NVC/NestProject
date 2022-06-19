import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Orders } from "./order.entity";
import { Product } from "./product.entity";


@Entity()
export class SubOrder{

    @PrimaryColumn()
    @ManyToOne(()=>Orders,(Orders) => Orders.id_Order)
    id_Order: number

    @PrimaryColumn()
    @ManyToOne(()=>Product,(Product) => Product.id_Product)
    id_Product: number

    @Column()
    amount: number

    @Column()
    totalMoney: number
}