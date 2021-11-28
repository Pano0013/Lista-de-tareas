const input = document.getElementById("tarea");
const boton = document.getElementById("btn");
const tabla = document.getElementById("tabla"); 

function nuevaTarea(){

    const tarea = document.createElement("tr");

    tarea.innerHTML = `
     <td> <input type="checkbox" class="checkbox"/> </td>
     <td> ${input.value} </td>
     <td>X </td>
    `;
console.log(input.value);
    tabla.appendChild(tarea);
};

boton.addEventListener("click", nuevaTarea);