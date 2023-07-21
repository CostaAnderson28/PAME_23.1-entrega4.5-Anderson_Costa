import { SetMetadata } from '@nestjs/common';
import { Cargo } from './role.enum';

export const CARGOS_KEY = 'cargos';
export const Cargos = (...cargos: Cargo[]) => SetMetadata(CARGOS_KEY, cargos);