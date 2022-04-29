var text = document.getElementById('text');

console.log(text);

text.textContent = 'textiki';

var box = document.getElementById('box');
console.log(box);

var counter = 0;

// image.addEventListener('click', function() {
// })

box.addEventListener('click', function(){
	this.classList.add('anotherImage')
})