document.getElementById("registro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita la recarga de la página por defecto al enviar el formulario
    
    // Valores del formulario
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    // Crea un objeto JSON con los datos
    const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Solicitud HTTP POST
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Respuesta del servidor:", data);
    })
    .catch(error => {
        console.error("Error al enviar la solicitud:", error);
    });
});
