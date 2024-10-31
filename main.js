const option = document.querySelector(".option");
const links = document.querySelector(".links");
const dropdown = document.querySelector(".dropdown");
const parentDrop = dropdown.parentNode;
const st = document.querySelector("a:has(+.dropdown)");

parentDrop.addEventListener("click", () => {
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
    st.style.scale = 1.2;
  } else {
    dropdown.style.display = "none";
  }
});

console.log(parentDrop);

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
