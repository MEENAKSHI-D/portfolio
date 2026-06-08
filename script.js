
const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});




const navLinks = document.querySelectorAll("#navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});



navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(nav => nav.classList.remove("active"));
        this.classList.add("active");
    });
});



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

document.addEventListener("DOMContentLoaded", function () {

    const words = ["Full Stack Developer", "Problem Solver", "Designer"];
    let i = 0;
    let j = 0;
    let currentWord = "";
    let isDeleting = false;

    const typing = document.getElementById("typing");

    function type() {
        currentWord = words[i];

        if (isDeleting) {
    j--;
    typing.textContent = currentWord.substring(0, j);
} else {
    j++;
    typing.textContent = currentWord.substring(0, j);
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

        setTimeout(type, isDeleting ? 40 : 80);
    }

    type();
});