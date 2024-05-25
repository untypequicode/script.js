document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    if (typeof logo !== "undefined") {
        const logoElement = document.createElement("a");
        if (typeof logo.type !== "undefined" && typeof logo.content !== "undefined") {
            if (logo.type === "image") {
                const logoImage = document.createElement("img");
                logoImage.classList.add("logo-img");
                logoImage.src = logo.content;
                logoImage.alt = "Logo";
                logoElement.appendChild(logoImage);
            } else if (logo.type === "text") {
                logoElement.textContent = logo.content;
            } else if (logo.type === "imagetext") {
                if (Array.isArray(logo.content) && logo.content.length === 2) {
                    const logoImage = document.createElement("img");
                    logoImage.classList.add("logo-img");
                    logoImage.src = logo.content[0];
                    logoImage.alt = "Logo";
                    logoElement.appendChild(logoImage);
                    logoElement.appendChild(document.createTextNode(logo.content[1]));
                }
            }
        }
        if (typeof logo.link !== "undefined") {
            logoElement.href = logo.link;
            if (typeof logo.index !== "undefined" && logo.index === document.body.dataset.active) {
                logoElement.href = "#";
            }
        }
        logoElement.classList.add("logo");
        header.appendChild(logoElement);
    }

    let menuIcon = document.createElement("div");
    menuIcon.classList.add("bx", "bx-menu");
    menuIcon.id = "menu-icon";
    header.appendChild(menuIcon);

    let navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    const activeNav = document.createElement("span");
    activeNav.classList.add("active-nav");

    if (typeof db_header !== "undefined") {
        db_header.forEach(function (link) {
            if (typeof link.text !== "undefined" && typeof link.url !== "undefined") {
                const navItem = document.createElement("a");
                navItem.href = link.url;
                navItem.textContent = link.text;
                if (link.text === document.body.dataset.active) {
                    navItem.classList.add("active");
                    navItem.href = "#";
                }
                navbar.appendChild(navItem);
            }
        });
    }

    if (typeof switch_mode !== "undefined" && switch_mode === "true") {
        const switchMode = document.createElement("i");
        switchMode.classList.add("bx", "bxs-sun");
        switchMode.id = "switch-mode";
        navbar.appendChild(switchMode);
    }
    
    if (typeof db_header_link !== "undefined" && Array.isArray(db_header_link) && db_header_link.length > 0) {
        document.querySelectorAll(".header-link").forEach((item) => item.remove());
        const navItems = document.createElement("div");
        navItems.classList.add("header-links");
        
        db_header_link.forEach(function (link) {
            if (typeof link.text !== "undefined" && typeof link.url !== "undefined" && typeof link.content !== "undefined") {
                const navItem = document.createElement("a");
                navItem.classList.add("header-link");
                navItem.target = "_blank";
                navItem.href = link.url;
                navItem.ariaLabel = link.text;
                navItem.innerHTML = link.content;
                navItems.appendChild(navItem);
            }
        });
        navbar.appendChild(navItems);
    }
    
    navbar.appendChild(activeNav);
    header.appendChild(navbar);

    menuIcon = document.getElementById("menu-icon");
    navbar = document.querySelector(".navbar");

    menuIcon.onclick = () => {
        navbar.classList.toggle("active");
        menuIcon.classList.toggle("bx-x");
    };
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    if (sections.length > 0) {
        sections.forEach((sec) => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                if (navLinks.length > 0) {
                    navLinks.forEach((links) => {
                        links.classList.remove("active");
                        if (document.querySelector("header nav a[href*=" + id + "]") !== null) {
                            document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
                        }
                    });
                }
                sec.classList.add("show-animate");
            }
            else {
                sec.classList.remove("show-animate");
            }
        });
    }
    let header = document.querySelector(".header");

    if (header !== null) {
        header.classList.toggle("sticky", window.scrollY > 100);
    }

    let menuIcon = document.getElementById("menu-icon");
    let navbar = document.querySelector(".navbar");

    if (menuIcon.classList.contains("bx-x")) {
        menuIcon.classList.remove("bx-x");
    }
    navbar.classList.remove("active");

    let footer = document.querySelector("footer");

    footer.classList.toggle("show-animate", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}