

var mainContainer = document.querySelector('	#main-container');
var mainContentContainer = document.querySelector('.mainContentContainer');
var sidebar = document.querySelector('#sidebar');
var navbar = document.querySelector('#nav');
var toggler = document.querySelector('.sidebar-toggler');
var slidebar = document.querySelector('.slide-nav');
var menuWrap = document.querySelector('div.menu-wrap');
var menuItem = document.querySelectorAll('div.menu-item');
var contactedList = document.querySelectorAll('div.contactedList');
var rightSetting = document.querySelector('.right_setting');
var rightSettingToggler = document.querySelector('.settings-toggler');


// ================== hides and shows the sidebar navigation =============
toggler.addEventListener('click', function () {
	// sidebar.classList.toggle('hide');
	mainContainer.classList.toggle('hide');
})

navbar.addEventListener('click', function (event) {
	slidebar.classList.add('eight');
});

rightSettingToggler.addEventListener('click', function (event) {
	rightSetting.classList.add('right_setting_toggle');
})

window.addEventListener('mouseup', (event) => {
	slidebar = document.querySelector('.slide-nav');
	rightSetting = document.querySelector('.right_setting');
	if (event.target != slidebar && event.target.parentNode != slidebar) {
		slidebar.classList.remove('eight');
	}
	if (event.target != rightSetting && event.target.parentNode != rightSetting) {
		rightSetting.classList.remove('right_setting_toggle');
	}
})

var sidebarListItems = document.querySelectorAll('li.hub');
sidebarListItems.forEach((list) => {

	list.addEventListener('click', (e) => {
		sidebarListItems.forEach(function (item) {
			item.classList.remove('listClickEffect')
		})
		list.classList.add('listClickEffect');
	})
});

var tableData = document.querySelectorAll('td');
tableData.forEach((td) => {
	td.addEventListener('click', (event) => {
		td.classList.toggle('highlight');
	})
})

var deleteToggler = document.querySelector('#caption button.toggleDelete');

deleteToggler.addEventListener('click', function (e) {
	var deleteBox = mainContainer.querySelectorAll('div.deleteBox');
	e.stopPropagation();
	deleteBox.forEach(box => {
		box.classList.toggle('disappear');
	});

	deleteBox.forEach(element => {
		element.addEventListener('click', () => {
			element.parentElement.remove();
		})
	});
})

var menuToggler = document.querySelector('.menuToggler');
var menuWindow = document.querySelector('.menu-window');
menuToggler.addEventListener('click', () => {
	menuWindow.classList.remove('slideShow');
})
var menuWindowBack = document.querySelector('.iconback');
menuWindowBack.addEventListener('click', () => {
	menuWindow.classList.add('slideShow');
})

let todoDiv = document.querySelector('.todoList');
todoDiv.addEventListener('click', e => {
	location.replace('TodoLproject/todoList.html');

})

let colorGame = document.querySelector('.colorGame');
colorGame.addEventListener('click', e => {
	location.replace('./colorGame/colorGame.html');

})
let about = document.querySelector('.about');
about.addEventListener('click', e => {
	location.replace('about.html');

})

let camera = document.querySelector('.iconcam');

function appendData(name, phone, fontawesome) {
	var divElement = document.createElement('div');
	var pElement = document.createElement('p');

	divElement.innerHTML =
		'<div class="iconBox box"><span><i class="' + fontawesome + '"></i></span></div>' +
		'<div class="contactInfo box">' +
		'<div class="nameInfo"><h5>' + name + '</h5></div>' +
		'<div class="phoneInfo">' + phone + '</div>' +
		'</div>' +
		'<div class="deleteBox disappear box"><span><i class="far fa-trash-alt"></i></span></div>';

	divElement.append(pElement);
	divElement.className = 'contactedList';
	mainContentContainer.appendChild(divElement);
}

function mainContentContainerRemover() {
	while (mainContentContainer.firstChild) {
		mainContentContainer.firstChild.remove();
	}
}
//set main content header
var caption = document.querySelector('#caption h3');
var hubs = document.querySelectorAll('.hub');
hubs.forEach(hub => {
	hub.addEventListener('click', function (e) {
		mainContentContainerRemover();
		var valueOfClicked = e.target.value;
		caption.innerHTML = valueOfClicked;

		switch (valueOfClicked) {
			case 'BlackBerry Hub':
				addObject(object, 'far fa-comments');
				break;

			case 'Priority Hub':
				addObject(priority, 'fas fa-long-arrow-alt-up');
				break;

				case 'Notification':
					mainContentContainerRemover();
					addObject(Notification, 'fas fa-bell');
					break;

				case 'BlackBerry Messager':
					mainContentContainerRemover();
					addObject(Messager, 'fab fa-blackberry');
					break;

				case 'Text Messages':
					mainContentContainerRemover();
					addObject(TextMessage, 'fas fa-comment-alt');
					break;

				case 'Calls Hub':
					mainContentContainerRemover();
					addObject(Calls, 'fas fa-phone');
					break;

				case 'PIN Hub':
					mainContentContainerRemover();
					addObject(PIN, 'fas fa-mobile-alt');
					break;

				case 'Voice Mail':
					mainContentContainerRemover();
					addObject(VoiceMail, 'far fa-sticky-note');
					break;

		}
	})
});


//=============== contacts object ==============
import {
	object, priority, Notification, Messager, TextMessage, Calls, PIN, VoiceMail
} from './data.js';



//function addObject take an object as an argument
var nameArray = [],
	phoneArray = [];

//set nameArray, PhoneArray to empty
function emptyArrays() {
	nameArray = [];
	phoneArray = [];
}

addObject(object, 'far fa-comments');
caption.textContent = 'BlackBerry Hub';

function addObject(contact, font) {
	//empty the arrays
	emptyArrays()
	//add person name to nameArray && person phone to phoneArray
	if (nameArray.length < 1 && phoneArray.length < 1) {
		contact.forEach((person) => {
			nameArray.push(person.name);
			phoneArray.push(person.phone);
		})
	} else {
		contact.forEach((person) => {
			if (!nameArray.indexOf(person.name) && !phoneArray.indexOf(person.phone)) {
				nameArray.push(person.name);
				phoneArray.push(person.phone);
			}
		})
		nameArray.pop();
		phoneArray.pop();
	}

	if (!mainContentContainer.hasChildNodes()) {
		for (let i = 0; i < nameArray.length; i++) {
			appendData(nameArray[i], phoneArray[i], font);
		}
	}
}
//================= end of addObject =================


var displayTime = document.querySelector('span.time');
var displayDate = document.querySelector('span.date');



//Time and date function
setInterval(() => {
	var dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	var d = new Date();
	var am_pm = "am";
	if (d.getHours() >= 11) {
		am_pm = 'pm';
	}
	displayTime.innerHTML = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
	displayDate.innerHTML = dayArray[d.getDay()] + " " + monthArray[d.getMonth()];
}, 1000);
