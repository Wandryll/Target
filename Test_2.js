/*
Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)
Escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function isFibonacci(n) {
    if (n < 0) return false;

    let a = 0, b = 1;

    while (a <= n) {
        if (a === n) return true;
        [a, b] = [b, a + b];
    }

    return false;
}

// Solicita um número do usuário 
function askQuestion() {
    rl.question('Informe um número (ou digite "sair" para terminar o programa): ', (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log('Finalizando o programa...');
            rl.close();
        } else {
            const numero = parseInt(input, 10);

            // Verifica e imprime se o número pertence a sequência de Fibonacci
            if (isFibonacci(numero)) {
                console.log(`O número ${numero} pertence a sequência de Fibonacci`);
            } else {
                console.log(`O número ${numero} não pertence a sequência de Fibonacci`);
            }

            askQuestion(); //Pergunta novamente
        }
    });
}
// Inicia o processo de perguntas
askQuestion();
