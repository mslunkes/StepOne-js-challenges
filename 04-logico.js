// Escreva dentro do console usando operadores lógicos
// seguindo o exemplo:

// exemplo:
// se a pessoa é adulta (isAdult) e tem um carro (car), ela pode dirigir (canDrive)

// solução:
let isAdult = true;
let car = true;
let canDrive = isAdult && car
console.log(canDrive); //answer: true;


// 1 - se a pessoa é adulta (isAdult) e tem uma cerveja (beer), ela pode beber se quiser (canDrink)

let isAdult1 = true;
let beer = true;
let canDrink = isAdult1 && car
console.log(canDrink); 


// 2 - se está chovendo (rain) e voce tem um guardachuva (umbrella)
// Faça uma variável com o nome de molhado (wet)
// que precisa mudar de acordo com o valor de rain e umbrella. 
// Complete o código:

let rain = true;
let umbrella = true;
let wet = true;

if(rain && umbrella ) {
    wet = true;
} else {
    wet = false
};
console.log(wet); 


// 3 - se a pessoa é estudante (student) ou é aposentado (retired),
// ela pode ter desconto no ingresso do show (discount)
let student = true;
let retired = true;

let discount = student || retired;

if(student || retired){
    discount =true
}else {
    discount = false
};
console.log(discount)

// 4 - se a pessoa tem olhos verde (greenEyes) ou olhos azuis (blueEyes),
// ela tem olhos claros (lightColorEyes)
let greenEyes = true;
let blueEyes= true;

let lightColorEyes = true;

if(lightColorEyes = greenEyes || blueEyes){
    lightColorEyes = true
}else {
    lightColorEyes = false
};
console.log(lightColorEyes)
