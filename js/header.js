document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelector(".header");

    if (typeof logo !== "undefined") {
        var logoElement = document.createElement("a");
        if (typeof logo.type !== "undefined" && typeof logo.content !== "undefined") {
            if (logo.type === "image") {
                var logoImage = document.createElement("img");
                logoImage.classList.add("logo-img");
                logoImage.src = logo.content;
                logoImage.alt = "Logo";
                logoElement.appendChild(logoImage);
            } else if (logo.type === "text") {
                logoElement.textContent = logo.content;
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

    var menuIcon = document.createElement("div");
    menuIcon.classList.add("bx", "bx-menu");
    menuIcon.id = "menu-icon";
    header.appendChild(menuIcon);

    var navbar = document.createElement("nav");
    navbar.classList.add("navbar");

    var activeNav = document.createElement("span");
    activeNav.classList.add("active-nav");

    if (typeof db_header !== "undefined") {
        db_header.forEach(function (link) {
            if (typeof link.text !== "undefined" && typeof link.url !== "undefined") {
                var navItem = document.createElement("a");
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

    menuIcon = document.getElementById("menu-icon");
    navbar = document.querySelector(".navbar");

    if (menuIcon.classList.contains("bx-x")) {
        menuIcon.classList.remove("bx-x");
    }
    navbar.classList.remove("active");

    let footer = document.querySelector("footer");

    footer.classList.toggle("show-animate", this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}