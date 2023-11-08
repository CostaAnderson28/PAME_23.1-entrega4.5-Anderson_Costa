import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Cargo } from '../../usuario/entities/role.enum';
import { CARGOS_KEY } from '../../usuario/entities/roles.decorator';
import { JwtStrategy } from '../jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from '../constants';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector,
        private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const require = this.reflector.getAllAndOverride<Cargo[]>(CARGOS_KEY, [context.getHandler(), context.getClass()]);
        if(!require)return true;

        const {autorizacao} = context.switchToHttp().getRequest();

        const loginPayload = await this.jwtService.verifyAsync(autorizacao, jwtConstants).catch(() => undefined);
        console.log(require)
        
        if(!loginPayload)return false

        
        return require.some((Cargo) => Cargo == loginPayload.cargo);
    }
}