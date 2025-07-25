# E-Missa: Sistema de Organização de Cânticos

Sistema web moderno para organização de cânticos de missa com interface intuitiva e funcionalidades avançadas.

## Características

### Visual
- Layout moderno e agradável
- Fundo degradê preto e prata
- Detalhes em amarelo neon e branco neon
- Efeitos glass e blur
- Fonte Ubuntu Mono
- Cantos arredondados
- Efeitos de esmaecimento ao abrir popup

### Funcionalidades
- **Quadros de Cânticos**: Cada categoria de cânticos apresenta-se recolhida por padrão
- **Área da Missa**: Drag and drop para organizar cânticos na ordem desejada
- **Busca Inteligente**: Campo de pesquisa que busca cânticos pelo conteúdo
- **Visualização de PDFs**: Popup para visualizar as letras dos cânticos
- **Sincronização GitHub**: Salva as relações montadas em nuvem
- **Sistema Dinâmico**: Atualiza automaticamente quando novos cânticos são adicionados

## Estrutura de Pastas

```
e_missa/
├── index.html              # Página principal
├── style.css               # Estilos CSS com design moderno
├── script.js               # Funcionalidades JavaScript
├── github-integration.js   # Integração com GitHub
├── Letras/                 # Pasta com os cânticos em PDF
│   └── [+] Letras/
│       ├── Abraço de Paz/
│       ├── Aclamação Evangelho/
│       ├── Ato Penitencial/
│       ├── Ação de graças/
│       ├── Cantos Marianos/
│       ├── Comunhão/
│       ├── Cordeiro/
│       ├── Diversos/
│       ├── Entrada/
│       ├── Final/
│       ├── Glória/
│       ├── Louvor e Meditação/
│       ├── Ofertório/
│       └── Santo/
└── README.md               # Este arquivo
```

## Como Usar

1. **Navegação**: Abra o arquivo `index.html` em um navegador web
2. **Busca**: Use o campo de pesquisa para encontrar cânticos específicos
3. **Organização**: Arraste cânticos das categorias para a área "Missa"
4. **Visualização**: Clique em qualquer cântico para ver o PDF
5. **Salvamento**: Use o botão "Salvar Ordem da Missa" para persistir a organização

## Configuração do GitHub

Para habilitar a sincronização com GitHub:

1. Configure o token de acesso no arquivo `github-integration.js`
2. Ou defina a variável de ambiente `GITHUB_TOKEN`
3. O sistema criará automaticamente o repositório se necessário

## Tecnologias Utilizadas

- HTML5
- CSS3 (com efeitos modernos)
- JavaScript (ES6+)
- GitHub API
- Drag and Drop API
- PDF.js (para visualização de PDFs)

## Funcionalidades Avançadas

### Drag and Drop
- Arraste cânticos das categorias para a área da missa
- Reordene os cânticos na missa conforme necessário
- Remova cânticos da missa com o botão "×"

### Busca Inteligente
- Busca em tempo real
- Expande automaticamente categorias com resultados
- Destaca cânticos encontrados

### Sincronização em Nuvem
- Salva automaticamente no GitHub
- Carrega missas salvas anteriormente
- Histórico de versões via Git

## Personalização

O sistema é facilmente personalizável:
- Modifique `style.css` para alterar a aparência
- Edite `script.js` para adicionar funcionalidades
- Atualize a estrutura de pastas conforme necessário

## Suporte

Para adicionar novos cânticos:
1. Coloque os arquivos PDF nas pastas correspondentes
2. O sistema detectará automaticamente os novos arquivos
3. Recarregue a página para ver as atualizações

## Licença

Este projeto foi desenvolvido para uso em comunidades religiosas e está disponível sob licença livre para uso não comercial.

