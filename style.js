// Welcome message when page loads
window.addEventListener("load", function () {
    console.log("Welcome to Dhatchayani's Portfolio");
});

// Button interaction
const welcomeBtn = document.getElementById("welcomeBtn");

welcomeBtn.addEventListener("click", function () {
    alert("Hello! 👋 Thanks for visiting my portfolio 😊");
    welcomeBtn.innerText = "Thanks for Visiting 💙";
});

// Skill hover interaction
const skills = document.querySelectorAll(".skills span");

skills.forEach(function (skill) {
    skill.addEventListener("mouseenter", function () {
        skill.style.backgroundColor = "#2563eb";
    });

    skill.addEventListener("mouseleave", function () {
        skill.style.backgroundColor = "#3b82f6";
    });
});
