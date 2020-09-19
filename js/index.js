document.querySelectorAll("nav.aside-menu a").forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.querySelector("nav.aside-menu .active-link").classList.remove("active-link");
        e.target.classList.add("active-link");
    }
})

document.querySelectorAll("aside footer .theme-toggler a").forEach(toggler => {
    toggler.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("aside footer .theme-toggler .active-toggler").classList.remove("active-toggler");
        e.target.parentNode.classList.add("active-toggler");
        console.log(e.target);
    })
})

document.getElementById("show-appeal-dropdown").addEventListener("click", () => {
    document.querySelector(".appeal-dropdown").classList.toggle("hidden");
})