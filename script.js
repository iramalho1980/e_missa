// Estrutura de dados dos cânticos
let canticosData = {};
let missaOrder = [];

// Elementos DOM
const canticosList = document.getElementById('canticos-list');
const missaOrderElement = document.getElementById('missa-order');
const searchInput = document.getElementById('search-input');
const popup = document.getElementById('popup');
const pdfViewer = document.getElementById('pdf-viewer');
const closeButton = document.querySelector('.close-button');
const saveMissaBtn = document.getElementById('save-missa');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    loadCanticos();
    setupEventListeners();
    loadSavedMissa();
});

// Carregar cânticos da estrutura de pastas
function loadCanticos() {
    // Estrutura reorganizada na sequência da missa do tempo comum
    canticosData = {
        'Entrada': [
            'a_biblia_e_a_palavra_de_deus.pdf',
            'bom_pastor.pdf',
            'coração_santo.pdf',
            'cristo_ressucitou_aleluia.pdf',
            'deixa_a_luz_do_ceu_entrar.pdf',
            'eis_me_aqui_senhor.pdf',
            'esatremos_aqui_reunidos.pdf',
            'faco_novas_todas_as_coisas.pdf',
            'hosana_hey_hosana_ha.pdf',
            'por_sua_morte.pdf',
            'porque_ele_vive.pdf',
            'senhor_quem_entrara.pdf',
            'te_amarei.pdf',
            'toda_biblia_e_comunicacao.pdf',
            'tu_es_a_razao_da_jornada.pdf',
            'vem_louvar.pdf',
            'creio.jpeg',
            'tu_es_a_razao_da_jornada_novo.jpeg'
        ],
        'Ato Penitencial': [
            'conheco_um_coracao.pdf',
            'coracoes_arrependidos.pdf',
            'kyrie_eleison_jmj.pdf',
            'pelos_pecados_senhor_piedade_de_nos.pdf',
            'perdao_senhor.pdf',
            'renovame.pdf',
            'renovame_ii.pdf',
            'senhor_que_viestes_salvar_kirie_elleisson.pdf',
            'senhor_tende_piedade_de_nos.pdf',
            'senhor_tende_piedade_perdoai_nossa_culpa.pdf',
            'senhor_que_viestes_salvar_novo.jpeg'
        ],
        'Glória': [
            'a_ele_seja_a_gloria.pdf',
            'gloria_a_deus_nas_alturas.pdf',
            'gloria_a_deus_nas_alturas__rock_balada.pdf',
            'gloria_ao_pai_criador.pdf',
            'gloria_a_deus_nas_alturas_novo.jpeg',
            'gloria_continuacao.jpeg'
        ],
        'Aclamação Evangelho': [
            'a_minhalma_abrirei.pdf',
            'a_vossa_palavra_senhor.pdf',
            'aleluia_como_o_pai_me_amou.pdf',
            'buscai_primeiro_o_reino_de_deus.pdf',
            'como_sao_belos.pdf',
            'eu_vim_para_escutar.pdf',
            'palavra_de_salvacao.pdf',
            'que_alegria_cristo_ressurgiu.pdf',
            'vai_falar_no_evangelho.pdf',
            'vinde_espirito_de_deus.pdf',
            'a_vossa_palavra_senhor_novo.jpeg'
        ],
        'Ofertório': [
            'de_maos_estendidas.pdf',
            'meu_coracao_eh_para_ti.pdf',
            'minha_vida_tem_sentido.pdf',
            'muitos_graos_de_trigo.pdf',
            'ofertas_singelas.pdf',
            'sabes_senhor.pdf',
            'um_coracao_para_amar.pdf',
            'os_dons_que_trago_aqui.jpeg'
        ],
        'Santo': [
            'hosana_eh.pdf',
            'hosana_no_alto_ceu.pdf',
            'o_senhor_eh_santo.pdf',
            'santo_santo_e.pdf',
            'santo_santo_santo_eh_o_senhor_novo.jpeg'
        ],
        'Cordeiro': [
            'cordeiro_do_maior.pdf'
        ],
        'Comunhão': [
            'a_barca.pdf',
            'a_ti_meu_deus.pdf',
            'antes_da_morte_e_ressurreicao.pdf',
            'cantar_a_beleza_da_vida.pdf',
            'como_es_lindo.pdf',
            'conheço_um_coração.pdf',
            'da_cepa_brotou_a_rama.pdf',
            'desamarrem_as_sandalias.pdf',
            'estas_entre_nos.pdf',
            'este_pranto_em_minhas_maos.pdf',
            'eu_navegarei.pdf',
            'eu_quis_comer_esta_ceia_agora.pdf',
            'eu_vim_para_que_todos_tenham_vida.pdf',
            'pelos_prados.pdf',
            'procuro_abrigo_nos_coracoes.pdf',
            'quando_teu_pai_revelou.pdf',
            'quem_nos_separara.pdf',
            'sacramento_da_comunhao.pdf',
            'sim_eu_quero.pdf',
            'sonda_me.pdf',
            'vem_eu_mostrarei.pdf',
            'vou_cantar_teu_amor.pdf',
            'eis_que_sou_o_pao_da_vida.jpeg',
            'todo_aquele_que_comer.jpeg'
        ],
        'Abraço de Paz': [
            'esteja_sempre_com_voce.pdf',
            'irmao_minha_paz_eu_te_dou.pdf',
            'paz_paz_de_cristo.pdf'
        ],
        'Final': [
            'a_alegria_esta_no_coracao.pdf',
            'como_o_pai_me_enviou.pdf',
            'cristo_eh_a_felicidade.pdf',
            'deixa_luz_do_ceu_entrar.pdf',
            'hoje_e_tempo_de_louvar.pdf',
            'pelas_estradas_da_vida.pdf',
            'segura_na_mao_de_deus.pdf',
            'tomado_pela_mao.pdf',
            'tu_es_razao_jornada.pdf'
        ],
        'Cantos Marianos': [
            'a_escolhida.pdf',
            'ave_cheia_de_graca.pdf',
            'imaculada_maria_de_deus.pdf',
            'maria_de_nazare.pdf',
            'santa_mae_maria.pdf',
            'santa_maria_vem.pdf'
        ],
        'Louvor e Meditação': [
            'Desamarrem_as_sandálias.pdf',
            'a_alegria_esta_no_coracao.pdf',
            'a_nos_descei_divina_luz.pdf',
            'agua_viva.pdf',
            'amar_como_jesus_amou.pdf',
            'bate_o_sino.pdf',
            'eu_louvarei.pdf',
            'eu_quero_um_rio.pdf',
            'louvado_seja_o_meu_senhor.pdf',
            'meu_mestre__a_minha_vida_e_do_mestre.pdf',
            'noite_feliz.pdf',
            'noites_traicoeiras.pdf',
            'oracao_da_familia.pdf',
            'oracao_de_sao_francisco.pdf',
            'podes_reinar.pdf',
            'quao_grande_es_tu.pdf',
            'segura_na_mao_de_deus.pdf',
            'tao_sublime.pdf',
            'vou-cantar-teu-amor.pdf'
        ],
        'Ação de graças': [
            'deus_esta_aqui.pdf',
            'e_impossivel_nao_crer_em_ti.pdf',
            'espirito_santo.pdf',
            'obrigado_senhor.pdf',
            'so_em_ti.jpeg'
        ],
        'Diversos': [
            'podes_reinar.pdf',
            'prova_de_amor.pdf'
        ]
    };

    renderCanticos();
}

