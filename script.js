$(document).ready(function() {
    // DARK MODE
    let darkModeButton = $('#darkModeButton');
    let body = $('body');
    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Check for saved preference in localStorage
    let savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        body.addClass('darkMode');
        darkModeButton.text("Light Mode");
    } else if (savedMode === 'false') {
        body.removeClass('darkMode');
        darkModeButton.text("Dark Mode");
    } else {
        // No saved preference, check system preference
        if (darkModeMediaQuery.matches) {
            body.addClass('darkMode');
            darkModeButton.text("Light Mode");
        } else {
            body.removeClass('darkMode');
            darkModeButton.text("Dark Mode");
        }
    }

    // Toggle dark mode on button click
    darkModeButton.click(function() {
        if (body.hasClass('darkMode')) {
            body.removeClass('darkMode');
            darkModeButton.text("Dark Mode");
            localStorage.setItem('darkMode', 'false');
        } else {
            body.addClass('darkMode');
            darkModeButton.text("Light Mode");
            localStorage.setItem('darkMode', 'true');
        }
    });

    // Listen for system preference changes
    darkModeMediaQuery.addEventListener('change', (e) => {
        if (e.matches) {
            body.addClass('darkMode');
            darkModeButton.text("Light Mode");
        } else {
            body.removeClass('darkMode');
            darkModeButton.text("Dark Mode");
        }
    });

    // CURRENT YEAR
    let currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
});