function waitForElement(elementId, callback) {
    if (document.getElementById(elementId)) {
        callback();
    } else {
        setTimeout(function () {
            waitForElement(elementId, callback);
        }, 100);
    }
}

waitForElement("switch-mode", function () {
    // Code pour gérer l'élément switch-mode
    var switchmode = document.getElementById("switch-mode");

    // Fonction pour détecter le mode de thème préféré de l'utilisateur
    function detectPreferredTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add("dark-mode");
            if (switchmode) {
                switchmode.classList.remove("bx-sun");
                switchmode.classList.add("bx-moon");
            }
        } else {
            document.body.classList.remove("dark-mode");
            if (switchmode) {
                switchmode.classList.remove("bx-moon");
                switchmode.classList.add("bx-sun");
            }
        }

        // Vérifie si le choix de l'utilisateur est stocké dans sessionStorage
        const userTheme = sessionStorage.getItem("theme");
        if (userTheme === "dark") {
            document.body.classList.add("dark-mode");
            switchmode.classList.remove("bx-sun");
            switchmode.classList.add("bx-moon");
        } else if (userTheme === "light") {
            document.body.classList.remove("dark-mode");
            switchmode.classList.remove("bx-moon");
            switchmode.classList.add("bx-sun");
        }
    }

    // Appel initial pour détecter le thème au chargement de la page
    detectPreferredTheme();

    // Gestionnaire de clic pour basculer entre les modes clair et sombre
    switchmode.onclick = function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            switchmode.classList.remove("bx-sun");
            switchmode.classList.add("bx-moon");
            sessionStorage.setItem("theme", "dark");
        } else {
            switchmode.classList.remove("bx-moon");
            switchmode.classList.add("bx-sun");
            sessionStorage.setItem("theme", "light");
        }
    };
});