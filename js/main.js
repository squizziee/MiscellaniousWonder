$(".nav-switch").click(function() {
    $(".navbar-menu").toggleClass("navbar-menu_active");
});

$(".checkbox-container").click(function() {
    $(this).toggleClass("checkbox_active");
});

function redirect(URL) {
    window.location = URL;
}