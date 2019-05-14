// Your code goes here
const navigationItems = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('nav');
const mainNavigationContainer = document.querySelector('.nav-container');


// image selectors
const busImage = document.querySelector('.bus-image');
const adventureimage = document.querySelector('.adventure-image');
const funImage = document.querySelector('.fun-image');
const destinationImage = document.querySelector('.destination-image');

// navigation selectors
const logoHeader = document.querySelector('.logo-heading');


window.addEventListener('load', () => {
    let timeline = new TimelineMax();
    timeline.from(busImage, .5, {scale: 0});
    timeline.from(adventureimage, .5, {scale: 0});
    timeline.from(funImage, .2, {scale: 0});
    timeline.from(destinationImage, .2, {scale: 0});
    timeline.from(logoHeader, .5, {x: -200, scale: 0, ease: Elastic.easeIn});
    timeline.from(navContainer, .5, {x: 200, scale: 0, ease: Elastic.easeIn});
});


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
