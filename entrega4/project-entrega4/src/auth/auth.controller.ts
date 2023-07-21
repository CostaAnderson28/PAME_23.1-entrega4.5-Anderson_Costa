import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto} from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { LocalAlthGuard } from './guards/local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  //@UseGuards(AuthGuard('local'))
  @Post()
  login(@Body() loginDto: LoginDto, @Request() req) {
    return this.authService.login(loginDto)
  }

  @Post('teste')
  teste(@Body() loginDto: LoginDto, @Request() req){
    return this.authService.validarUsuario(loginDto)
  }

}
