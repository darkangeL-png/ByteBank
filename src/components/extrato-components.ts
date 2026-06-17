import conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { GrupoTransacao } from "../types/GrupoTransacao.js";
import { formatarMoeda, formatarData } from "../utils/formatters.js";

const elementoRegistroTransacoesExtrato: HTMLElement = document.querySelector(".extrato .registro-transacoes") as HTMLElement;

rendenrizarExtrato();
function rendenrizarExtrato(): void {
    const grupoTransacoes: GrupoTransacao[] = conta.getGruposTransacoes();
    elementoRegistroTransacoesExtrato.innerHTML = "";
    let htmlRegistroTransacao: string = "";

    for (let grupoTransacao of grupoTransacoes)
{
    let htmlTransacaoItem: string = "";
    for (let transacao of grupoTransacao.transacoes) {
        htmlTransacaoItem += `
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${transacao.tipoTrasacao}</span>
                    <strong class="valor">${formatarMoeda(transacao.valor)}</strong>
            </div>
            <time class="data">${formatarData(transacao.data, FormatoData.DIA_MES)}</time>
        </div>
        `;
    }

    htmlRegistroTransacao += `
        <div class="transacoes-group">
            <strong class="mes-group">${grupoTransacao.label}</strong>
            ${htmlTransacaoItem}
        </div>`;
    }

    if (htmlRegistroTransacao === "") {
        htmlRegistroTransacao = "<div>Não há transações registradas.</div>";
    }

    elementoRegistroTransacoesExtrato.innerHTML = htmlRegistroTransacao;
}

const ExtratoComponent = {
    atualizar(): void {
        rendenrizarExtrato()
    }
}

export default ExtratoComponent