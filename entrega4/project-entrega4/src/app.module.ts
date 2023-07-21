import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteModule } from './cliente/cliente.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { RolesGuard } from './auth/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { FinaceiroModule } from './finaceiro/finaceiro.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'sqlite',
    database:'academia.sqlite',
    entities:[],
    synchronize:true,
    autoLoadEntities:true
  }), ClienteModule, UsuarioModule, AuthModule, FinaceiroModule],
  controllers: [AppController],
  providers: [AppService, 
    {provide: APP_GUARD,
    useClass: RolesGuard}, JwtService],
})
export class AppModule {}
