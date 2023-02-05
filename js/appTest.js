// const title = document.getElementById("something");

// title.innerText = "Got u";

// console.log(title.id);
// console.log(title.className);

// const hellos = document.getElementsByClassName("hello");
// console.log(hellos);

// // todo: 'div.hello:first-child h1' =
// // todo: class hello를 가진 div 내부의 first-child인 h1을 찾아오는 것
// const title = document.querySelector("div.hello:first-child h1");

// // "title" 기재내용 변경
// // title.innerText = "Hello";

// // console.dir(title);
// // 색상바꾸기
// // title.style.color = "blue";

// function handleTitleClick() {
//     console.log("title was clicked!");
// }

// title.addEventListener("click", handleTitleClick);

// todo: 22-10-19
// todo: 'div.hello:first-child h1' =
// todo: class hello를 가진 div 내부의 first-child인 h1을 찾아오는 것
// const h1 = document.querySelector("div.hello:first-child h1");

// console.dir(h1);

// function handleTitleClick() {
//     h1.style.color = "brown";
// }

// function handleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }

// function handelMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "salmon";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }
// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }
// function handleWindowOnline() {
//     alert("All Good");
// }

// => JS에 function만을 넘겨주고, 유저가 'click'할 경우
// JS가 실행버튼을 대신 눌러주길 바라는 것
// So, addEventListener("click", handleTitleClick'()') 안 됨.
// because, 유저가 click하기 전에 실행됨
// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handelMouseLeave);

// h1.onclick = handleTitleClick;
// h1.onmouseenter = handleMouseEnter;
// h1.onmouseleave = handelMouseLeave;

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     // 빈 변수 newColor;
//     let newColor;
//     if (currentColor === "salmon") {
//         newColor = "blue";
//     } else {
//         newColor = "salmon";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const clickedClass = "clicked";
//     // 만약 'clickedClass가' h1의 classList에 포함되어 있지 않다면,
//     // 삭제, 아니라면 추가
//     if (h1.classList.contains(clickedClass)) {
//         h1.classList.remove(clickedClass);
//     } else {
//         h1.classList.add(clickedClass);
//     }
// }

// h1.addEventListener("click", handleTitleClick);

const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // const clickedClass = "clicked";
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
