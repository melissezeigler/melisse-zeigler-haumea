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

// Lesson 14
const messageForm = document.querySelector("[name = 'leave_message']");
messageForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log(usersName);
    console.log(usersEmail);
    console.log(usersMessage);

    const messageSection = document.querySelector("#messages");
    const messageList = messageSection.querySelector("ul");
    console.log(messageSection);

    const newMessage = document.createElement("li");
    newMessage.innerHTML = `<a href=mailto:${usersEmail}>${usersName}</a>
    <span>${usersMessage}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    removeButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
});