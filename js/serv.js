$('.unactive-nav').on('click', function(e){
    e.preventDefault();

    if(this.classList.contains('unactive-nav')){
    $(this).toggleClass('active-nav');
    $(this).removeClass('unactive-nav');
    
}
    else{
        $(this).toggleClass('unactive-nav');
        $(this).removeClass('active-nav');
    }
    

});