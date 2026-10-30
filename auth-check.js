// ==========================================
// CONTROL DE SESIÓN Y SEGURIDAD (Supabase)
// ==========================================
const SUPABASE_URL = 'https://pizswxittpzwwrymougc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_s9U9C-8dCR3NfP3s6MEuhA_ADfGUXu8';

let supabaseClient = null;
if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Función para ir al login guardando la página actual como origen de retorno
function iniciarSesionYVolver() {
    if (!window.location.pathname.includes('MS_Login.html')) {
        sessionStorage.setItem('urlOrigen', window.location.href);
    }
    window.location.href = 'MS_Login.html';
}

// Función auxiliar para inyectar y mostrar el modal croata personalizado de aviso
function mostrarModalAccesoDenegado(mensajeCroataEsp) {
    // Si ya existe el contenedor en la página, lo eliminamos para evitar duplicados
    let modalExistente = document.getElementById('modalCroataGlobalCustom');
    if (modalExistente) modalExistente.remove();

    let idiomaElegido = (localStorage.getItem('idiomaApp') || 'hr-es').trim().toLowerCase();
    let tituloModal = (idiomaElegido === 'hr') ? "Pristup odbijen" : "Pristup odbijen / Acceso denegado";
    let textoBoton = (idiomaElegido === 'hr') ? "U redu" : "U redu / Entendido";

    // Creamos el HTML del modal con la misma estructura y estilos del resto del sitio
    const modalHTML = `
        <div id="modalCroataGlobalCustom" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); display: flex; justify-content: center; align-items: center; z-index: 99999; animation: fadeIn 0.3s ease-in-out;">
            <div style="background: #ffffff; width: 90%; max-width: 400px; border-radius: 16px; border: 3px solid #0051ba; padding: 25px; box-shadow: 0 15px 35px rgba(0,0,0,0.4); text-align: center; box-sizing: border-box;">
                <h3 style="color: #0051ba; font-size: 1.3rem; font-weight: 800; margin-top: 0; margin-bottom: 10px;">${tituloModal}</h3>
                <p style="color: #475569; font-size: 0.95rem; margin-bottom: 20px;">${mensajeCroataEsp}</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button id="btnCerrarModalGlobal" style="background: #d90f13; color: white; border: none; padding: 8px 18px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: background 0.2s;">${textoBoton}</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    document.getElementById('btnCerrarModalGlobal').onclick = () => {
        document.getElementById('modalCroataGlobalCustom').remove();
        window.location.href = "MS_Login.html";
    };
}

document.addEventListener("DOMContentLoaded", async () => {
    const rutaActual = window.location.pathname;

    // 1. Páginas donde el login es OPCIONAL (Libres para todos)
    const esPaginaLibre = rutaActual.includes('index.html') || 
                           rutaActual.endsWith('/') || 
                           rutaActual.includes('MS_Agenda.html') || 
                           rutaActual.includes('MS_Login.html');

    // 2. Si NO es una página libre, exigimos sesión obligatoria
    if (!esPaginaLibre && supabaseClient) {
        const hash = window.location.hash;
        const esTokenRecuperacion = hash && (hash.includes('type=recovery') || hash.includes('type=invite') || hash.includes('access_token'));

        const { data: { session }, error } = await supabaseClient.auth.getSession();

        if (!session && !esTokenRecuperacion) {
            let idiomaActual = (localStorage.getItem('idiomaApp') || 'hr-es').trim().toLowerCase();
            let msgAcceso = (idiomaActual === 'hr') ? 
                "Morate se prijaviti za pristup ovom dijelu sustava." : 
                "Pristup odbijen. Morate se prijaviti za pristup sustavu. / Debes iniciar sesión para ingresar.";
            
            // Reemplazamos el alert feo de Windows por tu modal institucional croata
            mostrarModalAccesoDenegado(msgAcceso);
        }
    }
});
