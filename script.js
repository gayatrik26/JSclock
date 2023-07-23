let inputString = '';
let buttons = document.querySelectorAll('.button');

let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            inputString = eval(inputString);
            document.getElementById('input').value = inputString;
        } 
        else if (e.target.innerHTML === 'AC') {
            inputString = '';
            document.getElementById('input').value = inputString;
        } 
        else if (e.target.innerHTML === 'DEL') {
                inputString = inputString.substring(0, inputString.length - 1);
                document.getElementById('input').value = inputString;
        } 
        else {
            inputString = inputString + e.target.innerHTML;
            document.getElementById('input').value = inputString;
        }
    });
});
