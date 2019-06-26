var backDrop= document.querySelector('.backdrop');
var modal= document.querySelector('.modal');
var selectplanbuttons= document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for(var i=0;i<selectplanbuttons.length;i++)
{
     selectplanbuttons[i].addEventListener('click',function(){
          // modal.style.display = 'block';
          // backDrop.style.display = 'block';
          modal.classList.add('open');
          backDrop.classList.add('open');
     });
}

if(modalNoButton)
{
     modalNoButton.addEventListener('click',closeModal);
}

backDrop.addEventListener('click',function(){
     mobileNav.classList.remove('open'); 
     closeModal();
});

toggleButton.addEventListener('click',function(){
     mobileNav.classList.add('open');
     backDrop.classList.add('open');
});

function closeModal(){
     // modal.style.display = 'none';
     // backDrop.style.display = 'none';
     if(modal){modal.classList.remove('open');}
     backDrop.classList.remove('open');
}