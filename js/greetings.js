// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// // ========================================
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");
// // ========================================

// function onLoginBtnClick() {
//     const username = loginInput.value;

//     console.log(username);
//     // console.log("clicked!!");
// }
// loginButton.addEventListener("click", onLoginBtnClick);

// ========================================
// const loginForm = document.getElementById("login-form");
// const loginInput = document.querySelector("#login-form input");

// const link = document.querySelector("a");

// function onLoginSubmit(event) {
//     // preventDefault() : event의 동작을 막음.
//     // form을 submit하면 브라우저는 기본적으로 페이지를 새로고침하도록 되어있으나,
//     // preventDefault() 함수는 이 동작을 막고있음.
//     event.preventDefault();
//     // const username = loginInput.value;

//     console.log(loginInput.value);
// }

// function handleLinkClick(event) {
//     event.preventDefault();
//     console.dir(event);
//     // alert("click");
// }
// // addEventListener -> 바로 실행하려고 사용하는게 아님.
// // event가 발생할 때, 브라우저는 onLoginSubmit(=function) 호출.
// loginForm.addEventListener("submit", onLoginSubmit);
// link.addEventListener("click", handleLinkClick);

// todo============================
// Getting Username
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";

// function onLoginSubmit(event) {
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);

//     const username = loginInput.value;
//     // greeting.innerText = "Hello " + username;
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// todo============================
// // Saving Username + Loading Username
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// // todo
// // 반복되는 문자열(String)들은 대문자 변수로 저장해 놓는 것이 좋음
// // 오타만들기 싫다는 사실 기억하고 상기시키기 편함
// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//     // 1. 브라우저의 기본동작 막음(페이지 새로고침)
//     event.preventDefault();
//     // 2. hidden 클래스 추가(form 다시 숨김)
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     // 3. loginInput.value를 username이라는 변수로 저장
//     const username = loginInput.value;
//     // localStorage에 유저정보가 없다면, form의 submit을 기다리고
//     // form이 submit되면 input으로 부터 유저 정보를 받고
//     // input에서 받은 유저를 가진 paintGreetings 호출
//     // 4. username 값 (value)을 username이라는 key와 함께 localStoragy에 저장
//     localStorage.setItem("USERNAME_KEY", username);
//     // 5. paintGreetings 함수 호출
//     // todo: user정보 input으로부터 받아옴
//     paintGreetings(username);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// function paintGreetings(username) {
//     // 1. 비어있는 h1 요소 안에 `Hello ${username}` 텍스트 추가 해주는 함수
//     // greeting.innerText = "Hello " + username;
//     greeting.innerText = `Hello ${username}`;
//     // 2. h1 요소로부터 'hidden'이라는 클래스명 제거
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// // 유저정보 확인
// const savedUsername = localStorage.getItem("USERNAME_KEY");

// if (savedUsername === null) {
//     // from 보이기
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//     // greeting 보이기
//     // localStorage에 유저정보가 있으면 localStorage에서 유저정보를 받아
//     // 인자로 넣어줌
//     // todo: user정보 localStorage에서 받아옴
//     paintGreetings(savedUsername);
// }

// 22-10-20
// SuperRecap
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

loginForm.addEventListener("submit", onLoginSubmit);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("USERNAME_KEY", loginInput.value);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem("USERNAME_KEY");
    greeting.innerText = `${username}'s TodoList`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}
