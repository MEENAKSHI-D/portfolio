// 🎯 MENU TOGGLE
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});



// 🎯 CLOSE MENU WHEN CLICKING A LINK
const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});


// 🎯 ACTIVE LINK HIGHLIGHT
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});


// 🎯 SMOOTH SCROLL (for same-page links)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
