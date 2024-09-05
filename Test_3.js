/*
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

import fs from 'fs';

function calcularfaturamento(dados) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = Infinity;
    let totalFaturamento = 0;
    let diasComFaturamento = 0;

    // Calcula o menor e maior faturamento, além do total e dias com faturamento
    dados.forEach(element => {
        const faturamento = element.faturamento;

        if (faturamento > 0) {
            if (faturamento < menorFaturamento) menorFaturamento = faturamento;
            if (faturamento > menorFaturamento) maiorFaturamento = faturamento;
            totalFaturamento += faturamento;
            diasComFaturamento++;
        }
    });

    // Calcula a média mensal
    const mediaMensal = totalFaturamento / diasComFaturamento;

    // Conta os dias com faturamento acima da média
    let diasAcimaDaMedia = 0;
    dados.forEach(element => {
        if (element.faturamento > mediaMensal) {
            diasAcimaDaMedia++;
        }
    });

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Lê o arquivo JSON e processa os dados
fs.readFile('faturamento.json', 'utf-8', (err, data) => {
    if (err) {
        console.log('Erro ao ler o arquivo');
        return;
    }
    const dados = JSON.parse(data)
    const resultados = calcularfaturamento(dados);

    console.log(`Menor valor de faturamento: ${resultados.menorFaturamento}`);
    console.log(`Maior valor de faturamento: ${resultados.maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média: ${resultados.diasAcimaDaMedia}`);
});
