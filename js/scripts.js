$(document).ready(function () {
    $(".header-content__category").hover(function() {
        $(this).parent().find(".catergoty__dropdown").css("display", "flex");
    }, function() {
        $(this).parent().find(".catergoty__dropdown").css("display", "none");
    });

    $(".catergoty__dropdown__main-menu li").hover(function() {
        $(this).parent().find(".submenu").css("display", "flex");
    }, function() {
        $(this).parent().find(".submenu").css("display", "none");
    });
})