
var mainContainer = document.querySelector('#main-container');
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
toggler.addEventListener('click', function(){
	// sidebar.classList.toggle('hide');
	mainContainer.classList.toggle('hide');
})

navbar.addEventListener('click', function(event){
	slidebar.classList.add('eight');
});

rightSettingToggler.addEventListener('click', function(event){
	rightSetting.classList.add('right_setting_toggle');
})

window.addEventListener('mouseup', (event) => {
	slidebar = document.querySelector('.slide-nav');
	rightSetting = document.querySelector('.right_setting');
	if(event.target != slidebar && event.target.parentNode != slidebar){
		slidebar.classList.remove('eight');
	}
	if(event.target != rightSetting && event.target.parentNode != rightSetting){
		rightSetting.classList.remove('right_setting_toggle');
	}
})

var sidebarListItems = document.querySelectorAll('li.hub');
sidebarListItems.forEach((list) =>{

	list.addEventListener('click', (e) =>{
		sidebarListItems.forEach(function(item){
			item.classList.remove('listClickEffect')
		})
		list.classList.add('listClickEffect');
	})
});

var tableData = document.querySelectorAll('td');
tableData.forEach((td) => {
	td.addEventListener('click', (event) =>{
		td.classList.toggle('highlight');
	})
})

//=============== contacts object ==============
var contacts = [
	{name: 'Nick', phone: '09037485728'},
	{name: 'Peter', phone: '09019785728'},
	{name: 'Johnson', phone: '08099485728'},
	{name: 'Steven', phone: '09033365728'},
	{name: 'Stacy', phone: '09036665728'},
	{name: 'Treasure', phone: '07037483328'},
	{name: 'Ella', phone: '08167485728'},
	{name: 'Queen', phone: '07047485728'},
	{name: 'Beyonce', phone: '09039940728'},
	{name: 'Victor', phone: '08037485728'}
]

var nameArray = [],
	phoneArray = [];
/*===========================================
function fixInValues take an object as an argument
=================================================*/
function fixInValues(contacts){
		
		phoneArray.push(contact.phone);
		appendData(contact.name, contact.phone)
}

function addObject(contact){
	//add person name to nameArray
		if(nameArray.length < 1){
			contact.forEach((person) =>{
				nameArray.push(person.name);
			})
		}else{
			contact.forEach((newPerson) => {
				if (!nameArray.indexOf(newPerson.name)) {
					nameArray.push(newPerson.name);
				}
			})
			nameArray.pop();
		}
		//add person phone to phoneArray
		if(phoneArray.length < 1){
			contact.forEach((person) =>{
				phoneArray.push(person.phone);
			})
		}else{
			contact.forEach((newPerson) => {
				if (!phoneArray.indexOf(newPerson.phone)) {
					phoneArray.push(newPerson.phone);
				}
			})
			phoneArray.pop();
		}
		
		console.log(nameArray, phoneArray);
		
		appendData(nameArray, phoneArray)
			let inlineDiv = mainContainer.querySelectorAll('h5');
		console.log(Array.from(inlineDiv).values());

		
		
}

//========creates a new element and appends the data to it=============
function appendData(name , phone){
	var divElement = document.createElement('div');
	var pElement = document.createElement('p');

	divElement.innerHTML = "<div class='iconDiv'><span><i class='fa fa-user'></i></span></div><div class='inlineDiv'><h5>" + name + "</h5><p>" + phone + "</p></div>";
	divElement.append(pElement);
	divElement.className = 'contactedList';
	mainContentContainer.appendChild(divElement);
}

var hub = document.querySelector('.hub');
hub.addEventListener('click', function(){
	// fixInValues(contacts);
	addObject(contacts);
})

function removeElement(element){
	
}

//================= end of fixInValues =================


var displayTime = document.querySelector('span.time');
var displayDate = document.querySelector('span.date');



//Time and date function
setInterval(() => {
	var dayArray = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	
	var d = new Date();
	var am_pm = "am";
	if (d.getHours() >= 11) {
		am_pm = 'pm';
	}
	displayTime.innerHTML =	d.getHours()+ ":" + d.getMinutes();
	displayDate.innerHTML = dayArray[d.getDay()] + " " + monthArray[d.getMonth()];
	
}, 1000);



