var swiper = new Swiper('.swiper',{
    navigation:{
        nextEl:'.next',
        prevEl:'.prev'
    },
    pagination:{
        el:'.swiper-pagination',
        dynamicBullets:true,
        type:'progressbar'
    },
    autoplay:{
        delay:1000,
        disableOnInteraction:true,
    },
    loop:true
})