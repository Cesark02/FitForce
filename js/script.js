let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

    const slidesContainer = document.querySelector(".slides");
    slidesContainer.style.transform = `translateX(-${slideIndex * 100}vw)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[slideIndex].classList.add("active");
}

next.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

prev.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

dots.forEach((dot, idx) => {
    dot.addEventListener("click", () => {
        slideIndex = idx;
        showSlide(slideIndex);
    });
});

setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 5000); // Cambia cada 5 segundos

showSlide(slideIndex);



//-------------------------------------------------------------------------------------------------

const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector(".icon-flechita");

        // Si el botón ya está activo, ciérralo
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            icon.classList.replace("bi-chevron-up", "bi-chevron-down");
            content.style.maxHeight = null;
        } else {
            // Cierra cualquier otro accordion abierto
            accordionBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.classList.remove("active");
                    const otherIcon = otherBtn.querySelector(".icon-flechita");
                    otherIcon.classList.replace("bi-chevron-up", "bi-chevron-down");
                    otherBtn.nextElementSibling.style.maxHeight = null;
                }
            });

            // Abre el accordion actual
            btn.classList.add("active");
            icon.classList.replace("bi-chevron-down", "bi-chevron-up");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});



//-------------------------------------------------------------------------------------------------
// Carrusel Nutrición & Motivación
const nmSlides = document.querySelector('.nm-slides');
const nmSlideCount = document.querySelectorAll('.nm-slide').length;
let nmIndex = 0;

document.querySelector('.nm-next').addEventListener('click', () => {
    nmIndex = (nmIndex + 1) % nmSlideCount;
    updateNMCarousel();
});

document.querySelector('.nm-prev').addEventListener('click', () => {
    nmIndex = (nmIndex - 1 + nmSlideCount) % nmSlideCount;
    updateNMCarousel();
});

function updateNMCarousel() {
    nmSlides.style.transform = `translateX(-${nmIndex * 50}%)`;
}


