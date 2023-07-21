import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioService } from 'src/usuario/usuario.service';
import { LocalStrategy } from './local.strategy';


@Module({
  imports:[UsuarioModule, PassportModule,JwtModule.register({secret: jwtConstants.secret, signOptions:{expiresIn: '1 day'}})],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule {}
