console.log("If so powerful you are...Why leave?");

// Your code here...


























/*************************************************************************************************************/
/**
 * Quelques jolis petite features....
 */
Materialize.showStaggeredList('#liste'); // animations d'apparition 

Materialize.toast('Un nouveau message est arrivé !', 1000) // Crée un Toast de 4000 ms.

$('#favorites').modal(); // modal for favorites



// add notifiction
$('<audio id="chatAudio"><source src="sound/notify.wav" type="audio/wav"></audio>').appendTo('body');
$('#chatAudio')[0].play();



/**
 * Quelques jolis petite features....
 */
/*************************************************************************************************************/
