
console.log('Gagandeep Singh: Copyright 2021')

function myFunction() {
    var x = document.getElementById("nav-side-menu");
    var burger = document.getElementById("burger");

    if (x.style.display === "block") {
        x.style.display = "none";
        burger.innerHTML = '<i class="fas fa-bars"></i>';
        burger.style.color = "var(--secondary-color)";
        burger.style.border = "1px solid var(--secondary-color)";
        burger.style.backgroundColor = "var(--primary-color)";

    } else {
        x.style.display = "block";
        x.style.overflow = "hidden";
        burger.innerHTML = '<i class="fas fa-times"></i>';
        burger.style.color = "var(--white)";
        burger.style.border = "1px solid var(--white)";
        burger.style.backgroundColor = "var(--secondary-color)";
    }
}

const breadcrumb = document.querySelectorAll('[aria-label="breadcrumb"]')


$(window).scroll(function () {
    console.log('What do we do' + breadcrumb);
    if(breadcrumb) {
        if ($(this).scrollTop() > 50) {
            $('nav').addClass('darkHeader');
        } else {
            $('nav').removeClass('darkHeader');
        }
    }
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
