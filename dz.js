
var $btn = document.getElementById('button');
var $text = document.getElementById('text');


$btn.addEventListener('click', function () {
	$text.classList.toggle ('hidden');
})