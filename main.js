var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;
var navbar = document.getElementById("navbar");

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
  
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-81px"; // Adjust the height of the navbar
  }
  
  prevScrollPos = currentScrollPos;
}


const navicon = document.getElementById('menu-bar-nav');
navicon.addEventListener('click',function() {
    const navitems = document.getElementById('mobile-menu-div');
    navitems.classList.remove('closed-menu');
});

const wrongicon = document.getElementById('wrong-mark');
wrongicon.addEventListener('click',function(){
    const navitems = document.getElementById('mobile-menu-div');
    navitems.classList.add('closed-menu');
});

const responsive = document.querySelectorAll('.menu-items-respon');
responsive.forEach(item => {
    item.addEventListener('click',function() {
        const navitems = document.getElementById('mobile-menu-div');
        navitems.classList.add('closed-menu');
    });
})
