# Lunar-JS

**Autor: Miquel Janer Mudoy**

[Link de RawGit](https://rawgit.com/Mikelodion/Lunar-JS/master/html.html)

**Codi minificat a la branca minified**

##Documentación

###Aspectes gràfics cambiats respecte al inicial

Degut a problemes de tamany i organització de les imatges, s'ha canviat tot l'aspecte gràfic del projecte.
Les imatges que s'han utilitzat provenen d'una prova no finalitzada d'un antic projecte.

**Canvis realitzats a les noves imatges**

-Hem canviat el menú d'opcions i d'informació degut a un problema d'espai i amb la propietat responsive.
-També s'han suprimit les imatges de dins el menú per botons, això ens ha ajudat amb la propietat responsive.

###Aspectes tècnics 

**HTML**
-Aquest esta compost per diversos contenidors disposats per tota la pantalla:

-El contenidor de la esquerra conté els indicadors de velocitat i altura.
-El del centre conté la la nau.
-El de la dreta conte un boto el qual obri el menu d'opcions(posa amb pausa el joc), juntament amb el sol (que reinicia tot el joc).
-El de abaix conte la lluna que es fins allà on ha d'aterrà la nau.

**Movil** i **ordinador**
La diposició del movil es la mateixa que la del ordinador, això dona un millor aspecte visual.

**Menú d'Informació**
-Aquest es basa amb una página web completament diferent a la del joc. Es pot identificar un contenidor central que conte tot el texte, juntament a aquest es troba un boto de retornar al joc. Tota aixo ajuda a la renderització de la pàgina.

###JavaScript

Funcionalidades:

**Activar Motor al pulsar alguna tecla o a la pantalla:** Para añadir esta funcionalidad simplemente se añade el codigo necesario.

**Evitar que se encienda el motor cuando no haya combustible o la nave ya haya llegado a la luna:** Para añadir esta funcionalidad se establecen una serie de variables y booleanos que mediante unas condiciones hacen posible esto.

**Cambiar la apariencia de la nave segun si esta con el motor encendido, apagado, o la nave se ha estrellado:** Mediante los comandos se puede cambiar la apariencia segun la velocidad, la altura.

**Cambiar el modo de juego:** Con una serie de variables conseguiremos cambiar el nivel de combustible y establecer un maximo de velocidad para aterrizar segun el modo en el que nos encotremos. Tambien con una serie de booleanos haremos que durante la partida no se pueda cambiar de dificultad.

**Abrir Menu:** Esto se hace possible mediante una serie de booleanos que pausan el juego al abrir el menu y no permiten que el motor de la nave se encienda cuando el menu esta abierto.

**Finalizar el juego:** Mediante una serie de variables condicionaremos la velocidad maxima de aterrizaje para que cuando la nave aterrize salga un mensaje de "VICTORIA" o "DERROTA" junto a un boton para reiniciar el juego.
