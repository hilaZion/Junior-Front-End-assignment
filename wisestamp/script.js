$(window).on('resize', function() {
    if($(window).width() > 560) {
        $('#myForm').addClass('left-arrow');
        $('#myForm').removeClass('top-arrow');
    }else{
        $('#myForm').addClass('top-arrow');
        $('#myForm').removeClass('left-arrow');
    }
})

