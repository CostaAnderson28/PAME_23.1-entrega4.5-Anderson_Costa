import { PartialType } from '@nestjs/mapped-types';
import { CreateFinanceiroDto } from './create-finaceiro.dto';

export class UpdateFinanceiroDto extends PartialType(CreateFinanceiroDto) {}
