/* Manejo del DOM */

var propValores = {
    genero: document.getElementById('genero').value,
    rol: document.getElementById('rol').value,
    casa: document.getElementById('casa').value
}
var metValores = {
    inicio: function () {
        console.log(propValores.genero)

    }
}


function genero() {
    let gender = document.getElementById('genero').value
    console.log(gender)

}