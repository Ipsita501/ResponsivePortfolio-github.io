// Accordion Functionality
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.accordion-item');
        item.classList.toggle('active');
    });
});

// Dark Mode Toggle
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
