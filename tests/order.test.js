// Prompt usado no GitHub Copilot:
// "Crie testes unitários usando Jest para a função calcularValorFinal,
// cobrindo cenários válidos e inválidos, como desconto zero, desconto acima de 100
// e valores negativos."
const { calcularValorFinal } = require('../src/order');

describe('calcularValorFinal', () => {
    test('Deve retornar o valor total quando o desconto é 0%', () => {
        expect(calcularValorFinal(100, 0)).toBe(100);
    });
    test('Deve aplicar o desconto corretamente para valores válidos', () => {
        expect(calcularValorFinal(200, 10)).toBe(180);
        expect(calcularValorFinal(150, 20)).toBe(120);
    });
    test('Deve retornar 0 quando o desconto é 100%', () => {
        expect(calcularValorFinal(250, 100)).toBe(0);
    });
    test('Deve lançar erro para valor total negativo', () => {
        expect(() => calcularValorFinal(-100, 10)).toThrow('O valor total deve ser um número positivo.');
    });
    test('Deve lançar erro para percentual de desconto negativo', () => {
        expect(() => calcularValorFinal(100, -5)).toThrow('O percentual de desconto deve ser um número entre 0 e 100.');
    });
    test('Deve lançar erro para percentual de desconto acima de 100', () => {
        expect(() => calcularValorFinal(100, 150)).toThrow('O percentual de desconto deve ser um número entre 0 e 100.');
    }
);    test('Deve lançar erro para valor total não numérico', () => {
        expect(() => calcularValorFinal('cem', 10)).toThrow('O valor total deve ser um número positivo.');
    });
    test('Deve lançar erro para percentual de desconto não numérico', () => {
        expect(() => calcularValorFinal(100, 'dez')).toThrow('O percentual de desconto deve ser um número entre 0 e 100.');
    });
});
