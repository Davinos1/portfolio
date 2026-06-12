const cursorGlow = document.querySelector(".cursor-glow");
const sceneCard = document.querySelector(".scene-card");

document.addEventListener("mousemove", (event) => {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;

    if (sceneCard) {
        const x = (event.clientX / window.innerWidth - 0.5) * 12;
        const y = (event.clientY / window.innerHeight - 0.5) * -12;

        sceneCard.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    }
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});

const skillBars = document.querySelectorAll(".bar div");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const width = entry.target.getAttribute("data-width");
            entry.target.style.width = `${width}%`;
        }
    });
}, {
    threshold: 0.6
});

skillBars.forEach((bar) => {
    skillObserver.observe(bar);
});

const projectData = {
    zabbix: {
        category: "Monitoring / Infrastructure",
        title: "Zabbix Monitoring Server",
        description:
            "I built a Zabbix monitoring server to learn how real IT teams monitor infrastructure, servers and services. This helped me understand alerts, dashboards, uptime checks and basic infrastructure visibility.",
        tasks: [
            "Created a virtual machine using VMware",
            "Installed and configured a Zabbix server",
            "Added monitored hosts and services",
            "Used dashboards to view system health",
            "Practised troubleshooting monitoring issues"
        ],
        skills: [
            "VMware",
            "Linux",
            "Zabbix",
            "Monitoring",
            "Troubleshooting"
        ]
    },

    homeassistant: {
        category: "Automation / Linux",
        title: "Home Assistant",
        description:
            "I configured Home Assistant on Ubuntu inside VMware to practise Linux, dashboards, smart home automation and service management.",
        tasks: [
            "Created an Ubuntu virtual machine",
            "Installed and configured Home Assistant",
            "Tested dashboards and integrations",
            "Created basic automation workflows",
            "Practised managing a Linux-based service"
        ],
        skills: [
            "Ubuntu",
            "VMware",
            "Home Assistant",
            "Automation",
            "Dashboards"
        ]
    },

    cyber: {
        category: "Cyber Security / Work Experience",
        title: "Cyber Security Work Experience",
        description:
            "I completed cyber security and digital forensics work experience where I contributed to team tasks, investigation work and presentation material.",
        tasks: [
            "Worked as part of a team on a cyber scenario",
            "Explored digital forensics concepts",
            "Contributed to presentation material",
            "Practised communicating technical ideas",
            "Developed stronger interest in cyber security"
        ],
        skills: [
            "Cyber Security",
            "Digital Forensics",
            "Teamwork",
            "Research",
            "Presentation"
        ]
    }
};

const modal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTasks = document.getElementById("modalTasks");
const modalSkills = document.getElementById("modalSkills");

document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });

    card.addEventListener("click", () => {
        const projectId = card.getAttribute("data-project");
        const project = projectData[projectId];

        modalCategory.textContent = project.category;
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;

        modalTasks.innerHTML = "";
        modalSkills.innerHTML = "";

        project.tasks.forEach((task) => {
            const li = document.createElement("li");
            li.textContent = task;
            modalTasks.appendChild(li);
        });

        project.skills.forEach((skill) => {
            const li = document.createElement("li");
            li.textContent = skill;
            modalSkills.appendChild(li);
        });

        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal();
    }
});