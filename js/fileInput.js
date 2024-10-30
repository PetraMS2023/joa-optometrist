let input = document.getElementById('customFileInput');
let fileData = document.getElementById('fileData');
input.addEventListener('input',()=>{
  fileData.innerHTML = input.files[0].name;
})

let textInners = document.querySelectorAll('.textInner');

textInners.forEach((e)=>{
  e.addEventListener('click',()=>{
    textInners.forEach((e)=>{e.classList.remove('active')})
    e.classList.add('active')
  })
})