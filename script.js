const buttons = document.querySelectorAll(".menu-btn");
const panels = document.querySelectorAll(".panel");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        buttons.forEach(btn =>
            btn.classList.remove("active")
        );

        panels.forEach(panel =>
            panel.classList.remove("active-panel")
        );

        button.classList.add("active");

        const target =
            document.getElementById(
                button.dataset.section
            );

        target.classList.add("active-panel");

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});