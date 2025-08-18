document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const languageSelect = document.getElementById('language-select');
    const chapterListId = document.getElementById('chapter-list-id');
    const chapterListEn = document.getElementById('chapter-list-en');

    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    // Toggle theme
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Switch chapter list based on language
    languageSelect.addEventListener('change', (event) => {
        if (event.target.value === 'id') {
            chapterListId.style.display = 'block';
            chapterListEn.style.display = 'none';
        } else {
            chapterListId.style.display = 'none';
            chapterListEn.style.display = 'block';
        }
    });
});
