// Gerar bolhas animadas
function createBubbles() {
    const container = document.getElementById('bubbles-container');
    const bubbleCount = 20;
    
    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 5 + Math.random() * 5;
        const size = 20 + Math.random() * 60;
        
        bubble.style.left = `${left}%`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        container.appendChild(bubble);
    }
}

// Alternar entre seções
function showSection(sectionId) {
    // Remover classe active de todas as seções
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Adicionar classe active à seção selecionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Atualizar botões de navegação
    const buttons = document.querySelectorAll('.nav-buttons .glass-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Adicionar classe active ao botão correspondente
    const activeButton = Array.from(buttons).find(button => {
        const onclick = button.getAttribute('onclick');
        return onclick && onclick.includes(sectionId);
    });
    
    if (activeButton) {
        activeButton.classList.add('active');
    }
    
    // Rolar para o topo suavemente
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    createBubbles();
    
    // Garantir que a seção inicial esteja ativa
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }
});

// Adicionar efeito de parallax suave ao scroll
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const blobs = document.querySelectorAll('.blob');
    
    blobs.forEach((blob, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        blob.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
});
