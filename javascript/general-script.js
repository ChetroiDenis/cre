
  /*Animatie background pentru titlu*/

  // Selectează elementul h2
// Selectează toate elementele cu același id
const headings = document.querySelectorAll('#animated-heading');

// Funcție pentru a verifica dacă un element este vizibil în viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Adaugă un event listener pentru scroll
window.addEventListener('scroll', () => {
  headings.forEach(heading => {
    if (isInViewport(heading)) {
      heading.classList.add('visible'); // Adaugă clasa dacă e vizibil
    }   
  });
});


  



  /*Animatie header*/
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    setTimeout(() => {
      header.style.top = "-30px"; // Setăm poziția finală astfel încât header-ul să fie ascuns pe jumătate
    }, 100); // Mică întârziere pentru a începe animația
  });






  document.addEventListener("DOMContentLoaded", function () {
    const text = "Împreună construim viitorul elevilor - implicare, reprezentare, schimbare!";
    const speed = 100; // Milisecunde între fiecare literă
    const animatedText = document.getElementById("animatedText");
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        animatedText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

    typeWriter();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter");
    const targetNumber = 250; // Valoarea finală
    const duration = 2000; // Durata animației în milisecunde (2 secunde)
    const increment = targetNumber / (duration / 16); // Creștere pe cadru (~60FPS)

    let currentNumber = 0;

    const updateCounter = () => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        counter.textContent = targetNumber; // Asigură că afișează exact valoarea finală
      } else {
        counter.textContent = Math.floor(currentNumber); // Rotunjire la întreg
        requestAnimationFrame(updateCounter); // Continuă animația
      }
    };

    updateCounter(); // Pornire animație
  });

  document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter2");
    const targetNumber = 156; // Valoarea finală
    const duration = 2000; // Durata animației în milisecunde (2 secunde)
    const increment = targetNumber / (duration / 16); // Creștere pe cadru (~60FPS)

    let currentNumber = 0;

    const updateCounter = () => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        counter.textContent = targetNumber; // Asigură că afișează exact valoarea finală
      } else {
        counter.textContent = Math.floor(currentNumber); // Rotunjire la întreg
        requestAnimationFrame(updateCounter); // Continuă animația
      }
    };

    updateCounter(); // Pornire animație
  });

  document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("counter3");
    const targetNumber = 336; // Valoarea finală
    const duration = 2000; // Durata animației în milisecunde (2 secunde)
    const increment = targetNumber / (duration / 16); // Creștere pe cadru (~60FPS)

    let currentNumber = 0;

    const updateCounter = () => {
      currentNumber += increment;
      if (currentNumber >= targetNumber) {
        counter.textContent = targetNumber; // Asigură că afișează exact valoarea finală
      } else {
        counter.textContent = Math.floor(currentNumber); // Rotunjire la întreg
        requestAnimationFrame(updateCounter); // Continuă animația
      }
    };

    updateCounter(); // Pornire animație
  });
