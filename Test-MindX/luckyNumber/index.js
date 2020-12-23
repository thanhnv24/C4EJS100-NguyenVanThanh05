// let count = 0;
// let input = document.getElementById('input');
// input.addEventListener('keyup', () => {
//     return input.value;
// });

// let dial = document.getElementById('dial');
// dial.addEventListener('click', () => {
//     let randomNumber = Math.floor(Math.random() * 11);
//     count++;
//     if (input.value == randomNumber) {
//         document.getElementById('exact').innerHTML = `Congratulations on winning`;
//     } else {
//         document.getElementById('wrong').innerHTML = `Good luck next time <br> <br> The results are correct ${randomNumber} `;
//         if (count == 3) {
//             //document.getElementById('over').innerHTML = ` Your turn is over. Thank you!`;
//             alert(`Game over`);
//         }

//     }
// });
let num;
let dem = 0;
let input = document.getElementById("input");
input.addEventListener('keyup', () => {
    return input.value;
})
let bdial = document.getElementById("dial");
dial.addEventListener('click', () => {
    num = Math.floor(Math.random() * 11);
    dem++;
    if (input.value == num) {
        //alert("Chọn đúng. Phần thưởng là ...");
        var exact = document.getElementById('exact').innerHTML = `Congratulations on winning`;
    } else {
        var wrong = document.getElementById('wrong').innerHTML = `Good luck next time <br> <br> The results are correct${num} `;
        if (dem == 3) {
            alert(`Game over`);
        }
    }


    // alert(`Wrong. Kết quả đúng là ${num}`);
    // if (dem == 3) {
    //     alert(`Game over`);
    // }
})