import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CadastroUsuarioDto } from './dto/cadastrousuario.dto';
import { UpdateUsuarioDto } from './dto/updateusuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('cadastro')
  create(@Body() createUsuarioDto: CadastroUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(':nomeDeUsuario')
  findOne(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    return this.usuarioService.findOne(nomeDeUsuario);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return 'this.usuarioService.update(+id, updateUsuarioDto)';
  }

  @Delete(':nomeDeUsuario')
  remove(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    return this.usuarioService.remove(nomeDeUsuario);
  }
}
