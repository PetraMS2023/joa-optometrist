let links = document.querySelectorAll('.link')


links.forEach((e)=>{
  e.addEventListener('click',()=>{
    links.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active')
  })
})

let drop = document.querySelectorAll('.drop');

drop.forEach((e)=>{
  e.addEventListener('click',()=>{
    e.classList.toggle('active');
  })
})

let homeMedia = document.getElementById('homeMedia');
if(homeMedia){
  homeMedia.addEventListener('click',()=>{
    homeMedia.classList.toggle('active');
  })
  
  if(window.innerWidth <= 421){
    homeMedia.addEventListener('mouseleave',()=>{
      homeMedia.classList.remove('active');
    })
  }
}

let goTop = document.querySelector(".goTop");
let footer = document.querySelector(".footer");

goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    goTop.style.display = "block";
  } else {
    goTop.style.display = "none";
  }
  if (window.scrollY >= footer.offsetTop - 600) {
    if (homeMedia && goTop) {
      goTop.style.display = "none";
      homeMedia.style.display = "none";
    }
  } else {
    if (homeMedia && goTop) {
      goTop.style.display = "block";
      homeMedia.style.display = "flex";
    }
  }
});


let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");

nav.style.transition = "left 0.5s ease-in-out, display 0.5s ease-in-out";

menu.addEventListener("click", () => {
  if (nav.style.left === "0px") {
    nav.style.left = "-800px";
    setTimeout(() => {
      nav.style.display = "none";
    }, 500);
  } else {
    nav.style.display = "flex";
    setTimeout(() => {
      nav.style.left = "0px";
    }, 10);
  }
  menu.classList.toggle("active");
});

document.querySelectorAll('.articles-link').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default action of the link
      const megaMenu = this.nextElementSibling; // Get the mega menu

      // Toggle the display of the mega menu
      megaMenu.style.display = megaMenu.style.display === 'block' ? 'none' : 'block';
  });
});

// Close the mega menu when clicking outside of it
document.addEventListener('click', function(e) {
  const isClickInside = e.target.closest('.articles-link');
  if (!isClickInside) {
      document.querySelectorAll('.mega-menu').forEach(menu => {
          menu.style.display = 'none'; // Hide all mega menus
      });
  }
});
