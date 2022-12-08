let resultVel = document.getElementById('resultVel');
let resultMass = document.getElementById('resultMass');
let resultCoin = document.getElementById('resultCoin');
let resultNet = document.getElementById('resultNet');

const BUTTON1 = document.getElementById('btn1');
const BUTTON2 = document.getElementById('btn2');
const BUTTON3 = document.getElementById('btn3');
const BUTTON4 = document.getElementById('btn4');

const VEL_ONE = document.getElementById('operation1');
const VEL_TWO = document.getElementById('operation2');
const MASS_ONE = document.getElementById('operation3');
const MASS_TWO = document.getElementById('operation4');
const COIN_ONE = document.getElementById('operation5');
const COIN_TWO = document.getElementById('operation6');
const INTERNET_ONE = document.getElementById('operation7');
const INTERNET_TWO= document.getElementById('operation8');

VEL_ONE.addEventListener('change', opOne);
VEL_TWO.addEventListener('change', opTwo);
MASS_ONE.addEventListener('change', opThree);
MASS_TWO.addEventListener('change', opFour);
COIN_ONE.addEventListener('change', opFive);
COIN_TWO.addEventListener('change', opSix);
INTERNET_ONE.addEventListener('change', opSeven);
INTERNET_TWO.addEventListener('change', opEight);


let option1;
let option2;

//guardar o valor do primeiro select no option1 e do segundo no option2.
//utilizar os valores dentro de funções chamadas pelo select para calcular como se estivesse somando.

/*function number(value){
    return value + 1;
}
    const sum = number(3);
    console.log(sum); -> deve aparecer o número 4.
*/
console.log(velValue);
function opOne(){

    option1 = +VEL_ONE.options[VEL_ONE.selectedIndex].value;
    option2 = +VEL_TWO.options[VEL_TWO.selectedIndex].value;



    BUTTON1.addEventListener('click', calculate);

    function calculate(){
        let velValue = parseInt(document.getElementById('velValue').value);

        let velOne = +velValue;
      
 

        // Vai uma definição de variável em cada caso ex: no case dólar, o real recebe o valor dele em dólar, além de todas as moedas vão receber o seu valor em dólar. Apenas o dólar vai receber o 'Coin value';

        switch(option1){
            
            case 0: 


                switch(option2){

                    case 0:

                        resultVel.innerHTML = parseFloat(velOne).toFixed(2) + ' m/s';
                        
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne/0.45).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne/0.27).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne/340).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne/300000000).toFixed(6) + ' vezes a luz';

                         break;

                }


                break;

            case 1:


                switch(option2){

                    case 0:

                    resultVel.innerHTML = velOne/2.237 + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne/0.62).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne/760.56).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne/671080887).toFixed(6) + ' vezes a luz';

                         break;

                }

                break;

            case 2:


                switch(option2){

                    case 0:

                        

                        resultVel.innerHTML = parseFloat(velOne/3.6).toFixed(2) + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne/0.62).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne).toFixed(2).toFixed(2).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne/1235).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne/1080000000).toFixed(6) + ' vezes a luz';

                         break;

                }
                break;

            case 3:


                switch(option2){

                    case 0:

                        resultVel.innerHTML = parseFloat(velOne/0.00294).toFixed(2) + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne/0.0047).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne/0.00081).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne*0.00000113333333).toFixed(6) + ' vezes a luz';

                         break;

                }

                break;

            case 4:


                switch(option2){

                    case 0:

                        resultVel.innerHTML = parseFloat(velOne*300000000).toFixed(2) + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne*670616627).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne*1080000000).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne*882353).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne).toFixed(6) + ' vezes a luz';

                         break;

                }

                break;

        }

    }

} 


    
    
