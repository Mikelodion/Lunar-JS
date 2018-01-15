
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
var altur= null;
var combustible = null;
var menuActivo = true;
//Dificultad
var facil = true;
var normal=false;
var dificil=false;
//Avisos
var vfinal = null;
var vllegada=8;


//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	
	//definición de eventos
	//mostrar menú móvil
    	document.getElementById("engranaje").onclick = function () {
		document.getElementById("menu").style.display = "inline-block";
		menuActivo = true;
		stop();
	}
	//ocultar menú móvil
	document.getElementById("return").onclick = function () {
		document.getElementById("menu").style.display = "none";
		menuActivo = false;
		start();
	}
	//CAmbiar dificultad
		cambiarDificultad();

		document.getElementsByClassName("button")[0].onclick = function () {
			facil=true;
			normal=false;
			dificil=false;
			vllegada=8;
			cambiarDificultad();
		}
		document.getElementsByClassName("button")[1].onclick = function () {
			facil=false;
			normal=true;
			dificil=false;
			vllegada=5;
			cambiarDificultad();
		}
		document.getElementsByClassName("button")[2].onclick = function () {
			facil=false;
			normal=false;
			dificil=true;
			vllegada=2;
			cambiarDificultad();
		}


	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	//Aviso final
	avisarFinal();

	document.getElementsByClassName("reiniciar")[1].onclick = function(){
		window.open("html.html","_self");
	}
	document.getElementsByClassName("reiniciar")[0].onclick = function(){
		window.open("html.html","_self");
	}
	
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
	motorOff();
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	altur=70-y;
	//actualizar marcadores
	if (altur<0 || v>0) {
		if (v>0) {
		velocidad.innerHTML=v.toFixed(2);
		altura.innerHTML=altur.toFixed(0);
		}
		if (altur<=0) {
			vfinal=v;
			v=0;
			velocidad.innerHTML=v.toFixed(2);
			altura.innerHTML=-altur.toFixed(0);
		}
	}
	else{
		velocidad.innerHTML=-v.toFixed(2);
		altura.innerHTML=altur.toFixed(0);
	}

	
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%";
		document.getElementById("nave1").style.top = y+"%";  
	} else { 
		stop();
	}

	avisarFinal();
}
function motorOn(){
	//el motor da aceleración a la nave
	if (!c==0&&y<70&&!menuActivo) {
	a=-g;
	document.getElementById("nave").style.display= "none";	
	document.getElementById("nave1").style.display="inline-block";
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);
}
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
	if (c < 0 ) {
		c = 0;
		motorOff();
	}
	combustible.innerHTML=c.toFixed(0);
}
function cambiarDificultad(){
	if (v==0) {
	if (facil) {
		c=100;
		document.getElementsByClassName("button")[0].style.border="solid white";
		document.getElementsByClassName("button")[0].style.boxShadow="none";
		document.getElementsByClassName("button")[1].style.border="none";
		document.getElementsByClassName("button")[1].style.boxShadow="0 5px #666";
		document.getElementsByClassName("button")[2].style.border="none";
		document.getElementsByClassName("button")[2].style.boxShadow="0 5px #666";
		combustible.innerHTML=c.toFixed(0);
	}
	if (normal){
		c=80;
		document.getElementsByClassName("button")[1].style.border="solid white";
		document.getElementsByClassName("button")[1].style.boxShadow="none";
		document.getElementsByClassName("button")[0].style.border="none";
		document.getElementsByClassName("button")[0].style.boxShadow="0 5px #666";
		document.getElementsByClassName("button")[2].style.border="none";
		document.getElementsByClassName("button")[2].style.boxShadow="0 5px #666";
		combustible.innerHTML=c.toFixed(0);
	}
	if (dificil) {
		c=60;
		document.getElementsByClassName("button")[2].style.border="solid white";
		document.getElementsByClassName("button")[2].style.boxShadow="none";
		document.getElementsByClassName("button")[0].style.border="none";
		document.getElementsByClassName("button")[0].style.boxShadow="0 5px #666";
		document.getElementsByClassName("button")[1].style.border="none";
		document.getElementsByClassName("button")[1].style.boxShadow="0 5px #666";
		combustible.innerHTML=c.toFixed(0);
	}
}
}

function avisarFinal(){
	if (y>=70) {
		if (vfinal<=vllegada) {
			document.getElementById("avisoVictoria").style.display="block"
		}
		else{
			document.getElementById("avisoDerrota").style.display="block"

		}
	}
}