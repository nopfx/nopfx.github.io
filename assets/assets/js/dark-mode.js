// Dark Mode Toggle Script
document.addEventListener('DOMContentLoaded', function() {
    // Get the toggle button
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme based on saved preference or system preference
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = true;
        }
    } else {
        document.documentElement.classList.remove('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.checked = false;
        }
    }
    
    // Toggle theme when button is clicked
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function() {
            if (this.checked) {
                document.documentElement.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }
        });
    }
    
    // Add keyboard shortcut for toggling dark mode (Alt+D)
    document.addEventListener('keydown', function(e) {
        if (e.altKey && e.key === 'd') {
            if (darkModeToggle) {
                darkModeToggle.checked = !darkModeToggle.checked;
                darkModeToggle.dispatchEvent(new Event('change'));
            } else {
                const isDark = document.documentElement.classList.contains('dark-mode');
                if (isDark) {
                    document.documentElement.classList.remove('dark-mode');
                    localStorage.setItem('theme', 'light');
                } else {
                    document.documentElement.classList.add('dark-mode');
                    localStorage.setItem('theme', 'dark');
                }
            }
        }
    });
});
