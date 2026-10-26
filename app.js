
"use strict";

// --------------------------------------------------
// Proof2Work frontend demo
// --------------------------------------------------

const challenges = [
    {
        id: 1,
        title: "Build Your First Webpage",
        category: "Development",
        level: "Beginner",
        duration: "2–3 hours",
        icon: "</>",
        illustration: "teal",
        description: "Create a simple webpage using HTML and CSS. Practise building a page structure, adding content and styling it.",
        skills: ["HTML structure", "CSS styling", "Problem-solving"]
    },
    {
        id: 2,
        title: "Design a Mobile App Screen",
        category: "Design",
        level: "Beginner",
        duration: "2 hours",
        icon: "✧",
        illustration: "purple",
        description: "Plan a clean mobile app screen. Focus on readable text, useful buttons and a layout that is easy to understand.",
        skills: ["UI design", "Layout planning", "User experience"]
    },
    {
        id: 3,
        title: "Create a Personal Portfolio",
        category: "Development",
        level: "Intermediate",
        duration: "4–5 hours",
        icon: "▤",
        illustration: "orange",
        description: "Create a portfolio page to introduce yourself, display your skills and share projects you have worked on.",
        skills: ["HTML", "CSS", "Personal branding"]
    },
    {
        id: 4,
        title: "Practise an Interview",
        category: "Career",
        level: "Beginner",
        duration: "1 hour",
        icon: "☏",
        illustration: "blue",
        description: "Prepare answers to common interview questions and practise explaining your strengths and learning experiences.",
        skills: ["Communication", "Confidence", "Interview preparation"]
    },
    {
        id: 5,
        title: "Plan a Small Business Idea",
        category: "Business",
        level: "Beginner",
        duration: "2 hours",
        icon: "↗",
        illustration: "pink",
        description: "Choose a problem people face, suggest a solution and create a simple plan for a small business idea.",
        skills: ["Creative thinking", "Planning", "Problem-solving"]
    },
    {
        id: 6,
        title: "Build an Interactive Webpage",
        category: "Development",
        level: "Intermediate",
        duration: "4 hours",
        icon: "{ }",
        illustration: "yellow",
        description: "Use JavaScript to make a webpage respond to user actions, such as clicking buttons or entering information.",
        skills: ["JavaScript", "Events", "Testing"]
    }
];

const defaultProjects = [
    {
        id: "starter-1",
        title: "My Learning Journey",
        description: "A place to record the skills I am learning and the progress I make.",
        category: "Personal development"
    },
    {
        id: "starter-2",
        title: "My First Webpage",
        description: "A starter project for practising website structure, layout and styling.",
        category: "Development"
    }
];

const defaultProfile = {
    name: "Your Name",
    role: "Aspiring professional",
    location: "South Africa",
    about: ""
};

const defaultSkills = [
    "Problem-solving",
    "Communication",
    "HTML & CSS"
];

function loadSaved(key, fallback) {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : fallback;
    } catch (error) {
        return fallback;
    }
}

function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    } catch (error) {
        showToast("Your browser could not save this change.");
        return false;
    }
}

let completedChallenges = loadSaved("p2w-completed", []);
let projects = loadSaved("p2w-projects", defaultProjects);
let skills = loadSaved("p2w-skills", defaultSkills);
let profile = loadSaved("p2w-profile", defaultProfile);
let activeLevel = "all";
let selectedChallengeId = null;
let toastTimeout;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Safely display user-entered text inside HTML templates.
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (character) {
        const replacements = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
        return replacements[character];
    });
}

// --------------------------------------------------
// Navigation
// --------------------------------------------------

