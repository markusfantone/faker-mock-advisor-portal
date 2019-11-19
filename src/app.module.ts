import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
/* Controllers */
import { BuscarController } from './controllers/buscar.controller';
import { CotacaoPerdidaController } from './controllers/cotacaoperdida.controller';
import { CrossSellingVidaController } from './controllers/crosssellingvida.controller';
import { FavoritoController } from './controllers/favorito.controller';
import { GerenteController } from './controllers/gerente.controller';
import { ListaController } from './controllers/lista.controller';
import { RevistasController } from './controllers/revistas.controller';
import { NoticiasController } from './controllers/noticias.controller';
/* Services */
import { BuscarService } from './services/buscar.service';
import { CotacaoPerdidaService } from './services/cotacaoperdida.service';
import { CrossSellingVidaService } from './services/crosssellingvida.service';
import { FavoritoService } from './services/favorito.service';
import { GerenteService } from './services/gerente.service';
import { ListaService } from './services/lista.service';
import { RevistasService } from './services/revistas.service';
import { NoticiasService } from './services/noticias.service';

@Module({
  imports: [],
  controllers: [
    BuscarController,
    CotacaoPerdidaController,
    CrossSellingVidaController,
    FavoritoController,
    GerenteController,
    ListaController,
    RevistasController,
    NoticiasController,
  ],
  providers: [
    BuscarService,
    CotacaoPerdidaService,
    CrossSellingVidaService,
    FavoritoService,
    GerenteService,
    ListaService,
    RevistasService,
    NoticiasService,
  ],
})
export class AppModule {}