// Renderizar cânticos na interface
function renderCanticos() {
    canticosList.innerHTML = '';
    
    Object.keys(canticosData).forEach(category => {
        const categoryCard = createCategoryCard(category, canticosData[category]);
        canticosList.appendChild(categoryCard);
    });
}

// Criar card de categoria
function createCategoryCard(categoryName, canticos) {
    const card = document.createElement('div');
    card.className = 'category-card collapsed';
    
    const header = document.createElement('div');
    header.className = 'category-header';
    header.onclick = () => toggleCategory(card);
    
    const title = document.createElement('div');
    title.className = 'category-title';
    title.textContent = categoryName;
    
    const toggleIcon = document.createElement('div');
    toggleIcon.className = 'toggle-icon';
    toggleIcon.textContent = '▼';
    
    header.appendChild(title);
    header.appendChild(toggleIcon);
    
    const canticosList = document.createElement('div');
    canticosList.className = 'canticos-list';
    
    canticos.forEach(cantico => {
        const canticoItem = createCanticoItem(cantico, categoryName);
        canticosList.appendChild(canticoItem);
    });
    
    card.appendChild(header);
    card.appendChild(canticosList);
    
    return card;
}

// Criar item de cântico
function createCanticoItem(canticoFile, category) {
    const item = document.createElement('div');
    item.className = 'cantico-item';
    item.draggable = true;
    
    const canticoName = formatCanticoName(canticoFile);
    item.textContent = canticoName;
    item.dataset.file = canticoFile;
    item.dataset.category = category;
    
    // Event listeners para drag and drop
    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
    item.addEventListener('click', () => openPDF(canticoFile, category));
    
    return item;
}

// Formatar nome do cântico
function formatCanticoName(filename) {
    return filename
        .replace('.pdf', '')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());
}

// Toggle categoria
function toggleCategory(card) {
    card.classList.toggle('collapsed');
}

// Configurar event listeners
function setupEventListeners() {
    // Busca
    searchInput.addEventListener('input', handleSearch);
    
    // Drop zone da missa
    missaOrderElement.addEventListener('dragover', handleDragOver);
    missaOrderElement.addEventListener('drop', handleDrop);
    missaOrderElement.addEventListener('dragenter', handleDragEnter);
    missaOrderElement.addEventListener('dragleave', handleDragLeave);
    
    // Popup
    closeButton.addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });
    
    // Salvar missa
    saveMissaBtn.addEventListener('click', saveMissa);
    
    // Tecla ESC para fechar popup
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closePopup();
    });
}

