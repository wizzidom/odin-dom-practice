const option = document.querySelector(".option");
const links = document.querySelector(".links");
const dropdown = document.querySelector(".dropdown");
const parentDrop = dropdown.parentElement;

// start of navbar

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
// end of navbar

// start of carousel

const slide = document.querySelector(".slide img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const images = [
  "mob.jpg",
  "rengoku.jpg",
  "naruto.avif",
  "ichigo.webp",
  "goku-profile-e1616173641804-400x400.png",
];
let i = 0;
slide.src = images[i];

const previous = () => {
  if (i > 0) {
    i--;
    slide.src = images[i];
  }
};

const nextt = () => {
  if (i < images.length - 1) {
    i++;
    slide.src = images[i];
  } else {
    i = 0;
    slide.src = images[i];
  }
};
