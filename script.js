// nav bar

let navHidden = document.querySelector('nav');
let navBorder = document.querySelector('.navbar')

window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop >= 100){
        navHidden.style.backgroundColor = '#42a8f6'
        navBorder.style.border = 'none'
    }
    else{
        navHidden.style.backgroundColor = 'transparent'
        navBorder.style.borderBottom = '2px solid rgba(255, 255, 255, 0.4)'
    }
})

let navBurger = document.querySelector('.nav_burger')
let navList = document.querySelector('.nav_list')
navBurger.addEventListener('click',function(){
    navList.classList.toggle('active')
})


// CUSTOMER SLIDER

const swiper = new Swiper('.customer_swiper', {
    // Optional parameters
    slidesPerView: 1 ,
    direction: 'horizontal',
    loop: true,
    spaceBetween:100,
    navigation: {
    nextEl: '#customer-slider-next',
    prevEl: '#customer-slider-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {

            slidesPerView: 1,
        
        },
        
        // when window width is >= 640px
        640: {
        slidesPerView: 1,
        },
    }   
});


//   IPAD

