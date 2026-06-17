import conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import DataComponet from "./data-components.js";
import ExtratoComponent from "./extrato-components.js";
import SaldoComponet from "./saldo-component.js";

const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha todos os campos do formulario")
            return;
        }

        const tipoTrasacaoInput = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
        const valorInput = elementoFormulario.querySelector("#valor") as HTMLInputElement;
        const dataInput = elementoFormulario.querySelector("#data") as HTMLInputElement;

        let tipoTrasacao: TipoTransacao = tipoTrasacaoInput.value as TipoTransacao;
        let valor: number = valorInput.valueAsNumber;
        let data: Date = new Date(dataInput.value + "00:00:00");

        const novaTrasacao: Transacao = {
            tipoTrasacao: tipoTrasacao,
            valor: valor,
            data: data
        }

        conta.registrarTrasacao(novaTrasacao);
        SaldoComponet.atualizar()
        DataComponet.atualizar()
        ExtratoComponent.atualizar()
        elementoFormulario.reset(); 
    } catch(erro: any) {
        alert(erro.message);
    }
});