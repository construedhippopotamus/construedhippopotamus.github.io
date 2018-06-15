var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/2.jpg') {
      myImage.setAttribute ('src','images/1.jpg');
    } else {
      myImage.setAttribute ('src','images/2.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myMessage = 'You ate a cactus, '

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myMessage + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = myMessage + storedName;
}

myButton.onclick = function() {
  setUserName();
}

