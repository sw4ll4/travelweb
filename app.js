const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = document.querySelector("#menu-btn i")


menuBtn.addEventListener("click", (e)=>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-large-line" : "ri-menu-2-fill" );

});


const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});