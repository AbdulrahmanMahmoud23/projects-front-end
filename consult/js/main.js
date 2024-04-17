window.onload = function() {
    $(".lds-roller").fadeOut("5000", function() {
        $("body").css("overflow-y", "auto");
        $(".over").fadeOut("3000");
    });

    min = 0, /// min number
        max = 30; /// max number
    $(".minus").on("click", function() {
        if ($(this).next().val() > min) {
            $(this).next().val(+$(this).next().val() - 1);
        } else if ($(this).prev().val() == min) {
            $(this).prev().css("color", "red");
            setTimeout(function() { $(this).prev().css("color", "black") }, 500)
        } else {
            $(this).prev().css("color", "black");
        }
    })


    $(".plus").on("click", function() {
        if ($(this).prev().val() < max) {
            $(this).prev().val(+$(this).prev().val() + 1);
        } else if ($(this).prev().val() == max) {
            $(this).prev().css("color", "red");
            setTimeout(function() { $(this).prev().css("color", "#7e7e7e"); }, 500)
        } else {
            $(this).prev().css("color", "#7e7e7e");
        }


    })



    $('.filter').owlCarousel({
        // stagePadding: 50,

        autoplay: false,
        center: false,
        nav: true,
        loop: true,
        rtl: true,
        dots: false,
        // margin: 30,
        items: 1,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-leftt'></i>"],

        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
                autoplay: true,
                center: true,
                loop: true,
                nav: false
                    // stagePadding: 30
            },
            700: {
                items: 5,
                dots: true
            },
            992: {
                items: 7,
                dots: true
            },
            1200: {
                items: 9
            }
        }

    });
    $('.flags').owlCarousel({
        // stagePadding: 50,

        autoplay: false,
        center: false,
        nav: true,
        // loop: true,
        rtl: true,
        dots: false,
        // margin: 30,
        items: 1,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],

        responsiveClass: true,
        responsive: {
            0: {
                items: 4,
                autoplay: true,
                center: true,
                loop: true,
                nav: false
                    // stagePadding: 30
            },
            700: {
                items: 5,
                dots: true
            },
            992: {
                items: 7,
                dots: true
            },
            1200: {
                items: 7
            }
        }

    });
    $('.gift-projects').owlCarousel({
        //stagePadding: 50,

        autoplay: false,
        center: false,
        nav: true,
        // loop: true,
        rtl: true,
        dots: false,
        margin: 30,
        items: 1,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],

        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                autoplay: true,
                center: true,
                loop: true,
                dots: true,
                nav: false
                    // stagePadding: 30
            },
            400: {
                items: 2,
                dots: true
            },
            992: {
                items: 3,
                dots: true
            },
            1200: {
                items: 4
            }
        }

    });
    // $('.gift-cart').owlCarousel({

    // });
    var $owl = $('.gift-cart');

    $owl.children().each(function(index) {
        $(this).attr('data-position', index); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
        stagePadding: 20,

        autoplay: false,
        center: true,
        nav: true,
        loop: true,
        rtl: true,
        dots: false,
        margin: 20,
        items: 1,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],

        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                autoplay: false,
                center: true,
                loop: true,
                margin: 20,
                dots: true,
                nav: false
                    // stagePadding: 30
            },
            500: {
                items: 2,
                dots: true
            },

            992: {
                items: 3
            }
        }

    });

    $(document).on('click', '.owl-item>img', function() {
        // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
        var $speed = 300; // in ms
        $owl.trigger('to.owl.carousel', [$(this).data('position'), $speed]);
    });

    $(".cart-btn").on("click", function() {
        $(".user").fadeOut("fast");
        $(".search").fadeOut("fast");
        $(".cart").fadeToggle("fast");
    });
    $(".share").on("click", function() {

        $(".share-det").not($(this).next(".share-det")).fadeOut("fast");
        $(this).next(".share-det").fadeToggle("fast");

    });
    $(".user-btn").on("click", function() {
        $(".cart").fadeOut("fast");
        $(".search").fadeOut("fast");
        $(".user").fadeToggle("fast");
    });
    $(".search-btn").on("click", function() {
        $(".cart").fadeOut("fast");
        $(".user").fadeOut("fast");
        $(".search").fadeToggle("fast");
    });
    $(".remove-item").on("click", function() {
        $(this).closest("li.clearfix").remove();
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrolltop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });




}


// $(document).ready(function () {
//     $("input[type='radio']").click(function () {
//         var radioValue = $("input:checked").val();
//         if (radioValue) {
//             console.log("test");
//             $("input[type='radio']").removeClass("checked");
//             $(this).parent().toggleClass("sec-gradient-bk");
//         }
//     });
// })