const projects = {
    zabbix: {
        title: "ZABBIX SERVER",
        type: "CATEGORY: MONITORING / INFRASTRUCTURE",
        body: `
            <p>I built a monitoring solution using VMware and Zabbix to track infrastructure health and practise real-world system monitoring.</p>
            <ul>
                <li>Created a virtual server in VMware</li>
                <li>Installed and configured Zabbix</li>
                <li>Set up monitoring for systems and services</li>
                <li>Used dashboards to check uptime and system health</li>
                <li>Improved my troubleshooting and infrastructure skills</li>
            </ul>
        `
    },
    homeassistant: {
        title: "HOME ASSISTANT",
        type: "CATEGORY: AUTOMATION / LINUX",
        body: `
            <p>I configured Home Assistant on Ubuntu inside VMware to learn about Linux, automation, and managing smart home services.</p>
            <ul>
                <li>Installed Ubuntu in a virtual machine</li>
                <li>Configured Home Assistant</li>
                <li>Tested dashboards and integrations</li>
                <li>Created basic automation workflows</li>
                <li>Practised Linux server management</li>
            </ul>
        `
    }
};

function openModal(projectId) {
    const project = projects[projectId];

    document.getElementById("modal-title").innerHTML = project.title;
    document.getElementById("modal-type").innerHTML = project.type;
    document.getElementById("modal-body").innerHTML = project.body;

    document.getElementById("modal").classList.add("active");
}

function closeModal() {
    document.getElementById("modal").classList.remove("active");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");

    if (event.target === modal) {
        closeModal();
    }
};