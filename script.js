document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const langButtons = document.querySelectorAll('.lang-btn');
    const chapterLists = document.querySelectorAll('.chapters');

    // Theme Switch functionality
    themeSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', themeSwitch.checked);
        const heroSection = document.querySelector('.hero-section');
        const lnCover = document.querySelector('.ln-cover');
        const backgroundBlur = document.querySelector('.background-blur');

        if (lnCover && backgroundBlur) {
            const coverUrl = lnCover.src;
            backgroundBlur.style.backgroundImage = `url('${coverUrl}')`;
        }
    });

    // Language Switcher functionality
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            langButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            
            const selectedLang = button.dataset.lang;
            
            // Hide all chapter lists
            chapterLists.forEach(list => list.classList.remove('active'));
            
            // Show the selected chapter list
            document.querySelector(`.${selectedLang}-chapters`).classList.add('active');
        });
    });

    // Set initial background blur image
    const lnCover = document.querySelector('.ln-cover');
    const backgroundBlur = document.querySelector('.background-blur');
    if (lnCover && backgroundBlur) {
        const coverUrl = lnCover.src;
        backgroundBlur.style.backgroundImage = `url('${coverUrl}')`;
    }
});
