//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


//Bucle
while(numeroUsuario != numeroSecreto ){
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor : "));

    console.log(typeof(numeroUsuario));
    /*
    Este codigo realiza 
    la comparación
    */
    if (numeroUsuario == numeroSecreto) {
        //acertamos, fue verdadera la condición
        alert(`Acertaste, el número es : ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    }
    else {
        if(numeroUsuario > numeroSecreto){
            alert('El número secreto es menor');
        }
        else{
            alert('El número secreto es mayor');
        }
        //incrementamos en contador cuando no acierta
        //puede ser : intentos = intentos + 1 o "intentos += 1"
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        alert('Lo siento, no acertaste el número.');
    }
}