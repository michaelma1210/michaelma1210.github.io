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

    document.onreadystatechange = function () {
        var state = document.readyState
        if (state == 'interactive') {
            document.getElementById('contents').style.visibility="hidden";
        } else if (state == 'complete') {
            setTimeout(function(){
                document.getElementById('interactive');
                document.getElementById('load').style.visibility="hidden";
                document.getElementById('contents').style.visibility="visible";
            },1000);
        }
    }
});