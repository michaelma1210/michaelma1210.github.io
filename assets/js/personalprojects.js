/**
 * Created by michaelma on 4/15/17.
 */
/**
 * Created by michaelma on 4/14/17.
 */
$(document).ready(function(){

    $(".img_1-1").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".img_1-2").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".img_1-3").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".img_2-1").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".img_2-2").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $(".img_2-3").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    var solidifyPos = $(".img_1-1").offset().top;

    $(window).scroll(function() {

        var currentScroll = $(window).scrollTop();

        if (currentScroll < solidifyPos) {
            $("#topnavbar").css("opacity", ".65");
        } else {
            $("#topnavbar").css("opacity", ".85");
        }
    });



});