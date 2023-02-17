//delay scroll
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

//Hamburger Menu

$(document).ready(function() {
    $('#hamburger').click(function() {
        $('#menu').toggle('slow');
    });
    $('#hamburger').click(function() {
        $('#header').css('height', '36vh');
    });

});

//form remove content in input 

const sendButton = document.querySelector('#Sub');
const InputAll = document.querySelector('.contact__form-input');


sendButton.addEventListener('click', () => {
    InputAll.value == '';
})