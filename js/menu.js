$('.btnmenu').on('click', function(e){
    e.preventDefault;
    $(this).toggleClass('btnmenu_active');
    $('.navigator').toggleClass('border');
    $('.menu-packet').toggleClass('menuhiden');
    $('.main-window').toggleClass('bmenuhiden');
})






