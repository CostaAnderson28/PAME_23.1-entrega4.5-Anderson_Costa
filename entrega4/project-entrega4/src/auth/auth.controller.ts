import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto} from './dto/login.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @UseGuards(LocalAuthGuard)
  @Post()
  async login(@Body() loginDto: LoginDto, @Request() req) {
    return this.authService.login(req)
  }
}
