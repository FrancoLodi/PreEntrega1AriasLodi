// Pre Entrega 1 - Arias Lodi - eCommerce - Coderhouse JavaScript

let nombre = 'anónimo'
let menuProductos = 0
let productoSeleccionado = 0
let indiceCarrito = 0
let subtotal = 0
let total = 0
let cantidad = 0
let mensaje = ''
let metodoDeEntrega = ''
let metodoDePago = ''
let metodoContacto = ''
let direccion = ''

const productos = [
    {id: 1, nombre: 'Zapatillas Adidas Superstar', precio: 85000},
    {id: 2, nombre: 'Zapatillas Nike Jordan', precio: 300000},
    {id: 3, nombre: 'Zapatillas Topper Lona', precio: 47000},
    {id: 4, nombre: 'Zapatillas New Balance', precio: 94000},
    {id: 5, nombre: 'Zapatillas Lecoq Sportif', precio: 70500},
]

let carrito = []

const bienvenida = () =>{
    let ingresarNombre = confirm('Bienvenido. ¿Desea ingresar su nombre?')
    if (ingresarNombre){
        nombre = prompt('Ingrese su nombre:')
    }
}

// Funcion Agregar producto a carrito
const agregarCarrito = () =>{
    carrito.push(productos[menuProductos - 1])
    console.table(carrito)
    alert('Producto agregado al carrito.')
    listaProductos()
}

// funcion agregar varios productos
const agregarVariosCarrito = () =>{
    for (let i=0; i<cantidad; i++){
        carrito.push(productos[menuProductos - 1])
        console.table(carrito)
    }
    alert(`${cantidad} productos agregados al carrito.`)
    listaProductos()
}

// funcion suma y reinicio subtotal
const sumaSubtotal = () =>{
    subtotal = 0
    for (const producto of carrito){
        subtotal = subtotal + producto.precio
    }
}

// funcion imprimir carrito
const listaCarrito = () =>{
    mensaje = ''
    i = 0
    for (producto of carrito){
        mensaje += `${i+1}) ${producto.nombre} - $${producto.precio}\n`
        i++
    }
}

// funcion confirmar y pagar - (nombre - contacto - entrega...)
const confirmarCompra = () =>{
    let confirmarPago = prompt(`DATOS DE COMPRA\n${mensaje}\nTOTAL: $${total}\n\nEntrega: ${metodoDeEntrega}     ${direccion}\nContacto: ${metodoContacto}\nPago: ${metodoDePago}\n \nSELECCIONE UNA OPCION:\n1) Confirmar y pagar\n2) Cancelar`)
    if (confirmarPago == 1){
        let finalizarCompra = confirm(`Desea confirmar y pagar $${total}`)
        if (finalizarCompra){
            alert('Gracias por su compra.')
        } else {
            confirmarCompra()
        }
    } else if (confirmarPago == 2){
        alert('Compra cancelada.\nVolviendo al carrito.')
        verCarrito()
    } else {
        alert('ERROR.\nPor favor seleccione una opción válida.')
        confirmarCompra()
    }
}

// funcion contacto carrito correo
const contactoCarrito = () =>{
    metodoContacto = prompt('Ingrese correo electrónico:')
}

// funcion datos de entrega 
const datosEntrega = () =>{
    direccion = ''
    let direccionPedido = prompt('Ingrese la dirección de entrega:')
    direccion += `Dirección: ${direccionPedido}`
}

// funcion metodo de entrega
const entregaCarrito = () =>{
    const opcionesEntrega = prompt('SELECCIONE UN METODO DE ENTREGA:\n \n1) Retiro del local (gratis)\n2) Envío a domicilio (+$5.000)\n3) Cancelar')
    if (opcionesEntrega == 1){
        metodoDeEntrega = 'Retiro del local.'
        total = 0
        total = total + subtotal
        contactoCarrito()
        pagoCarrito()
    } else if (opcionesEntrega == 2){
        metodoDeEntrega = 'Envío a domicilio ($5.000).'
        total = 0
        total = subtotal + 5000
        contactoCarrito()
        datosEntrega()
        pagoCarrito()
    } else if (opcionesEntrega == 3){
        verCarrito()
    }
}

