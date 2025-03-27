/*Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"node */


// Biblioteca para rodar o prompt no node.js
const prompt = require("prompt-sync")(); 

//Função para calcular o saldo
function calculo (v,d) {
    return v - d; 
}

function main () {
    //Estrutura de repetição
    while (true) {
        //Entrada do nome do herói
        let nome = prompt(`Digite o nome do herói (ou 'sair' para encerrar o programa): `);
    
        //Condição para o usuário encerrar o programa
        if (nome.toLowerCase() === "sair") {
            console.log("Programa encerrado");
            break;
        }
    
        //Entrada da quantidade de vitoria e derrota
        let vitoria = parseInt(prompt(`Digite a quantidade de vitórias: `));
        let derrota = parseInt(prompt(`Digite a quantidade de derrotas: `));
    
        //Chamando a função, atribuindo os parâmetros e declarando a variável 'saldo'
        let saldo = calculo(vitoria, derrota);
    
        //variavel nível
        let nivel;
    
        //Verificação e classificação do nível do herói
        if (saldo < 10) {
            nivel = "Ferro";
        } else if (saldo >= 11 && saldo <= 20) {
            nivel = "Bronze";
        } else if (saldo >= 21 && saldo <= 50) {
            nivel = "Prata";
        } else if (saldo >= 51 && saldo <= 80) {
            nivel = "Ouro";
        } else if (saldo >= 81 && saldo <= 90) {
            nivel = "Diamante";
        } else if (saldo >= 91 && saldo <= 100) {
            nivel = "Lendário";
        } else { //Para vitórias >= 101
            nivel = "Imortal";
        }
    
        //saída
        console.log(`O herói tem saldo de ${saldo} vitórias e está no nível de ${nivel}`);
    }
}
