
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;

//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("engranaje").onclick = function () {
		document.getElementById("menu").style.display = "inline-block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("return").onclick = function () {
		document.getElementById("menu").style.display = "none";
		start();
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=v.toFixed(2);
	altura.innerHTML=y.toFixed(0);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%";
		document.getElementById("nave1").style.top = y+"%";  
	} else { 
		stop();
	}
}
function motorOn(){
	//el motor da aceleración a la nave
	a=-g;
	document.getElementById("nave").style.display= "none";
	document.getElementById("nave1").style.display="inline-block";
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);

}
function motorOff(){
	a=g;
	document.getElementById("nave").style.display= "inline-block";
	document.getElementById("nave1").style.display="none";
	clearInterval(timerFuel);
	timerFuel=null;
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) c = 0;
	combustible.innerHTML=c.toFixed(0);	
}
