function myFunction() {
    var x = document.getElementById("nav-side-menu");
    var burger = document.getElementById("burger");
    var hey = document.getElementById("hey");
    var about = document.getElementById("about");

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

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('header').addClass('darkHeader');
    } else {
        $('header').removeClass('darkHeader');
    }
});