// --- BASE DE DATOS DE NACIONALIDADES (Niveles Acumulativos) ---
const baseNacionalidades = {
    
    // NIVEL 1: Los principales / Fundacionales
    nivel1: [
        { pais: "Hrvatska", bandera: "Nacionalidades/Banderas/hrvatska.png", muski: "Hrvat", zenski: "Hrvatica", neutral: "Hrvatsko", iz: "iz Hrvatske", espanol: "Croacia" },
        { pais: "Argentina", bandera: "Nacionalidades/Banderas/argentina.png", muski: "Argentinac", zenski: "Argentinka", neutral: "Argentinsko", iz: "iz Argentine", espanol: "Argentina" }
    ],

    // NIVEL 2: Incluye Nivel 1 + Latinoamérica y Europa cercana
    nivel2: [
        { pais: "Hrvatska", bandera: "Nacionalidades/Banderas/hrvatska.png", muski: "Hrvat", zenski: "Hrvatica", neutral: "Hrvatsko", iz: "iz Hrvatske", espanol: "Croacia" },
        { pais: "Argentina", bandera: "Nacionalidades/Banderas/argentina.png", muski: "Argentinac", zenski: "Argentinka", neutral: "Argentinsko", iz: "iz Argentine", espanol: "Argentina" },
        { pais: "Španjolska", bandera: "Nacionalidades/Banderas/španjolska.png", muski: "Španjolac", zenski: "Španjolka", neutral: "Španjolsko", iz: "iz Španjolske", espanol: "España" },
        { pais: "Italija", bandera: "Nacionalidades/Banderas/italija.png", muski: "Talijan", zenski: "Talijanka", neutral: "Talijansko", iz: "iz Italije", espanol: "Italia" },
        { pais: "Francuska", bandera: "Nacionalidades/Banderas/francuska.png", muski: "Francuz", zenski: "Francuskinja", neutral: "Francusko", iz: "iz Francuske", espanol: "Francia" },
        { pais: "Njemačka", bandera: "Nacionalidades/Banderas/njemačka.png", muski: "Nijemac", zenski: "Njemica", neutral: "Njemačko", iz: "iz Njemačke", espanol: "Alemania" },
        { pais: "Urugvaj", bandera: "Nacionalidades/Banderas/urugvaj.png", muski: "Urugvajac", zenski: "Urugvajka", neutral: "Urugvajsko", iz: "iz Urugvaja", espanol: "Uruguay" },
        { pais: "Čile", bandera: "Nacionalidades/Banderas/čile.png", muski: "Čileanac", zenski: "Čileanka", neutral: "Čileansko", iz: "iz Čilea", espanol: "Chile" },
        { pais: "Brazil", bandera: "Nacionalidades/Banderas/brazil.png", muski: "Brazilac", zenski: "Brazilka", neutral: "Brazilsko", iz: "iz Brazila", espanol: "Brasil" },
        { pais: "Venezuela", bandera: "Nacionalidades/Banderas/venezuela.png", muski: "Venezuelac", zenski: "Venezuelka", neutral: "Venezuelansko", iz: "iz Venezuele", espanol: "Venezuela" },
        { pais: "Paragvaj", bandera: "Nacionalidades/Banderas/paragvaj.png", muski: "Paragvajac", zenski: "Paragvajka", neutral: "Paragvajsko", iz: "iz Paragvaja", espanol: "Paraguay" },
        { pais: "Bolivija", bandera: "Nacionalidades/Banderas/bolivija.png", muski: "Bolivijac", zenski: "Bolivijka", neutral: "Bolivijsko", iz: "iz Bolivije", espanol: "Bolivia" }
    ],

    // NIVEL 3: Incluye Nivel 2 + Europa del Oeste, China y Japón
    nivel3: [
        { pais: "Hrvatska", bandera: "Nacionalidades/Banderas/hrvatska.png", muski: "Hrvat", zenski: "Hrvatica", neutral: "Hrvatsko", iz: "iz Hrvatske", espanol: "Croacia" },
        { pais: "Argentina", bandera: "Nacionalidades/Banderas/argentina.png", muski: "Argentinac", zenski: "Argentinka", neutral: "Argentinsko", iz: "iz Argentine", espanol: "Argentina" },
        { pais: "Španjolska", bandera: "Nacionalidades/Banderas/španjolska.png", muski: "Španjolac", zenski: "Španjolka", neutral: "Španjolsko", iz: "iz Španjolske", espanol: "España" },
        { pais: "Italija", bandera: "Nacionalidades/Banderas/italija.png", muski: "Talijan", zenski: "Talijanka", neutral: "Talijansko", iz: "iz Italije", espanol: "Italia" },
        { pais: "Francuska", bandera: "Nacionalidades/Banderas/francuska.png", muski: "Francuz", zenski: "Francuskinja", neutral: "Francusko", iz: "iz Francuske", espanol: "Francia" },
        { pais: "Njemačka", bandera: "Nacionalidades/Banderas/njemačka.png", muski: "Nijemac", zenski: "Njemica", neutral: "Njemačko", iz: "iz Njemačke", espanol: "Alemania" },
        { pais: "Urugvaj", bandera: "Nacionalidades/Banderas/urugvaj.png", muski: "Urugvajac", zenski: "Urugvajka", neutral: "Urugvajsko", iz: "iz Urugvaja", espanol: "Uruguay" },
        { pais: "Čile", bandera: "Nacionalidades/Banderas/čile.png", muski: "Čileanac", zenski: "Čileanka", neutral: "Čileansko", iz: "iz Čilea", espanol: "Chile" },
        { pais: "Brazil", bandera: "Nacionalidades/Banderas/brazil.png", muski: "Brazilac", zenski: "Brazilka", neutral: "Brazilsko", iz: "iz Brazila", espanol: "Brasil" },
        { pais: "Venezuela", bandera: "Nacionalidades/Banderas/venezuela.png", muski: "Venezuelac", zenski: "Venezuelka", neutral: "Venezuelansko", iz: "iz Venezuele", espanol: "Venezuela" },
        { pais: "Paragvaj", bandera: "Nacionalidades/Banderas/paragvaj.png", muski: "Paragvajac", zenski: "Paragvajka", neutral: "Paragvajsko", iz: "iz Paragvaja", espanol: "Paraguay" },
        { pais: "Bolivija", bandera: "Nacionalidades/Banderas/bolivija.png", muski: "Bolivijac", zenski: "Bolivijka", neutral: "Bolivijsko", iz: "iz Bolivije", espanol: "Bolivia" },
        { pais: "Ujedinjeno Kraljevstvo", bandera: "Nacionalidades/Banderas/ujedinjeno_kraljevstvo.png", muski: "Britanac", zenski: "Britanka", neutral: "Britansko", iz: "iz Ujedinjenog Kraljevstva", espanol: "Reino Unido" },
        { pais: "Portugal", bandera: "Nacionalidades/Banderas/portugal.png", muski: "Portugalac", zenski: "Portugalka", neutral: "Portugalsko", iz: "iz Portugala", espanol: "Portugal" },
        { pais: "Austrija", bandera: "Nacionalidades/Banderas/austrija.png", muski: "Austrijanac", zenski: "Austrijanka", neutral: "Austrijsko", iz: "iz Austrije", espanol: "Austria" },
        { pais: "Sjedinjene Američke Države", bandera: "Nacionalidades/Banderas/sjedinjene_američke_države.png", muski: "Amerikanac", zenski: "Amerikanka", neutral: "Američko", iz: "iz Sjedinjenih Američkih Država", espanol: "Estados Unidos" },
        { pais: "Belgija", bandera: "Nacionalidades/Banderas/belgija.png", muski: "Belgijanac", zenski: "Belgijanka", neutral: "Belgijsko", iz: "iz Belgije", espanol: "Bélgica" },
        { pais: "Nizozemska", bandera: "Nacionalidades/Banderas/nizozemska.png", muski: "Nizozemac", zenski: "Nizozemka", neutral: "Nizozemsko", iz: "iz Nizozemske", espanol: "Países Bajos" },
        { pais: "Kina", bandera: "Nacionalidades/Banderas/kina.png", muski: "Kinez", zenski: "Kineskinja", neutral: "Kinesko", iz: "iz Kine", espanol: "China" },
        { pais: "Japan", bandera: "Nacionalidades/Banderas/japan.png", muski: "Japanac", zenski: "Japanka", neutral: "Japansko", iz: "iz Japana", espanol: "Japón" },
        { pais: "Kolumbija", bandera: "Nacionalidades/Banderas/Kolumbija.png", muski: "Kolumbijac", zenski: "Kolumbijka", neutral: "Kolumbijsko", iz: "iz Kolumbija", espanol: "Colombia" },
        { pais: "Ekvador", bandera: "Nacionalidades/Banderas/Ekvador.png", muski: "Ekvadorac", zenski: "Ekvadorka", neutral: "Ekvadorsko", iz: "iz Ekvadora", espanol: "Ecuador" },
        { pais: "Kuba", bandera: "Nacionalidades/Banderas/Kuba.png", muski: "Kubanac", zenski: "Kubanka", neutral: "Kubansko", iz: "iz Ekvadora", espanol: "Cuba" },
        { pais: "Peru", bandera: "Nacionalidades/Banderas/Peru.png", muski: "Peruanac", zenski: "Peruanka", neutral: "Peruansko", iz: "iz Perua", espanol: "Perú" }
    ],

    // NIVEL 4: El resto del mundo (completo)
    nivel4: [
        { pais: "Hrvatska", bandera: "Nacionalidades/Banderas/hrvatska.png", muski: "Hrvat", zenski: "Hrvatica", neutral: "Hrvatsko", iz: "iz Hrvatske", espanol: "Croacia" },
        { pais: "Argentina", bandera: "Nacionalidades/Banderas/argentina.png", muski: "Argentinac", zenski: "Argentinka", neutral: "Argentinsko", iz: "iz Argentine", espanol: "Argentina" },
        { pais: "Španjolska", bandera: "Nacionalidades/Banderas/španjolska.png", muski: "Španjolac", zenski: "Španjolka", neutral: "Španjolsko", iz: "iz Španjolske", espanol: "España" },
        { pais: "Italija", bandera: "Nacionalidades/Banderas/italija.png", muski: "Talijan", zenski: "Talijanka", neutral: "Talijansko", iz: "iz Italije", espanol: "Italia" },
        { pais: "Francuska", bandera: "Nacionalidades/Banderas/francuska.png", muski: "Francuz", zenski: "Francuskinja", neutral: "Francusko", iz: "iz Francuske", espanol: "Francia" },
        { pais: "Njemačka", bandera: "Nacionalidades/Banderas/njemačka.png", muski: "Nijemac", zenski: "Njemica", neutral: "Njemačko", iz: "iz Njemačke", espanol: "Alemania" },
        { pais: "Urugvaj", bandera: "Nacionalidades/Banderas/urugvaj.png", muski: "Urugvajac", zenski: "Urugvajka", neutral: "Urugvajsko", iz: "iz Urugvaja", espanol: "Uruguay" },
        { pais: "Čile", bandera: "Nacionalidades/Banderas/čile.png", muski: "Čileanac", zenski: "Čileanka", neutral: "Čileansko", iz: "iz Čilea", espanol: "Chile" },
        { pais: "Brazil", bandera: "Nacionalidades/Banderas/brazil.png", muski: "Brazilac", zenski: "Brazilka", neutral: "Brazilsko", iz: "iz Brazila", espanol: "Brasil" },
        { pais: "Venezuela", bandera: "Nacionalidades/Banderas/venezuela.png", muski: "Venezuelac", zenski: "Venezuelka", neutral: "Venezuelansko", iz: "iz Venezuele", espanol: "Venezuela" },
        { pais: "Paragvaj", bandera: "Nacionalidades/Banderas/paragvaj.png", muski: "Paragvajac", zenski: "Paragvajka", neutral: "Paragvajsko", iz: "iz Paragvaja", espanol: "Paraguay" },
        { pais: "Bolivija", bandera: "Nacionalidades/Banderas/bolivija.png", muski: "Bolivijac", zenski: "Bolivijka", neutral: "Bolivijsko", iz: "iz Bolivije", espanol: "Bolivia" },
        { pais: "Ujedinjeno Kraljevstvo", bandera: "Nacionalidades/Banderas/ujedinjeno_kraljevstvo.png", muski: "Britanac", zenski: "Britanka", neutral: "Britansko", iz: "iz Ujedinjenog Kraljevstva", espanol: "Reino Unido" },
        { pais: "Portugal", bandera: "Nacionalidades/Banderas/portugal.png", muski: "Portugalac", zenski: "Portugalka", neutral: "Portugalsko", iz: "iz Portugala", espanol: "Portugal" },
        { pais: "Austrija", bandera: "Nacionalidades/Banderas/austrija.png", muski: "Austrijanac", zenski: "Austrijanka", neutral: "Austrijsko", iz: "iz Austrije", espanol: "Austria" },
        { pais: "Sjedinjene Američke Države", bandera: "Nacionalidades/Banderas/sjedinjene_američke_države.png", muski: "Amerikanac", zenski: "Amerikanka", neutral: "Američko", iz: "iz Sjedinjenih Američkih Država", espanol: "Estados Unidos" },
        { pais: "Nizozemska", bandera: "Nacionalidades/Banderas/nizozemska.png", muski: "Nizozemac", zenski: "Nizozemka", neutral: "Nizozemsko", iz: "iz Nizozemske", espanol: "Países Bajos" },
        { pais: "Kina", bandera: "Nacionalidades/Banderas/kina.png", muski: "Kinez", zenski: "Kineskinja", neutral: "Kinesko", iz: "iz Kine", espanol: "China" },
        { pais: "Japan", bandera: "Nacionalidades/Banderas/japan.png", muski: "Japanac", zenski: "Japanka", neutral: "Japansko", iz: "iz Japana", espanol: "Japón" },
        { pais: "Kolumbija", bandera: "Nacionalidades/Banderas/Kolumbija.png", muski: "Kolumbijac", zenski: "Kolumbijka", neutral: "Kolumbijsko", iz: "iz Kolumbija", espanol: "Colombia" },
        { pais: "Ekvador", bandera: "Nacionalidades/Banderas/Ekvador.png", muski: "Ekvadorac", zenski: "Ekvadorka", neutral: "Ekvadorsko", iz: "iz Ekvadora", espanol: "Ecuador" },
        { pais: "Kuba", bandera: "Nacionalidades/Banderas/Kuba.png", muski: "Kubanac", zenski: "Kubanka", neutral: "Kubansko", iz: "iz Ekvadora", espanol: "Cuba" },
        { pais: "Peru", bandera: "Nacionalidades/Banderas/Peru.png", muski: "Peruanac", zenski: "Peruanka", neutral: "Peruansko", iz: "iz Perua", espanol: "Perú" },  
        { pais: "Švicarska", bandera: "Nacionalidades/Banderas/švicarska.png", muski: "Švicarac", zenski: "Švicarkinja", neutral: "Švicarsko", iz: "iz Švicarske", espanol: "Suiza" },
        { pais: "Kanada", bandera: "Nacionalidades/Banderas/kanada.png", muski: "Kanađanin", zenski: "Kanađanka", neutral: "Kanadsko", iz: "iz Kanade", espanol: "Canadá" },
        { pais: "Australija", bandera: "Nacionalidades/Banderas/australija.png", muski: "Australac", zenski: "Australka", neutral: "Australijsko", iz: "iz Australije", espanol: "Australia" },
        { pais: "Rusija", bandera: "Nacionalidades/Banderas/rusija.png", muski: "Rus", zenski: "Ruskinja", neutral: "Rusko", iz: "iz Rusije", espanol: "Rusia" },
        { pais: "Srbija", bandera: "Nacionalidades/Banderas/srbija.png", muski: "Srbin", zenski: "Srpkinja", neutral: "Srpsko", iz: "iz Srbije", espanol: "Serbia" },
        { pais: "Bosna i Hercegovina", bandera: "Nacionalidades/Banderas/bosna_i_hercegovina.png", muski: "Bošnjak / Bosanac", zenski: "Bošnjakinja / Bosanka", neutral: "Bosanskohercegovačko", iz: "iz Bosne i Hercegovine", espanol: "Bosnia y Herzegovina" },
        { pais: "Slovenija", bandera: "Nacionalidades/Banderas/slovenija.png", muski: "Slovenac", zenski: "Slovenka", neutral: "Slovensko", iz: "iz Slovenije", espanol: "Eslovenia" },
        { pais: "Crna Gora", bandera: "Nacionalidades/Banderas/crna_gora.png", muski: "Crnogorac", zenski: "Crnogorka", neutral: "crnogorsko", iz: "iz Crne Gore", espanol: "Montenegro" },
        { pais: "Ukrajina", bandera: "Nacionalidades/Banderas/Ukrajina.png", muski: "Ukrajinac", zenski: "Ukrajinka", neutral: "Ukrajinsko", iz: "iz Ukrajine", espanol: "Ucrania" },
        { pais: "Indija", bandera: "Nacionalidades/Banderas/indija.png", muski: "Indijac", zenski: "Indijka", neutral: "Indijsko", iz: "iz Indije", espanol: "India" },
        { pais: "Panama", bandera: "Nacionalidades/Banderas/panama.png", muski: "Panamac", zenski: "Panamka", neutral: "Panamsko", iz: "iz Paname", espanol: "Panamá" },
        { pais: "Meksiko", bandera: "Nacionalidades/Banderas/meksiko.png", muski: "Meksikanac", zenski: "Meksikanka", neutral: "Meksičko", iz: "iz Meksika", espanol: "Mexico" }
    ]
};