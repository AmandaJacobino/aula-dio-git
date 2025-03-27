/*Instruções para entrega
# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

// Biblioteca para rodar o prompt no node.js
const prompt = require("prompt-sync")(); 

//Estrutura de repetição:
function main () { 
    while (true) {
        //Entrada do nome:
        let nome = prompt("Digite o nome do herói (ou 'sair' para encerrar): ");
    
        //O programa funciona até que o usuário decida sair:
        if (nome.toLowerCase() === "sair") {
            console.log("Programa encerrado");
            break;
        }
    
        //Entrada da quantidade de xp do usuário:
        let xp = Number(prompt("Digite a quantidade de xp: "));
    
        //variável nivel:
        let nivel;
    
        //Verificação do nivel com base no xp:
        if (xp < 1000) {
            nivel = "Ferro";
        } else if (xp >= 1001 && xp <= 2000) {
            nivel = "Bronze";
        } else if (xp >= 2001 && xp <= 5000) {
            nivel = "Prata";
        } else if (xp >= 5001 && xp <= 7000) {
            nivel = "Ouro";
        } else if (xp >= 7001 && xp <= 8000) {
            nivel = "Platina";
        } else if (xp >= 8001 && xp <= 9000) {
            nivel = "Ascendente";
        } else if (xp >= 9001 && xp <= 10000) {
            nivel = "Imortal";
        } else { //Para xp >= 10001
            nivel = "Radiante";
        }
    
        //Saída:
        console.log(`O herói de nome ${nome} está no nível ${nivel}`);
    }
}
    


