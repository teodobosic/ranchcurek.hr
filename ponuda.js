document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
    let prevScrollPos = window.pageYOffset;

    function handleScroll() {
        if (window.innerWidth > 768) {
            // Ako je ekran širi od 768px (računalo), resetiraj header i prekini funkciju
            header.style.top = "0";
            return;
        }

        let currentScrollPos = window.pageYOffset;

        if (currentScrollPos < 2) {
            // Ako je korisnik blizu vrha stranice, prikaži zaglavlje
            header.style.top = "0";
        } else {
            // Inače ga sakrij
            header.style.top = "-600px";
        }

        prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll); // Prilagodba prilikom promjene veličine ekrana
});
