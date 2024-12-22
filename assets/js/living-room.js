function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.styles_InfoBubble__W6nGC');

    dots.forEach(dot => {
        dot.addEventListener('mouseenter', function() {
            const tooltip1 = document.createElement('div');
            tooltip1.classList.add('tooltip1');
            tooltip1.innerText = dot.getAttribute('data-name');
            document.body.appendChild(tooltip1);

            const dotRect = dot.getBoundingClientRect();
            tooltip1.style.top = `${dotRect.top - tooltip1.offsetHeight - 10}px`;
            tooltip1.style.left = `${dotRect.left + (dotRect.width / 2) - (tooltip1.offsetWidth / 2)}px`;
            tooltip1.style.display = 'block';

            dot.addEventListener('mouseleave', function() {
                tooltip1.remove();
            }, { once: true });
        });

        // dot.addEventListener('click', function() {
        //     window.location.href = dot.getAttribute('data-link');
        // });
    });
});