function createMobileNavigation() {
    if ($(".mobile-bottom-nav")) return;

    const nav = document.createElement("nav");
    nav.className = "mobile-bottom-nav";
    nav.setAttribute("aria-label", "Mobile navigation");

    const items = [
        { page: "home", icon: "⌂", label: "Home" },
        { page: "challenges", icon: "◇", label: "Challenges" },
        { page: "portfolio", icon: "▤", label: "Portfolio" },
        { page: "profile", icon: "◎", label: "Profile" }
    ];

    nav.innerHTML = items.map((item) => `
        <button class="nav-link ${item.page === "home" ? "active" : ""}"
                data-page="${item.page}">
            <span class="nav-icon" aria-hidden="true">${item.icon}</span>
            <span>${item.label}</span>
        </button>
    `).join("");

    document.body.appendChild(nav);
}

function showPage(pageName) {
    const target = $(`#page-${pageName}`);

    if (!target) return;

    $$(".page").forEach((page) => page.classList.remove("active"));
    target.classList.add("active");

    $$("[data-page]").forEach((button) => {
        const isActive = button.dataset.page === pageName;

        button.classList.toggle("active", isActive);

        if (button.classList.contains("nav-link")) {
            if (isActive) {
                button.setAttribute("aria-current", "page");
            } else {
                button.removeAttribute("aria-current");
            }
        }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Event delegation also handles navigation created by JavaScript.
document.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-page]");

    if (pageButton) {
        event.preventDefault();
        showPage(pageButton.dataset.page);
    }
});

// --------------------------------------------------
// Challenges
// --------------------------------------------------

function challengeCard(challenge) {
    const isCompleted = completedChallenges.includes(challenge.id);

    return `
        <article class="challenge-card ${isCompleted ? "is-completed" : ""}">
            <div class="challenge-card-top">
                <div class="challenge-illustration illustration-${challenge.illustration}">
                    ${escapeHTML(challenge.icon)}
                </div>
                ${isCompleted
                    ? '<span class="completed-label">✓ Completed</span>'
                    : `<span class="level-tag">${escapeHTML(challenge.level)}</span>`
                }
            </div>

            <div class="challenge-category">${escapeHTML(challenge.category)}</div>
            <h3>${escapeHTML(challenge.title)}</h3>
            <p>${escapeHTML(challenge.description)}</p>

            <div class="challenge-meta">
                <span>◷ ${escapeHTML(challenge.duration)}</span>
                <span>${challenge.skills.length} skills</span>
            </div>

            <button class="button ${isCompleted ? "button-outline" : "button-primary"}"
                    data-open-challenge="${challenge.id}">
                ${isCompleted ? "View challenge" : "View challenge →"}
            </button>
        </article>
    `;
}

function renderChallenges() {
    const homeContainer = $("#home-challenges");
    const allContainer = $("#all-challenges");

    if (homeContainer) {
        homeContainer.innerHTML = challenges
            .slice(0, 3)
            .map(challengeCard)
            .join("");
    }

    if (!allContainer) return;

    const searchTerm = ($("#challenge-search")?.value || "")
        .trim()
        .toLowerCase();

    const category = $("#category-filter")?.value || "all";

    const filtered = challenges.filter((challenge) => {
        const searchableText = [
            challenge.title,
            challenge.description,
            challenge.category,
            ...challenge.skills
        ].join(" ").toLowerCase();

        const matchesSearch = searchableText.includes(searchTerm);
        const matchesCategory =
            category === "all" || challenge.category === category;
        const matchesLevel =
            activeLevel === "all" || challenge.level === activeLevel;

        return matchesSearch && matchesCategory && matchesLevel;
    });

    allContainer.innerHTML = filtered.map(challengeCard).join("");

    $("#results-count").textContent =
        `Showing ${filtered.length} of ${challenges.length} challenges`;

    $("#empty-challenges").classList.toggle("hidden", filtered.length > 0);
    allContainer.classList.toggle("hidden", filtered.length === 0);
}

