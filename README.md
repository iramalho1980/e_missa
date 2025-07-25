# 🎵 Organizador de Cânticos - E-Missa

Sistema moderno para organização de cânticos litúrgicos com design elegante e funcionalidades avançadas.

## 🌟 Características

### Design Visual
- **Layout moderno e agradável** com interface intuitiva
- **Fundo degradê preto e prata** para elegância visual
- **Detalhes em amarelo neon e branco neon** para destaque
- **Efeitos glass e blur** para modernidade
- **Fonte Ubuntu Mono** para legibilidade
- **Cantos arredondados** em todos os elementos
- **Efeitos de esmaecimento** ao abrir pop-ups

### Funcionalidades

#### 📂 Organização por Categorias
- **15 categorias** de cânticos organizadas automaticamente:
  - Abraço de Paz
  - Aclamação Evangelho
  - Ato Penitencial
  - Ação de Graças
  - Cantos Marianos
  - Comunhão
  - Cordeiro
  - Diversos
  - Entrada
  - Final
  - Glória
  - Louvor e Meditação
  - Ofertório
  - Santo

#### 🎯 Quadros Recolhíveis
- Cada categoria apresenta-se como um quadro recolhível
- Clique no cabeçalho para expandir/recolher
- Interface limpa e organizada

#### 🎪 Quadro "Missa"
- Área dedicada para arrastar e organizar cânticos
- Criação da ordem da celebração
- Visualização clara da sequência escolhida

#### 🔍 Sistema de Pesquisa
- Campo de busca inteligente
- Pesquisa por nome do cântico
- Filtragem em tempo real
- Ocultação automática de categorias vazias durante a pesquisa

#### 📱 Drag & Drop
- Arraste cânticos das categorias para o quadro "Missa"
- Interface intuitiva e responsiva
- Feedback visual durante o arraste

#### 📄 Visualização de PDFs
- Clique no botão "👁️ Ver" para abrir qualquer cântico
- Pop-up elegante com efeitos de esmaecimento
- Visualização completa do PDF
- Fechamento com ESC ou clique fora

#### 💾 Gerenciamento de Dados
- **Salvar Missa**: Armazena a ordem criada
- **Limpar**: Remove todos os cânticos da ordem
- **Exportar**: Gera arquivo de texto com a ordem da missa
- Persistência local dos dados

## 🚀 Como Usar

### 1. Navegação
- Acesse o sistema através do arquivo `index.html`
- Use a barra de pesquisa para encontrar cânticos específicos
- Clique nos cabeçalhos das categorias para expandir/recolher

### 2. Criando uma Ordem de Missa
1. Expanda as categorias desejadas
2. Arraste os cânticos para o quadro "Ordem da Missa"
3. Organize a sequência conforme necessário
4. Use os botões de controle para salvar ou exportar

### 3. Visualizando Cânticos
- Clique no botão "👁️ Ver" ao lado de qualquer cântico
- O PDF será aberto em um pop-up elegante
- Feche com o botão "✕", ESC ou clicando fora

## 📁 Estrutura do Projeto

```
e_missa/
├── index.html          # Página principal
├── script.js           # Funcionalidades JavaScript
├── Letras/            # Pasta com os PDFs dos cânticos
│   └── [+] Letras/    # Subpasta com categorias
│       ├── Abraço de Paz/
│       ├── Aclamação Evangelho/
│       ├── Ato Penitencial/
│       └── ... (outras categorias)
└── README.md          # Esta documentação
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica moderna
- **CSS3**: Estilos avançados com efeitos glass/blur
- **JavaScript ES6+**: Funcionalidades interativas
- **Drag & Drop API**: Interface de arrastar e soltar
- **Local Storage**: Persistência de dados local
- **PDF.js**: Visualização de PDFs (via iframe)

## 🎨 Paleta de Cores

- **Fundo**: Degradê de preto (#000000) para prata (#c0c0c0)
- **Destaque**: Amarelo neon (#ffff00)
- **Texto**: Branco neon (#ffffff)
- **Transparências**: Efeitos glass com backdrop-filter

## 📱 Responsividade

O sistema é totalmente responsivo e funciona em:
- 💻 Desktops
- 📱 Tablets
- 📱 Smartphones

## 🔄 Atualizações Dinâmicas

O sistema foi projetado para ser dinâmico:
- Adicione novos PDFs nas subpastas de `Letras/[+] Letras/`
- O JavaScript detectará automaticamente os novos arquivos
- Atualize a estrutura de dados em `script.js` se necessário

## 🌐 Acesso Online

O projeto está hospedado no GitHub e pode ser acessado através do GitHub Pages:
- **Repositório**: https://github.com/iramalho1980/e_missa
- **Acesso direto**: https://iramalho1980.github.io/e_missa

## 📝 Licença

Este projeto foi desenvolvido para uso litúrgico e está disponível para a comunidade.

---

**Desenvolvido com ❤️ para a comunidade litúrgica**

