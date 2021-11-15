gsap.from(".logo-container__logo-img", {
    rotation: 360,
    duration: 3,
    //ease: "slow.in",
    ease: "elastic.in",
    y: 30,
})

gsap.from(".start-section__initializer", {
    delay: 4,
    ease: "slow.in",
    //ease: "elastic.in(3, 0.2)",
    duration: 4,
    y: 80,
    opacity: 0
})


