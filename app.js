const h1 = document.querySelector(".click h1");
let count = 0;

function handleTitleClick() {
	count+=1;
	h1.innerText= "Click: " + count;
}

h1.addEventListener("click", handleTitleClick);