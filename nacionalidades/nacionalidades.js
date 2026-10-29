// --- BASE DE DATOS DE NACIONALIDADES (Niveles Acumulativos) ---
const baseNacionalidades = {
    
    // NIVEL 1: Los principales / Fundacionales
    nivel1: [
        { pais: "Hrvatska", bandera: "nacionalidades/banderas/hrvatska.png", muski: "Hrvat", zenski: "Hrvatica", neutral: "Hrvatsko", iz: "iz Hrvatske", espanol: "Croacia" },
        { pais: "Argentina", bandera: "nacionalidades/banderas/argentina.png", muski: "Argentinac", zenski: "Argentinka", neutral: "Argentinsko", iz: "iz Argentine", espanol: "Argentina" }
    ],

    // NIVEL 2: Incluye Nivel 1 + Latinoamérica y Europa cercana
    nivel2: [
        { pais: "Hrvatska", bandera: "nacionalidades/banderas/hrvatska.png", muski: "Hrvat", zenski: "Hrvatica", neutral: "Hrvatsko", iz: "iz Hrvatske", espanol: "Croacia" },
        { pais: "Argentina", bandera: "nacionalidades/banderas/argentina.png", muski: "Argentinac", zenski: "Argentinka", neutral: "Argentinsko", iz: "iz Argentine", espanol: "Argentina" },
        { pais: "Španjolska", bandera: "nacionalidades/banderas/španjolska.png", muski: "Španjolac", zenski: "Španjolka", neutral: "Španjolsko", iz: "iz Španjolske", espanol: "España" },
        { pais: "Italija", bandera: "nacionalidades/banderas/italija.png", muski: "Talijan", zenski: "Talijanka", neutral: "Talijansko", iz: "iz Italije", espanol: "Italia" },
        { pais: "Francuska", bandera: "nacionalidades/banderas/francuska.png", muski: "Francuz", zenski: "Francuskinja", neutral: "Francusko", iz: "iz Francuske", espanol: "Francia" },
        { pais: "Njemačka", bandera: "nacionalidades/banderas/njemačka.png", muski: "Nijemac", zenski: "Njemica", neutral: "Njemačko", iz: "iz Njemačke", espanol: "Alemania" },
        { pais: "Urugvaj", bandera: "nacionalidades/banderas/urugvaj.png", muski: "Urugvajac", zenski: "Urugvajka", neutral: "Urugvajsko", iz: "iz Urugvaja", espanol: "Uruguay" },
        { pais: "Čile", bandera: "nacionalidades/banderas/čile.png", muski: "Čileanac", zenski: "Čileanka", neutral: "Čileansko", iz: "iz Čilea", espanol: "Chile" },
        { pais: "Brazil", bandera: "nacionalidades/banderas/brazil.png", muski: "Brazilac", zenski: "Brazilka", neutral: "Brazilsko", iz: "iz Brazila", espanol: "Brasil" },
        { pais: "Venezuela", bandera: "nacionalidades/banderas/venezuela.png", muski: "Venezuelac", zenski: "Venezuelka", neutral: "Venezuelansko", iz: "iz Venezuele", espanol: "Venezuela" },
        { pais: "Paragvaj", bandera: "nacionalidades/banderas/paragvaj.png", muski: "Paragvajac", zenski: "Paragvajka", neutral: "Paragvajsko", iz: "iz Paragvaja", espanol: "Paraguay" },
        { pais: "Bolivija", bandera: "nacionalidades/banderas/bolivija.png", muski: "Bolivijac", zenski: "Bolivijka", neutral: "Bolivijsko", iz: "iz Bolivije", espanol: "Bolivia" }
    ],

    // NIVEL 3: Incluye Nivel 2 + Europa del Oeste, China y Japón
    nivel3: [
        { pais: "Hrvatska", bandera: "nacionalidades/banderas/hrvatska.png", muski: "Hrvat", zenski: "Hrvatica", neutral: "Hrvatsko", iz: "iz Hrvatske", espanol: "Croacia" },
        { pais: "Argentina", bandera: "nacionalidades/banderas/argentina.png", muski: "Argentinac", zenski: "Argentinka", neutral: "Argentinsko", iz: "iz Argentine", espanol: "Argentina" },
        { pais: "Španjolska", bandera: "nacionalidades/banderas/španjolska.png", muski: "Španjolac", zenski: "Španjolka", neutral: "Španjolsko", iz: "iz Španjolske", espanol: "España" },
        { pais: "Italija", bandera: "nacionalidades/banderas/italija.png", muski: "Talijan", zenski: "Talijanka", neutral: "Talijansko", iz: "iz Italije", espanol: "Italia" },
        { pais: "Francuska", bandera: "nacionalidades/banderas/francuska.png", muski: "Francuz", zenski: "Francuskinja", neutral: "Francusko", iz: "iz Francuske", espanol: "Francia" },
        { pais: "Njemačka", bandera: "nacionalidades/banderas/njemačka.png", muski: "Nijemac", zenski: "Njemica", neutral: "Njemačko", iz: "iz Njemačke", espanol: "Alemania" },
        { pais: "Urugvaj", bandera: "nacionalidades/banderas/urugvaj.png", muski: "Urugvajac", zenski: "Urugvajka", neutral: "Urugvajsko", iz: "iz Urugvaja", espanol: "Uruguay" },
        { pais: "Čile", bandera: "nacionalidades/banderas/čile.png", muski: "Čileanac", zenski: "Čileanka", neutral: "Čileansko", iz: "iz Čilea", espanol: "Chile" },
        { pais: "Brazil", bandera: "nacionalidades/banderas/brazil.png", muski: "Brazilac", zenski: "Brazilka", neutral: "Brazilsko", iz: "iz Brazila", espanol: "Brasil" },
        { pais: "Venezuela", bandera: "nacionalidades/banderas/venezuela.png", muski: "Venezuelac", zenski: "Venezuelka", neutral: "Venezuelansko", iz: "iz Venezuele", espanol: "Venezuela" },
        { pais: "Paragvaj", bandera: "nacionalidades/banderas/paragvaj.png", muski: "Paragvajac", zenski: "Paragvajka", neutral: "Paragvajsko", iz: "iz Paragvaja", espanol: "Paraguay" },
        { pais: "Bolivija", bandera: "nacionalidades/banderas/bolivija.png", muski: "Bolivijac", zenski: "Bolivijka", neutral: "Bolivijsko", iz: "iz Bolivije", espanol: "Bolivia" },
        { pais: "Ujedinjeno Kraljevstvo", bandera: "nacionalidades/banderas/ujedinjeno_kraljevstvo.png", muski: "Britanac", zenski: "Britanka", neutral: "Britansko", iz: "iz Ujedinjenog Kraljevstva", espanol: "Reino Unido" },
        { pais: "Portugal", bandera: "nacionalidades/banderas/portugal.png", muski: "Portugalac", zenski: "Portugalka", neutral: "Portugalsko", iz: "iz Portugala", espanol: "Portugal" },
        { pais: "Austrija", bandera: "nacionalidades/banderas/austrija.png", muski: "Austrijanac", zenski: "Austrijanka", neutral: "Austrijsko", iz: "iz Austrije", espanol: "Austria" },
        { pais: "Sjedinjene Američke Države", bandera: "nacionalidades/banderas/sjedinjene_američke_države.png", muski: "Amerikanac", zenski: "Amerikanka", neutral: "Američko", iz: "iz Sjedinjenih Američkih Država", espanol: "Estados Unidos" },
        { pais: "Belgija", bandera: "nacionalidades/banderas/belgija.png", muski: "Belgijanac", zenski: "Belgijanka", neutral: "Belgijsko", iz: "iz Belgije", espanol: "Bélgica" },
        { pais: "Nizozemska", bandera: "nacionalidades/banderas/nizozemska.png", muski: "Nizozemac", zenski: "Nizozemka", neutral: "Nizozemsko", iz: "iz Nizozemske", espanol: "Países Bajos" },
        { pais: "Kina", bandera: "nacionalidades/banderas/kina.png", muski: "Kinez", zenski: "Kineskinja", neutral: "Kinesko", iz: "iz Kine", espanol: "China" },
        { pais: "Japan", bandera: "nacionalidades/banderas/japan.png", muski: "Japanac", zenski: "Japanka", neutral: "Japansko", iz: "iz Japana", espanol: "Japón" },
        { pais: "Kolumbija", bandera: "nacionalidades/banderas/kolumbija.png", muski: "Kolumbijac", zenski: "Kolumbijka", neutral: "Kolumbijsko", iz: "iz Kolumbija", espanol: "Colombia" },
        { pais: "Ekvador", bandera: "nacionalidades/banderas/ekvador.png", muski: "Ekvadorac", zenski: "Ekvadorka", neutral: "Ekvadorsko", iz: "iz Ekvadora", espanol: "Ecuador" },
        { pais: "Kuba", bandera: "nacionalidades/banderas/kuba.png", muski: "Kubanac", zenski: "Kubanka", neutral: "Kubansko", iz: "iz Ekvadora", espanol: "Cuba" },
        { pais: "Peru", bandera: "nacionalidades/banderas/peru.png", muski: "Peruanac", zenski: "Peruanka", neutral: "Peruansko", iz: "iz Perua", espanol: "Perú" }
    ],

    // NIVEL 4: El resto del mundo (completo)
    nivel4: [
        { pais: "Hrvatska", bandera: "nacionalidades/banderas/hrvatska.png", muski: "Hrvat", zenski: "Hrvatica", neutral: "Hrvatsko", iz: "iz Hrvatske", espanol: "Croacia" },
        { pais: "Argentina", bandera: "nacionalidades/banderas/argentina.png", muski: "Argentinac", zenski: "Argentinka", neutral: "Argentinsko", iz: "iz Argentine", espanol: "Argentina" },
        { pais: "Španjolska", bandera: "nacionalidades/banderas/španjolska.png", muski: "Španjolac", zenski: "Španjolka", neutral: "Španjolsko", iz: "iz Španjolske", espanol: "España" },
        { pais: "Italija", bandera: "nacionalidades/banderas/italija.png", muski: "Talijan", zenski: "Talijanka", neutral: "Talijansko", iz: "iz Italije", espanol: "Italia" },
        { pais: "Francuska", bandera: "nacionalidades/banderas/francuska.png", muski: "Francuz", zenski: "Francuskinja", neutral: "Francusko", iz: "iz Francuske", espanol: "Francia" },
        { pais: "Njemačka", bandera: "nacionalidades/banderas/njemačka.png", muski: "Nijemac", zenski: "Njemica", neutral: "Njemačko", iz: "iz Njemačke", espanol: "Alemania" },
        { pais: "Urugvaj", bandera: "nacionalidades/banderas/urugvaj.png", muski: "Urugvajac", zenski: "Urugvajka", neutral: "Urugvajsko", iz: "iz Urugvaja", espanol: "Uruguay" },
        { pais: "Čile", bandera: "nacionalidades/banderas/čile.png", muski: "Čileanac", zenski: "Čileanka", neutral: "Čileansko", iz: "iz Čilea", espanol: "Chile" },
        { pais: "Brazil", bandera: "nacionalidades/banderas/brazil.png", muski: "Brazilac", zenski: "Brazilka", neutral: "Brazilsko", iz: "iz Brazila", espanol: "Brasil" },
        { pais: "Venezuela", bandera: "nacionalidades/banderas/venezuela.png", muski: "Venezuelac", zenski: "Venezuelka", neutral: "Venezuelansko", iz: "iz Venezuele", espanol: "Venezuela" },
        { pais: "Paragvaj", bandera: "nacionalidades/banderas/paragvaj.png", muski: "Paragvajac", zenski: "Paragvajka", neutral: "Paragvajsko", iz: "iz Paragvaja", espanol: "Paraguay" },
        { pais: "Bolivija", bandera: "nacionalidades/banderas/bolivija.png", muski: "Bolivijac", zenski: "Bolivijka", neutral: "Bolivijsko", iz: "iz Bolivije", espanol: "Bolivia" },
        { pais: "Ujedinjeno Kraljevstvo", bandera: "nacionalidades/banderas/ujedinjeno_kraljevstvo.png", muski: "Britanac", zenski: "Britanka", neutral: "Britansko", iz: "iz Ujedinjenog Kraljevstva", espanol: "Reino Unido" },
        { pais: "Portugal", bandera: "nacionalidades/banderas/portugal.png", muski: "Portugalac", zenski: "Portugalka", neutral: "Portugalsko", iz: "iz Portugala", espanol: "Portugal" },
        { pais: "Austrija", bandera: "nacionalidades/banderas/austrija.png", muski: "Austrijanac", zenski: "Austrijanka", neutral: "Austrijsko", iz: "iz Austrije", espanol: "Austria" },
        { pais: "Sjedinjene Američke Države", bandera: "nacionalidades/banderas/sjedinjene_američke_države.png", muski: "Amerikanac", zenski: "Amerikanka", neutral: "Američko", iz: "iz Sjedinjenih Američkih Država", espanol: "Estados Unidos" },
        { pais: "Nizozemska", bandera: "nacionalidades/banderas/nizozemska.png", muski: "Nizozemac", zenski: "Nizozemka", neutral: "Nizozemsko", iz: "iz Nizozemske", espanol: "Países Bajos" },
        { pais: "Kina", bandera: "nacionalidades/banderas/kina.png", muski: "Kinez", zenski: "Kineskinja", neutral: "Kinesko", iz: "iz Kine", espanol: "China" },
        { pais: "Japan", bandera: "nacionalidades/banderas/japan.png", muski: "Japanac", zenski: "Japanka", neutral: "Japansko", iz: "iz Japana", espanol: "Japón" },
        { pais: "Kolumbija", bandera: "nacionalidades/banderas/kolumbija.png", muski: "Kolumbijac", zenski: "Kolumbijka", neutral: "Kolumbijsko", iz: "iz Kolumbija", espanol: "Colombia" },
        { pais: "Ekvador", bandera: "nacionalidades/Banderas/ekvador.png", muski: "Ekvadorac", zenski: "Ekvadorka", neutral: "Ekvadorsko", iz: "iz Ekvadora", espanol: "Ecuador" },
        { pais: "Kuba", bandera: "nacionalidades/banderas/kuba.png", muski: "Kubanac", zenski: "Kubanka", neutral: "Kubansko", iz: "iz Ekvadora", espanol: "Cuba" },
        { pais: "Peru", bandera: "nacionalidades/banderas/peru.png", muski: "Peruanac", zenski: "Peruanka", neutral: "Peruansko", iz: "iz Perua", espanol: "Perú" },  
        { pais: "Švicarska", bandera: "nacionalidades/banderas/švicarska.png", muski: "Švicarac", zenski: "Švicarkinja", neutral: "Švicarsko", iz: "iz Švicarske", espanol: "Suiza" },
        { pais: "Kanada", bandera: "nacionalidades/banderas/kanada.png", muski: "Kanađanin", zenski: "Kanađanka", neutral: "Kanadsko", iz: "iz Kanade", espanol: "Canadá" },
        { pais: "Australija", bandera: "nacionalidades/banderas/australija.png", muski: "Australac", zenski: "Australka", neutral: "Australijsko", iz: "iz Australije", espanol: "Australia" },
        { pais: "Rusija", bandera: "nacionalidades/banderas/rusija.png", muski: "Rus", zenski: "Ruskinja", neutral: "Rusko", iz: "iz Rusije", espanol: "Rusia" },
        { pais: "Srbija", bandera: "nacionalidades/banderas/srbija.png", muski: "Srbin", zenski: "Srpkinja", neutral: "Srpsko", iz: "iz Srbije", espanol: "Serbia" },
        { pais: "Bosna i Hercegovina", bandera: "nacionalidades/banderas/bosna_i_hercegovina.png", muski: "Bošnjak / Bosanac", zenski: "Bošnjakinja / Bosanka", neutral: "Bosanskohercegovačko", iz: "iz Bosne i Hercegovine", espanol: "Bosnia y Herzegovina" },
        { pais: "Slovenija", bandera: "nacionalidades/banderas/slovenija.png", muski: "Slovenac", zenski: "Slovenka", neutral: "Slovensko", iz: "iz Slovenije", espanol: "Eslovenia" },
        { pais: "Crna Gora", bandera: "nacionalidades/banderas/crna_gora.png", muski: "Crnogorac", zenski: "Crnogorka", neutral: "crnogorsko", iz: "iz Crne Gore", espanol: "Montenegro" },
        { pais: "Ukrajina", bandera: "nacionalidades/banderas/ukrajina.png", muski: "Ukrajinac", zenski: "Ukrajinka", neutral: "Ukrajinsko", iz: "iz Ukrajine", espanol: "Ucrania" },
        { pais: "Indija", bandera: "nacionalidades/banderas/indija.png", muski: "Indijac", zenski: "Indijka", neutral: "Indijsko", iz: "iz Indije", espanol: "India" },
        { pais: "Panama", bandera: "nacionalidades/banderas/panama.png", muski: "Panamac", zenski: "Panamka", neutral: "Panamsko", iz: "iz Paname", espanol: "Panamá" },
        { pais: "Meksiko", bandera: "nacionalidades/banderas/meksiko.png", muski: "Meksikanac", zenski: "Meksikanka", neutral: "Meksičko", iz: "iz Meksika", espanol: "Mexico" }
    ]
};
