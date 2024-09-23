document.addEventListener('DOMContentLoaded', function() {
    const formNuevoCliente = document.getElementById('formNuevoCliente');

    formNuevoCliente.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const nombreApellido = document.getElementById('nombreApellido').value;
        const documento = document.getElementById('documento').value;
        const direccion = document.getElementById('direccion').value;
        const localidad = document.getElementById('localidad').value;
        const telefono = document.getElementById('telefono').value;

        // Crear un nuevo objeto de cliente
        const nuevoCliente = { nombreApellido, documento, direccion, localidad, telefono };

        // Obtener los clientes guardados en el localStorage o iniciar con un array vacío
        let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

        // Agregar el nuevo cliente al array
        clientes.push(nuevoCliente);

        // Guardar el array actualizado en el localStorage
        localStorage.setItem('clientes', JSON.stringify(clientes));

        // Reiniciar el formulario
        formNuevoCliente.reset();

        alert('Cliente guardado exitosamente');
    });
});
