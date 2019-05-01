// 
import { getRandomInt } from './numbers';

let squares: NodeList;
const message = document.getElementById('message') as HTMLElement;

export function runApp() {
    // select a square as the secret square
    // pick a random numbers, 1-6 inclusive
    // find the corrleated square and "bless" it

    const secretNumber = getRandomInt(1, 6);
    const squares = document.querySelectorAll('.square');
    let currentSquare = 1;
    squares.forEach((sq: HTMLDivElement) => {
        if (currentSquare === secretNumber) {
            //     // mark the square somehow - in the DOM how to attach some data to indicate chosen one
            //     // use js API to access
            sq.dataset.secret = 'true';
        }

        sq.addEventListener('click', handleClick);

        currentSquare++;
    })
}

// you can't use fat arrow function for event handlers
function handleClick() {
    // Did they win?
    // console.log("You clicked on ", this);
    const isWinner = this.dataset.secret === "true";
    const clickedSquare = this;
    if (isWinner) {
        //  make it pretty
        clickedSquare.classList.add('winner');
        message.innerText = "You win!";
        squares.forEach((sq: HTMLDivElement) => {
            if (sq !== clickedSquare) {
                sq.classList.add('loser');
                sq.removeEventListener('click', handleClick);
            }
        })
    } else {
        clickedSquare.classList.add('loser');
        clickedSquare.removeEventListener('click', handleClick);

        const allDone = document.querySelectorAll('.square')
    }
}
