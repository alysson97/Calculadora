const OPERATION = document.getElementById('operation');
const BUTTON = document.getElementById('btn');
let option;

let result = document.getElementById('result');


OPERATION.addEventListener('change', choose);


function choose(){
    option = +OPERATION.options[OPERATION.selectedIndex].value;

    BUTTON.addEventListener('click', calculate);
    

    function calculate(){
        
        
        let n1 = parseInt(document.getElementById('n1').value);
        let n2 = parseInt(document.getElementById('n2').value);


        if(option == 1){
            let sum = n1 + n2;
            result.innerHTML = sum; 
        } else if(option == 2){

            let subtraction = n1 - n2;
            result.innerHTML= subtraction;

        } else if(option == 3){

            let multiplication = n1 * n2;
            result.innerHTML = multiplication;
            
        } else if(option == 4){
            if(n2 == 0){
                result.innerHTML = 'Não é possível dividir por zero.'
            } else{
            let division = n1/n2;
            result.innerHTML = division;
            }
        }

        
    }

}

