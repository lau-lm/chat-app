console.log("If so powerful you are...Why leave?");


// Your code here...


























/*************************************************************************************************************/
/**
 * Ne Pas Toucher
 */
Materialize.showStaggeredList('#liste'); // animations d'apparition 

Materialize.toast('Un nouveau message est arrivé !', 1000) // Crée un Toast de 4000 ms.

$('#favorites').modal(); // modal for favorites



// add notifiction
$('<audio id="chatAudio"><source src="sound/notify.wav" type="audio/wav"></audio>').appendTo('body');
$('#chatAudio')[0].play();


window.addEventListener('load', function () {
    Notification.requestPermission(function (status) {
        // Cela permet d'utiliser Notification.permission avec Chrome/Safari
        if (Notification.permission !== status) {
            Notification.permission = status;
        }
    });
});

var n = new Notification("Salut!");
n.onshow = function () {
    setTimeout(n.close.bind(n), 5000);
}


/**
 * Ne Pas Toucher
 */
/*************************************************************************************************************/
