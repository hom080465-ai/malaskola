// ==========================================
// CONFIGURACIÓN GLOBAL DE AUTENTICACIÓN
// ==========================================
const SUPABASE_URL = 'https://kghpywjrvvkcsrewifpc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_Qg9VqSnGcAC6cQLfrPUArQ_NaZpRiG7';

// Inicializar Supabase si está disponible el script CDN
let supabaseClient = null;
if (typeof supabase !== 'undefined') {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

// Inyectar automáticamente los estilos y el HTML del perfil flotante al cargar la página
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Agregar estilos CSS para el perfil flotante
    const estiloFlotante = document.createElement('style');
    estiloFlotante.innerHTML = `
        .user-floating-badge {
            position: fixed;
            top: 15px;
            left: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
            background: rgba(27, 38, 79, 0.85);
            padding: 5px 12px 5px 5px;
            border-radius: 30px;
            border: 2px solid #0051ba;
            backdrop-filter: blur(8px);
            box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            z-index: 9998;
        }
        .user-avatar-mini {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            object-fit: cover;
            border: 2px solid #ffffff;
            background: #cbd5e1;
        }
        .user-name-mini {
            color: #ffffff;
            font-size: 0.85rem;
            font-weight: bold;
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            padding-right: 5px;
        }
    `;
    document.head.appendChild(estiloFlotante);

    // 2. Crear y añadir el elemento HTML del perfil en el body
    const badgeHTML = document.createElement('div');
    badgeHTML.className = 'user-floating-badge';
    badgeHTML.innerHTML = `
        <img id="userAvatarMini" src="imagenes/default-avatar.png" alt="Avatar" class="user-avatar-mini">
        <span id="userNameMini" class="user-name-mini">Cargando...</span>
    `;
    document.body.prepend(badgeHTML);

    // 3. Validar sesión de Supabase (excepto si estamos en la página de login)
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
            return;
        }

        if (session) {
            await cargarDatosUsuarioLogueado(session.user.id);
        }
    }
});

// Función para obtener nombre y foto de la tabla 'perfiles'
async function cargarDatosUsuarioLogueado(userId) {
    try {
        const { data, error } = await supabaseClient
            .from('perfiles')
            .select('nombre, apellido, foto_url')
            .eq('id', userId)
            .single();

        if (data) {
            const nombreCompleto = `${data.nombre || ''} ${data.apellido || ''}`.trim();
            const elNombre = document.getElementById('userNameMini');
            if (elNombre) elNombre.innerText = nombreCompleto || "Usuario";
            
            if (data.foto_url) {
                const elAvatar = document.getElementById('userAvatarMini');
                if (elAvatar) elAvatar.src = data.foto_url;
            }
        } else {
            const elNombre = document.getElementById('userNameMini');
            if (elNombre) elNombre.innerText = "Administrador";
        }
    } catch (err) {
        console.error("Error al obtener el perfil:", err);
        const elNombre = document.getElementById('userNameMini');
        if (elNombre) elNombre.innerText = "Administrador";
    }
}