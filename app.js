
let btn=document.getElementById('collapseButton');
let collapseMenu=document.getElementById('collapseMenu');
let arrowUpDown=document.getElementsByClassName('fa-chevron-down')[0];


function collapse(){
    btn.addEventListener('click',()=>{
        collapseMenu.classList.toggle("closed");
        if(!collapseMenu.classList.contains("closed")){
            arrowUpDown.classList.remove("fa-chevron-down")
            arrowUpDown.classList.add("fa-chevron-up")

        }else{
            arrowUpDown.classList.add('fa-chevron-down')
            arrowUpDown.classList.remove('fa-chevron-up')
        }
    })
}

collapse();

const carousel=document.querySelector("[data-target='carousel']");
const card=carousel.querySelector("[data-target='cards']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton=document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
const cardCount=carousel.querySelectorAll("[data-target='cards']").length;

let offSet = 0;
const cardWidth = carouselWidth + cardMarginRight;
const maxX = -((cardCount / 1) * cardWidth - carouselWidth);

leftButton.addEventListener("click", () => {
    offSet += cardWidth;
    if (offSet > 0) {
        offSet = maxX;
    }
    carousel.style.transform = `translateX(${offSet}px)`;
});

rightButton.addEventListener("click", () => {
    offSet -= cardWidth;
    if (offSet < maxX) {
        offSet = 0;
    }
    carousel.style.transform = `translateX(${offSet}px)`;
});

const slides=document.querySelectorAll(".mySlides");
const nextButton=document.querySelector("#carousel-button-next");
const prevButton=document.querySelector("#carousel-button-prev");

let position=0;
const numberOfSlides=slides.length;


function hideAllSlides(){
    for(const slide of slides){
        slide.classList.remove("carousel-item-visible");
        slide.classList.add("carousel-item-hidden");
    }
}

const handleMoveToNextSlide=function(e){
    hideAllSlides();
    if(position===numberOfSlides-1){
        position=0;
    }else{
        position++;
    }
    slides[position].classList.add("carousel-item-visible")
}

const handleMoveToPrevSlide=function(e){
    hideAllSlides();

    if(position===0){
        position=numberOfSlides-1;
    }else{
        position--;
    }
    slides[position].classList.add("carousel-item-visible");
}

nextButton.addEventListener("click",handleMoveToNextSlide)
prevButton.addEventListener("click",handleMoveToPrevSlide)


// carousel slider

const carousel2=document.querySelector("[data-target='carousel-2']");
const product=Array.from( carousel2.querySelectorAll('[data-target="card"'));
const leftBtn=document.querySelector('[data-action="Left"');
const rightBtn=document.querySelector('[data-action="Right"');

const productStyle= window.getComputedStyle(product[0]);
const productWidth = product[0].offsetWidth + parseFloat(productStyle.marginRight);
let porductCurrentIndex=0;

leftBtn.addEventListener("click",()=>{
    if(porductCurrentIndex>0){
        porductCurrentIndex--;
        updateSlider();
    }else{
        porductCurrentIndex=product.length-4;
        updateSlider();
    }
});

rightBtn.addEventListener("click",(e)=>{
    if(porductCurrentIndex<product.length-4){
        porductCurrentIndex++;
        updateSlider();
    }else{
        porductCurrentIndex=0;
        updateSlider();
    }
    if(e.isTrusted){
        clearInterval(autoSlideProduct)
    }
    
})

function updateSlider(){
    const offSet=-porductCurrentIndex*productWidth;
    carousel2.style.transform=`translateX(${offSet}px)`
}

let autoSlideProduct;

function startAutoSlide(){
    autoSlideProduct=setInterval(()=>{
        if(porductCurrentIndex<product.length-4){
            porductCurrentIndex++;
            updateSlider();
        }else{
            porductCurrentIndex=0;
        }
    },3000);
}

startAutoSlide();

$(document).ready(function(){
    $(".btns").click(function(){
        // Скриваме всички .dropdown-content освен този на текущия .btns
        $(".dropdown-content").not($(this).find(".dropdown-content")).hide();
        
        // Показваме или скриваме .dropdown-content на текущия .btns
        $(this).find(".dropdown-content").slideToggle();
    });
});


$(document).ready(function(){
    let offcanvasWidth=$(".header-cart").width();
    $("#toggle").click(function(){
        $(".header-cart").animate({
            width: offcanvasWidth
        })
        $(".offcanvas").show();
        $(".overlay").show();
    })
    $("#close").click(function(){
        $(".header-cart").animate({
            width:0
        })
        $(".overlay").hide();
        $(".offcanvas").hide();
    })
    $(".overlay").click(function(){
        $(".offcanvas").hide();
        $(".header-cart").animate({
            width:0
        })
    })


})

