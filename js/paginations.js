let pagSpans = document.querySelectorAll(".page-link");

pagSpans.forEach((e) => {
  e.addEventListener("click", () => {
    pagSpans.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
});


let start = document.getElementById('start');
let end = document.getElementById('end');
let range = document.getElementById('range');
start.innerHTML='$' + range.getAttribute('min');
end.innerHTML='$' + range.getAttribute('value');
range.addEventListener('input',()=>{
  end.innerHTML = `$${range.value}`;
})
