// ==========================================
// CONTROL DE SESIÓN Y SEGURIDAD (Supabase)
// ==========================================
const SUPABASE_URL = 'https://kghpywjrvvkcsrewifpc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Qg9VqSnGcAC6cQLfrPUArQ_NaZpRiG7';

let supabaseClient = null;
if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

document.addEventListener("DOMContentLoaded", async () => {
    // Si no estamos en la página de login, validamos la sesión obligatoriamente
    if (!window.location.pathname.includes('MS_Login.html') && supabaseClient) {
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