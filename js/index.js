$(document).ready(function() {
    var animTime = 300,
        clickPolice = false;
    $(document).on('touchstart click', '.acc-btn', function() {
        if (!clickPolice) {
            clickPolice = true;
            var currIndex = $(this).index('.acc-btn'),
                targetHeight = $('.acc-content-inner').eq(currIndex).outerHeight();
            $('.acc-content').stop().animate({
                height: 0
            }, animTime);
            $('.acc-content').eq(currIndex).stop().animate({
                height: targetHeight
            }, animTime);
            setTimeout(function() {
                clickPolice = false;
            }, animTime);
        }
    });
});
$(document).ready(function() {
    var animTime = 300,
        clickPolice = false;
    $(document).on('touchstart click', '.acc-btn', function() {
        if (!clickPolice) {
            clickPolice = true;
            var currIndex = $(this).index('.acc-btn'),
                targetHeight = $('.acc-content-inner-serv').eq(currIndex).outerHeight();
            $('.acc-contentserv').stop().animate({
                height: 0
            }, animTime);
            $('.acc-contentserv').eq(currIndex).stop().animate({
                height: targetHeight
            }, animTime);
            setTimeout(function() {
                clickPolice = false;
            }, animTime);
        }
    });
});
$(document).ready(function() {
    $(".transp").hide();
    $(".transh2").click(function() {
        $(this).next(".transp").slideToggle(600);
    });
});