function checkScore (a){
	if (a <= 19) {
		return 'Низкий';
	} else if (a <= 49){
		return 'Средний';
	} else{
		return 'Высокий' ;
	}
}
var btn = document.getElementById('btn');
var inp = document.getElementById('score');

var text = document.getElementById('text');

btn.addEventListener('click', function(){
	
	text.textContent = checkScore(inp.value);
})