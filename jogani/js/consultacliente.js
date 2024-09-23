document.addEventListener('DOMContentLoaded', function() {
    // Obtener los clientes del localStorage
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    // Función para mostrar los clientes en la tabla
    function mostrarClientes(clientes) {
        const tbody = document.querySelector('#tablaClientes tbody');
        tbody.innerHTML = ''; // Limpiar la tabla antes de mostrar los datos
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.nombreApellido}</td>
                <td>${cliente.documento}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.direccion}</td>
                <td>${cliente.localidad}</td>
                <td>
                    <button onclick="modificarCliente(this)">Modificar</button>
                    <button onclick="eliminarCliente(this)">Eliminar</button>
                </td>
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
                    cliente.localidad.toLowerCase().includes(input);
        });
        mostrarClientes(resultados);
    };
});
