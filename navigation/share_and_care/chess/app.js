function showresult(res){
	document.getElementById('result').innerText = "You selected the value: " + res;;
}

document.getElementById('rd1').addEventListener('click', function(){
	showresult(1);
});

document.getElementById('rd2').addEventListener('click', function(){
	showresult(2);
});

document.getElementById('rd3').addEventListener('click', function(){
	showresult(3);
});

document.getElementById('rd4').addEventListener('click', function(){
	showresult(4);
});

document.getElementById('rd5').addEventListener('click', function(){
	showresult(5);
});