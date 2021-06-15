// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const arrayM = [];
array.forEach((letter) => {
  arrayM.push(letter.username + "!");
})
console.log(arrayM);

// VARIANTE CON CALLBACK

const arrayM = [];

function operazione(letter) {
  arrayM.push(letter.username + "!");
}

array.forEach(operazione);

console.log(arrayM);

// SOLUZIONE DEL PROF MA CON PIÙ CODICE

let newArray = []
array.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray.push(username);
})
console.log(newArray);

//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map((user) => {
  return user.username + "?";
})

console.log('map', mapArray);

//Filter the array to only include users who are on team: red

const filterArray = array.map((user) => {
  return user.team === "red"; 
})
console.log('filter: ', filterArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

// SOLUZIONE PROF

const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

// MIA VARIANTE ESERCIZIO SU TUTTI GLI OGGETTI
const mapArray = array.map((user) => {
    
  let { username } = user;
	username = username + "!";

  let { team } = user;
	team = team + "!";

  let { score } = user;
	score = score + "!";

  let { items } = user;
	items = items + "!";

  return {
    username, team, score, items
  }
})

console.log('map', mapArray);

// Approfondimento, ritornare valori multipli funzione: https://www.javascripttutorial.net/javascript-return-multiple-values/

