console.log("If so powerful you are...Why leave?");

// Your code here...


let app = new Vue({
	el: '#app',
	created: function () {
		this.$http.get('http://localhost:3000/messages').then(function (response) {
			this.messages = response.body;
		});
	},
	data: {
		messages: [],
		newMessage: '',
		errorMessage: '',
		searchRequest: '',
		lastMessageDate: '',
		messagesLiked: [],
		isLiked: true
	},
	computed: {
		searchMessage: function () {
			let tempArray = this.messages;
			let regexSearch = new RegExp(this.searchRequest, "i");

			if (this.searchRequest.length > 3) {
				tempArray = this.messages.filter(function (elt) {
					return regexSearch.test(elt.content);
				});
			}
			return tempArray;
		},




		// Bonus 2 non fonctionnel : Les regex fonctionnent, mais la class ne se met pas.

		containWilder: function () {
			// console.log('coucou');

			let regexWild = new RegExp(/wild code school/i)
			let regexVue = new RegExp(/vuejs/i)
			let regexNode = new RegExp(/nodejs/i)

			this.messages.forEach(function (element) {
				// console.log(element.content);
				if (regexWild.test(element.content) ||
					regexVue.test(element.content) ||
					regexNode.test(element.content)
				) {
					console.log('un élément contient un des regex');
					this.containWilder = true;
					console.log(this.containWilder)
					// return true;
				} else {
					return false;
				}
			});

		}
	},
	watch: {
		messages: function () {
			let lastPosition = this.messages.length - 1;
			this.lastMessageDate = this.messages[lastPosition].created;
		}
	},
	methods: {
		supprimer: function (message) {
			let position = this.messages.indexOf(message);
			this.messages.splice(position, 1);
		},
		envoyer: function () {
			let regexMessage = new RegExp(/[a-z'\?\!\s-]{10}/i);
			if (regexMessage.test(this.newMessage)) {
				this.$http.post('http://localhost:3000/messages', { content: this.newMessage, created: 'maintenant' }).then(function () {
					this.messages.push({ content: this.newMessage, created: 'maintenant' });
					this.newMessage = '';
					alert('Votre message a bien été envoyé !')
				});
			} else {
				this.errorMessage = 'Votre message doit compter au moins 10 caractères';
			}
		},
		liker: function (message) {
			if (this.messagesLiked.indexOf(message.id) === -1) {
				this.messagesLiked.push(message.id);
			} else {
				let position = this.messagesLiked.indexOf(message.id);
				this.messagesLiked.splice(position, 1);
			}
		}
	}
});


























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
