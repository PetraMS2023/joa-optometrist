let links = document.querySelectorAll('.link')


links.forEach((e) => {
    e.addEventListener('click', () => {
        links.forEach((e) => { e.classList.remove('active') })
        e.classList.add('active')
    })
})

let drop = document.querySelectorAll('.drop');

drop.forEach((e) => {
    e.addEventListener('click', () => {
        e.classList.toggle('active');
    })
})


let header = document.querySelector(".header");
window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        header.classList.add('color');
    } else {
        header.classList.remove('color');
    }
})

let homeMedia = document.getElementById('homeMedia');
if (homeMedia) {
    homeMedia.addEventListener('click', () => {
        homeMedia.classList.toggle('active');
    })

    if (window.innerWidth <= 421) {
        homeMedia.addEventListener('mouseleave', () => {
            homeMedia.classList.remove('active');
        })
    }
}

let nav = document.querySelector(".navCont");
let menu = document.querySelector(".menu");

menu.addEventListener("click", () => {
    if (nav.style.right === "0px") {
        nav.style.right = "-800px";
    } else {
        nav.style.right = "0px";
    }
    menu.classList.toggle("active");
});