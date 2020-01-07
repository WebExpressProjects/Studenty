$("#topMessage i").click(function(){
	$("#message").remove()
})

function relogio(){
	var data = new Date();
	var horas = data.getHours();
	var minutos = data.getMinutes();
	var exibe = document.getElementById("horas");
	exibe.innerHTML = horas + ":" + minutos;
}
setInterval(relogio, 1000);