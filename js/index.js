<<<<<<< HEAD
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

=======
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

>>>>>>> ba7196f3712af0f88185e816a979df18287d649f
