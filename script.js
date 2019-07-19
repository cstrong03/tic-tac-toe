let squares = document.querySelectorAll('.box');
let nextMove = document.querySelector('#next');
let rewrite = document.querySelector('#reset');
let currentPlay = 'X';
nextMove.innerHTML = currentPlay;
let tic = ['', '', '', '', '', '', '', '', ''];
let wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

const game = ()=>{
for(let i = 0; i < squares.length; i++){
	squares[i].addEventListener('click', ()=>{
		if (squares[i].innerHTML === '' ) {
			if (currentPlay === 'X') {
				squares[i].innerHTML = 'X';
				tic[squares[i].id]= squares[i].innerHTML;
			}
			else{
				squares[i].innerHTML = 'O';
				tic[squares[i].id] = squares[i].innerHTML;
			}
			if(currentPlay === 'X'){
				currentPlay = 'O';
				nextMove.innerHTML = `Next move is: ${currentPlay}`
			}
			else{
				currentPlay = 'X';
				nextMove.innerHTML = `Next move is: ${currentPlay}`
			}
		}
		winner();

	})
}

}
game();

let winner = ()=>{
	for(let j = 0; j < wins.length; j++){
		console.log(tic[wins[j][0]]);
		if (tic[wins[j][0]] === 'X' && tic[wins[j][1]] === 'X' && tic[wins[j][2]] === 'X'){
			window.alert('Player X Wins!!!!');
		}
		else if(tic[wins[j][0]] === 'O' && tic[wins[j][1]] === 'O' && tic[wins[j][2]] === 'O'){
			window.alert('Player O Wins!!!');
		}
	}
}

let redo = ()=>{
	for(let i = 0; i < squares.length; i++){
		squares[i].innerHTML = '';
		tic[i] = '';
	}
	game();
}
rewrite.addEventListener('click', redo);
