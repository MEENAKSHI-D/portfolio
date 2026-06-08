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

const words = ["Full Stack Developer", "Software Developer", "Designer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typing = document.getElementById("typing");

function type() {
    currentWord = words[i];

    if (isDeleting) {
        typing.textContent = currentWord.substring(0, j--);
    } else {
        typing.textContent = currentWord.substring(0, j++);
    }

    if (!isDeleting && j === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();