function opTwo(/*valor*/){
    // option2 = valor;
    // return option2;
    option1 = +VEL_ONE.options[VEL_ONE.selectedIndex].value;
    option2 = +VEL_TWO.options[VEL_TWO.selectedIndex].value;

    BUTTON1.addEventListener('click', calculate);

    function calculate(){
        let velValue = parseInt(document.getElementById('velValue').value);
        let velOne = velValue;
 

        // Vai uma definição de variável em cada caso ex: no case dólar, o real recebe o valor dele em dólar, além de todas as moedas vão receber o seu valor em dólar. Apenas o dólar vai receber o 'Coin value';

        switch(option1){
            
            case 0: 


                switch(option2){

                    case 0:

                        

                        resultVel.innerHTML = parseFloat(velOne).toFixed(2) + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne/0.45).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne/0.27).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne/340).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne/300000000).toFixed(6) + ' vezes a luz';

                         break;

                }


                break;

            case 1:


                switch(option2){

                    case 0:

                    resultVel.innerHTML = parseFloat(velOne/2.237).toFixed(2) + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne/0.62).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne/760.56).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne/671080887).toFixed(6) + ' vezes a luz';

                         break;

                }

                break;

            case 2:


                switch(option2){

                    case 0:

                        

                        resultVel.innerHTML = parseFloat(velOne/3.6).toFixed(2) + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne/0.62).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne).toFixed(2).toFixed(2).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne/1235).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne/1080000000).toFixed(6) + ' vezes a luz';

                         break;

                }
                break;

            case 3:


                switch(option2){

                    case 0:

                        resultVel.innerHTML = parseFloat(velOne/0.00294).toFixed(2) + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne/0.0047).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne/0.00081).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne*0.00000113333333).toFixed(6) + ' vezes a luz';

                         break;

                }

                break;

            case 4:


                switch(option2){

                    case 0:

                        resultVel.innerHTML = parseFloat(velOne*300000000).toFixed(2) + ' m/s';
                    
                    break;

                    case 1:
            
                        resultVel.innerHTML = parseFloat(velOne*670616627).toFixed(2) + ' mp/h';

                        break;
            
                    case 2:
            
                        resultVel.innerHTML = parseFloat(velOne*1080000000).toFixed(2) + ' km/h';
            
                        break;
            
                    case 3:
            
                        resultVel.innerHTML = parseFloat(velOne*882353).toFixed(2) + ' vezes o som';

                        break;
            
                    case 4:
            
                        resultVel.innerHTML = parseFloat(velOne).toFixed(2) + ' vezes a luz';

                         break;

                }

                break;

        }

    }
} 

    // velTwo = opTwo(+OPERATION2.options[OPERATION2.selectedIndex].value);
    // console.log(velTwo);

function opThree(){
    option1 = +MASS_ONE.options[MASS_ONE.selectedIndex].value;
    option2 = +MASS_TWO.options[MASS_TWO.selectedIndex].value;

    BUTTON2.addEventListener('click', calculate);



    function calculate(){
        let massValue = parseInt(document.getElementById('massValue').value);
        let massOne = massValue;
 

        // Vai uma definição de variável em cada caso ex: no case dólar, o real recebe o valor dele em dólar, além de todas as moedas vão receber o seu valor em dólar. Apenas o dólar vai receber o 'Coin value';

        switch(option1){
            
            case 0: 


                switch(option2){

                    case 0:

                        resultMass.innerHTML = massOne + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne/1000).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne/28.35).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne/453.6).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne/1000000).toFixed(2) + ' toneladas';

                         break;

                }


                break;

            case 1:


                switch(option2){

                    case 0:

                    resultMass.innerHTML = parseFloat(massOne*1000).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne/0.03).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne/0.453).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne/1000).toFixed(2) + ' toneladas';

                         break;

                }

                break;

            case 2:


                switch(option2){

                    case 0:

                        

                        resultMass.innerHTML = parseFloat(massOne/0.035).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne/35.3).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne/16).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne/35274).toFixed(2) + ' toneladas';

                         break;

                }
                break;

            case 3:


                switch(option2){

                    case 0:

                        resultMass.innerHTML = parseFloat(massOne/0.0022).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne/2.2).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne/0.06).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne/35274).toFixed(2) + ' toneladas';

                         break;

                }

                break;

            case 4:


                switch(option2){

                    case 0:

                        resultMass.innerHTML = parseFloat(massOne*1000000).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne*1000).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne*35274).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne*2205).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' toneladas';

                         break;

                }

                break;

        }

    }

} 




