const producto = []

const URL = "js/producto.json"

const container = document.querySelector('div.container.container-card')


const retornarCardHtml= (producto) => {
    return `<div class="card">
                <div class="card-imagen"><img class="imagen-yuyo" src="${producto.imagen}"></div>
                <div class="card-name">${producto.nombre}</div>
                <div class="card-price">${producto.precio}</div>
                <div class="card-button">
                    <button class="button button-outline button-add" id="${producto.id}" title="Clic para agregar al carrito">COMPRAR</button>
                </div>
            </div>`
}

const activarClickEnBotones= ()=>{
    const botonAgregar = document.querySelectorAll('button.button-outline.button-add')
    if(botonAgregar !== null){
        botonAgregar.forEach((button)=>{
            button.addEventListener('click', (e)=>{
                agregarAlCarrito(e.target.id)
            })
        })
    }
}


const cargarProductos = (array)=>{
    if(array.length > 0){
        container.innerHTML = ""
        array.forEach(producto => {
            container.innerHTML += retornarCardHtml(producto)
        })
        activarClickEnBotones()
    }
}


const obtenerProductos = ()=> {
    fetch(URL)
    .then((response)=> response.json())
    .then((data) => producto.push(...data))
    .then(()=> cargarProductos(producto))
}

obtenerProductos()

const borrarCarrito = ()=> {
   return localStorage.clear('carritoFrutas')
}

