// Your code goes here
const navigationItems = document.querySelectorAll('.nav-link');
const navContainer = document.querySelector('nav');
const mainNavigationContainer = document.querySelector('.nav-container');
const imageContents = document.querySelector('.img-content');
const btn = document.querySelectorAll('.btn');
const paragraph = document.querySelectorAll('p');



// image selectors
const busImage = document.querySelector('.bus-image');
const adventureimage = document.querySelector('.adventure-image');
const funImage = document.querySelector('.fun-image');
const destinationImage = document.querySelector('.destination-image');

// navigation selectors
const logoHeader = document.querySelector('.logo-heading');

// add a load event to our application
window.addEventListener('load', () => {
    let timeline = new TimelineMax();
    timeline.from(busImage, .5, {scale: 0});
    timeline.from(adventureimage, .5, {scale: 0});
    timeline.from(funImage, .2, {scale: 0});
    timeline.from(destinationImage, .2, {scale: 0});
    timeline.from(logoHeader, .5, {x: -200, scale: 0, ease: Elastic.easeInOut});
    timeline.from(navContainer, .5, {x: 200, scale: 0, ease: Elastic.easeInOut});
});


// add a mouse over event on the logoheader and the bus-image
logoHeader.addEventListener('mouseover', (e) => {
    TweenMax.from(logoHeader, .5, {opacity: 0});
});

// add a drag/drop event on the image contents
imageContents.addEventListener('drag', () => {
    TweenMax.to(imageContents, 1, { x:-100 , opacity:0 , ease:Elastic.easeInOut  });
});

// add a click event to the sign up button
btn.forEach(item => {
    item.addEventListener('click', () => {
        alert(item.innerHTML);
    });
});

// add a copy event to all paragraphs
paragraph.forEach(item => {
    item.addEventListener('copy', () => {
        alert(`You copied the text below:
        ${item.textContent}`);
    })
});

// add a cut event to all paragraphs
paragraph.forEach(item => {
    item.addEventListener('cut', () => {
        TweenMax.to(item, 1, {opacity:0});
    });
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


