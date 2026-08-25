// Mostrar u ocultar el formulario de reflexión
document.getElementById('reflexionBtn').addEventListener('click', function() {
    const form = document.getElementById('reflexionForm');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});

// Guardar y mostrar la reflexión del usuario
function guardarReflexion() {
    const texto = document.getElementById('reflexionText').value;
    const guardadoDiv = document.getElementById('reflexionGuardada');
    if (texto.trim() !== '') {
        guardadoDiv.innerHTML = `<h3>Tu reflexión:</h3><p>${texto}</p>`;
        document.getElementById('reflexionText').value = '';
        document.getElementById('reflexionForm').style.display = 'none';
    } else {
        alert('Por favor, escribe algo antes de enviar.');
    }
}
