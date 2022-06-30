import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "../Role/role.num";
import { User } from "./user.entity";

@Entity()
export class Account{
    @PrimaryGeneratedColumn()   
    id_username: number

    @OneToMany(()=>User, (User) => User.username)
    @PrimaryColumn() 
    username: string;
    
    @Column()
    password: string;
  
    @Column({type:'enum', enum:Role,default: Role.User})
    role: Role
}

