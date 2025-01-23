document.addEventListener("DOMContentLoaded", (event) => {
    const container = document.querySelector('.container');
    const circle1 = document.querySelector('.circle1');
    const circle2 = document.querySelector('.circle2');
    const circle3 = document.querySelector('.circle3');

    let widthCircle1 = container.clientWidth - circle1.offsetWidth*2;
    let heightCircle1 = container.clientHeight - circle1.offsetWidth*2;
    let width = container.clientWidth - (circle2.offsetWidth + circle2.offsetLeft*2);
    let height = container.clientHeight - (circle3.offsetWidth + circle3.offsetTop*2);
    
    // task 1
    gsap.to(circle1, {x: widthCircle1, y: heightCircle1, duration: 3})
        .then(() => gsap.to(circle1, {scale: 2, duration: 3}));

    // task 2
    gsap.to(circle2, {x: width, backgroundColor: "blue", duration: 4});

    // task 3
    gsap.to(circle3, {y: height, duration: 3});

    gsap.to(".square", {rotation: 360, duration: 3});

    gsap.to(".backgroundCircle", {scale: 3, backgroundColor: "pink", duration: 4});
});

