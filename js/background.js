const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "7.jpeg", "8.jpeg", "9.jpeg", "10.jpg", "11.jpg", "12.jpg", "13.png", "14.jpg", "15.jpg", "16.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/${chosenImage}`;

document.body.appendChild(bgImg);
