// Your code goes here
const navigationItems = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('nav');
const mainNavigationContainer = document.querySelector('.nav-container');

// better way of appying preventDefault() to all navigation items
navigationItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});
