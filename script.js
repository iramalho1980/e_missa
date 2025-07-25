// Dados dos cânticos organizados por categoria
const canticosData = {
    "Abraço de Paz": [
        "esteja_sempre_com_voce.pdf",
        "irmao_minha_paz_eu_te_dou.pdf",
        "paz_paz_de_cristo.pdf"
    ],
    "Aclamação Evangelho": [
        "a_minhalma_abrirei.pdf",
        "a_vossa_palavra_senhor.pdf",
        "aleluia_como_o_pai_me_amou.pdf",
        "buscai_primeiro_o_reino_de_deus.pdf",
        "como_sao_belos.pdf",
        "eu_vim_para_escutar.pdf",
        "palavra_de_salvacao.pdf",
        "que_alegria_cristo_ressurgiu.pdf",
        "vai_falar_no_evangelho.pdf",
        "vinde_espirito_de_deus.pdf"
    ],
    "Ato Penitencial": [
        "conheco_um_coracao.pdf",
        "coracoes_arrependidos.pdf",
        "kyrie_eleison_jmj.pdf",
        "pelos_pecados_senhor_piedade_de_nos.pdf",
        "perdao_senhor.pdf",
        "renovame.pdf",
        "renovame_ii.pdf",
        "senhor_que_viestes_salvar_kirie_elleisson.pdf",
        "senhor_tende_piedade_de_nos.pdf",
        "senhor_tende_piedade_perdoai_nossa_culpa.pdf"
    ],
    "Ação de Graças": [
        "deus_esta_aqui.pdf",
        "e_impossivel_nao_crer_em_ti.pdf",
        "espirito_santo.pdf",
        "obrigado_senhor.pdf"
    ],
    "Cantos Marianos": [
        "a_escolhida.pdf",
        "ave_cheia_de_graca.pdf",
        "imaculada_maria_de_deus.pdf",
        "maria_de_nazare.pdf",
        "santa_mae_maria.pdf",
        "santa_maria_vem.pdf"
    ],
    "Comunhão": [
        "a_barca.pdf",
        "a_ti_meu_deus.pdf",
        "antes_da_morte_e_ressurreicao.pdf",
        "cantar_a_beleza_da_vida.pdf",
        "como_es_lindo.pdf",
        "conheço_um_coração.pdf",
        "da_cepa_brotou_a_rama.pdf",
        "desamarrem_as_sandalias.pdf",
        "estas_entre_nos.pdf",
        "este_pranto_em_minhas_maos.pdf",
        "eu_navegarei.pdf",
        "eu_quis_comer_esta_ceia_agora.pdf",
        "eu_vim_para_que_todos_tenham_vida.pdf",
        "pelos_prados.pdf",
        "procuro_abrigo_nos_coracoes.pdf",
        "quando_teu_pai_revelou.pdf",
        "quem_nos_separara.pdf",
        "sacramento_da_comunhao.pdf",
        "sim_eu_quero.pdf",
        "sonda_me.pdf",
        "vem_eu_mostrarei.pdf",
        "vou_cantar_teu_amor.pdf"
    ],
    "Cordeiro": [
        "cordeiro_do_maior.pdf"
    ],
    "Diversos": [
        "podes_reinar.pdf",
        "prova_de_amor.pdf"
    ],
    "Entrada": [
        "a_biblia_e_a_palavra_de_deus.pdf",
        "bom_pastor.pdf",
        "coração_santo.pdf",
        "cristo_ressucitou_aleluia.pdf",
        "deixa_a_luz_do_ceu_entrar.pdf",
        "eis_me_aqui_senhor.pdf",
        "esatremos_aqui_reunidos.pdf",
        "faco_novas_todas_as_coisas.pdf",
        "hosana_hey_hosana_ha.pdf",
        "por_sua_morte.pdf",
        "porque_ele_vive.pdf",
        "senhor_quem_entrara.pdf",
        "te_amarei.pdf",
        "toda_biblia_e_comunicacao.pdf",
        "tu_es_a_razao_da_jornada.pdf",
        "vem_louvar.pdf"
    ],
    "Final": [
        "a_alegria_esta_no_coracao.pdf",
        "como_o_pai_me_enviou.pdf",
        "cristo_eh_a_felicidade.pdf",
        "deixa_luz_do_ceu_entrar.pdf",
        "hoje_e_tempo_de_louvar.pdf",
        "pelas_estradas_da_vida.pdf",
        "segura_na_mao_de_deus.pdf",
        "tomado_pela_mao.pdf",
        "tu_es_razao_jornada.pdf"
    ],
    "Glória": [
        "a_ele_seja_a_gloria.pdf",
        "gloria_a_deus_nas_alturas.pdf",
        "gloria_a_deus_nas_alturas__rock_balada.pdf",
        "gloria_ao_pai_criador.pdf"
    ],
    "Louvor e Meditação": [
        "Desamarrem_as_sandálias.pdf",
        "a_alegria_esta_no_coracao.pdf",
        "a_nos_descei_divina_luz.pdf",
        "agua_viva.pdf",
        "amar_como_jesus_amou.pdf",
        "bate_o_sino.pdf",
        "eu_louvarei.pdf",
        "eu_quero_um_rio.pdf",
        "louvado_seja_o_meu_senhor.pdf",
        "meu_mestre__a_minha_vida_e_do_mestre.pdf",
        "noite_feliz.pdf",
        "noites_traicoeiras.pdf",
        "oracao_da_familia.pdf",
        "oracao_de_sao_francisco.pdf",
        "podes_reinar.pdf",
        "quao_grande_es_tu.pdf",
        "segura_na_mao_de_deus.pdf",
        "tao_sublime.pdf",
        "vou-cantar-teu-amor.pdf"
    ],
    "Ofertório": [
        "de_maos_estendidas.pdf",
        "meu_coracao_eh_para_ti.pdf",
        "minha_vida_tem_sentido.pdf",
        "muitos_graos_de_trigo.pdf",
        "ofertas_singelas.pdf",
        "sabes_senhor.pdf",
        "um_coracao_para_amar.pdf"
    ],
    "Santo": [
        "hosana_eh.pdf",
        "hosana_no_alto_ceu.pdf",
        "o_senhor_eh_santo.pdf",
        "santo_santo_e.pdf"
    ]
};

