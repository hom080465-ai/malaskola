// plurales_motor.js - Motor central de plurales para Nominativ

function obtenerPluralCroata(palabra, genero) {
    let p = palabra.toLowerCase();

    // Excepción absoluta y supletoria de čovjek -> ljudi
    if (p === "čovjek") return "ljudi";

    if (genero && genero.includes("Femenino")) {
        if (p.endsWith("a")) return p.slice(0, -1) + "e";
    }
    if (genero && genero.includes("Neutro")) {
        if (p.endsWith("o") || p.endsWith("e")) return p.slice(0, -1) + "a";
    }

    if (genero && genero.includes("Masculino")) {
        if (p === "pas") return "psi";
        if (p === "dan") return "dani";
        if (p === "brat") return "braća";
        if (p === "zub") return "zubi";
        if (p === "gost") return "gosti";

        let ultimasLetrasSibilantes = ["ž", "č", "ć", "š", "đ", "j"];
        let terminaEnSibilante = ultimasLetrasSibilantes.some(l => p.endsWith(l)) || p.endsWith("lj") || p.endsWith("nj");

        if (p.length <= 5 && !p.endsWith("a") && !p.endsWith("e") && !p.endsWith("i") && !p.endsWith("o") && !p.endsWith("u")) {
            if (terminaEnSibilante) {
                return p + "evi";
            } else {
                return p + "ovi";
            }
        }
    }

    return p + "i";
}

function obtenerPluralAdjetivo(adjForma, genero) {
    let a = adjForma.toLowerCase();
    if (genero.includes("Femenino")) {
        return a.endsWith("a") ? a.slice(0, -1) + "e" : a + "e";
    } else if (genero.includes("Neutro")) {
        return a.endsWith("o") ? a.slice(0, -1) + "a" : a + "a";
    } else {
        return a + "i";
    }
}