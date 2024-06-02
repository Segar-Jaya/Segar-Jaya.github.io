// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hamburger-menu di click
document.querySelector('#hamburger-menu'). onclick = (e) => {
    e.preventDefault(); 
    navbarNav.classList.toggle('active');
};

// Klik di luar side bar untuk ilangin nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Menghilangkan nav ketika link di klik
const navLinks = document.querySelectorAll('.navbar-nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarNav.classList.remove('active');
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Scroll ke bawah
        navbar.style.top = "-80px"; // Sesuaikan nilai negatif ini untuk menyembunyikan navbar sepenuhnya
    } else {
        // Scroll ke atas
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-item');
    const productBoxes = document.querySelectorAll('.products-container .box');

    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.toLowerCase();
      productBoxes.forEach(box => {
        const productName = box.getAttribute('data-name').toLowerCase();
        if (productName.includes(searchTerm)) {
          box.style.display = 'block';
        } else {
          box.style.display = 'none';
        }
      });
    });
  });
  
