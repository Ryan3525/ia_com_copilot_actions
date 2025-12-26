# IA na prática: Acelerando o desenvolvimento e garantindo a qualidade com GitHub Copilot e GitHub Actions

![CI](https://github.com/Ryan3525/ia_com_copilot_actions/actions/workflows/nodejs.yml/badge.svg)

---

## Contexto do Problema (Análise do Desafio)

Em equipes de desenvolvimento de software que crescem rapidamente, é comum surgir um dilema entre **velocidade de entrega** e **qualidade do código**.  
No cenário proposto, a empresa desenvolve uma ferramenta de colaboração online e enfrenta dificuldades para:

- Entregar novas funcionalidades dentro do prazo
- Manter uma boa cobertura de testes
- Evitar o aumento de bugs em produção
- Padronizar o código entre desenvolvedores júnior e pleno

A escrita manual de testes e o processo de revisão de código acabam se tornando gargalos, tornando o ciclo de feedback lento e oneroso.

---

##  Objetivo do Projeto

Este projeto tem como objetivo demonstrar como o uso combinado de **Inteligência Artificial** e **automação de pipelines** pode:

- Acelerar o desenvolvimento
- Aumentar a qualidade do código
- Garantir testes consistentes
- Reduzir falhas em produção

Para isso, foram utilizadas as ferramentas **GitHub Copilot** e **GitHub Actions** em um projeto simples em Node.js.

---

## O Papel da IA no Ciclo de Desenvolvimento de Software

A Inteligência Artificial tem um papel cada vez mais relevante no desenvolvimento moderno, atuando principalmente em:

### 🔹 Geração de Código
Com o **GitHub Copilot**, é possível gerar funções completas a partir de prompts em linguagem natural, reduzindo código repetitivo e acelerando a implementação de regras de negócio.

### 🔹 Geração de Testes Automatizados
A IA auxilia na criação de testes unitários, cobrindo cenários válidos e inválidos, o que aumenta a confiabilidade do sistema sem comprometer a velocidade de entrega.

### 🔹 Integração Contínua (CI/CD)
Com o **GitHub Actions**, os testes são executados automaticamente a cada push ou pull request, garantindo que erros sejam identificados rapidamente.

Essa combinação permite que a equipe mantenha um equilíbrio saudável entre **rapidez** e **qualidade**.

---

## Parte Prática — O que foi desenvolvido

- Projeto simples em **Node.js**
- Função principal de negócio:
  - `calcularValorFinal(valorTotal, percentualDesconto)`
- Testes unitários criados com **Jest**
- Pipeline de **CI/CD** configurado com **GitHub Actions**
- Execução automática dos testes a cada alteração no repositório

### Caso Real que podemos olhar de exemplo

Um caso real amplamente divulgado é o uso do GitHub Copilot por equipes internas da própria GitHub e por empresas como a Microsoft. Estudos apresentados pela GitHub indicam que desenvolvedores que utilizam o Copilot conseguem completar tarefas de programação até 55% mais rápido quando comparados a desenvolvedores que não utilizam a ferramenta.

Diante disso, podemos notar o quanto a IA pode acelerar o processo de contrução e padronização, seja de correção de Bugs ou de demandas complexas.



### 📂 Estrutura do Projeto

```text
src/
 └── order.js
tests/
 └── order.test.js
.github/
 └── workflows/
      └── nodejs.yml


