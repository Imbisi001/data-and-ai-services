// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Current year
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Terminal effect with line sequencing
    const terminalLines = document.querySelectorAll('.terminal-command, .terminal-output');
    let typingDelay = 0;
    
    terminalLines.forEach(line => {
        const text = line.textContent;
        line.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typingInterval = setInterval(() => {
                if (i < text.length) {
                    line.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 20);
        }, typingDelay);
        
        typingDelay += text.length * 20 + 1000; // Adds pause between lines
    });

    // Project tabs - safe even if elements don't exist
    document.querySelectorAll('.project-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const categoryId = tab.getAttribute('data-category');
            if (!categoryId) return;
            
            document.querySelectorAll('.project-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.project-category').forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(categoryId)?.classList.add('active');
        });
    });

    // Smooth scrolling with fallback
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Animation delays
    document.querySelectorAll('.flicker').forEach(el => {
        el.style.animationDelay = `${Math.random() * 5}s`;
    });
    
    document.querySelectorAll('.floating').forEach(el => {
        el.style.animationDelay = `${Math.random() * 3}s`;
    });
});
