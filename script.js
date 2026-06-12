// ======================================
// Screen Navigation
// ======================================

const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {

    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document
        .getElementById(screenId)
        .classList.add("active");

}

// ======================================
// Project Database
// ======================================

const projectData = {

    zabbix: {
        rank: "RANK 03",
        title: "ZABBIX SERVER",

        description:
            "A monitoring platform built using VMware and Zabbix to learn how enterprise environments monitor infrastructure, servers and services.",

        tasks: [
            "Installed Zabbix Server",
            "Configured VMware virtual machines",
            "Created monitoring dashboards",
            "Added monitored hosts",
            "Configured alerts",
            "Practised infrastructure troubleshooting"
        ]
    },

    homeassistant: {
        rank: "RANK 02",
        title: "HOME ASSISTANT",

        description:
            "Built a Home Assistant environment running on Ubuntu inside VMware to learn Linux administration and automation.",

        tasks: [
            "Installed Ubuntu Server",
            "Configured Home Assistant",
            "Built automation workflows",
            "Created dashboards",
            "Connected integrations",
            "Managed Linux services"
        ]
    },

    cyber: {
        rank: "RANK 01",
        title: "CYBER WORK EXPERIENCE",

        description:
            "Completed cyber security and digital forensics work experience involving investigation, teamwork and presentation work.",

        tasks: [
            "Worked on cyber security activities",
            "Participated in investigations",
            "Produced presentation material",
            "Explored digital forensics",
            "Improved communication skills",
            "Learned cyber security concepts"
        ]
    }

};

// ======================================
// Modal Elements
// ======================================

const modal =
    document.getElementById("projectModal");

const rankField =
    document.getElementById("projectRank");

const titleField =
    document.getElementById("projectTitle");

const descField =
    document.getElementById("projectDesc");

const tasksField =
    document.getElementById("projectTasks");

// ======================================
// Open Project
// ======================================

function openProject(projectId) {

    const project =
        projectData[projectId];

    rankField.innerHTML =
        project.rank;

    titleField.innerHTML =
        project.title;

    descField.innerHTML =
        project.description;

    tasksField.innerHTML = "";

    project.tasks.forEach(task => {

        const li =
            document.createElement("li");

        li.innerHTML = task;

        tasksField.appendChild(li);

    });

    modal.classList.add("active");

}

// ======================================
// Close Project
// ======================================

function closeProject() {

    modal.classList.remove("active");

}

// ======================================
// Close Modal Click Outside
// ======================================

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        closeProject();

    }

});

// ======================================
// ESC Key Close
// ======================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {

        closeProject();

    }

});

// ======================================
// Persona Menu Animation
// ======================================

const menuButtons =
    document.querySelectorAll(".menu-panel button");

menuButtons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateX(20px) rotate(-4deg) scale(1.08)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});

// ======================================
// Optional Keyboard Navigation
// ======================================

const menuOrder = [
    "about",
    "projects",
    "experience",
    "skills",
    "contact"
];

let currentSelection = 0;

document.addEventListener("keydown", (event) => {

    if (
        document.getElementById("home")
        .classList.contains("active")
    ) {

        if (event.key === "ArrowDown") {

            currentSelection++;

            if (
                currentSelection >
                menuOrder.length - 1
            ) {
                currentSelection = 0;
            }

            highlightMenu();
        }

        if (event.key === "ArrowUp") {

            currentSelection--;

            if (currentSelection < 0) {
                currentSelection =
                    menuOrder.length - 1;
            }

            highlightMenu();
        }

        if (event.key === "Enter") {

            showScreen(
                menuOrder[currentSelection]
            );

        }

    }

});

function highlightMenu() {

    menuButtons.forEach(btn => {

        btn.classList.remove("selected");

    });

    if (
        menuButtons[currentSelection]
    ) {

        menuButtons[currentSelection]
            .classList.add("selected");

    }

}

highlightMenu();