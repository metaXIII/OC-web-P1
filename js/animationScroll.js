$('a').click(function () {
    if ($('body').width() > 998) {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 500)
    } else {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 150
        }, 500)
    }
    return false
})