// funcion pago carrito
const pagoCarrito = () =>{
    const opcionesPago = prompt('SELECCIONE UNA OPCION DE PAGO:\n \n1) Tarjeta de crédito\n2) Tarjeta de débito\n3) Pago en efectivo en Rapipago / Pago fácil\n4) Cancelar')
    if (opcionesPago == 1){
        metodoDePago = 'Tarjeta de crédito'
        confirmarCompra()
    } else if (opcionesPago == 2){
        metodoDePago = 'Tarjeta de débito'
        confirmarCompra()
    } else if (opcionesPago == 3){
        metodoDePago = 'Pago en efectivo en Rapipago / Pago fácil'
        confirmarCompra()
    } else if (opcionesPago == 4){
        verCarrito()
    } else {
        alert('ERROR.\nPor favor seleccione una opción válida.')
        verCarrito()
    }
}

// funcion modificar carrito
const modificarCarrito = () =>{
    listaCarrito()
    sumaSubtotal()
    const menuModificarCarrito = prompt(`Carrito de ${nombre}\n${mensaje}\nsubtotal :$${subtotal}\n \nSELECCIONE UNA OPCION:\n1) Agregar una unidad del mismo producto\n2) Eliminar del carrito\n3) Volver`)
    if (menuModificarCarrito == 1){
        const seleccionCarrito = prompt(`Carrito de ${nombre}\n${mensaje}\nsubtotal :$${subtotal}\n \nSELECCIONE PRODUCTO CON EL RESPECTIVO NÚMERO PARA AGREGAR OTRA UNIDAD\n \nV - Volver al carrito.`)
        if ((seleccionCarrito == 'V') || (seleccionCarrito == 'v')){
            modificarCarrito()
        } else if (seleccionCarrito<=carrito.length){
            // obtener el id
            let idCarritoAgregar = (carrito[seleccionCarrito-1])
            idCarritoAgregar = idCarritoAgregar.id
            for (const producto of productos){
                if (producto.id == idCarritoAgregar){
                    carrito.push(producto)
                    console.table(carrito)
                    alert('Producto agregado al carrito.')
                    verCarrito()
                }
            }
        } else {
            alert('ERROR.\nPor favor seleccione una opción válida.')
            modificarCarrito()
        }
    } else if (menuModificarCarrito == 2){
        const seleccionCarrito = prompt(`Carrito de ${nombre}\n${mensaje}\nsubtotal :$${subtotal}\n \nSELECCIONE PRODUCTO A ELIMINAR CON EL RESPECTIVO NÚMERO\n \nV - Volver al carrito.`)
        if ((seleccionCarrito == 'V') || (seleccionCarrito == 'v')){
            modificarCarrito()
        } else if (seleccionCarrito<=carrito.length){
            carrito.splice(seleccionCarrito-1, 1)
            console.table(carrito)
            alert('Producto eliminado del carrito.')
            verCarrito()
        } else {
            alert('ERROR.\nPor favor seleccione una opción válida.')
            modificarCarrito()
        }
    } else if (menuModificarCarrito == 3){
        verCarrito()
    } else {
        alert('ERROR.\nPor favor seleccione una opción válida.')
        modificarCarrito()
    }
}

// funcion ver Carrito
const verCarrito = () =>{
    listaCarrito()
    sumaSubtotal()
    console.table(carrito)
    const opcionesCarrito = prompt(`Carrito de ${nombre}\n${mensaje}\nsubtotal :$${subtotal}\n \nSELECCIONE UNA OPCION:\n1) Iniciar compra\n2) Modificar carrito\n3) Volver`)
    if (opcionesCarrito == 1){
        entregaCarrito()
    } else if (opcionesCarrito == 2){
        modificarCarrito()
    } else if (opcionesCarrito == 3){
        listaProductos()
    } else {
        alert('ERROR.\nPor favor seleccione una opción válida.')
        verCarrito()
    }
}

