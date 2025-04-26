const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.textContent = 'Tema Claro';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggle.textContent = 'Tema Claro';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = 'Tema Oscuro';
        localStorage.setItem('theme', 'light');
    }
});

const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const countSpan = document.getElementById('count');

let count = 0;

function updateCount() {
    countSpan.textContent = count;
    
    if (count > 0) {
        countSpan.style.color = 'green';
    } else if (count < 0) {
        countSpan.style.color = 'red';
    } else {
        countSpan.style.color = '';
    }
}

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCount();
});

increaseBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

console.log('¡Aplicación cargada correctamente!');