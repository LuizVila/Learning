const escola = 'Cod3r'

console.log(escola.charAt(4)) //Comando para verificar o caractere pedido
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!")) //Concatenação de caracteres
console.log('Escola ' + escola + "!") //Concatenação de caracteres
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))