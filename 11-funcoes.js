// Crie uma função que diga se é um retângulo ou um quadrado. 
// O nome da função deve ser rectangleOrSquare, que recebe como parâmetro dois valores: 
// o comprimento length e a largura width.

// A função deve mostrar no console a seguinte frase se for um quadrado:

// It's a square

// Ou a seguinte frase se for um retângulo:

// It's a rectangle

function rectangleOrSquare (length, width) {
    if (length == width) {
    console.log ("It's a square")
    } else {
        console.log ("It's a rectangle")
    };
}
console.log(rectangleOrSquare(21,10));