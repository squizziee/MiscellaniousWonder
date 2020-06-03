$(".nav-switch").click(function () {
    $(".navbar-menu").toggleClass("navbar-menu_active");
});

$(".checkbox-container").click(function () {
    $(this).toggleClass("checkbox_active");
});

function redirect(URL) {
    window.location = URL;
}

$(".filters-toggle-btn").click(function () {
    $(".filters-menu").toggleClass("filters-menu-active");
});

$(".close-animatedModal").click(function () {
    location.reload();
});

$(".navbar-menu-option").click(function() {
    $(this).toggleClass("navbar-menu-option-active");
});

$('.count .number').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

setTimeout(() => {
    $(".preloader").addClass("animate__hinge")
}, 3500);