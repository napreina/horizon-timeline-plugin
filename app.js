let container = document.querySelectorAll('.content')
let slider = document.querySelector('.slider')
let animation1 = document.getElementById('animation1')
let animation2 = document.getElementById('animation2')
let animation3 = document.getElementById('animation3')
let animation4 = document.getElementById('animation4')
let animation5 = document.getElementById('animation5')
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

let lerp = (start, end, t) => {
    return start * (1-t) + end * t
}

let setTransform = (el, transform) => {
    el.style.transform = transform;
}

const init = () => {
    sliderWidth = slider.getBoundingClientRect().width;
    imageWidth = sliderWidth / container.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`
}

const animate = () => {
    current = parseFloat(lerp(current, target, ease)).toFixed(2);
    target = window.scrollY;

    setTransform(slider, `translateX(-${current}px)`)

    if ( target >= 1 ) {
        animation1.classList.add('showBottom')
        animation1.classList.remove('hiddenBottom')
    } else {
        animation1.classList.remove('showBottom')
        animation1.classList.add('hiddenBottom')
    }   

    if ( target >= 400) {
        animation2.classList.add('showTop')
        animation2.classList.remove('hiddenTop')
    } else {
        animation2.classList.remove('showTop')
        animation2.classList.add('hiddenTop')
    }  

    if ( target >= 900 ) {
        animation3.classList.add('showBottom')
        animation3.classList.remove('hiddenBottom')
    } else {
        animation3.classList.remove('showBottom')
        animation3.classList.add('hiddenBottom')
    }   

    if ( target >= 1500) {
        animation4.classList.add('showTop')
        animation4.classList.remove('hiddenTop')
    } else {
        animation4.classList.remove('showTop')
        animation4.classList.add('hiddenTop')
    }  

    if ( target >= 1750 ) {
        animation5.classList.add('showBottom')
        animation5.classList.remove('hiddenBottom')
    } else {
        animation5.classList.remove('showBottom')
        animation5.classList.add('hiddenBottom')
    }   

    requestAnimationFrame(animate)
    animation1.scrollIntoView({block: "end", behavior: "smooth"});
    console.log(inView(animation1))
}



init()
animate()