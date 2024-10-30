let searchInner = document.querySelector('.searchInner')
let searchInput = document.querySelector('#search');

searchInput.addEventListener('focus',()=>{
  searchInner.classList.add('showSearch')
})

searchInput.addEventListener('blur',()=>{
  searchInner.classList.remove('showSearch')
})