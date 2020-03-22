import { GenericModel } from "./generic-model";

export abstract class GenericService<T extends GenericModel> {

    abstract salvar(model: T);

    abstract remover(id: any);

    abstract alterar(id: any, model: T);

    abstract consultar(id: any): T;

    abstract listar(): T[];
}
