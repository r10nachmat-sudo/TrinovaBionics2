document.addEventListener('DOMContentLoaded', () => {
    // Código simple para simular un efecto de "encendido" al cargar la página.
    
    const elements = document.querySelectorAll('.neon-text, .cta-button, .logo');

    elements.forEach(el => {
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = 'opacity 2s';
            el.style.opacity = 1;
        }, 100);
    });

    // Pequeño script para agregar interactividad a las tarjetas (opcional)
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            console.log(`Tarjeta clicada: ${card.querySelector('h3').textContent}`);
            // Aquí podrías agregar una animación o una ventana modal con más info
        });
    });

});
