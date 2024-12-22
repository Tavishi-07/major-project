document.addEventListener("DOMContentLoaded", function () {
    // Select navbar items
    const furnitureNavItem = document.getElementById("furniture-nav");
    const interiorNavItem = document.getElementById("interior-nav");
    const additionalNavItem = document.getElementById("additional-nav");

    // Select sections
    const furnitureSection = document.getElementById("furniture");
    const interiorSection = document.getElementById("interior");
    const additionalSection = document.getElementById("additional");

    // Add event listener for scroll
    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Remove active class from all nav items
        furnitureNavItem.classList.remove("active");
        interiorNavItem.classList.remove("active");
        additionalNavItem.classList.remove("active");

        // Add active class based on scroll position
        if (scrollPosition >= furnitureSection.offsetTop && scrollPosition < interiorSection.offsetTop) {
            furnitureNavItem.classList.add("active");
        } else if (scrollPosition >= interiorSection.offsetTop && scrollPosition < additionalSection.offsetTop) {
            interiorNavItem.classList.add("active");
        } else if (scrollPosition >= additionalSection.offsetTop) {
            additionalNavItem.classList.add("active");
        }
    });
});
