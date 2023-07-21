
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'usuario'})
export class Usuario {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name: 'username'})
    nomeDeUsuario:string;

    @Column({name: 'password'})
    hashSenha:string;

    @Column()
    cargo:string;

    @Column()
    datDeAdmicao:Date;
}
