import { IsEmail, Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'cliente'})
export class Cliente {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nome:string;

    @IsEmail()
    email:string;

    @Column()
    plano:string;

    @Column()
    matricula:string;

    @Column()
    dataDeMatricula:Date;

}
