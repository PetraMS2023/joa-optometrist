let user = document.querySelector('.user');

user.addEventListener('click',()=>{
  user.classList.toggle('active');
});
user.addEventListener('mouseleave',()=>{
  user.classList.remove('active');
});