import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class BuscarService {
  get(): any {
    return {
      email: {
        pk: {
          tipoParceiro: faker.random.number({ min: 0, max: 3 }),
          cpf: 40757557627,
        },
        receberEmail: faker.random.arrayElement(['N', 'S']),
        codigoCorretor: faker.random.number({ min: 1, max: 40000 }),
        dataInclusao: faker.date.past(2),
        dataUltimaEdicao: faker.date.recent(),
        email: faker.internet.email(),
        ddd: 11,
        telefone: faker.random.number({ min: 941111111, max: 999999999 }),
      },
      sucesso: true,
      expirado: false,
    };
  }
}
