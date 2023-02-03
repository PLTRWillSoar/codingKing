const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input:first-child"); //id input
const pwInput = document.querySelector("#login-form input:nth-child(2)");   //pw input
const greeting = document.querySelector("#greeting");
const warning = document.querySelector("#warning");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const PW_KEY = "password";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    const password = pwInput.value;
    localStorage.setItem(PW_KEY, password);
    if (username === "" || password === "") {
        paintWarning();
    } else {
        paintGreetings();
    }   
}

function paintWarning() {
    warning.innerText = "아이디와 비밀번호를 입력해주세요";
    warning.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings() {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    bgImage.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    profileImage.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
const savedPw = localStorage.getItem(PW_KEY);

if (savedUsername === null && savedPw === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    bgImage.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else if (savedUsername === "" || savedPw === "") {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}