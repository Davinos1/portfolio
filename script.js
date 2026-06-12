const content = {
  about: {
    title: "ABOUT ME",
    text: "I am an IT student interested in cyber security, infrastructure, automation and building practical technical projects."
  },
  projects: {
    title: "PROJECTS",
    text: "Portfolio website, cyber security work experience, coding tasks, automation scripts and technical labs."
  },
  experience: {
    title: "EXPERIENCE",
    text: "I have completed cyber security and digital forensics work experience, worked in teams, contributed to presentations and solved technical problems."
  },
  skills: {
    title: "SKILLS",
    text: "Cyber security, HTML, CSS, JavaScript, problem solving, communication, teamwork and infrastructure basics."
  },
  contact: {
    title: "CONTACT",
    text: "Add your email, GitHub, LinkedIn or any other contact details here."
  }
};

const buttons = document.querySelectorAll(".menu button");
const box = document.getElementById("contentBox");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const section = button.dataset.section;
    box.innerHTML = `
      <h2>${content[section].title}</h2>
      <p>${content[section].text}</p>
    `;

    box.classList.remove("show");
    void box.offsetWidth;
    box.classList.add("show");
  });
});

document.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const active = document.querySelector(".menu button.active");
    active.click();
  }
});