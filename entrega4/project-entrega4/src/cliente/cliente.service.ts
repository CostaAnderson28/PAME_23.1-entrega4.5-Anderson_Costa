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

  findOne(id: number) {
    return this.clinteRepository.findOneBy({id});
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    this.clinteRepository.update(
      {id}, 
      {...updateClienteDto}
    )
    return 'Cliente atualizado.'
  }

  remove(id: number) {
    this.clinteRepository.delete({id})
    return `O cliente de id: #${id} foi removido.`;
  }
}
