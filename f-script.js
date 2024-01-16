const carousel = document.querySelector('.carousel');
let currentIndex = 0;
isMobile();


function handleScroll(event) {
 
  const deltaY = event.deltaY;
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

  const scrollLeft = currentIndex * carousel.offsetWidth;
  carousel.scrollTo({ left: scrollLeft });

  carousel.style.cursor = 'auto';

  console.log(carousel.offsetWidth);
  console.log(scrollLeft);
  
}

function handleImageClick() {
  const maxIndex = carousel.children.length - 1;
  if (currentIndex === maxIndex) {
    carousel.innerHTML = `<img src="images/illustration/FISH11.png" alt="Fish Image">`;
    startRedirectTimer();
  
    carousel.style.cursor = 'auto';s
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
  
    window.location.href = 'file:///D:/1PROJEKT/portfolio.html';
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



 
