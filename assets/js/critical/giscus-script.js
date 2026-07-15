// This script is responsible for loading the Giscus widget and updating its theme based on the user's preference.
window.addEventListener('DOMContentLoaded', () => {
    function setTheme() {
        const theme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
        
        const giscusScript = document.getElementById('giscus-script');
        if (!giscusScript) return;

        const script = document.createElement('script');

        Array.from(giscusScript.attributes).forEach(attr => {
            script.setAttribute(attr.name, attr.value);
        });

        script.setAttribute('data-theme', theme);
        giscusScript.parentNode.replaceChild(script, giscusScript);
    }

    document.querySelectorAll('.navbar-mode-selector').forEach(chk => {
        chk.addEventListener('change', function () {
            setTheme();  
        })
    })

    setTheme();
})