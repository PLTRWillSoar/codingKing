const loginInput = document.querySelector("#login-form input");
const loginbutton = document.querySelector("#login-form button");

function loginBtnClick() {
	const username = loginInput.value;
	if (username === "") {
		alert("Please write your name");
	} else if (username.length > 15) {
		alert("Your name is too long");
	}
}

loginbutton.addEventListener("click", loginBtnClick);