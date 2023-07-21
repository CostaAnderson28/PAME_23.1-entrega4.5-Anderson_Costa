import { HttpStatus, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt'
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usuarioService : UsuarioService,
    private jwtService : JwtService){}
    
  async validarUsuario(loginDto: LoginDto){
    const {nomeDeUsuario, senha} = loginDto
    const usuario = await this.usuarioService.buscaPorUsuario(nomeDeUsuario);
    if(!usuario){
      throw new NotFoundException('Usuario "'+nomeDeUsuario+'" não encontrado!');
    }
    const vrf_senha = await bcrypt.compare(
      senha, 
      usuario.hashSenha
    );
    if(vrf_senha){
      const {hashSenha, ...result} = usuario;
      return result; 
    }else{
      throw new UnauthorizedException({message: 'senha invalida'})
    } 
  }

  async login(loginDto : LoginDto){
    const usuario = await this.usuarioService.buscaPorUsuario(loginDto.nomeDeUsuario)
    const payload = { sub: usuario.id, username: usuario.nomeDeUsuario };
    return{
      access_token: await this.jwtService.signAsync(payload)
    }
  }

  
}
