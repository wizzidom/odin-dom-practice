const option = document.querySelector(".option");
const links = document.querySelector(".links");
const dropdown = document.querySelector(".dropdown");
const parentDrop = dropdown.parentElement;

parentDrop.addEventListener("click", () => {
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
});

option.addEventListener("click", mobile);

function mobile() {
  option.style.transition = "ease 0.5s";
  links.style.transition = "ease 1.5s";
  rotate();
}
function rotate() {
  if (option.style.transform === "rotate(90deg)") {
    option.style.transform = "rotate(0deg)";
    links.classList.remove("mobile");
  } else {
    option.style.transform = "rotate(90deg)";
    links.classList.add("mobile");
  }
}
