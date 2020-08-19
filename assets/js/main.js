document.addEventListener("DOMContentLoaded", function(event) {
    bindToggleMainHover(document.getElementById("main"));
});

function bindToggleMainHover(main) {
    let mainContent = document.getElementById("main-content");
    main.addEventListener("mouseenter", function (event) {
       mainContent.classList.add("hover");
    });
    main.addEventListener("mouseleave", function (event) {
        mainContent.classList.remove("hover");
    });
}