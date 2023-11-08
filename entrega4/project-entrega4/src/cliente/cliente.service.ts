import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(@InjectRepository(Cliente) private clinteRepository: Repository<Cliente>){}

  create(createClienteDto: CreateClienteDto) {
    const newClient = this.clinteRepository.create({...createClienteDto})
    this.clinteRepository.save(newClient);
  }

  findAll() {
    return this.clinteRepository.find();
  }

  findOne(nome: string) {
    return this.clinteRepository.findOneBy({nome});
  }

  update(nome: string, updateClienteDto: UpdateClienteDto) {
    this.clinteRepository.update(
      {nome}, 
      {...updateClienteDto}
    )
    return 'Cliente atualizado.'
  }

  remove(nome: string) {
    this.clinteRepository.delete({nome})
    return `O cliente de id: #${nome} foi removido.`;
  }
}
