let count = 0;
let input = document.getElementById('input');
input.addEventListener('keyup', () => {
    return input.value;
});

let dial = document.getElementById('dial');
dial.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    count++;
    if (input == randomNumber) {
        document.getElementById('exact').innerHTML = `Congratulations on winning`;
    } else {
        document.getElementById('wrong').innerHTML = `Good luck next time <br> <br> The results are correct ${randomNumber} `;
        if (count == 3) {
            //document.getElementById('over').innerHTML = ` Your turn is over. Thank you!`;
            alert(`Game over`);
        }

    }
});