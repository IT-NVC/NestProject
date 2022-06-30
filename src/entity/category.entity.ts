import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity()
export class Category {

    @PrimaryColumn()
    @OneToMany(()=>Product,(Product)=>Product.id_Category) 
    id_Category: string;
    
    @Column()
    NameCategory: string;
}

