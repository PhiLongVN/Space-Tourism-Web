

const icon = document.querySelector(".head-icon");
console.log("icon", icon)
const menu = document.querySelector(".head-menu");


icon.onclick = () => {
  menu.classList.toggle("active");
  icon.classList.toggle("active");
};


