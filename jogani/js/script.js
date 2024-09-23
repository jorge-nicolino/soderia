document.addEventListener('DOMContentLoaded', function() {
    console.log('El documento está completamente cargado y analizado');

    // Añadir funcionalidad para mostrar el submenu
    const menuClientes = document.getElementById('menuClientes');
    const submenuClientes = document.getElementById('submenuClientes');

    menuClientes.addEventListener('click', function(event) {
        event.preventDefault();
        submenuClientes.classList.toggle('mostrar');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de datos de clientes
    const clientes = [
        { nombreApellido: 'Juan Pérez', direccion: 'Calle Falsa 123', telefono: '123456789', email: 'juan.perez@example.com' },
        { nombreApellido: 'María López', direccion: 'Av. Siempre Viva 456', telefono: '987654321', email: 'maria.lopez@example.com' },
        // Agrega más clientes aquí
    ];

    // Función para mostrar los clientes en la tabla
    function mostrarClientes(clientes) {
        const tbody = document.querySelector('#tablaClientes tbody');
        tbody.innerHTML = '';
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.nombreApellido}</td>
                <td>${cliente.direccion}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.email}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Mostrar todos los clientes al cargar la página
    mostrarClientes(clientes);

    // Función para buscar clientes
    window.buscarCliente = function() {
        const input = document.getElementById('buscarCliente').value.toLowerCase();
        const resultados = clientes.filter(cliente => {
            return cliente.nombreApellido.toLowerCase().includes(input) ||
                    cliente.direccion.toLowerCase().includes(input) ||
                    cliente.telefono.toLowerCase().includes(input) ||
                    cliente.email.toLowerCase().includes(input);
        });
        mostrarClientes(resultados);
    };
});

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de datos de clientes
    const clientes = [
        { id: 1, nombreApellido: 'Juan Pérez' },
        { id: 2, nombreApellido: 'María López' },
        // Agrega más clientes aquí
    ];

    // Ejemplo de datos de pedidos
    const pedidos = [];

    // Función para cargar clientes en el select
    function cargarClientes() {
        const selectCliente = document.getElementById('cliente');
        selectCliente.innerHTML = '';
        clientes.forEach(cliente => {
            const option = document.createElement('option');
            option.value = cliente.id;
            option.textContent = cliente.nombreApellido;
            selectCliente.appendChild(option);
        });
    }

    // Función para mostrar los pedidos en la tabla
    function mostrarPedidos() {
        const tbody = document.querySelector('#tablaPedidos tbody');
        tbody.innerHTML = '';
        pedidos.forEach(pedido => {
            const row = document.createElement('tr');
            const cliente = clientes.find(cliente => cliente.id === pedido.clienteId);
            row.innerHTML = `
                <td>${cliente.nombreApellido}</td>
                <td>${pedido.producto}</td>
                <td>${pedido.cantidad}</td>
                <td>${pedido.precio}</td>
                <td>${pedido.total}</td>
            `;
            tbody.appendChild(row);
        });
    }

    // Función para agregar un nuevo pedido
    function agregarPedido(event) {
        event.preventDefault();
        const clienteId = parseInt(document.getElementById('cliente').value);
        const producto = document.getElementById('producto').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const precio = parseFloat(document.getElementById('precio').value);
        const total = cantidad * precio;

        const nuevoPedido = { clienteId, producto, cantidad, precio, total };
        pedidos.push(nuevoPedido);

        mostrarPedidos();
        document.getElementById('formNuevoPedido').reset();
    }

    // Inicializar el formulario de pedidos
    cargarClientes();
    mostrarPedidos();

    // Agregar evento de submit al formulario de pedidos
    document.getElementById('formNuevoPedido').addEventListener('submit', agregarPedido);
});

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de datos de clientes
    const clientes = [
        { nombreApellido: 'Juan Pérez', direccion: 'Calle Falsa 123' },
        { nombreApellido: 'María López', direccion: 'Av. Siempre Viva 456' },
        // Agrega más clientes aquí
    ];

    // Función para calcular el recorrido óptimo
    window.calcularRecorrido = function() {
        const ruta = calcularRutaOptima(clientes);
        mostrarRuta(ruta);
    };

    // Función para calcular la ruta óptima
    function calcularRutaOptima(clientes) {
        // Simplemente ordenamos los clientes por dirección para este ejemplo
        return clientes.sort((a, b) => a.direccion.localeCompare(b.direccion));
    }

    // Función para mostrar la ruta en la interfaz
    function mostrarRuta(ruta) {
        const rutaElement = document.getElementById('ruta');
        rutaElement.innerHTML = '<h3>Orden de visitas:</h3>';
        const lista = document.createElement('ul');
        ruta.forEach(cliente => {
            const item = document.createElement('li');
            item.textContent = cliente.nombreApellido + ' - ' + cliente.direccion;
            lista.appendChild(item);
        });
        rutaElement.appendChild(lista);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Ejemplo de datos de clientes
    const clientes = [
        { id: 1, nombreApellido: 'Juan Pérez' },
        { id: 2, nombreApellido: 'María López' },
        // Agrega más clientes aquí
    ];

    const pedidos = [];
    let productosPedido = [];

    // Función para cargar clientes en el select
    function cargarClientes() {
        const selectCliente = document.getElementById('cliente');
        selectCliente.innerHTML = '';
        clientes.forEach(cliente => {
            const option = document.createElement('option');
            option.value = cliente.id;
            option.textContent = cliente.nombreApellido;
            selectCliente.appendChild(option);
        });
    }

    // Función para mostrar los productos en la tabla
    function mostrarProductos() {
        const tbody = document.querySelector('#tablaProductos tbody');
        tbody.innerHTML = '';
        productosPedido.forEach((producto, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${producto.producto}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
                <td>${producto.total}</td>
                <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
            `;
            tbody.appendChild(row);
        });
    }

    // Función para agregar un producto al pedido
    window.agregarProducto = function() {
        const producto = document.getElementById('producto').value;
        const cantidad = parseInt(document.getElementById('cantidad').value);
        const precio = parseFloat(document.getElementById('precio').value);
        const total = cantidad * precio;

        const nuevoProducto = { producto, cantidad, precio, total };
        productosPedido.push(nuevoProducto);

        mostrarProductos();
        document.getElementById('formNuevoPedido').reset();
    };

    // Función para eliminar un producto del pedido
    window.eliminarProducto = function(index) {
        productosPedido.splice(index, 1);
        mostrarProductos();
    };

    // Función para guardar el pedido
    window.guardarPedido = function() {
        const clienteId = parseInt(document.getElementById('cliente').value);
        const pedido = { clienteId, productos: productosPedido };

        pedidos.push(pedido);
        productosPedido = [];
        mostrarProductos();
        console.log(pedidos); // Aquí puedes guardar el pedido en tu backend o base de datos
        alert('Pedido guardado exitosamente');
    };

    // Inicializar el formulario de pedidos
    cargarClientes();
});

function modificarCliente(button) {
    let row = button.parentNode.parentNode;
    let cells = row.getElementsByTagName('td');
    
    // Ejemplo: Permitir la edición de las celdas
    for (let i = 0; i < cells.length - 1; i++) {
        cells[i].setAttribute('contenteditable', 'true');
    }
    
    button.innerText = "Guardar";
    button.onclick = function() { guardarModificaciones(row); };
}

function guardarModificaciones(row) {
    let cells = row.getElementsByTagName('td');
    
    // Ejemplo: Deshabilitar la edición de las celdas
    for (let i = 0; i < cells.length - 1; i++) {
        cells[i].setAttribute('contenteditable', 'false');
    }
    
    alert("Modificaciones guardadas exitosamente.");
}

document.addEventListener('DOMContentLoaded', function() {
    const clientes = [
        { nombreApellido: 'Juan Pérez', direccion: 'Calle Falsa 123, La Playosa, Córdoba' },
        { nombreApellido: 'María López', direccion: 'Av. Siempre Viva 456, La Playosa, Córdoba' },
        // Agrega más clientes aquí
    ];

    // Inicializar el mapa centrado en La Playosa, Córdoba
    const map = L.map('map').setView([-32.0988, -63.0321], 13);

    // Cargar el mapa de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Geocodificar las direcciones de los clientes usando Nominatim
    function geocodeAddress(address, callback) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const { lat, lon } = data[0];
                    callback([lat, lon]);
                } else {
                    console.error('No se pudo geocodificar la dirección:', address);
                }
            });
    }

    // Función para calcular y mostrar la ruta óptima
    function calcularRecorrido(clientes) {
        let ruta = [];
        clientes.forEach(cliente => {
            geocodeAddress(cliente.direccion, (coords) => {
                const marker = L.marker(coords).addTo(map).bindPopup(`${cliente.nombreApellido} - ${cliente.direccion}`).openPopup();
                ruta.push(marker.getLatLng());
                if (ruta.length === clientes.length) {
                    mostrarRuta(ruta);
                }
            });
        });
    }

    // Mostrar la ruta en el mapa
    function mostrarRuta(ruta) {
        const polyline = L.polyline(ruta, { color: 'blue' }).addTo(map);
        map.fitBounds(polyline.getBounds());

        // Mostrar la ruta en la interfaz
        const rutaElement = document.getElementById('ruta');
        rutaElement.innerHTML = '<h3>Orden de visitas:</h3>';
        const lista = document.createElement('ul');
        ruta.forEach((coords, index) => {
            const cliente = clientes[index];
            const item = document.createElement('li');
            item.textContent = `${cliente.nombreApellido} - ${cliente.direccion}`;
            lista.appendChild(item);
        });
        rutaElement.appendChild(lista);
    }

    // Calcular y mostrar el recorrido al cargar la página
    calcularRecorrido(clientes);
});

document.addEventListener('DOMContentLoaded', function() {
    // Obtener los clientes del localStorage
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Función para calcular el recorrido óptimo
    window.calcularRecorrido = function() {
        const ruta = calcularRutaOptima(clientes);
        mostrarRuta(ruta);
    };

    // Función para calcular la ruta óptima
    function calcularRutaOptima(clientes) {
        // Simplemente ordenamos los clientes por dirección para este ejemplo
        return clientes.sort((a, b) => a.direccion.localeCompare(b.direccion));
    }

    // Función para mostrar la ruta en la interfaz
    function mostrarRuta(ruta) {
        const rutaElement = document.getElementById('ruta');
        rutaElement.innerHTML = '<h3>Orden de visitas:</h3>';
        const lista = document.createElement('ul');
        ruta.forEach(cliente => {
            const item = document.createElement('li');
            item.textContent = cliente.nombreApellido + ' - ' + cliente.direccion + ', ' + cliente.localidad;
            lista.appendChild(item);
        });
        rutaElement.appendChild(lista);
    }

    // Llama a la función de cálculo al cargar la página
    calcularRecorrido();
});
