
function handleToggleMenu() {
    const menuToggle = document.querySelector(".menu__toggle");
    const menu = document.querySelector(".header__menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.add("active");
    })

    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !e.target.matches(".menu__toggle")) {
            menu.classList.remove("active");
        }
    })
}

handleToggleMenu();