// Array para armazenar a ordem da missa
let missaAtual = [];

// Função para formatar nome do arquivo para exibição
function formatarNomeCantico(nomeArquivo) {
    return nomeArquivo
        .replace('.pdf', '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
}

// Função para gerar as categorias dinamicamente
function gerarCategorias() {
    const canticosSection = document.getElementById('canticosSection');
    
    Object.keys(canticosData).forEach(categoria => {
        const categoriaCard = document.createElement('div');
        categoriaCard.className = 'categoria-card';
        
        const categoriaHeader = document.createElement('div');
        categoriaHeader.className = 'categoria-header';
        categoriaHeader.onclick = () => toggleCategoria(categoria);
        
        const titulo = document.createElement('h3');
        titulo.textContent = categoria;
        
        const toggle = document.createElement('span');
        toggle.className = 'categoria-toggle';
        toggle.textContent = '▼';
        toggle.id = `toggle-${categoria}`;
        
        categoriaHeader.appendChild(titulo);
        categoriaHeader.appendChild(toggle);
        
        const categoriaContent = document.createElement('div');
        categoriaContent.className = 'categoria-content';
        categoriaContent.id = `content-${categoria}`;
        
        canticosData[categoria].forEach(cantico => {
            const canticoItem = document.createElement('div');
            canticoItem.className = 'cantico-item';
            canticoItem.draggable = true;
            canticoItem.dataset.categoria = categoria;
            canticoItem.dataset.arquivo = cantico;
            
            const canticoName = document.createElement('div');
            canticoName.className = 'cantico-name';
            canticoName.textContent = formatarNomeCantico(cantico);
            
            const canticoActions = document.createElement('div');
            canticoActions.className = 'cantico-actions';
            
            const btnView = document.createElement('button');
            btnView.className = 'btn-view';
            btnView.textContent = '👁️ Ver';
            btnView.onclick = (e) => {
                e.stopPropagation();
                abrirPDF(cantico, formatarNomeCantico(cantico));
            };
            
            canticoActions.appendChild(btnView);
            canticoItem.appendChild(canticoName);
            canticoItem.appendChild(canticoActions);
            
            // Eventos de drag and drop
            canticoItem.addEventListener('dragstart', handleDragStart);
            canticoItem.addEventListener('dragend', handleDragEnd);
            
            categoriaContent.appendChild(canticoItem);
        });
        
        categoriaCard.appendChild(categoriaHeader);
        categoriaCard.appendChild(categoriaContent);
        canticosSection.appendChild(categoriaCard);
    });
}

// Função para alternar exibição da categoria
function toggleCategoria(categoria) {
    const content = document.getElementById(`content-${categoria}`);
    const toggle = document.getElementById(`toggle-${categoria}`);
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        toggle.classList.remove('expanded');
    } else {
        content.classList.add('expanded');
        toggle.classList.add('expanded');
    }
}

