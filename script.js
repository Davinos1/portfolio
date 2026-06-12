const buttons = document.querySelectorAll(".nav-btn");
const transition = document.getElementById("transition");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const target =
            document.getElementById(
                button.dataset.target
            );

        transition.classList.add("active");

        setTimeout(() => {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }, 250);

        setTimeout(() => {

            transition.classList.remove("active");

        }, 600);

    });

});