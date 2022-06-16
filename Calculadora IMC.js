/*IMC MENOR QUE 18.5 A CLASSIFICAÇÃO SERÁ MAGREZA
IMC ENTRE 18.5 E 24.9 A CLASSIFICAÇÃO SERÁ NORMAL
IMC ENTRE 25.0 E 29.9 A CLASSIFICAÇÃO SERÁ SOBREPESO
IMC ENTRE 30.0 E 39.9 A CLASSIFICAÇÃO SERÁ OBESIDADE
IMC MAIOR OU IGUAL A 40.0 A CLASSIFICAÇÃO SERÁ OBESIDADE GRAVE */

const imc = massa / (altura * altura)
switch (imc){

    case 1  ("você está muito magro, vá treinar e comer mais"):
        imc <= 18.5;
        break;
    
    case 2  ("você está normal, parabéns"):
        imc > 18.5 && imc <= 24.9;
        break;
    
    case 3 ("você está com sobrepeso, partiu academia? aeróbico?"): 
        imc > 24.9 && imc <= 29.9;
        break;
     
    case 4 ("você está com obesidade, tá comendo muito mcDonalds"):
        imc > 29.9 && imc <= 39.9;
        break;
    

    case 5 ("você está com obesidade grave, vamos cuidar dessa saúde né?"): 
        imc >= 40;
        break;
    
}
