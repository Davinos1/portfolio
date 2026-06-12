// ===============================
// Cursor Glow
// ===============================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    if (!glow) return;

    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
});

// ===============================
// Scroll Reveal
// ===============================

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

reveals.forEach(item => {
    revealObserver.observe(item);
});

// ===============================
// Skill Bar Animation
// ===============================

const skillBars = document.querySelectorAll(".bar div");

const skillObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const width = entry.target.dataset.width;

            entry.target.style.width = `${width}%`;
        });
    },
    {
        threshold: 0.5
    }
);

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// ===============================
// Project Database
// ===============================

const projects = {

    zabbix: {
        category: "Monitoring / Infrastructure",

        title: "Zabbix Monitoring Server",

        description:
            "A monitoring platform built using VMware and Zabbix to learn how enterprise environments monitor infrastructure, servers and services.",

        tasks: [
            "Installed Zabbix Server",
            "Configured VMware virtual machines",
            "Added monitored hosts",
            "Created dashboards",
            "Configured alerts and monitoring checks",
            "Practised troubleshooting infrastructure issues"
        ]
    },

    homeassistant: {
        category: "Automation / Linux",

        title: "Home Assistant",

        description:
            "Built a Home Assistant environment on Ubuntu running inside VMware to learn automation and Linux administration.",

        tasks: [
            "Installed Ubuntu Server",
            "Configured Home Assistant",
            "Connected smart devices",
            "Built automations",
            "Created dashboards",
            "Managed Linux services"
        ]
    },

    cyber: {
        category: "Cyber Security",

        title: "Cyber Security Work Experience",

        description:
            "Completed cyber security and digital forensics work experience including investigations, research and technical presentations.",

        tasks: [
            "Worked in a cyber security team",
            "Participated in investigations",
            "Produced presentation material",
            "Learned digital forensics concepts",
            "Improved technical communication",
            "Developed understanding of cyber careers"
        ]
    }
};

// ===============================
// Modal Elements
// ===============================

const modal = document.getElementById("projectModal");

const modalClose = document.getElementById("modalClose");

const modalCategory = document.getElementById("modalCategory");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalTasks = document.getElementById("modalTasks");

// ===============================
// Open Modal
// ===============================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("click", () => {

        const projectId = card.dataset.project;

        const project = projects[projectId];

        modalCategory.textContent =
            project.category;

        modalTitle.textContent =
            project.title;

        modalDescription.textContent =
            project.description;

        modalTasks.innerHTML = "";

        project.tasks.forEach(task => {

            const li =
                document.createElement("li");

            li.textContent = task;

            modalTasks.appendChild(li);

        });

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

// ===============================
// Close Modal
// ===============================

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}

modalClose.addEventListener(
    "click",
    closeModal
);

// Click outside modal

modal.addEventListener(
    "click",
    (e) => {

        if (e.target === modal) {

            closeModal();

        }

    }
);

// Escape key

document.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key === "Escape" &&
            modal.classList.contains("active")
        ) {
            closeModal();
        }

    }
);

// ===============================
// Card Hover Tilt Effect
// ===============================

document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -10;

        const rotateY =
            ((x / rect.width) - 0.5) * 10;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});