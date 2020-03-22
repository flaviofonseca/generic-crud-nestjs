import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenericModule } from './generic/generic.module';
import { PessoaModule } from './pessoa/pessoa.module';

@Module({
  imports: [GenericModule, PessoaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
