let carousel = document.querySelector('.carousel');
let currentIndex = 0;
isMobile();
addToCarousel();


function handleScroll(event) {
 
  let deltaY = event.deltaY;
  let scrollDirection;
  
  if (deltaY > 0) {
    scrollDirection = 1; 
  } else if (deltaY < 0) {
    scrollDirection = -1; 
  } else {
    scrollDirection = 0;
  }

  currentIndex += scrollDirection;
  
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > carousel.children.length - 1) {
    currentIndex = carousel.children.length - 1;
  }

  let scrollLeft = currentIndex * carousel.offsetWidth;
  carousel.scrollTo({ left: scrollLeft });

  carousel.style.cursor = 'auto';

  console.log(carousel.offsetWidth);
  console.log(scrollLeft);
  
}

function handleImageClick() {
  let maxIndex = carousel.children.length - 1;
  if (currentIndex === maxIndex) {
    carousel.innerHTML = `<img src="fish/images/illustration/FISH11.png" alt="Fish Image">`;
    startRedirectTimer();
  
    carousel.style.cursor = 'auto';
  }
}

function handleMouseOver() {
  const maxIndex = carousel.children.length - 1;

  if (currentIndex === maxIndex) {
    carousel.style.cursor = 'pointer';
  } else {
    carousel.style.cursor = 'auto';
  }
}

function startRedirectTimer() {
  setTimeout(() => {
  
    window.location.href = 'portfolio.html';
  }, 3000);
}

document.addEventListener('wheel', handleScroll);
carousel.addEventListener('click', handleImageClick);
carousel.addEventListener('mouseover', handleMouseOver);



function isMobile() {
 
  if (window.innerWidth < 768) {
    
      window.location.href = 'file:///D:/1PROJEKT/portfolio.html';
  }
}

function addToCarousel() {
  const path = "FISH/images/illustration/";
  const imagesNum = 10;

  for (let i = 1; i <= imagesNum; i++) {
     imgElement = document.createElement("img");
    imgElement.src = `${path}FISH${i}.png`;
    carousel.appendChild(imgElement);
  }
}






 
