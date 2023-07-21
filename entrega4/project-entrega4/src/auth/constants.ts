
import { config } from 'dotenv';
config();

export const jwtConstants = {
    secret: 'TESTE_DE_TOKEN'//process.env.JWT_PRIVATEKEY,
};