import { Min } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuario'})
export class Usuario {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nomeDeUsuario:string;

    @Column()
    hashSenha:string;

    @Column()
    cargo:string;

    @Column()
    datDeAdmicao:Date;
}
