let greeting = document.querySelector('.header__greeting');
let buttonApplyName = document.getElementById('name_apply');
let nameInput = document.getElementById('greeting_name');

// Name
if (localStorage.getItem('name') !== null) {
	let name = localStorage.getItem('name');
	let greetingName = `<span class="header__greeting-name">${name}</span>.`;
	setGreeting(greetingName);
	nameInput.placeholder = name;
} else {
	let name = 'Raiden';
	let greetingName = `<span class="header__greeting-name">${name}</span>.`
	setGreeting(greetingName);
	nameInput.placeholder = name;
}

buttonApplyName.onclick = () => {
	if (nameInput.value !== '') {
		let greetingName = `<span class="header__greeting-name">${nameInput.value}</span>.`;
		setGreeting(greetingName);

		localStorage.setItem('name', nameInput.value);

		nameInput.placeholder = nameInput.value;
		nameInput.value = '';
		nameInput.blur();
	}
};

// Hours of the greetings
function setGreeting(greetingName) {
	let hour = new Date().getHours();
	let timeOfTheDay = "evening";
	if (hour >= 23 || hour < 6) {
		timeOfTheDay = "night";
	} else if (hour >= 6 && hour < 12) {
		timeOfTheDay = "morning";
	} else if (hour >= 12 && hour < 17) {
		timeOfTheDay = "afternoon";
	}
	greeting.innerHTML = `Good ${timeOfTheDay}, ${greetingName}`;
}