// Busca de cânticos
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const allCanticos = document.querySelectorAll('.cantico-item');
    
    allCanticos.forEach(item => {
        const text = item.textContent.toLowerCase();
        const match = text.includes(searchTerm);
        item.style.display = match ? 'block' : 'none';
        
        // Expandir categoria se houver match
        if (match && searchTerm) {
            const categoryCard = item.closest('.category-card');
            categoryCard.classList.remove('collapsed');
        }
    });
    
    // Se não há busca, recolher todas as categorias
    if (!searchTerm) {
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.add('collapsed');
        });
    }
}

// Drag and Drop handlers
function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', JSON.stringify({
        file: this.dataset.file,
        category: this.dataset.category,
        name: this.textContent
    }));
    this.classList.add('dragging');
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDragEnter(e) {
    e.preventDefault();
    missaOrderElement.classList.add('drag-over');
}

function handleDragLeave(e) {
    if (!missaOrderElement.contains(e.relatedTarget)) {
        missaOrderElement.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    missaOrderElement.classList.remove('drag-over');
    
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    addToMissa(data);
}

// Adicionar cântico à missa
function addToMissa(canticoData) {
    const missaItem = document.createElement('div');
    missaItem.className = 'missa-item';
    
    const canticoInfo = document.createElement('div');
    canticoInfo.innerHTML = `
        <strong>${canticoData.name}</strong><br>
        <small>${canticoData.category}</small>
    `;
    
    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.innerHTML = '×';
    removeBtn.onclick = () => {
        missaItem.remove();
        updateMissaOrder();
    };
    
    missaItem.appendChild(canticoInfo);
    missaItem.appendChild(removeBtn);
    missaItem.dataset.file = canticoData.file;
    missaItem.dataset.category = canticoData.category;
    
    // Adicionar evento de clique para abrir PDF
    canticoInfo.addEventListener('click', () => {
        openPDF(canticoData.file, canticoData.category);
    });
    
    missaOrderElement.appendChild(missaItem);
    updateMissaOrder();
}

// Atualizar ordem da missa
function updateMissaOrder() {
    missaOrder = Array.from(missaOrderElement.children).map(item => ({
        file: item.dataset.file,
        category: item.dataset.category,
        name: item.querySelector('strong').textContent
    }));
}

// Abrir PDF ou imagem no popup
function openPDF(filename, category) {
    const filePath = `letras/${category}/${filename}`;
    const fileExtension = filename.split('.').pop().toLowerCase();
    
    if (fileExtension === 'pdf') {
        pdfViewer.src = filePath;
    } else if (fileExtension === 'jpeg' || fileExtension === 'jpg') {
        // Para imagens, criar um elemento img dentro do iframe
        pdfViewer.src = `data:text/html,<html><body style="margin:0;padding:20px;background:#f0f0f0;display:flex;justify-content:center;align-items:center;min-height:100vh;"><img src="${filePath}" style="max-width:100%;max-height:100%;object-fit:contain;" alt="Cântico"></body></html>`;
    }
    
    popup.classList.add('show');
    
    // Adicionar efeito de fade in
    setTimeout(() => {
        popup.style.opacity = '1';
    }, 10);
}

// Fechar popup
function closePopup() {
    popup.style.opacity = '0';
    setTimeout(() => {
        popup.classList.remove('show');
        pdfViewer.src = '';
    }, 300);
}

// Salvar missa no GitHub (simulação)
async function saveMissa() {
    if (missaOrder.length === 0) {
        alert('Adicione pelo menos um cântico à missa antes de salvar.');
        return;
    }
    
    const missaData = {
        timestamp: new Date().toISOString(),
        canticos: missaOrder
    };
    
    try {
        // Salvar localmente primeiro
        localStorage.setItem('missa_atual', JSON.stringify(missaData));
        
        // Simular salvamento no GitHub
        await simulateGitHubSave(missaData);
        
        alert('Missa salva com sucesso!');
    } catch (error) {
        console.error('Erro ao salvar:', error);
        alert('Erro ao salvar a missa. Tente novamente.');
    }
}

// Simular salvamento no GitHub
async function simulateGitHubSave(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Dados salvos no GitHub:', data);
            resolve();
        }, 1000);
    });
}

// Carregar missa salva
function loadSavedMissa() {
    const savedMissa = localStorage.getItem('missa_atual');
    if (savedMissa) {
        const missaData = JSON.parse(savedMissa);
        missaData.canticos.forEach(cantico => {
            addToMissa(cantico);
        });
    }
}

// Função para recarregar cânticos dinamicamente (para futuras atualizações)
function reloadCanticos() {
    // Esta função pode ser expandida para verificar mudanças na pasta
    loadCanticos();
}

// Exportar funções para uso global
window.EMissa = {
    reloadCanticos,
    saveMissa,
    loadSavedMissa
};

