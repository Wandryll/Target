/*
4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  
*/

// Faturamento de dados por estado
const faturamentoEstados = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Função para calcular o percentual de cada estado
function calcularPercentuais(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, val) => acc + val, 0);

    const percentuais = {};
    for (let estado in faturamento) {
        percentuais[estado] = (faturamento[estado] / totalFaturamento * 100).toFixed(2);
    }

    return { totalFaturamento, percentuais };
}

// Calcula os percentuais
const resultado = calcularPercentuais(faturamentoEstados);

// Exibe os resultados
console.log(`Faturamento total: R$${resultado.totalFaturamento.toFixed(2)}`);
for (let estado in resultado.percentuais) {
    console.log(`${estado}: ${resultado.percentuais[estado]}%`);
}
