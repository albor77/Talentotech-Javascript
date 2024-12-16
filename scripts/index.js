
// variable global para almacenar los productos seleccionados
/* let carrito = []; */  /* con esto se me estava vaciando cada vez que entraba a productos  */
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// Agregar un producto al carrito
const agregarAlcarrito = (nombre,precio) =>{
    //agregar el producto como un objeto al carrito
    carrito.push({nombre,precio})

    // actualizar el contador visual del carrito
    actualizarContador()

    // Guarda el carrito actualizado
    localStorage.setItem("carrito", JSON.stringify(carrito)); 

    // muestra un alerta de confirmacion
    alert(`Agregaste : ${nombre} al carrito`)
}


// funcion para actualizar el contador del carrito
const actualizarContador = ()=>{
    //cambiamos el contenido del HTML con el ID contador-carrito
    document.getElementById("contador-carrito").textContent = carrito.length
}



// Inicializar al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    actualizarContador(); // Actualiza el contador con los datos guardados
});


// Guarda el contenido del carrito en el almacenamiento local antes de cerrar la pagina
window.addEventListener("beforeunload",()=>{
localStorage.setItem("carrito",JSON.stringify(carrito))
});



