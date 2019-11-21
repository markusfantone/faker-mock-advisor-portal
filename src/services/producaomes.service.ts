import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class ProducaoMesService {
  get(): any {
    const today = new Date();
    return {
      anoReferenciaAnterior: today.getFullYear() - 1,
      mesReferenciaAnterior: today.getMonth() + 1,
      valorPremioLiquidoAnterior: faker.random.number({
        min: 0,
        max: 50000,
        precision: 0.01,
      }),
      anoReferenciaAtual: today.getFullYear(),
      mesReferenciaAtual: today.getMonth() + 1,
      valorPremioLiquidoAtual: faker.random.number({
        min: 0,
        max: 50000,
        precision: 0.01,
      }),
      ultimaAtualizacao: today,
      mesReferenciaAnteriorTexto: this.getCurrentMonth(today.getMonth()),
    };
  }
  getCurrentMonth(month: number): String {
    switch (month) {
      case 0:
        return 'Janeiro';
      case 1:
        return 'Fevereiro';
      case 2:
        return 'Março';
      case 3:
        return 'Abril';
      case 4:
        return 'Maio';
      case 5:
        return 'Junho';
      case 6:
        return 'Julho';
      case 7:
        return 'Agosto';
      case 8:
        return 'Setembro';
      case 9:
        return 'Outubro';
      case 10:
        return 'Novembro';
      case 11:
        return 'Dezembro';
      default:
        return '';
    }
  }
}
