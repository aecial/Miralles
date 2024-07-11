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

let titleCollection = [
  {
    name: "Overview",
    svg: `<svg width="40px" height="40px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M219.7 24.43l-17.8 2.06 6.8 59.37-36.1-50.35-14.6 10.5 31.9 44.45h37.4zm34.9.18l-6.3 65.85h18.2l6.1-64.15zm83.6 1.58l-37 64.27h20.7l31.9-55.29zm-50.9 6.33l-10.1 57.94h18.4l9.5-54.86zM195 108.5c-5.6 4-12.5 10.3-20.1 18h162.2c-7.6-7.7-14.5-14-20.1-18zm-36.9 36c-18.1 20.5-38.5 46.4-56.8 72.2-16.85 23.8-32.22 47.6-43.25 67.2-5.51 9.8-9.94 18.6-12.89 25.6-2.83 6.7-4.02 12-4.12 13.6.14 0 .58 1.6 2.29 3.3 2.32 2.4 6.32 5.2 11.79 7.4 10.93 4.4 27.71 6.6 50.08-.4 12.8-4 24.6 1.4 36.3 6.3 11.8 5 24.2 10.4 37.5 11.7 15.7 1.7 37.3-6.3 58.3-13.8 10.5-3.8 20.9-7.3 31-8.9 10.2-1.7 20.6-1.4 29.6 4.1 10.5 6.4 22.4 12.8 33.3 15.8 11 3.1 20.2 2.9 28.2-2.5 26.7-17.8 51.3-16.8 69.6-7.3 19.8 10.3 28.4 7.2 34 2.4 5.7-4.8 8.1-15 8-17.3v-.4c0-1.4-1.2-7-4.2-14s-7.4-15.8-12.9-25.6c-11-19.6-26.4-43.4-43.2-67.2-18.3-25.8-38.7-51.7-56.8-72.2zm121 201.3c-2.3 0-4.9.2-7.9.6-7.9 1.3-17.5 4.5-27.8 8.1-20.6 7.4-43.7 17.2-66.2 14.9-17-1.8-31.2-8.3-42.6-13.1-11.5-4.8-19.7-7.1-24-5.7-1.9.6-3.8 1.1-5.6 1.6v99.3c0 4.2 2.5 8.5 9.8 13.6 7.4 5 19.1 9.9 33.5 13.7 14.7 3.9 32.2 6.9 51 8.8 1.1-21.9 5-45.4 12.2-65.2 4.3-11.7 9.6-22.1 16.8-30.1 7.1-8.1 16.7-13.8 27.7-13.8s20.6 5.7 27.7 13.8c7.2 8 12.5 18.4 16.8 30.1 7.2 19.8 11.1 43.3 12.2 65.2 18.8-1.9 36.3-4.9 51-8.8 14.4-3.8 26.1-8.7 33.5-13.7 7.3-5.1 9.8-9.4 9.8-13.6V350c-10.3-1.6-22.3.9-37.6 11.1-13.4 8.9-29 8.7-43 4.9-13.9-3.8-26.9-11.1-37.9-17.8-2.4-1.5-5.5-2.3-9.4-2.4z"></path></g></svg>`,
  },
  {
    name: "Coffee Corner",
    svg: `<svg
              version="1.2"
              baseProfile="tiny"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 256 256"
              xml:space="preserve"
              width="40px"
              height="40px"
              fill="#00000"
              stroke="#00000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <path
                    d="M105.6,79.4c0-10.8,8.7-19.6,19.6-19.6h6.8c1.4,0,2.6-1.2,2.6-2.6c0-0.6-0.2-1-0.4-1.4c-1.8-2.2-2.7-5-2.7-8 c0-7.3,5.9-13.2,13.2-13.2h1V30h-1c-9.8,0-17.8,8-17.8,17.8c0,2.6,0.6,5.2,1.6,7.4h-3.3c-13.3,0-24.2,10.9-24.2,24.2v10.1h4.6V79.4 z"
                  ></path>
                  <path
                    d="M118.7,80.3v9.1h4.6v-9.1c0-3.8,3-6.8,6.8-6.8h16.7c7,0,12.8-5.7,12.8-12.7c0-1.4-0.2-2.6-0.6-3.8 c8.7-0.2,15.7-7.3,15.7-16c0-8.8-7-15.9-15.8-16.1v4.6c6.2,0.1,11.3,5.2,11.3,11.4c0,6.3-5.1,11.4-11.4,11.4 c-0.8,0-1.5-0.1-2.3-0.2c-0.2-0.1-0.5-0.1-0.6-0.1c-1.5,0-2.7,1.2-2.7,2.7c0,0.6,0.2,1,0.5,1.5c0.9,1.3,1.4,2.9,1.4,4.6 c0,4.5-3.6,8.1-8.1,8.1h-16.7C123.8,68.9,118.7,74,118.7,80.3z"
                  ></path>
                  <g>
                    <path
                      fill="none"
                      d="M181.8,126l0,32.3V171c12.1-0.4,21.8-10.3,21.8-22.5C203.6,136.3,193.9,126.4,181.8,126z"
                    ></path>
                    <polygon
                      fill="none"
                      points="81,118.7 81,134.7 170.6,134.7 170.6,103.5 81,103.5 "
                    ></polygon>
                    <path
                      d="M216.5,148.5c0-19.3-15.5-35.1-34.7-35.5l0-16.7v-3.9h-0.5h-6.7H76.9h-7.1c0,0.4-0.1,0.8-0.1,1.2v39.6V190 c0,11.4,9.5,20.9,21.2,20.9h69.7c11.7,0,21.2-9.3,21.2-20.9v-6C201,183.6,216.5,167.9,216.5,148.5z M170.6,134.7H81v-16v-15.2 h89.6V134.7z M181.7,171v-12.7l0-32.3c12.1,0.4,21.8,10.3,21.8,22.5C203.6,160.7,193.8,170.6,181.7,171z"
                    ></path>
                  </g>
                </g>
                <rect y="220.9" width="256" height="35.1"></rect>
              </g></svg></span
          >`,
  },
  { name: "Bar and Play Lounge", svg: `ff` },
  { name: "Lobby Area", svg: `` },
  { name: "Tipi Rooms", svg: `` },
  { name: "Swimming Pool and Jacuzzi", svg: `` },
  { name: "Go Kart, Playground and Unwind", svg: `` },
  { name: "Gazebos Snack Bar", svg: `` },
  { name: "Grill and Eat", svg: `` },
  { name: "Bonfire Camp", svg: `` },
  { name: "Miralles Farm", svg: `` },
];
const container = document.getElementById("photoDiv");
const modalDiv = document.getElementById("modalDiv");
const nowShowing = document.getElementById("nowShowing");
const nowShowing2 = document.getElementById("nowShowing2");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn2 = document.getElementById("prevBtn2");
const nextBtn2 = document.getElementById("nextBtn2");
let currentIndex = 0;
let currentPhotoIndex = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  changePics(0);
});
const mobileSelect = document.getElementById("mobileSelect");
mobileSelect.addEventListener("change", () => {
  changePics(Number(mobileSelect.value));
});
function changePics(index) {
  let title = document.getElementById("galleryTitle") || null;
  let icon = document.getElementById("gallerySvg") || null;
  title.innerHTML = titleCollection[index].name;
  icon.innerHTML = titleCollection[index].svg;

  container.innerHTML = "";
  currentIndex = index;
  photoCollection[index].forEach((photo, idx) => {
    const picBtn = document.createElement("button");
    picBtn.className = [
      "w-28 h-28 md:w-36 md:h-36 overflow-hidden cursor-pointer",
    ];
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
nextBtn2.addEventListener("click", () => {
  currentPhotoIndex =
    (currentPhotoIndex + 1) % photoCollection[currentIndex].length;
  nowShowing2.src = photoCollection[currentIndex][currentPhotoIndex];
});
prevBtn2.addEventListener("click", () => {
  currentPhotoIndex =
    (currentPhotoIndex - 1 + photoCollection[currentIndex].length) %
    photoCollection[currentIndex].length;
  nowShowing2.src = photoCollection[currentIndex][currentPhotoIndex];
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
