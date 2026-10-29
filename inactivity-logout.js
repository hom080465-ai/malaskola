// ==========================================
// CONTROL DE INACTIVIDAD Y CIERRE DE SESIÓN
// ==========================================

const TIEMPO_INACTIVIDAD_TOTAL = 10 * 60 * 1000; // 10 minutos en total
const AVISO_PREVIO = 60 * 1000; // Último minuto (60 segundos) para mostrar el modal
const TIEMPO_LIMITE_INACTIVIDAD = TIEMPO_INACTIVIDAD_TOTAL - AVISO_PREVIO; // 9 minutos

let temporizadorInactividad = null;
let temporizadorCronometro = null;
let audioCtxInactividad = null;
let modalInactividadCreado = false;

// Crear e inyectar el diseño del modal flotante estándar en el DOM
function asegurarModalInactividad() {
    if (document.getElementById('modalInactividadGlobal')) return;

    const overlay = document.createElement('div');
    overlay.id = 'modalInactividadGlobal';
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(4px);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 99999;
    `;

    overlay.innerHTML = `
        <div style="
            background: #ffffff;
            width: 100%;
            max-width: 420px;
            padding: 25px;
            border-radius: 16px;
            border: 3px solid #0051ba;
            box-shadow: 0 12px 30px rgba(0,0,0,0.4);
            text-align: center;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            box-sizing: border-box;
        ">
            <h3 style="color: #d90f13; font-size: 1.3rem; font-weight: bold; margin-top: 0; margin-bottom: 10px;">
                ⚠️ Neaktivnost / Inactividad
            </h3>
            <p id="textoModalInactividad" style="color: #1e293b; font-size: 0.95rem; margin-bottom: 20px; line-height: 1.4;">
                Vaša sesija će se uskoro zatvoriti zbog neaktivnosti.<br>
                Su sesión se cerrará por inactividad en:
            </p>
            <div id="contadorInactividadRegresiva" style="
                font-size: 2rem;
                font-weight: bold;
                color: #0051ba;
                background: #e0f2fe;
                padding: 10px;
                border-radius: 10px;
                border: 2px solid #bae6fd;
                margin-bottom: 20px;
                letter-spacing: 2px;
            ">
                01:00
            </div>
            <button onclick="reiniciarSesionPorActividadUsuario()" style="
                background: #0051ba;
                color: white;
                border: none;
                padding: 12px 20px;
                font-weight: bold;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1rem;
                width: 100%;
                box-shadow: 0 4px 10px rgba(0,81,186,0.3);
                transition: background 0.2s;
            ">
                Nastavi rad / Continuar trabajando
            </button>
        </div>
    `;

    document.body.appendChild(overlay);
}

// Emitir beep sintético mediante Web Audio API
function emitirBeepInactividad() {
    try {
        if (!audioCtxInactividad) {
            audioCtxInactividad = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (audioCtxInactividad.state === 'suspended') {
            audioCtxInactividad.resume();
        }

        const osc = audioCtxInactividad.createOscillator();
        const gain = audioCtxInactividad.createGain();

        osc.type = 'sine';
        osc.frequency.value = 850; // Frecuencia del tono

        gain.gain.setValueAtTime(0.3, audioCtxInactividad.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtxInactividad.currentTime + 0.15);

        osc.connect(gain);
        gain.connect(audioCtxInactividad.destination);

        osc.start();
        osc.stop(audioCtxInactividad.currentTime + 0.15);
    } catch (e) {
        console.log("Audio prevenido:", e);
    }
}

// Desconexión automática al terminar el tiempo
async function desconectarPorInactividad() {
    try {
        if (typeof supabaseClient !== 'undefined' && supabaseClient) {
            await supabaseClient.auth.signOut();
        }
    } catch (err) {
        console.error("Error al cerrar sesión:", err);
    }

    sessionStorage.removeItem("saludoMostrado");
    window.location.href = "MS_Login.html";
}

// Iniciar la cuenta regresiva de 1 minuto (60 segundos)
function iniciarCuentaRegresivaMinuto() {
    asegurarModalInactividad();
    const modal = document.getElementById('modalInactividadGlobal');
    const displayContador = document.getElementById('contadorInactividadRegresiva');
    
    modal.style.display = 'flex';
    
    let segundosRestantes = 60;

    displayContador.innerText = "01:00";

    clearInterval(temporizadorCronometro);
    temporizadorCronometro = setInterval(() => {
        segundosRestantes--;

        let mins = Math.floor(segundosRestantes / 60);
        let secs = segundosRestantes % 60;
        displayContador.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        // Si entramos en los últimos 10 segundos, emitir beep por segundo
        if (segundosRestantes <= 10 && segundosRestantes > 0) {
            emitirBeepInactividad();
            displayContador.style.color = "#d90f13"; // Cambiar a rojo de alerta
            displayContador.style.background = "#fee2e2";
            displayContador.style.borderColor = "#fca5a5";
        }

        if (segundosRestantes <= 0) {
            clearInterval(temporizadorCronometro);
            desconectarPorInactividad();
        }
    }, 1000);
}

// Si el usuario hace clic en "Continuar trabajando" o mueve el mouse dentro del modal
function reiniciarSesionPorActividadUsuario() {
    const modal = document.getElementById('modalInactividadGlobal');
    if (modal) {
        modal.style.display = 'none';
    }
    
    // Restablecer estilos visuales del contador por si acaso
    const displayContador = document.getElementById('contadorInactividadRegresiva');
    if (displayContador) {
        displayContador.style.color = "#0051ba";
        displayContador.style.background = "#e0f2fe";
        displayContador.style.borderColor = "#bae6fd";
    }

    clearInterval(temporizadorCronometro);
    reiniciarTemporizadorInactividad();
}

// Reiniciar el ciclo principal de inactividad
function reiniciarTemporizadorInactividad() {
    clearTimeout(temporizadorInactividad);
    clearInterval(temporizadorCronometro);

    // Ocultar modal si estuviera abierto
    const modal = document.getElementById('modalInactividadGlobal');
    if (modal) modal.style.display = 'none';

    // Programar la aparición del modal a los 9 minutos
    temporizadorInactividad = setTimeout(() => {
        iniciarCuentaRegresivaMinuto();
    }, TIEMPO_LIMITE_INACTIVIDAD);
}

// Escuchar eventos globales de actividad del usuario
const eventosActividadWeb = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'];

eventosActividadWeb.forEach(evento => {
    window.addEventListener(evento, () => {
        // Solo reiniciamos automáticamente si el modal de cuenta regresiva NO está activo
        // (para obligar al usuario a hacer clic en el botón si ya pasó el minuto de gracia)
        const modal = document.getElementById('modalInactividadGlobal');
        if (!modal || modal.style.display === 'none') {
            reiniciarTemporizadorInactividad();
        }
    }, { passive: true });
});

// Inicializar al cargar la página
window.addEventListener('DOMContentLoaded', () => {
    asegurarModalInactividad();
    reiniciarTemporizadorInactividad();
});