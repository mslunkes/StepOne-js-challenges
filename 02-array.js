// 1- Crie um array vazio chamado animals

// 2- Adicione nesse array dois animais: dog e cat (você pode fazer isso de mais de uma forma diferente!)

// 3- Adicione no começo do array outro animal: spider

// 4- Remova o primeiro elemento do array

// 5- Remova o último elemento do array

// 6- Como ficou o array final?! E qual é o elemento 1 desse array?

let animals = ["dog",
                "cat",
];
//debugger - se quiser inspecionar linha a linha


// 3.1- Adicione no final do array outro animal: spider
//animals.push("spider");
// 3.2- Adicione no começo do array outro animal: spider
animals.unshift("spider");

// 4- Remova o primeiro elemento do array
animals.shift();


// 5- Remova o último elemento do array
animals.pop();

console.log (animals);

// 6- Como ficou o array final?! E qual é o elemento 1 desse array?
//[dog]

//adiciona um novo array
animals[1]="elephant"; 