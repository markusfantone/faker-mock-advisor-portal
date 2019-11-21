import { Injectable } from '@nestjs/common';

@Injectable()
export class CotacaoPerdidaService {
  get(): any {
    return {
      dados: {
        url:
          'https://portalparceiros.tokiomarine.com.br/ConsultaCotacaoPerdida/cotacoes',
        situacaoTokio: null,
        exibirDash: true,
        cotacaoPerdida: 551,
        cotacaoConvertida: 0,
        valorComissao: 0.0,
        mesCorrente: '11/2019',
        mesComparacao: '12/2018',
        urlSaibaMais: '#',
        bloqueadoTokio: false,
      },
    };
  }
}
