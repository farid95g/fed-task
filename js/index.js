document.querySelectorAll("nav.aside-menu a").forEach(link => {
    link.onclick = (e) => {
        document.querySelector("nav.aside-menu .active-link").classList.remove("active-link");
        e.target.classList.add("active-link");
    }
})

document.querySelectorAll("aside footer .theme-toggler a").forEach(toggler => {
    toggler.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector("aside footer .theme-toggler .active-toggler").classList.remove("active-toggler");
        toggler.classList.add("active-toggler");
        if (toggler.classList.contains("dark-mode")) {
            document.querySelector("body").classList.add("dark-mode");
            changeBackground(document.querySelectorAll(".white-bg"), "white-bg", "dark-bg");
            changeImage(document.querySelectorAll(".log-out"), "assets/icons/log-out-white.svg");
            if (document.querySelectorAll("td img[src*=svg]") !== null) {
                changeImage(document.querySelectorAll("td img[src*=svg]"), "assets/icons/ellipsis-white.svg");
            }
        } else {
            document.querySelector("body").classList.remove("dark-mode");
            changeBackground(document.querySelectorAll(".dark-bg"), "dark-bg", "white-bg");
            changeImage(document.querySelectorAll(".log-out"), "assets/icons/log-out.svg");
            if (document.querySelectorAll("td img[src*=svg]") !== null) {
                changeImage(document.querySelectorAll("td img[src*=svg]"), "assets/icons/ellipsis.svg");
            }
        }
    })
})

const changeImage = (arr, src) => {
    arr.forEach(image => {
        if (window.location.href.toString().split('/').indexOf("index.html") !== -1) {
            image.src = src;
        } else {
            image.src = "../" + src;
        }        
    })
}
const changeBackground = (arr, oldColor, newColor) => {
    arr.forEach(elm => {
        elm.classList.remove(oldColor);
        elm.classList.add(newColor);
    })
}

document.getElementById("show-appeal-dropdown").addEventListener("click", () => {
    document.querySelector(".appeal-dropdown").classList.toggle("hidden");
})