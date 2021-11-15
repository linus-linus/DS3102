
let planetTimeline = gsap.timeline({repeat: 0})

planetTimeline.to(".planets__mercury", {
    x: 500,
    y: 150,
    duration: 2,
    rotation: 360,
})

planetTimeline.to(".planets__venus", {
    x: 750,
    y: 60,
    duration: 2,
    rotation: 360
})

planetTimeline.to(".planets__earth", {
    x: 400,
    y: 200,
    duration: 2,
    rotation: 360
})

planetTimeline.to(".planets__mars", {
    x: 450,
    y: 220,
    duration: 2,
    rotation: 360
})

planetTimeline.to(".planets__jupiter", {
    x: 550,
    y: 220,
    duration: 2,
    rotation: 360
})

planetTimeline.to(".planets__saturn", {
    x: 670,
    y: 160,
    duration: 2,
    rotation: 360
})

planetTimeline.to(".planets__uranus", {
    x: 790,
    y: 20,
    duration: 2,
    rotation: 360
})

planetTimeline.to(".planets__neptune", {
    x: 880,
    y: -150,
    duration: 2,
    rotation: 360
})

planetTimeline.to(".planets__sun", { 
    x: 650,
    y: -300,
    scale: 12.0,
    duration: 2,
    opacity: 0.2
})

let repeatBtn = document.querySelector(".planet-container__repeat-btn").onclick = () => planetTimeline.restart()



/*gsap.to(".planets__sun", { 
    x: 650,
    y: -300,
    scale: 12.0,
    duration: 2,
    opacity: 0.2
})*/


