// ==========================================
// INTERFAZ DE USUARIO VISIBLE (Perfil Flotante)
// ==========================================
document.addEventListener("DOMContentLoaded", async () => {
    // 1. Inyectar estilos CSS del perfil flotante
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

    // 2. Inyectar el HTML del perfil flotante en el body
    const badgeHTML = document.createElement('div');
    badgeHTML.className = 'user-floating-badge';
    badgeHTML.innerHTML = `
        <img id="userAvatarMini" src="imagenes/default-avatar.png" alt="Avatar" class="user-avatar-mini">
        <span id="userNameMini" class="user-name-mini">Cargando...</span>
    `;
    document.body.prepend(badgeHTML);

    // 3. Consultar y rellenar los datos de Supabase si hay cliente activo
    if (typeof supabaseClient !== 'undefined' && supabaseClient) {
        const { data: { session } } = await supabaseClient.auth.getSession();
        if (session) {
            await obtenerDatosPerfil(session.user.id);
        }
    }
});

async function obtenerDatosPerfil(userId) {
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