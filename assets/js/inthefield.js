/**
 * Created by michaelma on 4/14/17.
 */
$(document).ready(function(){

    $(".square-1").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".square-2").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".square-3").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".square-4").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".square-5").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".square-6").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".square-7").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".square-8").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".square-9").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });


    var solidifyPos = $(".square-1").offset().top;

    $(window).scroll(function() {

        var currentScroll = $(window).scrollTop();

        if (currentScroll < solidifyPos) {
            $("#topnavbar").css("opacity", ".65");
        } else {
            $("#topnavbar").css("opacity", ".85");
        }
    });
});