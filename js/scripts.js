$(document).ready(function () {
    $(".header-content__category").hover(function () {
        $(this).parent().find(".catergoty__dropdown").css("display", "flex");
    }, function () {
        $(this).parent().find(".catergoty__dropdown").css("display", "none");
    });

    $(".catergoty__dropdown__main-menu li").hover(function () {
        $(this).parent().find(".submenu").css("display", "flex");
    }, function () {
        $(this).parent().find(".submenu").css("display", "none");
    });

    // Product Promo 7 days tab

    $(".tab-item__link").click(function (e) {
        e.preventDefault();
        var $parent = $(this).parent();

        console.log("Parent: ", $parent);

        if(!$parent.hasClass("active-tab")) {
            $parent.siblings().removeClass("active-tab")
            $parent.addClass("active-tab");

            var prdPromoContentId = $(this).attr("href");
            console.log("Product contentID: ", prdPromoContentId);
            $(prdPromoContentId).removeClass("hidden");
            $(prdPromoContentId).siblings().addClass("hidden");
        }
    })

    //Footer Dropdown
    $("footer .showtaga").click(function (e) {
        e.preventDefault();

        var $parent = $(this).parent().parent();
        var $this = $(this);
        console.log($parent)

        if($parent.children().hasClass("hidden")) {
            $parent.children().removeClass("hidden");
            $this.addClass("hidden");
        }
    })

    //Check Scroll Position
    $(window).scroll(function (event) {
        var scrollY = $(window).scrollTop();
        if(scrollY >= 450) {
            $('.sticky-sidebar').removeClass("hidden")
        } else {
            $('.sticky-sidebar').addClass("hidden")
        }

    });

})