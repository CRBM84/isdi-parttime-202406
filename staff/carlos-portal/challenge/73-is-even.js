//really challenge is even 

function isEven(value){
    //check typeof value 
    let tipo = typeof value
    switch(tipo){//separate cases for each type
        case 'number':
            return value % 2 === 0
        case 'string':
            const cortadito = value.replace(/\s+/g, '')
            return cortadito.length % 2 === 0
        default://aqui por si te pones gracioso y pones un tipo de los que no dijimos
            return 'Error, el tipo ' + tipo + ' no es válido '  
    }
}


let result1 = isEven(1)
console.assert(result1 === false, {result: result1, message: 'Test 1 no pasado'})

let result2 = isEven(2)
console.assert(result2 === true, {result: result2, message: 'Test 2 no pasado'})

let result3 = isEven(0)
console.assert(result3 === true, {result: result3, message: 'Test 3 no pasado'})

let result4 = isEven('hola')
console.assert(result4 === true, {result: result4, message: 'Test 4 no pasado'})

let result5 = isEven('adios')
console.assert(result5 === false, {result: result5, message: 'Test 5 no pasado'})

let result6 = isEven(Number.MAX_SAFE_INTEGER)
console.assert(result6 === false, {result: result6, message: 'Test 6 no pasado'})

let result7 = isEven(Number.MAX_SAFE_INTEGER + 1)
console.assert(result7 === true, {result: result7, message: 'Test 7 no pasado'})