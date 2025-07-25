// Configuração do GitHub
const GITHUB_CONFIG = {
    username: 'iramalho1980',
    repo: 'e_missa',
    token: '', // Token será configurado via variável de ambiente ou input do usuário
    apiUrl: 'https://api.github.com'
};

// Classe para gerenciar integração com GitHub
class GitHubIntegration {
    constructor(config) {
        this.config = config;
        this.headers = {
            'Authorization': `token ${config.token}`,
            'Accept': 'application/vnd.github.v3+json',
            'Content-Type': 'application/json'
        };
    }

    // Salvar dados da missa no GitHub
    async saveMissaToGitHub(missaData) {
        try {
            const filename = `missa_${new Date().toISOString().split('T')[0]}.json`;
            const content = btoa(JSON.stringify(missaData, null, 2));
            
            // Verificar se o arquivo já existe
            const existingFile = await this.getFile(filename);
            
            const data = {
                message: `Atualizar missa - ${new Date().toLocaleString('pt-BR')}`,
                content: content,
                branch: 'main'
            };

            if (existingFile) {
                data.sha = existingFile.sha;
            }

            const response = await fetch(
                `${this.config.apiUrl}/repos/${this.config.username}/${this.config.repo}/contents/${filename}`,
                {
                    method: 'PUT',
                    headers: this.headers,
                    body: JSON.stringify(data)
                }
            );

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erro ao salvar no GitHub:', error);
            throw error;
        }
    }

    // Obter arquivo do GitHub
    async getFile(filename) {
        try {
            const response = await fetch(
                `${this.config.apiUrl}/repos/${this.config.username}/${this.config.repo}/contents/${filename}`,
                {
                    headers: this.headers
                }
            );

            if (response.status === 404) {
                return null;
            }

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Erro ao obter arquivo:', error);
            return null;
        }
    }

    // Listar todas as missas salvas
    async listSavedMissas() {
        try {
            const response = await fetch(
                `${this.config.apiUrl}/repos/${this.config.username}/${this.config.repo}/contents/`,
                {
                    headers: this.headers
                }
            );

            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }

            const files = await response.json();
            return files.filter(file => file.name.startsWith('missa_') && file.name.endsWith('.json'));
        } catch (error) {
            console.error('Erro ao listar missas:', error);
            return [];
        }
    }

    // Carregar missa específica
    async loadMissa(filename) {
        try {
            const file = await this.getFile(filename);
            if (!file) {
                throw new Error('Arquivo não encontrado');
            }

            const content = atob(file.content);
            return JSON.parse(content);
        } catch (error) {
            console.error('Erro ao carregar missa:', error);
            throw error;
        }
    }

    // Verificar se o repositório existe e criar se necessário
    async ensureRepository() {
        try {
            const response = await fetch(
                `${this.config.apiUrl}/repos/${this.config.username}/${this.config.repo}`,
                {
                    headers: this.headers
                }
            );

            if (response.status === 404) {
                // Criar repositório
                return await this.createRepository();
            }

            return response.ok;
        } catch (error) {
            console.error('Erro ao verificar repositório:', error);
            return false;
        }
    }

    // Criar repositório
    async createRepository() {
        try {
            const data = {
                name: this.config.repo,
                description: 'Sistema E-Missa para organização de cânticos',
                private: false,
                auto_init: true
            };

            const response = await fetch(
                `${this.config.apiUrl}/user/repos`,
                {
                    method: 'POST',
                    headers: this.headers,
                    body: JSON.stringify(data)
                }
            );

            return response.ok;
        } catch (error) {
            console.error('Erro ao criar repositório:', error);
            return false;
        }
    }
}

// Instância global da integração
const githubIntegration = new GitHubIntegration(GITHUB_CONFIG);

// Função para salvar missa com integração GitHub
async function saveMissaWithGitHub() {
    if (missaOrder.length === 0) {
        alert('Adicione pelo menos um cântico à missa antes de salvar.');
        return;
    }

    const missaData = {
        timestamp: new Date().toISOString(),
        canticos: missaOrder,
        metadata: {
            totalCanticos: missaOrder.length,
            categorias: [...new Set(missaOrder.map(c => c.category))],
            criadoEm: new Date().toLocaleString('pt-BR')
        }
    };

    try {
        // Mostrar loading
        saveMissaBtn.textContent = 'Salvando...';
        saveMissaBtn.disabled = true;

        // Salvar localmente primeiro
        localStorage.setItem('missa_atual', JSON.stringify(missaData));

        // Verificar/criar repositório
        await githubIntegration.ensureRepository();

        // Salvar no GitHub
        await githubIntegration.saveMissaToGitHub(missaData);

        alert('Missa salva com sucesso no GitHub!');
    } catch (error) {
        console.error('Erro ao salvar:', error);
        alert('Erro ao salvar a missa no GitHub. Dados salvos localmente.');
    } finally {
        saveMissaBtn.textContent = 'Salvar Ordem da Missa';
        saveMissaBtn.disabled = false;
    }
}

// Função para carregar missas salvas do GitHub
async function loadMissasFromGitHub() {
    try {
        const missas = await githubIntegration.listSavedMissas();
        return missas;
    } catch (error) {
        console.error('Erro ao carregar missas:', error);
        return [];
    }
}

// Adicionar interface para gerenciar missas salvas
function createMissaManagerInterface() {
    const managerDiv = document.createElement('div');
    managerDiv.id = 'missa-manager';
    managerDiv.innerHTML = `
        <h3>Missas Salvas</h3>
        <div id="saved-missas-list"></div>
        <button id="load-missas-btn">Carregar Missas do GitHub</button>
    `;

    const missaSection = document.getElementById('missa-section');
    missaSection.appendChild(managerDiv);

    // Event listener para carregar missas
    document.getElementById('load-missas-btn').addEventListener('click', async () => {
        const missas = await loadMissasFromGitHub();
        displaySavedMissas(missas);
    });
}

// Exibir missas salvas
function displaySavedMissas(missas) {
    const listDiv = document.getElementById('saved-missas-list');
    listDiv.innerHTML = '';

    missas.forEach(missa => {
        const missaItem = document.createElement('div');
        missaItem.className = 'saved-missa-item';
        missaItem.innerHTML = `
            <span>${missa.name}</span>
            <button onclick="loadSpecificMissa('${missa.name}')">Carregar</button>
        `;
        listDiv.appendChild(missaItem);
    });
}

// Carregar missa específica
async function loadSpecificMissa(filename) {
    try {
        const missaData = await githubIntegration.loadMissa(filename);
        
        // Limpar missa atual
        missaOrderElement.innerHTML = '';
        
        // Carregar cânticos
        missaData.canticos.forEach(cantico => {
            addToMissa(cantico);
        });

        alert('Missa carregada com sucesso!');
    } catch (error) {
        console.error('Erro ao carregar missa:', error);
        alert('Erro ao carregar a missa.');
    }
}

// Substituir a função de salvar original
window.saveMissa = saveMissaWithGitHub;

// Inicializar interface de gerenciamento
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(createMissaManagerInterface, 1000);
});

