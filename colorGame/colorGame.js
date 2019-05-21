var colorBox = document.querySelectorAll(".colorBox");
var header = document.querySelector(".header");
var colorValue = document.querySelector("span.colorValue");
var game = document.querySelector('.game');
let status = document.querySelector(".status")
var numBox = 6;
var randomColor = generateColor(numBox);



function rgbValue(){
	// red values
		var r =	Math.floor(Math.random() * 256);
	// green values
		var g =	Math.floor(Math.random() * 256);
	// blue values
		var b =	Math.floor(Math.random() * 256);

		var color = "rgb("+ r + ", "+ g +", "+ b +")";
		return color;
}

function generateColor(x){
	// create an array
		var genArray = [];
	// generate random numbers
		for (var i = 0; i < x; i++) {
			genArray.push(rgbValue());
		}
	// return array
		return genArray;
}

//pick a random color from the existing array of color
function pickColor(color){
	var randomPicked = Math.floor(Math.random() * color.length);
	return randomPicked;
}
// set pickColor to a variable
var pickedColor = randomColor[pickColor(randomColor)];
colorValue.textContent = pickedColor;


for (var i = 0; i < colorBox.length; i++) {
	colorBox[i].style.backgroundColor = randomColor[i];
	//the header background color should take the color of the click box
		colorBox[i].addEventListener("click", function(){
			console.log(pickedColor, this.style.backgroundColor);
			if(this.style.backgroundColor === pickedColor){
				colorAll();
				status.textContent = 'Correct';
				game.textContent = 'Play Again?';
			}else{
				this.style.backgroundColor = "rgb(0,0,0)";
				status.textContent = 'Wrong Try Again';
			}
		});
	//
}

function colorAll(){
	for (var i = 0; i < colorBox.length; i++) {
		header.style.backgroundColor = pickedColor;
		colorBox[i].style.backgroundColor = pickedColor;
	}
}

//reset the game
var playBtn = document.querySelector('button.game');
playBtn.addEventListener('click', function(){
	randomColor = generateColor(numBox);
	pickedColor = randomColor[pickColor(randomColor)];
	colorValue.textContent = pickedColor;

	for (let i = 0; i < colorBox.length; i++) {
		 colorBox[i].style.backgroundColor = randomColor[i];	
	}
	header.style.backgroundColor = 'steelblue';
	status.textContent = '';
})

let easyBtn = document.querySelector('.easy');
let hardBtn = document.querySelector('.hard');

easyBtn.addEventListener('click', () => {
	hardBtn.classList.remove('active');
	easyBtn.classList.add('active');
	numBox = 3;
	randomColor = generateColor(numBox);
	pickedColor = randomColor[pickColor(randomColor)];
	colorValue.textContent = pickedColor;
	header.style.backgroundColor = 'steelblue';
	status.textContent = '';
	for (let i = 0; i < colorBox.length; i++) {
		 if (randomColor[i]) {
			colorBox[i].style.backgroundColor = randomColor[i];
		 }else{
			colorBox[i].style.display = 'none';
		 }
	}
})

hardBtn.addEventListener('click', () => {
	easyBtn.classList.remove('active');
	hardBtn.classList.add('active');
	numBox = 6
	randomColor = generateColor(numBox);
	pickedColor = randomColor[pickColor(randomColor)];
	colorValue.textContent = pickedColor;
	header.style.backgroundColor = 'steelblue';
	status.textContent = '';

	for (let i = 0; i < colorBox.length; i++) {
			colorBox[i].style.backgroundColor = randomColor[i];
			colorBox[i].style.display = 'block';
	}
})

let iconback = document.querySelector('.iconback');
	iconback.addEventListener('click', () =>{
		location.replace('../index.html');
	})