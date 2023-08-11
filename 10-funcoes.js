// Crie uma função que calcule a área do retângulo. 
// O nome da função deve ser rectangleArea, 
// que recebe como parâmetro dois valores, seu comprimento  e sua largura width.

// A função deve mostrar no console a área do retângulo com a seguinte frase:
// The area of rectangle is XXX.

function rectangleArea (length, width){
    const area = ((length*width) / 2);
    return area;

}
let calc = rectangleArea(8,3)


console.log("The area of rectangle is " + calc + " m²");