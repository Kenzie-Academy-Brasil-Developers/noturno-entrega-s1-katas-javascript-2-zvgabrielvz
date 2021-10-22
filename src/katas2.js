function add(x, y){
    let sum = x + y;
    return sum;
}

console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


function multiply(x, y){
    let result = 0;
    for(let count = 0; count < y; count++){
        result = add(result, x)
    }
    return result;
}

console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');




function power(x, y) {
    let result = 1;

    for(let count = 1; count <= y; count++){
        result = multiply(result, x);
                        
    }
    return result;
}


console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


function factorial(x){
    let result = x;
    for(let count = x-1; count > 0; count--){
        result = result * (count);
    }
    return result

}

console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');



// console.assert(fibonacci(8) === 13, 'A função fibonacci não está funcionando como esperado');
