let images = {
    sketch: [
        'fish/images/sketch/12.png',
        'fish/images/sketch/11.png',
        'fish/images/sketch/10.png',
        'fish/images/sketch/9.png',
        'fish/images/sketch/8.png',
        'fish/images/sketch/7.png',
        'fish/images/sketch/6.png',
        'fish/images/sketch/5.png',
        'fish/images/sketch/4.png',
        'fish/images/sketch/3.png',
        'fish/images/sketch/2.png',
        'fish/images/sketch/1.png',
    ],
    illustration: [
        'fish/images/illustration/FISH1.png',
        'fish/images/illustration/FISH2.png',
        'fish/images/illustration/FISH3.png',
        'fish/images/illustration/FISH4.png',
        'fish/images/illustration/FISH5.png',
        'fish/images/illustration/FISH6.png',
        'fish/images/illustration/FISH7.png',
        'fish/images/illustration/FISH8.png',
        'fish/images/illustration/FISH9.png',
        'fish/images/illustration/FISH10.png',
        'fish/images/illustration/FISH11.png',
    ],
};

let gallery = document.querySelector('.gallery');
let sketchButton = document.getElementById('sketch-button');
let illustrationButton = document.getElementById('illustration-button');
let aboutButton = document.getElementById('about-button');
let contactButton = document.getElementById('contact-button');
let modal = document.getElementById('Modal');
let modalImage = document.getElementById('modalImage');
let closeModal = document.getElementById('closeModal');

setActiveButton(sketchButton);
showImages('sketch'); 


function openModal(imagePath) {
    
    if (isMobile()) {
        return;
    }

    modal.style.display = 'block';
    modalImage.src = imagePath;
}


closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
});

document.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});

function showImages(category) {
    gallery.innerHTML = '';
    images[category].forEach(createImageElement);
}

function createImageElement(imagePath) {
    let img = document.createElement('img');
    img.src = imagePath;

        img.addEventListener('click', function() {
            openModal(imagePath);
        });
    

    gallery.appendChild(img);
}

sketchButton.addEventListener('click', function() {
    showImages('sketch');
    setActiveButton(sketchButton);
});

illustrationButton.addEventListener('click', function() {
    showImages('illustration');
    setActiveButton(illustrationButton);
});

aboutButton.addEventListener('click', function() {
    showAbout();
    setActiveButton(aboutButton);
});

contactButton.addEventListener('click', function() {
    showContact();
    setActiveButton(contactButton);
});

function setActiveButton(button) {
   
    sketchButton.classList.remove('active');
    illustrationButton.classList.remove('active');
    aboutButton.classList.remove('active');
    contactButton.classList.remove('active');

   
    button.classList.add('active');
}

function showAbout() {
    gallery.innerHTML = `
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I'm Ben Ash, a passionate artist with a love for sketching and illustration. I find inspiration in the world around me and strive to bring creativity to life through my artwork.</p>
        <p>My journey in the art world has been filled with exploration and a constant quest for improvement. Each piece I create tells a unique story, and I hope you enjoy exploring my portfolio.</p>
    `;
}
function showContact() {
    gallery.innerHTML = `
        <div class="contact-info">
            <p>Feel free to reach out to me via my email or social media:</p>
            <ul>
                <li>Email: ben.ash@example.com</li>
            </ul>
        </div>
    `;
}

function isMobile() {
    return window.innerWidth < 768;
}


    
