
// recuperar el carrito del almacenamiento local

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];



// Función para guardar el carrito en el almacenamiento local
const guardarCarrito = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}




// Muestra los productos en el carrito

const mostrarCarrito = ()=> {
    const lista = document.getElementById("lista-carrito")
    lista.innerHTML = "";  // Limpiar la lista antes de mostrarla

    if(carrito.length===0){
        lista.innerHTML = '<p id="tuCarritoVacio">Tu carrito está vacio</p>';
        return;
    } else {
        carrito.forEach((item,indice)=>{
            const producto = document.createElement("article")
            producto.classList.add("producto")
            producto.innerHTML=`
            <h2>${item.nombre}</h2>
            <p class="precio">$${item.precio}</p>
            <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>`;
            lista.appendChild(producto)
        });
    }
        // Actualizar el contador de productos
        actualizarContador();
}

// Actualiza el contador de productos en el carrito
const actualizarContador = () => {
    const contador = document.getElementById("contador-carrito"); // Asume que tienes un elemento con id "contador-carrito"
    if (contador) {
        contador.textContent = carrito.length; // Muestra la cantidad de productos en el carrito
    }
}







// Función para desactivar o activar el botón de finalizar compra
const actualizarBotonCompra = () => {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const botonCompra = document.getElementById("finalizarCompra"); // Asegúrate de que el ID del botón es correcto

    if (carrito.length === 0) {
        botonCompra.disabled = true; // Desactiva el botón si el carrito está vacío
    } else {
        botonCompra.disabled = false; // Activa el botón si el carrito tiene productos
    }
}








//Elimina un producto del carrito
const eliminarDelCarrito=(indice)=>{
    carrito.splice(indice,1); // Elimina el producto del carrito
    guardarCarrito();  // Guarda el carrito actualizado en localStorage
    mostrarCarrito();
    actualizarContador();
    actualizarBotonCompra();
}

// Simule la compra

const realizarCompra =()=>{
    alert("compra realizada con exito")
    localStorage.removeItem("carrito")
    window.location.href="../index.html"
}

// inicializar el carrito al carga la pagina
/* mostrarCarrito() */


// Inicializar el carrito al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();
    actualizarBotonCompra();
    mostrarCarrito();  // Muestra los productos almacenados en el carrito
});