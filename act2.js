let entrada1 = prompt("Dime el primer año")
entrada1 = parseInt(entrada1)
let entrada2 = prompt("Dime el segundo año")
entrada2 = parseInt(entrada2)


function isLeapYear(entrada1, entrada2) {
    const añosbisiestos = []
    if (entrada1 >= 2001 && entrada2 <= 2500) {
        for (let i = entrada1; i <= entrada2; i++) {
            if (i % 4 === 0) {
                if (i % 100 === 0 && i % 400 === 0) {
                    añosbisiestos.push(i)
                }
            }
        }
        return añosbisiestos
    }else{
        console.log("prueba")
    }
    
}


console.log(isLeapYear(entrada1,entrada2)) 