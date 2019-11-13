import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class ListaService {
  get(): any {
    return {
      lista: [
        {
          url:
            'https://prtsso.tokiomarine.com.br/acompanhamentoEmissao/pesquisaAutomatica.do?tipoDeRelatorio=2&data=27/02/2018',
          valor: faker.random.number({ min: 0, max: 50000, precision: 0.01 }),
          titulo: 'APÓLICES EMITIDAS',
          feel: 'positivo',
          quantidade: 6,
          id: 1,
        },
        {
          url:
            'https://prtsso.tokiomarine.com.br/acompanhamentoEmissao/pesquisaAutomatica.do?tipoDeRelatorio=4&data=27/02/2018',
          valor: faker.random.number({ min: 0, max: 50000, precision: 0.01 }),
          titulo: 'APÓLICES CANCELADAS',
          feel: 'negativo',
          quantidade: 0,
          id: 2,
        },
        {
          url:
            'https://prtsso.tokiomarine.com.br/acompanhamentoEmissao/pesquisaAutomatica.do?tipoDeRelatorio=5&data=27/02/2018',
          valor: faker.random.number({ min: 0, max: 50000, precision: 0.01 }),
          titulo: 'PROPOSTAS CONTRATADAS',
          feel: 'positivo',
          quantidade: 5,
          id: 3,
        },
        {
          url:
            'https://prtsso.tokiomarine.com.br/clientesInadimplentes/pesquisaAutomatica.do?ID_SISTEMA=1&execute=listar&data=27/02/2018',
          valor: faker.random.number({ min: 0, max: 50000, precision: 0.01 }),
          titulo: 'PARCELAS INADIMPLENTES',
          feel: 'negativo',
          quantidade: 16,
          id: 4,
        },
        {
          url:
            'https://prtsso.tokiomarine.com.br/acompanhamentoEmissao/pesquisaAutomatica.do?tipoDeRelatorio=7&data=27/02/2018',
          valor: faker.random.number({ min: 0, max: 50000, precision: 0.01 }),
          titulo: 'PARCELAS PAGAS',
          feel: 'positivo',
          quantidade: 0,
          id: 6,
        },
        {
          url:
            'https://prtsso.tokiomarine.com.br/extratoComissao/pesquisaAutomatica.do?data=27/02/2018',
          valor: faker.random.number({ min: 0, max: 50000, precision: 0.01 }),
          titulo: 'COMISSÕES PAGAS',
          feel: 'positivo',
          quantidade: 154,
          id: 7,
        },
        {
          url:
            'https://prtsso.tokiomarine.com.br/AvisoSinistro/consulta/apolice?Versao=auto',
          valor: faker.random.number({ min: 0, max: 50000, precision: 0.01 }),
          titulo: 'SINISTROS AVISADOS',
          feel: 'neutro',
          quantidade: 2,
          id: 8,
        },
        {
          url:
            'https://portalparceiros-aceitew.tokiomarine.com.br/portais/assistenciasCorretor/',
          valor: null,
          titulo: 'ASSISTÊNCIAS',
          feel: 'neutro',
          quantidade: 0,
          id: 10,
        },
      ],
      exibirDebitos: true,
      dataProcessamento: 1519743600000,
    };
  }
}
