// Revela con fade-in solo las secciones que están debajo del primer viewport,
// para que el contenido visible al cargar no parpadee. Respeta prefers-reduced-motion.
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const pending = [...document.querySelectorAll('section:not(.reveal)')].filter(
        (section) => section.getBoundingClientRect().top > window.innerHeight
    );
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('js-reveal');
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    pending.forEach((section) => {
        section.classList.add('js-reveal');
        observer.observe(section);
    });
}
