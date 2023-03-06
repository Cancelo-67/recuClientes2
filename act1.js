//Creo un array para guardar las personas
const personas = new Array

//Creo la priemra persona que es un objeto
const persona1 = {
    Nombre: "Maria",
    Apellido: "Rodriguez",
    Nivel: 1,
    Puntuacion: 1,
    //Creo el metodo sumar
    sumar() {
        this.Puntuacion += 1;
        if (this.Puntuacion >= 10) {
            this.Puntuacion = 0
            this.Nivel ++
        }
    },
    //Creo el metodo restar
    restar() {
        this.Puntuacion --;
        if (this.Puntuacion == 0) {
            alert("Su jugador ha sido reseteado")
            this.resetear();
        }

    },
    //Creo el metodo resetear
    resetear(){
        this.Nivel = 1
        this.Puntuacion = 1
    }
}

const persona2 = {
    Nombre: "Alberto",
    Apellido: "Rodriguez",
    Nivel: 1,
    Puntuacion: 1,
    //Creo el metodo sumar
    sumar() {
        this.Puntuacion += 1;
        if (this.Puntuacion >= 10) {
            this.Puntuacion = 0
            this.Nivel ++
        }
    },
    //Creo el metodo restar
    restar() {
        this.Puntuacion --;
        if (this.Puntuacion == 0) {
            alert("Su jugador ha sido reseteado")
            this.resetear();
        }

    },
    //Creo el metodo resetear
    resetear(){
        this.Nivel = 1
        this.Puntuacion = 1
    }
}

personas.push(persona1,persona2)


persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.sumar()
persona1.restar()
console.log(persona1)