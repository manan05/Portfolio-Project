'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle('active');
}

/** 
 * header sticky
 */

const header = document.querySelector('[data-header]');

window.addEventListener("scroll", function () {
  if (window.scrollY >= 10) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});



/**
 * 
 * NavBar toggle
 */

const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');

navToggleBtn.addEventListener("click", function () {
  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);
});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {
    
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
  themeToggleBtn.classList.add("active");
  document.body.classList.remove("dark_theme");
  document.body.classList.add("light_theme");
} else {
  themeToggleBtn.classList.remove("active");
  document.body.classList.remove("light_theme");
  document.body.classList.add("dark_theme");
}

function scrollToContact() {
  var contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' })
}

function downloadResume() {
  var resumeLink = "https://drive.google.com/file/d/1aTGROr6emidyFGtvfb85IqDYMRgqd8UP/view?usp=drive_link";
  window.open(resumeLink, "_blank");
}

function redirectToGithub() {
  var githubLink = "https://github.com/manan05";
  window.open(githubLink, "_blank");
}