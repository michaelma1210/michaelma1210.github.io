/**
 * Created by michaelma on 4/13/17.
 */
/**
 * Created by michaelma on 4/14/17.
 */
$(document).ready(function(){



    $("#bannerimage1").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $("#bannerimage2").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    $("#bannerimage3").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });
    $("#bannerimage4").hover(function() {
        $(this).children('.bannertext').addClass("grow");
    });

    var solidifyPos = $("#bannerimage1").offset().top;

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


