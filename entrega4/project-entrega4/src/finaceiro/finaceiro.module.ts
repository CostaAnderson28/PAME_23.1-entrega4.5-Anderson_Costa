import { Module } from '@nestjs/common';
import { FinanceiroService } from './finaceiro.service';
import { FinaceiroController } from './finaceiro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Financeiro } from './entities/finaceiro.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Financeiro, Cliente])],
  controllers: [FinaceiroController],
  providers: [FinanceiroService]
})
export class FinaceiroModule {}