// Funções de drag and drop
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', JSON.stringify({
        categoria: this.dataset.categoria,
        arquivo: this.dataset.arquivo,
        nome: formatarNomeCantico(this.dataset.arquivo)
    }));
    this.style.opacity = '0.5';
}

function handleDragEnd(e) {
    this.style.opacity = '1';
}

// Configurar área de drop da missa
function configurarDropZone() {
    const missaContent = document.getElementById('missaContent');
    
    missaContent.addEventListener('dragover', (e) => {
        e.preventDefault();
        missaContent.classList.add('drag-over');
    });
    
    missaContent.addEventListener('dragleave', (e) => {
        if (!missaContent.contains(e.relatedTarget)) {
            missaContent.classList.remove('drag-over');
        }
    });
    
    missaContent.addEventListener('drop', (e) => {
        e.preventDefault();
        missaContent.classList.remove('drag-over');
        
        const data = JSON.parse(e.dataTransfer.getData('text/plain'));
        adicionarCanticoMissa(data);
    });
}

// Função para adicionar cântico à missa
function adicionarCanticoMissa(cantico) {
    missaAtual.push(cantico);
    atualizarMissaDisplay();
}

// Função para atualizar a exibição da missa
function atualizarMissaDisplay() {
    const missaContent = document.getElementById('missaContent');
    const placeholder = document.getElementById('missaPlaceholder');
    
    if (missaAtual.length === 0) {
        placeholder.style.display = 'block';
        return;
    }
    
    placeholder.style.display = 'none';
    
    // Limpar conteúdo atual (exceto placeholder)
    const items = missaContent.querySelectorAll('.missa-item');
    items.forEach(item => item.remove());
    
    missaAtual.forEach((cantico, index) => {
        const missaItem = document.createElement('div');
        missaItem.className = 'missa-item';
        
        const itemName = document.createElement('div');
        itemName.className = 'missa-item-name';
        itemName.textContent = cantico.nome;
        
        const itemCategory = document.createElement('div');
        itemCategory.className = 'missa-item-category';
        itemCategory.textContent = cantico.categoria;
        
        const btnRemove = document.createElement('button');
        btnRemove.className = 'btn-remove';
        btnRemove.textContent = '✕';
        btnRemove.onclick = () => removerCanticoMissa(index);
        
        missaItem.appendChild(itemName);
        missaItem.appendChild(itemCategory);
        missaItem.appendChild(btnRemove);
        
        missaContent.appendChild(missaItem);
    });
}

// Função para remover cântico da missa
function removerCanticoMissa(index) {
    missaAtual.splice(index, 1);
    atualizarMissaDisplay();
}

// Função para abrir PDF em popup
function abrirPDF(arquivo, nome) {
    const popup = document.getElementById('pdfPopup');
    const viewer = document.getElementById('pdfViewer');
    const title = document.getElementById('popupTitle');
    
    title.textContent = nome;
    viewer.src = `Letras/[+] Letras/${getCategoriaByFile(arquivo)}/${arquivo}`;
    
    popup.classList.add('show');
}

