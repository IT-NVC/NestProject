import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    @OneToMany(()=>Product,(Product)=>Product.id_Category) 
    id_Category: number;
    
    @Column()
    NameCategory: string;
}

