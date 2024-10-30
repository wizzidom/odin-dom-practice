const option = document.querySelector(".option");
const links = document.querySelector(".links");

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