function opFour(){
    option1 = +MASS_ONE.options[MASS_ONE.selectedIndex].value;
    option2 = +MASS_TWO.options[MASS_TWO.selectedIndex].value;

    BUTTON2.addEventListener('click', calculate);

    function calculate(){

        let massValue = parseInt(document.getElementById('massValue').value);
        let massOne = massValue;
 

        // Vai uma definição de variável em cada caso ex: no case dólar, o real recebe o valor dele em dólar, além de todas as moedas vão receber o seu valor em dólar. Apenas o dólar vai receber o 'Coin value';

        switch(option1){
            
            case 0: 


                switch(option2){

                    case 0:

                        

                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne/1000).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne/28.35).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne/453.6).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne/1000000).toFixed(2) + ' toneladas';

                         break;

                }


                break;

            case 1:


                switch(option2){

                    case 0:

                    resultMass.innerHTML = parseFloat(massOne*1000).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne/0.03).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne/0.453).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne/1000).toFixed(2) + ' toneladas';

                         break;

                }

                break;

            case 2:


                switch(option2){

                    case 0:

                        

                        resultMass.innerHTML = parseFloat(massOne/0.035).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne/35.3).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne/16).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne/35274).toFixed(2) + ' toneladas';

                         break;

                }
                break;

            case 3:


                switch(option2){

                    case 0:

                        resultMass.innerHTML = parseFloat(massOne/0.0022).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne/2.2).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne/0.06).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne/35274).toFixed(2) + ' toneladas';

                         break;

                }

                break;

            case 4:


                switch(option2){

                    case 0:

                        resultMass.innerHTML = parseFloat(massOne*1000000).toFixed(2) + ' gramas';
                    
                    break;

                    case 1:
            
                        resultMass.innerHTML = parseFloat(massOne*1000).toFixed(2) + ' kg';

                        break;
            
                    case 2:
            
                        resultMass.innerHTML = parseFloat(massOne*35274).toFixed(2) + ' onças';
            
                        break;
            
                    case 3:
            
                        resultMass.innerHTML = parseFloat(massOne*2205).toFixed(2) + ' libras';

                        break;
            
                    case 4:
            
                        resultMass.innerHTML = parseFloat(massOne).toFixed(2) + ' toneladas';

                         break;

                }

                break;

        }

    }
    
}

    

