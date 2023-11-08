import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('cadastro')
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('lista')
  findAll() {
    return this.clienteService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('cliente/:nome')
  findOne(@Param('nome') nome: string) {
    return this.clienteService.findOne(nome);
  }
  @UseGuards(JwtAuthGuard)
  @Patch('atlualizar/:nome')
  update(@Param('nome') nome: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(nome, updateClienteDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('remover/:nome')
  remove(@Param('nome') nome: string) {
    return this.clienteService.remove(nome);
  }
}
