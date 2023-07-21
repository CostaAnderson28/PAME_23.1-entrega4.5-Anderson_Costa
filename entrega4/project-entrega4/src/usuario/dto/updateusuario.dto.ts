import { PartialType } from '@nestjs/mapped-types';
import { CadastroUsuarioDto } from './cadastrousuario.dto';

export class UpdateUsuarioDto extends PartialType(CadastroUsuarioDto) {}
