let slide = document.querySelector(".slide");
let menuSlide = document.querySelector(".menu-slide");

menuSlide.addEventListener("click", () => {
    if (slide.style.right === "0px") {
        slide.style.right = "-800px";
        slide.style.position= "fixed";
    } else {
        slide.style.right = "0px";
        slide.style.position= "fixed";
    }
    menuSlide.classList.toggle("active");
});