import { Injectable } from '@nestjs/common';
import { CreateFinanceiroDto } from './dto/create-finaceiro.dto';
import { UpdateFinanceiroDto } from './dto/update-finaceiro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Financeiro } from './entities/finaceiro.entity';
import { Repository } from 'typeorm';
import { Cliente } from 'src/cliente/entities/cliente.entity';


@Injectable()
export class FinanceiroService {
  constructor(
    @InjectRepository(Financeiro) private financeiroRepository:Repository<Financeiro>,
    @InjectRepository(Cliente) private clinteRepository: Repository<Cliente>){}
  async create(createFinaceiroDto: CreateFinanceiroDto) {
    const matriculados = await this.clinteRepository.countBy({matricula:'ativa'})
    this.financeiroRepository.create({
      ...createFinaceiroDto,
      clientesMatriculados: matriculados
    });
  }

  findAll() {
    return this.financeiroRepository.find();
  }

  findOne(data: string) {
    return this.buscaPorData(data);
  }

  async update(data: string, updateFinaceiroDto: UpdateFinanceiroDto) {
    return this.financeiroRepository.update(
      {mes_ano: data},
      {...updateFinaceiroDto}
    );
  }

  async remove(data: string) {
    const mes = await this.buscaPorData(data)
    const id = mes.id
    this.financeiroRepository.delete({id});
    return
    
  }

  async buscaPorData(data:string): Promise<Financeiro|undefined> {
    return this.financeiroRepository.findOneBy({mes_ano: data})
  }
}