// Função para obter categoria por arquivo
function getCategoriaByFile(arquivo) {
    for (const [categoria, arquivos] of Object.entries(canticosData)) {
        if (arquivos.includes(arquivo)) {
            return categoria;
        }
    }
    return '';
}

// Função para fechar popup
function fecharPopup() {
    const popup = document.getElementById('pdfPopup');
    popup.classList.remove('show');
    
    setTimeout(() => {
        document.getElementById('pdfViewer').src = '';
    }, 300);
}

// Função de pesquisa
function configurarPesquisa() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        filtrarCanticos(termo);
    });
}

// Função para filtrar cânticos
function filtrarCanticos(termo) {
    const canticoItems = document.querySelectorAll('.cantico-item');
    
    canticoItems.forEach(item => {
        const nome = item.querySelector('.cantico-name').textContent.toLowerCase();
        const categoria = item.dataset.categoria.toLowerCase();
        
        if (nome.includes(termo) || categoria.includes(termo)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Mostrar/ocultar categorias vazias
    Object.keys(canticosData).forEach(categoria => {
        const content = document.getElementById(`content-${categoria}`);
        const visibleItems = content.querySelectorAll('.cantico-item:not([style*="display: none"])');
        const categoriaCard = content.closest('.categoria-card');
        
        if (visibleItems.length === 0 && termo !== '') {
            categoriaCard.style.display = 'none';
        } else {
            categoriaCard.style.display = 'block';
        }
    });
}

// Funções de controle da missa
function salvarMissa() {
    if (missaAtual.length === 0) {
        alert('Adicione pelo menos um cântico à missa antes de salvar.');
        return;
    }
    
    const dadosMissa = {
        data: new Date().toISOString(),
        canticos: missaAtual
    };
    
    // Salvar no localStorage (simulando banco de dados)
    const missasSalvas = JSON.parse(localStorage.getItem('missasSalvas') || '[]');
    missasSalvas.push(dadosMissa);
    localStorage.setItem('missasSalvas', JSON.stringify(missasSalvas));
    
    alert('Missa salva com sucesso!');
    
    // TODO: Implementar sincronização com GitHub
    sincronizarComGitHub(dadosMissa);
}

function limparMissa() {
    if (confirm('Tem certeza que deseja limpar a ordem da missa?')) {
        missaAtual = [];
        atualizarMissaDisplay();
    }
}

function exportarMissa() {
    if (missaAtual.length === 0) {
        alert('Adicione pelo menos um cântico à missa antes de exportar.');
        return;
    }
    
    let texto = 'ORDEM DA MISSA\\n';
    texto += '================\\n\\n';
    
    missaAtual.forEach((cantico, index) => {
        texto += `${index + 1}. ${cantico.nome} (${cantico.categoria})\\n`;
    });
    
    texto += `\\n\\nGerado em: ${new Date().toLocaleString('pt-BR')}`;
    
    const blob = new Blob([texto], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `missa_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// Função para sincronizar com GitHub (placeholder)
function sincronizarComGitHub(dadosMissa) {
    // TODO: Implementar integração real com GitHub API
    console.log('Sincronizando com GitHub:', dadosMissa);
    
    // Por enquanto, apenas simula a sincronização
    setTimeout(() => {
        console.log('Dados sincronizados com GitHub (simulado)');
    }, 1000);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    gerarCategorias();
    configurarDropZone();
    configurarPesquisa();
    
    // Fechar popup ao clicar fora
    document.getElementById('pdfPopup').addEventListener('click', (e) => {
        if (e.target.id === 'pdfPopup') {
            fecharPopup();
        }
    });
    
    // Fechar popup com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            fecharPopup();
        }
    });
});

// Função para carregar missas salvas (para futuras implementações)
function carregarMissasSalvas() {
    const missasSalvas = JSON.parse(localStorage.getItem('missasSalvas') || '[]');
    return missasSalvas;
}

