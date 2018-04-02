var myButton = document.querySelector('button');
var myHeadibg = document.querySelector('.java-practise');

function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem(name, myName);
	myHeading.textContent = 'Oh hey ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
	else {
		var storedName = localStorage.getItem('name');
		myHeading.textContent = 'Oh hey ' + storedName;
	}
}

myButton.onclick = function() {
	setUserName();
}