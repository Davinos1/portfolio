const pages = {

    about: `
        <p>
        Hi, I'm Edward.

        I am an IT student with a strong interest in Cyber Security,
        Infrastructure, Networking and Automation.

        My goal is to build a career in technology while constantly
        learning and creating projects that solve real problems.
        </p>
    `,

    projects: `
        <p>
        • Portfolio Website<br><br>

        • Cyber Security Work Experience<br><br>

        • Infrastructure Labs<br><br>

        • Automation Projects<br><br>

        • Programming & Web Development
        </p>
    `,

    experience: `
        <p>
        I have completed Cyber Security and Digital Forensics
        work experience where I worked within a team environment,
        investigated scenarios and contributed to presentations.
        </p>
    `,

    skills: `
        <p>
        Cyber Security<br>
        HTML / CSS / JavaScript<br>
        Python<br>
        Infrastructure<br>
        Networking<br>
        Problem Solving<br>
        Teamwork
        </p>
    `,

    contact: `
        <p>
        GitHub: github.com/yourname<br><br>

        Email: your@email.com<br><br>

        LinkedIn: linkedin.com/in/yourname
        </p>
    `
};

const buttons = document.querySelectorAll(".menu button");

const pageView = document.getElementById("pageView");
const pageTitle = document.getElementById("pageTitle");
const pageBody = document.getElementById("pageBody");
const overlay = document.querySelector(".transition-overlay");
const backBtn = document.getElementById("backBtn");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const section = button.dataset.section;

        overlay.classList.add("active");

        setTimeout(() => {

            pageTitle.textContent =
                button.textContent;

            pageBody.innerHTML =
                pages[section];

            pageView.classList.add("open");

        }, 300);

        setTimeout(() => {

            overlay.classList.remove("active");

        }, 800);

    });

});

backBtn.addEventListener("click", () => {

    overlay.classList.add("active");

    setTimeout(() => {

        pageView.classList.remove("open");

    }, 250);

    setTimeout(() => {

        overlay.classList.remove("active");

    }, 800);

});