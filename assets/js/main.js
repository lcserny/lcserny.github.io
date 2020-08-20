document.addEventListener("DOMContentLoaded", function(event) {
    bindToggleMainHover(document.getElementById("main"));
});

function bindToggleMainHover(main) {
    if (main == null) {
        console.log("Element with ID 'main' not found");
        return;
    }

    let mainContent = document.getElementById("main-content");
    if (mainContent == null) {
        console.log("Element with ID 'main-content' not found");
        return;
    }

    main.addEventListener("mouseenter", function (event) {
       mainContent.classList.add("hover");
    });
    main.addEventListener("mouseleave", function (event) {
        mainContent.classList.remove("hover");
    });
}