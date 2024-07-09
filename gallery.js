let photoCollection = [
  [
    "./assets/a1.jpg",
    "./assets/a2.jpg",
    "./assets/try.jpg",
    "./assets/try2.jpg",
    "./assets/try3.jpg",
    "./assets/try4.jpg",
  ],
  [
    "./assets/a2.jpg",
    "./assets/a1.jpg",
    "./assets/try3.jpg",
    "./assets/try2.jpg",
    "./assets/try5.jpg",
    "./assets/try.jpg",
  ],
];

const container = document.getElementById("photoDiv");
const modalDiv = document.getElementById("modalDiv");
const nowShowing = document.getElementById("nowShowing");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex = 0;
let currentPhotoIndex = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  changePics(0);
});

function changePics(index) {
  container.innerHTML = "";
  currentIndex = index;
  photoCollection[index].forEach((photo, idx) => {
    const picBtn = document.createElement("button");
    picBtn.className = ["bg-red-500 w-36 h-36 overflow-hidden cursor-pointer"];
    picBtn.addEventListener("click", () => {
      currentPhotoIndex = idx;
      nowShowing.src = photo;
      my_modal_1.showModal();
    });

    const img = document.createElement("img");
    img.src = photo;
    img.alt = `Photo ${idx}`;
    img.className = [
      "h-full w-full object-cover transform transition duration-500 hover:scale-125",
    ];
    picBtn.appendChild(img);
    container.appendChild(picBtn);
  });
}

nextBtn.addEventListener("click", () => {
  currentPhotoIndex =
    (currentPhotoIndex + 1) % photoCollection[currentIndex].length;
  nowShowing.src = photoCollection[currentIndex][currentPhotoIndex];
});

prevBtn.addEventListener("click", () => {
  currentPhotoIndex =
    (currentPhotoIndex - 1 + photoCollection[currentIndex].length) %
    photoCollection[currentIndex].length;
  nowShowing.src = photoCollection[currentIndex][currentPhotoIndex];
});

const hamburgerBtn = document.getElementById("myHamburger");
const navbarDiv = document.getElementById("navbarDiv");
function clicked() {
  if (hamburgerBtn.classList.contains("swap-active")) {
    hamburgerBtn.classList.remove("swap-active");
    navbarDiv.classList.remove("flex");

    navbarDiv.classList.add("hidden");
  } else {
    hamburgerBtn.classList.add("swap-active");
    navbarDiv.classList.remove("hidden");
    navbarDiv.classList.add("flex");
  }
}
