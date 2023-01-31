let slideIndex = 1;
showSlides(slideIndex);



function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("sliderContainer")
    let dots = document.getElementsByClassName("dot")

    console.log (slides.length);
    console.log (dots.length);

    if (n > slides.length) {
        slideIndex = slides.length
    }

    if (n < 1) {
        slideIndex = slides.length
    }

    

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active");
    }


    console.log (i);

    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += "active";

    let pon = 2;
    document.getElementById('dotC').textContent = pon;
    document.getElementById('dotR').textContent = slides.length;
   
  
}

