import conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";

const elementoDataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

renderizarData()
function renderizarData (): void{
    if (elementoDataAcesso != null) {
        elementoDataAcesso.textContent = formatarData(conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}

const DataComponet = {
    atualizar: function() {
        renderizarData();
    }
}

export default DataComponet