// funcion menu producto
const menuAgregarProducto = (menuProductoSeleccionado) =>{
    if (menuProductoSeleccionado == 1){
        const confirmacionCarrito = confirm ('¿Está seguro que desea agregar el producto al carrito?')
        if (confirmacionCarrito){
            agregarCarrito()
        } else {
            alert('No se agregó el producto al carrito.')
            opcionSeleccion()
        }
    } else if (menuProductoSeleccionado == 2){
        cantidad = prompt('¿Cuántos desea agregar al carrito?')
        const confirmacionCarrito = confirm (`¿Está seguro de que desea agregar ${cantidad} unidades al carrito?`)
        if (confirmacionCarrito){
            agregarVariosCarrito()
        } else {
            alert('No se agregaron los productos al carrito.')
            opcionSeleccion()
        }
    } else  if (menuProductoSeleccionado == 3){
        listaProductos()
    } else {
        alert('ERROR.\nPor favor seleccione una opción válida.')
        opcionSeleccion()
    }
}

// Menu Producto - Agregar a carrito
const opcionSeleccion = () =>{
    if (productoSeleccionado == 0){
        const menuProductoSeleccionado = prompt('Zapatillas Adidas Superstar - $85.000\n \nSELECCIONE UNA OPCION:\n1) Agregar una unidad al carrito\n2) Agregar varias unidades al carrito\n3) Volver')
        menuAgregarProducto(menuProductoSeleccionado)
    } else if (productoSeleccionado == 1){
        const menuProductoSeleccionado = prompt('Zapatillas Nike Jordan - $300.000\n \nSELECCIONE UNA OPCION:\n1) Agregar una unidad al carrito\n2) Agregar varias unidades al carrito\n3) Volver')
        menuAgregarProducto(menuProductoSeleccionado)
    } else if (productoSeleccionado == 2){
        const menuProductoSeleccionado = prompt('Zapatillas Topper Lona - $47.000\n \nSELECCIONE UNA OPCION:\n1) Agregar una unidad al carrito\n2) Agregar varias unidades al carrito\n3) Volver')
        menuAgregarProducto(menuProductoSeleccionado)
    } else if (productoSeleccionado == 3){
        const menuProductoSeleccionado = prompt('Zapatillas New Balance - $94.000\n \nSELECCIONE UNA OPCION:\n1) Agregar una unidad al carrito\n2) Agregar varias unidades al carrito\n3) Volver')
        menuAgregarProducto(menuProductoSeleccionado)
    } else if (productoSeleccionado == 4){
        const menuProductoSeleccionado = prompt('Zapatillas Lecoq Sportif - $70.500\n \nSELECCIONE UNA OPCION:\n1) Agregar una unidad al carrito\n2) Agregar varias unidades al carrito\n3) Volver')
        menuAgregarProducto(menuProductoSeleccionado)
    }
}

// mostrar productos en pantalla
const listaProductos = () =>{
    console.table(productos)
    menuProductos = prompt('LISTA DE PRODUCTOS:\n1) Zapatillas Adidas Superstar - $85.000\n2) Zapatillas Nike Jordan - $300.000\n3) Zapatillas Topper Lona - $47.000\n4) Zapatillas New Balance - $94.000\n5) Zapatilllas Lecoq Sportif - $70.500\n \nSELECCIONE UN PRODUCTO CON EL RESPECTIVO NÚMERO\nC - Ver Carrito\nS - Salir')
    console.log(menuProductos)
    if (menuProductos == 1){
        productoSeleccionado = 0
        opcionSeleccion()
    } else if (menuProductos == 2){
        productoSeleccionado = 1
        opcionSeleccion()
    } else if (menuProductos == 3){
        productoSeleccionado = 2
        opcionSeleccion()
    } else if (menuProductos == 4){
        productoSeleccionado = 3
        opcionSeleccion()
    } else if (menuProductos == 5){
        productoSeleccionado = 4
        opcionSeleccion()
    } else if ((menuProductos == 'C') || (menuProductos == 'c')){
        verCarrito()
    } else if ((menuProductos == 'S') || (menuProductos == 's')){
        const salir = confirm('¿Está seguro que desea salir?')
        if (salir){
            alert('Gracias. Vuelva pronto.')
        } else {
            listaProductos()
        }
    } else {
        alert('ERROR.\nPor favor seleccione una opción válida.')
        listaProductos()
    }
}

bienvenida()

listaProductos()