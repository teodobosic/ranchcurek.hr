// Funkcija za promjenu jezika
function promijeniJezik(jezik) {
    // Elementi koje ćemo mijenjati
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
        'hero-title': {
            'en': 'Welcome to Our Website',
            'hr': 'Dobrodošli na našu web stranicu'
        },
        'hero-text': {
            'en': 'Expertise and trust for your success',
            'hr': 'Stručnost i povjerenje za vaš uspjeh'
        },
        'cta-button': {
            'en': 'Contact Us',
            'hr': 'Kontaktirajte nas'
        },
        'about-title': {
            'en': 'About Us',
            'hr': 'O nama'
        },
        'about-text': {
            'en': 'We are a company that provides high-quality services in the industry.',
            'hr': 'Mi smo tvrtka koja pruža visoko kvalitetne usluge u industriji.'
        },
        'services-title': {
            'en': 'Our Services',
            'hr': 'Naše usluge'
        },
        'service-name-1': {
            'en': 'Service 1',
            'hr': 'Usluga 1'
        },
        'service-name-2': {
            'en': 'Service 2',
            'hr': 'Usluga 2'
        },
        'service-name-3': {
            'en': 'Service 3',
            'hr': 'Usluga 3'
        },
        'service-description-1': {
            'en': 'We offer the best service in the industry.',
            'hr': 'Nudimo najbolju uslugu u industriji.'
        },
        'service-description-2': {
            'en': 'High-tech solutions for your business.',
            'hr': 'Visokotehnološka rješenja za vaš posao.'
        },
        'service-description-3': {
            'en': 'We help you grow with cutting-edge tools.',
            'hr': 'Pomažemo vam rasti uz najsuvremenije alate.'
        },
        'privacy-link': {
            'en': 'Privacy Policy',
            'hr': 'Politika privatnosti'
        },
        'terms-link': {
            'en': 'Terms of Use',
            'hr': 'Uvjeti korištenja'
        },
        'gallery-title': {
            'en': 'Gallery',
            'hr': 'Galerija'
        },
        'breadcrumbs': {
            'en': '<a href="index.html">Home</a> > Gallery',
            'hr': '<a href="index.html">Početna</a> > Galerija'
        }
    };

    // Iteriramo kroz sve elemente i mijenjamo tekst ovisno o jeziku
    for (const elementId in elementi) {
        const element = document.getElementById(elementId);
        if (element) {
            if (elementi[elementId][jezik] instanceof Array) {
                const serviceNames = elementi[elementId][jezik];
                serviceNames.forEach((serviceName, index) => {
                    document.getElementById(`service-name-${index + 1}`).innerText = serviceName;
                    document.getElementById(`service-description-${index + 1}`).innerText = elementi[`service-description-${index + 1}`][jezik];
                });
            } else {
                element.innerHTML = elementi[elementId][jezik]; // koristi innerHTML za linkove
            }
        }
    }
}

// Dodajte event listener na klik zastave za promjenu jezika
document.getElementById("croatian").addEventListener("click", function() {
    promijeniJezik("hr");
});

document.getElementById("english").addEventListener("click", function() {
    promijeniJezik("en");
});

// Funkcija za animaciju hero teksta
function animirajHeroTekst() {
    const heroTitle = document.getElementById("hero-title");
    const heroText = document.getElementById("hero-text");

    // Dodajemo klasu za animaciju naslova
    heroTitle.classList.add('active');
    heroText.classList.add('active');
}

// Pozivamo funkciju za animaciju kada se učita stranica
document.addEventListener("DOMContentLoaded", function() {
    animirajHeroTekst();
});

// Funkcija za otvaranje slike u modalnom prozoru
function openImage(imageSrc, captionText) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var caption = document.getElementById("caption");
    modal.style.display = "block";
    modalImage.src = imageSrc;
    caption.innerText = captionText;
}

// Funkcija za zatvaranje modala
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Funkcija za ažuriranje breadcrumbs
function updateBreadcrumbs() {
    const breadcrumbs = document.getElementById("breadcrumbs");
    const path = window.location.pathname;

    if (path.includes("galerija")) {
        breadcrumbs.innerHTML = '<p><a href="index.html">Početna</a> > <a href="galerija.html">Galerija</a></p>';
    } else if (path.includes("o%20nama")) {
        breadcrumbs.innerHTML = '<p><a href="index.html">Početna</a> > <a href="html/o%20nama.html">O nama</a></p>';
    } else if (path.includes("usluge")) {
        breadcrumbs.innerHTML = '<p><a href="index.html">Početna</a> > <a href="html/usluge.html">Usluge</a></p>';
    } else if (path.includes("kontakt")) {
        breadcrumbs.innerHTML = '<p><a href="index.html">Početna</a> > <a href="html/kontakt.html">Kontakt</a></p>';
    } else {
        breadcrumbs.innerHTML = '<p><a href="index.html">Početna</a></p>';
    }
}

// Pozivanje funkcije za ažuriranje breadcrumbs kad se učita stranica
document.addEventListener("DOMContentLoaded", function() {
    updateBreadcrumbs();
});

// Galerija - Klik na sliku otvara modal
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imageSrc = item.querySelector('img').src;
        const captionText = item.querySelector('img').alt;
        openImage(imageSrc, captionText);
    });
});

// Funkcija za filtriranje slika u galeriji
function filtrirajGaleriju() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const title = item.querySelector('img').alt.toLowerCase(); // Naslov slike (alt text)
        if (title.includes(searchInput)) {
            item.style.display = 'block'; // Prikazivanje slike koja odgovara pretrazi
        } else {
            item.style.display = 'none'; // Sakrivanje slike koja ne odgovara pretrazi
        }
    });
}

// Dodajte event listener za pretragu
document.getElementById('searchInput').addEventListener('input', filtrirajGaleriju);
