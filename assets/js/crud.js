$(function() {
    $(".toggle").on("click",
        function() {
            if ($(".item").hasClass("active")) {
                $(".item").removeClass("active");
                $(this).find("a").html("<i class='fas fa-bars'></i>");
            } else {
                $(".item").addClass("active");
                $(this).find("a").html("<i class='fas fa-times'></i>");
            }
        });
});

$(function() {
    $.datepicker.setDefaults($.datepicker.regional["es"]);
    $("#datepicker").datepicker({
        firstDay: 0
    });
});

const inputFecha = document.getElementById('datepicker')
const inputConsola = document.getElementById('consola')
const inputFalla = document.getElementById('falla')

const btnAgregar = document.getElementById('agregar')
const btnEditar = document.getElementById('editar')

let arr = [];
let pos = 0;

btnAgregar.addEventListener('click', () => {
    let cita = {
        fecha: inputFecha.value,
        consola: inputConsola.value,
        falla: inputFalla.value
    }
    arr.push(cita)
    inputFecha.value = ''
    inputConsola = ''
    inputFalla = ''
    localStorage.setItem('citas', JSON.stringify(arr))
    renderElemento()
})

function renderElemento() {
    const lista = document.getElementById('lista-citas')
    lista.innerHTML = ''
    arr.forEach(function(item, i) {
        lista.innerHTML += `
        <li>
        <div class="datos_cita">
          <p>Fecha: ${item.fecha}</p>
          <p>Consola: ${item.consola}</p>
          <p>Falla: ${item.falla}</p>
        </div>
        <div class="btn_cita">
          <button class="danger" onclick="borrarElemento(${i})" >Eliminar</button>
          <button class="primary" onclick="editar(${i})" >Editar</button>
        <div>
        </li>
      `
    })
}

function borrarElemento(posicion) {
    arr.splice(posicion, 1)
    localStorage.setItem('citas', JSON.stringify(arr))
    if (arr.length == 0) {
        localStorage.clear()
    }
    renderElemento()
}

function getItems() {
    const citas = localStorage.getItem('citas')

    if (citas != null) {
        arr = JSON.parse(citas)
        renderElemento()
    }
}

getItems()

Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};
