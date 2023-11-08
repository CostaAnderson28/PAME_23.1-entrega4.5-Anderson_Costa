import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Financeiro {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    mes_ano:string;

    @Column()
    clientesMatriculados:number;

    @Column()
    informacoesPertinentesParaBalanco:string;
}
