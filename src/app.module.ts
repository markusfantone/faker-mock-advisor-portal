import { Module } from '@nestjs/common';
//import { AppController } from './app.controller';
import { TesteController } from './teste.controller';
import { BuscarController } from './controllers/buscar.controller';
import { AppService } from './app.service';
import { BuscarService } from './services/buscar.service';

@Module({
  imports: [],
  controllers: [TesteController, BuscarController],
  providers: [AppService, BuscarService],
})
export class AppModule {}
