const url = 'https://dragonball-api.com/api/characters?limit=58';
let characterArray = [];
let characterOnScreen = [];
let container = document.querySelector('.container');
let winner = document.createElement('h2');

fetch(url)
	.then(res => res.json())
	.then(data => { 
		let characters = data.items;
		console.log(data);
		updateArray(characters);
	}
);

function updateArray(characters) {
	for (let i = 0; i < characters.length; i++) {
		const character = characters[i];
		characterArray[i] = character;
	}
}

function randomCards(){
	for(let i = 0; i < 2; i++){
		let randomCardId = Math.floor(Math.random() * 57);
		let characterCard = document.createElement('div');
		let name = document.createElement('h1');
		let image = document.createElement('img');
		let ki = document.createElement('h2');
		image.src = characterArray[randomCardId].image;
		name.textContent = characterArray[randomCardId].name;
		ki.textContent = "Ki: " + characterArray[randomCardId].ki;
		characterCard.append(name);
		characterCard.append(image);
		characterCard.append(ki);
		container.append(characterCard);
		characterOnScreen[i] = characterArray[randomCardId];
	}
	if(characterOnScreen[0].ki > characterOnScreen[1].ki){
		winner.textContent = 'El ganador es ' + characterOnScreen[0].name;
	}
	else{
		winner.textContent = 'El ganador es ' + characterOnScreen[1].name;
	}
	document.getElementById('random').classList.replace("boton", "apagado");
	document.getElementById('restart').classList.replace("apagado", "boton");
	document.body.append(winner);
}

function restart(){
	container.innerHTML = '';
	document.getElementById('random').classList.replace("apagado", "boton");
	document.getElementById('restart').classList.replace("boton", "apagado");
}