const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

$( document ).ready(function() {
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
});