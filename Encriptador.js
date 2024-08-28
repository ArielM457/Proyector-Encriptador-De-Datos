let textosEncriptados = [];

function encriptar() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const encriptado = btoa(inputText); 
    actualizarOutput(encriptado);
    guardarTexto(inputText, encriptado);
}

function desencriptar() {
    const inputText = document.getElementById('inputText').value;
    try {
        const desencriptado = atob(inputText);
        actualizarOutput(desencriptado);
        guardarTexto(inputText, desencriptado);
    } catch (error) {
        actualizarOutput("Texto inválido para desencriptar");
    }
}

function actualizarOutput(texto) {
    const outputText = document.getElementById('outputText');
    outputText.textContent = texto;
}

function guardarTexto(original, encriptado) {
    textosEncriptados.push({ original, encriptado });
}

function buscarTextoEncriptado(texto) {
    return textosEncriptados.find(item => item.original === texto || item.encriptado === texto);
}
