$(document).ready(function(){

    $(".card2").hide();
    $(".icon5").click( function(){
           ;
            $   (".card2").slideToggle();
    } );
  
});

$( document ).ready(function() {
    // content button toggle
       $(".card2").hide();
    $(".btn1").click( function(){
           ;
            $(".card2").slideToggle();
    } );
});


$(document).on('click' , 'ul li' , function(){
    $(this).addClass('active').siblings().removeClass(
        'active')

})



