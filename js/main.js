document.addEventListener('DOMContentLoaded', function() {
    // Variáveis globais
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
    const contentPlaceholders = document.querySelectorAll('.content-placeholder');
    
    // Função para carregar conteúdo Markdown
    async function loadMarkdownContent() {
        for (const placeholder of contentPlaceholders) {
            const contentFile = placeholder.dataset.content;
            if (!contentFile) continue;

            try {
                const response = await fetch(`conteudo/${contentFile}`);
                if (!response.ok) {
                    throw new Error(`Erro ao carregar ${contentFile}: ${response.status}`);
                }

                const markdown = await response.text();
                const html = marked.parse(markdown);

                placeholder.innerHTML = `<div class="markdown-content">${html}</div>`;
                Prism.highlightAllUnder(placeholder);
            } catch (error) {
                console.error(error);
                placeholder.innerHTML = `<div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    Erro ao carregar o conteúdo: ${error.message}
                </div>`;
            }

        }
    }
    
    // Função para mostrar uma seção específica
    function showSection(sectionId) {
        // Esconder todas as seções
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar a seção selecionada
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            
            // Atualizar URL com hash
            history.pushState(null, null, `#${sectionId}`);
        }
        
        // Atualizar links de navegação ativos
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
        
        // Fechar menu móvel se estiver aberto
        if (window.innerWidth <= 768) {
            mainNav.classList.remove('active');
        }
        
        // Rolar para o topo da seção
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Inicializar navegação
    function initNavigation() {
        // Adicionar event listeners aos links de navegação
        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('href').substring(1);
                showSection(sectionId);
            });
        });
        
        // Adicionar event listener ao botão de menu móvel
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
        
        // Adicionar event listeners aos botões de navegação
        const navButtons = document.querySelectorAll('.navigation-buttons a');
        navButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = this.getAttribute('href').substring(1);
                showSection(sectionId);
            });
        });
        
        // Verificar hash na URL para navegação direta
        if (window.location.hash) {
            const sectionId = window.location.hash.substring(1);
            showSection(sectionId);
        } else {
            // Mostrar a primeira seção por padrão
            showSection('introducao');
        }
    }
    
    // Inicializar o site
    async function initSite() {
        // Carregar conteúdo Markdown
        await loadMarkdownContent();
        
        // Inicializar navegação
        initNavigation();
        
        // Adicionar event listener para mudanças na URL
        window.addEventListener('popstate', function() {
            if (window.location.hash) {
                const sectionId = window.location.hash.substring(1);
                showSection(sectionId);
            } else {
                showSection('introducao');
            }
        });
    }
    
    // Iniciar o site
    initSite();
});
