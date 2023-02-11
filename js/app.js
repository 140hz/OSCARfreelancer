var audio=document.getElementById("audio");

    var boton = document.getElementById("boton");  
        document.getElementById("pause").addEventListener("click", function() {
            // hacemos pausa
            audio.pause();
        }); 
 
		document.getElementById("play").addEventListener("click", function() {
			// Si deseamos que inicie siempre desde el principio
			//audioElement.currentTime = 0;
 
			// iniciamos el audio
			audio.play();
		});
       