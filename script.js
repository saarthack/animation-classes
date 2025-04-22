var tl = gsap.timeline()

tl.to('#box',{
    x:600,
    duration:2,
})

tl.to('#circle',{
    x:600,
    duration:2
})


tl.pause()


var btn1 = document.querySelector('#animate')
var btn2 = document.querySelector('#pause')
var btn3 = document.querySelector('#reset')

btn1.addEventListener('click',function(){
    tl.play()
})

btn2.addEventListener('click',function(){
    tl.pause()
})

btn3.addEventListener('click',function(){
    tl.restart()
})