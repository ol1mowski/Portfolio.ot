function scroll(e) {
    const href = $(this).attr('href');
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 800);

    location.hash = href;
};

$('a[href*="#"]').click(scroll);


//Sticky MENU
window.onload = function() { myFunction() };

const navbar = document.getElementById("header");

const sticky = navbar.offsetTop;

let myFunction = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}