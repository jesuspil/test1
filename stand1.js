var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
   
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 1000); }
    
window.addEventListener('load', showSlides, false);


   
