import { Strategy } from "passport-local";
import { PassportModule, PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

PassportModule.register({session:true})
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private authService: AuthService){
        super({
            usernameField: 'nomeDeUsuario',
            passwordField: 'senha'
        });
    }
    async validate(nomeDeUsuario: string, senha: string): Promise<any>{
        const usuario = await this.authService.validarUsuario({
            nomeDeUsuario,
            senha
            })
        if(!usuario){
            throw new UnauthorizedException();
        }
        return usuario;
    }
}