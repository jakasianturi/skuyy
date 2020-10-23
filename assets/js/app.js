// Add class active in nav-item
let navItem1 = document.querySelector('.navbar .nav-item:nth-child(1)');
let navItem2 = document.querySelector('.navbar .nav-item:nth-child(2)');
let navItem3 = document.querySelector('.navbar .nav-item:nth-child(3)');
let navItem4 = document.querySelector('.navbar .nav-item:nth-child(4)');

window.onhashchange = function () {
  let urlHash = window.location.hash;
  if (urlHash == '#why-us') {
    navItem1.classList.remove('active');
    navItem2.classList.add('active');
    navItem3.classList.remove('active');
    navItem4.classList.remove('active');
  } else if (urlHash == '#service') {
    navItem1.classList.remove('active');
    navItem2.classList.remove('active');
    navItem3.classList.add('active');
    navItem4.classList.remove('active');
  } else if (urlHash == '#testimonial') {
    navItem1.classList.remove('active');
    navItem2.classList.remove('active');
    navItem3.classList.remove('active');
    navItem4.classList.add('active');
  }
};
