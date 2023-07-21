import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FinanceiroService } from './finaceiro.service';
import { CreateFinanceiroDto } from './dto/create-finaceiro.dto';
import { UpdateFinanceiroDto } from './dto/update-finaceiro.dto';

@Controller('finaceiro')
export class FinaceiroController {
  constructor(private readonly finaceiroService: FinanceiroService) {}

  @Post()
  create(@Body() createFinaceiroDto: CreateFinanceiroDto) {
    return this.finaceiroService.create(createFinaceiroDto);
  }

  @Get('/lista')
  findAll() {
    return this.finaceiroService.findAll();
  }

  @Get('financeiro/:data')
  findOne(@Param('data') data: string) {
    return this.finaceiroService.findOne(data);
  }

  @Patch('update/:data')
  update(@Param('data') data: string, @Body() updateFinaceiroDto: UpdateFinanceiroDto) {
    return this.finaceiroService.update(data, updateFinaceiroDto);
  }

  @Delete('remove/:data')
  remove(@Param('data') data: string) {
    return this.finaceiroService.remove(data);
  }
}
