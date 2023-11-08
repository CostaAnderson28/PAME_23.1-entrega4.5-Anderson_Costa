import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CadastroUsuarioDto } from './dto/cadastrousuario.dto';
import { UpdateUsuarioDto } from './dto/updateusuario.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Cargos } from './entities/roles.decorator';
import { Cargo } from './entities/role.enum';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('cadastro')
  create(@Body() createUsuarioDto: CadastroUsuarioDto) {
    return this.usuarioService.create(createUsuarioDto);
  }
  
  
  @Get('lista')
  findAll() {
    return this.usuarioService.findAll();
  }

  
  @UseGuards(JwtAuthGuard)
  @Get(':nomeDeUsuario')
  findOne(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    return this.usuarioService.findOne(nomeDeUsuario);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('atualizar/:id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return 'this.usuarioService.update(+id, updateUsuarioDto)';
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete('remover/:nomeDeUsuario')
  remove(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    return this.usuarioService.remove(nomeDeUsuario);
  }
}
