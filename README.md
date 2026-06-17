# ByteBank

Um aplicativo bancário construído com TypeScript para gerenciamento de contas e transações.

## 🚀 Recursos

- Gerenciamento de contas bancárias
- Registro de transações (depósitos, saques, transferências)
- Visualização de extrato
- Cálculo e exibição de saldo
- Formatação de datas

## 📋 Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

## 📦 Instalação

Clone o repositório e instale as dependências:

```bash
git clone <seu-repositorio>
cd ByteBank
npm install
```

## 🛠️ Como usar

Compile o TypeScript:

```bash
npx tsc
```

Execute a aplicação:

```bash
node dist/main.js
```

## 📁 Estrutura do projeto

```
src/
├── main.ts                    # Ponto de entrada
├── components/               # Componentes da aplicação
│   ├── data-components.ts
│   ├── extrato-components.ts
│   ├── nova-transacao-component.ts
│   └── saldo-component.ts
├── types/                    # Tipos TypeScript
│   ├── Conta.ts
│   ├── FormatoData.ts
│   ├── GrupoTransacao.ts
│   ├── TipoTransacao.ts
│   └── Transacao.ts
└── utils/                    # Utilitários
    └── formatters.ts
```

## 🔧 Tecnologias

- **TypeScript** - Linguagem de programação tipada
- **Node.js** - Runtime JavaScript

## 📝 Licença

Este projeto está sob licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👤 Autor

DarkangeL-png

---

Para mais informações, abra uma issue ou envie um pull request.

Projeto feito com base nas aulas da Alura.
