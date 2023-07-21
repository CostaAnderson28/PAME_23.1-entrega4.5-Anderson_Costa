import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto{
    @IsNotEmpty()
    @IsString()
    nomeDeUsuario:string

    @IsNotEmpty()
    @IsString()
    senha:string

}