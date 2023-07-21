import { HttpStatus, HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAlthGuard extends AuthGuard('local'){
    handleResquest(err, user, info, context, status){
        const request = context.switchToHttp().getRequest();
        const{nomeDeUsuario, senha}: LoginDto = request.body;
        if(err || !user){
            if(!nomeDeUsuario){
                throw new HttpException(
                    {message: 'Usuario vazio'},
                    HttpStatus.BAD_REQUEST
                );
            }else if(!senha){
                throw new HttpException(
                    {message: 'Senah vazia'},
                    HttpStatus.BAD_REQUEST
                );
            }else{
                throw err || new UnauthorizedException();
            }
        }
        return user;
    }
}