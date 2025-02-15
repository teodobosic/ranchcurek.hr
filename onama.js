// Funkcija za promjenu jezika na stranici "O nama"
function promijeniJezik(jezik) {
  // Elementi specifični za stranicu "O nama"
  const elementi = {
      'home-link': {
          'en': 'Home',
          'hr': 'Početna'
      },
      'about-link': {
          'en': 'About Us',
          'hr': 'O nama'
      },
      'services-link': {
          'en': 'Services',
          'hr': 'Usluge'
      },
      'contact-link': {
          'en': 'Contact',
          'hr': 'Kontakt'
      },
      'about-title': {
          'en': 'About Us',
          'hr': 'O nama'
      },
      'about-text': {
          'en': 'Our story, mission, and values.',
          'hr': 'Naša priča, misija i vrijednosti.'
      },
      'mission-title': {
          'en': 'Our Mission',
          'hr': 'Naša misija'
      },
      'mission-text': {
          'en': 'To deliver high-quality services while building trust and integrity.',
          'hr': 'Pružiti visokokvalitetne usluge uz izgradnju povjerenja i integriteta.'
      },
      'vision-title': {
          'en': 'Our Vision',
          'hr': 'Naša vizija'
      },
      'vision-text': {
          'en': 'To be a leader in the industry and a partner of choice.',
          'hr': 'Biti lider u industriji i izbor broj jedan za naše klijente.'
      },
      'breadcrumbs': {
          'en': '<a href="index.html">Home</a> > About Us',
          'hr': '<a href="index.html">Početna</a> > O nama'
      }
  };

  // Iteriramo kroz elemente i mijenjamo tekst ovisno o jeziku
  for (const elementId in elementi) {
      const element = document.getElementById(elementId);
      if (element) {
          element.innerHTML = elementi[elementId][jezik];
      }
  }
}

// Dodajte event listener na klik zastave za promjenu jezika
document.getElementById("croatian").addEventListener("click", function () {
  promijeniJezik("hr");
});

document.getElementById("english").addEventListener("click", function () {
  promijeniJezik("en");
});

// Funkcija za animaciju naslova i teksta "O nama"
function animirajONama() {
  const aboutTitle = document.getElementById("about-title");
  const aboutText = document.getElementById("about-text");

  // Dodajemo klasu za animaciju
  aboutTitle.classList.add('active');
  aboutText.classList.add('active');
}

// Pozivamo funkciju za animaciju kada se učita stranica
document.addEventListener("DOMContentLoaded", function () {
  animirajONama();
  updateBreadcrumbs(); // Ažuriranje breadcrumbs specifičnih za "O nama"
});

// Funkcija za ažuriranje breadcrumbs za stranicu "O nama"
function updateBreadcrumbs() {
  const breadcrumbs = document.getElementById("breadcrumbs");
  breadcrumbs.innerHTML = '<p><a href="index.html">Početna</a> > <a href="html/o%20nama.html">O nama</a></p>';
}

// Funkcija za hamburger meni - za mobilne uređaje
function toggleHamburgerMenu() {
  const menu = document.getElementById("menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  // Toggle za meni
  menu.classList.toggle("active");

  // Promjena ikone hamburger menija (ako želite vizualnu promjenu ikone)
  hamburgerIcon.classList.toggle("active");
}

// Dodajte event listener na klik hamburger ikone
document.getElementById("hamburger-icon").addEventListener("click", toggleHamburgerMenu);

// Funkcija za zatvaranje menija kad se klikne izvan njega
document.addEventListener("click", function (event) {
  const menu = document.getElementById("menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  // Provjerite je li kliknut izvan menija i ikone
  if (!menu.contains(event.target) && !hamburgerIcon.contains(event.target)) {
    menu.classList.remove("active");
    hamburgerIcon.classList.remove("active");
  }
});

// Responzivna prilagodba menija za mobilne uređaje
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("active");
}

document.getElementById("mobile-menu-toggle").addEventListener("click", toggleMobileMenu);

// Zatvaranje mobilnog menija kad se klikne izvan njega
document.addEventListener("click", function (event) {
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
  if (!mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
      mobileMenu.classList.remove("active");
  }
});

// Animacija za fade-in na mobilnim uređajima
function fadeInMobile() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
      element.classList.add('visible');
  });
}

// Aktiviraj fade-in animaciju kad se stranica učita
document.addEventListener("DOMContentLoaded", fadeInMobile);

// Funkcija za bolju responzivnost menija na mobilnim uređajima
function toggleResponsiveMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

// Event listener za klik na ikonu menija
document.getElementById("mobile-menu-toggle").addEventListener("click", toggleResponsiveMenu);
