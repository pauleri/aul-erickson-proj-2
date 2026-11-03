const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {

    accordion.setAttribute('aria-expanded', 'false');

    accordion.addEventListener('click', function() {


        this.classList.toggle('active');


        const panel = this.nextElementSibling;

        const isOpen = this.classList.contains('active');
        this.setAttribute('aria-expanded', String(isOpen));

        if (isOpen) {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        } else {
            panel.style.maxHeight = null;
        }

    });

});