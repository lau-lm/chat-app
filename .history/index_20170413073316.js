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
    // Premièrement, vérifions que nous avons la permission de publier des notifications. Si ce n'est pas le cas, demandons la

    // Si l'utilisateur accepte d'être notifié
    if (window.Notification && Notification.permission === "granted") {
        var n = new Notification("Coucou !");
    }

    // Si l'utilisateur n'a pas choisi s'il accepte d'être notifié
    // Note: à cause de Chrome, nous ne sommes pas certains que la propriété permission soit définie, par conséquent il n'est pas sûr de vérifier la valeur par défaut.
    else if (window.Notification && Notification.permission !== "denied") {
        Notification.requestPermission(function (status) {
            if (Notification.permission !== status) {
                Notification.permission = status;
            }
            // Si l'utilisateur est OK
            if (status === "granted") {
                var n = new Notification("Coucou !");
            }

        });
    }

});





/**
 * Ne Pas Toucher
 */
/*************************************************************************************************************/
