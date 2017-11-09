$(window).on('resize', function() {
    if($(window).width() > 560) {
        $('#myForm').addClass('left-arrow');
        $('#myForm').removeClass('top-arrow');
    }else{
        $('#myForm').addClass('top-arrow');
        $('#myForm').removeClass('left-arrow');
    }
})

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

