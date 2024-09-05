
/*
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

import { createInterface } from 'readline'
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    let invertida = '';

    // Percorre a string de trás para frente e adiciona cada caractere à nova string
    for (let i = str.length - 1; i >= 0; i--) {
        invertida += str[i];
    }

    return invertida;
}

// Defina a string para inverter (ou pode usar uma entrada do usuário)
function inputString() {
    rl.question('Digite uma string (ou digite "sair" para finalizar): ', (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log('Finalizando o programa...');
            rl.close();
        } else {
            const stringOriginal = input;
            const stringInvertida = inverterString(stringOriginal);

            // Exibe o resultado
            console.log("String original: " + stringOriginal);
            console.log("String invertida: " + stringInvertida);

            inputString();
        }
    });
}
// Chama a função de input
inputString();
