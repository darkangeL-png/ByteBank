import { TipoTransacao } from "./TipoTransacao.js";

export type Transacao = {
    tipoTrasacao: TipoTransacao;
    valor: number;
    data: Date;
}