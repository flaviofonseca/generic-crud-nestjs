import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/generic/generic-service';
import { PessoaModel } from './pessoa-model';

@Injectable()
export class PessoaService extends GenericService<PessoaModel> {

    salvar(model: PessoaModel) {
    }

    remover(id: any) {
    }
    
    alterar(id: any, model: PessoaModel) {
    }
    
    consultar(id: any): PessoaModel {
        return null;
    }
    
    listar(): PessoaModel[] {
        return null;
    }
}
