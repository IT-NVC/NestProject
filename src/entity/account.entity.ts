import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Account{
  
    @OneToOne(()=>User, (User) => User.username)
    @PrimaryColumn() 
    username: string;
    
    @Column()
    password: string;
  
    @Column({default: false})
    isAdmin: boolean;
    static username: any;
}

