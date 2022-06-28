const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelectorAll('.navLink');

navToggle.addEventListener("click", () => {
    document.body.classList.toggle("navOpen");
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('navOpen');
    });
});

