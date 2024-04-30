const currentDate = new Date();
const thisYear = currentDate.getFullYear();

const footer = document.createElement("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `<small>Melisse Zeigler &copy; ${thisYear}</small>`;

footer.appendChild(copyright);
document.body.appendChild(footer);

let skills = ["Office365", "Python", "HTML", "CSS", "JavaScript", "SQL", "Github", "Sharepoint"]
let skillsSection = document.getElementById("skills");
let skillsList = document.createElement("ul");
skillsSection.appendChild(skillsList);

for (let skill of skills) {
    const skillItem = document.createElement("li");
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
}