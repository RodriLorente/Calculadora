let addSymbol = (character) => {
    document.getElementById("screen").value += character;
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
}


let calculate = () => {
    let res = "ERROR!";

    let operation = document.getElementById("screen").value;
    let operatorFound = false;
    //TODO: realizar los calculos

    //bucle para encontrar el primer símbolo no numérico seguido de un símbolo numérico
        for (let i = 0; i < operation.length && operatorFound == false; i++) {
            
            if (!isNaN(operation[i]) && isNaN(operation [i + 1])) {
                operatorFound = true;
                
                //MÉTODO slice()!
                let num1 = operation.slice(0, i + 1);

                let operator = operation[i + 1];

                let num2 = operation.slice(i + 2);
                console.log(num1)
                console.log(num2)
                

                //!isNaN ya incluye los simbolos "+" y "-" ya que seguido de un numero cuenta como numero entero. 
                if(!isNaN(num1) && !isNaN(num2)) {
                    //se parsean los numeros (operandos)
                    num1 = parseInt(num1);
                    num2 = parseInt(num2);
                    //si se cumple la condicion
                    //Cálculos
                    switch(operator){
                        case "+":
                            res = num1 + num2;
                            break;
                        case "-":
                            res = num1 - num2;
                            break;
                        case "*":
                            res = num1 * num2;
                            break;
                        case "/":
                            if(num2 != 0) {
                                res = num1 / num2   
                            }
                            break;
                        default:
                            res = "ERROR!";
                            break;
                         } 

                }
                
                

                

                

                

                

                   

            }  
        }

    

    //mostrar resultado en la pantalla
    document.getElementById("screen").value = res;

    console.log(operation);
}









    


    


/*
Operaciones correctas:
1+2
1*63
3485*8942
3*-2
-1/-9
-5*14
-1*-1
-1/-1
-1--1
-1850*-9
+1-1
+9*+9


SOLUCION: tenemos que encontrar el primer simbolo NO NUMERICO
seguido de un simbolo numerico

un numero seguido de un simbolo -> el simbolo es el operador

-9*-6

-9
*
-6

for (let i = 0; i < operation.lenbth; i++){
    if (isNAN(operation[i])  && isNaN(operation[i+1]))
}


¿como lo encuentro?

isNaN() -> true -> NO es un numero -> es un simbolo
isNaN() -> false -> SI que es un numero

tengo que recorrer el string e ir viendo si consigo
que una posicion del string me devuelva false y la siguiente TRUE

si lo encuentro, ese es el operador

** NO SE PUEDEN HACER OPERACIONES CON DECIMAL
1/ 3 -> 0.3   


---->>> https://www.w3schools.com/jsref/jsref_obj_string.asp

MÉTODO substring() -> extrae un caracter de un string, entre dos indices especificos




Operaciones que NO se pueden hacer -> E

3+4+5
/9+3
5-*3
*9*3
7* / *9
-*5
-5

*/
