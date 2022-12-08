var valueJs = document.getElementById('valueJs') ;
var periodJs = document.getElementById('periodJs');
var rateJs = document.getElementById('rateJs');

var valueJc = document.getElementById('valueJc');
var periodJc = document.getElementById('periodJc');
var rateJc = document.getElementById('rateJc');

const S_INTEREST = document.getElementById('simpleInterest');
const C_INTEREST = document.getElementById('compoundInterest');

const RESULT = document.getElementById('result');
const REMOVE_RES = document.getElementById('juros-result');

const BUTTON = document.getElementById('btn');

S_INTEREST.addEventListener('mousedown', simple);
C_INTEREST.addEventListener('mousedown', compound);



if(S_INTEREST && C_INTEREST !== focus){
    BUTTON.addEventListener('click', notFocused);
function notFocused(){

    window.alert("Selecione uma das opções !");

    

}
}



//colocar um evento que funcione quando o "radio" for selecionado.



function simple(){

    if(valueJc && periodJc && rateJc !== ''){
        document.getElementById('valueJc').value = ''
        document.getElementById('periodJc').value = ''
        document.getElementById('rateJc').value = ''
     }


    BUTTON.removeEventListener('click', notFocused);

    if(valueJc.disabled && periodJc.disabled && rateJc.disabled === false){

       
    }
    valueJc.disabled = true;
    periodJc.disabled = true;
    rateJc.disabled = true;

    valueJs.disabled = false;
    periodJs.disabled = false;
    rateJs.disabled = false;



    BUTTON.addEventListener('click', simpleInterest);

    function simpleInterest(){

        valueJs = parseInt(document.getElementById('valueJs').value) ;
        periodJs = parseInt(document.getElementById('periodJs').value);
        rateJs = parseInt(document.getElementById('rateJs').value);
        rateJs = rateJs*0.01

        

        const JS = ((valueJs*periodJs*rateJs)+valueJs).toFixed(2);

        RESULT.innerHTML = `R$ ${JS}`;

        REMOVE_RES.classList.remove('hide');


    

        return;

    }


}

function compound(){

    if(valueJs && periodJs && rateJs !== ''){
        document.getElementById('valueJs').value = ''
        document.getElementById('periodJs').value = ''
        document.getElementById('rateJs').value = ''
     }

    BUTTON.removeEventListener('click', notFocused);

    if(valueJs.disabled && periodJs.disabled && rateJs.disabled === false){

        valueJs.disabled = true;
        periodJs.disabled = true;
        rateJs.disabled = true;



    }
    valueJs.disabled = true;
    periodJs.disabled = true;
    rateJs.disabled = true;

    valueJc.disabled = false;
    periodJc.disabled = false;
    rateJc.disabled = false;

    BUTTON.addEventListener('click', compoundInterest);

    function compoundInterest(){

        BUTTON.removeEventListener('click', simpleInterest);

        valueJc = parseInt(document.getElementById('valueJc').value) ;
        periodJc = parseInt(document.getElementById('periodJc').value);
        rateJc = parseInt(document.getElementById('rateJc').value);
        rateJc *= 0.01


        let JC = (valueJc*((1+rateJc)**periodJc)).toFixed(2);

        

        RESULT.innerHTML = ` R$ ${JC}`;

        REMOVE_RES.classList.remove('hide');
 

        return;


    }


}




