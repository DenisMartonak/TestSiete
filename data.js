const quizData = [
    {
        "question": "Aby zařízení  pracující  ve WLAN  obdrželo  nálepku  Wi-Fi musí:",
        "options": [
            "pouze  splňovat  požadavky  na vzájemnou  kompatibilitu",
            "vyhovovat  standardům  (IEEE  802.11)  a splňovat",
            "požadavky  na vzájemnou  kompatibilitu",
            "pouze  vyhovovat  standardům  (IEEE  802.11)"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Adresa  0.0.0.0.  je adresa  typu:",
        "options": [
            "adresa  za proxyserverem  (za NATem)",
            "omezený  broadcast",
            "řízený  broadcast",
            "loopback",
            "host ještě  nezná  svoji  adresu",
            "adresa  počítače",
            "adresa  subsítě",
            "adresa  sítě"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Adresa  127.255.255.254  je adresa  typu:",
        "options": [
            "adresa  za proxyserverem  (za NATem)",
            "omezený  broadcast",
            "řízený  broadcast",
            "loopback",
            "host ještě nezná  svoji  adresu",
            "adresa  počítače",
            "adresa  subsítě",
            "adresa  sítě"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Adresa  196.265.148.63/26  je adresa  typu:",
        "options": [
            "žádná  z uvedených",
            "broadcast",
            "adresa  počítače",
            "adresa  subsítě"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Adresa  210.25.148.63/25  je adresa  typu:",
        "options": [
            "adresa  počítače",
            "broadcast",
            "žádná  z uvedených",
            "adresa  subsítě"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Adresa  210.25.148.63/26  je adresa  typu:",
        "options": [
            "žádná  z uvedených",
            "broadcast",
            "adresa  počítače",
            "adresa  subsítě"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Adresa  210.25.148.64/26  je adresa  typu:",
        "options": [
            "žádná  z uvedených",
            "broadcast",
            "adresa  počítače",
            "adresa  subsítě"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Adresa  protokolu  NetBIOS  se skládá:",
        "options": [
            "jen z adresy  sítě",
            "z adresy  sítě a adresy  stanice",
            "jen z adresy  stanice"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Adresa  v třídě B 147.228.0.0/16  je adresa  typu:",
        "options": [
            "adresa  za proxyserverem  (za NATem)",
            "omezený  broadcast",
            "řízený  broadcast",
            "loopback",
            "host ještě nezná  svoji  adresu",
            "adresa  počítače",
            "adresa  subsítě",
            "adresa  sítě"
        ],
        "correctIndices": [
            7
        ]
    },
    {
        "question": "Adresa  v třídě C 192.168.16.131  je adresa  typu:",
        "options": [
            "adresa  za proxyserverem  (za NATem)",
            "omezený  broadcast",
            "řízený  broadcast",
            "loopback",
            "host ještě nezná  svoji  adresu",
            "adresa  počítače",
            "adresa  subsítě",
            "adresa  sítě"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Adresa  v třídě C 200.228.131.0/26  je adresa  typu:",
        "options": [
            "adresa  za proxyserverem  (za NATem)",
            "omezený  broadcast",
            "řízený  broadcast",
            "loopback",
            "host ještě nezná  svoji  adresu",
            "adresa  počítače",
            "adresa  subsítě",
            "adresa  sítě"
        ],
        "correctIndices": [
            6
        ]
    },
    {
        "question": "Adresa  v třídě C 255.255.255.255  je adresa  typu:",
        "options": [
            "adresa  za proxyserverem  (za NATem)",
            "omezený  broadcast",
            "řízený  broadcast",
            "loopback",
            "host ještě nezná  svoji  adresu",
            "adresa  počítače",
            "adresa  subsítě",
            "adresa  sítě"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Aktivní  retranslaci  u WLAN  můžeme  uskutečnit:",
        "options": [
            "AP - režim  s jedním  centrálním  prvkem",
            "odrazem  signálu",
            "AP - režim  se dvěma  aktivními  prvky",
            "přesměrováním  signálu"
        ],
        "correctIndices": [
            0,
            2
        ]
    },
    {
        "question": "Aplikační  vrstva  modelu  OSI:",
        "options": [
            "poskytuje  síťovým  aplikacím  přístup  ke komunikačnímu",
            "síťovému  systému",
            "zajišťuje  převod  znakových  kódů  a datových  struktur",
            "ověřuje  přístupová  práva,  eviduje  provoz  na síti",
            "obsahuje  části  síťové  aplikace  vyžadující  standardizaci"
        ],
        "correctIndices": [
            0,
            4
        ]
    },
    {
        "question": "Transportní  vrstva  modelu  OSI:",
        "options": [
            "vytváří  transportní  spoje,  které  zajišťují",
            "potvrzovanou  výměnu  mezi  dvěma  koncovým  body",
            "rozkládá  zprávy  na segmenty  nebo  datagramy  a naopak",
            "ověřuje  přístupová  práva,  eviduje  provoz  na síti",
            "vytváří  relace  (časový  úsek,  v němž  probíhá  aktivita",
            "uživatele),  běžně  1 relace  = 1 transportní  spoj"
        ],
        "correctIndices": [
            0,
            2
        ]
    },
    {
        "question": "Relační  vrstva  modelu  OSI:",
        "options": [
            "vytváří  transportní  spoje,  které  zajišťují  potvrzovanou",
            "výměnu  mezi  dvěma  koncovým  body",
            "rozkládá  zprávy  na segmenty  nebo  datagramy  a naopak",
            "ověřuje  přístupová  práva,  eviduje  provoz  na síti",
            "zabývá  se povolením  přístupu  uživatele  k",
            "aplikačním  programům"
        ],
        "correctIndices": [
            3,
            4
        ]
    },
    {
        "question": "Prezentační  vrstva  modelu  OSI:",
        "options": [
            "poskytuje  síťovým  aplikacím  přístup  ke komunikačnímu",
            "síťovému  systému",
            "zajišťuje  převod  znakových  kódů  a datových  struktur",
            "ověřuje  přístupová  práva,  eviduje  provoz  na síti",
            "transformuje  data  do tvaru,  které  používají  síťové",
            "aplikace,  např.  video  a obrázky"
        ],
        "correctIndices": [
            2,
            4
        ]
    },
    {
        "question": "Síťová  vrstva  modelu  OSI:",
        "options": [
            "pracuje  s MAC  adresami  - fyzickými  adresami",
            "poskytuje  spojení  mezi  dvěma  koncovými  uzly v rámci  jedné",
            "LAN",
            "se stará  o směrování  v síti a síťové  adresování",
            "pracuje  s datagramovou  službou  nebo  virtuálními  spoji",
            "řeší výběr  nejvhodnější  cesty"
        ],
        "correctIndices": [
            3,
            4,
            5
        ]
    },
    {
        "question": "Linková  vrstva  modelu  OSI:",
        "options": [
            "pracuje  s adresami  konkrétního  síťového  protokolu  -",
            "logick ými adresami",
            "poskytuje  spojení  mezi  koncovými  uzly,  nacházejícími  se v",
            "různých  LAN  (mezi  nimi je router)",
            "pracuje  s MAC  adresami  - fyzickými  adresami",
            "poskytuje  spojení  mezi  dvěma  koncovými  uzly v",
            "rámci  jedné  LAN"
        ],
        "correctIndices": [
            4,
            5
        ]
    },
    {
        "question": "Fyzická  vrstva  modelu  OSI:",
        "options": [
            "poskytuje  síťovým  aplikacím  přístup  ke komunikačnímu",
            "síťovému  systému",
            "ověřuje  přístupová  práva,  eviduje  provoz  na síti",
            "přenáší  zakódovanou  nebo  modulovanou  posloupnost",
            "bitů mezi  dvěma  přímými  sousedy  komunikačním  médiem",
            "v LAN  s 1. vrstvou  OSI",
            "definuje  přenosové  médium,  konektory  a úrovně  signálů"
        ],
        "correctIndices": [
            3,
            6
        ]
    },
    {
        "question": "Baseband  je přenos  signálu  v:",
        "options": [
            "základním  pásmu",
            "přeloženém  pásmu"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Bez retranslace  signálu  se může  signál  pomocí jednovidových  FO přenášet  až na vzdálenosti  přes:",
        "options": [
            "100 Km",
            "1 Km",
            "10 Km",
            "1000  Km"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Bezdrátová  komunikace  může  probíhat  ve dvou frekvenčních  pásmech,  bezlicenčním  a licencovaném.  Mezi bezlicenční pásma  patří:",
        "options": [
            "5 Ghz",
            "28 Ghz",
            "2,4 Ghz",
            "10 Ghz",
            "26 Ghz",
            "3,5 Ghz"
        ],
        "correctIndices": [
            0,
            2,
            3
        ]
    },
    {
        "question": "Bezdrátová  komunikace  může  probíhat  ve dvou frekvenčních  pásmech,  bezlicenčním  a licencovaném.  Mezi licencované  pásma  patří:",
        "options": [
            "5 Ghz",
            "28 Ghz",
            "2,4 Ghz",
            "10 Ghz",
            "26 Ghz",
            "3,5 Ghz"
        ],
        "correctIndices": [
            1,
            4,
            5
        ]
    },
    {
        "question": "Bezdrátová  síť je obecně  označena  jako:",
        "options": [
            "Wi-Fi",
            "VLAN",
            "WLAN"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Broadband  je přenos  signálu:",
        "options": [
            "přeloženém  pásmu",
            "základním  pásmu"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Celosvětová  síť se nazývá:",
        "options": [
            "extranet",
            "internet",
            "intranet",
            "Internet"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Co  je datagram  (na 3.vrstvě  modelu  OSI)?",
        "options": [
            "servisní  paket",
            "je paket,  který  není schopen  se samostatně  pohybovat  po sítí",
            "je paket,  který  je schopen  se samostatně  pohybovat  po",
            "síti"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Co je to broadcastová  MAC  doména?",
        "options": [
            "část sítě, v které  se šíří signál  vyslaný  síťovým  rozhraním",
            "část sítě, v které  se šíří rámec  s MAC  adresou",
            "255.255.255.2 55",
            "část sítě, v které  se šíří rámec  s MAC",
            "adresou  FF.FF .FF.FF .FF.FF"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Co je to EMI?",
        "options": [
            "vyzařování  elektromagnetického  rušení",
            "odolnost  proti  vnitřnímu  elektromagnetickému  rušení",
            "odolnost  proti  vnějšímu  elektromagnetickému  rušení"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Co je to EMS?",
        "options": [
            "odolnost  proti  vnitřnímu  elektromagnetickému  rušení",
            "vyzařování  elektromagnetického  rušení",
            "odolnost  proti  vnějšímu  elektromagnetickému  rušení"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Co je to numerická  apertura  u FO?",
        "options": [
            "míra schopnosti  vlákna  pohlcovat  světlo",
            "míra  schopnosti  vlákna  shromažďovat  světlo",
            "míra schopnosti  vlákna  rozptylovat  světlo"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Co je to skin efekt  u vodičů?",
        "options": [
            "Se zvyšující  frekvencí  střídavého  proudu,  proud  se přesouvá",
            "do středu  vodiče",
            "Při jakékoliv  frekvenci  střídavého  proudu  stále teče",
            "rovnoměrně  v celém  průřezu  vodiče",
            "Se zvyšující  frekvencí  střídavého  proudu,  proud  se",
            "přesouvá  k povrchu  vodiče"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Co udělá  stanice  používající  metodu  CSMA/CA,  která  má data k odvysílání,  když  zjistí,  že na komunikačním  kanále vysílá  jíná stanice:",
        "options": [
            "odmlčí  se na náhodnou  dobu  a pak testuje,  je-li komunikační",
            "kanál  volný",
            "počká  až vysílající  stanice  dovysílá  a po mezirámcové",
            "mezeře  zahájí  vysílání",
            "počká  až vysílající  stanice  dovyíslá  a bezprostředně  poté",
            "zahájí  vysílání",
            "bez ohledu  na stav na komunikačním  kanále  zahájí",
            "bezprostředně vysílání"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Co udělá  stanice  používající  metodu  CSMA/CD,  která  má data k odvysílání,  když  zjistí,  že na komunikačním  kanále vysílá  jíná stanice:",
        "options": [
            "odmlčí  se na náhodnou  dobu  a pak testuje,  je-li komunikační",
            "kanál  volný",
            "počká  až vysílající  stanice  dovysílá  a po mezirámcové",
            "mezeře  zahájí  vysílání",
            "počká  až vysílající  stanice  dovyíslá  a bezprostředně  poté",
            "zahájí  vysílání",
            "bez ohledu  na stav na komunikačním  kanále  zahájí",
            "bezprostředně vysílání"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Co udělá  stanice  používající  metodu  CSMA/CD,  která  má data k odvysílání,  když  zjistí,  že na komunikačním  kanále vysílá  jiná stanice?",
        "options": [
            "počká  až vysílající  stanice  dovysílá  a po",
            "mezirámcové  mezeře  zahájí  vysílání",
            "odmlčí  se na náhodnou  dobu  a pak testuje,  je-li komunikační",
            "kanál  volný",
            "bez ohledu  na stav na komunikačním  kanále  zahájí",
            "bezprostředně vysílání",
            "počká  až vysílající  stanice  dovysílá  a bezprostředně  poté",
            "zahájí  vysílání"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Coax  vykazuje  dobré  přenosové  parametry  do frekvence přibližně:",
        "options": [
            "10 Ghz",
            "1 Ghz",
            "100 Mhz",
            "10 Mhz"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Časový  multiplex  (TDMA)",
        "options": [
            "rozděluje  sdílenou  kapacitu  na posloupnost  časových",
            "úseků,  z nichž  každý  je plně přidělen  jedné  stanici",
            "rozdělí  celkovou  kmitočtovou  šíři kanálu  do několika",
            "subkanálů přidělených jednotliv ým stanicím",
            "přenosový  kanál  přiděluje  všem  stanicím  najednou"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Datagram  je:",
        "options": [
            "balík  dat o stanovené  pevné  délce",
            "balík  dat (mail,  soubor),  který  přenášíme  po síti",
            "rámec,  ke kterému  jsou připojeny  další  informace  (MAC",
            "adresy,  CRC)"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Distribuované  přidělování :",
        "options": [
            "je bezkonfliktním  přidělováním  komunikačního  kanálu",
            "využívá  centrální  řídící  stanici  (není  jí myšlena  stanice",
            "Monito r)",
            "přiděluje  časové  úseky  pro vysílání"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "DIX předložil  standard  Ethernetu  podskupině  IEEE  802.?:",
        "options": [
            "2",
            "1",
            "4",
            "3"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "DNS  resolver  zajišťuje :",
        "options": [
            "dotazy  k DNS  serverům",
            "dotazy  k dalším  DNS  resolverům",
            "řešení  dotazů  od jiných  resolverů"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "DNS  server  obsahuje :",
        "options": [
            "DNS  server  i DNS  resolver",
            "jen DNS  server",
            "jen DNS  resolver"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "DNS  server  zajišťuje :",
        "options": [
            "řešení  dotazů  od resolverů",
            "dotazy  k dalším  DNS  resolverům",
            "návrat  vyřešeného  dotazu  k dotazujícímu  se resolveru"
        ],
        "correctIndices": [
            0,
            2
        ]
    },
    {
        "question": "DNS  systém  se skládá  z těchto  základních  částí:",
        "options": [
            "z DNS  cache  paměti",
            "z DNS  resolverů",
            "z DNS  serverů"
        ],
        "correctIndices": [
            0,
            1,
            2
        ]
    },
    {
        "question": "Do kolika  subpásem  je rozděleno  pásmo  5Ghz  (číslo  bez znamé nka)?",
        "options": [
            "13",
            "5",
            "3"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Do kolika  vzájemně  nepřekrývajících  se kanálů  je rozděleno subpásmo  5,470  - 5,725GHz  (číslo  bez znaménka)?",
        "options": [
            "4",
            "11",
            "7"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Do kolika  kanálů  je rozděleno  pásmo  2.4 GHz  v ČR (číslo bez znaménka)?",
        "options": [
            "13",
            "11",
            "4"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Doba  nutná  k odvysílání  1b u 100Mb/s  Ethernetu  je:",
        "options": [
            "1 ns",
            "0,1 ns",
            "100 ns",
            "10 ns"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Doba  nutná  k odvysílání  1b u 10Gb/s  Ethernetu  je:",
        "options": [
            "1 ns",
            "0,1 ns",
            "100 ns",
            "10 ns"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Doba  nutná  k odvysílání  1b u 1Gb/s  Ethernetu  je:",
        "options": [
            "1 ns",
            "0,1 ns",
            "100 ns",
            "10 ns"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Doba  nutná  k odvysílání  nejkratšího  rámce  musí  být:",
        "options": [
            "delší  než je doba  nutná  k přenosu  signálu  k",
            "nejvzdálenější  stanici  a zpět",
            "delší  než je doba  nutná  k přenosu  signálu  k nejvzdálenější",
            "stanici",
            "kratší  než je doba  nutná  k přenosu  signálu  k nejvzdálenější",
            "stanici  a zpět",
            "kratší  než je doba  nutná  k přenosu  signálu  k nejvzdálenější",
            "stanici"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Doména  cz v Internetu  je doménou:",
        "options": [
            "nejvyšší  úrovně",
            "nejnižší  úrovně",
            "první  úrovně",
            "poslední  úrovně"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Dynamické  a soukromé  porty  jsou v rozsahu:",
        "options": [
            "0 až 1023",
            "49152  až 65535",
            "1024  až 49151"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "FO se skokovou  změnou  indexu  lomu  mají lepší  přenosové vlastnosti  než FO s průběžnou  změnou  indexu  lomu  v jádře.",
        "options": [
            "Nepravda",
            "Pravda"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Frekvenční  multiplex  (FDMA):",
        "options": [
            "rozděluje  sdílenou  kapacitu  na posloupnost  časových  úseků,",
            "z nichž  každý  je plně přidělen  jedné  stanici",
            "přenosový  kanál  přiděluje  všem  stanicím  najednou",
            "rozdělí  celkovou  kmitočtovou  šíři kanálu  do",
            "několika  subkanálů přidělených jednotliv ým",
            "stanicím"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Fresnelova  zóna  má tvar:",
        "options": [
            "koule",
            "kvádru",
            "hyperboloidu",
            "paraboloidu"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Full Duplex  označuje  přenos",
        "options": [
            "který  je možný  oběma  směry  současně",
            "pouze  jedním  směrem",
            "který  je možný  oběma  směry,  ale ne současně"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Fyzická  topologie  sítě:",
        "options": [
            "je dána  způsobem  vzájemné  komunikace  jednotlivých  uzlů",
            "je dána  zapojením  kabelů  a způsobem  propojení",
            "jednotliv ých uzlů",
            "je vždy  shodná  s logickou  topologií"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Fyzická  topologie  typu hvězda :",
        "options": [
            "veškerá  komunikace  probíhá  přes centrální  uzel",
            "spojuje  jednotlivé  stanice  přímo",
            "využívá  sériového  propojení  stanic",
            "je-li uprostřed  centrálním  uzlem  switch,  je signál  vysílaný",
            "kterýmkoliv  počítačem  šířen  po celé síti (podobně  jako u",
            "sběrnice)",
            "je charakteristická  centrálním  uzlem"
        ],
        "correctIndices": [
            0,
            6
        ]
    },
    {
        "question": "Charakteristická  impedance  je:",
        "options": [
            "velikost  odporu  vodiče  stejnosměrnému  elektrickému  proudu",
            "velikost  odporu  vodiče  strídavému  elektrickému  proudu",
            "indukčnost  vodiče  při průchodu  střídavého  proudu",
            "kapacita  vodiče  při průchodu  stejnosměrného  proudu"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jakou  jednotku  má impedance  vodiče:",
        "options": [
            "Ohm",
            "dB",
            "Hz",
            "Wat"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Index  lomu  je definován  vzorcem  (c = rychlost  světla  ve vakuu,  v = rychlost  světla  v materiálu):",
        "options": [
            "n=c*v",
            "n=v/c",
            "n=c/v"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jádro  optického  vlákna  může  být vyrobeno:",
        "options": [
            "pouze  ze skla",
            "pouze  z plastu",
            "ze skla nebo  z plastu"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jádro  u FO má v průřezu  konstantní  nebo  proměnlivou hodnotu  indexu  lomu:",
        "options": [
            "Pravda",
            "Nepravda"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jak je označen  Ethernet  s kroucenou  dvojlinkou ?",
        "options": [
            "BaseS",
            "BaseL",
            "BaseT",
            "BaseF",
            "BaseE"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jak je označen  Ethernet  s optickými  vlákny ?",
        "options": [
            "BaseS",
            "BaseL",
            "BaseT",
            "BaseF",
            "BaseE"
        ],
        "correctIndices": [
            0,
            1,
            3,
            4
        ]
    },
    {
        "question": "Jak se jmenuje  1. vrstva  modelu  TCP/IP  (pětivrstvý  model):",
        "options": [
            "linková  vrstva",
            "relační  vrstva",
            "prezenční  vrstva",
            "fyzická  vrstva",
            "transportní  vrstva",
            "kanalová  vrstva",
            "síťová  vrstva",
            "internetová  vrstva",
            "vrstva  síťového  rozhraní",
            "aplikační  vrstva"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Jak se jmenuje  2. vrstva  modelu  TCP/IP  (pětivrstvý  model):",
        "options": [
            "fyzická  vrstva",
            "síťová  vrstva",
            "kanálová  vrstva",
            "aplikační  vrstva",
            "linková  vrstva",
            "transportní  vrstva",
            "internetová  vrstva",
            "relační  vrstva",
            "prezenční  vrstva"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Jak se jmenuje  3. vrstva  modelu  TCP/IP  (pětivrstvý  model):",
        "options": [
            "relační  vrstva",
            "linková  vrstva",
            "transportní  vrstva",
            "hardwarová  vrstva",
            "aplikační  vrstva",
            "kanálová  vrstva",
            "vrstva  síťového  rozhraní",
            "prezetační  vrstva",
            "fyzická  vrstva",
            "internetová  vrstva"
        ],
        "correctIndices": [
            9
        ]
    },
    {
        "question": "Jak se jmenuje  4. vrstva  modelu  TCP/IP  (pětivrstvý  model):",
        "options": [
            "fyzická  vrstva",
            "prezenční  vrstva",
            "transportní  vrstva",
            "aplikační  vrstva",
            "síťová  vrstva",
            "hardwarová  vrstva",
            "linková  vrstva",
            "relační  vrstva",
            "internetová  vrstva",
            "vrstva  síťového  rozhraní"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jak se jmenuje  5. vrstva  modelu  TCP/IP  (pětivrstvý  model):",
        "options": [
            "fyzická  vrstva",
            "prezenční  vrstva",
            "transportní  vrstva",
            "aplikační  vrstva",
            "síťová  vrstva",
            "hardwarová  vrstva",
            "linková  vrstva",
            "relační  vrstva",
            "internetová  vrstva",
            "vrstva  síťového  rozhraní"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Jak se jmenuje  1. vrstva  modelu  OSI ISO?",
        "options": [
            "relační  vrstva",
            "vrstva  síťového  rozhraní",
            "linková  vrstva",
            "fyzická  vrstva",
            "hardwarová  vrstva",
            "prezentační  vrstva",
            "aplikační  vrstva",
            "transportní  vrstva",
            "internetová  vrstva",
            "síťová  vrstva"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Jak se jmenuje  2. vrstva  modelu  OSI ISO?",
        "options": [
            "relační  vrstva",
            "vrstva  síťového  rozhraní",
            "linková  vrstva",
            "fyzická  vrstva",
            "hardwarová  vrstva",
            "prezentační  vrstva",
            "aplikační  vrstva",
            "transportní  vrstva",
            "internetová  vrstva",
            "síťová  vrstva"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jak se jmenuje  3. vrstva  modelu  OSI ISO?",
        "options": [
            "relační  vrstva",
            "vrstva  síťového  rozhraní",
            "linková  vrstva",
            "fyzická  vrstva",
            "hardwarová  vrstva",
            "prezentační  vrstva",
            "aplikační  vrstva",
            "transportní  vrstva",
            "internetová  vrstva",
            "síťová  vrstva"
        ],
        "correctIndices": [
            9
        ]
    },
    {
        "question": "Jak se jmenuje  4. vrstva  modelu  OSI ISO?",
        "options": [
            "relační  vrstva",
            "vrstva  síťového  rozhraní",
            "linková  vrstva",
            "fyzická  vrstva",
            "hardwarová  vrstva",
            "prezentační  vrstva",
            "aplikační  vrstva",
            "transportní  vrstva",
            "internetová  vrstva",
            "síťová  vrstva"
        ],
        "correctIndices": [
            7
        ]
    },
    {
        "question": "Jak se jmenuje  5. vrstva  modelu  OSI ISO?",
        "options": [
            "relační  vrstva",
            "vrstva  síťového  rozhraní",
            "linková  vrstva",
            "fyzická  vrstva",
            "hardwarová  vrstva",
            "prezentační  vrstva",
            "aplikační  vrstva",
            "transportní  vrstva",
            "internetová  vrstva",
            "síťová  vrstva"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jak se jmenuje  6. vrstva  modelu  OSI ISO?",
        "options": [
            "relační  vrstva",
            "vrstva  síťového  rozhraní",
            "linková  vrstva",
            "fyzická  vrstva",
            "hardwarová  vrstva",
            "prezentační  vrstva",
            "aplikační  vrstva",
            "transportní  vrstva",
            "internetová  vrstva",
            "síťová  vrstva"
        ],
        "correctIndices": [
            5
        ]
    },
    {
        "question": "Jak se jmenuje  7. vrstva  modelu  OSI ISO?",
        "options": [
            "relační  vrstva",
            "vrstva  síťového  rozhraní",
            "linková  vrstva",
            "fyzická  vrstva",
            "hardwarová  vrstva",
            "prezentační  vrstva",
            "aplikační  vrstva",
            "transportní  vrstva",
            "internetová  vrstva",
            "síťová  vrstva"
        ],
        "correctIndices": [
            6
        ]
    },
    {
        "question": "Jak se jmenuje  nástroj  pro adjustáž  vodičů  TP do patch panelů  a některých  typů zásuvek?",
        "options": [
            "Natláčecí  nástroj",
            "Připojovací  nástroj",
            "Narážecí  nástroj",
            "Zarážecí  nástroj"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jak vytvoříme  datagram  na 3. vrstvě  modelu  OSI?",
        "options": [
            "k PDU  z relační  vrstvy  přidáme  cílovou  a zdrojovou  adresu",
            "síťového  protokolu  a další  pomocné  údaje",
            "k PDU  z transportní  vrstvy  přidáme  cílovou  a",
            "zdrojovou  adresu  síťového  protokolu  a další  pomocné",
            "údaje",
            "k PDU  z linkové  vrstvy  přidáme  cílovou  a zdrojovou  adresu",
            "síťového  protokolu  a další  pomocné  údaje"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jaká je binární  předpona  gigabyte  IEC?",
        "options": [
            "GiB",
            "Gb",
            "gB",
            "GB"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaká je binární  předpona  kilobyte  IEC?",
        "options": [
            "KB",
            "kB",
            "Kb",
            "KiB"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Jaká je binární  předpona  megabyte  IEC?",
        "options": [
            "MiB",
            "Mb",
            "mB",
            "MB"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaká je délka  nejkratšího  rámce  u 1 Gb/s  Ethernetu  v bitech?",
        "options": [
            "512",
            "4096",
            "není aplikováno  na danou  přenosovou  rychlost"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaká je délka  nejkratšího  rámce  u 100Mb/s  Ethernetu  v bitech?",
        "options": [
            "512",
            "4096",
            "není aplikováno  na danou  přenosovou  rychlost"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaká je délka  nejkratšího  rámce  u 10Gb/s  Ethernetu  v bitech?",
        "options": [
            "512",
            "4096",
            "není aplikováno  na danou  přenosovou  rychlost"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jaká je délka  prefixu  pro dělení  třídy  B na čtvrtiny  (číslo  bez lomítk a)?",
        "options": [
            "16",
            "17",
            "19",
            "18"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Jaká je maximální  teoretická  rychlost  dle standardu  IEEE 802.1 1a?",
        "options": [
            "600 Mb/s",
            "11 Mb/s",
            "54 Mb/s",
            "108 Mb/s"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jaká je maximální  teoretická  rychlost  dle standardu  IEEE 802.1 1b?",
        "options": [
            "600 Mb/s",
            "11 Mb/s",
            "54 Mb/s",
            "108 Mb/s"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaká je maximální  teoretická  rychlost  dle standardu  IEEE 802.1 1n?",
        "options": [
            "600 Mb/s",
            "11 Mb/s",
            "54 Mb/s",
            "108 Mb/s"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaká je přibližně  propustnost  taktované  ALOHY  v % vyslaných  paketů  (celé  číslo):",
        "options": [
            "36",
            "18",
            "25",
            "16"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaká je přibližně  propustnost  základní  verze  ALOHY  v % vyslaných  paketů  (celé  číslo):",
        "options": [
            "18",
            "19",
            "17",
            "16"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaká je zkratka  modelu,  který  rozděluje  činnost  počítačové sítě na několik  vrstev:",
        "options": [
            "SIO",
            "ISO",
            "OSI"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jakákoliv  soustava  vzájemně  propojených  sítí (např.  i v jednom  pokoji)  se nazývá:",
        "options": [
            "extranet",
            "internet",
            "intranet",
            "Internet"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaké jsou výhody  datagramové  služby?",
        "options": [
            "síť nezatěžujeme  servisními  pakety,  pakety  mohou",
            "být dynamicky  směrovány",
            "data jsou do cíle vždy  doručena  ve správném  pořadí",
            "ani jedna  z uvedených  odpovědí"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaké typy logické  topologie  znáte?",
        "options": [
            "hvězda",
            "strom",
            "kruh",
            "sběrnice",
            "dvojbodový  spoj"
        ],
        "correctIndices": [
            2,
            3,
            4
        ]
    },
    {
        "question": "Jaké výhody  má virtuální  spoj:",
        "options": [
            "data  jsou do cíle vždy  doručena  ve správném  pořadí",
            "ani jedna  z uvedených  odpovědí",
            "síť nezatěžujeme  servisními  pakety,  pakety  mohou  být",
            "dynamicky  směrovány"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jakou  frekvenci  v Hz potřebujeme  k praktickému  přenesení 1 b/s (číslo):",
        "options": [
            "4",
            "3",
            "2",
            "1"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jakou  hodnotu  impedance  v ohmech  má TP pro LAN?",
        "options": [
            "75",
            "50",
            "93",
            "100"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Jakou  hodnotu  má druhý  byte z leva v dekadické  soustavě při dělení  sítě třídy  A na 1/2 (číslo)?",
        "options": [
            "12",
            "127",
            "255"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jakou  hodnotu  má SM třídy  A?",
        "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jakou  hodnotu  má SM třídy  B?",
        "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jakou  hodnotu  má SM třídy  C?",
        "options": [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jakou  impedanci  v ohmech  má koaxiální  kabel  pro televizní rozvody?",
        "options": [
            "100",
            "50",
            "75",
            "93"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jakou  impedanci  v ohmech  má koaxiální  kabel  pro Wi-Fi a Ethernet ?",
        "options": [
            "100",
            "50",
            "75",
            "93"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jakou  maximální  rychlostí  můžeme  přenášet  data jedním optickým  vláknem  na jedné  vlnové  délce  (nejedná  se o technologie  WDM)?",
        "options": [
            "1000  Gb/s",
            "100 Gb/s",
            "50 Mb/s",
            "1 Gb/s",
            "100 Mb/s",
            "50 Gb/s"
        ],
        "correctIndices": [
            5
        ]
    },
    {
        "question": "Jakou  zkratkou  jsou označeny  vstupní  body  jednotlivých vrstev  v modelu  OSI:",
        "options": [
            "SPA",
            "SAP",
            "ASP",
            "APS"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaký je číselný  rozdíl  v zisku  antény  uvedený  v dBi a dBd?",
        "options": [
            "žádn ý",
            "dBd je o 2,15 dB větší  než v dBi",
            "dBi je o 2,15 dB větší  než v",
            "dBd"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jaký je maximální  počet  hubů  u 10BaseT  s huby  zapojenými v kaskádě  mezi  koncovými  počítači:",
        "options": [
            "5",
            "4",
            "6",
            "3"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaký je maximální  počet  segmentů  u 10BaseT  s huby zapojenými  v kaskádě  mezi  koncovými  počítači:",
        "options": [
            "5",
            "4",
            "6",
            "3"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaký je maximální  počet  switchů  u Ethernetu  BaseT:",
        "options": [
            "4",
            "bez omezení",
            "5",
            "6"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaký je maximální  vyzářený  výkon  v pásmu  2.4Ghz  v ČR?",
        "options": [
            "1000mW",
            "100mW",
            "20dBm",
            "30dBm"
        ],
        "correctIndices": [
            1,
            2
        ]
    },
    {
        "question": "Jaký je maximální  vyzářený  výkon  v pásmu  5Ghz?",
        "options": [
            "100mW",
            "200mW",
            "20dBm",
            "30dBm"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaký je správný  vzorec  pro výpočet  výkonu  v dBm?",
        "options": [
            "dBm  = 10 x Log (P [W])/0.001)",
            "dBm  = 20 x Log (P [W])/0.001)",
            "dBm  = 20 x Log (P [W])/0.1)",
            "dBm  = 20 x Log (P [W])/0.01)",
            "dBm  = 10 x Log (P [W])/0.01)",
            "dBm  = 10 x Log (P [W])/0.1)"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaký je správný  vzorec  pro výpočet  numerické  apertury, jestliže  n je index  lomu  materiálu,  ze kterého  se světlo navazuje  do vlákna?",
        "options": [
            "NA = n*sin(fi);",
            "NA = n*cos(fi);",
            "NA = -n*sin(fi);",
            "NA = -n*cos(fi);"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaký je útlum  nejkvalitnějšího  jednovidového  optického vlákna  v dB/km  (číslo)?",
        "options": [
            "0,4",
            "0,2",
            "0,3",
            "0,1"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaký obvyklý  název  má kabel  propojující  switch  s rozvodným  panelem  v datovém  rozvaděči?",
        "options": [
            "Pigtail",
            "Patch  kabel",
            "Rektail"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaký obvyklý  název  má rozvodný  panel  v datovém rozvaděči:",
        "options": [
            "Patch  panel",
            "Rek",
            "Rozvodná  skříň"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jaký typ adres  se nachází  v hlavičce  paketu ?",
        "options": [
            "socketová",
            "symbolická",
            "logická",
            "fyzická"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jaký typ adres  se nachází  v hlavičce  rámce ?",
        "options": [
            "čísla portů",
            "MAC",
            "adresy  síťových  protokolů"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Jaký typ adres  se nachází  v hlavičce  segmentu ?",
        "options": [
            "adresy  síťových  protokolů",
            "MAC",
            "čísla  portů"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Jaký typ útlumu  u FO způsobují  nečistoty  v jádře  vlákna?",
        "options": [
            "micro -ohyb",
            "rozptyl",
            "macro -ohyb",
            "absorbci"
        ],
        "correctIndices": [
            1,
            3
        ]
    },
    {
        "question": "Jaký typ útlumu  u FO způsobují  venkovní  mechanismy  ve vlákně?",
        "options": [
            "macro -ohyb",
            "micro -ohyb",
            "rozptyl",
            "absorbci"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jednotka  dBm  je:",
        "options": [
            "decibel  Wat",
            "decibel  metr",
            "decibel  Volt",
            "decibel  mili Volt",
            "decibel  mili Wat"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Jednotlivé  úrovně  doménového  jména  v Internetu  se oddělují:",
        "options": [
            "tečkou",
            "lomítkem",
            "čárkou",
            "zpětným  lomítkem"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Jednotlivé  vodiče  TP kabelu  jsou navzájem  v párech zkroucené.  Toto  kroucení  způsobuje :",
        "options": [
            "nižší  odolnost  vůči EMS",
            "minimalizaci  přeslechů",
            "vyšší  odolnost  vůči EMS",
            "snížení  ztrát  způsobených  kapacitním  odporem"
        ],
        "correctIndices": [
            1,
            2,
            3
        ]
    },
    {
        "question": "Jednovidové  vlákno  je buzeno:",
        "options": [
            "laserovou  diodou",
            "žárovkou  s clonou",
            "LED  s clonou"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "K čemu  je nutná  mezirámcová  mezera  mezi  Ethernet  rámci?",
        "options": [
            "ke zpracování  rámce",
            "k detekci  kolize",
            "k bezkoliznímu  odvysílání  potvrzovacího  rámce",
            "ke stabilizaci  komunikačního  média  pro přenesení  rámce"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "K čemu  vede  ztráta  potvrzovacího  PDU  u pozitivního potvrzová ní?",
        "options": [
            "ke zdvojení  datových  PDU",
            "nemá  na funkci  potvrzování  vliv",
            "k znovu  zaslání  celé zprávy"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "K rozdělení  broadcastové  domény  v síti je možné  použít:",
        "options": [
            "switch",
            "hub",
            "router"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "K rozdělení  kolizní  domény  v síti je možné  použít:",
        "options": [
            "switch",
            "hub",
            "router"
        ],
        "correctIndices": [
            0,
            2
        ]
    },
    {
        "question": "K totálnímu  odrazu  paprsku  v optickém  vlákně  dochází  v případě,  že paprsek  dopadá  do optického  vlákna  pod úhlem (úhel  je měřen  od osy optického  vlákna):",
        "options": [
            "menším  nebo  stejným  jak kritickým",
            "velikost  úhlu nerozhoduje",
            "větším  než kritickým"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Každá  doména  v Internetu:",
        "options": [
            "nemusí  mít žádný  DNS  server",
            "musí  mít alespoň  dva DNS  servery",
            "musí  mít alespoň  jeden  DNS",
            "server"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Kdy byl zahájen  vývoj  TCP/IP  protokolu:",
        "options": [
            "1977",
            "1987",
            "1957",
            "1967"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Ke které  vrstvě  modelu  OSI patří protokol  SPX:",
        "options": [
            "3",
            "4",
            "2"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Kolik  bitů za sekundu  lze teoreticky  přenést  frekvencí  1Hz (číslo)?",
        "options": [
            "1",
            "8",
            "4",
            "2"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Kolik  byte má Ethernetová  MAC  adresa?",
        "options": [
            "2",
            "4",
            "8",
            "6"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Kolik  osazených  kontaktů  má konektor  RJ-45?",
        "options": [
            "8",
            "6",
            "4"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kolik  použitelných  IP adres  (pro síťová  zařízení)  je v síti, která  má délku  prefixu  /25?",
        "options": [
            "126",
            "127",
            "128",
            "255"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kolik  použitelných  IP adres  (pro síťová  zařízení)  je v síti, která  má délku  síťového  prefixu  /23?:",
        "options": [
            "255",
            "300",
            "500",
            "510"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Kolik  tříd IP adres  verze  4 se používá  k adresování jednotliv ých PC?",
        "options": [
            "3",
            "5",
            "4"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kolik  vodičů  má běžný  TP kabel  pro LAN  (zadejte  jedno číslo):",
        "options": [
            "4",
            "8",
            "2",
            "1"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Kolik  vzájemně  se nerušících  sítí můžete  vytvořit  v jednom místě  v pásmu  2,4 Ghz v ČR?",
        "options": [
            "4",
            "2",
            "3",
            "1"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Kolika  páry prochází  signál  u Ethernetu  100BaseTX?",
        "options": [
            "1",
            "3",
            "4",
            "2"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Kolika  páry prochází  signál  u Ethernetu  10BaseT?",
        "options": [
            "1",
            "3",
            "4",
            "2"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Kolika  páry prochází  signál  u Ethernetu  10GBaseT?",
        "options": [
            "4",
            "1",
            "3",
            "2"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kolika  páry prochází  signál  u Ethernetu  1GBaseT?",
        "options": [
            "4",
            "1",
            "3",
            "2"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kolika  vodiči  se přenáší  signál  u TP pro 100Mbps  Ethernet?",
        "options": [
            "8",
            "4",
            "2",
            "1"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Kolikrát  se pokusí  odvysílat  data Ethernetovská  stanice pracující  s přístupovou  metodou  CSMA/CD,  než nahlásí chybu?",
        "options": [
            "16",
            "10",
            "20",
            "32"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kořenová  doména  DNS  systému  je označena  znakem:",
        "options": [
            "lomítko",
            "tečka",
            "zpětné  lomítko"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Kroucená  dvojlinka  se vyrábí  v několika  kategoriích.  Pokud jsou jednotlivé  páry navzájem  pouze  zkrouceny  a uloženy  v obalu  z PVC,  jde o kabel:",
        "options": [
            "UTP",
            "ScTP",
            "STP"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kroucená  dvojlinka  se vyrábí  v několika  kategoriích.  Pro rozvody  LAN  s přenosovou  rychlostí  1 Gbps  je možné  použít kabeláž kategorie:",
        "options": [
            "4 a vyšší",
            "5 a vyšší",
            "5E a vyšší",
            "pouze  6 a vyšší"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Kroucená  dvojlinka  se vyrábí  v několika  provedeních. Pokud  jsou jednotlivé  páry navzájem  zkrouceny,  celek  je obalen  stíněním  a uložen  v obalu  z PVC,  jde o kabel:",
        "options": [
            "UTP",
            "STP",
            "ScTP"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Křížený  kabel  se musí  použít  u Ethernetu  při propojení zařízení  ze stejných  skupin,  pokud  zařízení  nemají  autodetekci křížení:",
        "options": [
            "10Mb/s",
            "100Mb/s",
            "10Gb/s",
            "1Gb/s"
        ],
        "correctIndices": [
            0,
            1
        ]
    },
    {
        "question": "Která  doporučení  popisují  bezdrátové  sítě v pásmu  2,4Ghz?",
        "options": [
            "IEEE  802.11h",
            "IEEE  802.11b",
            "IEEE  802.11d",
            "IEEE  802.11e",
            "IEEE  802.11g",
            "IEEE  802.11a",
            "IEEE  802.11i"
        ],
        "correctIndices": [
            1,
            4
        ]
    },
    {
        "question": "Která  doporučení  popisují  bezdrátové  sítě v pásmu  5Ghz?",
        "options": [
            "IEEE  802.11h",
            "IEEE  802.11b",
            "IEEE  802.11d",
            "IEEE  802.11e",
            "IEEE  802.11g",
            "IEEE  802.11a",
            "IEEE  802.11i"
        ],
        "correctIndices": [
            0,
            5
        ]
    },
    {
        "question": "Která  firma  vyvinula  protokol  NetBIOS:",
        "options": [
            "IBM",
            "XEROX",
            "DEC"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Která  firma  vyvinula  protokol  IPX/SPX:",
        "options": [
            "IBM",
            "XEROX",
            "DEC"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Která  přenosová  média  nepoužívá  Ethernet?",
        "options": [
            "Rádiové  vlny (bezdrátová  síť)",
            "Kroucená  dvojlinka",
            "Optické  vlákno"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Která  vývojová  posloupnost  Ethernetu  je správná?",
        "options": [
            "DIX Ethernet,  Ethernet  II, IEEE  802.3",
            "DIX Ethernet,  IEEE  802.3,  Ethernet  II",
            "IEEE  802.3,  Ethernet  II, DIX Ethernet",
            "DIX Ethernet,  IEEE  802.3,  Ethernet  II, upravený",
            "IEEE  802.3"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Která  zařízení  musí  přijímat  všechna  data?",
        "options": [
            "repeater",
            "router",
            "hub",
            "switch",
            "bridge"
        ],
        "correctIndices": [
            0,
            2,
            3,
            4
        ]
    },
    {
        "question": "Které  adresa  není vyhrazenou  adresou ?",
        "options": [
            "195.178.90.15",
            "195.178.90.0",
            "255.255.255.225",
            "195.178.90.255",
            "0.0.0.15",
            "0.0.0.0"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Které  adresy  je možné  použít  v aplikacích  v Internetu  (např. v IE)?",
        "options": [
            "Doménové  adresy",
            "MAC  adresy",
            "IP adresy"
        ],
        "correctIndices": [
            0,
            2
        ]
    },
    {
        "question": "Které  fyzické  topologie  používají  současné  nejrozšířenější verze  Ethernetu ?",
        "options": [
            "sběrnici",
            "hvězdu",
            "kruh",
            "strom"
        ],
        "correctIndices": [
            1,
            3
        ]
    },
    {
        "question": "Které  kategorie  TP můžete  použít  na 1 Gb/s  Ethernet?",
        "options": [
            "4",
            "6",
            "7",
            "5",
            "5E",
            "3"
        ],
        "correctIndices": [
            1,
            2,
            4
        ]
    },
    {
        "question": "Které  kategorie  TP můžete  použít  na 10 Mb/s  Ethernet?",
        "options": [
            "4",
            "6",
            "7",
            "5",
            "5E",
            "3"
        ],
        "correctIndices": [
            1,
            2,
            3,
            4
        ]
    },
    {
        "question": "Které  kódování  se používá  u COM  portu  na PC?",
        "options": [
            "diferenc.  fáz. NRZ",
            "fázové  RZ",
            "bipolární  NRZI",
            "fázové  NRZ",
            "bipolární  NRZ"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Které  MAC  adresy  jsou v hlavičce  rámce ?",
        "options": [
            "symbolická",
            "fyzická",
            "logická",
            "socketová"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Které  MAC  adresy  jsou v hlavičce  rámce?",
        "options": [
            "cílová",
            "segmentová",
            "zdrojová",
            "relativní"
        ],
        "correctIndices": [
            0,
            2
        ]
    },
    {
        "question": "Které  nepřekrývající  kanály  v pásmu  2,4Ghz  se doporučují používat  v ČR?",
        "options": [
            "1,6 a 11",
            "1,7 a 14",
            "1,7 a 13"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Které  porty  využívá  FTP protokol  z rodiny  protokolů TCP/IP?",
        "options": [
            "20",
            "22",
            "23",
            "21"
        ],
        "correctIndices": [
            0,
            3
        ]
    },
    {
        "question": "Které  sítě byly vyvinuty  nejpozději?",
        "options": [
            "LAN",
            "WLAN",
            "MAN",
            "WAN"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Které  stanice  vyšlou  kolizní  signál  JAM ?",
        "options": [
            "jen předem  vybraná  stanice  (vybraná  při náběhu  sítě)",
            "všechny  co detekují  kolizi  na společném  vedení  (i ty co",
            "nevysí lají)",
            "jen ty co vysílají  a detekují  kolizi",
            "jen první  vysílající  stanice,  která  zjistí  kolizi"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Které  šifrování  je u Wi-Fi nejúčinější?",
        "options": [
            "WPA2",
            "WEP",
            "WPA"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Které  šifrování  můžete  použít  ve WLAN  ad-hoc?",
        "options": [
            "WPA2",
            "WEP",
            "WPA"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Které  šifrování  u Wi-Fi není v dnešní  době  dostatečně \"silné\"?",
        "options": [
            "WPA2",
            "WEP",
            "WPA"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Které  třídy  adres  IPV4  používáme  pro adresování jednotliv ých počítačů?",
        "options": [
            "B",
            "A",
            "E",
            "C",
            "D"
        ],
        "correctIndices": [
            0,
            1,
            3
        ]
    },
    {
        "question": "Které  třídy  adres  můžeme  dělit na SS?",
        "options": [
            "A, B i C",
            "jen B a C",
            "jen C"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Které  varianty  IEEE802.11  jsou zpětně  kompatibilní?",
        "options": [
            "\"g\" je zpětně  kompatibilní  s \"b\"",
            "\"g\" je zpětně  kompatibilní  s \"a\"",
            "\"a\" je zpětně  kompatibilní  s \"g\"",
            "\"a\" je zpětně  kompatibilní  s \"b\"",
            "\"b\" je zpětně  kompatibilní  s \"a\"",
            "\"b\" je zpětně  kompatibilní  s \"g\""
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Které  vlnové  délky  se používají  u FO (v nm)?",
        "options": [
            "1300",
            "945",
            "850",
            "1380",
            "1550",
            "1240",
            "1310"
        ],
        "correctIndices": [
            0,
            2,
            4,
            6
        ]
    },
    {
        "question": "Které  vrstvy  modelu  OSI ISO pracují  s pakety :",
        "options": [
            "relační  vrstva",
            "síťová  vrstva",
            "fyzická  vrstva",
            "transportní  vrstva",
            "aplikační  vrstva",
            "prezenční  vrstva",
            "linková  vrstva"
        ],
        "correctIndices": [
            1,
            6
        ]
    },
    {
        "question": "Které  zařízení  nepracuje  s přístupovými  metodami  sítě?",
        "options": [
            "repeater,  hub",
            "router,  routing  switch",
            "bridge,  switch"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Které  zařízení  používá  k přeposílání  dat MAC  adresy?",
        "options": [
            "repeater,  hub",
            "bridge,  switch",
            "router,  routing  switch  ve funkci  routeru"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Které  zařízení  používá  ke směrování  dat adresy  síťových protokolů?",
        "options": [
            "repeater,  hub",
            "bridge,  switch",
            "router,  routing  switch  ve funkci  routeru"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Kterou  logickou  topologii  používá  Ethernet?",
        "options": [
            "sběrnici",
            "strom",
            "hvězdu",
            "kruh"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kterou  třídu  adres  IPV4  nepoužíváme  pro žádné  adresování (je vedena  jako rezerva)?",
        "options": [
            "E",
            "D",
            "B",
            "A",
            "C"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Kterou  třídu  adres  IPV4  používáme  pro skupinové adresování  počítačů?",
        "options": [
            "D",
            "C",
            "E",
            "A",
            "B"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Který  popis  odpovídá  bipolárnímu  kódování  NRZ?",
        "options": [
            "Každá  logická  úroveň  je vyjádřena  sledem  dvou  opačných",
            "pulsů  s mezerou",
            "Log.  0 = +U (+3 až +15V),  Log.  1 = -U(-3 až -15V)",
            "Log. 0 = zůstává  napěťová  úroveň  předcházejícího  bitu, Log.",
            "1 = mění  se napěťová  úroveň  na opačnou",
            "Log. 0 = sestupná  nebo  vzestupná  hrana,  Log. 1 = beze",
            "změny  úrovně  (uprostřed  intervalů  jsou synchronizační  hrany)",
            "Log. 0 = sestupná  hrana,  Log. 1 = vzestupná  hrana"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Který  popis  odpovídá  bipolárnímu  kódování  NRZI?",
        "options": [
            "Každá  logická  úroveň  je vyjádřena  sledem  dvou  opačných",
            "pulsů  s mezerou",
            "Log. 0 = +U (+3 až +15V),  Log. 1 = -U(-3 až -15V)",
            "Log.  0 = zůstává  napěťová  úroveň  předcházejícího",
            "bitu,  Log.  1 = mění  se napěťová  úroveň  na opačnou",
            "Log. 0 = sestupná  nebo  vzestupná  hrana,  Log. 1 = beze",
            "změny  úrovně  (uprostřed  intervalů  jsou synchronizační  hrany)",
            "Log. 0 = sestupná  hrana,  Log. 1 = vzestupná  hrana"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Který  popis  odpovídá  fázovému  kódování  NRZ?",
        "options": [
            "Každá  logická  úroveň  je vyjádřena  sledem  dvou  opačných",
            "pulsů  s mezerou",
            "Log. 0 = +U (+3 až +15V),  Log. 1 = -U(-3 až -15V)",
            "Log. 0 = zůstává  napěťová  úroveň  předcházejícího  bitu, Log.",
            "1 = mění  se napěťová  úroveň  na opačnou",
            "Log. 0 = sestupná  nebo  vzestupná  hrana,  Log. 1 = beze",
            "změny  úrovně  (uprostřed  intervalů  jsou synchronizační  hrany)",
            "Log.  0 = sestupná  hrana,  Log.  1 = vzestupná  hrana"
        ],
        "correctIndices": [
            7
        ]
    },
    {
        "question": "Který  popis  odpovídá  diferenciálnímu  fázovému  kódování NRZ?",
        "options": [
            "Každá  logická  úroveň  je vyjádřena  sledem  dvou  opačných",
            "pulsů  s mezerou",
            "Log. 0 = +U (+3 až +15V),  Log. 1 = -U(-3 až -15V)",
            "Log. 0 = zůstává  napěťová  úroveň  předcházejícího  bitu, Log.",
            "1 = mění  se napěťová  úroveň  na opačnou",
            "Log.  0 = sestupná  nebo  vzestupná  hrana,  Log.  1 = beze",
            "změny  úrovně  (uprostřed  intervalů  jsou synchronizační",
            "hrany)",
            "Log. 0 = sestupná  hrana,  Log. 1 = vzestupná  hrana"
        ],
        "correctIndices": [
            5
        ]
    },
    {
        "question": "Který  popis  odpovídá  fázovému  kódování  RZ?",
        "options": [
            "Každá  logická  úroveň  je vyjádřena  sledem  dvou  opačných",
            "pulsů  s mezerou",
            "Log. 0 = +U (+3 až +15V),  Log. 1 = -U(-3 až -15V)",
            "Log. 0 = zůstává  napěťová  úroveň  předcházejícího  bitu, Log.",
            "1 = mění  se napěťová  úroveň  na opačnou",
            "Log. 0 = sestupná  nebo  vzestupná  hrana,  Log. 1 = beze",
            "změny  úrovně  (uprostřed  intervalů  jsou synchronizační  hrany)",
            "Log. 0 = sestupná  hrana,  Log. 1 = vzestupná  hrana"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Který  port využívá  HTTP  protokol  z rodiny  protokolů TCP/IP  (celé  číslo)?",
        "options": [
            "80",
            "255",
            "127"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Který  port využívá  POP3  protokol  z rodiny  protokolů TCP/IP  (celé  číslo):",
        "options": [
            "80",
            "255",
            "110"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Který  port využívá  SMTP  protokol  z rodiny  protokolů TCP/IP  (celé  číslo)?",
        "options": [
            "255",
            "25",
            "14"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Který  protokol  není routovatelný ?",
        "options": [
            "IPX/SPX",
            "TCP/IP",
            "NetBIOS,  NetBEUI"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Který  protokol  z rodiny  protokolů  TCP/IP  zabezpečuje přidělení  IP adresy  a dalších  potřebných  údajů  pro práci  v síti s TPC/IP  protokolem:",
        "options": [
            "BootP",
            "TFTP",
            "DNS",
            "DHCP"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Který  protokol  z rodiny  protokolů  TCP/IP  zabezpečuje  např. zavádění  OS na bezdiskové  stanice  a zálohování  konfigurace routerů  v síti s TCP/IP  protokolem?",
        "options": [
            "BootP",
            "TFTP",
            "DNS",
            "DHCP"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Který  protokol  přiděluje  dynamicky  IP adresy?",
        "options": [
            "BootP",
            "DHCP  i BootP",
            "DHCP"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  logické  řízení  spoje (poskytuje  služby  nezávisle  na použitém  médiu  a přístupových metod ách)?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  LAN  s přístupovou metodou  Token  Bus?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  LAN  s přístupovou metodou  Token  Ring?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            9
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  sítě s přenosem  v přeloženém  pásmu?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10",
            "802.7"
        ],
        "correctIndices": [
            11
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  sítě integrující  hlasový  a datov ý přenos?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10",
            "802.9"
        ],
        "correctIndices": [
            11
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  bezdrátové  sítě?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            5
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  bezdrátovou  síť WiMax:",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  LAN  s přístupovou metodou  CSMA/CD?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            6
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  rozhraní  k vyšším vrstvám  modelu  OSI (HILI  - High  Layer  Interface),  otázky adresace,  komunikace  mezi  sítěmi  a správu  sítě?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  sítě na bázi optických vláke n?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  sítě typu MAN?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.16",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            7
        ]
    },
    {
        "question": "Který  standard  IEEE  802 popisuje  technologii  Bluetooth?",
        "options": [
            "802.2",
            "802.1",
            "802.4",
            "802.15",
            "802.8",
            "802.11",
            "802.3",
            "802.6",
            "802.2",
            "802.5",
            "802.10"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Který  standart  IEEE  802 popisuje  otázky  bezpečnosti  a zabezpečení sítí:",
        "options": [
            "802.1",
            "802.3",
            "802.6",
            "802.10",
            "802.8",
            "802.4",
            "802.2",
            "802.16",
            "802.11",
            "802.5"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Který  typ kódování  používá  Ethernet  100Mb/s?",
        "options": [
            "PAM5  nebo  8B/10B",
            "Fázové  NRZ",
            "nejprve  4B/5B,  pak MLT -3 nebo  NRZI"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Který  typ kódování  používá  Ethernet  10Mb/s?",
        "options": [
            "PAM5  nebo  8B/10B",
            "Fázové  NRZ",
            "nejprve  4B/5B,  pak MLT -3 nebo  NRZI"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Který  typ kódování  používá  Ethernet  1Gb/s?",
        "options": [
            "PAM5  nebo  8B/10B",
            "Fázové  NRZ",
            "nejprve  4B/5B,  pak MLT -3 nebo  NRZI"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Který  typ TP je ohebnější  a lépe se sním  pracuje?",
        "options": [
            "UTP",
            "STP"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Který  zápis  zjednodušení  adresy  IPv6 FF01:0000:0000:0001:0000:0000:0000:0101  je správn ý:",
        "options": [
            "FF01:0:0:1:0:0:0:101",
            "FF01:0:0:0001:0:0:0:0101",
            "FF01:0:0:111::101",
            "FF01::1::101",
            "FF01:0:0:1::101"
        ],
        "correctIndices": [
            0,
            1,
            4
        ]
    },
    {
        "question": "Lepený  spoj u FO má obecně  lepší  přenosové  vlastnosti  než svařovaný  spoj.",
        "options": [
            "Pravda",
            "Nepravda"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Logická  topologie  sítě:",
        "options": [
            "je dána  zapojením  kabelů  a způsobem  propojení  jednotlivých",
            "uzlů",
            "je dána  způsobem  vzájemné  komunikace  jednotlivých  uzlů",
            "je vždy  shodná  s fyzickou  topologií"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Lokální  počítačová  síť se označuje  zkratkou:",
        "options": [
            "LAN",
            "PAN",
            "WAN",
            "MAN"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Maximálně  kolik  vlnových  délek  můžeme  použít  na jednom vlákně  u technologie  DWDM  (číslo)?",
        "options": [
            "100",
            "120",
            "160",
            "200"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Metropolitní  počítačová  síť se označuje  zkratkou:",
        "options": [
            "MAN",
            "WAN",
            "PAN",
            "LAN"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Mezi  metody  náhodného  přístupu  patří:",
        "options": [
            "Newhalův  kruh",
            "FDM",
            "Piercův  kruh",
            "ALOHA",
            "TDM",
            "připoslech  nosné"
        ],
        "correctIndices": [
            3,
            5
        ]
    },
    {
        "question": "Mezi  metody  připoslechu  nosné  patří:",
        "options": [
            "CSMA/DC",
            "CSMA/CA",
            "CSMA/CD",
            "CSMA/AC"
        ],
        "correctIndices": [
            1,
            2
        ]
    },
    {
        "question": "Mezirámcová  mezera  má délku  doby  nutné  k odvysílání:",
        "options": [
            "9.6b",
            "960b",
            "96b",
            "9600b"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Mnohovidové  vlákno  je buzeno:",
        "options": [
            "laserovou  diodou",
            "žárovkou  s clonou",
            "LED  s clonou"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Modulační  rychlost  se udává  v:",
        "options": [
            "b/s",
            "B/s",
            "MB/s",
            "Hz",
            "Bd"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Modulační  rychlost:",
        "options": [
            "udává  počet  změn  signálu  za sekundu",
            "udává  počet  přenesených  bitů za sekundu"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Na jakou  maximální  hodnotu  se zvětšuje  hodnota  k sloužící k výpočtu  intervalu  <0 - 2^k>  pro generování  náhodného čísla,  kterým  se násobí  doba  nutná  k odvysílání  nejkratšího rámce  pro získání  doby,  po kterou  se stanice  nesmí  pokusit  o přístup  na Ethernetovskou  síť:",
        "options": [
            "8",
            "16",
            "14",
            "10",
            "12"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Na kolik  subsítí  je možné  maximálně  rozdělit  síť třídy  C, aby v každé  subsíti  byly volné  adresy  pro PC?",
        "options": [
            "64",
            "128",
            "127"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  bridge  a switch?",
        "options": [
            "3",
            "4",
            "2",
            "1"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  DNS  protokol :",
        "options": [
            "5",
            "4",
            "6",
            "7"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  gateway?",
        "options": [
            "3",
            "5",
            "7",
            "1"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  protokol  ICMP :",
        "options": [
            "3",
            "2",
            "1",
            "4"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  repeater  a hub?",
        "options": [
            "3",
            "2",
            "1",
            "4"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  router?",
        "options": [
            "3",
            "5",
            "7",
            "1"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI se v hlavičce  nachází  u protokolu  TCP/IP  čísla portů:",
        "options": [
            "4",
            "2",
            "5",
            "3"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  protokol  NetBIOS?",
        "options": [
            "3",
            "5",
            "7",
            "1"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Nálepku  Wi-Fi u WLAN  uděluje  v současné  době organizace:",
        "options": [
            "Wi-Fi aliance",
            "Wi-Fi úřad pro normování",
            "WECA"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Největší  odolnost  vůči EMS  má:",
        "options": [
            "ScTP",
            "COAX",
            "FO",
            "UTP",
            "STP"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Nejvyšší  vrstva  modelu  OSI je :",
        "options": [
            "transportní  vrstva",
            "aplikační  vrstva",
            "fyzická  vrstva",
            "prezenční  vrstva"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Neomezená  topologie",
        "options": [
            "se využívá  nejčastěji  pro WAN  sítě",
            "je využita  v LAN  sítích",
            "využívá  jen hvězdicové  topologie"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Newhallův  kruh v distribuovaném  přidělování  můžeme charakterizovat  takto:",
        "options": [
            "že v síti koluje  tolik rámců,  kolik  je stanic",
            "že v síti koluje  jen jeden  rámec",
            "že délka  rámce  je rovna  velikosti  posuvného  registru"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "O homogenní  síť se jedná,  když:",
        "options": [
            "jsou používány  různé  přenosové  protokoly",
            "všechny  počítače  v dané  síti mají  stejný  OS",
            "je používán  přenosový  protokol",
            "počítače  v síti používají  různý  OS"
        ],
        "correctIndices": [
            1,
            2
        ]
    },
    {
        "question": "O jakou  hodnotu  v dB má anténa  větší  zisk, pokud  je zisk vztažen  k izotropnímu  dipólu  oproti  stejné  anténě,  která  má vztažen  zisk k půlvlnému  dipólu  (číslo  na dvě desetinná  místa bez jednotek):",
        "options": [
            "2,15",
            "3,15",
            "8,33",
            "1,33"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "O nehomogenní  síť se jedná,  když:",
        "options": [
            "jsou používány  různé  přenosové  protokoly",
            "všechny  počítače  v dané  síti mají stejný  OS",
            "je používán  přenosový  protokol",
            "počítače  v síti používají  různý  OS"
        ],
        "correctIndices": [
            0,
            3
        ]
    },
    {
        "question": "Obal  u optického  vlákna  je vyroben:",
        "options": [
            "z průhledného  bezbarvého  plastu",
            "z neprůhledného  bezbarvého  plastu",
            "ze skla"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Obecně  v přepínané  (switchované)  síti nesmí  nikdy vzniknout  kruh.  K jednomu  zařízení  nesmí  vést více než jedna cesta.",
        "options": [
            "Pravda",
            "Nepravda"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Obecně,  pokud  vedou  v přepínané  síti k jednomu  zařízení redundantní  cesty  (2 a více)",
        "options": [
            "síť je zahlcována  broadcasty  až do zkolabování",
            "v síti jsou doručovány  duplicitní  PDU",
            "síť funguje  bez problémů"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Organizace,  který  registruje  porty  se jmenuje:",
        "options": [
            "IANA",
            "RANA",
            "NANA",
            "PANA"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Označení  Ethernet  se dnes vztahuje:",
        "options": [
            "ke standardu  IEEE  802.5",
            "k Ethernetu  II",
            "ke standardu  IEEE  802.3",
            "ke standardu  IEEE  802.4"
        ],
        "correctIndices": [
            1,
            2
        ]
    },
    {
        "question": "Paket  je:",
        "options": [
            "balík  dat (mail,  soubor,  ...), který  přenášíme  po síti",
            "balík  dat o stanovené  pevné  délce",
            "rámec,  ke kterému  jsou připojeny  další  informace  (MAC",
            "adresy,  CRC,  ...)"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Segment  je:",
        "options": [
            "balík  dat (mail,  soubor,  ...), který  přenášíme  po síti",
            "balík  dat o stanovené  pevné  délce",
            "rámec,  ke kterému  jsou připojeny  další  informace  (MAC",
            "adresy,  CRC,  ...)"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Pasivní  retranslaci  u WLAN  můžeme  uskutečnit:",
        "options": [
            "AP - režim  s jedním  centrálním  prvkem",
            "odrazem  signálu",
            "AP - režim  se dvěma  aktivními  prvky",
            "přesměrováním  signálu"
        ],
        "correctIndices": [
            1,
            3
        ]
    },
    {
        "question": "Páteřní  síť",
        "options": [
            "vychází  z hvězdicové  topologie",
            "se využívají  nejčastěji  pro WAN  sítě",
            "je typickým  případem  LAN  rozvodu"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "PDU  mohou  být potvrzovány  pomocí:",
        "options": [
            "negativního  potvrzování",
            "pozitivního  potvrzování",
            "skupinového  potvrzování",
            "reverzního  potvrzování",
            "inverzního  potvrzování"
        ],
        "correctIndices": [
            0,
            1,
            2
        ]
    },
    {
        "question": "Plášť  světlovodu  optického  vlákna  může  být vyroben:",
        "options": [
            "pouze  z plastu",
            "pouze  ze skla",
            "ze skla nebo  plastu"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Po bezchybném  přijetí  datového  PDU  cílovou  stanicí  při pozitivním  potvrzování,  cílová  stanice:",
        "options": [
            "odešle  okamžitě  pozitivní  potvrzovací  PDU",
            "odešle  pozitivní  potvrzovací  PDU  až po přijetí  celé skupiny",
            "datov ých PDU",
            "odešle  pozitivní  potvrzení  v hlavičce  datového  PDU,  který",
            "posílá  stanici,  od které  obdržela  datový  PDU",
            "odešle  pozitivní  potvrzovací  PDU  až po bezchybném  přijetí",
            "celé skupiny  PDU"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Počet  úrovní  domén  v doménových  jménech  v Internetu  je omezen  na:",
        "options": [
            "10",
            "není omezen",
            "5",
            "15"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Podle  kterých  údajů  se demultiplexují  příchozí  data u Ethernetu ?",
        "options": [
            "čísla  IP protokolu",
            "typu  rámce  (Ethernet  typ)",
            "CRC  rámce",
            "čísla  portu",
            "délky  rámce"
        ],
        "correctIndices": [
            0,
            1,
            3
        ]
    },
    {
        "question": "Podvrstva  LLC  linkové  vrstvy  je nezávislá  na použitých typu média  a přístupových  metodách :",
        "options": [
            "pravda",
            "nepravda"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Pokud  je jádro  u FO vyrobeno  z plastu  máclepší  přenosové vlastnosti  než jádro  skleněné.",
        "options": [
            "Pravda",
            "Nepravda"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Pokud  je možné  vysílat  data po spojovacím  vedení  oběma směry,  ale ne současně,  jde o přenos:",
        "options": [
            "duplexní",
            "simplexní",
            "poloduplexní"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Pokud  je možné  vysílat  data po spojovacím  vedení  pouze jedním  směrem,  jde o přenos:",
        "options": [
            "duplexní",
            "simplexní",
            "poloduplexní"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Pokud  je na optickém  kabelu  napsáno  62,5/125,  jde o vlákno:",
        "options": [
            "mnohovidové",
            "jednovidové"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Pokud  je na optickém  kabelu  napsáno  9/125,  jde o vlákno:",
        "options": [
            "mnohovidové",
            "jednovidové"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Pokud  uvedeme  cílovou  IP adresu  127.0.0.1  neopustí  data?",
        "options": [
            "PC",
            "LAN",
            "síťový  proces  na PC"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Pokud  vysíláme  u WLAN  pouze  jedním  kanálem  (anténou) a přijímáme  více kanály  (anténami)  mluvíme  o technologii:",
        "options": [
            "SIMO",
            "MIMO",
            "SISO",
            "MISO"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Pokud  vysíláme  u WLAN  více kanály  (anténami)  a přijímáme  pouze  jedním  kanálem  (anténou)  mluvíme  o technol ogii:",
        "options": [
            "SIMO",
            "MIMO",
            "SISO",
            "MISO"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Pokud  vysíláme  u WLAN  více kanály  (anténami)  a přijímáme  více kanály  (anténami)  mluvíme  o technologii:",
        "options": [
            "SIMO",
            "MIMO",
            "SISO",
            "MISO"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Poslední  adresa  v síti je:",
        "options": [
            "omezený  broadcast",
            "řízený  broadcast",
            "loopback",
            "adresa  počítače",
            "adresa  sítě nebo  subsítě"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Pracovní  stanice  obsahuje :",
        "options": [
            "DNS  server",
            "DNS  server  i DNS  resolver",
            "DNS  resolver"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Pro činnost  sítě u centrálního  přidělování  není třeba centrální  stanice.",
        "options": [
            "Nepravda",
            "Pravda"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Pro přenos  informace  v počítačových  sítích  se používají signály:",
        "options": [
            "elektrické",
            "analogové",
            "optické",
            "elektromagnetické",
            "pneumatické"
        ],
        "correctIndices": [
            0,
            2,
            3
        ]
    },
    {
        "question": "Pro TP kabeláž  se používají  konektory:",
        "options": [
            "RJ-10",
            "RJ-45",
            "RJ-11"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Proč je doporučeno  v ČR v pásmu  2,4 Ghz používat  v jednom  místě  kanály  1,7 a 13 a ne kanály  1,6 a 11 jako v USA?",
        "options": [
            "pro větší  odstup  mezi  kanály",
            "čísla kanálů  se lépe pamatují",
            "je to jedno,  kterou  kombinaci  kanálů  použijeme"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Proč ve VF technice  postřibřujeme  vodiče?",
        "options": [
            "Snížíme  oxidaci  vodiče",
            "Zlepšíme  vodivost",
            "Zlepšíme  ohebnost",
            "Zvýšíme  odolnost  proti  přelomení  při opakovaném  ohybu"
        ],
        "correctIndices": [
            0,
            1
        ]
    },
    {
        "question": "Protokol  SMTP  slouží:",
        "options": [
            "k přenosu  hypertextových  stránek  WWW",
            "k předávání  souborů  mezi  poštovními  servery",
            "k přenosu  souborů  mezi  FTP serverem  a FTP klientem",
            "k předávání  mailů  mezi  poštovními  servery",
            "k odesílání  pošty  z poštovního  klienta  na poštovní  server"
        ],
        "correctIndices": [
            3,
            4
        ]
    },
    {
        "question": "Který  poštovní  protokol  pro příjem  pošty  ponechává  vždy maily  na poštovním  serveru ?",
        "options": [
            "IMAP",
            "POP3",
            "SMTP",
            "DHCP"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Protokol  HTTP  slouží:",
        "options": [
            "k přenosu  hypertextových  stránek  WWW",
            "k předávání  souborů  mezi  poštovními  servery",
            "k přenosu  souborů  mezi  FTP serverem  a FTP klientem"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Protokol  ICMP:",
        "options": [
            "umožňuje  routerům  posílat  chybové  a řídící  zprávy",
            "ostatním  routerům  i počítačům,  je součástí  IP",
            "je diagramová,  nepotvrzovaná  služba,  odpovídá  službě  IPX",
            "umožňuje  skupinové  adresování  počítačů  na úrovni",
            "internetové  vrstvy,  je součástí  IP"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Protokol  SPX je:",
        "options": [
            "spojovaná  nepotvrzovaná  služba",
            "nespojovaná  nepotvrzovaná  služba",
            "spojovaná  potvrzovaná  služba"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Protokol  IPX je:",
        "options": [
            "spojovaná  nepotvrzovaná  služba",
            "nespojovaná  nepotvrzovaná  služba",
            "spojovaná  potvrzovaná  služba"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Průběžná  změna  indexu  lomu  v jádře  se používá:",
        "options": [
            "pouze  u mnohovidových  vláken",
            "u jednovidových  i mnohovidových  vláken",
            "pouze  u jednovidových  vláken"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "První  adresa  v síti nebo  subsíti  je:",
        "options": [
            "adresa  sítě nebo  subsítě",
            "omezený  broadcast",
            "řízený  broadcast",
            "loopback",
            "adresa  počítače"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Předměty  zasahující  do Fresnelovy  zóny  zeslabují  přenášený signál:",
        "options": [
            "Pravda",
            "Nepravda"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Přenášený  signál  by neměl  mít",
        "options": [
            "stejnosměrnou  složku",
            "ani střídavou  ani stejnosměrnou  složku",
            "střídavou  složku"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Přenosová  rychlost  se udává  v?",
        "options": [
            "Hz",
            "B/s",
            "Bd",
            "b/s",
            "MB/s"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Přenosová  rychlost:",
        "options": [
            "udává  počet  přenesených  bitů za sekundu",
            "udává  počet  změn  signálu  za sekundu"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Přenosy  přes FO jsou náchylné  na EMS",
        "options": [
            "Pravda",
            "Nepravda"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Přeslech  mezi  vodiči:",
        "options": [
            "udává  rušení  signálem  ze sousední  antény",
            "udává  rušení  signálem  ze sousedního  domu",
            "udává  rušení  signálem  ze sousedního",
            "vedení",
            "udává  rušení  signálem  z nesousedního  vedení"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Při centrálním  přidělování  komunikačního  kanálu  je centrální  stanice :",
        "options": [
            "pověřena  úkolem  přidělovat  kapacitu  kanálu",
            "těm podřízeným  stanicím,  které  ji skutečně",
            "potřebují",
            "pověřena  vyhodnocováním  chybových  stavů  v síti -",
            "pověřena  pouze  funkcí  dohledu  na chod  sítě",
            "pověřena  evidencí  provozu  na síti"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Při centrálním  přidělování  na výzvu :",
        "options": [
            "centrální  stanice  se periodicky  dotazuje  všech",
            "podřízených  stanic,  zda nemají  připravena  data  k vysílání",
            "každá  stanice  má pro sebe vyhrazenou  malou  část přenosové",
            "kapacity  kanálu,  po které  může  kdykoliv  žádat  centrální  stanici  o",
            "přidělení  volného  přenosového  kanálu"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Při centrálním  rozdělování  na žádost :",
        "options": [
            "každá  stanice  má pro sebe vyhrazenou  malou  část",
            "přenosové  kapacity  kanálu,  po které  může  kdykoliv  žádat",
            "centrální",
            "stanici  o přidělení  volného  přenosového  kanálu",
            "centrální  stanice  se periodicky  dotazuje  všech  podřízených",
            "stanic,  zda nemají  připravena  data k vysílání"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Při distribuovaném  přidělování  typu Newhallův  kruh má-li stanice  data k vyslání  se postupně  dějí tyto činnosti:",
        "options": [
            "vysílající  stanice  odejme  datový  rámec  z kruhu,",
            "vygeneruje  a vyšle  peška  svému  následovníkovi  v kruhu",
            "změní  příznak  peška  na data,  nerozpojí  kruh a zahájí  vysílání",
            "datového  rámce",
            "změní  příznak  peška  na data,  rozpojí  kruh  a zahájí  vysílání",
            "datového  rámce",
            "vysílající  stanice  ponechá  datový  rámec  v kruhu,  vygeneruje  a",
            "vyšle  peška  svému  následovníkovi  v kruhu",
            "stanice,  které  je datový  rámec  určen  jej přečte  a potvrdí"
        ],
        "correctIndices": [
            0,
            4,
            8
        ]
    },
    {
        "question": "Při distribuovaném  přidělování  typu Newhallův  kruh:",
        "options": [
            "v síti koluje  vždy  jen jeden  rámec",
            "posuvný  registr  má vždy  délku  rámce",
            "počet  rámců  kolující  v síti se mění  dle zatížené  sítě",
            "v kruhu  koluje  pešek  (rámec  token)  nebo  datový",
            "rámec",
            "posuvný  registr  nemusí  mít velikost  rámce"
        ],
        "correctIndices": [
            0,
            3,
            5
        ]
    },
    {
        "question": "Při pozitivním  potvrzování  se posílají  potvrzovací  PDU:",
        "options": [
            "ACK  i NACK",
            "ACK",
            "NACK"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Při pozitivním  potvrzování  v kombinaci  s negativním potvrzováním  se posílají  potvrzovací  PDU:",
        "options": [
            "ACK  i NACK",
            "jen ACK",
            "jen NACK"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Při virtuálním  spoji:",
        "options": [
            "je paket  opatřen  cílovou  a zdrojovou  adresou  síťového",
            "protok olu",
            "se nevysílají  servisní  pakety,  jen pakety  s daty",
            "je paket  opatřen  pouze  identifikátorem  virtuálního  spoje"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Přijímač  u FO se skládá  z:",
        "options": [
            "zesilovače",
            "oddělovacího  optočlenu",
            "procesoru",
            "fotodetektoru"
        ],
        "correctIndices": [
            0,
            2,
            3
        ]
    },
    {
        "question": "Přímý  kabel  se používá  u Ethernetu  10 a 100Mb/s  k propojení  následujících  zařízení  (bez autodetekce  křížení):",
        "options": [
            "hub - router",
            "hub - hub",
            "switch  - switch",
            "router  - router",
            "PC - hub",
            "switch  -router",
            "bridge  -router",
            "PC - PC",
            "hub - switch",
            "PC - switch"
        ],
        "correctIndices": [
            0,
            4,
            5,
            6,
            9
        ]
    },
    {
        "question": "Přístupová  metoda  ALOHA  patří do:",
        "options": [
            "distribuovaného  přidělování",
            "náhodného  přístupu",
            "centrálního  přidělování"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Rámec  je:",
        "options": [
            "paket,  ke kterému  jsou připojeny  další  informace",
            "(MAC  adresy,  CRC,  ...)",
            "balík  dat o stanovené  délce",
            "balík  dat (mail,  soubor,  ...), který  přenášíme  po síti"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Registrované  porty  jsou v rozsahu:",
        "options": [
            "1024  až 49151",
            "49152  až 65535",
            "0 až 1023"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Všeobecně  známé  porty  jsou v rozsahu :",
        "options": [
            "1024  až 49151",
            "49152  až 65535",
            "0 až 1023"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "S kterým  aktivním  prvkem  ztrácí  CSMA/CD  u Ethernetu  s TP v plně duplexním  provozu  smysl?",
        "options": [
            "repeater",
            "switch",
            "router",
            "hub"
        ],
        "correctIndices": [
            1,
            2
        ]
    },
    {
        "question": "Seřaďte  jednotlivé  sítě podle  rozlehlosti  od nejmenší  po největší:",
        "options": [
            "LAN,  PAN,  MAN,  WAN",
            "PAN,  LAN,  MAN,  WAN",
            "LAN,  MAN,  PAN,  WAN",
            "PAN,  MAN,  LAN,  WAN"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Seřaďte  názvy  bezdrátových  sítí od nejrozsáhlejší  do nejméně  rozsáhlé  oblasti  bezdrátových  sítí:",
        "options": [
            "WLAN,  802.11  a Wi-Fi",
            "WLAN,  Wi-Fi a 802.11",
            "Wi-Fi, 802.3  a WLAN",
            "802.11,  Wi-Fi a WLAN"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Seřaďte  protokoly  dle rychlosti  od nejrychlejšího  k nejpomalejšímu  v izolované  LAN  do 10 PC:",
        "options": [
            "NetBEUI,  IPX/SPX,  TCP/IP",
            "TCP/IP,  IPX/SPX,  NetBEUI",
            "IPX/SPX,  TCP/IP,  NetBEUI"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Seřaďte  způsoby  šifrování  u WLAN  podle  účinnosti vzestupně  (z leva do prava):",
        "options": [
            "WEP,  WPA,  WPA2",
            "WEP,  WPA2,  WPA",
            "WPA2,  WEP,  WPA",
            "WPA2,  WPA,  WEP"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Signál  mezi  dvěma  anténami  se šíří:",
        "options": [
            "vně Fresnelovy  zóny",
            "uvnitř  Fresnelovy  zóny"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Síť CAN  má typickou  rozlehlost  řádově:",
        "options": [
            "v desítkách  až stovkách  metrů",
            "v desítkách  Km a více",
            "v jednotkách  až desítkách  Km",
            "v metrech",
            "ve stovkách  metrů  až jednotkách  Km"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Síť LAN  má typickou  rozlehlost  řádově:",
        "options": [
            "v jednotkách  až desítkách  Km",
            "ve stovkách  ,etrů až jednotkách  Km",
            "v desítkách  Km a více",
            "v metrech",
            "v desítkách  až stovkách  metrů"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Síť MAN  má typickou  rozlehlost  řádově:",
        "options": [
            "v jednotkách  až desítkách  km",
            "v metrech",
            "v desítkách  km a více",
            "v desítkách  až stovkách  metrů",
            "ve stovkách  metrů  až jednotkách  km"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Síť označená  jako LAN  patří mezi  sítě:",
        "options": [
            "soustředěné",
            "rozlehlé"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Síť PAN  má typickou  rozlehlost  řádově:",
        "options": [
            "ve stovkách  metrů  až jednotkách  Km",
            "v desítkách  Km a více",
            "v metrech",
            "v jednotkách  až desítkách  Km",
            "v desítkách  až stovkách  metrů"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Síť typu peer to peer můžeme  charakterizovat  následujícími výroky:",
        "options": [
            "server  zprostředkovává  komunikaci  mezi  klienty",
            "každý  počítač  může  pracovat  jako  klient  i jako",
            "jednoduchý  server",
            "nejsou  ostře  vyhraněné  funkce  počítačů",
            "většina  komunikace  probíhá  mezi  klientem  a serverem",
            "ostře  vyhraněná  funkce  počítačů"
        ],
        "correctIndices": [
            1,
            3
        ]
    },
    {
        "question": "Síť WAN  má typickou  rozlehlost  řádově:",
        "options": [
            "v jednotkách  až desítkách  km",
            "v metrech",
            "v desítkách  km a více",
            "v desítkách  až stovkách  metrů",
            "ve stovkách  metrů  až jednotkách  km"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Síť, poskytující  služby  a aplikace  uvnitř  organizace,  se nazývá:",
        "options": [
            "internet",
            "Internet",
            "extranet",
            "intranet"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Síť, poskytující  služby  a aplikace  vnějším  organizacím  a uživatelům,  se nazývá:",
        "options": [
            "internet",
            "Internet",
            "extranet",
            "intranet"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Síť, poskytující  služby  uvnitř  organizace,  se nazývá:",
        "options": [
            "internet",
            "Internet",
            "extranet",
            "intranet"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Síťový  protokol  je:",
        "options": [
            "Soubor  pravidel  umožňující  výměnu  dat v rámci  PC",
            "Soubor  pravidel  umožňující  instalovat  počítačovou  síť",
            "Soubor  pravidel  umožňující  výměnu  dat přes",
            "počítačovou  síť"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Skoková  změna  indexu  lomu  se používá:",
        "options": [
            "pouze  u jednovidových  vláken",
            "u jednovidových  i mnohovidových",
            "vláken",
            "pouze  u mnohovidových  vláken"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Snížení  napětí  signálu  v dB na 50% = (číslo  se znaménkem bez jednotek):",
        "options": [
            "-5",
            "+5",
            "-6",
            "+6"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "SSM  s hodnotou  255.255.255.192  nebo  /26 rozděluje  síť třídy  C na:",
        "options": [
            "32 SS",
            "8 SS",
            "16 SS",
            "64 SS",
            "2 SS",
            "4 SS"
        ],
        "correctIndices": [
            5
        ]
    },
    {
        "question": "SSM  s hodnotou  255.255.255.224  nebo  /27 rozděluje  síť třídy  C na:",
        "options": [
            "32 SS",
            "8 SS",
            "16 SS",
            "64 SS",
            "2 SS",
            "4 SS"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "SSM  s hodnotou  255.255.255.240  nebo  /28 rozděluje  síť třídy  C na:",
        "options": [
            "32 SS",
            "8 SS",
            "16 SS",
            "64 SS",
            "2 SS",
            "4 SS"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "SSM  s hodnotou  255.255.255.248  nebo  /29 rozděluje  síť třídy  C na:",
        "options": [
            "8 SS",
            "32 SS",
            "2 SS",
            "16 SS",
            "64 SS",
            "4 SS"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "SSM  s hodnotou  255.255.255.252  nebo  /30 rozděluje  síť třídy  C na:",
        "options": [
            "32 SS",
            "8 SS",
            "16 SS",
            "64 SS",
            "2 SS",
            "4 SS"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Stínění  koaxiálního  kabelu  může  být provedeno:",
        "options": [
            "vodivým  opletem",
            "kombinací  vodivým  opletem  a hliníkovou  fólií",
            "ani jedním  z uvedených  způsobů",
            "hliníkovou  fólií"
        ],
        "correctIndices": [
            0,
            1,
            3
        ]
    },
    {
        "question": "Stínění  u koaxiálního  kabelu:",
        "options": [
            "se může  uzemnit",
            "zapojí  se do ochrany  nulováním",
            "nikdy  se neuzemňuje",
            "se musí  uzemnit"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Šířka  pásma  u digitálního  signálu  se uvádí  v:",
        "options": [
            "b/s (bps)",
            "dB",
            "Hz",
            "Bd"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "TCP protokol  je:",
        "options": [
            "nepotvrzovaná  spojová  služba",
            "nepotvrzovaná  nespojovaná  služba",
            "potvrzovaná  spojová  služba"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Technologie  IEEE  802.11  nebyly  původně  určeny  pro WMAN  a WWAN .",
        "options": [
            "Nepravda",
            "Pravda"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Technologie  IEEE  802.11  se správně  označují  \"Bezdrátový ethernet \":",
        "options": [
            "Pravda",
            "Nepravda"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Technologie  WDM  umožňuje  na jednom  vlákně :",
        "options": [
            "použít  jen jednu  vlnovou  délku",
            "poloduplexní  provoz",
            "plněduplexní  provoz",
            "použít  více vlnových  délek",
            "simplexní  provoz"
        ],
        "correctIndices": [
            2,
            3,
            4
        ]
    },
    {
        "question": "Topologie  fyzická  sběrnice:",
        "options": [
            "obsahuje  aktivní  prvky",
            "přerušení  sběrnice  způsobí  výpadek  sítě",
            "musí  být zakončena  odpory",
            "zpráva  vyslaná  z daného  uzlu se šíří ke všem",
            "ostatním  uzlům  na sběrnici",
            "jako komunikační  médium  používá  TP"
        ],
        "correctIndices": [
            1,
            2,
            3
        ]
    },
    {
        "question": "TP můžeme  charakterizovat  těmito  parametry:",
        "options": [
            "snadné  připojování  jednotlivých  zařízení",
            "možnost  využití  i pro telefonní  (popř.  jiné)  rozvody",
            "nemožnost  využití  i pro telefonní  (popř.jiné)  rozvody",
            "STP má velmi  dobrou  ochranu  proti  EMI",
            "nesnadné  připojování  jednotlivých  zařízení",
            "STP má nedostačující  ochranu  proti  EMI",
            "vysoká  cena",
            "nízká  cena",
            "nesnadná  instalace",
            "snadná  instalace"
        ],
        "correctIndices": [
            0,
            1,
            3,
            7,
            9
        ]
    },
    {
        "question": "Třída  A má v prvním  byte zleva  IP adresy  hodnoty:",
        "options": [
            "224 až 239",
            "128 až 191",
            "192 až 223",
            "0 až 126",
            "240 až 255"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Třída  A používá  k adresování  sítí a uzlů:",
        "options": [
            "7b a 24b",
            "21b a 8b",
            "14b a 16b"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Třída  B používá  k adresování  sítí a uzlů:",
        "options": [
            "7b a 24b",
            "21b a 8b",
            "14b a 16b"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Třída  C má v první  byte zleva  IP adresy  hodnoty:",
        "options": [
            "128 až 191",
            "192 až 223",
            "224 až 239",
            "240 až 255",
            "0 až 126"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Třída  C používá  k adresování  sítí a uzlů:",
        "options": [
            "7b a 24b",
            "21b a 8b",
            "14b a 16b"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "U FO se používá  v rámci  jednoho  vlákna  většinou :",
        "options": [
            "poloduplexní  provoz",
            "simplexní  provoz",
            "fullduplexní  provoz"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "U které  přenosové  rychlosti  se nepoužívá  přístupová  metoda CSMA /CD?",
        "options": [
            "1Gb/s",
            "10Gb/s",
            "100Mb/s",
            "10Mb/s"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "U kterého  kódování  v základním  pásmu  jsou zakódovány binární  1 a 0 do úrovní  signálu ?",
        "options": [
            "bipolární  NRZI",
            "fázové  NRZ",
            "bipolární  NRZ"
        ],
        "correctIndices": [
            0,
            2
        ]
    },
    {
        "question": "U kterého  kódování  v základním  pásmu  jsou zakódovány binární  1 a 0 do změn  úrovní  (hran)  signálu?",
        "options": [
            "fázové  NRZ",
            "bipolární  NRZ",
            "bipolární  NRZI"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "U kterých  sítí se dnes používají  technologie  IEEE  802.11?",
        "options": [
            "WLAN",
            "WPAN",
            "WWAN",
            "WMAN"
        ],
        "correctIndices": [
            0,
            2,
            3
        ]
    },
    {
        "question": "U kterých  typů potvrzování  PDU  pokud  nejsou  v hlavičce číslovány  dojde  ke zdvojení  datového  PDU  ztrátou potvrzovacího  PDU  ACK?",
        "options": [
            "pozitivního  potvrzování",
            "kombinace  pozitivního  - negativního",
            "skupinového  potvrzování",
            "nesamostatného  potvrzování"
        ],
        "correctIndices": [
            0,
            1
        ]
    },
    {
        "question": "U metody  připoslechu  nosné :",
        "options": [
            "zahájíme  vysílání  jen pokud  je komunikační  kanál  volný",
            "nesledujeme  provoz  na komunikačním  kanálu",
            "zahájíme  vysílání  i když  není komunikační  kanál  volný",
            "sledujeme  provoz  na komunikačním  kanálu"
        ],
        "correctIndices": [
            0,
            3
        ]
    },
    {
        "question": "U náhodného  přístupu  není třeba  centrální  stanice.",
        "options": [
            "Pravda",
            "Nepravda"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "U stromové  topologie:",
        "options": [
            "se při havárii  kořenového  uzlu síť rozdělí  na více podsítí",
            "výpadek  uzlu nezpůsobí  výpadek  části sítě",
            "se pro přenos  dat využívají  dva kanály"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "U topologie  fyzická  sběrnice:",
        "options": [
            "výpadek  stanice  způsobuje  výpadek  sítě",
            "mohou  být další  stanice  připojeny  přes další  stanici",
            "připojení  stanice  je realizováno  pomocí  odboček",
            "každá  stanice  má přímý  přístup  ke sběrnici",
            "jsou všechny  stanice  připojeny  na jedno  vedení"
        ],
        "correctIndices": [
            2,
            3,
            4
        ]
    },
    {
        "question": "U TP je signál  přenášen  jako rozdíl:",
        "options": [
            "napětí  mezi  dvěma  vodiči",
            "napětí  mezi  dvěma  vodiči  plus rozdíl  napětí  mezi  jedním",
            "vodičem  a zemí",
            "napětí  mezi  jedním  vodičem  a zemí"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "U TP typu STP bývají  jednotlivé  páry stíněny:",
        "options": [
            "vodivým  opletem",
            "hliníkovou  fólií"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "U TP typu STP bývají  všechny  páry (jako  celek)  stíněny:",
        "options": [
            "vodivým  opletem",
            "hliníkovou  fólií"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "UDP  protokol  je:",
        "options": [
            "nepotrvzovaná  spojová  služba",
            "nepotvrzovaná  nespojovaná  služba",
            "potvrzovaná  spojovaná  služba"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Útlum  signálu  se uvádí  v:",
        "options": [
            "Hz",
            "Bd",
            "b/s (bps)",
            "dB"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "UTP  je citlivější  na šum než koaxiální  kabel:",
        "options": [
            "Nepravda",
            "Pravda"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "V čem se odlišují  verze  Ethernet  II a IEEE  802.3?",
        "options": [
            "konektory",
            "přístupovou  metodou",
            "kabely",
            "formátem  rámce"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "V jakých  jednotkách  se uvádí  přeslech  mezi  vodiči?",
        "options": [
            "W",
            "Bd",
            "dB",
            "mW"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "V jakých  případech  musíme  k propojení  sítě použít gateway ?",
        "options": [
            "v případě  neslučitelných  formátů  dat síťových",
            "aplikací,  např.  elektronické  pošty  (jiný  systém  adres,",
            "hlavičky  mailu,",
            "...)",
            "v případě,  že spojované  sítě používají  odlišný",
            "protokol",
            "v případě  neroutovatelného  protokolu"
        ],
        "correctIndices": [
            0,
            4
        ]
    },
    {
        "question": "V kruhové  fyzické  topologii:",
        "options": [
            "data  se pohybují  v kruhu  od odesílatele  postupně",
            "přes všechny  následníky  až k příjemci",
            "musí  být spoje  zakončeny  terminátory",
            "je počítač  připojen  pasivně  k síti",
            "je každý  počítač  zároveň  aktivním  prvkem",
            "počítač  přijatá  data  určená  jinému  převezme  a pošle  dál"
        ],
        "correctIndices": [
            0,
            4,
            5
        ]
    },
    {
        "question": "V kterém  období  vznikaly  první  počítačové  sítě?",
        "options": [
            "V počátku  80. let",
            "V počátku  70. let",
            "V počátku  50. let",
            "V počátku  60. let"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "V kterém  roce byl do ARPANETu  zaveden  DNS  systém ?",
        "options": [
            "1984",
            "1982",
            "1981",
            "1983"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "V kterém  roce byl zaveden  protokol  TCP/IP  do ARPANETu ?",
        "options": [
            "1982",
            "1983",
            "1981",
            "1984"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "V kterém  roce v ČSFR  zahájil  Internet  komerční  provoz ?",
        "options": [
            "1990",
            "1991",
            "1993",
            "1992"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "V kterém  roce vznikla  síť ARPANET ?",
        "options": [
            "1969",
            "1959",
            "1979",
            "1989"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "V kterém  roce vznikly  WWW  stránky ?",
        "options": [
            "1989",
            "1988",
            "1987",
            "1990"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "V kterých  položkách  se liší rámce  Ethernet  II a původní IEEE  802.3?",
        "options": [
            "začátkem  rámce",
            "kontrolním  součtem",
            "cílovou  a zdrojovu  adresou",
            "datovou  částí  (není  myšlen  obsah  datové  části)",
            "položkou  délka  nebo  typ rámce"
        ],
        "correctIndices": [
            0,
            3,
            4
        ]
    },
    {
        "question": "V přeloženém  pásmu  signál  modulujeme :",
        "options": [
            "sekvenčně",
            "amplitudov ě",
            "fázově",
            "frekvenčně",
            "indexsekven čně"
        ],
        "correctIndices": [
            1,
            2,
            3
        ]
    },
    {
        "question": "V rozlehlé  síti se v daném  okamžiku  šíří:",
        "options": [
            "1 paket",
            "více paketů"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "V soustředné  síti se v daném  okamžiku  šíří:",
        "options": [
            "4 pakety",
            "více paketů",
            "2 pakety",
            "1 paket"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "V topologii  typu fyzický  kruh:",
        "options": [
            "obsahuje  aktivní  prvky",
            "existuje  jednosměrný  řízený  tok dat",
            "každý  počítač  je propojen  přímo  s následujícím",
            "a s předchozím  počítačem  v kruhu",
            "výpadek  stanice  nezpůsobuje  výpadek  sítě",
            "každý  počítač  připojen  k síti elektricky  i logicky",
            "regeneruje  signál"
        ],
        "correctIndices": [
            1,
            2,
            5
        ]
    },
    {
        "question": "V základním  pásmu  může  koaxiální  kabel  přenášet :",
        "options": [
            "v základním  pásmu  se nepoužívá",
            "pouze  jeden  signál",
            "více signálů  na různých  nosných  frekvencích"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Ve frekvenčním  pásmu  2,4 Ghz pracují  zařízení  podle standa rdu:",
        "options": [
            "IEEE  802.11a",
            "IEEE  802.11h",
            "IEEE  802.11g",
            "IEEE  802.11b"
        ],
        "correctIndices": [
            2,
            3
        ]
    },
    {
        "question": "Ve frekvenčním  pásmu  5 Ghz pracují  zařízení  podle standa rdu:",
        "options": [
            "IEEE  802.11a",
            "IEEE  802.11h",
            "IEEE  802.11g",
            "IEEE  802.11b"
        ],
        "correctIndices": [
            0,
            1
        ]
    },
    {
        "question": "Ve fyzické  topologii  hvězda :",
        "options": [
            "je-li centrálním  prvkem  hub, je signál  šířen  jen k cílovému",
            "počítači",
            "výpadek  stanice  nezpůsobuje  výpadek",
            "sítě",
            "se jako centrální  uzel využívá  router",
            "vypadne -li centrální  uzel,  havaruje  celá",
            "síť",
            "data putují  v kruhu"
        ],
        "correctIndices": [
            2,
            5
        ]
    },
    {
        "question": "Vidová  disperze  o FO představuje :",
        "options": [
            "rozdíl  mezi  světelným  průběhem  s nejdelší  a nejkratší",
            "vlnovou  délkou",
            "rozdíl  mezi  nejrychlejším  a nejpomalejším  průběhem",
            "rozdíl  mezi  nejintezivnějším  a nejméně  intenzivním",
            "světelným průběhem"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Vidová  disperze  u FO se vyjadřuje  v: - s/km",
        "options": [
            "ns/m",
            "s/m",
            "ns/km"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Vlastnosti  sítě s přepojováním  paketů  jsou:",
        "options": [
            "rezervované  spoje  mezi  dvěma  počítači",
            "volný  kanál  po celou  dobu  spojení",
            "pakety  putují  z uzlu na uzel,  pokud  je volný  kanál",
            "použito  v Internetu  a vzájemně  propojených  LAN"
        ],
        "correctIndices": [
            2,
            3
        ]
    },
    {
        "question": "Vodiče  pro VF techniku  potahujeme  běžně  tenkou  vrstvou kovu:",
        "options": [
            "stříbra",
            "mědi",
            "zlata",
            "chromu"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "VPN  je označení  pro:",
        "options": [
            "virtuální  lokální  počítačovou  síť",
            "bezdrátovou  lokální  počítačovou  síť",
            "virtuální  privátní  síť"
        ],
        "correctIndices": [
            2
        ]
    },
    {
        "question": "Vyberte  vlastnosti  jednovidového  optického  vlákna  (v porovnání  s mnohovidov ým):",
        "options": [
            "zdrojem  světla  je laserová  dioda",
            "malé  jádro",
            "velké  jádro",
            "větší  rozptyl  a větší  ztráty  než mnohovidové  vlákno",
            "zdrojem  světla  je LED"
        ],
        "correctIndices": [
            0,
            1
        ]
    },
    {
        "question": "Vyberte  vlastnosti  mnohovidového  optického  vlákna  (v porovnání  s jednovidov ým):",
        "options": [
            "velké  jádro",
            "zdrojem  světla  je laser",
            "malé  jádro",
            "dovoluje  velké  rychlosti  na velké  vzdálenosti",
            "zdrojem  světla  je LED"
        ],
        "correctIndices": [
            0,
            4
        ]
    },
    {
        "question": "Wi-Fi u WLAN  je:",
        "options": [
            "pouze  \"nálepka\"",
            "doporučení",
            "standard",
            "norma"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Z jakých  částí se skládá  rámec:",
        "options": [
            "synchronizační  posloupnosti,  cílové  a zdrojové  adresy  MAC,",
            "zprávy  a CRC",
            "synchronizační  posloupnosti,  cílové  a zdrojové  adresy  MAC",
            "a CRC",
            "synchronizační  posloupnosti,  cílové  a zdrojové  adresy  MAC",
            "a paketu",
            "synchronizační  posloupnosti,  cílové  a zdrojové",
            "adresy  MAC,  paketu  a CRC"
        ],
        "correctIndices": [
            6
        ]
    },
    {
        "question": "Z kolika  byte je složena  adresa  verze  6?",
        "options": [
            "16",
            "8",
            "4"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Z kolika  byte je složena  SM IPV4?",
        "options": [
            "4",
            "16",
            "8"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Z kterých  částí je složeno  optické  vlákno?",
        "options": [
            "plášť  světlovodu",
            "vodivého  stínění",
            "dielektrika",
            "jádro",
            "vodivého  opletu",
            "obal"
        ],
        "correctIndices": [
            0,
            3,
            5
        ]
    },
    {
        "question": "Za Proxyserverem  s NATem  se mohou  použít:",
        "options": [
            "veřejné  i neveřejné  IP adresy",
            "veřejné  IP adresy",
            "neveřejné  IP adresy"
        ],
        "correctIndices": [
            0,
            1,
            2
        ]
    },
    {
        "question": "Zárodečnou  sítí Internetu  byla síť:",
        "options": [
            "PIVONET",
            "FIDONET",
            "FERNET",
            "BITNET",
            "ARPANET"
        ],
        "correctIndices": [
            4
        ]
    },
    {
        "question": "Zkratka  GAN  označuje:",
        "options": [
            "rozlehlou  síť",
            "městskou  síť",
            "síť rozsáhlejší  firmy,  univerzitní  síť, ...",
            "celosvětovou  síť"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Zkratka  LAN  označuje:",
        "options": [
            "Rozlehlou  síť",
            "Městskou  síť",
            "Síť rozsáhlejší  firmy,  univerzitní  síť",
            "Lokální  síť"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Zkratka  MAN  označuje:",
        "options": [
            "Síť rozsáhlejší  firmy,  univerzitní  síť",
            "Lokální  síť",
            "Rozlehlou  síť",
            "Městskou  síť"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Zkratka  PAN  označuje:",
        "options": [
            "osobní  síť",
            "rozlehlou  síť",
            "městskou  síť",
            "lokální  síť"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Zkratka  WAN  označuje:",
        "options": [
            "Lokální  síť",
            "Rozlehlou  síť",
            "Síť rozsáhlejší  firmy,  univerzitní  síť, ...",
            "Městskou  síť"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Zkreslení  signálu  přenosovým  kanálem  u metaliky  je způsob eno:",
        "options": [
            "Svodem  v izolaci  vodičů",
            "Indukčností  vodičů",
            "Sériovým  odporem",
            "vodičů",
            "Kapacitou  mezi  vodiči"
        ],
        "correctIndices": [
            0,
            1,
            2,
            4
        ]
    },
    {
        "question": "Zpráva  je:",
        "options": [
            "paket,  ke kterému  jsou připojeny  další  informace  (MAC",
            "adresy,  CRC,  ...)",
            "balík  dat o stanovené  délce",
            "balík  dat (mail,  soubor,  ...), který  přenášíme  po síti"
        ],
        "correctIndices": [
            3
        ]
    },
    {
        "question": "Na kterých  vrstvách  modelu  OSI jsou síťové  protokoly nezávislé  na cestě ?",
        "options": [
            "2. 3. 4. a 5.",
            "4. 5. 6. a 7.",
            "1. 2. 3. a 4.",
            "3. 4. 5. a 6."
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  FTP protokol ?",
        "options": [
            "4",
            "7",
            "5",
            "6"
        ],
        "correctIndices": [
            1
        ]
    },
    {
        "question": "Na které  vrstvě  modelu  OSI pracuje  TCP protokol?",
        "options": [
            "4",
            "7",
            "5",
            "6"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Co se stane  s hodnotou  TTL u TCP/IP  protokolu  při průchodu  routerem ?",
        "options": [
            "Hodnota  TTL  se zmenší  o",
            "1",
            "Hodnota  TTL zůstane  stejná",
            "Hodnota  TTL se zvětší  o 1"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Při dosažení  jaké hodnoty  TTL u protokolu  TCP/IP  router zahodí  PDU :",
        "options": [
            "0",
            "1",
            "-1",
            "16"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "V kterých  sítích  se dnes používají  technologie  IEEE  802.11?",
        "options": [
            "WMAN",
            "WLAN",
            "WWAN",
            "LAN",
            "CAN",
            "PAN",
            "VLAN"
        ],
        "correctIndices": [
            0,
            1,
            2
        ]
    },
    {
        "question": "Každá  vrstva  modelu  OSI:",
        "options": [
            "má přidělenou  činnost",
            "má přiřazenu  sadu  protokolů",
            "má dvě rozhraní",
            "má více rozhraní",
            "má jedno  rozhraní",
            "má přiřazen  pouze  jeden  protokol",
            "nemá  pevně  přidělenou  činnost"
        ],
        "correctIndices": [
            0,
            1,
            2
        ]
    },
    {
        "question": "Které  vrstvy  modelu  OSI zahrnuje  aplikační  vrstva  TCP/IP protoko lu?",
        "options": [
            "5 a 6",
            "6 a 7",
            "3 a 4",
            "4 a 5",
            "2 a 3"
        ],
        "correctIndices": [
            0,
            1
        ]
    },
    {
        "question": "Která  vrstva  modelu  OSI ISO pracuje  s pakety :",
        "options": [
            "Síťová  vrstva",
            "Transportní  vrstva",
            "Linková  vrstva",
            "Aplikační  vrstva"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Které  přenosové  rychlosti  používá  Ethernet?",
        "options": [
            "1 Mb/s",
            "4 Mb/s",
            "10 Mb/s",
            "40 Mb/s",
            "100 Mb/s",
            "1 Gb/s",
            "10 Gb/s",
            "40 Gb/s",
            "100Gb/s",
            "500 Gb/s"
        ],
        "correctIndices": [
            2,
            4,
            5,
            6,
            7,
            8
        ]
    },
    {
        "question": "První  standart  Ethernetu  se jmenoval :",
        "options": [
            "DIX",
            "ARPANET",
            "Internet"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Správný  tvar IPX/SPX  adresy  je:",
        "options": [
            "32b síť a 48b stanice",
            "48b síť a 32b stanice",
            "24b síť a 32b stanice"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Které  typy konektorů  nepatří  k FO?",
        "options": [
            "RJ-45",
            "RJ-11",
            "BNC",
            "FC",
            "SC",
            "ST",
            "E2000",
            "MTRJ"
        ],
        "correctIndices": [
            0,
            1,
            2
        ]
    },
    {
        "question": "Jaký jiný název  má datový  rozvaděč  (skříň)  pro strukturovanou  kabeláž?",
        "options": [
            "rack",
            "case",
            "patch"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Útlum  signálu  můžeme  vypočítat  z následujících  vzorců:",
        "options": [
            "20*log  (U2/U1)",
            "10*log  (P2/P1)",
            "10*log  (U1/U2)",
            "20*log  (P1/P2)"
        ],
        "correctIndices": [
            0,
            1
        ]
    },
    {
        "question": "Jak se jmenuje  ve zkratce  protokol  pro sdílení  souborů  a tiskáren  pod protokolem  NetBEUI?",
        "options": [
            "SMB",
            "FTP",
            "SMTP"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "V tzv. náhodném  přístupu :",
        "options": [
            "mohou  stanice  vysílat  kdykoliv",
            "mohou  stanice  vysílat  jen když  je kanál  volný"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Model  OSi rozděluje  činnost  v pc síti na:",
        "options": [
            "7 vrstev",
            "5 vrstev"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Která  vrstva  modelu  OSI ISO pracuje  se sériovou posloupností  bitů:",
        "options": [
            "Fyzická  vrstva",
            "Aplikační  vrstva",
            "Síťová  vrstva",
            "Linková  vrstva"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Které  vrstvy  modelu  OSI ISO pracují  se zprávami :",
        "options": [
            "Prezentační",
            "Aplikační",
            "Relační",
            "Fyzická",
            "Aplikační",
            "Síťová",
            "Linková"
        ],
        "correctIndices": [
            0,
            1,
            2
        ]
    },
    {
        "question": "V jaké číselné  soustavě  se zapisuje  IP adresa  ve verzi  6:",
        "options": [
            "Šestnáctkové",
            "Dvojkové",
            "Desítkové"
        ],
        "correctIndices": [
            0
        ]
    },
    {
        "question": "Vstupní  body  SAP v modelu  OSI umožňují :",
        "options": [
            "Paralelní  poskytování  nezávislých  služeb  několika",
            "uživatelům současně",
            "Poskytování  služeb  jednotlivým  uživatelům  zvlášť",
            "32-26 = 6 a 2 na 6 – 2 se rovná pocet  zarizeni podle prefixu"
        ],
        "correctIndices": [
            0
        ]
    }
];
