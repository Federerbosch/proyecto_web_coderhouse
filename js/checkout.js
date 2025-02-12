const tbody = document.querySelector("tbody")
const btnComprar = document.querySelector("button#btnComprar")



const retornatTablaHTML = (producto) =>{
    return `<tr class="fila-comprar">
                <td id="tablehead"><img class="imagen-yuyo" src="${producto.imagen}"</td>
                <td id="tablehead">${producto.nombre}</td>
                <td id="tablehead">${producto.precio}</td>
                <td id="celda-quitar"><button class="button-quitar">Eliminar</button></td>
            </tr>`
        
}

if(carritoFrutas.length > 0){
    tbody.innerHTML = ""
    carritoFrutas.forEach((producto) => (tbody.innerHTML += retornatTablaHTML(producto)
    ))
}

btnComprar.addEventListener("click", ()=>{
    alert("Muchas Gracias por tu compra!!!")
    localStorage.removeItem("carritoFrutas")
    tbody.innerHTML = ""
})


//eliminar un producto del carrrito
const quitarProductoAComprar = () => {
    const botonesQuitar = document.querySelectorAll('td#celda-quitar');

    // Itera sobre cada botón
    botonesQuitar.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            let carrito = JSON.parse(localStorage.getItem('carritoFrutas')) || [];

            // Elimina el producto del carrito usando el índice
            carrito.splice(index, 1); // Elimina el producto en el índice correspondiente

            // Guarda el carrito actualizado en localStorage
            localStorage.setItem('carritoFrutas', JSON.stringify(carrito));

            // Elimina la fila correspondiente del carrito en la tabla
            const fila = boton.closest('tr');
            fila.remove();
        });
    });
};

// Llama a la función para habilitar la funcionalidad de quitar productos
quitarProductoAComprar();
