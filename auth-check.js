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

document.addEventListener("DOMContentLoaded", async () => {
    const rutaActual = window.location.pathname;

    // 1. Páginas donde el login es OPCIONAL (Libres para todos)
    const esPaginaLibre = rutaActual.includes('index.html') || 
                           rutaActual.endsWith('/') || 
                           rutaActual.includes('MS_Agenda.html') || 
                           rutaActual.includes('MS_Login.html');

    // 2. Si NO es una página libre, exigimos sesión obligatoria (ej: MS_index1.html)
    if (!esPaginaLibre && supabaseClient) {
        const hash = window.location.hash;
        const esTokenRecuperacion = hash && (hash.includes('type=recovery') || hash.includes('type=invite') || hash.includes('access_token'));

        const { data: { session }, error } = await supabaseClient.auth.getSession();

        if (!session && !esTokenRecuperacion) {
            let idiomaActual = (localStorage.getItem('idiomaApp') || 'hr-es').trim().toLowerCase();
            let msgAcceso = (idiomaActual === 'hr') ? 
                "Pristup odbijen. Morate se prijaviti." : 
                "Acceso denegado. Debe iniciar sesión para ingresar al sistema.";
            
            alert(msgAcceso);
            window.location.href = "MS_Login.html"; 
        }
    }
});