function opFive(){
    option1 = +COIN_ONE.options[COIN_ONE.selectedIndex].value;
    option2 = +COIN_TWO.options[COIN_TWO.selectedIndex].value;
    
    BUTTON3.addEventListener('click', calculate);

    function calculate(){

        let coinValue = parseInt(document.getElementById('coinValue').value);

        let coinReal;
        let coinDolar;
        let coinEuro;
        let coinLibra;
        let coinIene;

        // Vai uma definição de variável em cada caso ex: no case dólar, o real recebe o valor dele em dólar, além de todas as moedas vão receber o seu valor em dólar. Apenas o dólar vai receber o 'Coin value';

        switch(option1){
            
            case 0: 

            coinReal = coinValue;
            coinDolar = 5.20;
            coinEuro = 5.40;
            coinLibra = 6.34;
            coinIene = 0.038;

                switch(option2){

                    case 0:

                        

                        resultCoin.innerHTML = parseFloat(coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinReal/coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinReal/coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinReal/coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinReal/coinEuro).toFixed(2) + ' euros';

                         break;

                }


                break;

            case 1:

                coinReal = 0.19;
                coinDolar = coinValue;
                coinEuro = 1.05;
                coinLibra = 1.23;
                coinIene = 0.0074;

                switch(option2){

                    case 0:

                        resultCoin.innerHTML = parseFloat(coinDolar/coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinDolar/coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinDolar/coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinDolar/coinEuro).toFixed(2) + ' euros';

                         break;

                }

                break;

            case 2:
                coinReal = 0.16;
                coinDolar = 0.81;
                coinEuro = 0.86;
                coinLibra = coinValue;
                coinIene = 0.006;

                switch(option2){

                    case 0:

                        resultCoin.innerHTML = parseFloat(coinLibra/coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinLibra/coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinLibra/coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinLibra/coinEuro).toFixed(2) + ' euros';

                         break;

                }

                break;

            case 3:
                coinReal = 26.17;
                coinDolar = 135.86;
                coinEuro = 142.73;
                coinLibra = 166.86;
                coinIene = coinValue;

                switch(option2){

                    case 0:

                        resultCoin.innerHTML = parseFloat(coinIene/coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinIene/coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinIene/coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinIene/coinEuro).toFixed(2) + ' euros';

                         break;

                }

                break;

            case 4:
                coinReal = 0.18;
                coinDolar = 0.95;
                coinEuro = coinValue;
                coinLibra = 1.17;
                coinIene = 0.007;

                switch(option2){

                    case 0:

                        resultCoin.innerHTML = parseFloat(coinEuro/coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinEuro/coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinEuro/coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinEuro/coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinEuro).toFixed(2) + ' euros';

                         break;

                }

                break;

        }

    }
}

    

function opSix(){
    option1 = +COIN_ONE.options[COIN_ONE.selectedIndex].value;
    option2 = +COIN_TWO.options[COIN_TWO.selectedIndex].value;
    
    BUTTON3.addEventListener('click', calculate);

    function calculate(){

        let coinValue = parseInt(document.getElementById('coinValue').value);

        let coinReal;
        let coinDolar;
        let coinEuro;
        let coinLibra;
        let coinIene;

        // Vai uma definição de variável em cada caso ex: no case dólar, o real recebe o valor dele em dólar, além de todas as moedas vão receber o seu valor em dólar. Apenas o dólar vai receber o 'Coin value';

        switch(option1){
            
            case 0: 

            coinReal = coinValue;
            coinDolar = 5.20;
            coinEuro = 5.40;
            coinLibra = 6.34;
            coinIene = 0.038;

                switch(option2){

                    case 0:

                        

                        resultCoin.innerHTML = parseFloat(coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinReal/coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinReal/coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinReal/coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinReal/coinEuro).toFixed(2) + ' euros';

                         break;

                }


                break;

            case 1:

                coinReal = 0.19;
                coinDolar = coinValue;
                coinEuro = 1.05;
                coinLibra = 1.23;
                coinIene = 0.0074;

                switch(option2){

                    case 0:

                        resultCoin.innerHTML = parseFloat(coinDolar/coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinDolar/coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinDolar/coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinDolar/coinEuro).toFixed(2) + ' euros';

                         break;

                }

                break;

            case 2:
                coinReal = 0.16;
                coinDolar = 0.81;
                coinEuro = 0.86;
                coinLibra = coinValue;
                coinIene = 0.006;

                switch(option2){

                    case 0:

                        resultCoin.innerHTML = parseFloat(coinLibra/coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinLibra/coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinLibra/coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinLibra/coinEuro).toFixed(2) + ' euros';

                         break;

                }

                break;

            case 3:
                coinReal = 26.17;
                coinDolar = 135.86;
                coinEuro = 142.73;
                coinLibra = 166.86;
                coinIene = coinValue;

                switch(option2){

                    case 0:

                        resultCoin.innerHTML = parseFloat(coinIene/coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinIene/coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinIene/coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinIene/coinEuro).toFixed(2) + ' euros';

                         break;

                }

                break;

            case 4:
                coinReal = 0.18;
                coinDolar = 0.95;
                coinEuro = coinValue;
                coinLibra = 1.17;
                coinIene = 0.007;

                switch(option2){

                    case 0:

                        resultCoin.innerHTML = parseFloat(coinEuro/coinReal).toFixed(2) + ' reais';
                    
                    break;

                    case 1:
            
                        resultCoin.innerHTML = parseFloat(coinEuro/coinDolar).toFixed(2) + ' dólares';

                        break;
            
                    case 2:
            
                        resultCoin.innerHTML = parseFloat(coinEuro/coinLibra).toFixed(2) + ' libras';
            
                        break;
            
                    case 3:
            
                        resultCoin.innerHTML = parseFloat(coinEuro/coinIene).toFixed(2) + ' ienes';

                        break;
            
                    case 4:
            
                        resultCoin.innerHTML = parseFloat(coinEuro).toFixed(2) + ' euros';

                         break;

                }

                break;

        }

    }
}


