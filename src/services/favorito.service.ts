import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritoService {
  get(): any {
    // let favArray: Array<any>;
    // favArray = new Array<any>();

    // let urlArray: Array<any>;
    // urlArray = new Array<any>();

    // for (let index = 0; index < 10; index++) {
    //   favArray.push({
    //     nmFvrto: '',
    //     dtCadtr: new Date(),
    //     ordem: index + 1,
    //     host: '',
    //   });
    // }

    return {
      url: [],
      favorito: [],
    };
  }
}
