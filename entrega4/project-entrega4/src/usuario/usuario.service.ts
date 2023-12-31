import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CadastroUsuarioDto} from './dto/cadastrousuario.dto';
import { UpdateUsuarioDto } from './dto/updateusuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { Cargo } from './entities/role.enum';

@Injectable()
export class UsuarioService {
  constructor(@InjectRepository(Usuario) private usuarioRepository:Repository<Usuario>){}

  findAll(){
    return this.usuarioRepository.find()
  }

  remove(nomeDeUsuario:string){
    this.usuarioRepository.delete({nomeDeUsuario: nomeDeUsuario})
    return 'usuario deletado'
  }


  findOne(nomeDeUsuario:string){
    return this.buscaPorUsuario(nomeDeUsuario)
  }

  async create(cadastroUsuarioDto: CadastroUsuarioDto) {
    const hashedPass = await this.encrypt(cadastroUsuarioDto.senha);
    const role = await cadastroUsuarioDto.cargo
    if(!Cargo[role]){
      throw new HttpException({massege: 'cargo inexistente'}, HttpStatus.BAD_REQUEST)
    }
    delete cadastroUsuarioDto.cargo
    const newUsuario = this.usuarioRepository.create({
      hashSenha: hashedPass,
      ...cadastroUsuarioDto,
      datDeAdmicao: new Date,
      cargo: Cargo[role]
    })
    this.usuarioRepository.save(newUsuario)
    return 'Usuario criado.'
  }

  async encrypt(password: string): Promise<string> {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password, salt)
  }

  async buscaPorUsuario(username:string): Promise<Usuario|undefined> {
    return this.usuarioRepository.findOneBy({nomeDeUsuario: username})
    
  }
}

