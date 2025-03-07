let date = new Date();
date.setDate(date.getDate() + 21);

let dueDateElement = document.querySelector(".dueDate");
dueDateElement.innerText = `Due date: ${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}`;
dueDateElement.style.color = "#55dde0"