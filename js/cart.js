let plus = document.querySelectorAll('.fa-angle-up')

let minus = document.querySelectorAll('.fa-angle-down');

plus.forEach((e)=>{
  e.addEventListener('click',()=>{
    let quant = e.parentElement.parentElement.firstElementChild;
    quant.innerHTML = +quant.innerHTML + 1;
  })
})

minus.forEach((e)=>{
  e.addEventListener('click',()=>{
    let quant = e.parentElement.parentElement.firstElementChild;
    if(+quant.innerHTML > 1){
      quant.innerHTML = +quant.innerHTML - 1;
    }
  })
})
