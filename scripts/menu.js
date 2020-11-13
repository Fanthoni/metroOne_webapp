$(document).ready(function () {
    console.log("I'm ready");

    /* Variables for menu controlling*/
    var isX = false;
    var menuSlideIn = {"left": "-0%", "easing": "swing"};
    var menuSlideOut = {"left": "-85%", "easing": "swing"};

    /*
    When the hamburger menu is clicked, it changes to letter-x icon
    and the menu list is shown and vice versa.
    */
    $("#menu-icon").on("click", function (event) {
        if (!isX) {
            $(this).attr("src", "./images/letter-x.png");
            isX = true;

            /* Slide in (show) the menu*/
            $("#menu").animate(menuSlideIn, 300);
        } else {
            $(this).attr("src", "./images/hamburgerMenu.png");
            isX = false;

            /* Slide out the menu*/
            $("#menu").animate(menuSlideOut, 300);
        }
    });
});