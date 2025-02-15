document.addEventListener('DOMContentLoaded', () => {
    inicijalizirajKartu();
    dodajHoverEfekteNaIkone();
    postaviTrenutnuGodinu();
    inicijalizirajFormu();
});

// Funkcija za promjenu jezika
function promijeniJezik(jezik) {
    const tekstovi = {
        hr: {
            home: 'Početna',
            about: 'O nama',
            services: 'Usluge',
            contact: 'Kontakt',
            gallery: 'Galerija',
            heroTitle: 'Kontakt',
            heroText: 'Stupite u kontakt s nama putem telefona, emaila ili društvenih mreža.',
            contactTitle: 'Kontaktirajte nas',
            namePlaceholder: 'Vaše ime',
            emailPlaceholder: 'Vaš email',
            messagePlaceholder: 'Vaša poruka',
            submitText: 'Pošalji poruku'
        },
        en: {
            home: 'Home',
            about: 'About Us',
            services: 'Services',
            contact: 'Contact',
            gallery: 'Gallery',
            heroTitle: 'Contact',
            heroText: 'Get in touch with us via phone, email, or social media.',
            contactTitle: 'Get in Touch',
            namePlaceholder: 'Your Name',
            emailPlaceholder: 'Your Email',
            messagePlaceholder: 'Your Message',
            submitText: 'Send Message'
        }
    };

    const odabraniTekst = tekstovi[jezik];

    if (odabraniTekst) {
        document.getElementById('home-link').innerText = odabraniTekst.home;
        document.getElementById('about-link').innerText = odabraniTekst.about;
        document.getElementById('services-link').innerText = odabraniTekst.services;
        document.getElementById('contact-link').innerText = odabraniTekst.contact;
        document.getElementById('gallery-link').innerText = odabraniTekst.gallery;
        document.getElementById('hero-title').innerText = odabraniTekst.heroTitle;
        document.getElementById('hero-text').innerText = odabraniTekst.heroText;
        document.querySelector('.contact-title').innerText = odabraniTekst.contactTitle;

        document.getElementById('name-input').placeholder = odabraniTekst.namePlaceholder;
        document.getElementById('email-input').placeholder = odabraniTekst.emailPlaceholder;
        document.getElementById('message-input').placeholder = odabraniTekst.messagePlaceholder;
        document.getElementById('submit-button').innerText = odabraniTekst.submitText;
    }
}

// Navigacijski aktivni link
document.querySelectorAll('.nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelectorAll('.nav ul li a').forEach(item => item.classList.remove('active'));
        link.classList.add('active');
    });
});

// Dinamičko učitavanje Google karte
function inicijalizirajKartu() {
    const mapDiv = document.getElementById('map');
    if (mapDiv && !mapDiv.innerHTML.trim()) {
        mapDiv.innerHTML = `
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2785.141345080131!2d16.41259831584104!3d46.384101879126226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768c7fc30c9e9f3%3A0xf08ad637020541c3!2sPle%C5%A1kovec%20115d%2C%2040000%20%C4%8Cakovec!5e0!3m2!1sen!2shr!4v1646082642367!5m2!1sen!2shr" 
                width="100%" height="500" 
                style="border:0;" 
                allowfullscreen 
                loading="lazy">
            </iframe>
        `;
    }
}

// Hover efekti na društvene ikone
function dodajHoverEfekteNaIkone() {
    document.querySelectorAll('.social-icons a').forEach(icon => {
        icon.addEventListener('mouseover', () => icon.style.color = '#FF8C00');
        icon.addEventListener('mouseout', () => icon.style.color = '');
    });
}

// Automatsko postavljanje trenutne godine u footer
function postaviTrenutnuGodinu() {
    const godinaSpan = document.getElementById('trenutna-godina');
    if (godinaSpan) {
        godinaSpan.innerText = new Date().getFullYear();
    }
}

// Validacija kontakt forme
function inicijalizirajFormu() {
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const ime = document.getElementById('name-input').value.trim();
            const email = document.getElementById('email-input').value.trim();
            const poruka = document.getElementById('message-input').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!ime) {
                alert('Molimo unesite vaše ime.');
                return;
            }

            if (!email || !emailRegex.test(email)) {
                alert('Molimo unesite ispravnu email adresu.');
                return;
            }

            if (!poruka) {
                alert('Molimo unesite vašu poruku.');
                return;
            }

            // Ako je sve u redu, šalje se forma (prilagođeno za AJAX ili backend)
            alert('Vaša poruka je uspješno poslana!');
            form.reset();
        });
    }
}
