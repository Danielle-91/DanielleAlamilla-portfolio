// Array of captions for carousel to cycle through

const text1_options = [
    "Record + Play is a mixtape - maker created in React using the iTunes API.Type in the name of your favourite artists and it will return a list of ten of their songs for you to use as your very own mixtape.",

    "Kelvin Lee and I created the Around the World quiz to test your knowledge on flags of the world using vanilla JavaScript and the Rest Countries API. Give it a try!",

    "Captured is a multi-page PSD conversion created from a client brief and design files, made responsive using Flexbox layout."
];

// Creating anchor elements for project links:

const rpLinks = document.createElement('div');
rpLinks.innerHTML = `<a href="https://github.com/Danielle-91/Danielle-Alamilla-Project-3">Github</a> <a href="https://kind-ardinghelli-c4eb63.netlify.app/">Live Site</a>`

const quizLinks = document.createElement('div');
quizLinks.innerHTML = `<a href="https://github.com/TheNoBonesZone/aroundTheWorldQuiz">Github</a> <a href="https://aroundtheworldwithdk.netlify.app/">Live Site</a>`

const capturedLinks = document.createElement('div');
capturedLinks.innerHTML = `<a href="https://github.com/Danielle-91/Danielle-Alamilla-Project-1">Github</a> 
<a href="https://jovial-liskov-ad8802.netlify.app/">Live Site</a>`

// Array to populate project link section
const text2_options = [
    `${rpLinks.innerHTML}`,
    `${quizLinks.innerHTML}`, 
    `${capturedLinks.innerHTML}`
];

// Project image links
const img1 = new Image();
img1.src = './assets/rp_mockup.jpg';

const img2 = new Image();
img2.src = './assets/atw_mockup.jpg'

const img3 = new Image();
img3.src = './assets/captured_mockup.jpg'

// Array to populate project image section
const image_options = [
    img1.src,
    img2.src,
    img3.src
]

// Global definitions:

let i = 0;

const currentProjectText1 = document.getElementById('current-project-text1');

const currentProjectText2 = document.getElementById('current-project-text2');

const currentOptionImage = document.getElementById('project-image');

const carousel = document.getElementById('carousel-wrapper');

const mainMenu = document.getElementById('menu');

const nextOption = document.getElementById("next");

currentProjectText1.innerText = text1_options[i];

currentProjectText2.innerHTML = text2_options[i];

currentOptionImage.style.backgroundImage = 'url(' + image_options[i] + ')';

// onclick functions to change the page once the next button is clicked...
nextOption.onclick = function(){
    i = i + 1;
    i = i % text1_options.length;

    currentProjectText1.dataset.nextText = text1_options[i];
    currentProjectText2.dataset.nextText = text2_options[i];

    carousel.classList.add('anim-next');

    setTimeout(() => {
        currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
    }, 455);

    setTimeout(()=> {
        currentProjectText1.innerText = text1_options[i];
        currentProjectText2.innerHTML = text2_options[i];
        carousel.classList.remove('anim-next');
    }, 650)

    
};
