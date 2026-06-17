import conta from "../types/Conta.js";
import { formatarMoeda } from "../utils/formatters.js";

const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

renderizarSaldo()
function renderizarSaldo (): void{
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatarMoeda(conta.getSaldo());
    }
}

const SaldoComponet = {
    atualizar: function() {
        renderizarSaldo();
    }
}

export default SaldoComponet