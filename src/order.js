// Prompt usado no GitHub Copilot:
// "Crie uma função em JavaScript que receba o valor total de um pedido
// e um percentual de desconto. A função deve validar os dados e retornar
// o valor final com o desconto aplicado."
function calcularValorFinal(valorTotal, percentualDesconto) {
    // Validação dos dados de entrada
    if (typeof valorTotal !== 'number' || valorTotal < 0) {
        throw new Error('O valor total deve ser um número positivo.');
    }
    if (typeof percentualDesconto !== 'number' || percentualDesconto < 0 || percentualDesconto > 100) {
        throw new Error('O percentual de desconto deve ser um número entre 0 e 100.');
    }
    const valorDesconto = valorTotal * (percentualDesconto / 100);
    return valorTotal - valorDesconto; 
}

module.exports = { calcularValorFinal };