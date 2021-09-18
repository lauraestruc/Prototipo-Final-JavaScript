/*----------------------- DATO DE SOLICITUDES --------------------*/

class User {
    constructor(firstName, lastName, email, phone, car) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.car = car;
    }
}

let users = []

let btnSave = document.getElementById("save")
let tablePrint = document.getElementById("table")
let form = document.getElementById("form")

//*----------------------- SAVE DATA JS -----------------------//
const saveData = () => {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let car = document.getElementById("car").value

    if (JSON.parse(localStorage.getItem("users") != null)) {
        users = JSON.parse(localStorage.getItem("users")) 
        let index = users.length + 1
        let user = new User(firstName, lastName, email, phone, car, index) 
        users.push(user) 
        localStorage.setItem("users", JSON.stringify(users)) 
    } else {
        let index = 1
        let user = new User(firstName, lastName, email, phone, car, index) 
        users.push(user) 
        localStorage.setItem("users", JSON.stringify(users)) 
    }

}

//----------------- PRINTDATA JQ---------------------//

const printData = () => {

    let dataToPrint = JSON.parse(localStorage.getItem("users"))

    if (dataToPrint != null) {
        dataToPrint.forEach(e => {
            $("#table").append(`
            <tr>
            <td class="col-1">${dataToPrint.indexOf(e)}</td>
            <th class="col-2">${e.firstName}</th>
            <th class="col-2">${e.lastName}</th>
            <th class="col-2">${e.email}</th>
            <th class="col-2">${e.phone}</th>
            <th class="col-2">${e.car}</th>
            </tr>
            `)
        })
    } else {
        $("#err").append(`No existen usuarios`)
    }
}

//------------- SWEETALERT --------------------//
const sweetAlert = ()=>{
    Swal.fire(
        '¡Solicitud enviada con exito!',
        'A la brevedad nos pondremos en contacto.',
        'success'
)}

//---------------- EJECUCION -------------------//

$("#save").on("click", () => {
    saveData()
    sweetAlert()
})

printData()