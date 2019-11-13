import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class GerenteService {
  get(): any {
    return {
      isCorretorAssessoria: false,
      meuGerente: {
        cnpjSucursal: '33164021003893',
        dataNascimento: faker.date.past().valueOf(),
        bairro: 'CAMBUI',
        municipio: 'CAMPINAS',
        cep: '13025240',
        telefone: null,
        numero: '826',
        codigoSucursal: '8201',
        nomeSucursal: 'SUCURSAL CAMPINAS',
        endereco: 'ANTONIO LAPA',
        fax: '19-32557377',
        titulo: 'Meu Gerente',
        email: faker.internet
          .email(
            faker.name.firstName(),
            faker.name.lastName(),
            'tokiomarine.com.br',
          )
          .toUpperCase(),
        nome: `${faker.name.firstName()} ${faker.name.lastName()}`.toUpperCase(),
        cpf: '33366021810',
        matricula: '105391',
        cargo: null,
        admissao: faker.date.past().valueOf(),
        siglaEstado: 'SP',
        celular: '1993559744',
        ramal: '0000',
        voip: '1937976370',
        codigoDiretoriaComercial: '08300',
        nomeDiretoriaComercial: 'DIRETORIA COML REGIONAL I',
        codigoDiretoriaExecutiva: '08000',
        nomeDiretoriaExecutiva: 'DIR. EXECUTIVA COMERCIAL',
        codigoSuperintendendia: '08211',
        nomeSuperintendencia: 'VAREJO SAO PAULO INTERIOR I',
        telefoneFormatado: '',
        celularFormatado: '(19) 93559744',
        suporteComercial: '0',
        telefoneSuporteFormatado: '-',
        voipFormatado: '(19) 37976370',
        telefoneSuporte: '-',
      },
    };
  }
}
