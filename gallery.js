let overviewPhotos = [
  "./assets/a1.jpg",
  "./assets/a1.jpg",
  "./assets/a1.jpg",
  "./assets/a1.jpg",
  "./assets/a1.jpg",
  "./assets/a1.jpg",
];

const container = document.getElementById("photoDiv");

overviewPhotos.forEach((photo, index) => {
  const picBtn = document.createElement("button");
  picBtn.className = ["bg-red-500 w-36 h-36 overflow-hidden cursor-pointer"];
  const img = document.createElement("img");
  img.src = photo;
  img.alt = `Photo ${index}`;
  img.className = [
    "h-full w-full object-cover transform transition duration-500 hover:scale-125",
  ];
  picBtn.appendChild(img);
  container.appendChild(picBtn);
});
