const navbarHeight = document.querySelector('nav').clientHeight;

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute('href');
    const section = document.querySelector(sectionId);
    const offsetTop = section.offsetTop;
    section.offsetTop = offsetTop - navbarHeight;
    window.scrollTo({
      top: offsetTop - navbarHeight,
      behavior: 'smooth',
    });
  });
});

var backToTopIcon = document.getElementById("back-to-top-icon");

  // JavaScript zwischen Dark und Light Mode Wechseln Button
  const modeIcon = document.getElementById('mode-icon');
  let currentMode = 'light';

  // Objekt erstellen für Hintergrund
  const backgroundImages = {
    light: "https://raw.githubusercontent.com/ManKenntIhn/HTML/main/Files/WhiteModeWall.jpg",
    dark: "https://raw.githubusercontent.com/ManKenntIhn/HTML/main/Files/DarkModeWall.jpg"
	};

  function toggleMode() {
    if (currentMode === 'light') {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
      currentMode = 'dark';
      modeIcon.src = 'https://raw.githubusercontent.com/ManKenntIhn/HTML/main/Files/Mond.png';
      document.body.style.backgroundImage = `url(${backgroundImages[currentMode]})`;
      localStorage.setItem('mode', 'dark')
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
      currentMode = 'light';
      modeIcon.src = 'https://raw.githubusercontent.com/ManKenntIhn/HTML/main/Files/Sonne.png';
      document.body.style.backgroundImage = `url(${backgroundImages[currentMode]})`;
      localStorage.setItem('mode', 'light')
    }
	}

  modeIcon.addEventListener('click', toggleMode);
  
  // check auf gespeicherte Preferenz
  if (localStorage.getItem('mode') === 'dark') {
    toggleMode();
	}

  var hamburger = document.querySelector(".hamburger");
  var links = document.querySelectorAll(".navbar a");
  
  hamburger.addEventListener("click", function(){
      for(var i=0; i < links.length; i++){
          links[i].classList.toggle("active");
      }
  });
  

