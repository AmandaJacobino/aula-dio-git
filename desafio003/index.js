/*Instruções para entrega
# 3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada*/ 


// Classe 
class Heroi {
    //Objeto herói
    constructor(nome, idade, tipo) {
        this.nome = nome; 
        this.idade = idade;
        this.tipo = tipo;
        

        //Verificar o tipo de arma
        if (tipo === "mago") {
            this.ataque = "usou magia";
        } else if (tipo === "guerreiro") {
            this.ataque = "usou espada"; 
        } else if (tipo === "monge") {
            this.ataque = "usou artes marciais";
        } else if (tipo === "ninja") {
            this.ataque = "usou shuriken";
        }

    }
    //Exibir mensagem de saída
    atacar () {
        console.log (`O ${this.tipo} atacou usando ${this.ataque}`);
    }
    

}


// Criando um herói para testar
const meuHeroi = new Heroi("Arthur", 25, "guerreiro");
meuHeroi.atacar(); // Saída: O guerreiro atacou usando espada.
