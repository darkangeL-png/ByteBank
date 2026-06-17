import { formatarData, formatarMoeda } from "../utils/formatters.js"

export enum FormatoData {
  PADRAO = "DD/MM/AAAA",
  DIA_SEMANA_DIA_MES_ANO = "DIA_SEMANA, DD/MM/AAAA",
  DIA_MES = "DD/MM"
}

export function formatarInformacoes(data: Date, valor: number, formato: FormatoData): string {
  const dataFormatada = formatarData(data, formato)
  const valorFormatado = formatarMoeda(valor)
  return `${dataFormatada} - ${valorFormatado}`
}