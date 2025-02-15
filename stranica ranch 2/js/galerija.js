// Prikaz modala za slike
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.createElement("div");
    modal.classList.add("modal");

    const modalContent = document.createElement("img");
    modalContent.classList.add("modal-content");

    const closeButton = document.createElement("span");
    closeButton.classList.add("close");
    closeButton.innerText = "×";

    const caption = document.createElement("p");
    caption.id = "caption";

    modal.appendChild(closeButton);
    modal.appendChild(modalContent);
    modal.appendChild(caption);

    document.body.appendChild(modal);

    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach((item) => {
        item.addEventListener("click", function () {
            modal.style.display = "flex";
            modalContent.src = this.src;
            caption.innerText = this.alt || "Galerija slika";
        });
    });

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Zatvaranje modala klikom izvan slike
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Pretraga slika u galeriji
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-bar input");

    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        const galleryItems = document.querySelectorAll(".gallery-item");

        galleryItems.forEach((item) => {
            const altText = item.querySelector("img").alt.toLowerCase();
            if (altText.includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// Slideshow funkcionalnost
document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slideshow-slide");

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = "none";
        });

        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;

        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add("fade");

        setTimeout(showSlides, 4000); // Promjena slike svakih 4 sekunde
    }

    if (slides.length > 0) {
        showSlides();
    }
}); 