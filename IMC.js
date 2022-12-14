

const RESULT = document.getElementById('imcResult');

const BUTTON = document.querySelector('.btn2');


BUTTON.addEventListener('click', imcCalc);

function imcCalc(){

    const NAME = document.getElementById('name').value;
    const HEIGHT = parseFloat(document.getElementById('height').value).toFixed(2);
    const WEIGHT = parseInt(document.getElementById('weight').value);

    console.log(NAME);

    let IMC = (WEIGHT/(HEIGHT*HEIGHT)).toFixed(2);
    let opRES = '';
    

    if(IMC < 18.5){
        opRES = 'Abaixo do peso';
    } else if(IMC > 18.5 && IMC <= 24.9){
        opRES = 'na média para o seu peso =D'
    } else if(IMC > 25 && IMC <= 29.9){
        opRES = 'acima do peso';
    } else if(IMC > 30 && IMC <= 34.9){
        opRES = 'com obesidade grau 1. Pratique exercícios e procure uma alimentação mais saudável. =D'
    } else if(IMC > 35 && IMC <= 39.9){
        opRES = 'com obesidade grau 2. Sua poderia estar melhor, uma dieta baixa em gorduras e açucares, aliados de exercícios matinais podem te ajudar. =D'
    } else if(IMC > 40){
        opRES = 'correndo perigo, seu corpo não está nos melhores dias. Procure um profissional da saúde e inicie um protocolo de emagrecimento o quanto antes.'
    }

    
    
    RESULT.innerHTML = `Olá ${NAME}, Já que sua altura é ${HEIGHT} e seu peso é ${WEIGHT}, com um imc de ${IMC}, você está ${opRES}`;

    RESULT.classList.remove('hide');
}