function openChallenge(id) {
    const challenge = challenges.find((item) => item.id === Number(id));

    if (!challenge) return;

    selectedChallengeId = challenge.id;

    $("#modal-category").textContent = challenge.category.toUpperCase();
    $("#modal-title").textContent = challenge.title;
    $("#modal-level").textContent = challenge.level;
    $("#modal-duration").textContent = `◷ ${challenge.duration}`;
    $("#modal-description").textContent = challenge.description;

    $("#modal-skills").innerHTML = challenge.skills
        .map((skill) => `<li>${escapeHTML(skill)}</li>`)
        .join("");

    const isCompleted = completedChallenges.includes(challenge.id);
    $("#complete-challenge").disabled = isCompleted;
    $("#complete-challenge").textContent = isCompleted
        ? "Already completed ✓"
        : "Mark as completed ✓";

    $("#challenge-modal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    $("#close-challenge-modal").focus();
}

function closeModal(modalSelector) {
    $(modalSelector).classList.add("hidden");

    const anotherModalOpen = $$(".modal-backdrop").length > 0 &&
        Array.from($$(".modal-backdrop")).some(
            (modal) => !modal.classList.contains("hidden")
        );

    if (!anotherModalOpen) {
        document.body.style.overflow = "";
    }
}

document.addEventListener("click", (event) => {
    const challengeButton = event.target.closest("[data-open-challenge]");

    if (challengeButton) {
        openChallenge(challengeButton.dataset.openChallenge);
    }
});

$("#challenge-search").addEventListener("input", renderChallenges);
$("#category-filter").addEventListener("change", renderChallenges);

$$("[data-level]").forEach((button) => {
    button.addEventListener("click", () => {
        activeLevel = button.dataset.level;

        $$("[data-level]").forEach((chip) => {
            chip.classList.toggle("active", chip === button);
        });

        renderChallenges();
    });
});

$("#clear-filters").addEventListener("click", () => {
    $("#challenge-search").value = "";
    $("#category-filter").value = "all";
    activeLevel = "all";

    $$("[data-level]").forEach((chip) => {
        chip.classList.toggle("active", chip.dataset.level === "all");
    });

    renderChallenges();
});

$("#close-challenge-modal").addEventListener("click", () => {
    closeModal("#challenge-modal");
});

$("#cancel-challenge").addEventListener("click", () => {
    closeModal("#challenge-modal");
});

$("#challenge-modal").addEventListener("click", (event) => {
    if (event.target.id === "challenge-modal") {
        closeModal("#challenge-modal");
    }
});

$("#complete-challenge").addEventListener("click", () => {
    if (
        selectedChallengeId === null ||
        completedChallenges.includes(selectedChallengeId)
    ) {
        return;
    }

    completedChallenges.push(selectedChallengeId);
    saveData("p2w-completed", completedChallenges);

    renderChallenges();
    updateStatistics();
    closeModal("#challenge-modal");
    showToast("Challenge completed! Keep up the good work.");
});

// --------------------------------------------------
// Portfolio and projects
// --------------------------------------------------

function renderProjects() {
    const container = $("#portfolio-projects");

    if (!container) return;

    if (projects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span>▤</span>
                <h3>Your portfolio is ready</h3>
                <p>Add your first project to start showing your work.</p>
            </div>
        `;
    } else {
        container.innerHTML = projects.map((project, index) => `
            <article class="project-card">
                <div class="project-art project-art-${index % 3}" aria-hidden="true">
                    ${index % 3 === 0 ? "▤" : index % 3 === 1 ? "✧" : "◇"}
                </div>
                <div class="project-content">
                    <h3>${escapeHTML(project.title)}</h3>
                    <p>${escapeHTML(project.description)}</p>
                    <span class="project-category">${escapeHTML(project.category)}</span>
                </div>
            </article>
        `).join("");
    }

    $("#project-count").textContent =
        `${projects.length} ${projects.length === 1 ? "project" : "projects"}`;

    updateStatistics();
}

$("#add-project-button").addEventListener("click", () => {
    $("#project-form").reset();
    $("#project-modal").classList.remove("hidden");
    document.body.style.overflow = "hidden";
    $("#project-title").focus();
});

$("#close-project-modal").addEventListener("click", () => {
    closeModal("#project-modal");
});

$("#cancel-project").addEventListener("click", () => {
    closeModal("#project-modal");
});

$("#project-modal").addEventListener("click", (event) => {
    if (event.target.id === "project-modal") {
        closeModal("#project-modal");
    }
});

$("#project-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const title = $("#project-title").value.trim();
    const description = $("#project-description").value.trim();
    const category = $("#project-category").value;

    if (!title || !description) {
        showToast("Please enter a project name and description.");
        return;
    }

    projects.push({
        id: Date.now(),
        title,
        description,
        category
    });

    saveData("p2w-projects", projects);
    renderProjects();
    $("#project-form").reset();
    closeModal("#project-modal");
    showToast("Project added to your portfolio.");
});

// --------------------------------------------------
// Skills
// --------------------------------------------------

function renderSkills() {
    const container = $("#skills-list");

    if (!container) return;

    if (skills.length === 0) {
        container.innerHTML = "<p>No skills added yet. Add your first skill below.</p>";
        return;
    }

    container.innerHTML = skills.map((skill, index) => `
        <span class="skill-tag">
            ${escapeHTML(skill)}
            <button class="remove-skill"
                    type="button"
                    data-remove-skill="${index}"
                    aria-label="Remove ${escapeHTML(skill)}">×</button>
        </span>
    `).join("");
}

$("#add-skill-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const input = $("#new-skill");
    const skill = input.value.trim();

    if (!skill) return;

    const alreadyExists = skills.some(
        (existingSkill) => existingSkill.toLowerCase() === skill.toLowerCase()
    );

    if (alreadyExists) {
        showToast("That skill is already on your list.");
        return;
    }

    skills.push(skill);
    saveData("p2w-skills", skills);
    renderSkills();
    input.value = "";
    showToast("Skill added.");
});

$("#skills-list").addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-skill]");

    if (!removeButton) return;

    const index = Number(removeButton.dataset.removeSkill);

    if (!Number.isInteger(index) || index < 0 || index >= skills.length) {
        return;
    }

    skills.splice(index, 1);
    saveData("p2w-skills", skills);
    renderSkills();
    showToast("Skill removed.");
});

// --------------------------------------------------
// Profile
// --------------------------------------------------

function renderProfile() {
    $("#profile-name").value = profile.name || "";
    $("#profile-role").value = profile.role || "";
    $("#profile-location").value = profile.location || "";
    $("#profile-about").value = profile.about || "";

    $("#profile-display-name").textContent = profile.name || "Your Name";
    $("#profile-display-role").textContent =
        profile.role || "Aspiring professional";
    $("#profile-display-location").textContent =
        profile.location || "Location not added";

    const initial = (profile.name || "P").trim().charAt(0).toUpperCase() || "P";

    $("#profile-avatar").textContent = initial;
    $(".avatar-small").textContent = initial;
}

$("#profile-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = $("#profile-name").value.trim();

    if (!name) {
        showToast("Please enter your name.");
        return;
    }

    profile = {
        name,
        role: $("#profile-role").value.trim(),
        location: $("#profile-location").value.trim(),
        about: $("#profile-about").value.trim()
    };

    saveData("p2w-profile", profile);
    renderProfile();
    showToast("Your profile has been updated.");
});

// --------------------------------------------------
// Dashboard statistics and notifications
// --------------------------------------------------

function updateStatistics() {
    $("#stat-challenges").textContent = challenges.length;
    $("#stat-completed").textContent = completedChallenges.length;
    $("#stat-projects").textContent = projects.length;
}

function showToast(message) {
    const toast = $("#toast");

    toast.textContent = message;
    toast.classList.remove("hidden");

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// Close an open modal with Escape.
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        $$(".modal-backdrop").forEach((modal) => {
            if (!modal.classList.contains("hidden")) {
                closeModal(`#${modal.id}`);
            }
        });
    }
});

// --------------------------------------------------
// Start the app
// --------------------------------------------------

function initialiseApp() {
    createMobileNavigation();
    renderChallenges();
    renderProjects();
    renderSkills();
    renderProfile();
    updateStatistics();

    console.log("Proof2Work frontend loaded successfully.");
}

initialiseApp();