function opSeven(){
    option1 = +INTERNET_ONE.options[INTERNET_ONE.selectedIndex].value;
    option2 = +INTERNET_TWO.options[INTERNET_TWO.selectedIndex].value;
   
    BUTTON4.addEventListener('click', calculate);

    function calculate(){

        let netValue = parseInt(document.getElementById('netValue').value);
        let netOne = netValue;

        switch(option1){
            
            case 0: 

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne/1000).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000000).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000000000).toFixed(2) + ' Terabit/s';

                         break;

                }


                break;

            case 1:

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne*1000).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne/1000).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000000).toFixed(2) + ' Terabit/s';

                         break;

                }

                break;

            case 2:

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne*1000000).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne*1000).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne/1000).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000).toFixed(2) + ' Terabit/s';

                         break;

                }

                break;

            case 3:

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne*1000000000).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne*1000000).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne*1000).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne/1000).toFixed(2) + ' Terabit/s';

                         break;

                }

                break;

            case 4:

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne*1000000000000).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne*1000000000).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne*1000000).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne*1000).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' Terabit/s';

                         break;

                }

                break;

        }

    }
}

    

function opEight(){
    option1 = +INTERNET_ONE.options[INTERNET_ONE.selectedIndex].value;
    option2 = +INTERNET_TWO.options[INTERNET_TWO.selectedIndex].value;
    
    
    BUTTON4.addEventListener('click', calculate);

    function calculate(){

        let netValue = parseInt(document.getElementById('netValue').value);
        let netOne = netValue;

        switch(option1){
            
            case 0: 

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne/1000).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000000).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000000000).toFixed(2) + ' Terabit/s';

                         break;

                }


                break;

            case 1:

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne*1000).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne/1000).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000000).toFixed(2) + ' Terabit/s';

                         break;

                }

                break;

            case 2:

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne*1000000).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne*1000).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne/1000).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne/1000000).toFixed(2) + ' Terabit/s';

                         break;

                }

                break;

            case 3:

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne*1000000000).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne*1000000).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne*1000).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne/1000).toFixed(2) + ' Terabit/s';

                         break;

                }

                break;

            case 4:

                switch(option2){

                    case 0:

                        resultNet.innerHTML = parseFloat(netOne*1000000000000).toFixed(2) + ' bit/s';
                    
                    break;

                    case 1:
            
                        resultNet.innerHTML = parseFloat(netOne*1000000000).toFixed(2) + ' Kilobit/s';

                        break;
            
                    case 2:
            
                        resultNet.innerHTML = parseFloat(netOne*1000000).toFixed(2) + ' Megabit/s';
            
                        break;
            
                    case 3:
            
                        resultNet.innerHTML = parseFloat(netOne*1000).toFixed(2) + ' Gigabit/s';

                        break;
            
                    case 4:
            
                        resultNet.innerHTML = parseFloat(netOne).toFixed(2) + ' Terabit/s';

                         break;

                }

                break;

        }

    }
}



