// --- SISTEMA VISUAL Y GLOBAL DE TECLADO CROATA (D CON GUION) ---
let acentoActivoGlobal = null;
let ultimoInputEnfocado = null;

// Rastreamos permanentemente el campo de texto y la posición exacta del cursor
document.addEventListener('focusin', function(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        ultimoInputEnfocado = event.target;
    }
});

document.addEventListener('keyup', guardarPosicionCursor);
document.addEventListener('click', guardarPosicionCursor);

function guardarPosicionCursor() {
    const activo = document.activeElement;
    if (activo && (activo.tagName === 'INPUT' || activo.tagName === 'TEXTAREA')) {
        ultimoInputEnfocado = activo;
    }
}

// Función para activar/desactivar acentos sin perder el foco ni la posición
function activarAcentoCroata(tipo, elementoBtn, event) {
    if (event) {
        event.preventDefault();
    }

    const botones = document.querySelectorAll('.btn-acento-croata');

    if (acentoActivoGlobal === tipo) {
        acentoActivoGlobal = null; 
        if (elementoBtn) elementoBtn.classList.remove('activo');
    } else {
        acentoActivoGlobal = tipo;
        botones.forEach(b => b.classList.remove('activo'));
        if (elementoBtn) elementoBtn.classList.add('activo');
    }

    if (ultimoInputEnfocado) {
        ultimoInputEnfocado.focus();
    }
}

// Escuchador global de teclas para transformar letras
document.addEventListener('keydown', function(event) {
    if (!acentoActivoGlobal) return;

    const input = event.target;
    if (input.tagName !== 'INPUT' && input.tagName !== 'TEXTAREA') return;

    const tecla = event.key;
    const letraLower = tecla.toLowerCase();
    const esMayuscula = (tecla !== letraLower) || event.shiftKey;

    let letraModificada = null;

    // MAPEOS EXACTOS CROATAS
    if (acentoActivoGlobal === "caron") { // ˇ (Exclusivo para Č, Š, Ž)
        const mapaMin = { 'c': 'č', 's': 'š', 'z': 'ž' };
        const mapaMayus = { 'c': 'Č', 's': 'Š', 'z': 'Ž' };
        letraModificada = esMayuscula ? mapaMayus[letraLower] : mapaMin[letraLower];
    } 
    else if (acentoActivoGlobal === "acento") { // ´ (Para Ć y vocales acentuadas)
        const mapaMin = { 'c': 'ć', 'a': 'á', 'e': 'é', 'i': 'í', 'o': 'ó', 'u': 'ú' };
        const mapaMayus = { 'c': 'Ć', 'a': 'Á', 'e': 'É', 'i': 'Í', 'o': 'Ó', 'u': 'Ú' };
        letraModificada = esMayuscula ? mapaMayus[letraLower] : mapaMin[letraLower];
    } 
    else if (acentoActivoGlobal === "guion") { // - (Para vocales largas Ā, Ē, Ī, Ō, Ū Y la letra Đ / đ)
        if (letraLower === 'd') {
            letraModificada = esMayuscula ? 'Đ' : 'đ';
        } else {
            const mapaMin = { 'a': 'ā', 'e': 'ē', 'i': 'ī', 'o': 'ō', 'u': 'ū' };
            const mapaMayus = { 'a': 'Ā', 'e': 'Ē', 'i': 'Ī', 'o': 'Ō', 'u': 'Ū' };
            letraModificada = esMayuscula ? mapaMayus[letraLower] : mapaMin[letraLower];
        }
    }

    if (letraModificada) {
        event.preventDefault();

        const inicio = input.selectionStart;
        const fin = input.selectionEnd;
        const valorActual = input.value;

        input.value = valorActual.substring(0, inicio) + letraModificada + valorActual.substring(fin);
        input.selectionStart = input.selectionEnd = inicio + 1;
    }

    // Limpiamos el estado tras escribir
    acentoActivoGlobal = null;
    document.querySelectorAll('.btn-acento-croata').forEach(b => b.classList.remove('activo'));
});