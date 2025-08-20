document.addEventListener('DOMContentLoaded', () => {
    const fontIncrease = document.getElementById('font-increase');
    const fontDecrease = document.getElementById('font-decrease');
    const chapterContent = document.querySelector('.chapter-content');
    
    // Set initial font size
    let currentFontSize = 16; // Default font size in pixels

    // Function to update font size
    function updateFontSize() {
        chapterContent.style.fontSize = `${currentFontSize}px`;
    }

    // Increase font size
    fontIncrease.addEventListener('click', () => {
        if (currentFontSize < 24) { // Max font size limit
            currentFontSize += 2;
            updateFontSize();
        }
    });

    // Decrease font size
    fontDecrease.addEventListener('click', () => {
        if (currentFontSize > 12) { // Min font size limit
            currentFontSize -= 2;
            updateFontSize();
        }
    });
});
