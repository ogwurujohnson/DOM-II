// Your code goes here
const navigationItems = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('nav');
const mainNavigationContainer = document.querySelector('.nav-container');
const body = document.querySelector('body');

// image selectors
const busImage = document.querySelector('.bus-image');
const adventureimage = document.querySelector('.adventure-image');
const funImage = document.querySelector('.fun-image');
const destinationImage = document.querySelector('.destination-image');



// Code to assist with using stopPropagation()
navContainer.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('you are in the header');
}, {capture: true});

mainNavigationContainer.addEventListener('click', (e) => {
    console.log('you are in the main nav container');
}, {capture: true});

// better way of appying preventDefault() to all navigation items
navigationItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('you are in an individual nav-link');
    });
}, {capture: true});
