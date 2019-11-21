import { Injectable } from '@nestjs/common';
import * as faker from 'faker';

@Injectable()
export class NoticiasService {
  get(): any {
    let newsArray: Array<any>;

    newsArray = new Array<any>();

    for (let index = 0; index < 10; index++) {
      let startDate = faker.date.past(2);
      let endDate = faker.date.future(1);

      newsArray.push({
        titulo: faker.lorem.words(10),
        resumo: faker.lorem.paragraphs(2),
        tempoExpiracao: 0,
        dtInicioVigencia: startDate,
        dtTerminoVigencia: endDate,
        url: faker.internet.url(),
        imagem: faker.image.abstract(),
      });
    }

    return {
      noticias: newsArray,
    };
  }
}
