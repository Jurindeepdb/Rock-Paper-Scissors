let inputU = document.getElementById('inputBoxU');
let inputC = document.getElementById('inputBoxC');
let Result = document.getElementById('Result');
let buttons = document.querySelectorAll('button');

let PS = document.getElementById('PS');
let CS = document.getElementById('CS');
let D = document.getElementById('D');

let UC = 0;
let a = Array.from(buttons);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

a.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == 'Rock'){
            UC = 1;
            inputU.value = "Rock";
        }

        else if(e.target.innerHTML == 'Paper'){
            UC = 2;
            inputU.value = "Paper";
        }

        else if(e.target.innerHTML == 'Scissors'){
            UC = 3;
            inputU.value = "Scissors";
        }
        else if(e.target.innerHTML == 'New Game'){
            UC = 4;
        }

        
        let CC = getRandomInt(1, 3);

        if(CC == 1){
            inputC.value = "Rock";
        }

        else if(CC == 2){
            inputC.value = "Paper";
        }

        else if(CC == 3){
            inputC.value = "Scissors";
        }

        if(UC == CC){
            Result.value = "It's a draw";
            D.value++;

            inputC.classList.remove('win', 'lose', 'draw');
            inputU.classList.remove('win', 'lose', 'draw');

            inputU.classList.add('draw');
            inputC.classList.add('draw');

            setTimeout(() => {
                inputU.classList.remove('draw');
                inputC.classList.remove('draw');
            }, 10000);
        }
        else if((UC == 1 && CC == 2) ||
                (UC == 2 && CC == 3) ||
                (UC == 3 && CC == 1)){
            Result.value = "You lose";
            CS.value++;
            
            inputC.classList.remove('win', 'lose', 'draw');
            inputU.classList.remove('win', 'lose', 'draw');

            inputC.classList.add('win');
            inputU.classList.add('lose');

            setTimeout(() => {
                inputC.classList.remove('win');
                inputU.classList.remove('lose');
            }, 10000);
        }
        else if((CC == 1 && UC == 2) ||
                (CC == 2 && UC == 3) ||
                (CC == 3 && UC == 1)){
            Result.value = "You win";
            PS.value++;

            inputC.classList.remove('win', 'lose', 'draw');
            inputU.classList.remove('win', 'lose', 'draw');

            inputU.classList.add('win');
            inputC.classList.add('lose');

            setTimeout(() => {
                inputU.classList.remove('win');
                inputC.classList.remove('lose');
            }, 10000);
        }
        else if(UC == 4){
            inputU.value = "";
            inputC.value = "";
            Result.value = "";
            PS.value = "";
            CS.value = "";
            D.value = "";
            inputC.classList.remove('win', 'lose', 'draw');
            inputU.classList.remove('win', 'lose', 'draw');
        }
    })
})
