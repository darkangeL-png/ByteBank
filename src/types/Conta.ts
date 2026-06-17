import { Armazenador } from "./Armazenador.js";
import { ValidarDebito, ValidarDeposito } from "./Decorators.js";
import { GrupoTransacao } from "./GrupoTransacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { Transacao } from "./Transacao.js";

export class Conta {
    protected nome: string = '';
    protected saldo: number = Armazenador.obter<number>("saldo") || 0;
    private transacoes: Transacao[] = Armazenador.obter<Transacao[]>(("transacoes") as string, (key: string, value: any) => {
        if (key === "data") {
            return new Date(value);
        }
        return value;
    }) || [];;

    constructor(nome: string) {
        this.nome = nome;
    }

    public getTitular() {
        return this.nome;
    }
    
    public getSaldo() {
        return this.saldo;
    }

    public getDataAcesso() {
        return new Date();
    }

    public getGruposTransacoes(): GrupoTransacao[] {
        const gruposTransacoes: GrupoTransacao[] = [];
        const listaTransacoes: Transacao[] = structuredClone(this.transacoes);
        const transacoesOrdenadas: Transacao[] = listaTransacoes.sort((t1, t2) => t2.data.getTime() - t1.data.getTime());

        let labelAtualGrupoTransacao: string = "";
                
        for (let transacao of transacoesOrdenadas) {
            let labelGrupoTransacao: string = transacao.data.toLocaleDateString("pt-br", { month: "long", year: "numeric" });
            if (labelAtualGrupoTransacao !== labelGrupoTransacao) {
                labelAtualGrupoTransacao = labelGrupoTransacao;
                gruposTransacoes.push({
                    label: labelGrupoTransacao,
                    transacoes: []
                });
            }
            gruposTransacoes.at(-1)?.transacoes.push(transacao)
        }

        return gruposTransacoes;
    }

    @ValidarDebito
    private debitar(valor: number): void {
        this.saldo -= valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }

    @ValidarDeposito
    private depositar(valor: number): void {
        this.saldo += valor;
        Armazenador.salvar("saldo", this.saldo.toString());
    }

    public registrarTransacao(novaTrasacao: Transacao): void {
        if (novaTrasacao.tipoTrasacao == TipoTransacao.DEPOSITO) {
                this.depositar(novaTrasacao.valor);
            } else if (novaTrasacao.tipoTrasacao == TipoTransacao.TRANSFERENCIA || novaTrasacao.tipoTrasacao == TipoTransacao.PAGAMENTO_BOLETO) {
                this.debitar(novaTrasacao.valor);
                novaTrasacao.valor *= -1;
            } else {
                throw new Error("Tipo de transação invalido!");
            }

        this.transacoes.push(novaTrasacao)
        console.log(this.getGruposTransacoes())
        Armazenador.salvar("transacoes", JSON.stringify(this.transacoes))
    }

}

export class ContaPremiun extends Conta {
    registratTransacao(transacao: Transacao): void {
        if (transacao.tipoTrasacao === TipoTransacao.DEPOSITO) {
            console.log("ganhou um bônus de 0.50 centavos")
            transacao.valor += 0.50
        }
        super.registrarTransacao(transacao)
    }
}

const conta = new Conta("Douglas Candido da Silva")
const contaPremiun = new ContaPremiun("Dougals Souza de Oliveira")

export default conta