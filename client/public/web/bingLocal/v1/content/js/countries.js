function getCountryDetails() {

    var Countries = [{
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "AANA",
            "cityname": "Al Ain",
            "airportcode": "AAN",
            "airportname": "Al Ain"
        },
        {
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "AUHA",
            "cityname": "Abu Dhabi",
            "airportcode": "AUH",
            "airportname": "Abu Dhabi International"
        },
        {
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "DXBA",
            "cityname": "Dubai",
            "airportcode": "DWC",
            "airportname": "Dubai Al Maktoum International"
        },
        {
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "DXBA",
            "cityname": "Dubai",
            "airportcode": "DXB",
            "airportname": "Dubai"
        },
        {
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "DXBA",
            "cityname": "Dubai",
            "airportcode": "XMB",
            "airportname": "M'Bahiakro"
        },
        {
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "RKTA",
            "cityname": "Ras Al Khaimah",
            "airportcode": "RKT",
            "airportname": "Ras Al Khaimah"
        },
        {
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "SHJA",
            "cityname": "Sharjah",
            "airportcode": "SHJ",
            "airportname": "Sharjah"
        },
        {
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "XSBA",
            "cityname": "Sir Bani Yas Island",
            "airportcode": "XSB",
            "airportname": "Sir Bani Yas Island"
        },
        {
            "countrycode": "AE",
            "countryname": "United Arab Emirates",
            "citycode": "ZDYA",
            "cityname": "Delma Island",
            "airportcode": "ZDY",
            "airportname": "Delma"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "BINA",
            "cityname": "Bamiyan",
            "airportcode": "BIN",
            "airportname": "Bamiyan"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "BSTA",
            "cityname": "Bost",
            "airportcode": "BST",
            "airportname": "Bost"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "CCNA",
            "cityname": "Chakcharan",
            "airportcode": "CCN",
            "airportname": "Chakcharan"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "FAHA",
            "cityname": "Farah",
            "airportcode": "FAH",
            "airportname": "Farah"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "FBDA",
            "cityname": "Faizabad",
            "airportcode": "FBD",
            "airportname": "Faizabad"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "HEAA",
            "cityname": "Herat",
            "airportcode": "HEA",
            "airportname": "Herat"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "KBLA",
            "cityname": "Kabul",
            "airportcode": "KBL",
            "airportname": "Kabul"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "KDHA",
            "cityname": "Kandahar",
            "airportcode": "KDH",
            "airportname": "Kandahar"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "LQNA",
            "cityname": "Qala Nau",
            "airportcode": "LQN",
            "airportname": "Qala Nau"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "MMZA",
            "cityname": "Maimana",
            "airportcode": "MMZ",
            "airportname": "Maimana"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "MZRA",
            "cityname": "Mazar-I-Sharif",
            "airportcode": "MZR",
            "airportname": "Mazar-I-Sharif"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "SHAA",
            "cityname": "Sharana",
            "airportcode": "OAS",
            "airportname": "Sharana Airstrip"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "TIIA",
            "cityname": "Tirinkot",
            "airportcode": "TII",
            "airportname": "Tirinkot"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "UNDA",
            "cityname": "Kunduz",
            "airportcode": "UND",
            "airportname": "Kunduz"
        },
        {
            "countrycode": "AF",
            "countryname": "Afghanistan",
            "citycode": "ZAJA",
            "cityname": "Zaranj",
            "airportcode": "ZAJ",
            "airportname": "Zaranj"
        },
        {
            "countrycode": "AG",
            "countryname": "Antigua and Barbuda",
            "citycode": "ANUA",
            "cityname": "Saint John’s",
            "airportcode": "ANU",
            "airportname": "Saint John's"
        },
        {
            "countrycode": "AG",
            "countryname": "Antigua and Barbuda",
            "citycode": "BBQA",
            "cityname": "Barbuda",
            "airportcode": "BBQ",
            "airportname": "Barbuda"
        },
        {
            "countrycode": "AI",
            "countryname": "Anguilla",
            "citycode": "AXAA",
            "cityname": "The Valley",
            "airportcode": "AXA",
            "airportname": "The Valley"
        },
        {
            "countrycode": "AL",
            "countryname": "Albania",
            "citycode": "TIRA",
            "cityname": "Tirana",
            "airportcode": "TIA",
            "airportname": "Tirana"
        },
        {
            "countrycode": "AM",
            "countryname": "Armenia",
            "citycode": "EVNA",
            "cityname": "Yerevan",
            "airportcode": "EVN",
            "airportname": "Yerevan"
        },
        {
            "countrycode": "AM",
            "countryname": "Armenia",
            "citycode": "LWNA",
            "cityname": "Gyoumri",
            "airportcode": "LWN",
            "airportname": "Gyoumri"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "BUGA",
            "cityname": "Benguela",
            "airportcode": "BUG",
            "airportname": "Benguela"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "CABA",
            "cityname": "Cabinda",
            "airportcode": "CAB",
            "airportname": "Cabinda"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "CBTA",
            "cityname": "Catumbela",
            "airportcode": "CBT",
            "airportname": "Catumbela"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "LADA",
            "cityname": "Luanda",
            "airportcode": "LAD",
            "airportname": "Luanda"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "LUOA",
            "cityname": "Luena",
            "airportcode": "LUO",
            "airportname": "Luena"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "MSZA",
            "cityname": "Namibe",
            "airportcode": "MSZ",
            "airportname": "Namibe"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "NOVA",
            "cityname": "Huambo",
            "airportcode": "NOV",
            "airportname": "Huambo"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "NZAA",
            "cityname": "Nzagi",
            "airportcode": "NZA",
            "airportname": "Nzagi"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "SDDA",
            "cityname": "Lubango",
            "airportcode": "SDD",
            "airportname": "Lubango"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "SPPA",
            "cityname": "Menongue",
            "airportcode": "SPP",
            "airportname": "Menongue"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "SVPA",
            "cityname": "Kuito",
            "airportcode": "SVP",
            "airportname": "Kuito"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "SZAA",
            "cityname": "Soyo",
            "airportcode": "SZA",
            "airportname": "Soyo"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "VHCA",
            "cityname": "Saurimo",
            "airportcode": "VHC",
            "airportname": "Saurimo"
        },
        {
            "countrycode": "AO",
            "countryname": "Angola",
            "citycode": "VPEA",
            "cityname": "Ongiva",
            "airportcode": "VPE",
            "airportname": "Ongiva"
        },
        {
            "countrycode": "AQ",
            "countryname": "Antarctica",
            "citycode": "TNMA",
            "cityname": "Teniente R. Marsh",
            "airportcode": "TNM",
            "airportname": "Teniente R. Marsh"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "AFAA",
            "cityname": "San Rafael",
            "airportcode": "AFA",
            "airportname": "San Rafael"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "BHIA",
            "cityname": "Bahia Blanca",
            "airportcode": "BHI",
            "airportname": "Bahia Blanca"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "BRCA",
            "cityname": "San Carlos DeBariloche",
            "airportcode": "BRC",
            "airportname": "San Carlos DeBariloche"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "BUEA",
            "cityname": "Buenos Aires",
            "airportcode": "AEP",
            "airportname": "Buenos Aires Arpt. Jorge Newbery"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "BUEA",
            "cityname": "Buenos Aires",
            "airportcode": "EZE",
            "airportname": "Buenos Aires Ministro Pistarini"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "CNQA",
            "cityname": "Corrientes",
            "airportcode": "CNQ",
            "airportname": "Corrientes"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "CORA",
            "cityname": "Cordoba",
            "airportcode": "COR",
            "airportname": "Cordoba"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "CPCA",
            "cityname": "San Martin DeLos Andes",
            "airportcode": "CPC",
            "airportname": "San Martin DeLos Andes"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "CRDA",
            "cityname": "Comodoro Rivadavia",
            "airportcode": "CRD",
            "airportname": "Comodoro Rivadavia"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "CTCA",
            "cityname": "Catamarca",
            "airportcode": "CTC",
            "airportname": "Catamarca"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "EQSA",
            "cityname": "Esquel",
            "airportcode": "EQS",
            "airportname": "Esquel"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "FMAA",
            "cityname": "Formosa",
            "airportcode": "FMA",
            "airportname": "Formosa"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "FTEA",
            "cityname": "El Calafate",
            "airportcode": "FTE",
            "airportname": "El Calafate"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "IGRA",
            "cityname": "Iguazu",
            "airportcode": "IGR",
            "airportname": "Iguazu"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "IRJB",
            "cityname": "La Rioja",
            "airportcode": "IRJ",
            "airportname": "La Rioja"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "JUJA",
            "cityname": "Jujuy",
            "airportcode": "JUJ",
            "airportname": "Jujuy"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "MDQA",
            "cityname": "Mar Del Plata",
            "airportcode": "MDQ",
            "airportname": "Mar Del Plata"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "MDZA",
            "cityname": "Mendoza",
            "airportcode": "MDZ",
            "airportname": "Mendoza"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "NQNA",
            "cityname": "Neuquen",
            "airportcode": "NQN",
            "airportname": "Neuquen"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "PMYA",
            "cityname": "Puerto Madryn",
            "airportcode": "PMY",
            "airportname": "Puerto Madryn"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "PRAA",
            "cityname": "Parana",
            "airportcode": "PRA",
            "airportname": "Parana"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "PSSA",
            "cityname": "Posadas",
            "airportcode": "PSS",
            "airportname": "Posadas"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "RCQA",
            "cityname": "Reconquista",
            "airportcode": "RCQ",
            "airportname": "Reconquista"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "RELA",
            "cityname": "Trelew",
            "airportcode": "REL",
            "airportname": "Trelew"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "RESA",
            "cityname": "Resistencia",
            "airportcode": "RES",
            "airportname": "Resistencia"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "RGAA",
            "cityname": "Rio Grande",
            "airportcode": "RGA",
            "airportname": "Rio Grande"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "RGLA",
            "cityname": "Rio Gallegos",
            "airportcode": "RGL",
            "airportname": "Rio Gallegos"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "RHDA",
            "cityname": "Rio Hondo",
            "airportcode": "RHD",
            "airportname": "Rio Hondo"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "ROSA",
            "cityname": "Rosario",
            "airportcode": "ROS",
            "airportname": "Rosario"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "RSAA",
            "cityname": "Santa Rosa",
            "airportcode": "RSA",
            "airportname": "Santa Rosa"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "SANB",
            "cityname": "San Luis",
            "airportcode": "LUQ",
            "airportname": "San Luis"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "SDEA",
            "cityname": "Santiago Del Estero",
            "airportcode": "SDE",
            "airportname": "Santiago Del Estero"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "SFNA",
            "cityname": "Santa Fe",
            "airportcode": "SFN",
            "airportname": "Santa Fe"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "SLAA",
            "cityname": "Salta",
            "airportcode": "SLA",
            "airportname": "Salta"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "TUCA",
            "cityname": "Tucuman",
            "airportcode": "TUC",
            "airportname": "Tucuman"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "UAQA",
            "cityname": "San Juan",
            "airportcode": "UAQ",
            "airportname": "San Juan"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "USHA",
            "cityname": "Ushuaia",
            "airportcode": "USH",
            "airportname": "Ushuaia"
        },
        {
            "countrycode": "AR",
            "countryname": "Argentina",
            "citycode": "VDMA",
            "cityname": "Viedma",
            "airportcode": "VDM",
            "airportname": "Viedma"
        },
        {
            "countrycode": "AS",
            "countryname": "American Samoa",
            "citycode": "PPGA",
            "cityname": "Pago Pago",
            "airportcode": "PPG",
            "airportname": "Pago Pago"
        },
        {
            "countrycode": "AT",
            "countryname": "Austria",
            "citycode": "GRAZ",
            "cityname": "Graz",
            "airportcode": "GRZ",
            "airportname": "Graz"
        },
        {
            "countrycode": "AT",
            "countryname": "Austria",
            "citycode": "INNS",
            "cityname": "Innsbruck",
            "airportcode": "INN",
            "airportname": "Innsbruck"
        },
        {
            "countrycode": "AT",
            "countryname": "Austria",
            "citycode": "KLAG",
            "cityname": "Klagenfurt",
            "airportcode": "KLU",
            "airportname": "Klagenfurt"
        },
        {
            "countrycode": "AT",
            "countryname": "Austria",
            "citycode": "LINZ",
            "cityname": "Linz",
            "airportcode": "LNZ",
            "airportname": "Linz"
        },
        {
            "countrycode": "AT",
            "countryname": "Austria",
            "citycode": "SALZ",
            "cityname": "Salzburg",
            "airportcode": "SZG",
            "airportname": "Salzburg"
        },
        {
            "countrycode": "AT",
            "countryname": "Austria",
            "citycode": "VIEN",
            "cityname": "Vienna",
            "airportcode": "VIE",
            "airportname": "Vienna"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ADOA",
            "cityname": "Andamooka",
            "airportcode": "ADO",
            "airportname": "Andamooka"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BDDA",
            "cityname": "Badu Island",
            "airportcode": "BDD",
            "airportname": "Badu Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BFCA",
            "cityname": "Bloomfield",
            "airportcode": "BFC",
            "airportname": "Bloomfield"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BQBA",
            "cityname": "Bussellton",
            "airportcode": "BQB",
            "airportname": "Busselton"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BRTA",
            "cityname": "Bathurst Island",
            "airportcode": "BRT",
            "airportname": "Bathurst Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CAZA",
            "cityname": "Cobar",
            "airportcode": "CAZ",
            "airportname": "Cobar"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CBIA",
            "cityname": "Cape Barren Island",
            "airportcode": "CBI",
            "airportname": "Cape Barren Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CCLA",
            "cityname": "Chinchilla",
            "airportcode": "CCL",
            "airportname": "Chinchilla"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CKIA",
            "cityname": "Croker Island",
            "airportcode": "CKI",
            "airportname": "Croker Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CMDA",
            "cityname": "Cootamundra",
            "airportcode": "CMD",
            "airportname": "Cootamundra"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CNCA",
            "cityname": "Coconut Island",
            "airportcode": "CNC",
            "airportname": "Coconut Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "DRBA",
            "cityname": "Derby",
            "airportcode": "DRB",
            "airportname": "Derby"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "FIZA",
            "cityname": "Fitzroy Crossing",
            "airportcode": "FIZ",
            "airportname": "Fitzroy Crossing"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GBLA",
            "cityname": "Goulburn Island",
            "airportcode": "GBL",
            "airportname": "Goulburn Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GICA",
            "cityname": "Boigu Island",
            "airportcode": "GIC",
            "airportname": "Boigu Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GPNA",
            "cityname": "Garden Point",
            "airportcode": "GPN",
            "airportname": "Garden Point"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GYLA",
            "cityname": "Argyle",
            "airportcode": "GYL",
            "airportname": "Argyle"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "HCQA",
            "cityname": "Halls Creek",
            "airportcode": "HCQ",
            "airportname": "Halls Creek"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "HGDA",
            "cityname": "Hughenden",
            "airportcode": "HGD",
            "airportname": "Hughenden"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "HISA",
            "cityname": "Hayman Island",
            "airportcode": "HIS",
            "airportname": "Hayman Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "JCKA",
            "cityname": "Julia Creek",
            "airportcode": "JCK",
            "airportname": "Julia Creek"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KCSA",
            "cityname": "Kings Creek Station",
            "airportcode": "KCS",
            "airportname": "Kings Creek Station"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KRBA",
            "cityname": "Karumba",
            "airportcode": "KRB",
            "airportname": "Karumba"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KTRA",
            "cityname": "Katherine",
            "airportcode": "KTR",
            "airportname": "Katherine"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KUGA",
            "cityname": "Kubin Island",
            "airportcode": "KUG",
            "airportname": "Kubin Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LELA",
            "cityname": "Lake Evella",
            "airportcode": "LEL",
            "airportname": "Lake Evella"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LLGA",
            "cityname": "Chillagoe",
            "airportcode": "LLG",
            "airportname": "Chillagoe"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LZRA",
            "cityname": "Lizard Island",
            "airportcode": "LZR",
            "airportname": "Lizard Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MMMA",
            "cityname": "Middlemount",
            "airportcode": "MMM",
            "airportname": "Middlemount"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MOVA",
            "cityname": "Moranbah",
            "airportcode": "MOV",
            "airportname": "Moranbah"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MYIA",
            "cityname": "Murray Island",
            "airportcode": "MYI",
            "airportname": "Murray Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "NIFA",
            "cityname": "Nifty",
            "airportcode": "NIF",
            "airportname": "Nifty"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "NLFA",
            "cityname": "Darnley Island",
            "airportcode": "NLF",
            "airportname": "Darnley Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "NLKN",
            "cityname": "Norfolk Island",
            "airportcode": "NLK",
            "airportname": "Norfolk Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "OKRA",
            "cityname": "Yorke Island",
            "airportcode": "OKR",
            "airportname": "Yorke Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ONSA",
            "cityname": "Onslow",
            "airportcode": "ONS",
            "airportname": "Onslow"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "OOMA",
            "cityname": "Cooma",
            "airportcode": "OOM",
            "airportname": "Cooma"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PMKA",
            "cityname": "Palm Island",
            "airportcode": "PMK",
            "airportname": "Palm Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PTJA",
            "cityname": "Portland",
            "airportcode": "PTJ",
            "airportname": "Portland"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PUGA",
            "cityname": "Port Augusta",
            "airportcode": "PUG",
            "airportname": "Port Augusta"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "RAMA",
            "cityname": "Ramingining",
            "airportcode": "RAM",
            "airportname": "Ramingining"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "RCMA",
            "cityname": "Richmond",
            "airportcode": "RCM",
            "airportname": "Richmond"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "SBRA",
            "cityname": "Saibai Island",
            "airportcode": "SBR",
            "airportname": "Saibai Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "SNBA",
            "cityname": "Snake Bay",
            "airportcode": "SNB",
            "airportname": "Snake Bay"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "SYUA",
            "cityname": "Sue Island",
            "airportcode": "SYU",
            "airportname": "Sue Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "TCAA",
            "cityname": "Tennant Creek",
            "airportcode": "TCA",
            "airportname": "Tennant Creek"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "TWBA",
            "cityname": "Toowoomba",
            "airportcode": "WTB",
            "airportname": "Brisbane West Wellcamp"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "UBBA",
            "cityname": "Mabuiag Island",
            "airportcode": "UBB",
            "airportname": "Mabuiag Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "WANA",
            "cityname": "Waverney",
            "airportcode": "WAN",
            "airportname": "Waverney"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "WINA",
            "cityname": "Winton",
            "airportcode": "WIN",
            "airportname": "Winton"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "WMBA",
            "cityname": "Warrnambool",
            "airportcode": "WMB",
            "airportname": "Warrnambool"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "XMYA",
            "cityname": "Yam Island",
            "airportcode": "XMY",
            "airportname": "Yam Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "XTOA",
            "cityname": "Taroom",
            "airportcode": "XTO",
            "airportname": "Taroom"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CBRA",
            "cityname": "Canberra",
            "airportcode": "CBR",
            "airportname": "Canberra"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ABXA",
            "cityname": "Albury",
            "airportcode": "ABX",
            "airportname": "Albury"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ARMA",
            "cityname": "Armidale",
            "airportcode": "ARM",
            "airportname": "Armidale"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BHQA",
            "cityname": "Broken Hill",
            "airportcode": "BHQ",
            "airportname": "Broken Hill"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BHSA",
            "cityname": "Bathurst",
            "airportcode": "BHS",
            "airportname": "Bathurst"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BNKA",
            "cityname": "Ballina",
            "airportcode": "BNK",
            "airportname": "Ballina"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CFSA",
            "cityname": "Coffs Harbour",
            "airportcode": "CFS",
            "airportname": "Coffs Harbour"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "DBOA",
            "cityname": "Dubbo",
            "airportcode": "DBO",
            "airportname": "Dubbo"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GFFA",
            "cityname": "Griffith",
            "airportcode": "GFF",
            "airportname": "Griffith"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GFNA",
            "cityname": "Grafton",
            "airportcode": "GFN",
            "airportname": "Grafton"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LDHA",
            "cityname": "Lord Howe Island",
            "airportcode": "LDH",
            "airportname": "Lord Howe Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LSYA",
            "cityname": "Lismore",
            "airportcode": "LSY",
            "airportname": "Lismore"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MIMA",
            "cityname": "Merimbula",
            "airportcode": "MIM",
            "airportname": "Merimbula"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MRZA",
            "cityname": "Moree",
            "airportcode": "MRZ",
            "airportname": "Moree"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MYAA",
            "cityname": "Moruya",
            "airportcode": "MYA",
            "airportname": "Moruya"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "NAAA",
            "cityname": "Narrabri",
            "airportcode": "NAA",
            "airportname": "Narrabri"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "NRAA",
            "cityname": "Narrandera",
            "airportcode": "NRA",
            "airportname": "Narrandera"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "NTLA",
            "cityname": "Newcastle",
            "airportcode": "NTL",
            "airportname": "Newcastle Williamtown"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "OAGA",
            "cityname": "Orange",
            "airportcode": "OAG",
            "airportname": "Orange"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PKEA",
            "cityname": "Parkes",
            "airportcode": "PKE",
            "airportname": "Parkes"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PQQA",
            "cityname": "Port Macquarie",
            "airportcode": "PQQ",
            "airportname": "Port Macquarie"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "SYDA",
            "cityname": "Sydney",
            "airportcode": "SYD",
            "airportname": "Sydney Kingsford Smith"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "TMWA",
            "cityname": "Tamworth",
            "airportcode": "TMW",
            "airportname": "Tamworth"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "TROA",
            "cityname": "Taree",
            "airportcode": "TRO",
            "airportname": "Taree"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "WGAA",
            "cityname": "Wagga Wagga",
            "airportcode": "WGA",
            "airportname": "Wagga Wagga"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ASPA",
            "cityname": "Alice Springs",
            "airportcode": "ASP",
            "airportname": "Alice Springs"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "AYQA",
            "cityname": "Ayers Rock",
            "airportcode": "AYQ",
            "airportname": "Ayers Rock"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "DRWA",
            "cityname": "Darwin",
            "airportcode": "DRW",
            "airportname": "Darwin"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ELCA",
            "cityname": "Elcho Island",
            "airportcode": "ELC",
            "airportname": "Elcho Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GOVA",
            "cityname": "Gove",
            "airportcode": "GOV",
            "airportname": "Gove"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GTEA",
            "cityname": "Groote Eylandt",
            "airportcode": "GTE",
            "airportname": "Groote Eylandt"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GTSA",
            "cityname": "Granites",
            "airportcode": "GTS",
            "airportname": "Granites"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MCVA",
            "cityname": "Mcarthur River",
            "airportcode": "MCV",
            "airportname": "Mcarthur River"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MGTA",
            "cityname": "Milingimbi",
            "airportcode": "MGT",
            "airportname": "Milingimbi"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MNGA",
            "cityname": "Maningrida",
            "airportcode": "MNG",
            "airportname": "Maningrida"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ABMA",
            "cityname": "Bamaga",
            "airportcode": "ABM",
            "airportname": "Bamaga"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "AUUA",
            "cityname": "Aurukun Mission",
            "airportcode": "AUU",
            "airportname": "Aurukun Mission"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BCIA",
            "cityname": "Barcaldine",
            "airportcode": "BCI",
            "airportname": "Barcaldine"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BDBA",
            "cityname": "Bundaberg",
            "airportcode": "BDB",
            "airportname": "Bundaberg"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BEUA",
            "cityname": "Bedourie",
            "airportcode": "BEU",
            "airportname": "Bedourie"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BKQA",
            "cityname": "Blackall",
            "airportcode": "BKQ",
            "airportname": "Blackall"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BNEA",
            "cityname": "Brisbane",
            "airportcode": "BNE",
            "airportname": "Brisbane"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BQLA",
            "cityname": "Boulia",
            "airportcode": "BQL",
            "airportname": "Boulia"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BUCA",
            "cityname": "Burketown",
            "airportcode": "BUC",
            "airportname": "Burketown"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BVIA",
            "cityname": "Birdsville",
            "airportcode": "BVI",
            "airportname": "Birdsville"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CMAA",
            "cityname": "Cunnamulla",
            "airportcode": "CMA",
            "airportname": "Cunnamulla"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CNJA",
            "cityname": "Cloncurry",
            "airportcode": "CNJ",
            "airportname": "Cloncurry"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CNSA",
            "cityname": "Cairns",
            "airportcode": "CNS",
            "airportname": "Cairns"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CTLA",
            "cityname": "Charleville",
            "airportcode": "CTL",
            "airportname": "Charleville"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CTNA",
            "cityname": "Cooktown",
            "airportcode": "CTN",
            "airportname": "Cooktown"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CUQA",
            "cityname": "Coen",
            "airportcode": "CUQ",
            "airportname": "Coen"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "DMDA",
            "cityname": "Doomadgee",
            "airportcode": "DMD",
            "airportname": "Doomadgee"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "EDRA",
            "cityname": "Edward River",
            "airportcode": "EDR",
            "airportname": "Edward River"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "EMDA",
            "cityname": "Emerald",
            "airportcode": "EMD",
            "airportname": "Emerald"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GLTA",
            "cityname": "Gladstone",
            "airportcode": "GLT",
            "airportname": "Gladstone"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "HIDA",
            "cityname": "Horn Island",
            "airportcode": "HID",
            "airportname": "Horn Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "HTIA",
            "cityname": "Hamilton Island",
            "airportcode": "HTI",
            "airportname": "Hamilton Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "HVBA",
            "cityname": "Hervey Bay",
            "airportcode": "HVB",
            "airportname": "Hervey Bay"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "IRGA",
            "cityname": "Lockhart River",
            "airportcode": "IRG",
            "airportname": "Lockhart River"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ISAA",
            "cityname": "Mount Isa",
            "airportcode": "ISA",
            "airportname": "Mount Isa"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KWMA",
            "cityname": "Kowanyama",
            "airportcode": "KWM",
            "airportname": "Kowanyama"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LREA",
            "cityname": "Longreach",
            "airportcode": "LRE",
            "airportname": "Longreach"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MCYA",
            "cityname": "Sunshine Coast",
            "airportcode": "MCY",
            "airportname": "Sunshine Coast"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MKYA",
            "cityname": "Mackay",
            "airportcode": "MKY",
            "airportname": "Mackay"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "NTNA",
            "cityname": "Normanton",
            "airportcode": "NTN",
            "airportname": "Normanton"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ONGA",
            "cityname": "Mornington",
            "airportcode": "ONG",
            "airportname": "Mornington"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "OOLA",
            "cityname": "Gold Coast",
            "airportcode": "OOL",
            "airportname": "Gold Coast"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PPPA",
            "cityname": "Proserpine",
            "airportcode": "PPP",
            "airportname": "Proserpine"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "RMAA",
            "cityname": "Roma",
            "airportcode": "RMA",
            "airportname": "Roma"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ROKA",
            "cityname": "Rockhampton",
            "airportcode": "ROK",
            "airportname": "Rockhampton"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "SGOA",
            "cityname": "St George",
            "airportcode": "SGO",
            "airportname": "St George"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "TSVA",
            "cityname": "Townsville",
            "airportcode": "TSV",
            "airportname": "Townsville"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "TWBA",
            "cityname": "Toowoomba",
            "airportcode": "TWB",
            "airportname": "Toowoomba"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ULPA",
            "cityname": "Quilpie",
            "airportcode": "ULP",
            "airportname": "Quilpie"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "WEIA",
            "cityname": "Weipa",
            "airportcode": "WEI",
            "airportname": "Weipa"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "WNRA",
            "cityname": "Windorah",
            "airportcode": "WNR",
            "airportname": "Windorah"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "XTGA",
            "cityname": "Thargomindah",
            "airportcode": "XTG",
            "airportname": "Thargomindah"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ZBLA",
            "cityname": "Biloela",
            "airportcode": "ZBL",
            "airportname": "Biloela"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ADLA",
            "cityname": "Adelaide",
            "airportcode": "ADL",
            "airportname": "Adelaide"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CEDA",
            "cityname": "Ceduna",
            "airportcode": "CED",
            "airportname": "Ceduna"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CPDA",
            "cityname": "Coober Pedy",
            "airportcode": "CPD",
            "airportname": "Coober Pedy"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KGCA",
            "cityname": "Kingscote",
            "airportcode": "KGC",
            "airportname": "Kingscote"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MGBA",
            "cityname": "Mount Gambier",
            "airportcode": "MGB",
            "airportname": "Mount Gambier"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "OLPA",
            "cityname": "Olympic Dam",
            "airportcode": "OLP",
            "airportname": "Olympic Dam"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PLOA",
            "cityname": "Port Lincoln",
            "airportcode": "PLO",
            "airportname": "Port Lincoln"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "WYAA",
            "cityname": "Whyalla",
            "airportcode": "WYA",
            "airportname": "Whyalla"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BWTA",
            "cityname": "Burnie",
            "airportcode": "BWT",
            "airportname": "Burnie"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "DPOA",
            "cityname": "Devonport",
            "airportcode": "DPO",
            "airportname": "Devonport"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "FLSA",
            "cityname": "Flinders Island",
            "airportcode": "FLS",
            "airportname": "Flinders Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "HBAA",
            "cityname": "Hobart",
            "airportcode": "HBA",
            "airportname": "Hobart"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KNSA",
            "cityname": "King Island",
            "airportcode": "KNS",
            "airportname": "King Island"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LSTA",
            "cityname": "Launceston",
            "airportcode": "LST",
            "airportname": "Launceston"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MELA",
            "cityname": "Melbourne",
            "airportcode": "AVV",
            "airportname": "Melbourne Avalon"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MELA",
            "cityname": "Melbourne",
            "airportcode": "MEB",
            "airportname": "Melbourne Essendon"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MELA",
            "cityname": "Melbourne",
            "airportcode": "MEL",
            "airportname": "Melbourne Tullamarine"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MHUA",
            "cityname": "Mount Hotham",
            "airportcode": "MHU",
            "airportname": "Mount Hotham"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MQLA",
            "cityname": "Mildura",
            "airportcode": "MQL",
            "airportname": "Mildura"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ALHA",
            "cityname": "Albany",
            "airportcode": "ALH",
            "airportname": "Albany"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "BMEA",
            "cityname": "Broome",
            "airportcode": "BME",
            "airportname": "Broome"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "CVQA",
            "cityname": "Carnarvon",
            "airportcode": "CVQ",
            "airportname": "Carnarvon"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "DRBA",
            "cityname": "Derby",
            "airportcode": "DCN",
            "airportname": "Derby Curtin"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "EPRA",
            "cityname": "Esperance",
            "airportcode": "EPR",
            "airportname": "Esperance"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "GETA",
            "cityname": "Geraldton",
            "airportcode": "GET",
            "airportname": "Geraldton"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KGIA",
            "cityname": "Kalgoorlie",
            "airportcode": "KGI",
            "airportname": "Kalgoorlie"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KNXA",
            "cityname": "Kununurra",
            "airportcode": "KNX",
            "airportname": "Kununurra"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "KTAA",
            "cityname": "Karratha",
            "airportcode": "KTA",
            "airportname": "Karratha"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LEAA",
            "cityname": "Learmonth",
            "airportcode": "LEA",
            "airportname": "Learmonth"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LNOA",
            "cityname": "Leonora",
            "airportcode": "LNO",
            "airportname": "Leonora"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "LVOA",
            "cityname": "Laverton",
            "airportcode": "LVO",
            "airportname": "Laverton"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MJKA",
            "cityname": "Monkey Mia",
            "airportcode": "MJK",
            "airportname": "Monkey Mia"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MKRA",
            "cityname": "Meekatharra",
            "airportcode": "MKR",
            "airportname": "Meekatharra"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "MMGA",
            "cityname": "Mount Magnet",
            "airportcode": "MMG",
            "airportname": "Mount Magnet"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PBOA",
            "cityname": "Paraburdoo",
            "airportcode": "PBO",
            "airportname": "Paraburdoo"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PERA",
            "cityname": "Perth",
            "airportcode": "PER",
            "airportname": "Perth"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "PHEA",
            "cityname": "Port Hedland",
            "airportcode": "PHE",
            "airportname": "Port Hedland"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "RVTA",
            "cityname": "Ravensthorpe",
            "airportcode": "RVT",
            "airportname": "Ravensthorpe"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "WUNA",
            "cityname": "Wiluna",
            "airportcode": "WUN",
            "airportname": "Wiluna"
        },
        {
            "countrycode": "AU",
            "countryname": "Australia",
            "citycode": "ZNEA",
            "cityname": "Newman",
            "airportcode": "ZNE",
            "airportname": "Newman"
        },
        {
            "countrycode": "AW",
            "countryname": "Aruba",
            "citycode": "AUAA",
            "cityname": "Oranjestad",
            "airportcode": "AUA",
            "airportname": "Oranjestad"
        },
        {
            "countrycode": "AZ",
            "countryname": "Azerbaijan",
            "citycode": "BAKA",
            "cityname": "Baku",
            "airportcode": "GYD",
            "airportname": "Baku Heydar Aliyev International"
        },
        {
            "countrycode": "AZ",
            "countryname": "Azerbaijan",
            "citycode": "KVDA",
            "cityname": "Gyandzha",
            "airportcode": "KVD",
            "airportname": "Gyandzha"
        },
        {
            "countrycode": "AZ",
            "countryname": "Azerbaijan",
            "citycode": "LANK",
            "cityname": "Lankaran",
            "airportcode": "LLK",
            "airportname": "Lankaran International"
        },
        {
            "countrycode": "AZ",
            "countryname": "Azerbaijan",
            "citycode": "NAJA",
            "cityname": "Nakhichevan",
            "airportcode": "NAJ",
            "airportname": "Nakhichevan"
        },
        {
            "countrycode": "AZ",
            "countryname": "Azerbaijan",
            "citycode": "QABA",
            "cityname": "Qabala",
            "airportcode": "GBB",
            "airportname": "Qabala"
        },
        {
            "countrycode": "BA",
            "countryname": "Bosnia and Herzegovina",
            "citycode": "BANJ",
            "cityname": "Banja Luka",
            "airportcode": "BNX",
            "airportname": "Banja Luka"
        },
        {
            "countrycode": "BA",
            "countryname": "Bosnia and Herzegovina",
            "citycode": "MOST",
            "cityname": "Mostar",
            "airportcode": "OMO",
            "airportname": "Mostar"
        },
        {
            "countrycode": "BA",
            "countryname": "Bosnia and Herzegovina",
            "citycode": "SARA",
            "cityname": "Sarajevo",
            "airportcode": "SJJ",
            "airportname": "Sarajevo International"
        },
        {
            "countrycode": "BA",
            "countryname": "Bosnia and Herzegovina",
            "citycode": "TZLA",
            "cityname": "Tuzla",
            "airportcode": "TZL",
            "airportname": "Tuzla"
        },
        {
            "countrycode": "BB",
            "countryname": "Barbados",
            "citycode": "BGIA",
            "cityname": "Bridgetown",
            "airportcode": "BGI",
            "airportname": "Bridgetown"
        },
        {
            "countrycode": "BD",
            "countryname": "Bangladesh",
            "citycode": "BZLA",
            "cityname": "Barisal",
            "airportcode": "BZL",
            "airportname": "Barisal"
        },
        {
            "countrycode": "BD",
            "countryname": "Bangladesh",
            "citycode": "CGPA",
            "cityname": "Chittagong",
            "airportcode": "CGP",
            "airportname": "Chittagong"
        },
        {
            "countrycode": "BD",
            "countryname": "Bangladesh",
            "citycode": "CXBA",
            "cityname": "Cox's Bazar",
            "airportcode": "CXB",
            "airportname": "Cox's Bazar"
        },
        {
            "countrycode": "BD",
            "countryname": "Bangladesh",
            "citycode": "DACA",
            "cityname": "Dhaka",
            "airportcode": "DAC",
            "airportname": "Dhaka"
        },
        {
            "countrycode": "BD",
            "countryname": "Bangladesh",
            "citycode": "JSRA",
            "cityname": "Jessore",
            "airportcode": "JSR",
            "airportname": "Jessore"
        },
        {
            "countrycode": "BD",
            "countryname": "Bangladesh",
            "citycode": "RJHA",
            "cityname": "Rajshahi",
            "airportcode": "RJH",
            "airportname": "Rajshahi"
        },
        {
            "countrycode": "BD",
            "countryname": "Bangladesh",
            "citycode": "SPDA",
            "cityname": "Saidpur",
            "airportcode": "SPD",
            "airportname": "Saidpur"
        },
        {
            "countrycode": "BD",
            "countryname": "Bangladesh",
            "citycode": "ZYLA",
            "cityname": "Sylhet",
            "airportcode": "ZYL",
            "airportname": "Sylhet"
        },
        {
            "countrycode": "BE",
            "countryname": "Belgium",
            "citycode": "ANTW",
            "cityname": "Antwerp",
            "airportcode": "ANR",
            "airportname": "Antwerp Deurne"
        },
        {
            "countrycode": "BE",
            "countryname": "Belgium",
            "citycode": "BRUS",
            "cityname": "Brussels",
            "airportcode": "BRU",
            "airportname": "Brussels International"
        },
        {
            "countrycode": "BE",
            "countryname": "Belgium",
            "citycode": "BRUS",
            "cityname": "Brussels",
            "airportcode": "CRL",
            "airportname": "Brussels S. Charleroi"
        },
        {
            "countrycode": "BE",
            "countryname": "Belgium",
            "citycode": "LIEG",
            "cityname": "Liege",
            "airportcode": "LGG",
            "airportname": "Liege"
        },
        {
            "countrycode": "BE",
            "countryname": "Belgium",
            "citycode": "OSTA",
            "cityname": "Ostend",
            "airportcode": "OST",
            "airportname": "Ostend - Bruges"
        },
        {
            "countrycode": "BF",
            "countryname": "Burkina Faso",
            "citycode": "BOYA",
            "cityname": "Bobo Dioulasso",
            "airportcode": "BOY",
            "airportname": "Bobo Dioulasso"
        },
        {
            "countrycode": "BF",
            "countryname": "Burkina Faso",
            "citycode": "OUAA",
            "cityname": "Ouagadougou",
            "airportcode": "OUA",
            "airportname": "Ouagadougou"
        },
        {
            "countrycode": "BF",
            "countryname": "Burkina Faso",
            "citycode": "XBOA",
            "cityname": "Boulsa",
            "airportcode": "XBO",
            "airportname": "Boulsa"
        },
        {
            "countrycode": "BG",
            "countryname": "Bulgaria",
            "citycode": "BURG",
            "cityname": "Bourgas",
            "airportcode": "BOJ",
            "airportname": "Bourgas"
        },
        {
            "countrycode": "BG",
            "countryname": "Bulgaria",
            "citycode": "PLOV",
            "cityname": "Plovdiv",
            "airportcode": "PDV",
            "airportname": "Plovdiv"
        },
        {
            "countrycode": "BG",
            "countryname": "Bulgaria",
            "citycode": "SOFI",
            "cityname": "Sofia",
            "airportcode": "SOF",
            "airportname": "Sofia"
        },
        {
            "countrycode": "BG",
            "countryname": "Bulgaria",
            "citycode": "VARN",
            "cityname": "Varna",
            "airportcode": "VAR",
            "airportname": "Varna"
        },
        {
            "countrycode": "BH",
            "countryname": "Bahrain",
            "citycode": "BAHA",
            "cityname": "Bahrain",
            "airportcode": "BAH",
            "airportname": "Bahrain"
        },
        {
            "countrycode": "BI",
            "countryname": "Burundi",
            "citycode": "BJMA",
            "cityname": "Bujumbura",
            "airportcode": "BJM",
            "airportname": "Bujumbura"
        },
        {
            "countrycode": "BJ",
            "countryname": "Benin",
            "citycode": "COOA",
            "cityname": "Cotonou",
            "airportcode": "COO",
            "airportname": "Cotonou"
        },
        {
            "countrycode": "BL",
            "countryname": "Saint Barthelemy",
            "citycode": "SBHA",
            "cityname": "St Barthelemy",
            "airportcode": "SBH",
            "airportname": "St Barthelemy"
        },
        {
            "countrycode": "BM",
            "countryname": "Bermuda",
            "citycode": "BDAA",
            "cityname": "Hamilton",
            "airportcode": "BDA",
            "airportname": "L.F. Wade International Airport"
        },
        {
            "countrycode": "BN",
            "countryname": "Brunei",
            "citycode": "BWNA",
            "cityname": "Bandar Seri Begawan",
            "airportcode": "BWN",
            "airportname": "Bandar Seri Begawan"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "ASCA",
            "cityname": "Ascension",
            "airportcode": "ASC",
            "airportname": "Ascension"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "BYCA",
            "cityname": "Yacuiba",
            "airportcode": "BYC",
            "airportname": "Yacuiba"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "CBBA",
            "cityname": "Cochabamba",
            "airportcode": "CBB",
            "airportname": "Cochabamba"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "CIJA",
            "cityname": "Cobija",
            "airportcode": "CIJ",
            "airportname": "Cobija"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "GYAA",
            "cityname": "Guayaramerin",
            "airportcode": "GYA",
            "airportname": "Guayaramerin"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "LPBA",
            "cityname": "La Paz",
            "airportcode": "LPB",
            "airportname": "La Paz"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "ORUA",
            "cityname": "Oruro",
            "airportcode": "ORU",
            "airportname": "Oruro"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "POIA",
            "cityname": "Potosi",
            "airportcode": "POI",
            "airportname": "Potosi"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "RBQA",
            "cityname": "Rurrenabaque",
            "airportcode": "RBQ",
            "airportname": "Rurrenabaque"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "RIBA",
            "cityname": "Riberalta",
            "airportcode": "RIB",
            "airportname": "Riberalta"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "SBLA",
            "cityname": "Santa Ana",
            "airportcode": "SBL",
            "airportname": "Santa Ana"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "SREA",
            "cityname": "Sucre",
            "airportcode": "SRE",
            "airportname": "Sucre"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "SRZA",
            "cityname": "Santa Cruz",
            "airportcode": "SRZ",
            "airportname": "Santa Cruz El Trompillo"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "SRZA",
            "cityname": "Santa Cruz",
            "airportcode": "VVI",
            "airportname": "Santa Cruz Viru Viru"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "TDDA",
            "cityname": "Trinidad",
            "airportcode": "TDD",
            "airportname": "Trinidad"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "TJAA",
            "cityname": "Tarija",
            "airportcode": "TJA",
            "airportname": "Tarija"
        },
        {
            "countrycode": "BO",
            "countryname": "Bolivia",
            "citycode": "UYUA",
            "cityname": "Uyuni",
            "airportcode": "UYU",
            "airportname": "Uyuni"
        },
        {
            "countrycode": "BQ",
            "countryname": "Caribbean Netherlands",
            "citycode": "BONA",
            "cityname": "Bonaire",
            "airportcode": "BON",
            "airportname": "Bonaire"
        },
        {
            "countrycode": "BQ",
            "countryname": "Caribbean Netherlands",
            "citycode": "EUXA",
            "cityname": "St Eustatius",
            "airportcode": "EUX",
            "airportname": "St Eustatius"
        },
        {
            "countrycode": "BQ",
            "countryname": "Caribbean Netherlands",
            "citycode": "SABA",
            "cityname": "Saba Island",
            "airportcode": "SAB",
            "airportname": "Saba Island"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "AAXA",
            "cityname": "Araxa",
            "airportcode": "AAX",
            "airportname": "Araxa"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "AFLA",
            "cityname": "Alta Floresta",
            "airportcode": "AFL",
            "airportname": "Alta Floresta"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "AJUA",
            "cityname": "Aracaju",
            "airportcode": "AJU",
            "airportname": "Aracaju"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "ARUA",
            "cityname": "Aracatuba",
            "airportcode": "ARU",
            "airportname": "Aracatuba"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "ATMA",
            "cityname": "Altamira",
            "airportcode": "ATM",
            "airportname": "Altamira"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "AUXA",
            "cityname": "Araguaina",
            "airportcode": "AUX",
            "airportname": "Araguaina"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BAUA",
            "cityname": "Bauru",
            "airportcode": "JTC",
            "airportname": "Bauru-Arealva"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BAZA",
            "cityname": "Barbelos",
            "airportcode": "BAZ",
            "airportname": "Barbelos"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BELA",
            "cityname": "Belem",
            "airportcode": "BEL",
            "airportname": "Belem"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BHZA",
            "cityname": "Belo Horizonte",
            "airportcode": "CNF",
            "airportname": "Belo Horizonte Tancredo Neves Int'l."
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BHZA",
            "cityname": "Belo Horizonte",
            "airportcode": "PLU",
            "airportname": "Belo Horizonte Pampulha"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BPSA",
            "cityname": "Porto Seguro",
            "airportcode": "BPS",
            "airportname": "Porto Seguro"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BRAA",
            "cityname": "Barreiras",
            "airportcode": "BRA",
            "airportname": "Barreiras"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BSBA",
            "cityname": "Brasilia",
            "airportcode": "BSB",
            "airportname": "Brasilia"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BVBA",
            "cityname": "Boa Vista",
            "airportcode": "BVB",
            "airportname": "Boa Vista"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BVHA",
            "cityname": "Vilhena",
            "airportcode": "BVH",
            "airportname": "Vilhena"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "BYOA",
            "cityname": "Bonito",
            "airportcode": "BYO",
            "airportname": "Bonito"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CACA",
            "cityname": "Cascavel",
            "airportcode": "CAC",
            "airportname": "Cascavel"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CAFA",
            "cityname": "Carauari",
            "airportcode": "CAF",
            "airportname": "Carauari"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CAUA",
            "cityname": "Caruaru",
            "airportcode": "CAU",
            "airportname": "Caruaru"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CAWA",
            "cityname": "Campos",
            "airportcode": "CAW",
            "airportname": "Campos"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CCMA",
            "cityname": "Criciuma",
            "airportcode": "CCM",
            "airportname": "Criciuma"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CFBA",
            "cityname": "Cabo Frio",
            "airportcode": "CFB",
            "airportname": "Cabo Frio"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CGBA",
            "cityname": "Cuiaba",
            "airportcode": "CGB",
            "airportname": "Cuiaba"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CGRA",
            "cityname": "Campo Grande",
            "airportcode": "CGR",
            "airportname": "Campo Grande"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CIZA",
            "cityname": "Coari",
            "airportcode": "CIZ",
            "airportname": "Coari"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CKSA",
            "cityname": "Carajas",
            "airportcode": "CKS",
            "airportname": "Carajas"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CLVA",
            "cityname": "Caldas Novas",
            "airportcode": "CLV",
            "airportname": "Caldas Novas"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CMGA",
            "cityname": "Corumba",
            "airportcode": "CMG",
            "airportname": "Corumba"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CPQA",
            "cityname": "Campinas",
            "airportcode": "VCP",
            "airportname": "Sao Paulo Viracopos"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CPVA",
            "cityname": "Campina Grande",
            "airportcode": "CPV",
            "airportname": "Campina Grande"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CWBA",
            "cityname": "Curitiba",
            "airportcode": "CWB",
            "airportname": "Curitiba"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CXJA",
            "cityname": "Caxias Do Sul",
            "airportcode": "CXJ",
            "airportname": "Caxias Do Sul"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "CZSA",
            "cityname": "Cruzeiro Do Sul",
            "airportcode": "CZS",
            "airportname": "Cruzeiro Do Sul"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "DIQA",
            "cityname": "Divinopolis",
            "airportcode": "DIQ",
            "airportname": "Divinopolis"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "DOUA",
            "cityname": "Dourados",
            "airportcode": "DOU",
            "airportname": "Dourados"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "ERMA",
            "cityname": "Erechim",
            "airportcode": "ERM",
            "airportname": "Erechim"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "ERNA",
            "cityname": "Eirunepe",
            "airportcode": "ERN",
            "airportname": "Eirunepe"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "FECA",
            "cityname": "Feira De Santana",
            "airportcode": "FEC",
            "airportname": "Feira De Santana"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "FENA",
            "cityname": "Fernando De Noronha",
            "airportcode": "FEN",
            "airportname": "Fernando De Noronha"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "FLNA",
            "cityname": "Florianopolis",
            "airportcode": "FLN",
            "airportname": "Florianopolis"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "FORA",
            "cityname": "Fortaleza",
            "airportcode": "FOR",
            "airportname": "Fortaleza"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "GELA",
            "cityname": "Santo Angelo",
            "airportcode": "GEL",
            "airportname": "Santo Angelo"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "GVRA",
            "cityname": "Governador Valadares",
            "airportcode": "GVR",
            "airportname": "Governador Valadares"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "GYNA",
            "cityname": "Goiania",
            "airportcode": "GYN",
            "airportname": "Goiania"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "IGUA",
            "cityname": "Iguassu Falls",
            "airportcode": "IGU",
            "airportname": "Iguassu Falls"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "IMPA",
            "cityname": "Imperatriz",
            "airportcode": "IMP",
            "airportname": "Imperatriz"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "IOSA",
            "cityname": "Ilheus",
            "airportcode": "IOS",
            "airportname": "Ilheus"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "IPNA",
            "cityname": "Ipatinga",
            "airportcode": "IPN",
            "airportname": "Ipatinga"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "ITBA",
            "cityname": "Itaituba",
            "airportcode": "ITB",
            "airportname": "Itaituba"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "JDFA",
            "cityname": "Juiz De Fora",
            "airportcode": "IZA",
            "airportname": "Zona da Mata Regional Airport"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "JDOA",
            "cityname": "Juazeiro Do Norte",
            "airportcode": "JDO",
            "airportname": "Juazeiro Do Norte"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "JJGA",
            "cityname": "Jaguaruna",
            "airportcode": "JJG",
            "airportname": "Humberto Bortoluzzi"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "JOIA",
            "cityname": "Joinville",
            "airportcode": "JOI",
            "airportname": "Joinville"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "JPAA",
            "cityname": "Joao Pessoa",
            "airportcode": "JPA",
            "airportname": "Joao Pessoa"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "JPRA",
            "cityname": "Ji-Parana",
            "airportcode": "JPR",
            "airportname": "Ji-Parana"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "LAJA",
            "cityname": "Lages",
            "airportcode": "LAJ",
            "airportname": "Lages"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "LBRA",
            "cityname": "Labrea",
            "airportcode": "LBR",
            "airportname": "Labrea"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "LDBA",
            "cityname": "Londrina",
            "airportcode": "LDB",
            "airportname": "Londrina"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "LECB",
            "cityname": "Lencois",
            "airportcode": "LEC",
            "airportname": "Lencois Chapada Diamantina"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "MABA",
            "cityname": "Maraba",
            "airportcode": "MAB",
            "airportname": "Maraba"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "MAOA",
            "cityname": "Manaus",
            "airportcode": "MAO",
            "airportname": "Manaus"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "MCPA",
            "cityname": "Macapa",
            "airportcode": "MCP",
            "airportname": "Macapa"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "MCZA",
            "cityname": "Maceio",
            "airportcode": "MCZ",
            "airportname": "Maceio"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "MGFA",
            "cityname": "Maringa",
            "airportcode": "MGF",
            "airportname": "Regional De Maringa"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "MIIA",
            "cityname": "Marilia",
            "airportcode": "MII",
            "airportname": "Marilia"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "MOCA",
            "cityname": "Montes Claros",
            "airportcode": "MOC",
            "airportname": "Montes Claros"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "NATA",
            "cityname": "Natal",
            "airportcode": "NAT",
            "airportname": "Natal"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "NVTA",
            "cityname": "Navegantes",
            "airportcode": "NVT",
            "airportname": "Navegantes"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "OALA",
            "cityname": "Cacoal",
            "airportcode": "OAL",
            "airportname": "Cacoal"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "OPSA",
            "cityname": "Sinop",
            "airportcode": "OPS",
            "airportname": "Sinop"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PAVA",
            "cityname": "Paulo Afonso",
            "airportcode": "PAV",
            "airportname": "Paulo Afonso"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PETA",
            "cityname": "Pelotas",
            "airportcode": "PET",
            "airportname": "Pelotas"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PFBA",
            "cityname": "Passo Fundo",
            "airportcode": "PFB",
            "airportname": "Passo Fundo"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PHBA",
            "cityname": "Parnaiba",
            "airportcode": "PHB",
            "airportname": "Parnaiba"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PINA",
            "cityname": "Parintins",
            "airportcode": "PIN",
            "airportname": "Parintins"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PMWA",
            "cityname": "Palmas",
            "airportcode": "PMW",
            "airportname": "Palmas"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PNZA",
            "cityname": "Petrolina",
            "airportcode": "PNZ",
            "airportname": "Petrolina"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "POAA",
            "cityname": "Porto Alegre",
            "airportcode": "POA",
            "airportname": "Porto Alegre"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PPBA",
            "cityname": "Presidente Prudente",
            "airportcode": "PPB",
            "airportname": "Presidente Prudente"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "PVHA",
            "cityname": "Porto Velho",
            "airportcode": "PVH",
            "airportname": "Porto Velho"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "RAOA",
            "cityname": "Ribeirao Preto",
            "airportcode": "RAO",
            "airportname": "Ribeirao Preto"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "RBRA",
            "cityname": "Rio Branco",
            "airportcode": "RBR",
            "airportname": "Rio Branco"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "RECA",
            "cityname": "Recife",
            "airportcode": "REC",
            "airportname": "Recife"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "RIAA",
            "cityname": "Santa Maria",
            "airportcode": "RIA",
            "airportname": "Santa Maria"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "RIGB",
            "cityname": "Rio Grande",
            "airportcode": "RIG",
            "airportname": "Rio Grande"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "RIOA",
            "cityname": "Rio De Janeiro",
            "airportcode": "GIG",
            "airportname": "Rio De Janeiro Internacional"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "RIOA",
            "cityname": "Rio De Janeiro",
            "airportcode": "SDU",
            "airportname": "Rio De Janeiro Santos Dumont"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "ROOA",
            "cityname": "Rondonopolis",
            "airportcode": "ROO",
            "airportname": "Rondonopolis"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "RVDA",
            "cityname": "Rio Verde",
            "airportcode": "RVD",
            "airportname": "Rio Verde"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "SAOA",
            "cityname": "Sao Paulo",
            "airportcode": "CGH",
            "airportname": "Sao Paulo Congonhas"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "SAOA",
            "cityname": "Sao Paulo",
            "airportcode": "GRU",
            "airportname": "Sao Paulo Guarulhos"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "SJKA",
            "cityname": "Sao Jose Dos Campos",
            "airportcode": "SJK",
            "airportname": "Sao Jose Dos Campos"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "SJLA",
            "cityname": "Sao Gabriel",
            "airportcode": "SJL",
            "airportname": "Sao Gabriel"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "SJPA",
            "cityname": "Sao Jose Do Rio Preto",
            "airportcode": "SJP",
            "airportname": "Sao Jose Do Rio Preto"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "SLZA",
            "cityname": "Sao Luiz",
            "airportcode": "SLZ",
            "airportname": "Sao Luiz"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "SSAA",
            "cityname": "Salvador",
            "airportcode": "SSA",
            "airportname": "Salvador"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "STMB",
            "cityname": "Santarem",
            "airportcode": "STM",
            "airportname": "Santarem"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "TBTA",
            "cityname": "Tabatinga",
            "airportcode": "TBT",
            "airportname": "Tabatinga"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "TFFA",
            "cityname": "Tefe",
            "airportcode": "TFF",
            "airportname": "Tefe"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "THEA",
            "cityname": "Teresina",
            "airportcode": "THE",
            "airportname": "Teresina"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "TJLA",
            "cityname": "Três Lagoas",
            "airportcode": "TJL",
            "airportname": "Três Lagoas"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "TMTA",
            "cityname": "Trombetas",
            "airportcode": "TMT",
            "airportname": "Trombetas"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "TXFA",
            "cityname": "Teixeira de Freitas",
            "airportcode": "TXF",
            "airportname": "Teixeira de Freitas"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "UBAA",
            "cityname": "Uberaba",
            "airportcode": "UBA",
            "airportname": "Uberaba"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "UDIA",
            "cityname": "Uberlandia",
            "airportcode": "UDI",
            "airportname": "Uberlandia"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "URGA",
            "cityname": "Uruguaiana",
            "airportcode": "URG",
            "airportname": "Uruguaiana"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "VAGA",
            "cityname": "Varginha",
            "airportcode": "VAG",
            "airportname": "Varginha"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "VALA",
            "cityname": "Valenca",
            "airportcode": "VAL",
            "airportname": "Valenca"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "VDCA",
            "cityname": "Vitoria Da Conquista",
            "airportcode": "VDC",
            "airportname": "Vitoria Da Conquista"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "VIXA",
            "cityname": "Vitoria",
            "airportcode": "VIX",
            "airportname": "Vitoria"
        },
        {
            "countrycode": "BR",
            "countryname": "Brazil",
            "citycode": "XAPA",
            "cityname": "Chapeco",
            "airportcode": "XAP",
            "airportname": "Chapeco"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "ATCA",
            "cityname": "Arthur's Town",
            "airportcode": "ATC",
            "airportname": "Arthur's Town"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "AXPA",
            "cityname": "Spring Point",
            "airportcode": "AXP",
            "airportname": "Spring Point"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "BIMA",
            "cityname": "Bimini",
            "airportcode": "BIM",
            "airportname": "Bimini International"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "BIMA",
            "cityname": "Bimini",
            "airportcode": "NSB",
            "airportname": "Bimini North SPB"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "CRIA",
            "cityname": "Crooked Island",
            "airportcode": "CRI",
            "airportname": "Crooked Island"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "ELHA",
            "cityname": "North Eleuthera",
            "airportcode": "ELH",
            "airportname": "North Eleuthera"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "FPOA",
            "cityname": "Freeport",
            "airportcode": "FPO",
            "airportname": "Freeport"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "GGTA",
            "cityname": "George Town",
            "airportcode": "GGT",
            "airportname": "George Town"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "GHBA",
            "cityname": "Governors Harbour",
            "airportcode": "GHB",
            "airportname": "Governors Harbour"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "IGAA",
            "cityname": "Inagua",
            "airportcode": "IGA",
            "airportname": "Inagua"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "LGIA",
            "cityname": "Long Island",
            "airportcode": "LGI",
            "airportname": "Long Island"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "MHHA",
            "cityname": "Marsh Harbour",
            "airportcode": "MHH",
            "airportname": "Marsh Harbour"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "MYGA",
            "cityname": "Mayaguana",
            "airportcode": "MYG",
            "airportname": "Mayaguana"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "NASA",
            "cityname": "Nassau",
            "airportcode": "NAS",
            "airportname": "Nassau International"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "RCYA",
            "cityname": "Rum Cay",
            "airportcode": "RCY",
            "airportname": "Rum Cay"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "RSDA",
            "cityname": "Rock Sound",
            "airportcode": "RSD",
            "airportname": "Rock Sound"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "SAQA",
            "cityname": "San Andros",
            "airportcode": "SAQ",
            "airportname": "San Andros"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "SMLA",
            "cityname": "Stella Maris",
            "airportcode": "SML",
            "airportname": "Stella Maris"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "TBIA",
            "cityname": "The Bight",
            "airportcode": "TBI",
            "airportname": "The Bight"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "TCBA",
            "cityname": "Treasure Cay",
            "airportcode": "TCB",
            "airportname": "Treasure Cay"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "TZNA",
            "cityname": "South Andros",
            "airportcode": "TZN",
            "airportname": "South Andros"
        },
        {
            "countrycode": "BS",
            "countryname": "Bahamas",
            "citycode": "ZSAA",
            "cityname": "San Salvador",
            "airportcode": "ZSA",
            "airportname": "San Salvador"
        },
        {
            "countrycode": "BT",
            "countryname": "Bhutan",
            "citycode": "PBHA",
            "cityname": "Paro",
            "airportcode": "PBH",
            "airportname": "Paro"
        },
        {
            "countrycode": "BW",
            "countryname": "Botswana",
            "citycode": "BBKA",
            "cityname": "Kasane",
            "airportcode": "BBK",
            "airportname": "Kasane"
        },
        {
            "countrycode": "BW",
            "countryname": "Botswana",
            "citycode": "FRWA",
            "cityname": "Francistown",
            "airportcode": "FRW",
            "airportname": "Francistown"
        },
        {
            "countrycode": "BW",
            "countryname": "Botswana",
            "citycode": "GBEA",
            "cityname": "Gaborone",
            "airportcode": "GBE",
            "airportname": "Gaborone"
        },
        {
            "countrycode": "BW",
            "countryname": "Botswana",
            "citycode": "MUBA",
            "cityname": "Maun",
            "airportcode": "MUB",
            "airportname": "Maun"
        },
        {
            "countrycode": "BY",
            "countryname": "Belarus",
            "citycode": "BQTA",
            "cityname": "Brest",
            "airportcode": "BQT",
            "airportname": "Brest"
        },
        {
            "countrycode": "BY",
            "countryname": "Belarus",
            "citycode": "GMEA",
            "cityname": "Gomel",
            "airportcode": "GME",
            "airportname": "Gomel"
        },
        {
            "countrycode": "BY",
            "countryname": "Belarus",
            "citycode": "GNAA",
            "cityname": "Grodna",
            "airportcode": "GNA",
            "airportname": "Grodna"
        },
        {
            "countrycode": "BY",
            "countryname": "Belarus",
            "citycode": "MSQA",
            "cityname": "Minsk",
            "airportcode": "MSQ",
            "airportname": "Minsk International 2"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "BCVA",
            "cityname": "Belmopan",
            "airportcode": "BCV",
            "airportname": "Belmopan"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "BZEA",
            "cityname": "Belize City",
            "airportcode": "BZE",
            "airportname": "Belize City Philip S.W.Goldson Int"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "BZEA",
            "cityname": "Belize City",
            "airportcode": "TZA",
            "airportname": "Belize City Municipal"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "CUKA",
            "cityname": "Caye Caulker",
            "airportcode": "CUK",
            "airportname": "Caye Caulker"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "CYCA",
            "cityname": "Caye Chapel",
            "airportcode": "CYC",
            "airportname": "Caye Chapel"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "CZHB",
            "cityname": "Corozal",
            "airportcode": "CZH",
            "airportname": "Corozal"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "DGAA",
            "cityname": "Dangriga",
            "airportcode": "DGA",
            "airportname": "Dangriga"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "INBA",
            "cityname": "Independence",
            "airportcode": "INB",
            "airportname": "Independence"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "ORZA",
            "cityname": "Orange Walk",
            "airportcode": "ORZ",
            "airportname": "Orange Walk"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "PLJA",
            "cityname": "Placencia",
            "airportcode": "PLJ",
            "airportname": "Placencia"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "PNDA",
            "cityname": "Punta Gorda",
            "airportcode": "PND",
            "airportname": "Punta Gorda"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "SPRA",
            "cityname": "San Pedro",
            "airportcode": "SPR",
            "airportname": "San Pedro"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "SQSA",
            "cityname": "San Ignacio",
            "airportcode": "CYD",
            "airportname": "San Ignacio Cayo"
        },
        {
            "countrycode": "BZ",
            "countryname": "Belize",
            "citycode": "SVKA",
            "cityname": "Silver Creek",
            "airportcode": "SVK",
            "airportname": "Silver Creek"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "AKVA",
            "cityname": "Akulivik",
            "airportcode": "AKV",
            "airportname": "Akulivik"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "COLV",
            "cityname": "Colville Lake",
            "airportcode": "YCK",
            "airportname": "Colville Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "CYHY",
            "cityname": "Hay River",
            "airportcode": "YHY",
            "airportname": "Hay River"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "KESA",
            "cityname": "Kelsey",
            "airportcode": "KES",
            "airportname": "Kelsey"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "KEWA",
            "cityname": "Keewaywin",
            "airportcode": "KEW",
            "airportname": "Keewaywin"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "KIFA",
            "cityname": "Kingfisher Lake",
            "airportcode": "KIF",
            "airportname": "Kingfisher Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "LAKA",
            "cityname": "Aklavik",
            "airportcode": "LAK",
            "airportname": "Aklavik"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "MONB",
            "cityname": "Moncton",
            "airportcode": "YQM",
            "airportname": "Moncton"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "MSAA",
            "cityname": "Muskrat Dam",
            "airportcode": "MSA",
            "airportname": "Muskrat Dam"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "QBCA",
            "cityname": "Bella Coola",
            "airportcode": "QBC",
            "airportname": "Bella Coola"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "SARN",
            "cityname": "Sarnia",
            "airportcode": "YZR",
            "airportname": "Sarnia"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "SURA",
            "cityname": "Summer Beaver",
            "airportcode": "SUR",
            "airportname": "Summer Beaver"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "WINB",
            "cityname": "Winnipeg",
            "airportcode": "YWG",
            "airportname": "Winnipeg"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "WNNA",
            "cityname": "Wunnummin Lake",
            "airportcode": "WNN",
            "airportname": "Wunnummin Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "XBEA",
            "cityname": "Bearskin Lake",
            "airportcode": "XBE",
            "airportname": "Bearskin Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "XGRA",
            "cityname": "Kangiqsualujjuaq",
            "airportcode": "XGR",
            "airportname": "Kangiqsualujjuaq"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "XKSA",
            "cityname": "Kasabonika",
            "airportcode": "XKS",
            "airportname": "Kasabonika"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "XLBA",
            "cityname": "Lac Brochet",
            "airportcode": "XLB",
            "airportname": "Lac Brochet"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "XQUA",
            "cityname": "Qualicum",
            "airportcode": "XQU",
            "airportname": "Qualicum"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "XSIA",
            "cityname": "South Indian Lake",
            "airportcode": "XSI",
            "airportname": "South Indian Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "XTLA",
            "cityname": "Tadoule Lake",
            "airportcode": "XTL",
            "airportname": "Tadoule Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YAAA",
            "cityname": "Anahim Lake",
            "airportcode": "YAA",
            "airportname": "Anahim Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YABA",
            "cityname": "Arctic Bay",
            "airportcode": "YAB",
            "airportname": "Arctic Bay"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YACA",
            "cityname": "Cat Lake",
            "airportcode": "YAC",
            "airportname": "Cat Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YAGA",
            "cityname": "Fort Frances",
            "airportcode": "YAG",
            "airportname": "Fort Frances"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YAMA",
            "cityname": "Sault Ste Marie",
            "airportcode": "YAM",
            "airportname": "Sault Ste Marie"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YAQA",
            "cityname": "Maple Bay",
            "airportcode": "YAQ",
            "airportname": "Maple Bay"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YATA",
            "cityname": "Attawapiskat",
            "airportcode": "YAT",
            "airportname": "Attawapiskat"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YAXA",
            "cityname": "Angling Lake",
            "airportcode": "YAX",
            "airportname": "Angling Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YAYA",
            "cityname": "St Anthony",
            "airportcode": "YAY",
            "airportname": "St Anthony"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YAZA",
            "cityname": "Tofino",
            "airportcode": "YAZ",
            "airportname": "Tofino"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBBA",
            "cityname": "Kugaaruk",
            "airportcode": "YBB",
            "airportname": "Kugaaruk"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBCA",
            "cityname": "Baie Comeau",
            "airportcode": "YBC",
            "airportname": "Baie Comeau"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBGA",
            "cityname": "Bagotville",
            "airportcode": "YBG",
            "airportname": "Bagotville"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBHA",
            "cityname": "Bull Harbour",
            "airportcode": "YBH",
            "airportname": "Bull Harbour"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBKA",
            "cityname": "Baker Lake",
            "airportcode": "YBK",
            "airportname": "Baker Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBLA",
            "cityname": "Campbell River",
            "airportcode": "YBL",
            "airportname": "Campbell River"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBLA",
            "cityname": "Campbell River",
            "airportcode": "YHH",
            "airportname": "Campbell River Harbor SPB"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBRA",
            "cityname": "Brandon",
            "airportcode": "YBR",
            "airportname": "Brandon"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBTA",
            "cityname": "Brochet",
            "airportcode": "YBT",
            "airportname": "Brochet"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBVA",
            "cityname": "Berens River",
            "airportcode": "YBV",
            "airportname": "Berens River"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YBXA",
            "cityname": "Blanc Sablon",
            "airportcode": "YBX",
            "airportname": "Blanc Sablon"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCBA",
            "cityname": "Cambridge Bay",
            "airportcode": "YCB",
            "airportname": "Cambridge Bay"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCDA",
            "cityname": "Nanaimo",
            "airportcode": "YCD",
            "airportname": "Nanaimo"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCDA",
            "cityname": "Nanaimo",
            "airportcode": "ZNA",
            "airportname": "Nanaimo Harbour"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCGA",
            "cityname": "Castlegar",
            "airportcode": "YCG",
            "airportname": "Castlegar"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCLA",
            "cityname": "Charlo",
            "airportcode": "YCL",
            "airportname": "Charlo"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCOA",
            "cityname": "Kugluktuk",
            "airportcode": "YCO",
            "airportname": "Kugluktuk"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCRA",
            "cityname": "Cross Lake",
            "airportcode": "YCR",
            "airportname": "Cross Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCSA",
            "cityname": "Chesterfield Inlet",
            "airportcode": "YCS",
            "airportname": "Chesterfield Inlet"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YCYA",
            "cityname": "Clyde River",
            "airportcode": "YCY",
            "airportname": "Clyde River"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YDAA",
            "cityname": "Dawson City",
            "airportcode": "YDA",
            "airportname": "Dawson City"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YDFA",
            "cityname": "Deer Lake",
            "airportcode": "YDF",
            "airportname": "Deer Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YDLA",
            "cityname": "Dease Lake",
            "airportcode": "YDL",
            "airportname": "Dease Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YDPA",
            "cityname": "Nain",
            "airportcode": "YDP",
            "airportname": "Nain"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YDQA",
            "cityname": "Dawson Creek",
            "airportcode": "YDQ",
            "airportname": "Dawson Creek"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YEAA",
            "cityname": "Edmonton",
            "airportcode": "YEG",
            "airportname": "Edmonton International"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YEKA",
            "cityname": "Arviat",
            "airportcode": "YEK",
            "airportname": "Arviat"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YELB",
            "cityname": "Yellowknife",
            "airportcode": "YZF",
            "airportname": "Yellowknife"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YERA",
            "cityname": "Fort Severn",
            "airportcode": "YER",
            "airportname": "Fort Severn"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YEVA",
            "cityname": "Inuvik",
            "airportcode": "YEV",
            "airportname": "Inuvik / Mike Zubko"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YFAA",
            "cityname": "Fort Albany",
            "airportcode": "YFA",
            "airportname": "Fort Albany"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YFBA",
            "cityname": "Iqaluit",
            "airportcode": "YFB",
            "airportname": "Iqaluit"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YFCA",
            "cityname": "Fredericton",
            "airportcode": "YFC",
            "airportname": "Fredericton"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YFHA",
            "cityname": "Fort Hope",
            "airportcode": "YFH",
            "airportname": "Fort Hope"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YFJA",
            "cityname": "Snare Lake",
            "airportcode": "YFJ",
            "airportname": "Snare Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YFOA",
            "cityname": "Flin Flon",
            "airportcode": "YFO",
            "airportname": "Flin Flon"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YFSA",
            "cityname": "Fort Simpson",
            "airportcode": "YFS",
            "airportname": "Fort Simpson"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGBA",
            "cityname": "Gillies Bay",
            "airportcode": "YGB",
            "airportname": "Gillies Bay"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGGA",
            "cityname": "Ganges Harbor",
            "airportcode": "YGG",
            "airportname": "Ganges Harbor"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGHA",
            "cityname": "Fort Good Hope",
            "airportcode": "YGH",
            "airportname": "Fort Good Hope"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGKA",
            "cityname": "Kingston",
            "airportcode": "YGK",
            "airportname": "Kingston"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGLA",
            "cityname": "La Grande",
            "airportcode": "YGL",
            "airportname": "La Grande"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGOA",
            "cityname": "Gods Narrows",
            "airportcode": "YGO",
            "airportname": "Gods Narrows"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGPA",
            "cityname": "Gaspe",
            "airportcode": "YGP",
            "airportname": "Gaspe"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGRA",
            "cityname": "Iles De La Madeleine",
            "airportcode": "YGR",
            "airportname": "Iles De La Madeleine"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGTA",
            "cityname": "Igloolik",
            "airportcode": "YGT",
            "airportname": "Igloolik"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGVA",
            "cityname": "Havre St Pierre",
            "airportcode": "YGV",
            "airportname": "Havre St Pierre"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGWA",
            "cityname": "Kuujjuarapik",
            "airportcode": "YGW",
            "airportname": "Kuujjuarapik"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGXA",
            "cityname": "Gillam",
            "airportcode": "YGX",
            "airportname": "Gillam"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YGZA",
            "cityname": "Grise Fiord",
            "airportcode": "YGZ",
            "airportname": "Grise Fiord"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHDA",
            "cityname": "Dryden",
            "airportcode": "YHD",
            "airportname": "Dryden"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHIA",
            "cityname": "Ulukhaktok",
            "airportcode": "YHI",
            "airportname": "Ulukhaktok / Holman"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHKA",
            "cityname": "Gjoa Haven",
            "airportcode": "YHK",
            "airportname": "Gjoa Haven"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHMA",
            "cityname": "Hamilton",
            "airportcode": "YHM",
            "airportname": "Hamilton"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHOA",
            "cityname": "Hopedale",
            "airportcode": "YHO",
            "airportname": "Hopedale"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHPA",
            "cityname": "Poplar Hill",
            "airportcode": "YHP",
            "airportname": "Poplar Hill"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHRA",
            "cityname": "Chevery",
            "airportcode": "YHR",
            "airportname": "Chevery"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHSA",
            "cityname": "Sechelt",
            "airportcode": "YHS",
            "airportname": "Sechelt"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YHZA",
            "cityname": "Halifax",
            "airportcode": "YHZ",
            "airportname": "Halifax International"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YIFA",
            "cityname": "Pakuashipi",
            "airportcode": "YIF",
            "airportname": "Pakuashipi"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YIKA",
            "cityname": "Ivujivik",
            "airportcode": "YIK",
            "airportname": "Ivujivik"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YIOA",
            "cityname": "Pond Inlet",
            "airportcode": "YIO",
            "airportname": "Pond Inlet"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YIVA",
            "cityname": "Island Lake",
            "airportcode": "YIV",
            "airportname": "Island Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YJTA",
            "cityname": "Stephenville",
            "airportcode": "YJT",
            "airportname": "Stephenville"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YKAA",
            "cityname": "Kamloops",
            "airportcode": "YKA",
            "airportname": "Kamloops"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YKFA",
            "cityname": "Kitchener / Waterloo",
            "airportcode": "YKF",
            "airportname": "Kitchener / Waterloo"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YKGA",
            "cityname": "Kangirsuk",
            "airportcode": "YKG",
            "airportname": "Kangirsuk"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YKLA",
            "cityname": "Schefferville",
            "airportcode": "YKL",
            "airportname": "Schefferville"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YKQA",
            "cityname": "Waskaganish",
            "airportcode": "YKQ",
            "airportname": "Waskaganish"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YKUA",
            "cityname": "Chisasibi",
            "airportcode": "YKU",
            "airportname": "Chisasibi"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YLCA",
            "cityname": "Kimmirut / Lake Harbour",
            "airportcode": "YLC",
            "airportname": "Kimmirut / Lake Harbour"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YLEA",
            "cityname": "Wha Ti / Lac La Martre",
            "airportcode": "YLE",
            "airportname": "Wha Ti / Lac La Martre"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YLHA",
            "cityname": "Lansdowne House",
            "airportcode": "YLH",
            "airportname": "Lansdowne House"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YLLA",
            "cityname": "Lloydminster",
            "airportcode": "YLL",
            "airportname": "Lloydminster"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YLWA",
            "cityname": "Kelowna",
            "airportcode": "YLW",
            "airportname": "Kelowna"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YMMA",
            "cityname": "Fort Mcmurray",
            "airportcode": "YMM",
            "airportname": "Fort Mcmurray"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YMNA",
            "cityname": "Makkovik",
            "airportcode": "YMN",
            "airportname": "Makkovik"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YMOA",
            "cityname": "Moosonee",
            "airportcode": "YMO",
            "airportname": "Moosonee"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YMQA",
            "cityname": "Montreal",
            "airportcode": "YHU",
            "airportname": "Montreal St Hubert"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YMQA",
            "cityname": "Montreal",
            "airportcode": "YUL",
            "airportname": "Montreal Pierre Elliott Trudeau"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YMTA",
            "cityname": "Chibougamau",
            "airportcode": "YMT",
            "airportname": "Chibougamau"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YNAA",
            "cityname": "Natashquan",
            "airportcode": "YNA",
            "airportname": "Natashquan"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YNCA",
            "cityname": "Wemindji",
            "airportcode": "YNC",
            "airportname": "Wemindji"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YNEA",
            "cityname": "Norway House",
            "airportcode": "YNE",
            "airportname": "Norway House"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YNLA",
            "cityname": "Points North Landing",
            "airportcode": "YNL",
            "airportname": "Points North Landing"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YNOA",
            "cityname": "North Spirit Lake",
            "airportcode": "YNO",
            "airportname": "North Spirit Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YNPA",
            "cityname": "Natuashish",
            "airportcode": "YNP",
            "airportname": "Natuashish"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YNSA",
            "cityname": "Nemiscau",
            "airportcode": "YNS",
            "airportname": "Nemiscau"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YOCA",
            "cityname": "Old Crow",
            "airportcode": "YOC",
            "airportname": "Old Crow"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YOHA",
            "cityname": "Oxford House",
            "airportcode": "YOH",
            "airportname": "Oxford House"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YOJA",
            "cityname": "High Level",
            "airportcode": "YOJ",
            "airportname": "High Level"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YOPA",
            "cityname": "Rainbow Lake",
            "airportcode": "YOP",
            "airportname": "Rainbow Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YOWA",
            "cityname": "Ottawa",
            "airportcode": "YOW",
            "airportname": "Ottawa International"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPAA",
            "cityname": "Prince Albert",
            "airportcode": "YPA",
            "airportname": "Prince Albert"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPBA",
            "cityname": "Port Alberni",
            "airportcode": "YPB",
            "airportname": "Port Alberni"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPCA",
            "cityname": "Paulatuk",
            "airportcode": "YPC",
            "airportname": "Paulatuk"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPHA",
            "cityname": "Inukjuak",
            "airportcode": "YPH",
            "airportname": "Inukjuak"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPJA",
            "cityname": "Aupaluk",
            "airportcode": "YPJ",
            "airportname": "Aupaluk"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPKA",
            "cityname": "Pitt Meadows",
            "airportcode": "YPK",
            "airportname": "Pitt Meadows"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPLA",
            "cityname": "Pickle Lake",
            "airportcode": "YPL",
            "airportname": "Pickle Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPMA",
            "cityname": "Pikangikum",
            "airportcode": "YPM",
            "airportname": "Pikangikum"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPNA",
            "cityname": "Port Menier",
            "airportcode": "YPN",
            "airportname": "Port Menier"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPOA",
            "cityname": "Peawanuck",
            "airportcode": "YPO",
            "airportname": "Peawanuck"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPRA",
            "cityname": "Prince Rupert",
            "airportcode": "YPR",
            "airportname": "Prince Rupert Digby Island"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPWA",
            "cityname": "Powell River",
            "airportcode": "YPW",
            "airportname": "Powell River"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPXA",
            "cityname": "Povungnituk",
            "airportcode": "YPX",
            "airportname": "Povungnituk"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YPYA",
            "cityname": "Fort Chipewyan",
            "airportcode": "YPY",
            "airportname": "Fort Chipewyan"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQBA",
            "cityname": "Quebec",
            "airportcode": "YQB",
            "airportname": "Quebec"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQCA",
            "cityname": "Quaqtaq",
            "airportcode": "YQC",
            "airportname": "Quaqtaq"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQDA",
            "cityname": "The Pas",
            "airportcode": "YQD",
            "airportname": "The Pas"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQFA",
            "cityname": "Red Deer",
            "airportcode": "YQF",
            "airportname": "Red Deer"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQGA",
            "cityname": "Windsor",
            "airportcode": "YQG",
            "airportname": "Windsor"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQKA",
            "cityname": "Kenora",
            "airportcode": "YQK",
            "airportname": "Kenora"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQLA",
            "cityname": "Lethbridge",
            "airportcode": "YQL",
            "airportname": "Lethbridge"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQQA",
            "cityname": "Comox",
            "airportcode": "YQQ",
            "airportname": "Comox"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQRA",
            "cityname": "Regina",
            "airportcode": "YQR",
            "airportname": "Regina"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQTA",
            "cityname": "Thunder Bay",
            "airportcode": "YQT",
            "airportname": "Thunder Bay"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQUA",
            "cityname": "Grande Prairie",
            "airportcode": "YQU",
            "airportname": "Grande Prairie"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQXA",
            "cityname": "Gander",
            "airportcode": "YQX",
            "airportname": "Gander"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQYA",
            "cityname": "Sydney",
            "airportcode": "YQY",
            "airportname": "Sydney"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YQZA",
            "cityname": "Quesnel",
            "airportcode": "YQZ",
            "airportname": "Quesnel"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YRAA",
            "cityname": "Gameti",
            "airportcode": "YRA",
            "airportname": "Gameti (Rae Lakes)"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YRBA",
            "cityname": "Resolute",
            "airportcode": "YRB",
            "airportname": "Resolute"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YRGA",
            "cityname": "Rigolet",
            "airportcode": "YRG",
            "airportname": "Rigolet"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YRLA",
            "cityname": "Red Lake",
            "airportcode": "YRL",
            "airportname": "Red Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YRSA",
            "cityname": "Red Sucker Lake",
            "airportcode": "YRS",
            "airportname": "Red Sucker Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YRTA",
            "cityname": "Rankin Inlet",
            "airportcode": "YRT",
            "airportname": "Rankin Inlet"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSBA",
            "cityname": "Sudbury",
            "airportcode": "YSB",
            "airportname": "Sudbury"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSFA",
            "cityname": "Stony Rapids",
            "airportcode": "YSF",
            "airportname": "Stony Rapids"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSGA",
            "cityname": "Lutselke / Snowdrift",
            "airportcode": "YSG",
            "airportname": "Lutselke / Snowdrift"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSJA",
            "cityname": "Saint John",
            "airportcode": "YSJ",
            "airportname": "Saint John"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSKA",
            "cityname": "Sanikiluaq",
            "airportcode": "YSK",
            "airportname": "Sanikiluaq"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSMA",
            "cityname": "Fort Smith",
            "airportcode": "YSM",
            "airportname": "Fort Smith"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSOA",
            "cityname": "Postville",
            "airportcode": "YSO",
            "airportname": "Postville"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSTA",
            "cityname": "Ste Therese Point",
            "airportcode": "YST",
            "airportname": "Ste Therese Point"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSWA",
            "cityname": "Salluit",
            "airportcode": "YZG",
            "airportname": "Salluit"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YSYA",
            "cityname": "Sachs Harbour",
            "airportcode": "YSY",
            "airportname": "Sachs Harbour"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YTEA",
            "cityname": "Cape Dorset",
            "airportcode": "YTE",
            "airportname": "Cape Dorset"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YTHA",
            "cityname": "Thompson",
            "airportcode": "YTH",
            "airportname": "Thompson"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YTLA",
            "cityname": "Big Trout",
            "airportcode": "YTL",
            "airportname": "Big Trout"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YTMA",
            "cityname": "Mont Tremblant",
            "airportcode": "YTM",
            "airportname": "Mont Tremblant"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YTOA",
            "cityname": "Toronto",
            "airportcode": "YTZ",
            "airportname": "Toronto Island"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YTOA",
            "cityname": "Toronto",
            "airportcode": "YYZ",
            "airportname": "Toronto Pearson International"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YTQA",
            "cityname": "Tasiujuaq",
            "airportcode": "YTQ",
            "airportname": "Tasiujuaq"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YTSA",
            "cityname": "Timmins",
            "airportcode": "YTS",
            "airportname": "Timmins"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YUBA",
            "cityname": "Tuktoyaktuk",
            "airportcode": "YUB",
            "airportname": "Tuktoyaktuk"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YUDA",
            "cityname": "Umiujaq",
            "airportcode": "YUD",
            "airportname": "Umiujaq"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YUTA",
            "cityname": "Repulse Bay",
            "airportcode": "YUT",
            "airportname": "Repulse Bay"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YUXA",
            "cityname": "Hall Beach",
            "airportcode": "YUX",
            "airportname": "Hall Beach"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YUYA",
            "cityname": "Rouyn",
            "airportcode": "YUY",
            "airportname": "Rouyn"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVBA",
            "cityname": "Bonaventure",
            "airportcode": "YVB",
            "airportname": "Bonaventure"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVCA",
            "cityname": "La Ronge",
            "airportcode": "YVC",
            "airportname": "La Ronge"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVMA",
            "cityname": "Qikiqtarjuaq",
            "airportcode": "YVM",
            "airportname": "Qikiqtarjuaq"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVOA",
            "cityname": "Val D'Or",
            "airportcode": "YVO",
            "airportname": "Val D'Or"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVPA",
            "cityname": "Kuujjuaq",
            "airportcode": "YVP",
            "airportname": "Kuujjuaq"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVQA",
            "cityname": "Norman Wells",
            "airportcode": "YVQ",
            "airportname": "Norman Wells"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVRA",
            "cityname": "Vancouver",
            "airportcode": "CXH",
            "airportname": "Vancouver Coal Harbour"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVRA",
            "cityname": "Vancouver",
            "airportcode": "YVR",
            "airportname": "Vancouver International"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YVZA",
            "cityname": "Deer Lake",
            "airportcode": "YVZ",
            "airportname": "Deer Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YWBA",
            "cityname": "Kangiqsujuaq",
            "airportcode": "YWB",
            "airportname": "Kangiqsujuaq"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YWJA",
            "cityname": "Deline",
            "airportcode": "YWJ",
            "airportname": "Deline"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YWKA",
            "cityname": "Wabush",
            "airportcode": "YWK",
            "airportname": "Wabush"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YWLA",
            "cityname": "Williams Lake",
            "airportcode": "YWL",
            "airportname": "Williams Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YWPA",
            "cityname": "Webequie",
            "airportcode": "YWP",
            "airportname": "Webequie"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YWSA",
            "cityname": "Whistler",
            "airportcode": "YWS",
            "airportname": "Whistler"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YWYA",
            "cityname": "Wrigley",
            "airportcode": "YWY",
            "airportname": "Wrigley"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXCA",
            "cityname": "Cranbrook",
            "airportcode": "YXC",
            "airportname": "Cranbrook"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXEA",
            "cityname": "Saskatoon",
            "airportcode": "YXE",
            "airportname": "Saskatoon"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXHA",
            "cityname": "Medicine Hat",
            "airportcode": "YXH",
            "airportname": "Medicine Hat"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXJA",
            "cityname": "Fort St John",
            "airportcode": "YXJ",
            "airportname": "Fort St John"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXLA",
            "cityname": "Sioux Lookout",
            "airportcode": "YXL",
            "airportname": "Sioux Lookout"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXNA",
            "cityname": "Whale Cove",
            "airportcode": "YXN",
            "airportname": "Whale Cove"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXPA",
            "cityname": "Pangnirtung",
            "airportcode": "YXP",
            "airportname": "Pangnirtung"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXSA",
            "cityname": "Prince George",
            "airportcode": "YXS",
            "airportname": "Prince George"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXTA",
            "cityname": "Terrace",
            "airportcode": "YXT",
            "airportname": "Terrace"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXUS",
            "cityname": "London",
            "airportcode": "YXU",
            "airportname": "London"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXXA",
            "cityname": "Abbotsford",
            "airportcode": "YXX",
            "airportname": "Abbotsford"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YXYA",
            "cityname": "Whitehorse",
            "airportcode": "YXY",
            "airportname": "Whitehorse"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYAA",
            "cityname": "Big Bay Yacht Club",
            "airportcode": "YYA",
            "airportname": "Big Bay Yacht Club"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYBA",
            "cityname": "North Bay",
            "airportcode": "YYB",
            "airportname": "North Bay"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYCA",
            "cityname": "Calgary",
            "airportcode": "YYC",
            "airportname": "Calgary"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYDA",
            "cityname": "Smithers",
            "airportcode": "YYD",
            "airportname": "Smithers"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYEA",
            "cityname": "Fort Nelson",
            "airportcode": "YYE",
            "airportname": "Fort Nelson"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYFA",
            "cityname": "Penticton",
            "airportcode": "YYF",
            "airportname": "Penticton"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYGA",
            "cityname": "Charlottetown",
            "airportcode": "YYG",
            "airportname": "Charlottetown"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYHA",
            "cityname": "Taloyoak",
            "airportcode": "YYH",
            "airportname": "Taloyoak"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYJA",
            "cityname": "Victoria",
            "airportcode": "YWH",
            "airportname": "Victoria Inner Harbor"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYJA",
            "cityname": "Victoria",
            "airportcode": "YYJ",
            "airportname": "Victoria International"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYQA",
            "cityname": "Churchill",
            "airportcode": "YYQ",
            "airportname": "Churchill"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYRA",
            "cityname": "Goose Bay",
            "airportcode": "YYR",
            "airportname": "Goose Bay"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYTA",
            "cityname": "St John's",
            "airportcode": "YYT",
            "airportname": "St John's"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYUA",
            "cityname": "Kapuskasing",
            "airportcode": "YYU",
            "airportname": "Kapuskasing"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YYYA",
            "cityname": "Mont Joli",
            "airportcode": "YYY",
            "airportname": "Mont Joli"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YZPA",
            "cityname": "Sandspit",
            "airportcode": "YZP",
            "airportname": "Sandspit"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YZSA",
            "cityname": "Coral Harbour",
            "airportcode": "YZS",
            "airportname": "Coral Harbour"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YZTA",
            "cityname": "Port Hardy",
            "airportcode": "YZT",
            "airportname": "Port Hardy"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YZVA",
            "cityname": "Sept-Iles",
            "airportcode": "YZV",
            "airportname": "Sept-Iles"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "YZZA",
            "cityname": "Trail",
            "airportcode": "YZZ",
            "airportname": "Trail"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZACA",
            "cityname": "York Landing",
            "airportcode": "ZAC",
            "airportname": "York Landing"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZBFA",
            "cityname": "Bathurst",
            "airportcode": "ZBF",
            "airportname": "Bathurst"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZELA",
            "cityname": "Bella Bella",
            "airportcode": "ZEL",
            "airportname": "Bella Bella"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZEMA",
            "cityname": "Eastmain",
            "airportcode": "ZEM",
            "airportname": "Eastmain River"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZFMA",
            "cityname": "Fort McPherson",
            "airportcode": "ZFM",
            "airportname": "Fort McPherson"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZFNA",
            "cityname": "Tulita / Fort Norman",
            "airportcode": "ZFN",
            "airportname": "Tulita / Fort Norman"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZGIA",
            "cityname": "Gods River",
            "airportcode": "ZGI",
            "airportname": "Gods River"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZGSA",
            "cityname": "Gethsemani",
            "airportcode": "ZGS",
            "airportname": "Gethsemani"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZKEA",
            "cityname": "Kashechewan",
            "airportcode": "ZKE",
            "airportname": "Kashechewan"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZKGA",
            "cityname": "Kegashka",
            "airportcode": "ZKG",
            "airportname": "Kegashka"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZLTA",
            "cityname": "La Tabatiere",
            "airportcode": "ZLT",
            "airportname": "La Tabatiere"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZMTA",
            "cityname": "Masset",
            "airportcode": "ZMT",
            "airportname": "Masset"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZPBA",
            "cityname": "Sachigo Lake",
            "airportcode": "ZPB",
            "airportname": "Sachigo Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZRJA",
            "cityname": "Round Lake",
            "airportcode": "ZRJ",
            "airportname": "Round Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZSJA",
            "cityname": "Sandy Lake",
            "airportcode": "ZSJ",
            "airportname": "Sandy Lake"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZTBA",
            "cityname": "Tete-a-La-Baleine",
            "airportcode": "ZTB",
            "airportname": "Tete-a-La-Baleine"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZTMA",
            "cityname": "Shamattawa",
            "airportcode": "ZTM",
            "airportname": "Shamattawa"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZUMA",
            "cityname": "Churchill Falls",
            "airportcode": "ZUM",
            "airportname": "Churchill Falls"
        },
        {
            "countrycode": "CA",
            "countryname": "Canada",
            "citycode": "ZWLA",
            "cityname": "Wollaston Lake",
            "airportcode": "ZWL",
            "airportname": "Wollaston Lake"
        },
        {
            "countrycode": "CC",
            "countryname": "Cocos (Keeling) Islands",
            "citycode": "CCKA",
            "cityname": "Cocos Islands",
            "airportcode": "CCK",
            "airportname": "Cocos Islands"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "BKYA",
            "cityname": "Bukavu",
            "airportcode": "BKY",
            "airportname": "Bukavu"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "BMBA",
            "cityname": "Bumba",
            "airportcode": "BMB",
            "airportname": "Bumba"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "BNCA",
            "cityname": "Beni",
            "airportcode": "BNC",
            "airportname": "Beni"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "BUXA",
            "cityname": "Bunia",
            "airportcode": "BUX",
            "airportname": "Bunia"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "FBMA",
            "cityname": "Lubumbashi",
            "airportcode": "FBM",
            "airportname": "Lubumbashi"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "FIHA",
            "cityname": "Kinshasa",
            "airportcode": "FIH",
            "airportname": "Kinshasa N'Djili"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "FKIA",
            "cityname": "Kisangani",
            "airportcode": "FKI",
            "airportname": "Kisangani"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "FMIA",
            "cityname": "Kalemie",
            "airportcode": "FMI",
            "airportname": "Kalemie"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "GMAA",
            "cityname": "Gemena",
            "airportcode": "GMA",
            "airportname": "Gemena"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "GOMA",
            "cityname": "Goma",
            "airportcode": "GOM",
            "airportname": "Goma"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "IRPA",
            "cityname": "Isiro",
            "airportcode": "IRP",
            "airportname": "Isiro"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "KGAA",
            "cityname": "Kananga",
            "airportcode": "KGA",
            "airportname": "Kananga"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "KMNA",
            "cityname": "Kamina",
            "airportcode": "KMN",
            "airportname": "Kamina"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "KNDA",
            "cityname": "Kindu",
            "airportcode": "KND",
            "airportname": "Kindu"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "KOOA",
            "cityname": "Kongolo",
            "airportcode": "KOO",
            "airportname": "Kongolo"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "KWZA",
            "cityname": "Kolwezi",
            "airportcode": "KWZ",
            "airportname": "Kolwezi"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "LIQA",
            "cityname": "Lisala",
            "airportcode": "LIQ",
            "airportname": "Lisala"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "LJAA",
            "cityname": "Lodja",
            "airportcode": "LJA",
            "airportname": "Lodja"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "LUSA",
            "cityname": "Lusanga",
            "airportcode": "LUS",
            "airportname": "Lusanga"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "MDKA",
            "cityname": "Mbandaka",
            "airportcode": "MDK",
            "airportname": "Mbandaka"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "MJMA",
            "cityname": "Mbuji Mayi",
            "airportcode": "MJM",
            "airportname": "Mbuji Mayi"
        },
        {
            "countrycode": "CD",
            "countryname": "DR Congo",
            "citycode": "MNOA",
            "cityname": "Manono",
            "airportcode": "MNO",
            "airportname": "Manono"
        },
        {
            "countrycode": "CE",
            "countryname": "Crimea",
            "citycode": "SIMF",
            "cityname": "Simferopol",
            "airportcode": "SIP",
            "airportname": "Simferopol"
        },
        {
            "countrycode": "CF",
            "countryname": "Central African Republic",
            "citycode": "BGFA",
            "cityname": "Bangui",
            "airportcode": "BGF",
            "airportname": "Bangui"
        },
        {
            "countrycode": "CF",
            "countryname": "Central African Republic",
            "citycode": "BOZA",
            "cityname": "Bozoum",
            "airportcode": "BOZ",
            "airportname": "Bozoum"
        },
        {
            "countrycode": "CG",
            "countryname": "Congo",
            "citycode": "BZVA",
            "cityname": "Brazzaville",
            "airportcode": "BZV",
            "airportname": "Brazzaville"
        },
        {
            "countrycode": "CG",
            "countryname": "Congo",
            "citycode": "DISA",
            "cityname": "Loubomo",
            "airportcode": "DIS",
            "airportname": "Loubomo"
        },
        {
            "countrycode": "CG",
            "countryname": "Congo",
            "citycode": "PNRA",
            "cityname": "Pointe Noire",
            "airportcode": "PNR",
            "airportname": "Pointe Noire"
        },
        {
            "countrycode": "CH",
            "countryname": "Switzerland",
            "citycode": "ALTF",
            "cityname": "Altenrhein",
            "airportcode": "ACH",
            "airportname": "St Gallen Altenrhein"
        },
        {
            "countrycode": "CH",
            "countryname": "Switzerland",
            "citycode": "BASE",
            "cityname": "Basel",
            "airportcode": "BSL",
            "airportname": "Basel Mulhouse Freiburg"
        },
        {
            "countrycode": "CH",
            "countryname": "Switzerland",
            "citycode": "BERN",
            "cityname": "Bern",
            "airportcode": "BRN",
            "airportname": "Bern"
        },
        {
            "countrycode": "CH",
            "countryname": "Switzerland",
            "citycode": "GENE",
            "cityname": "Geneva",
            "airportcode": "GVA",
            "airportname": "Geneva"
        },
        {
            "countrycode": "CH",
            "countryname": "Switzerland",
            "citycode": "LUGA",
            "cityname": "Lugano",
            "airportcode": "LUG",
            "airportname": "Lugano"
        },
        {
            "countrycode": "CH",
            "countryname": "Switzerland",
            "citycode": "SION",
            "cityname": "Sion",
            "airportcode": "SIR",
            "airportname": "Sion"
        },
        {
            "countrycode": "CH",
            "countryname": "Switzerland",
            "citycode": "ZURI",
            "cityname": "Zurich",
            "airportcode": "ZRH",
            "airportname": "Zurich"
        },
        {
            "countrycode": "CI",
            "countryname": "Ivory Coast",
            "citycode": "ABJA",
            "cityname": "Abidjan",
            "airportcode": "ABJ",
            "airportname": "Abidjan"
        },
        {
            "countrycode": "CI",
            "countryname": "Ivory Coast",
            "citycode": "BYKA",
            "cityname": "Bouake",
            "airportcode": "BYK",
            "airportname": "Bouake"
        },
        {
            "countrycode": "CI",
            "countryname": "Ivory Coast",
            "citycode": "HGOA",
            "cityname": "Korhogo",
            "airportcode": "HGO",
            "airportname": "Korhogo"
        },
        {
            "countrycode": "CI",
            "countryname": "Ivory Coast",
            "citycode": "KEOA",
            "cityname": "Odienne",
            "airportcode": "KEO",
            "airportname": "Odienne"
        },
        {
            "countrycode": "CI",
            "countryname": "Ivory Coast",
            "citycode": "MJCA",
            "cityname": "Man",
            "airportcode": "MJC",
            "airportname": "Man"
        },
        {
            "countrycode": "CI",
            "countryname": "Ivory Coast",
            "citycode": "SEOA",
            "cityname": "Seguela",
            "airportcode": "SEO",
            "airportname": "Seguela"
        },
        {
            "countrycode": "CI",
            "countryname": "Ivory Coast",
            "citycode": "SPYA",
            "cityname": "San Pedro",
            "airportcode": "SPY",
            "airportname": "San Pedro"
        },
        {
            "countrycode": "CK",
            "countryname": "Cook Islands",
            "citycode": "AITC",
            "cityname": "Aitutaki",
            "airportcode": "AIT",
            "airportname": "Aitutaki"
        },
        {
            "countrycode": "CK",
            "countryname": "Cook Islands",
            "citycode": "AIUC",
            "cityname": "Atiu Island",
            "airportcode": "AIU",
            "airportname": "Atiu Island"
        },
        {
            "countrycode": "CK",
            "countryname": "Cook Islands",
            "citycode": "MGSC",
            "cityname": "Mangaia Island",
            "airportcode": "MGS",
            "airportname": "Mangaia Island"
        },
        {
            "countrycode": "CK",
            "countryname": "Cook Islands",
            "citycode": "MOIC",
            "cityname": "Mitiaro Island",
            "airportcode": "MOI",
            "airportname": "Mitiaro Island"
        },
        {
            "countrycode": "CK",
            "countryname": "Cook Islands",
            "citycode": "MUKC",
            "cityname": "Mauke Island",
            "airportcode": "MUK",
            "airportname": "Mauke Island"
        },
        {
            "countrycode": "CK",
            "countryname": "Cook Islands",
            "citycode": "RARC",
            "cityname": "Rarotonga",
            "airportcode": "RAR",
            "airportname": "Rarotonga"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "ANFA",
            "cityname": "Antofagasta",
            "airportcode": "ANF",
            "airportname": "Antofagasta"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "ARIA",
            "cityname": "Arica",
            "airportcode": "ARI",
            "airportname": "Arica"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "BBAA",
            "cityname": "Balmaceda",
            "airportcode": "BBA",
            "airportname": "Balmaceda"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "CCPA",
            "cityname": "Concepcion",
            "airportcode": "CCP",
            "airportname": "Concepcion"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "CJCA",
            "cityname": "Calama",
            "airportcode": "CJC",
            "airportname": "Calama"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "CPOA",
            "cityname": "Copiapo",
            "airportcode": "CPO",
            "airportname": "Copiapo"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "ESRA",
            "cityname": "El Salvador",
            "airportcode": "ESR",
            "airportname": "El Salvador"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "IPCA",
            "cityname": "Easter Island",
            "airportcode": "IPC",
            "airportname": "Easter Island"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "IQQA",
            "cityname": "Iquique",
            "airportcode": "IQQ",
            "airportname": "Iquique"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "LSCA",
            "cityname": "La Serena",
            "airportcode": "LSC",
            "airportname": "La Serena"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "PMCA",
            "cityname": "Puerto Montt",
            "airportcode": "PMC",
            "airportname": "Puerto Montt"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "PNTA",
            "cityname": "Puerto Natales",
            "airportcode": "PNT",
            "airportname": "Puerto Natales"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "PUQA",
            "cityname": "Punta Arenas",
            "airportcode": "PUQ",
            "airportname": "Punta Arenas"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "SCLA",
            "cityname": "Santiago",
            "airportcode": "SCL",
            "airportname": "Santiago Arturo Merino Benitez"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "WCAA",
            "cityname": "Castro",
            "airportcode": "WCA",
            "airportname": "Castro"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "ZALA",
            "cityname": "Valdivia",
            "airportcode": "ZAL",
            "airportname": "Valdivia"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "ZCOA",
            "cityname": "Temuco",
            "airportcode": "ZCO",
            "airportname": "Temuco"
        },
        {
            "countrycode": "CL",
            "countryname": "Chile",
            "citycode": "ZOSA",
            "cityname": "Osorno",
            "airportcode": "ZOS",
            "airportname": "Osorno"
        },
        {
            "countrycode": "CM",
            "countryname": "Cameroon",
            "citycode": "BFXA",
            "cityname": "Bafoussam",
            "airportcode": "BFX",
            "airportname": "Bafoussam"
        },
        {
            "countrycode": "CM",
            "countryname": "Cameroon",
            "citycode": "DLAA",
            "cityname": "Douala",
            "airportcode": "DLA",
            "airportname": "Douala"
        },
        {
            "countrycode": "CM",
            "countryname": "Cameroon",
            "citycode": "GOUA",
            "cityname": "Garoua",
            "airportcode": "GOU",
            "airportname": "Garoua"
        },
        {
            "countrycode": "CM",
            "countryname": "Cameroon",
            "citycode": "MVRA",
            "cityname": "Maroua",
            "airportcode": "MVR",
            "airportname": "Maroua"
        },
        {
            "countrycode": "CM",
            "countryname": "Cameroon",
            "citycode": "NGEA",
            "cityname": "Ngaoundere",
            "airportcode": "NGE",
            "airportname": "Ngaoundere"
        },
        {
            "countrycode": "CM",
            "countryname": "Cameroon",
            "citycode": "YAOA",
            "cityname": "Yaounde",
            "airportcode": "NSI",
            "airportname": "Yaounde Nsimalen"
        },
        {
            "countrycode": "CM",
            "countryname": "Cameroon",
            "citycode": "YAOA",
            "cityname": "Yaounde",
            "airportcode": "YAO",
            "airportname": "Yaounde"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "AEBA",
            "cityname": "Baise",
            "airportcode": "AEB",
            "airportname": "Baise"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "ARXN",
            "cityname": "Arxan",
            "airportcode": "YIE",
            "airportname": "Arxan Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "BFJF",
            "cityname": "Bijie",
            "airportcode": "BFJ",
            "airportname": "Bijie Feixiong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "BJSA",
            "cityname": "Beijing",
            "airportcode": "NAY",
            "airportname": "Beijing Nanyuan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "BJSA",
            "cityname": "Beijing",
            "airportcode": "PEK",
            "airportname": "Beijing Capital"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "BOLE",
            "cityname": "Bole",
            "airportcode": "BPL",
            "airportname": "Bole Alashankou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "BTON",
            "cityname": "Ba Tong",
            "airportcode": "YUS",
            "airportname": "Ba Tong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "BURQ",
            "cityname": "Burqin",
            "airportcode": "KJI",
            "airportname": "Burqin"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CAAT",
            "cityname": "Altay",
            "airportcode": "AAT",
            "airportname": "Altay"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CACX",
            "cityname": "Xingyi",
            "airportcode": "ACX",
            "airportname": "Xingyi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CAKU",
            "cityname": "Aksu",
            "airportcode": "AKU",
            "airportname": "Aksu"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CAOG",
            "cityname": "Anshan",
            "airportcode": "AOG",
            "airportname": "Anshan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CAQG",
            "cityname": "Anqing",
            "airportcode": "AQG",
            "airportname": "Anqing"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CAVA",
            "cityname": "An Shun",
            "airportcode": "AVA",
            "airportname": "An Shun"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CAXF",
            "cityname": "Alxa League",
            "airportcode": "AXF",
            "airportname": "Alxa Left Banner Bayanhot Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CBAV",
            "cityname": "Baotou",
            "airportcode": "BAV",
            "airportname": "Baotou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CBHY",
            "cityname": "Beihai",
            "airportcode": "BHY",
            "airportname": "Beihai"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CBPX",
            "cityname": "Bangda",
            "airportcode": "BPX",
            "airportname": "Bangda"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CBSD",
            "cityname": "Baoshan",
            "airportcode": "BSD",
            "airportname": "Baoshan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCAN",
            "cityname": "Guangzhou",
            "airportcode": "CAN",
            "airportname": "Guangzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCGD",
            "cityname": "Changde",
            "airportcode": "CGD",
            "airportname": "Changde"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCGO",
            "cityname": "Zhengzhou",
            "airportcode": "CGO",
            "airportname": "Zhengzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCGQ",
            "cityname": "Changchun",
            "airportcode": "CGQ",
            "airportname": "Changchun"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCHG",
            "cityname": "Chaoyang",
            "airportcode": "CHG",
            "airportname": "Chaoyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCIF",
            "cityname": "Chifeng",
            "airportcode": "CIF",
            "airportname": "Chifeng"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCIH",
            "cityname": "Changzhi",
            "airportcode": "CIH",
            "airportname": "Changzhi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCKG",
            "cityname": "Chongqing",
            "airportcode": "CKG",
            "airportname": "Chongqing"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCSX",
            "cityname": "Changsha",
            "airportcode": "CSX",
            "airportname": "Changsha"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCTU",
            "cityname": "Chengdu",
            "airportcode": "CTU",
            "airportname": "Chengdu"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CCZX",
            "cityname": "Changzhou",
            "airportcode": "CZX",
            "airportname": "Changzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDAT",
            "cityname": "Datong",
            "airportcode": "DAT",
            "airportname": "Datong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDAX",
            "cityname": "Daxian",
            "airportcode": "DAX",
            "airportname": "Daxian"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDCY",
            "cityname": "Daocheng County",
            "airportcode": "DCY",
            "airportname": "Daocheng Yading"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDDG",
            "cityname": "Dandong",
            "airportcode": "DDG",
            "airportname": "Dandong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDIG",
            "cityname": "Diqing",
            "airportcode": "DIG",
            "airportname": "Diqing"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDLC",
            "cityname": "Dalian",
            "airportcode": "DLC",
            "airportname": "Dalian"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDLU",
            "cityname": "Dali City",
            "airportcode": "DLU",
            "airportname": "Dali City"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDNH",
            "cityname": "Dunhuang",
            "airportcode": "DNH",
            "airportname": "Dunhuang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDOY",
            "cityname": "Dongying",
            "airportcode": "DOY",
            "airportname": "Dongying"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDSN",
            "cityname": "Dongsheng",
            "airportcode": "DSN",
            "airportname": "Dongsheng"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CDYG",
            "cityname": "Dayong",
            "airportcode": "DYG",
            "airportname": "Dayong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CENH",
            "cityname": "Enshi",
            "airportcode": "ENH",
            "airportname": "Enshi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CENY",
            "cityname": "Yan'an",
            "airportcode": "ENY",
            "airportname": "Yan'an"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CFOC",
            "cityname": "Fuzhou",
            "airportcode": "FOC",
            "airportname": "Fuzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CFUG",
            "cityname": "Fuyang",
            "airportcode": "FUG",
            "airportname": "Fuyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CFUO",
            "cityname": "Fuoshan",
            "airportcode": "FUO",
            "airportname": "Fuoshan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CFYJ",
            "cityname": "Fuyuan",
            "airportcode": "FYJ",
            "airportname": "Fuyuan Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CFYN",
            "cityname": "Fuyun",
            "airportcode": "FYN",
            "airportname": "Fuyun"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CGOQ",
            "cityname": "Golmud",
            "airportcode": "GOQ",
            "airportname": "Golmud"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CGYS",
            "cityname": "Guang Yuan",
            "airportcode": "GYS",
            "airportname": "Guang Yuan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHAK",
            "cityname": "Haikou",
            "airportcode": "HAK",
            "airportname": "Haikou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHEK",
            "cityname": "Heihe",
            "airportcode": "HEK",
            "airportname": "Heihe"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHET",
            "cityname": "Hohhot",
            "airportcode": "HET",
            "airportname": "Hohhot"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHFE",
            "cityname": "Hefei",
            "airportcode": "HFE",
            "airportname": "Hefei"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHGH",
            "cityname": "Hangzhou",
            "airportcode": "HGH",
            "airportname": "Hangzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHLD",
            "cityname": "Hailar",
            "airportcode": "HLD",
            "airportname": "Hailar"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHLH",
            "cityname": "Ulanhot",
            "airportcode": "HLH",
            "airportname": "Ulanhot"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHMI",
            "cityname": "Hami",
            "airportcode": "HMI",
            "airportname": "Hami"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHNY",
            "cityname": "Hengyang",
            "airportcode": "HNY",
            "airportname": "Hengyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHRB",
            "cityname": "Harbin",
            "airportcode": "HRB",
            "airportname": "Harbin"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHSN",
            "cityname": "Zhoushan",
            "airportcode": "HSN",
            "airportname": "Zhoushan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHUZ",
            "cityname": "Huizhou",
            "airportcode": "HUZ",
            "airportname": "Huizhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHYN",
            "cityname": "Huangyan",
            "airportcode": "HYN",
            "airportname": "Huangyan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CHZG",
            "cityname": "Hanzhong",
            "airportcode": "HZG",
            "airportname": "Hanzhong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CINC",
            "cityname": "Yinchuan",
            "airportcode": "INC",
            "airportname": "Yinchuan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CIQN",
            "cityname": "Qingyang",
            "airportcode": "IQN",
            "airportname": "Qingyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJDZ",
            "cityname": "Jingdezhen",
            "airportcode": "JDZ",
            "airportname": "Jingdezhen"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJGD",
            "cityname": "Jiagedaqi District",
            "airportcode": "JGD",
            "airportname": "Jiagedaqi Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJGN",
            "cityname": "Jiayuguan",
            "airportcode": "JGN",
            "airportname": "Jiayuguan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJGS",
            "cityname": "Ji An",
            "airportcode": "JGS",
            "airportname": "Ji An"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJHG",
            "cityname": "Jinghong",
            "airportcode": "JHG",
            "airportname": "Jinghong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJIU",
            "cityname": "Jiujiang",
            "airportcode": "JIU",
            "airportname": "Jiujiang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJJN",
            "cityname": "Jinjiang",
            "airportcode": "JJN",
            "airportname": "Jinjiang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJMU",
            "cityname": "Jiamusi",
            "airportcode": "JMU",
            "airportname": "Jiamusi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJNG",
            "cityname": "Jining",
            "airportcode": "JNG",
            "airportname": "Jining"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJNZ",
            "cityname": "Jinzhou",
            "airportcode": "JNZ",
            "airportname": "Jinzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJUZ",
            "cityname": "Juzhou",
            "airportcode": "JUZ",
            "airportname": "Juzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CJZH",
            "cityname": "Song Pan",
            "airportcode": "JZH",
            "airportname": "Song Pan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKCA",
            "cityname": "Kuqa",
            "airportcode": "KCA",
            "airportname": "Kuqa"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKHG",
            "cityname": "Kashi",
            "airportcode": "KHG",
            "airportname": "Kashi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKHN",
            "cityname": "Nanchang",
            "airportcode": "KHN",
            "airportname": "Nanchang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKMG",
            "cityname": "Kunming",
            "airportcode": "KMG",
            "airportname": "Kunming"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKOW",
            "cityname": "Ganzhou",
            "airportcode": "KOW",
            "airportname": "Ganzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKRL",
            "cityname": "Korla",
            "airportcode": "KRL",
            "airportname": "Korla"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKRY",
            "cityname": "Karamay",
            "airportcode": "KRY",
            "airportname": "Karamay"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKWE",
            "cityname": "Guiyang",
            "airportcode": "KWE",
            "airportname": "Guiyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CKWL",
            "cityname": "Guilin",
            "airportcode": "KWL",
            "airportname": "Guilin"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLCX",
            "cityname": "Longyan",
            "airportcode": "LCX",
            "airportname": "Longyan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLHW",
            "cityname": "Lanzhou",
            "airportcode": "LHW",
            "airportname": "Lanzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLJG",
            "cityname": "Lijiang City",
            "airportcode": "LJG",
            "airportname": "Lijiang City"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLLB",
            "cityname": "Libo County",
            "airportcode": "LLB",
            "airportname": "Libo Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLLF",
            "cityname": "LingLing",
            "airportcode": "LLF",
            "airportname": "LingLing"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLLV",
            "cityname": "Lvliang",
            "airportcode": "LLV",
            "airportname": "Lvliang Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLNJ",
            "cityname": "Lincang",
            "airportcode": "LNJ",
            "airportname": "Lincang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLUM",
            "cityname": "Luxi",
            "airportcode": "LUM",
            "airportname": "Dehong Mangshi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLXA",
            "cityname": "Lhasa",
            "airportcode": "LXA",
            "airportname": "Lhasa Gonggar"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLYA",
            "cityname": "Luoyang",
            "airportcode": "LYA",
            "airportname": "Luoyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLYG",
            "cityname": "Lianyungang",
            "airportcode": "LYG",
            "airportname": "Lianyungang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLYI",
            "cityname": "Linyi",
            "airportcode": "LYI",
            "airportname": "Linyi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLZH",
            "cityname": "Liuzhou",
            "airportcode": "LZH",
            "airportname": "Liuzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CLZO",
            "cityname": "Luzhou",
            "airportcode": "LZO",
            "airportname": "Luzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CMDG",
            "cityname": "Mudanjiang",
            "airportcode": "MDG",
            "airportname": "Mudanjiang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CMXZ",
            "cityname": "Meixian",
            "airportcode": "MXZ",
            "airportname": "Meixian"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CNAO",
            "cityname": "Nanchong",
            "airportcode": "NAO",
            "airportname": "Nanchong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CNDG",
            "cityname": "Qiqihar",
            "airportcode": "NDG",
            "airportname": "Qiqihar"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CNGB",
            "cityname": "Ningbo",
            "airportcode": "NGB",
            "airportname": "Ningbo"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CNKG",
            "cityname": "Nanking / Nanjing",
            "airportcode": "NKG",
            "airportname": "Nanking / Nanjing"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CNNG",
            "cityname": "Nanning",
            "airportcode": "NNG",
            "airportname": "Nanning"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CNNY",
            "cityname": "Nanyang",
            "airportcode": "NNY",
            "airportname": "Nanyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CNTG",
            "cityname": "Nantong",
            "airportcode": "NTG",
            "airportname": "Nantong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CPZI",
            "cityname": "Pan Zhi Hua",
            "airportcode": "PZI",
            "airportname": "Pan Zhi Hua"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CRLK",
            "cityname": "Bayannur",
            "airportcode": "RLK",
            "airportname": "Bayannur Tianjitai Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSHA",
            "cityname": "Shanghai",
            "airportcode": "PVG",
            "airportname": "Shanghai Pu Dong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSHA",
            "cityname": "Shanghai",
            "airportcode": "SHA",
            "airportname": "Shanghai Hongqiao"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSHE",
            "cityname": "Shenyang",
            "airportcode": "SHE",
            "airportname": "Shenyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSHF",
            "cityname": "Shanhaiguan",
            "airportcode": "SHF",
            "airportname": "Shanhaiguan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSHP",
            "cityname": "Qinhuangdao",
            "airportcode": "SHP",
            "airportname": "Qinhuangdao"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSJW",
            "cityname": "Shijiazhuang",
            "airportcode": "SJW",
            "airportname": "Shijiazhuang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSWA",
            "cityname": "Shantou",
            "airportcode": "SWA",
            "airportname": "Shantou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSYM",
            "cityname": "Simao",
            "airportcode": "SYM",
            "airportname": "Simao"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSYX",
            "cityname": "Sanya",
            "airportcode": "SYX",
            "airportname": "Sanya"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CSZX",
            "cityname": "Shenzhen",
            "airportcode": "SZX",
            "airportname": "Shenzhen Bao'an International"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CTAO",
            "cityname": "Qingdao",
            "airportcode": "TAO",
            "airportname": "Qingdao"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CTCG",
            "cityname": "Tacheng",
            "airportcode": "TCG",
            "airportname": "Tacheng"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CTEN",
            "cityname": "Tongren",
            "airportcode": "TEN",
            "airportname": "Tongren"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CTGO",
            "cityname": "Tongliao",
            "airportcode": "TGO",
            "airportname": "Tongliao"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CTNH",
            "cityname": "Tonghua",
            "airportcode": "TNH",
            "airportname": "Tonghua"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CTSN",
            "cityname": "Tianjin",
            "airportcode": "TSN",
            "airportname": "Tianjin"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CTXN",
            "cityname": "Tunxi",
            "airportcode": "TXN",
            "airportname": "Tunxi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CTYN",
            "cityname": "Taiyuan",
            "airportcode": "TYN",
            "airportname": "Taiyuan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CURC",
            "cityname": "Urumqi",
            "airportcode": "URC",
            "airportname": "Urumqi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CUYN",
            "cityname": "Yulin",
            "airportcode": "UYN",
            "airportname": "Yulin"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWEF",
            "cityname": "Weifang",
            "airportcode": "WEF",
            "airportname": "Weifang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWEH",
            "cityname": "Weihai",
            "airportcode": "WEH",
            "airportname": "Weihai"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWNZ",
            "cityname": "Wenzhou",
            "airportcode": "WNZ",
            "airportname": "Wenzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWUA",
            "cityname": "Wu Hai",
            "airportcode": "WUA",
            "airportname": "Wu Hai"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWUH",
            "cityname": "Wuhan",
            "airportcode": "WUH",
            "airportname": "Wuhan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWUS",
            "cityname": "Wuyishan",
            "airportcode": "WUS",
            "airportname": "Wuyishan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWUX",
            "cityname": "Wuxi",
            "airportcode": "WUX",
            "airportname": "Wuxi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWUZ",
            "cityname": "Wuzhou",
            "airportcode": "WUZ",
            "airportname": "Wuzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CWXN",
            "cityname": "Wanxian",
            "airportcode": "WXN",
            "airportname": "Wanxian"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CXFN",
            "cityname": "Xiangfan",
            "airportcode": "XFN",
            "airportname": "Xiangfan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CXIC",
            "cityname": "Xichang",
            "airportcode": "XIC",
            "airportname": "Xichang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CXIL",
            "cityname": "Xilinhot",
            "airportcode": "XIL",
            "airportname": "Xilinhot"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CXMN",
            "cityname": "Xiamen",
            "airportcode": "XMN",
            "airportname": "Xiamen"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CXNN",
            "cityname": "Xining",
            "airportcode": "XNN",
            "airportname": "Xining"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CXUZ",
            "cityname": "Xuzhou",
            "airportcode": "XUZ",
            "airportname": "Xuzhou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CYBP",
            "cityname": "Yibin",
            "airportcode": "YBP",
            "airportname": "Yibin"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CYIH",
            "cityname": "Yichang",
            "airportcode": "YIH",
            "airportname": "Yichang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CYIN",
            "cityname": "Yining",
            "airportcode": "YIN",
            "airportname": "Yining"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CYIW",
            "cityname": "Yiwu",
            "airportcode": "YIW",
            "airportname": "Yiwu"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CYNJ",
            "cityname": "Yanji",
            "airportcode": "YNJ",
            "airportname": "Yanji"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CYNT",
            "cityname": "Yantai",
            "airportcode": "YNT",
            "airportname": "Yantai"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CYNZ",
            "cityname": "Yancheng",
            "airportcode": "YNZ",
            "airportname": "Yancheng"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CYZY",
            "cityname": "Zhangye",
            "airportcode": "YZY",
            "airportname": "Zhangye Ganzhou Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CZAT",
            "cityname": "Zhaotong",
            "airportcode": "ZAT",
            "airportname": "Zhaotong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CZHA",
            "cityname": "Zhanjiang",
            "airportcode": "ZHA",
            "airportname": "Zhanjiang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CZUH",
            "cityname": "Zhuhai",
            "airportcode": "ZUH",
            "airportname": "Zhuhai"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "CZYI",
            "cityname": "Zunyi",
            "airportcode": "ZYI",
            "airportname": "Zunyi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "DQAA",
            "cityname": "Daqing",
            "airportcode": "DQA",
            "airportname": "Daqing"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "ERNH",
            "cityname": "Erenhot",
            "airportcode": "ERL",
            "airportname": "Erenhot"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "GXHE",
            "cityname": "Xiahe",
            "airportcode": "GXH",
            "airportname": "Gannan Xiahe"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "GYUA",
            "cityname": "Guyuan",
            "airportcode": "GYU",
            "airportname": "Liupanshan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "HACN",
            "cityname": "Huaian",
            "airportcode": "HIA",
            "airportname": "Huai'an Lianshui Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "HCJA",
            "cityname": "Hechi",
            "airportcode": "HCJ",
            "airportname": "Jin Cheng Jiang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "HDGA",
            "cityname": "Handan",
            "airportcode": "HDG",
            "airportname": "Hebei Handan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "HJJA",
            "cityname": "Huai Hua",
            "airportcode": "HJJ",
            "airportname": "Huai Hua"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "HOTA",
            "cityname": "Hotan",
            "airportcode": "HTN",
            "airportname": "Hotan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "HPGA",
            "cityname": "Shennongjia",
            "airportcode": "HPG",
            "airportname": "Hongping"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "HZHA",
            "cityname": "Liping City",
            "airportcode": "HZH",
            "airportname": "Liping City"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "JICA",
            "cityname": "Jinchang",
            "airportcode": "JIC",
            "airportname": "Jinchuan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "JINA",
            "cityname": "Jinan",
            "airportcode": "TNA",
            "airportname": "Jinan Yaoqiang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "JIXI",
            "cityname": "Jixi",
            "airportcode": "JXA",
            "airportname": "Jixi Khanka Lake"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "JUHI",
            "cityname": "Chizhou",
            "airportcode": "JUH",
            "airportname": "Chizhou Jiuhuashan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "KGTA",
            "cityname": "Kangding",
            "airportcode": "KGT",
            "airportname": "Kangding"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "KJHA",
            "cityname": "Kaili",
            "airportcode": "KJH",
            "airportname": "Huangping"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "LZYA",
            "cityname": "Lin Zhi",
            "airportcode": "LZY",
            "airportname": "Lin Zhi"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "MIGA",
            "cityname": "Mian Yang",
            "airportcode": "MIG",
            "airportname": "Mian Yang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "MOHE",
            "cityname": "Mohe",
            "airportcode": "OHE",
            "airportname": "Mohe"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "NBSA",
            "cityname": "Baishan",
            "airportcode": "NBS",
            "airportname": "Changbaishan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "NLHA",
            "cityname": "Ninglang",
            "airportcode": "NLH",
            "airportname": "Luguhu"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "NLTA",
            "cityname": "Xinyuan City",
            "airportcode": "NLT",
            "airportname": "Xinyuan City"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "NZHA",
            "cityname": "Manzhouli",
            "airportcode": "NZH",
            "airportname": "Manzhouli"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "RHTA",
            "cityname": "Alxa Right Banner",
            "airportcode": "RHT",
            "airportname": "Alxa Right Banner"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "SHIG",
            "cityname": "Shigatse",
            "airportcode": "RKZ",
            "airportname": "Shigatse Peace Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "SHIQ",
            "cityname": "Shiquanhe",
            "airportcode": "NGQ",
            "airportname": "Shiquanhe"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "TCZA",
            "cityname": "Tengchong",
            "airportcode": "TCZ",
            "airportname": "Tengchong"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "THQA",
            "cityname": "Tianshui",
            "airportcode": "THQ",
            "airportname": "Maijishan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "TLQA",
            "cityname": "Turpan",
            "airportcode": "TLQ",
            "airportname": "Jiaohe"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "TNGS",
            "cityname": "Tangshan",
            "airportcode": "TVS",
            "airportname": "Tangshan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "WDSA",
            "cityname": "Shiyan",
            "airportcode": "WDS",
            "airportname": "Wudangshan"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "WNHA",
            "cityname": "Wenshan",
            "airportcode": "WNH",
            "airportname": "Wenshan Puzhehei"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "XIAN",
            "cityname": "Xi An",
            "airportcode": "XIY",
            "airportname": "Xi An Xianyang"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "YANG",
            "cityname": "Yangzhou",
            "airportcode": "YTY",
            "airportname": "Yangzhou Taizhou Airport"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "YCUA",
            "cityname": "Yun Cheng",
            "airportcode": "YCU",
            "airportname": "Yun Cheng"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "YICH",
            "cityname": "Yichun",
            "airportcode": "LDS",
            "airportname": "Yichun Lindu"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "YIUN",
            "cityname": "Yichun",
            "airportcode": "YIC",
            "airportname": "Yichun"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "ZHAN",
            "cityname": "Zhangjiakou",
            "airportcode": "ZQZ",
            "airportname": "Zhangjiakou"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "ZHON",
            "cityname": "Zhongwei",
            "airportcode": "ZHY",
            "airportname": "Zhongwei"
        },
        {
            "countrycode": "CN",
            "countryname": "China",
            "citycode": "ZHOU",
            "cityname": "Zhoubai",
            "airportcode": "JIQ",
            "airportname": "Zhoubai Airport"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "ACDA",
            "cityname": "Acandi",
            "airportcode": "ACD",
            "airportname": "Acandi"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "ACRA",
            "cityname": "Araracuara",
            "airportcode": "ACR",
            "airportname": "Araracuara"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "ADZA",
            "cityname": "San Andres Island",
            "airportcode": "ADZ",
            "airportname": "San Andres Island"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "APOA",
            "cityname": "Apartado",
            "airportcode": "APO",
            "airportname": "Apartado"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "AUCA",
            "cityname": "Arauca",
            "airportcode": "AUC",
            "airportname": "Arauca"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "AXMA",
            "cityname": "Armenia",
            "airportcode": "AXM",
            "airportname": "Armenia"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "BAQA",
            "cityname": "Barranquilla",
            "airportcode": "BAQ",
            "airportname": "Barranquilla"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "BGAA",
            "cityname": "Bucaramanga",
            "airportcode": "BGA",
            "airportname": "Bucaramanga"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "BOGA",
            "cityname": "Bogota",
            "airportcode": "BOG",
            "airportname": "Bogota"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "BSCA",
            "cityname": "Bahia Solano",
            "airportcode": "BSC",
            "airportname": "Bahia Solano"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "BUNA",
            "cityname": "Buenaventura",
            "airportcode": "BUN",
            "airportname": "Buenaventura"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "CAQA",
            "cityname": "Caucasia",
            "airportcode": "CAQ",
            "airportname": "Caucasia"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "CLOA",
            "cityname": "Cali",
            "airportcode": "CLO",
            "airportname": "Cali"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "CRCA",
            "cityname": "Cartago",
            "airportcode": "CRC",
            "airportname": "Cartago"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "CTGA",
            "cityname": "Cartagena",
            "airportcode": "CTG",
            "airportname": "Cartagena"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "CUCA",
            "cityname": "Cucuta",
            "airportcode": "CUC",
            "airportname": "Cucuta"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "CZUA",
            "cityname": "Corozal",
            "airportcode": "CZU",
            "airportname": "Corozal"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "EBGA",
            "cityname": "El Bagre",
            "airportcode": "EBG",
            "airportname": "El Bagre"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "EJAA",
            "cityname": "Barrancabermeja",
            "airportcode": "EJA",
            "airportname": "Barrancabermeja"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "EYPA",
            "cityname": "El Yopal",
            "airportcode": "EYP",
            "airportname": "El Yopal"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "FLAA",
            "cityname": "Florencia",
            "airportcode": "FLA",
            "airportname": "Florencia"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "GPIA",
            "cityname": "Guapi",
            "airportcode": "GPI",
            "airportname": "Guapi"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "IBEA",
            "cityname": "Ibague",
            "airportcode": "IBE",
            "airportname": "Ibague"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "IPIA",
            "cityname": "Ipiales",
            "airportcode": "IPI",
            "airportname": "Ipiales"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "LCRA",
            "cityname": "La Chorrera",
            "airportcode": "LCR",
            "airportname": "La Chorrera"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "LETA",
            "cityname": "Leticia",
            "airportcode": "LET",
            "airportname": "Leticia"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "LMCA",
            "cityname": "Lamacarena",
            "airportcode": "LMC",
            "airportname": "Lamacarena"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "LPDA",
            "cityname": "La Pedrera",
            "airportcode": "LPD",
            "airportname": "La Pedrera"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "LQMA",
            "cityname": "Puerto Leguizamo",
            "airportcode": "LQM",
            "airportname": "Puerto Leguizamo"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "MDEA",
            "cityname": "Medellin",
            "airportcode": "EOH",
            "airportname": "Medellin Enrique Olaya Herrera"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "MDEA",
            "cityname": "Medellin",
            "airportcode": "MDE",
            "airportname": "Medellin Jose Marie Cordova"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "MTRA",
            "cityname": "Monteria",
            "airportcode": "MTR",
            "airportname": "Monteria"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "MVPA",
            "cityname": "Mitu",
            "airportcode": "MVP",
            "airportname": "Mitu"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "MZLA",
            "cityname": "Manizales",
            "airportcode": "MZL",
            "airportname": "Manizales"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "NQUA",
            "cityname": "Nuqui",
            "airportcode": "NQU",
            "airportname": "Nuqui"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "NVAA",
            "cityname": "Neiva",
            "airportcode": "NVA",
            "airportname": "Neiva"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "PCRA",
            "cityname": "Puerto Carreno",
            "airportcode": "PCR",
            "airportname": "Puerto Carreno"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "PDAA",
            "cityname": "Puerto Inirida",
            "airportcode": "PDA",
            "airportname": "Puerto Inirida"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "PEIA",
            "cityname": "Pereira",
            "airportcode": "PEI",
            "airportname": "Pereira"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "PPNA",
            "cityname": "Popayan",
            "airportcode": "PPN",
            "airportname": "Popayan"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "PSOA",
            "cityname": "Pasto",
            "airportcode": "PSO",
            "airportname": "Pasto"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "PTXA",
            "cityname": "Pitalito",
            "airportcode": "PTX",
            "airportname": "Pitalito"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "PUUA",
            "cityname": "Puerto Asis",
            "airportcode": "PUU",
            "airportname": "Puerto Asis"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "PVAA",
            "cityname": "Providencia",
            "airportcode": "PVA",
            "airportname": "Providencia"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "RCHA",
            "cityname": "Riohacha",
            "airportcode": "RCH",
            "airportname": "Riohacha"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "RVEA",
            "cityname": "Saravena",
            "airportcode": "RVE",
            "airportname": "Saravena"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "SJEA",
            "cityname": "San Jose Del Gua",
            "airportcode": "SJE",
            "airportname": "San Jose Del Gua"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "SMRA",
            "cityname": "Santa Marta",
            "airportcode": "SMR",
            "airportname": "Santa Marta"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "TCDA",
            "cityname": "Tarapaca",
            "airportcode": "TCD",
            "airportname": "Tarapaca"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "TCOA",
            "cityname": "Tumaco",
            "airportcode": "TCO",
            "airportname": "Tumaco"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "TLUA",
            "cityname": "Tolu",
            "airportcode": "TLU",
            "airportname": "Tolu"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "TMEA",
            "cityname": "Tame",
            "airportcode": "TME",
            "airportname": "Tame"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "UIBA",
            "cityname": "Quibdo",
            "airportcode": "UIB",
            "airportname": "Quibdo"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "VGZA",
            "cityname": "Villagarzon",
            "airportcode": "VGZ",
            "airportname": "Villagarzon"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "VUPA",
            "cityname": "Valledupar",
            "airportcode": "VUP",
            "airportname": "Valledupar"
        },
        {
            "countrycode": "CO",
            "countryname": "Colombia",
            "citycode": "VVCA",
            "cityname": "Villavicencio",
            "airportcode": "VVC",
            "airportname": "Villavicencio"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "BAIB",
            "cityname": "Buenos Aires",
            "airportcode": "BAI",
            "airportname": "Buenos Aires"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "DRAB",
            "cityname": "Drake Bay",
            "airportcode": "DRK",
            "airportname": "Drake Bay"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "FONA",
            "cityname": "Fortuna",
            "airportcode": "FON",
            "airportname": "Fortuna"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "GLFA",
            "cityname": "Golfito",
            "airportcode": "GLF",
            "airportname": "Golfito"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "LIOA",
            "cityname": "Limon",
            "airportcode": "LIO",
            "airportname": "Limon"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "LIRA",
            "cityname": "Liberia",
            "airportcode": "LIR",
            "airportname": "Liberia"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "NOBA",
            "cityname": "Nosara Beach",
            "airportcode": "NOB",
            "airportname": "Nosara Beach"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "PBPA",
            "cityname": "Punta Islita",
            "airportcode": "PBP",
            "airportname": "Punta Islita"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "PJMA",
            "cityname": "Puerto Jimenez",
            "airportcode": "PJM",
            "airportname": "Puerto Jimenez"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "PMZA",
            "cityname": "Palmar",
            "airportcode": "PMZ",
            "airportname": "Palmar"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "SJOA",
            "cityname": "San Jose",
            "airportcode": "SJO",
            "airportname": "San Jose Juan Santamaria"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "SJOA",
            "cityname": "San Jose",
            "airportcode": "SYQ",
            "airportname": "San Jose Tobias Bolanos"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "TMUA",
            "cityname": "Tambor",
            "airportcode": "TMU",
            "airportname": "Tambor"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "TNOA",
            "cityname": "Tamarindo",
            "airportcode": "TNO",
            "airportname": "Tamarindo"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "TTQA",
            "cityname": "Tortuquero",
            "airportcode": "TTQ",
            "airportname": "Tortuquero"
        },
        {
            "countrycode": "CR",
            "countryname": "Costa Rica",
            "citycode": "XQPA",
            "cityname": "Quepos",
            "airportcode": "XQP",
            "airportname": "Quepos"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "BANY",
            "cityname": "Cayo Las Brujas",
            "airportcode": "BWW",
            "airportname": "Las Brujas"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "BCAA",
            "cityname": "Baracoa",
            "airportcode": "BCA",
            "airportname": "Baracoa"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "BYMA",
            "cityname": "Bayamo",
            "airportcode": "BYM",
            "airportname": "Bayamo"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "CCCA",
            "cityname": "Cayo Coco",
            "airportcode": "CCC",
            "airportname": "Cayo Coco"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "CFGA",
            "cityname": "Cienfuegos",
            "airportcode": "CFG",
            "airportname": "Cienfuegos"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "CMWA",
            "cityname": "Camaguey",
            "airportcode": "CMW",
            "airportname": "Camaguey"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "CYOA",
            "cityname": "Cayo Largo Del Sur",
            "airportcode": "CYO",
            "airportname": "Cayo Largo Del Sur"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "GAOA",
            "cityname": "Guantanamo",
            "airportcode": "GAO",
            "airportname": "Guantanamo Los Canos"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "GERA",
            "cityname": "Nueva Gerona",
            "airportcode": "GER",
            "airportname": "Nueva Gerona"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "HAVA",
            "cityname": "Havana",
            "airportcode": "HAV",
            "airportname": "Havana"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "HOGA",
            "cityname": "Holguin",
            "airportcode": "HOG",
            "airportname": "Holguin"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "MOAA",
            "cityname": "Moa",
            "airportcode": "MOA",
            "airportname": "Moa"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "MZOA",
            "cityname": "Manzanillo",
            "airportcode": "MZO",
            "airportname": "Manzanillo"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "SCUA",
            "cityname": "Santiago",
            "airportcode": "SCU",
            "airportname": "Santiago"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "SNUA",
            "cityname": "Santa Clara",
            "airportcode": "SNU",
            "airportname": "Santa Clara"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "UPBA",
            "cityname": "Havana",
            "airportcode": "UPB",
            "airportname": "Havana"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "VRAA",
            "cityname": "Varadero",
            "airportcode": "VRA",
            "airportname": "Varadero"
        },
        {
            "countrycode": "CU",
            "countryname": "Cuba",
            "citycode": "VTUA",
            "cityname": "Las Tunas",
            "airportcode": "VTU",
            "airportname": "Las Tunas"
        },
        {
            "countrycode": "CV",
            "countryname": "Cape Verde",
            "citycode": "BVCA",
            "cityname": "Boa Vista",
            "airportcode": "BVC",
            "airportname": "Boa Vista"
        },
        {
            "countrycode": "CV",
            "countryname": "Cape Verde",
            "citycode": "MMOA",
            "cityname": "Maio",
            "airportcode": "MMO",
            "airportname": "Vila Do Maio"
        },
        {
            "countrycode": "CV",
            "countryname": "Cape Verde",
            "citycode": "RAIA",
            "cityname": "Praia",
            "airportcode": "RAI",
            "airportname": "Praia"
        },
        {
            "countrycode": "CV",
            "countryname": "Cape Verde",
            "citycode": "SFLA",
            "cityname": "Sao Filipe",
            "airportcode": "SFL",
            "airportname": "Sao Filipe"
        },
        {
            "countrycode": "CV",
            "countryname": "Cape Verde",
            "citycode": "SIDA",
            "cityname": "Sal",
            "airportcode": "SID",
            "airportname": "Sal"
        },
        {
            "countrycode": "CV",
            "countryname": "Cape Verde",
            "citycode": "SNEA",
            "cityname": "Sao Nicolau",
            "airportcode": "SNE",
            "airportname": "Sao Nicolau"
        },
        {
            "countrycode": "CV",
            "countryname": "Cape Verde",
            "citycode": "VXEA",
            "cityname": "Sao Vicente",
            "airportcode": "VXE",
            "airportname": "Sao Vicente"
        },
        {
            "countrycode": "CW",
            "countryname": "Curacao",
            "citycode": "CURA",
            "cityname": "Curacao",
            "airportcode": "CUR",
            "airportname": "Curacao"
        },
        {
            "countrycode": "CX",
            "countryname": "Christmas Island",
            "citycode": "XCHA",
            "cityname": "Christmas Island",
            "airportcode": "XCH",
            "airportname": "Christmas Island"
        },
        {
            "countrycode": "CY",
            "countryname": "Cyprus",
            "citycode": "ERCA",
            "cityname": "Ercan",
            "airportcode": "ECN",
            "airportname": "Ercan"
        },
        {
            "countrycode": "CY",
            "countryname": "Cyprus",
            "citycode": "LARN",
            "cityname": "Larnaca",
            "airportcode": "LCA",
            "airportname": "Larnaca"
        },
        {
            "countrycode": "CY",
            "countryname": "Cyprus",
            "citycode": "PAPH",
            "cityname": "Paphos",
            "airportcode": "PFO",
            "airportname": "Paphos"
        },
        {
            "countrycode": "CZ",
            "countryname": "Czech Republic",
            "citycode": "BRNO",
            "cityname": "Brno",
            "airportcode": "BRQ",
            "airportname": "Brno-Turany"
        },
        {
            "countrycode": "CZ",
            "countryname": "Czech Republic",
            "citycode": "KARN",
            "cityname": "Karlovy Vary",
            "airportcode": "KLV",
            "airportname": "Karlovy Vary"
        },
        {
            "countrycode": "CZ",
            "countryname": "Czech Republic",
            "citycode": "OSTR",
            "cityname": "Ostrava",
            "airportcode": "OSR",
            "airportname": "Ostrava"
        },
        {
            "countrycode": "CZ",
            "countryname": "Czech Republic",
            "citycode": "PEDA",
            "cityname": "Pardubice",
            "airportcode": "PED",
            "airportname": "Pardubice"
        },
        {
            "countrycode": "CZ",
            "countryname": "Czech Republic",
            "citycode": "PRAG",
            "cityname": "Prague",
            "airportcode": "PRG",
            "airportname": "Prague"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "AUGS",
            "cityname": "Augsburg",
            "airportcode": "AGB",
            "airportname": "Augsburg"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "BART",
            "cityname": "Barth",
            "airportcode": "BBH",
            "airportname": "Barth"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "BRAU",
            "cityname": "Braunschweig",
            "airportcode": "BWE",
            "airportname": "Braunschweig"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "CSOA",
            "cityname": "Cochstedt",
            "airportcode": "CSO",
            "airportname": "Magdeburg-Cochstedt"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "FINK",
            "cityname": "Finkenwerder",
            "airportcode": "XFW",
            "airportname": "Finkenwerder"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "KASS",
            "cityname": "Kassel",
            "airportcode": "KSF",
            "airportname": "Kassel"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "RBMA",
            "cityname": "Straubing",
            "airportcode": "RBM",
            "airportname": "Straubing"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "WYKA",
            "cityname": "Wyk Auf Foehr",
            "airportcode": "OHR",
            "airportname": "Wyk Auf Foehr"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "BADE",
            "cityname": "Baden-Baden",
            "airportcode": "FKB",
            "airportname": "Karlsruhe / Baden-Baden"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "FRIE",
            "cityname": "Friedrichshafen",
            "airportcode": "FDH",
            "airportname": "Friedrichshafen"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "MANN",
            "cityname": "Mannheim",
            "airportcode": "MHG",
            "airportname": "Mannheim"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "STUT",
            "cityname": "Stuttgart",
            "airportcode": "STR",
            "airportname": "Stuttgart"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "MEMB",
            "cityname": "Memmingen",
            "airportcode": "FMM",
            "airportname": "Memmingen Allgäu"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "MUNI",
            "cityname": "Munich",
            "airportcode": "MUC",
            "airportname": "Munich"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "NURE",
            "cityname": "Nuremberg",
            "airportcode": "NUE",
            "airportname": "Nuremberg"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "BERL",
            "cityname": "Berlin",
            "airportcode": "SXF",
            "airportname": "Berlin Schoenefeld"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "BERL",
            "cityname": "Berlin",
            "airportcode": "TXL",
            "airportname": "Berlin Tegel"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "BREM",
            "cityname": "Bremen",
            "airportcode": "BRE",
            "airportname": "Bremen"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "HAMB",
            "cityname": "Hamburg",
            "airportcode": "HAM",
            "airportname": "Hamburg International"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "HAMB",
            "cityname": "Hamburg",
            "airportcode": "LBC",
            "airportname": "Hamburg Lubeck"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "FRAN",
            "cityname": "Frankfurt",
            "airportcode": "FRA",
            "airportname": "Frankfurt am Main"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "HERI",
            "cityname": "Heringsdorf",
            "airportcode": "HDF",
            "airportname": "Heringsdorf"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "ROST",
            "cityname": "Rostock",
            "airportcode": "RLG",
            "airportname": "Rostock"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "HANN",
            "cityname": "Hannover",
            "airportcode": "HAJ",
            "airportname": "Hannover"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "COLO",
            "cityname": "Cologne",
            "airportcode": "CGN",
            "airportname": "Cologne"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "DORT",
            "cityname": "Dortmund",
            "airportcode": "DTM",
            "airportname": "Dortmund"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "DUSS",
            "cityname": "Dusseldorf",
            "airportcode": "DUS",
            "airportname": "Dusseldorf International"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "DUSS",
            "cityname": "Dusseldorf",
            "airportcode": "NRN",
            "airportname": "Dusseldorf Weeze"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "MUNS",
            "cityname": "Munster",
            "airportcode": "FMO",
            "airportname": "Munster Osnabruck"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "PADE",
            "cityname": "Paderborn",
            "airportcode": "PAD",
            "airportname": "Paderborn"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "FRAN",
            "cityname": "Frankfurt",
            "airportcode": "HHN",
            "airportname": "Frankfurt Hahn"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "SAAR",
            "cityname": "Saarbruecken",
            "airportcode": "ZQW",
            "airportname": "Zweibrücken"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "SAAR",
            "cityname": "Saarbruecken",
            "airportcode": "SCN",
            "airportname": "Saarbruecken"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "DRES",
            "cityname": "Dresden",
            "airportcode": "DRS",
            "airportname": "Dresden"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "LEIP",
            "cityname": "Leipzig",
            "airportcode": "LEJ",
            "airportname": "Leipzig"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "WEST",
            "cityname": "Westerland",
            "airportcode": "GWT",
            "airportname": "Westerland"
        },
        {
            "countrycode": "DE",
            "countryname": "Germany",
            "citycode": "ERFU",
            "cityname": "Erfurt",
            "airportcode": "ERF",
            "airportname": "Erfurt"
        },
        {
            "countrycode": "DJ",
            "countryname": "Djibouti",
            "citycode": "JIBA",
            "cityname": "Djibouti",
            "airportcode": "JIB",
            "airportname": "Djibouti"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "AALB",
            "cityname": "Aalborg",
            "airportcode": "AAL",
            "airportname": "Aalborg"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "AARH",
            "cityname": "Aarhus",
            "airportcode": "AAR",
            "airportname": "Aarhus"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "BILL",
            "cityname": "Billund",
            "airportcode": "BLL",
            "airportname": "Billund"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "COPE",
            "cityname": "Copenhagen",
            "airportcode": "CPH",
            "airportname": "Copenhagen"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "COPE",
            "cityname": "Copenhagen",
            "airportcode": "RKE",
            "airportname": "Copenhagen Roskilde"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "ESBJ",
            "cityname": "Esbjerg",
            "airportcode": "EBJ",
            "airportname": "Esbjerg"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "KARU",
            "cityname": "Karup",
            "airportcode": "KRP",
            "airportname": "Karup"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "ODEN",
            "cityname": "Odense",
            "airportcode": "ODE",
            "airportname": "Odense"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "RONO",
            "cityname": "Ronne Bornholm",
            "airportcode": "RNN",
            "airportname": "Ronne Bornholm"
        },
        {
            "countrycode": "DK",
            "countryname": "Denmark",
            "citycode": "SOND",
            "cityname": "Sonderborg",
            "airportcode": "SGD",
            "airportname": "Sonderborg"
        },
        {
            "countrycode": "DM",
            "countryname": "Dominica",
            "citycode": "DOMA",
            "cityname": "Dominica",
            "airportcode": "DCF",
            "airportname": "Dominica Cane Field"
        },
        {
            "countrycode": "DM",
            "countryname": "Dominica",
            "citycode": "DOMA",
            "cityname": "Dominica",
            "airportcode": "DOM",
            "airportname": "Dominica Melville Hall"
        },
        {
            "countrycode": "DO",
            "countryname": "Dominican Republic",
            "citycode": "LRMA",
            "cityname": "La Romana",
            "airportcode": "LRM",
            "airportname": "La Romana"
        },
        {
            "countrycode": "DO",
            "countryname": "Dominican Republic",
            "citycode": "POPA",
            "cityname": "Puerto Plata",
            "airportcode": "POP",
            "airportname": "Puerto Plata"
        },
        {
            "countrycode": "DO",
            "countryname": "Dominican Republic",
            "citycode": "PUJA",
            "cityname": "Punta Cana",
            "airportcode": "PUJ",
            "airportname": "Punta Cana"
        },
        {
            "countrycode": "DO",
            "countryname": "Dominican Republic",
            "citycode": "SAMB",
            "cityname": "Samana",
            "airportcode": "AZS",
            "airportname": "Samana"
        },
        {
            "countrycode": "DO",
            "countryname": "Dominican Republic",
            "citycode": "SDQA",
            "cityname": "Santo Domingo",
            "airportcode": "JBQ",
            "airportname": "La Isabela International"
        },
        {
            "countrycode": "DO",
            "countryname": "Dominican Republic",
            "citycode": "SDQA",
            "cityname": "Santo Domingo",
            "airportcode": "SDQ",
            "airportname": "Santo Domingo Las Americas"
        },
        {
            "countrycode": "DO",
            "countryname": "Dominican Republic",
            "citycode": "STIA",
            "cityname": "Santiago",
            "airportcode": "STI",
            "airportname": "Santiago"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "AAEA",
            "cityname": "Annaba",
            "airportcode": "AAE",
            "airportname": "Annaba"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "ALGA",
            "cityname": "Algiers",
            "airportcode": "ALG",
            "airportname": "Algiers"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "AZRA",
            "cityname": "Adrar",
            "airportcode": "AZR",
            "airportname": "Adrar"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "BJAA",
            "cityname": "Bejaia",
            "airportcode": "BJA",
            "airportname": "Bejaia"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "BLJA",
            "cityname": "Batna",
            "airportcode": "BLJ",
            "airportname": "Batna"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "BMWA",
            "cityname": "Bordj Badji Mokhtar",
            "airportcode": "BMW",
            "airportname": "Bordj Badji Mokhtar"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "BSKA",
            "cityname": "Biskra",
            "airportcode": "BSK",
            "airportname": "Biskra"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "CBHA",
            "cityname": "Bechar",
            "airportcode": "CBH",
            "airportname": "Bechar"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "CFKA",
            "cityname": "Chlef",
            "airportcode": "CFK",
            "airportname": "Chlef"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "CZLA",
            "cityname": "Constantine",
            "airportcode": "CZL",
            "airportname": "Constantine"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "DJGA",
            "cityname": "Djanet",
            "airportcode": "DJG",
            "airportname": "Djanet"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "ELGA",
            "cityname": "El Golea",
            "airportcode": "ELG",
            "airportname": "El Golea"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "ELUA",
            "cityname": "El Oued",
            "airportcode": "ELU",
            "airportname": "El Oued"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "GHAA",
            "cityname": "Ghardaia",
            "airportcode": "GHA",
            "airportname": "Ghardaia"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "GJLA",
            "cityname": "Jijel",
            "airportcode": "GJL",
            "airportname": "Jijel"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "HMEA",
            "cityname": "Hassi Messaoud",
            "airportcode": "HME",
            "airportname": "Hassi Messaoud"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "IAMA",
            "cityname": "In Amenas",
            "airportcode": "IAM",
            "airportname": "In Amenas"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "INZA",
            "cityname": "In Salah",
            "airportcode": "INZ",
            "airportname": "In Salah"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "LOOA",
            "cityname": "Laghouat",
            "airportcode": "LOO",
            "airportname": "Laghouat"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "MUWA",
            "cityname": "Mascara",
            "airportcode": "MUW",
            "airportname": "Mascara"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "OGXA",
            "cityname": "Ouargla",
            "airportcode": "OGX",
            "airportname": "Ouargla"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "ORNA",
            "cityname": "Oran",
            "airportcode": "ORN",
            "airportname": "Ben Bella Airport"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "QSFA",
            "cityname": "Setif",
            "airportcode": "QSF",
            "airportname": "Setif"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "TEEA",
            "cityname": "Tbessa",
            "airportcode": "TEE",
            "airportname": "Tbessa"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "TGRA",
            "cityname": "Touggourt",
            "airportcode": "TGR",
            "airportname": "Touggourt"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "TIDA",
            "cityname": "Tiaret",
            "airportcode": "TID",
            "airportname": "Tiaret"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "TINA",
            "cityname": "Tindouf",
            "airportcode": "TIN",
            "airportname": "Tindouf"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "TLMA",
            "cityname": "Tlemcen",
            "airportcode": "TLM",
            "airportname": "Tlemcen"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "TMRA",
            "cityname": "Tamanrasset",
            "airportcode": "TMR",
            "airportname": "Tamanrasset"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "TMXA",
            "cityname": "Timimoun",
            "airportcode": "TMX",
            "airportname": "Timimoun"
        },
        {
            "countrycode": "DZ",
            "countryname": "Algeria",
            "citycode": "VVZA",
            "cityname": "Illizi",
            "airportcode": "VVZ",
            "airportname": "Illizi"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "CUEA",
            "cityname": "Cuenca",
            "airportcode": "CUE",
            "airportname": "Cuenca"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "ESMA",
            "cityname": "Esmeraldas",
            "airportcode": "ESM",
            "airportname": "Esmeraldas"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "ETRA",
            "cityname": "Santa Rosa",
            "airportcode": "ETR",
            "airportname": "Santa Rosa"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "GPSA",
            "cityname": "Galapagos Is",
            "airportcode": "GPS",
            "airportname": "Galapagos Is"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "GYEA",
            "cityname": "Guayaquil",
            "airportcode": "GYE",
            "airportname": "Guayaquil"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "LGQA",
            "cityname": "Lago Agrio",
            "airportcode": "LGQ",
            "airportname": "Lago Agrio"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "LOHA",
            "cityname": "Loja",
            "airportcode": "LOH",
            "airportname": "Loja"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "LTXA",
            "cityname": "Latacunga",
            "airportcode": "LTX",
            "airportname": "Latacunga"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "MECA",
            "cityname": "Manta",
            "airportcode": "MEC",
            "airportname": "Manta"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "OCCA",
            "cityname": "Coca",
            "airportcode": "OCC",
            "airportname": "Coca"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "SCYA",
            "cityname": "San Cristobal",
            "airportcode": "SCY",
            "airportname": "San Cristobal"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "SNCA",
            "cityname": "Salinas",
            "airportcode": "SNC",
            "airportname": "Salinas"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "TUAA",
            "cityname": "Tulcan",
            "airportcode": "TUA",
            "airportname": "Tulcan"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "UIOA",
            "cityname": "Quito",
            "airportcode": "UIO",
            "airportname": "Quito"
        },
        {
            "countrycode": "EC",
            "countryname": "Ecuador",
            "citycode": "XMSA",
            "cityname": "Macas",
            "airportcode": "XMS",
            "airportname": "Macas"
        },
        {
            "countrycode": "EE",
            "countryname": "Estonia",
            "citycode": "KDLA",
            "cityname": "Kardla",
            "airportcode": "KDL",
            "airportname": "Kardla"
        },
        {
            "countrycode": "EE",
            "countryname": "Estonia",
            "citycode": "KURE",
            "cityname": "Kuressaare",
            "airportcode": "URE",
            "airportname": "Kuressaare"
        },
        {
            "countrycode": "EE",
            "countryname": "Estonia",
            "citycode": "TALL",
            "cityname": "Tallinn",
            "airportcode": "TLL",
            "airportname": "Tallinn"
        },
        {
            "countrycode": "EE",
            "countryname": "Estonia",
            "citycode": "TAYA",
            "cityname": "Tartu",
            "airportcode": "TAY",
            "airportname": "Tartu"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "ABUS",
            "cityname": "Abu Simbel",
            "airportcode": "ABS",
            "airportname": "Abu Simbel"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "ALEX",
            "cityname": "Alexandria",
            "airportcode": "ALY",
            "airportname": "Alexandria El Nohza"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "ALEX",
            "cityname": "Alexandria",
            "airportcode": "HBE",
            "airportname": "Alexandria Borg El Arab"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "ASSI",
            "cityname": "Assiut",
            "airportcode": "ATZ",
            "airportname": "Assiut"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "ASWA",
            "cityname": "Aswan Daraw",
            "airportcode": "ASW",
            "airportname": "Aswan Daraw"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "CAIR",
            "cityname": "Cairo",
            "airportcode": "CAI",
            "airportname": "Cairo"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "HURG",
            "cityname": "Hurghada",
            "airportcode": "HRG",
            "airportname": "Hurghada"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "LUXO",
            "cityname": "Luxor",
            "airportcode": "LXR",
            "airportname": "Luxor"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "MART",
            "cityname": "Marsa Allam",
            "airportcode": "RMF",
            "airportname": "Marsa Allam"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "MERS",
            "cityname": "Mersa Matruh",
            "airportcode": "MUH",
            "airportname": "Mersa Matruh"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "SHAR",
            "cityname": "Sharm El Sheikh",
            "airportcode": "SSH",
            "airportname": "Sharm El Sheikh"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "SKVA",
            "cityname": "Santa Katarina",
            "airportcode": "SKV",
            "airportname": "Santa Katarina"
        },
        {
            "countrycode": "EG",
            "countryname": "Egypt",
            "citycode": "SOHG",
            "cityname": "Sohag",
            "airportcode": "HMB",
            "airportname": "Sohag"
        },
        {
            "countrycode": "ER",
            "countryname": "Eritrea",
            "citycode": "ASMA",
            "cityname": "Asmara",
            "airportcode": "ASM",
            "airportname": "Asmara"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "CDTA",
            "cityname": "Castellon de la Plana",
            "airportcode": "CDT",
            "airportname": "Castellon de la Plana"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "HEVA",
            "cityname": "Huelva",
            "airportcode": "HEV",
            "airportname": "Huelva"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "LLEI",
            "cityname": "Lleida",
            "airportcode": "ILD",
            "airportname": "Lleida"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "ALME",
            "cityname": "Almeria",
            "airportcode": "LEI",
            "airportname": "Almeria"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "GRAO",
            "cityname": "Granada",
            "airportcode": "GRX",
            "airportname": "Granada"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "JERE",
            "cityname": "Jerez",
            "airportcode": "XRY",
            "airportname": "Jerez"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "MALA",
            "cityname": "Malaga",
            "airportcode": "AGP",
            "airportname": "Malaga"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "SEVI",
            "cityname": "Seville",
            "airportcode": "SVQ",
            "airportname": "Seville"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "ZARA",
            "cityname": "Zaragoza",
            "airportcode": "ZAZ",
            "airportname": "Zaragoza"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "AVIL",
            "cityname": "Asturias",
            "airportcode": "OVD",
            "airportname": "Asturias"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "ARRE",
            "cityname": "Lanzarote",
            "airportcode": "ACE",
            "airportname": "Lanzarote"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "FUER",
            "cityname": "Fuerteventura",
            "airportcode": "FUE",
            "airportname": "Fuerteventura"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "GRAN",
            "cityname": "Gran Canaria",
            "airportcode": "LPA",
            "airportname": "Gran Canaria Las Palmas"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "LAGO",
            "cityname": "La Gomera Tenerife",
            "airportcode": "GMZ",
            "airportname": "La Gomera Tenerife"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "LAPA",
            "cityname": "La Palma",
            "airportcode": "SPC",
            "airportname": "La Palma"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "TENE",
            "cityname": "Tenerife",
            "airportcode": "TFN",
            "airportname": "Tenerife North"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "TENE",
            "cityname": "Tenerife",
            "airportcode": "TFS",
            "airportname": "Tenerife South"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "VALV",
            "cityname": "Valverde Hierro",
            "airportcode": "VDE",
            "airportname": "Valverde Hierro"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "SANT",
            "cityname": "Santander",
            "airportcode": "SDR",
            "airportname": "Santander"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "LEON",
            "cityname": "Leon",
            "airportcode": "LEN",
            "airportname": "Leon"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "RGSA",
            "cityname": "Burgos",
            "airportcode": "RGS",
            "airportname": "Burgos"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "SALA",
            "cityname": "Salamanca",
            "airportcode": "SLM",
            "airportname": "Salamanca Matacan"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "VALL",
            "cityname": "Valladolid",
            "airportcode": "VLL",
            "airportname": "Valladolid"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "BARC",
            "cityname": "Barcelona",
            "airportcode": "BCN",
            "airportname": "Barcelona"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "GERO",
            "cityname": "Gerona",
            "airportcode": "GRO",
            "airportname": "Gerona"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "REUS",
            "cityname": "Reus",
            "airportcode": "REU",
            "airportname": "Reus"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "BADA",
            "cityname": "Badajoz Talaveral",
            "airportcode": "BJZ",
            "airportname": "Badajoz Talaveral"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "LACO",
            "cityname": "La Coruna",
            "airportcode": "LCG",
            "airportname": "La Coruna"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "SANC",
            "cityname": "Santiago de Compostela",
            "airportcode": "SCQ",
            "airportname": "Santiago de Compostela"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "VIGO",
            "cityname": "Vigo",
            "airportcode": "VGO",
            "airportname": "Vigo"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "IBIZ",
            "cityname": "Ibiza",
            "airportcode": "IBZ",
            "airportname": "Ibiza"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "MENO",
            "cityname": "Menorca",
            "airportcode": "MAH",
            "airportname": "Menorca"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "PALM",
            "cityname": "Palma",
            "airportcode": "PMI",
            "airportname": "Palma - Majorca"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "LOGR",
            "cityname": "Logrono",
            "airportcode": "RJL",
            "airportname": "Logrono"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "MADR",
            "cityname": "Madrid",
            "airportcode": "MAD",
            "airportname": "Madrid"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "MELI",
            "cityname": "Melilla",
            "airportcode": "MLN",
            "airportname": "Melilla"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "MURC",
            "cityname": "Murcia",
            "airportcode": "MJV",
            "airportname": "Murcia"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "PAMP",
            "cityname": "Pamplona",
            "airportcode": "PNA",
            "airportname": "Pamplona"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "BILB",
            "cityname": "Bilbao",
            "airportcode": "BIO",
            "airportname": "Bilbao"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "SANS",
            "cityname": "San Sebastian",
            "airportcode": "EAS",
            "airportname": "San Sebastian Fuenteraba"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "VITO",
            "cityname": "Vitoria",
            "airportcode": "VIT",
            "airportname": "Vitoria"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "ALIC",
            "cityname": "Alicante",
            "airportcode": "ALC",
            "airportname": "Alicante"
        },
        {
            "countrycode": "ES",
            "countryname": "Spain",
            "citycode": "VALE",
            "cityname": "Valencia",
            "airportcode": "VLC",
            "airportname": "Valencia"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "ADDA",
            "cityname": "Addis Ababa",
            "airportcode": "ADD",
            "airportname": "Addis Ababa"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "AMHA",
            "cityname": "Arba Mintch",
            "airportcode": "AMH",
            "airportname": "Arba Mintch"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "ASOA",
            "cityname": "Asosa",
            "airportcode": "ASO",
            "airportname": "Asosa"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "AWAA",
            "cityname": "Awassa",
            "airportcode": "AWA",
            "airportname": "Awassa"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "AXUA",
            "cityname": "Axum",
            "airportcode": "AXU",
            "airportname": "Axum"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "BJRA",
            "cityname": "Bahar Dar",
            "airportcode": "BJR",
            "airportname": "Bahar Dar"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "DIRA",
            "cityname": "Dire Dawa",
            "airportcode": "DIR",
            "airportname": "Dire Dawa"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "DSEA",
            "cityname": "Dessie",
            "airportcode": "DSE",
            "airportname": "Dessie"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "GDEA",
            "cityname": "Gode / Iddidole",
            "airportcode": "GDE",
            "airportname": "Gode / Iddidole"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "GDQA",
            "cityname": "Gondar",
            "airportcode": "GDQ",
            "airportname": "Gondar"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "GMBA",
            "cityname": "Gambela",
            "airportcode": "GMB",
            "airportname": "Gambela"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "HUEA",
            "cityname": "Humera",
            "airportcode": "HUE",
            "airportname": "Humera"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "JIJA",
            "cityname": "Jijiga",
            "airportcode": "JIJ",
            "airportname": "Jijiga"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "JIMA",
            "cityname": "Jimma",
            "airportcode": "JIM",
            "airportname": "Jimma"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "LLIA",
            "cityname": "Lalibela",
            "airportcode": "LLI",
            "airportname": "Lalibela"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "MQXA",
            "cityname": "Makale",
            "airportcode": "MQX",
            "airportname": "Makale"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "SQJA",
            "cityname": "Shehdi",
            "airportcode": "SQJ",
            "airportname": "Shehdi"
        },
        {
            "countrycode": "ET",
            "countryname": "Ethiopia",
            "citycode": "SZEA",
            "cityname": "Semera",
            "airportcode": "SZE",
            "airportname": "Semera"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "HELS",
            "cityname": "Helsinki",
            "airportcode": "HEL",
            "airportname": "Helsinki Vantaa"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "JOEN",
            "cityname": "Joensuu",
            "airportcode": "JOE",
            "airportname": "Joensuu"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "JYVA",
            "cityname": "Jyvaskyla",
            "airportcode": "JYV",
            "airportname": "Jyvaskyla"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "KAJA",
            "cityname": "Kajaani",
            "airportcode": "KAJ",
            "airportname": "Kajaani"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "KOKK",
            "cityname": "Kokkola / Pietarsaari Kruunupyy",
            "airportcode": "KOK",
            "airportname": "Kokkola / Pietarsaari Kruunupyy"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "KUOP",
            "cityname": "Kuopio",
            "airportcode": "KUO",
            "airportname": "Kuopio"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "KUUS",
            "cityname": "Kuusamo",
            "airportcode": "KAO",
            "airportname": "Kuusamo"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "LAPP",
            "cityname": "Lappeenranta",
            "airportcode": "LPP",
            "airportname": "Lappeenranta"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "MARJ",
            "cityname": "Mariehamn",
            "airportcode": "MHQ",
            "airportname": "Mariehamn"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "OULU",
            "cityname": "Oulu",
            "airportcode": "OUL",
            "airportname": "Oulu"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "PORI",
            "cityname": "Pori",
            "airportcode": "POR",
            "airportname": "Pori"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "SAVO",
            "cityname": "Savonlinna",
            "airportcode": "SVL",
            "airportname": "Savonlinna"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "SEIN",
            "cityname": "Seinajoki Ilmajoki",
            "airportcode": "SJY",
            "airportname": "Seinajoki Ilmajoki"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "TAMP",
            "cityname": "Tampere",
            "airportcode": "TMP",
            "airportname": "Tampere"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "TURK",
            "cityname": "Turku",
            "airportcode": "TKU",
            "airportname": "Turku"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "VAAS",
            "cityname": "Vaasa",
            "airportcode": "VAA",
            "airportname": "Vaasa"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "ENON",
            "cityname": "Enontekio",
            "airportcode": "ENF",
            "airportname": "Enontekio"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "IVAL",
            "cityname": "Ivalo",
            "airportcode": "IVL",
            "airportname": "Ivalo"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "KEMI",
            "cityname": "Kemi / Tornio",
            "airportcode": "KEM",
            "airportname": "Kemi / Tornio"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "KITT",
            "cityname": "Kittilä",
            "airportcode": "KTT",
            "airportname": "Kittilä"
        },
        {
            "countrycode": "FI",
            "countryname": "Finland",
            "citycode": "ROVA",
            "cityname": "Rovaniemi",
            "airportcode": "RVN",
            "airportname": "Rovaniemi"
        },
        {
            "countrycode": "FJ",
            "countryname": "Fiji",
            "citycode": "ICIF",
            "cityname": "Cicia",
            "airportcode": "ICI",
            "airportname": "Cicia"
        },
        {
            "countrycode": "FJ",
            "countryname": "Fiji",
            "citycode": "KDVF",
            "cityname": "Kandavu",
            "airportcode": "KDV",
            "airportname": "Kandavu"
        },
        {
            "countrycode": "FJ",
            "countryname": "Fiji",
            "citycode": "LBSF",
            "cityname": "Labasa",
            "airportcode": "LBS",
            "airportname": "Labasa"
        },
        {
            "countrycode": "FJ",
            "countryname": "Fiji",
            "citycode": "NANF",
            "cityname": "Nadi",
            "airportcode": "NAN",
            "airportname": "Nadi"
        },
        {
            "countrycode": "FJ",
            "countryname": "Fiji",
            "citycode": "SUVF",
            "cityname": "Suva",
            "airportcode": "SUV",
            "airportname": "Suva"
        },
        {
            "countrycode": "FJ",
            "countryname": "Fiji",
            "citycode": "SVUF",
            "cityname": "Savusavu",
            "airportcode": "SVU",
            "airportname": "Savusavu"
        },
        {
            "countrycode": "FJ",
            "countryname": "Fiji",
            "citycode": "TVUF",
            "cityname": "Taveuni",
            "airportcode": "TVU",
            "airportname": "Taveuni"
        },
        {
            "countrycode": "FK",
            "countryname": "Falkland Islands",
            "citycode": "MPNA",
            "cityname": "Stanley",
            "airportcode": "MPN",
            "airportname": "Stanley"
        },
        {
            "countrycode": "FM",
            "countryname": "Micronesia",
            "citycode": "KSAA",
            "cityname": "Kosrae",
            "airportcode": "KSA",
            "airportname": "Kosrae"
        },
        {
            "countrycode": "FM",
            "countryname": "Micronesia",
            "citycode": "PNIA",
            "cityname": "Pohnpei",
            "airportcode": "PNI",
            "airportname": "Pohnpei"
        },
        {
            "countrycode": "FM",
            "countryname": "Micronesia",
            "citycode": "TKKA",
            "cityname": "Truk",
            "airportcode": "TKK",
            "airportname": "Truk"
        },
        {
            "countrycode": "FM",
            "countryname": "Micronesia",
            "citycode": "YAPA",
            "cityname": "Yap",
            "airportcode": "YAP",
            "airportname": "Yap"
        },
        {
            "countrycode": "FO",
            "countryname": "Faroe Islands",
            "citycode": "SORV",
            "cityname": "Sorvagur",
            "airportcode": "FAE",
            "airportname": "Sorvagur"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "AIXE",
            "cityname": "Aix en Provence",
            "airportcode": "QXB",
            "airportname": "Aix en Provence"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "ANGE",
            "cityname": "Angers",
            "airportcode": "ANE",
            "airportname": "Angers"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "CHAT",
            "cityname": "Chateauroux",
            "airportcode": "CHR",
            "airportname": "Chateauroux"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "DIJO",
            "cityname": "Dijon",
            "airportcode": "DIJ",
            "airportname": "Dijon"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "DOLE",
            "cityname": "Dole Tavaux",
            "airportcode": "DLE",
            "airportname": "Dole Tavaux"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "EPIN",
            "cityname": "Epinal Mirecourt",
            "airportcode": "EPL",
            "airportname": "Epinal Mirecourt"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LEMA",
            "cityname": "Le Mans",
            "airportcode": "LME",
            "airportname": "Le Mans Arnage"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "REIM",
            "cityname": "Reims",
            "airportcode": "RHE",
            "airportname": "Reims"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "VALF",
            "cityname": "Valence Chabeuil",
            "airportcode": "VAF",
            "airportname": "Valence Chabeuil"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "XCRA",
            "cityname": "Châlons-en-Champagne",
            "airportcode": "XCR",
            "airportname": "Châlons-en-Champagne"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "MULH",
            "cityname": "Mulhouse",
            "airportcode": "MLH",
            "airportname": "Mulhouse"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "STRA",
            "cityname": "Strasbourg",
            "airportcode": "SXB",
            "airportname": "Strasbourg"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "AGEN",
            "cityname": "Agen",
            "airportcode": "AGF",
            "airportname": "Agen"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "BERG",
            "cityname": "Bergerac",
            "airportcode": "EGC",
            "airportname": "Bergerac"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "BIAR",
            "cityname": "Biarritz",
            "airportcode": "BIQ",
            "airportname": "Biarritz"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "BORD",
            "cityname": "Bordeaux",
            "airportcode": "BOD",
            "airportname": "Bordeaux"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "PAUU",
            "cityname": "Pau",
            "airportcode": "PUF",
            "airportname": "Pau"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "PERI",
            "cityname": "Perigueux",
            "airportcode": "PGX",
            "airportname": "Perigueux"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "AURI",
            "cityname": "Aurillac Tronquiere",
            "airportcode": "AUR",
            "airportname": "Aurillac Tronquiere"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "CLER",
            "cityname": "Clermont-Ferrand",
            "airportcode": "CFE",
            "airportname": "Clermont-Ferrand"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LEPU",
            "cityname": "Le Puy Loudes",
            "airportcode": "LPY",
            "airportname": "Le Puy Loudes"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "CAEN",
            "cityname": "Caen",
            "airportcode": "CFR",
            "airportname": "Caen"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "DEAU",
            "cityname": "Deauville St. Gatien",
            "airportcode": "DOL",
            "airportname": "Deauville St. Gatien"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "BRES",
            "cityname": "Brest",
            "airportcode": "BES",
            "airportname": "Brest"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "DINA",
            "cityname": "Dinard",
            "airportcode": "DNR",
            "airportname": "Dinard"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LANN",
            "cityname": "Lannion",
            "airportcode": "LAI",
            "airportname": "Lannion"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LORI",
            "cityname": "Lorient",
            "airportcode": "LRT",
            "airportname": "Lorient"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "QUIM",
            "cityname": "Quimper",
            "airportcode": "UIP",
            "airportname": "Quimper"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "RENN",
            "cityname": "Rennes",
            "airportcode": "RNS",
            "airportname": "Rennes"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "STNA",
            "cityname": "St. Nazaire Montoir",
            "airportcode": "SNR",
            "airportname": "St. Nazaire Montoir"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "TOUR",
            "cityname": "Tours",
            "airportcode": "TUF",
            "airportname": "Tours"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "AJAC",
            "cityname": "Ajaccio",
            "airportcode": "AJA",
            "airportname": "Ajaccio"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "BAST",
            "cityname": "Bastia - Corsica",
            "airportcode": "BIA",
            "airportname": "Bastia - Corsica"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "CALV",
            "cityname": "Calvi",
            "airportcode": "CLY",
            "airportname": "Calvi"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "FIGA",
            "cityname": "Figari",
            "airportcode": "FSC",
            "airportname": "Figari Sud Corse"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "PARI",
            "cityname": "Paris",
            "airportcode": "BVA",
            "airportname": "Paris Beauvais"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "PARI",
            "cityname": "Paris",
            "airportcode": "CDG",
            "airportname": "Paris Charles de Gaulle"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "PARI",
            "cityname": "Paris",
            "airportcode": "ORY",
            "airportname": "Paris Orly"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "BEXI",
            "cityname": "Beziers",
            "airportcode": "BZR",
            "airportname": "Beziers"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "CARC",
            "cityname": "Carcassonne",
            "airportcode": "CCF",
            "airportname": "Carcassonne"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "MONT",
            "cityname": "Montpellier",
            "airportcode": "MPL",
            "airportname": "Montpellier"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "NIME",
            "cityname": "Nimes",
            "airportcode": "FNI",
            "airportname": "Nimes"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "PERP",
            "cityname": "Perpignan",
            "airportcode": "PGF",
            "airportname": "Perpignan"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "BRIV",
            "cityname": "Brive Vallée de la Dordogne",
            "airportcode": "BVE",
            "airportname": "Brive Vallée de la Dordogne"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LIMO",
            "cityname": "Limoges",
            "airportcode": "LIG",
            "airportname": "Limoges"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "METZ",
            "cityname": "Metz",
            "airportcode": "ETZ",
            "airportname": "Metz / Nancy Lorraine"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "CASU",
            "cityname": "Castres Mazamet",
            "airportcode": "DCM",
            "airportname": "Castres Mazamet"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LOUR",
            "cityname": "Lourdes",
            "airportcode": "LDE",
            "airportname": "Lourdes"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "RODE",
            "cityname": "Rodez",
            "airportcode": "RDZ",
            "airportname": "Rodez"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "TOUS",
            "cityname": "Toulouse",
            "airportcode": "TLS",
            "airportname": "Toulouse"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LETO",
            "cityname": "Le Touquet Paris Plag",
            "airportcode": "LTQ",
            "airportname": "Le Touquet Paris Plag"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LILL",
            "cityname": "Lille",
            "airportcode": "LIL",
            "airportname": "Lille"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "NANT",
            "cityname": "Nantes",
            "airportcode": "NTE",
            "airportname": "Nantes"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LARO",
            "cityname": "La Rochelle",
            "airportcode": "LRH",
            "airportname": "La Rochelle"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "POIT",
            "cityname": "Poitiers",
            "airportcode": "PIS",
            "airportname": "Poitiers"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "AVIG",
            "cityname": "Avignon",
            "airportcode": "AVN",
            "airportname": "Avignon"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "MARS",
            "cityname": "Marseille",
            "airportcode": "MRS",
            "airportname": "Marseille"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "NICE",
            "cityname": "Nice",
            "airportcode": "NCE",
            "airportname": "Nice"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "TOUL",
            "cityname": "Toulon",
            "airportcode": "TLN",
            "airportname": "Toulon-Hyères"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "CHAM",
            "cityname": "Chambery",
            "airportcode": "CMF",
            "airportname": "Chambery"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "GREN",
            "cityname": "Grenoble",
            "airportcode": "GNB",
            "airportname": "Grenoble"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "LYON",
            "cityname": "Lyon",
            "airportcode": "LYS",
            "airportname": "Lyon"
        },
        {
            "countrycode": "FR",
            "countryname": "France",
            "citycode": "STET",
            "cityname": "St Etienne",
            "airportcode": "EBU",
            "airportname": "St Etienne"
        },
        {
            "countrycode": "GA",
            "countryname": "Gabon",
            "citycode": "GAXA",
            "cityname": "Gamba",
            "airportcode": "GAX",
            "airportname": "Gamba"
        },
        {
            "countrycode": "GA",
            "countryname": "Gabon",
            "citycode": "KOUA",
            "cityname": "Koulamoutou",
            "airportcode": "KOU",
            "airportname": "Koulamoutou"
        },
        {
            "countrycode": "GA",
            "countryname": "Gabon",
            "citycode": "LBVA",
            "cityname": "Libreville",
            "airportcode": "LBV",
            "airportname": "Libreville"
        },
        {
            "countrycode": "GA",
            "countryname": "Gabon",
            "citycode": "MVBA",
            "cityname": "Franceville",
            "airportcode": "MVB",
            "airportname": "Franceville / Mvengue"
        },
        {
            "countrycode": "GA",
            "countryname": "Gabon",
            "citycode": "POGA",
            "cityname": "Port Gentil",
            "airportcode": "POG",
            "airportname": "Port Gentil"
        },
        {
            "countrycode": "GD",
            "countryname": "Grenada",
            "citycode": "GNDA",
            "cityname": "St. George",
            "airportcode": "GND",
            "airportname": "St. George"
        },
        {
            "countrycode": "GE",
            "countryname": "Georgia",
            "citycode": "BUSA",
            "cityname": "Batumi",
            "airportcode": "BUS",
            "airportname": "Batumi"
        },
        {
            "countrycode": "GE",
            "countryname": "Georgia",
            "citycode": "KUTA",
            "cityname": "Kutaisi",
            "airportcode": "KUT",
            "airportname": "Kutaisi"
        },
        {
            "countrycode": "GE",
            "countryname": "Georgia",
            "citycode": "TBLI",
            "cityname": "Tbilisi",
            "airportcode": "TBS",
            "airportname": "Tbilisi"
        },
        {
            "countrycode": "GF",
            "countryname": "French Guiana",
            "citycode": "CAYA",
            "cityname": "Cayenne",
            "airportcode": "CAY",
            "airportname": "Cayenne"
        },
        {
            "countrycode": "GG",
            "countryname": "Guernsey",
            "citycode": "GUER",
            "cityname": "Guernsey",
            "airportcode": "GCI",
            "airportname": "Guernsey"
        },
        {
            "countrycode": "GH",
            "countryname": "Ghana",
            "citycode": "ACCA",
            "cityname": "Accra",
            "airportcode": "ACC",
            "airportname": "Accra"
        },
        {
            "countrycode": "GH",
            "countryname": "Ghana",
            "citycode": "KMSA",
            "cityname": "Kumasi",
            "airportcode": "KMS",
            "airportname": "Kumasi"
        },
        {
            "countrycode": "GH",
            "countryname": "Ghana",
            "citycode": "TKDA",
            "cityname": "Takoradi",
            "airportcode": "TKD",
            "airportname": "Takoradi"
        },
        {
            "countrycode": "GH",
            "countryname": "Ghana",
            "citycode": "TMLA",
            "cityname": "Tamale",
            "airportcode": "TML",
            "airportname": "Tamale"
        },
        {
            "countrycode": "GI",
            "countryname": "Gibraltar",
            "citycode": "GIBR",
            "cityname": "Gibraltar",
            "airportcode": "GIB",
            "airportname": "Gibraltar"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "AGMA",
            "cityname": "Tasiilaq",
            "airportcode": "AGM",
            "airportname": "Tasiilaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "GOHA",
            "cityname": "Nuuk",
            "airportcode": "GOH",
            "airportname": "Nuuk"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JAVA",
            "cityname": "Ilulissat",
            "airportcode": "JAV",
            "airportname": "Ilulissat"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JCHA",
            "cityname": "Qasigiannguit",
            "airportcode": "JCH",
            "airportname": "Qasigiannguit"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JEGA",
            "cityname": "Aasiaat",
            "airportcode": "JEG",
            "airportname": "Aasiaat"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JFRA",
            "cityname": "Paamiut",
            "airportcode": "JFR",
            "airportname": "Paamiut"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JGOA",
            "cityname": "Qeqertarsuaq",
            "airportcode": "JGO",
            "airportname": "Qeqertarsuaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JHSA",
            "cityname": "Sisimiut",
            "airportcode": "JHS",
            "airportname": "Sisimiut"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JJUA",
            "cityname": "Qaqortoq",
            "airportcode": "JJU",
            "airportname": "Qaqortoq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JNNA",
            "cityname": "Nanortalik",
            "airportcode": "JNN",
            "airportname": "Nanortalik"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JNSA",
            "cityname": "Narsaq",
            "airportcode": "JNS",
            "airportname": "Narsaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JQAA",
            "cityname": "Qaarsut",
            "airportcode": "JQA",
            "airportname": "Qaarsut"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JSUA",
            "cityname": "Maniitsoq",
            "airportcode": "JSU",
            "airportname": "Maniitsoq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "JUVA",
            "cityname": "Upernavik",
            "airportcode": "JUV",
            "airportname": "Upernavik"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "KULU",
            "cityname": "Kulusuk Island",
            "airportcode": "KUS",
            "airportname": "Kulusuk Island"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "LLUA",
            "cityname": "Alluitsup Paa",
            "airportcode": "LLU",
            "airportname": "Alluitsup Paa"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "NAQA",
            "cityname": "Qaanaaq",
            "airportcode": "NAQ",
            "airportname": "Qaanaaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "NARS",
            "cityname": "Narsarsuaq",
            "airportcode": "UAK",
            "airportname": "Narsarsuaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "NEER",
            "cityname": "Neerlerit Inaat",
            "airportcode": "CNP",
            "airportname": "Neerlerit Inaat"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "OBYA",
            "cityname": "Ittoqqortoormiit",
            "airportcode": "OBY",
            "airportname": "Ittoqqortoormiit"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "PQTA",
            "cityname": "Qeqertaq",
            "airportcode": "PQT",
            "airportname": "Qeqertaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QCUA",
            "cityname": "Akunnaaq",
            "airportcode": "QCU",
            "airportname": "Akunnaaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QFIA",
            "cityname": "Iginniarfik",
            "airportcode": "QFI",
            "airportname": "Iginniarfik"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QGQA",
            "cityname": "Attu",
            "airportcode": "QGQ",
            "airportname": "Attu"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QJEA",
            "cityname": "Kitsissuarsuit",
            "airportcode": "QJE",
            "airportname": "Kitsissuarsuit"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QJIA",
            "cityname": "Ikamiut",
            "airportcode": "QJI",
            "airportname": "Ikamiut"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QMKA",
            "cityname": "Niaqornaarsuk",
            "airportcode": "QMK",
            "airportname": "Niaqornaarsuk"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QPWA",
            "cityname": "Kangaatsiaq",
            "airportcode": "QPW",
            "airportname": "Kangaatsiaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QRYA",
            "cityname": "Ikerasaarsuk",
            "airportcode": "QRY",
            "airportname": "Ikerasaarsuk"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "QUPA",
            "cityname": "Saqqaq",
            "airportcode": "QUP",
            "airportname": "Saqqaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "SFJA",
            "cityname": "Kangerlussuaq",
            "airportcode": "SFJ",
            "airportname": "Kangerlussuaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "THUA",
            "cityname": "Pituffik",
            "airportcode": "THU",
            "airportname": "Pituffik"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "UMDA",
            "cityname": "Uummannaq",
            "airportcode": "UMD",
            "airportname": "Uummannaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "XEQA",
            "cityname": "Tasiuasaq",
            "airportcode": "XEQ",
            "airportname": "Tasiuasaq"
        },
        {
            "countrycode": "GL",
            "countryname": "Greenland",
            "citycode": "XIQA",
            "cityname": "Ilimanaq",
            "airportcode": "XIQ",
            "airportname": "Ilimanaq"
        },
        {
            "countrycode": "GM",
            "countryname": "Gambia",
            "citycode": "BJLA",
            "cityname": "Banjul",
            "airportcode": "BJL",
            "airportname": "Banjul"
        },
        {
            "countrycode": "GN",
            "countryname": "Guinea",
            "citycode": "CKYA",
            "cityname": "Conakry",
            "airportcode": "CKY",
            "airportname": "Conakry"
        },
        {
            "countrycode": "GP",
            "countryname": "Guadeloupe",
            "citycode": "DSDA",
            "cityname": "La Desirade",
            "airportcode": "DSD",
            "airportname": "La Desirade"
        },
        {
            "countrycode": "GP",
            "countryname": "Guadeloupe",
            "citycode": "GBJA",
            "cityname": "Marie Galante",
            "airportcode": "GBJ",
            "airportname": "Marie Galante"
        },
        {
            "countrycode": "GP",
            "countryname": "Guadeloupe",
            "citycode": "PTPA",
            "cityname": "Pointe-a-Pitre",
            "airportcode": "PTP",
            "airportname": "Pointe-a-Pitre"
        },
        {
            "countrycode": "GP",
            "countryname": "Guadeloupe",
            "citycode": "SFGA",
            "cityname": "St Martin",
            "airportcode": "SFG",
            "airportname": "St Martin Esperance"
        },
        {
            "countrycode": "GQ",
            "countryname": "Equatorial Guinea",
            "citycode": "BSGA",
            "cityname": "Bata",
            "airportcode": "BSG",
            "airportname": "Bata"
        },
        {
            "countrycode": "GQ",
            "countryname": "Equatorial Guinea",
            "citycode": "SSGA",
            "cityname": "Malabo",
            "airportcode": "SSG",
            "airportname": "Malabo"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "ALEY",
            "cityname": "Alexandroupolis Dimokritos",
            "airportcode": "AXD",
            "airportname": "Alexandroupolis Dimokritos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "ARAX",
            "cityname": "Araxos",
            "airportcode": "GPA",
            "airportname": "Araxos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "ARGO",
            "cityname": "Argostoli",
            "airportcode": "EFL",
            "airportname": "Argostoli Kefallinia"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "ASTY",
            "cityname": "Astypalaia",
            "airportcode": "JTY",
            "airportname": "Astypalaia"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "ATHE",
            "cityname": "Athens",
            "airportcode": "ATH",
            "airportname": "Athens International"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "CHIO",
            "cityname": "Chios",
            "airportcode": "JKH",
            "airportname": "Chios"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "CORF",
            "cityname": "Corfu",
            "airportcode": "CFU",
            "airportname": "Corfu"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "CRET",
            "cityname": "Crete",
            "airportcode": "CHQ",
            "airportname": "Crete Chania"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "CRET",
            "cityname": "Crete",
            "airportcode": "HER",
            "airportname": "Crete Heraklion"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "IKAR",
            "cityname": "Ikaria",
            "airportcode": "JIK",
            "airportname": "Ikaria"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "IOAN",
            "cityname": "Ioannina",
            "airportcode": "IOA",
            "airportname": "Ioannina"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "JKLA",
            "cityname": "Kalymnos",
            "airportcode": "JKL",
            "airportname": "Kalymnos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KALA",
            "cityname": "Kalamata",
            "airportcode": "KLX",
            "airportname": "Kalamata International"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KARP",
            "cityname": "Karpathos",
            "airportcode": "AOK",
            "airportname": "Karpathos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KASO",
            "cityname": "Kasos Island",
            "airportcode": "KSJ",
            "airportname": "Kasos Island"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KAST",
            "cityname": "Kastoria Aristotlis",
            "airportcode": "KSO",
            "airportname": "Kastoria Aristotlis"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KASU",
            "cityname": "Kastelorizo",
            "airportcode": "KZS",
            "airportname": "Kastelorizo"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KAVA",
            "cityname": "Kavala",
            "airportcode": "KVA",
            "airportname": "Kavala Alexandros"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KITH",
            "cityname": "Kithira",
            "airportcode": "KIT",
            "airportname": "Kithira"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KOSS",
            "cityname": "Kos",
            "airportcode": "KGS",
            "airportname": "Kos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "KOZA",
            "cityname": "Kozani",
            "airportcode": "KZI",
            "airportname": "Kozani Philippos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "LEMN",
            "cityname": "Lemnos",
            "airportcode": "LXS",
            "airportname": "Lemnos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "LERO",
            "cityname": "Leros",
            "airportcode": "LRS",
            "airportname": "Leros"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "MIKO",
            "cityname": "Mykonos",
            "airportcode": "JMK",
            "airportname": "Mykonos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "MILO",
            "cityname": "Milos",
            "airportcode": "MLO",
            "airportname": "Milos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "MYTI",
            "cityname": "Mytilene",
            "airportcode": "MJT",
            "airportname": "Mytilene"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "NAXO",
            "cityname": "Naxos",
            "airportcode": "JNX",
            "airportname": "Naxos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "PARO",
            "cityname": "Paros",
            "airportcode": "PAS",
            "airportname": "Paros"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "PREV",
            "cityname": "Preveza",
            "airportcode": "PVK",
            "airportname": "Preveza"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "RHOD",
            "cityname": "Rhodes",
            "airportcode": "RHO",
            "airportname": "Rhodes"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "SAMO",
            "cityname": "Samos",
            "airportcode": "SMI",
            "airportname": "Samos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "SITI",
            "cityname": "Sitia",
            "airportcode": "JSH",
            "airportname": "Sitia"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "SKIA",
            "cityname": "Skiathos",
            "airportcode": "JSI",
            "airportname": "Skiathos Island National"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "SKIR",
            "cityname": "Skiros",
            "airportcode": "SKU",
            "airportname": "Skiros"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "SYRO",
            "cityname": "Syros Island",
            "airportcode": "JSY",
            "airportname": "Syros Island"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "THES",
            "cityname": "Thessaloniki",
            "airportcode": "SKG",
            "airportname": "Thessaloniki"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "THIR",
            "cityname": "Santorini (Thira)",
            "airportcode": "JTR",
            "airportname": "Santorini (Thira)"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "VOLP",
            "cityname": "Volos",
            "airportcode": "VOL",
            "airportname": "Volos"
        },
        {
            "countrycode": "GR",
            "countryname": "Greece",
            "citycode": "ZAKI",
            "cityname": "Zante (Zakynthos)",
            "airportcode": "ZTH",
            "airportname": "Zante (Zakynthos)"
        },
        {
            "countrycode": "GT",
            "countryname": "Guatemala",
            "citycode": "FRSA",
            "cityname": "Flores",
            "airportcode": "FRS",
            "airportname": "Flores"
        },
        {
            "countrycode": "GT",
            "countryname": "Guatemala",
            "citycode": "GUAA",
            "cityname": "Guatemala City",
            "airportcode": "GUA",
            "airportname": "Guatemala City"
        },
        {
            "countrycode": "GT",
            "countryname": "Guatemala",
            "citycode": "RERA",
            "cityname": "Retalhuleu",
            "airportcode": "RER",
            "airportname": "Retalhuleu"
        },
        {
            "countrycode": "GU",
            "countryname": "Guam",
            "citycode": "GUMA",
            "cityname": "Barrigada / Tamuning",
            "airportcode": "GUM",
            "airportname": "Guam A.B. Won Pat"
        },
        {
            "countrycode": "GW",
            "countryname": "Guinea-Bissau",
            "citycode": "OXBA",
            "cityname": "Bissau",
            "airportcode": "OXB",
            "airportname": "Bissau"
        },
        {
            "countrycode": "GY",
            "countryname": "Guyana",
            "citycode": "GEOA",
            "cityname": "Georgetown",
            "airportcode": "GEO",
            "airportname": "Georgetown"
        },
        {
            "countrycode": "GY",
            "countryname": "Guyana",
            "citycode": "OGLA",
            "cityname": "Ogle",
            "airportcode": "OGL",
            "airportname": "Ogle"
        },
        {
            "countrycode": "HK",
            "countryname": "Hong Kong",
            "citycode": "HKGA",
            "cityname": "Hong Kong",
            "airportcode": "HKG",
            "airportname": "Hong Kong International"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "BHGA",
            "cityname": "Brus Laguna",
            "airportcode": "BHG",
            "airportname": "Brus Laguna"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "GJAA",
            "cityname": "Guanaja",
            "airportcode": "GJA",
            "airportname": "Guanaja"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "LCEA",
            "cityname": "La Ceiba",
            "airportcode": "LCE",
            "airportname": "La Ceiba"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "PEUA",
            "cityname": "Puerto Lempira",
            "airportcode": "PEU",
            "airportname": "Puerto Lempira"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "RTBA",
            "cityname": "Roatan",
            "airportcode": "RTB",
            "airportname": "Roatan"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "RUYA",
            "cityname": "Copan",
            "airportcode": "RUY",
            "airportname": "Copan"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "SAPA",
            "cityname": "San Pedro Sula",
            "airportcode": "SAP",
            "airportname": "San Pedro Sula"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "TEAA",
            "cityname": "Tela",
            "airportcode": "TEA",
            "airportname": "Tela"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "TGUA",
            "cityname": "Tegucigalpa",
            "airportcode": "TGU",
            "airportname": "Tegucigalpa"
        },
        {
            "countrycode": "HN",
            "countryname": "Honduras",
            "citycode": "UIIA",
            "cityname": "Utila",
            "airportcode": "UII",
            "airportname": "Utila"
        },
        {
            "countrycode": "HR",
            "countryname": "Croatia",
            "citycode": "BOLL",
            "cityname": "Bol",
            "airportcode": "BWK",
            "airportname": "Bol"
        },
        {
            "countrycode": "HR",
            "countryname": "Croatia",
            "citycode": "DUBR",
            "cityname": "Dubrovnik",
            "airportcode": "DBV",
            "airportname": "Dubrovnik"
        },
        {
            "countrycode": "HR",
            "countryname": "Croatia",
            "citycode": "OSIJ",
            "cityname": "Osijek",
            "airportcode": "OSI",
            "airportname": "Osijek"
        },
        {
            "countrycode": "HR",
            "countryname": "Croatia",
            "citycode": "PULA",
            "cityname": "Pula",
            "airportcode": "PUY",
            "airportname": "Pula"
        },
        {
            "countrycode": "HR",
            "countryname": "Croatia",
            "citycode": "RUJE",
            "cityname": "Rijeka",
            "airportcode": "RJK",
            "airportname": "Rijeka"
        },
        {
            "countrycode": "HR",
            "countryname": "Croatia",
            "citycode": "SPLI",
            "cityname": "Split",
            "airportcode": "SPU",
            "airportname": "Split"
        },
        {
            "countrycode": "HR",
            "countryname": "Croatia",
            "citycode": "ZADA",
            "cityname": "Zadar",
            "airportcode": "ZAD",
            "airportname": "Zadar"
        },
        {
            "countrycode": "HR",
            "countryname": "Croatia",
            "citycode": "ZAGR",
            "cityname": "Zagreb",
            "airportcode": "ZAG",
            "airportname": "Zagreb"
        },
        {
            "countrycode": "HT",
            "countryname": "Haiti",
            "citycode": "CAPA",
            "cityname": "Cap Haitien",
            "airportcode": "CAP",
            "airportname": "Cap Haitien"
        },
        {
            "countrycode": "HT",
            "countryname": "Haiti",
            "citycode": "PAPA",
            "cityname": "Port Au Prince",
            "airportcode": "PAP",
            "airportname": "Port Au Prince"
        },
        {
            "countrycode": "HU",
            "countryname": "Hungary",
            "citycode": "BUDA",
            "cityname": "Budapest",
            "airportcode": "BUD",
            "airportname": "Budapest"
        },
        {
            "countrycode": "HU",
            "countryname": "Hungary",
            "citycode": "DEBR",
            "cityname": "Debrecen",
            "airportcode": "DEB",
            "airportname": "Debrecen"
        },
        {
            "countrycode": "HU",
            "countryname": "Hungary",
            "citycode": "MISK",
            "cityname": "Miskolc",
            "airportcode": "MCQ",
            "airportname": "Miskolc"
        },
        {
            "countrycode": "HU",
            "countryname": "Hungary",
            "citycode": "PECS",
            "cityname": "Pecs",
            "airportcode": "PEV",
            "airportname": "Pecs"
        },
        {
            "countrycode": "HU",
            "countryname": "Hungary",
            "citycode": "SAAS",
            "cityname": "Balaton",
            "airportcode": "SOB",
            "airportname": "Balaton"
        },
        {
            "countrycode": "HU",
            "countryname": "Hungary",
            "citycode": "SZEG",
            "cityname": "Szeged",
            "airportcode": "QZD",
            "airportname": "Szeged"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BWXA",
            "cityname": "Blimbingsari",
            "airportcode": "BWX",
            "airportname": "Blimbingsari"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "DTBA",
            "cityname": "Siborong-borong",
            "airportcode": "DTB",
            "airportname": "Siborong-borong"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "FLZA",
            "cityname": "Sibolga",
            "airportcode": "FLZ",
            "airportname": "Ferdinand Lumban Tobing"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MESI",
            "cityname": "Medan",
            "airportcode": "KNO",
            "airportname": "Medan Kuala Namu"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MILU",
            "cityname": "Milanau",
            "airportcode": "YYV",
            "airportname": "Milanau"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SINB",
            "cityname": "Sinabang",
            "airportcode": "LSG",
            "airportname": "Sinabang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BDJI",
            "cityname": "Banjarmasin",
            "airportcode": "BDJ",
            "airportname": "Banjarmasin"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BEJI",
            "cityname": "Berau",
            "airportcode": "BEJ",
            "airportname": "Berau"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BPNI",
            "cityname": "Balikpapan",
            "airportcode": "BPN",
            "airportname": "Balikpapan"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "KBUI",
            "cityname": "Kotabaru",
            "airportcode": "KBU",
            "airportname": "Kotabaru"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "KTGI",
            "cityname": "Ketapang",
            "airportcode": "KTG",
            "airportname": "Ketapang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "NNXI",
            "cityname": "Nunukan",
            "airportcode": "NNX",
            "airportname": "Nunukan"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "NPOI",
            "cityname": "Nangapinoh",
            "airportcode": "NPO",
            "airportname": "Nangapinoh"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PKNI",
            "cityname": "Pangkalanbuun",
            "airportcode": "PKN",
            "airportname": "Pangkalanbuun"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PKYI",
            "cityname": "Palangkaraya",
            "airportcode": "PKY",
            "airportname": "Palangkaraya"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PNKI",
            "cityname": "Pontianak",
            "airportcode": "PNK",
            "airportname": "Pontianak"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PSUI",
            "cityname": "Putussibau",
            "airportcode": "PSU",
            "airportname": "Putussibau"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SGQI",
            "cityname": "Sanggata",
            "airportcode": "SGQ",
            "airportname": "Sanggata"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SMQI",
            "cityname": "Sampit",
            "airportcode": "SMQ",
            "airportname": "Sampit"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SQGI",
            "cityname": "Sintang",
            "airportcode": "SQG",
            "airportname": "Sintang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SRII",
            "cityname": "Samarinda",
            "airportcode": "SRI",
            "airportname": "Samarinda"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TJGI",
            "cityname": "Tanjung Warukin",
            "airportcode": "TJG",
            "airportname": "Tanjung Warukin"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TJSI",
            "cityname": "Tanjung Selor",
            "airportcode": "TJS",
            "airportname": "Tanjung Selor"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TRKI",
            "cityname": "Tarakan",
            "airportcode": "TRK",
            "airportname": "Tarakan"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BDOI",
            "cityname": "Bandung",
            "airportcode": "BDO",
            "airportname": "Bandung"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "CGKI",
            "cityname": "Jakarta",
            "airportcode": "CGK",
            "airportname": "Soekarno-Hatta"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "CGKI",
            "cityname": "Jakarta",
            "airportcode": "HLP",
            "airportname": "Halim Perdana Kusuma"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "CXPI",
            "cityname": "Cilacap",
            "airportcode": "CXP",
            "airportname": "Cilacap"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "JOGI",
            "cityname": "Yogyakarta",
            "airportcode": "JOG",
            "airportname": "Yogyakarta"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MLGI",
            "cityname": "Malang",
            "airportcode": "MLG",
            "airportname": "Malang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SOCI",
            "cityname": "Solo / Surakarta",
            "airportcode": "SOC",
            "airportname": "Solo / Surakarta"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SRGI",
            "cityname": "Semarang",
            "airportcode": "SRG",
            "airportname": "Semarang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SUBI",
            "cityname": "Surabaya",
            "airportcode": "SUB",
            "airportname": "Surabaya"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "AMQI",
            "cityname": "Ambon",
            "airportcode": "AMQ",
            "airportname": "Ambon"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "DOBI",
            "cityname": "Dobo",
            "airportcode": "DOB",
            "airportname": "Dobo"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "GLXI",
            "cityname": "Galela",
            "airportcode": "GLX",
            "airportname": "Galela"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "KAZI",
            "cityname": "North Halmahera (Kau)",
            "airportcode": "KAZ",
            "airportname": "North Halmahera (Kau)"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "LAHI",
            "cityname": "Labuha",
            "airportcode": "LAH",
            "airportname": "Labuha"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "LUVI",
            "cityname": "Langgur",
            "airportcode": "LUV",
            "airportname": "Dumatubin - Langgur"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "NREI",
            "cityname": "Namrole",
            "airportcode": "NRE",
            "airportname": "Namrole"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "OTII",
            "cityname": "Morotai Island",
            "airportcode": "OTI",
            "airportname": "Morotai Island"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SQNI",
            "cityname": "Sanana",
            "airportcode": "SQN",
            "airportname": "Sanana"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SXKI",
            "cityname": "Saumlaki",
            "airportcode": "SXK",
            "airportname": "Saumlaki"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TTEI",
            "cityname": "Ternate",
            "airportcode": "TTE",
            "airportname": "Ternate"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "ABUI",
            "cityname": "Atambua",
            "airportcode": "ABU",
            "airportname": "Atambua"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "ARDI",
            "cityname": "Alor Island",
            "airportcode": "ARD",
            "airportname": "Alor Island"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BJWI",
            "cityname": "Bajawa",
            "airportcode": "BJW",
            "airportname": "Bajawa"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BMUI",
            "cityname": "Bima",
            "airportcode": "BMU",
            "airportname": "Bima"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "DPSI",
            "cityname": "Bali (Denpasar)",
            "airportcode": "DPS",
            "airportname": "Bali (Denpasar)"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "ENEI",
            "cityname": "Ende",
            "airportcode": "ENE",
            "airportname": "Ende"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "KOEA",
            "cityname": "Kupang",
            "airportcode": "KOE",
            "airportname": "Kupang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "LBJI",
            "cityname": "Labuan Bajo",
            "airportcode": "LBJ",
            "airportname": "Labuan Bajo"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "LKAI",
            "cityname": "Larantuka",
            "airportcode": "LKA",
            "airportname": "Larantuka"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "LOPA",
            "cityname": "Praya",
            "airportcode": "LOP",
            "airportname": "Lombok International"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "LWEI",
            "cityname": "Lewoleba",
            "airportcode": "LWE",
            "airportname": "Lewoleba"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MOFI",
            "cityname": "Maumere",
            "airportcode": "MOF",
            "airportname": "Maumere"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "RTGI",
            "cityname": "Ruteng",
            "airportcode": "RTG",
            "airportname": "Ruteng"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "RTII",
            "cityname": "Roti",
            "airportcode": "RTI",
            "airportname": "Roti"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SAUI",
            "cityname": "Sawu",
            "airportcode": "SAU",
            "airportname": "Sawu"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SWQI",
            "cityname": "Sumbawa",
            "airportcode": "SWQ",
            "airportname": "Sumbawa"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TMCI",
            "cityname": "Tambolaka",
            "airportcode": "TMC",
            "airportname": "Tambolaka"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "WGPI",
            "cityname": "Waingapu",
            "airportcode": "WGP",
            "airportname": "Waingapu"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BIKI",
            "cityname": "Biak",
            "airportcode": "BIK",
            "airportname": "Biak"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BXBI",
            "cityname": "Babo",
            "airportcode": "BXB",
            "airportname": "Babo"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "DJJI",
            "cityname": "Jayapura",
            "airportcode": "DJJ",
            "airportname": "Jayapura"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "FKQI",
            "cityname": "Fak Fak",
            "airportcode": "FKQ",
            "airportname": "Fak Fak"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "KNGI",
            "cityname": "Kaimana",
            "airportcode": "KNG",
            "airportname": "Utarom / Kaimana"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MKQI",
            "cityname": "Merauke",
            "airportcode": "MKQ",
            "airportname": "Merauke"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MKWI",
            "cityname": "Manokwari",
            "airportcode": "MKW",
            "airportname": "Manokwari"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "NBXI",
            "cityname": "Nabire",
            "airportcode": "NBX",
            "airportname": "Nabire"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "NTII",
            "cityname": "Bintuni",
            "airportcode": "NTI",
            "airportname": "Bintuni"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "OKLI",
            "cityname": "Oksibil",
            "airportcode": "OKL",
            "airportname": "Oksibil"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SOQI",
            "cityname": "Sorong",
            "airportcode": "SOQ",
            "airportname": "Sorong"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TIII",
            "cityname": "Tembagapura",
            "airportcode": "TIM",
            "airportname": "Tembagapura"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "WMXI",
            "cityname": "Wamena",
            "airportcode": "WMX",
            "airportname": "Wamena"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BUWI",
            "cityname": "Baubau",
            "airportcode": "BUW",
            "airportname": "Baubau"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "GTOI",
            "cityname": "Gorontalo",
            "airportcode": "GTO",
            "airportname": "Gorontalo"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "KDII",
            "cityname": "Kendari",
            "airportcode": "KDI",
            "airportname": "Kendari"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "LUWI",
            "cityname": "Banggai (Luwuk)",
            "airportcode": "LUW",
            "airportname": "Banggai (Luwuk)"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MDCI",
            "cityname": "Manado",
            "airportcode": "MDC",
            "airportname": "Manado"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MJUI",
            "cityname": "Mamuju",
            "airportcode": "MJU",
            "airportname": "Mamuju"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MNAI",
            "cityname": "Sangir Talaud (Melonguane)",
            "airportcode": "MNA",
            "airportname": "Sangir Talaud (Melonguane)"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MXBI",
            "cityname": "Masamba",
            "airportcode": "MXB",
            "airportname": "Masamba"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "NAHI",
            "cityname": "Naha",
            "airportcode": "NAH",
            "airportname": "Naha"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PLWI",
            "cityname": "Palu",
            "airportcode": "PLW",
            "airportname": "Palu"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PSJI",
            "cityname": "Poso",
            "airportcode": "PSJ",
            "airportname": "Poso"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PUMI",
            "cityname": "Pomala",
            "airportcode": "PUM",
            "airportname": "Pomala"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "RAQI",
            "cityname": "Raha",
            "airportcode": "RAQ",
            "airportname": "Raha"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TLII",
            "cityname": "Tolitoli",
            "airportcode": "TLI",
            "airportname": "Tolitoli"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TTRI",
            "cityname": "Tana Toraja",
            "airportcode": "TTR",
            "airportname": "Tana Toraja"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "UOLI",
            "cityname": "Buol",
            "airportcode": "UOL",
            "airportname": "Buol"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "UPGI",
            "cityname": "Makassar",
            "airportcode": "UPG",
            "airportname": "Makassar"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BKSI",
            "cityname": "Bengkulu",
            "airportcode": "BKS",
            "airportname": "Bengkulu"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BTHI",
            "cityname": "Batam",
            "airportcode": "BTH",
            "airportname": "Batam"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "BTJI",
            "cityname": "Banda Aceh",
            "airportcode": "BTJ",
            "airportname": "Banda Aceh"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "DJBI",
            "cityname": "Jambi",
            "airportcode": "DJB",
            "airportname": "Jambi"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "DUMI",
            "cityname": "Dumai",
            "airportcode": "DUM",
            "airportname": "Dumai"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "GNSI",
            "cityname": "Gunungsitoli",
            "airportcode": "GNS",
            "airportname": "Gunungsitoli"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "LSWI",
            "cityname": "Lhoksumawe",
            "airportcode": "LSW",
            "airportname": "Lhoksumawe"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MEQI",
            "cityname": "Meulaboh",
            "airportcode": "MEQ",
            "airportname": "Meulaboh"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MESI",
            "cityname": "Medan",
            "airportcode": "MES",
            "airportname": "Medan"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "MWKI",
            "cityname": "Matak",
            "airportcode": "MWK",
            "airportname": "Matak"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "NTXI",
            "cityname": "Natuna Ranai",
            "airportcode": "NTX",
            "airportname": "Natuna Ranai"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PDGI",
            "cityname": "Padang",
            "airportcode": "PDG",
            "airportname": "Padang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PGKI",
            "cityname": "Pangkalpinang",
            "airportcode": "PGK",
            "airportname": "Pangkalpinang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PKUI",
            "cityname": "Pekanbaru",
            "airportcode": "PKU",
            "airportname": "Pekanbaru"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "PLMI",
            "cityname": "Palembang",
            "airportcode": "PLM",
            "airportname": "Palembang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "SBGI",
            "cityname": "Sabang",
            "airportcode": "SBG",
            "airportname": "Sabang"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TJQI",
            "cityname": "Belitung (Tanjung Pandan)",
            "airportcode": "TJQ",
            "airportname": "Belitung (Tanjung Pandan)"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TKGI",
            "cityname": "Bandar Lampung",
            "airportcode": "TKG",
            "airportname": "Bandar Lampung"
        },
        {
            "countrycode": "ID",
            "countryname": "Indonesia",
            "citycode": "TNJI",
            "cityname": "Tanjung Pinang",
            "airportcode": "TNJ",
            "airportname": "Tanjung Pinang"
        },
        {
            "countrycode": "IE",
            "countryname": "Ireland",
            "citycode": "CORK",
            "cityname": "Cork",
            "airportcode": "ORK",
            "airportname": "Cork"
        },
        {
            "countrycode": "IE",
            "countryname": "Ireland",
            "citycode": "DONE",
            "cityname": "Donegal",
            "airportcode": "CFN",
            "airportname": "Donegal"
        },
        {
            "countrycode": "IE",
            "countryname": "Ireland",
            "citycode": "DUBL",
            "cityname": "Dublin",
            "airportcode": "DUB",
            "airportname": "Dublin"
        },
        {
            "countrycode": "IE",
            "countryname": "Ireland",
            "citycode": "KERR",
            "cityname": "Kerry",
            "airportcode": "KIR",
            "airportname": "Kerry"
        },
        {
            "countrycode": "IE",
            "countryname": "Ireland",
            "citycode": "KNOC",
            "cityname": "Knock",
            "airportcode": "NOC",
            "airportname": "Knock"
        },
        {
            "countrycode": "IE",
            "countryname": "Ireland",
            "citycode": "SHAN",
            "cityname": "Shannon",
            "airportcode": "SNN",
            "airportname": "Shannon"
        },
        {
            "countrycode": "IE",
            "countryname": "Ireland",
            "citycode": "WATE",
            "cityname": "Waterford",
            "airportcode": "WAT",
            "airportname": "Waterford"
        },
        {
            "countrycode": "IL",
            "countryname": "Israel",
            "citycode": "ELAT",
            "cityname": "Eilat",
            "airportcode": "ETH",
            "airportname": "Eilat"
        },
        {
            "countrycode": "IL",
            "countryname": "Israel",
            "citycode": "HAIF",
            "cityname": "Haifa",
            "airportcode": "HFA",
            "airportname": "Haifa"
        },
        {
            "countrycode": "IL",
            "countryname": "Israel",
            "citycode": "OVDA",
            "cityname": "Ovda",
            "airportcode": "VDA",
            "airportname": "Ovda"
        },
        {
            "countrycode": "IL",
            "countryname": "Israel",
            "citycode": "TELA",
            "cityname": "Tel Aviv",
            "airportcode": "SDV",
            "airportname": "Tel Aviv-Yafo Sde Dov"
        },
        {
            "countrycode": "IL",
            "countryname": "Israel",
            "citycode": "TELA",
            "cityname": "Tel Aviv",
            "airportcode": "TLV",
            "airportname": "Ben Gurion Intl"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IAGR",
            "cityname": "Agra",
            "airportcode": "AGR",
            "airportname": "Agra"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IAGX",
            "cityname": "Agatti Island",
            "airportcode": "AGX",
            "airportname": "Agatti island"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IAJL",
            "cityname": "Aizawl",
            "airportcode": "AJL",
            "airportname": "Aizawl"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IAMD",
            "cityname": "Ahmedabad",
            "airportcode": "AMD",
            "airportname": "Ahmedabad"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IATQ",
            "cityname": "Amritsar",
            "airportcode": "ATQ",
            "airportname": "Amritsar"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IBBI",
            "cityname": "Bhubaneswar",
            "airportcode": "BBI",
            "airportname": "Bhubaneswar"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IBDQ",
            "cityname": "Vadodara",
            "airportcode": "BDQ",
            "airportname": "Vadodara"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IBHJ",
            "cityname": "Bhuj",
            "airportcode": "BHJ",
            "airportname": "Bhuj"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IBHO",
            "cityname": "Bhopal",
            "airportcode": "BHO",
            "airportname": "Bhopal"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IBHU",
            "cityname": "Bhavnagar",
            "airportcode": "BHU",
            "airportname": "Bhavnagar"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IBLR",
            "cityname": "Bengaluru",
            "airportcode": "BLR",
            "airportname": "Bengaluru"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IBOM",
            "cityname": "Mumbai",
            "airportcode": "BOM",
            "airportname": "Mumbai"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ICCJ",
            "cityname": "Kozhikode",
            "airportcode": "CCJ",
            "airportname": "Kozhikode"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ICCU",
            "cityname": "Kolkata",
            "airportcode": "CCU",
            "airportname": "Kolkata"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ICDP",
            "cityname": "Kadapa",
            "airportcode": "CDP",
            "airportname": "Kadapa"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ICJB",
            "cityname": "Coimbatore",
            "airportcode": "CJB",
            "airportname": "Coimbatore"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ICOK",
            "cityname": "Kochi",
            "airportcode": "COK",
            "airportname": "Kochi"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IDED",
            "cityname": "Dehra Dun",
            "airportcode": "DED",
            "airportname": "Dehra dun"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IDEL",
            "cityname": "Delhi",
            "airportcode": "DEL",
            "airportname": "New Delhi"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IDHM",
            "cityname": "Dharamsala",
            "airportcode": "DHM",
            "airportname": "Dharamsala"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IDIB",
            "cityname": "Dibrugarh",
            "airportcode": "DIB",
            "airportname": "Dibrugarh"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IDIU",
            "cityname": "Diu",
            "airportcode": "DIU",
            "airportname": "Diu"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IDMU",
            "cityname": "Dimapur",
            "airportcode": "DMU",
            "airportname": "Dimapur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IGAU",
            "cityname": "Guwahati",
            "airportcode": "GAU",
            "airportname": "Guwahati"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IGAY",
            "cityname": "Gaya",
            "airportcode": "GAY",
            "airportname": "Gaya"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IGOI",
            "cityname": "Goa",
            "airportcode": "GOI",
            "airportname": "Goa"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IGOP",
            "cityname": "Gorakhpur",
            "airportcode": "GOP",
            "airportname": "Gorakhpur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IGWL",
            "cityname": "Gwalior",
            "airportcode": "GWL",
            "airportname": "Gwalior"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IHBX",
            "cityname": "Hubli",
            "airportcode": "HBX",
            "airportname": "Hubli"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IHJR",
            "cityname": "Khajuraho",
            "airportcode": "HJR",
            "airportname": "Khajuraho"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IHYD",
            "cityname": "Hyderabad",
            "airportcode": "HYD",
            "airportname": "Hyderabad"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIDR",
            "cityname": "Indore",
            "airportcode": "IDR",
            "airportname": "Indore"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIMF",
            "cityname": "Imphal",
            "airportcode": "IMF",
            "airportname": "Imphal"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXA",
            "cityname": "Agartala",
            "airportcode": "IXA",
            "airportname": "Agartala"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXB",
            "cityname": "Bagdogra",
            "airportcode": "IXB",
            "airportname": "Bagdogra"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXC",
            "cityname": "Chandigarh",
            "airportcode": "IXC",
            "airportname": "Chandigarh"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXD",
            "cityname": "Allahabad",
            "airportcode": "IXD",
            "airportname": "Allahabad"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXE",
            "cityname": "Mangalore",
            "airportcode": "IXE",
            "airportname": "Mangalore"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXG",
            "cityname": "Belgaum",
            "airportcode": "IXG",
            "airportname": "Belgaum"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXI",
            "cityname": "Lilabari",
            "airportcode": "IXI",
            "airportname": "Lilabari"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXJ",
            "cityname": "Jammu",
            "airportcode": "IXJ",
            "airportname": "Jammu"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXL",
            "cityname": "Leh",
            "airportcode": "IXL",
            "airportname": "Leh"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXM",
            "cityname": "Madurai",
            "airportcode": "IXM",
            "airportname": "Madurai"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXR",
            "cityname": "Ranchi",
            "airportcode": "IXR",
            "airportname": "Ranchi"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXS",
            "cityname": "Silchar",
            "airportcode": "IXS",
            "airportname": "Silchar"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXU",
            "cityname": "Aurangabad",
            "airportcode": "IXU",
            "airportname": "Aurangabad"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IIXZ",
            "cityname": "Port Blair",
            "airportcode": "IXZ",
            "airportname": "Port blair"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IJAI",
            "cityname": "Jaipur",
            "airportcode": "JAI",
            "airportname": "Jaipur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IJDH",
            "cityname": "Jodhpur",
            "airportcode": "JDH",
            "airportname": "Jodhpur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IJGA",
            "cityname": "Jamnagar",
            "airportcode": "JGA",
            "airportname": "Jamnagar"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IJLR",
            "cityname": "Jabalpur",
            "airportcode": "JLR",
            "airportname": "Jabalpur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IJRH",
            "cityname": "Jorhat",
            "airportcode": "JRH",
            "airportname": "Jorhat"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IKNU",
            "cityname": "Kanpur",
            "airportcode": "KNU",
            "airportname": "Kanpur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IKUU",
            "cityname": "Kulu",
            "airportcode": "KUU",
            "airportname": "Kulu"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ILKO",
            "cityname": "Lucknow",
            "airportcode": "LKO",
            "airportname": "Lucknow"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ILUH",
            "cityname": "Ludhiana",
            "airportcode": "LUH",
            "airportname": "Ludhiana"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IMAA",
            "cityname": "Chennai",
            "airportcode": "MAA",
            "airportname": "Chennai"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "INAG",
            "cityname": "Nagpur",
            "airportcode": "NAG",
            "airportname": "Nagpur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IPAT",
            "cityname": "Patna",
            "airportcode": "PAT",
            "airportname": "Patna"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IPBD",
            "cityname": "Porbandar",
            "airportcode": "PBD",
            "airportname": "Porbandar"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IPGH",
            "cityname": "Pantnagar",
            "airportcode": "PGH",
            "airportname": "Pantnagar"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IPNQ",
            "cityname": "Pune",
            "airportcode": "PNQ",
            "airportname": "Pune"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IPNY",
            "cityname": "Puducherry",
            "airportcode": "PNY",
            "airportname": "Puducherry"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IRAJ",
            "cityname": "Rajkot",
            "airportcode": "RAJ",
            "airportname": "Rajkot"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IRJA",
            "cityname": "Rajahmundry",
            "airportcode": "RJA",
            "airportname": "Rajahmundry"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IRPR",
            "cityname": "Raipur",
            "airportcode": "RPR",
            "airportname": "Raipur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IRUP",
            "cityname": "Rupsi",
            "airportcode": "RUP",
            "airportname": "Rupsi"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ISHL",
            "cityname": "Shillong",
            "airportcode": "SHL",
            "airportname": "Shillong"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ISTV",
            "cityname": "Surat",
            "airportcode": "STV",
            "airportname": "Surat"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ISXR",
            "cityname": "Srinagar",
            "airportcode": "SXR",
            "airportname": "Srinagar"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ITCR",
            "cityname": "Tuticorin",
            "airportcode": "TCR",
            "airportname": "Tuticorin"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ITEZ",
            "cityname": "Tezpur",
            "airportcode": "TEZ",
            "airportname": "Tezpur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ITIR",
            "cityname": "Tirupati",
            "airportcode": "TIR",
            "airportname": "Tirupati"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ITRV",
            "cityname": "Thiruvananthapuram",
            "airportcode": "TRV",
            "airportname": "Thiruvananthapuram"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "ITRZ",
            "cityname": "Tiruchirapalli",
            "airportcode": "TRZ",
            "airportname": "Tiruchirapalli"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IUDR",
            "cityname": "Udaipur",
            "airportcode": "UDR",
            "airportname": "Udaipur"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IVGA",
            "cityname": "Vijayawada",
            "airportcode": "VGA",
            "airportname": "Vijayawada"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IVNS",
            "cityname": "Varanasi",
            "airportcode": "VNS",
            "airportname": "Varanasi"
        },
        {
            "countrycode": "IN",
            "countryname": "India",
            "citycode": "IVTZ",
            "cityname": "Visakhapatnam",
            "airportcode": "VTZ",
            "airportname": "Visakhapatnam"
        },
        {
            "countrycode": "IQ",
            "countryname": "Iraq",
            "citycode": "BGWA",
            "cityname": "Baghdad",
            "airportcode": "BGW",
            "airportname": "Baghdad International"
        },
        {
            "countrycode": "IQ",
            "countryname": "Iraq",
            "citycode": "BSRA",
            "cityname": "Basra",
            "airportcode": "BSR",
            "airportname": "Basra"
        },
        {
            "countrycode": "IQ",
            "countryname": "Iraq",
            "citycode": "EBLA",
            "cityname": "Erbil",
            "airportcode": "EBL",
            "airportname": "Erbil"
        },
        {
            "countrycode": "IQ",
            "countryname": "Iraq",
            "citycode": "ISUA",
            "cityname": "Sulaymaniyah",
            "airportcode": "ISU",
            "airportname": "Sulaymaniyah International"
        },
        {
            "countrycode": "IQ",
            "countryname": "Iraq",
            "citycode": "NJFA",
            "cityname": "Najaf",
            "airportcode": "NJF",
            "airportname": "Najaf"
        },
        {
            "countrycode": "IQ",
            "countryname": "Iraq",
            "citycode": "OSMA",
            "cityname": "Mosul",
            "airportcode": "OSM",
            "airportname": "Mosul"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "ABDA",
            "cityname": "Abadan",
            "airportcode": "ABD",
            "airportname": "Abadan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "ACZA",
            "cityname": "Zabol",
            "airportcode": "ACZ",
            "airportname": "Zabol"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "ADUA",
            "cityname": "Ardabil",
            "airportcode": "ADU",
            "airportname": "Ardabil"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "AFZA",
            "cityname": "Sabzevar",
            "airportcode": "AFZ",
            "airportname": "Sabzevar"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "AWZA",
            "cityname": "Ahwaz",
            "airportcode": "AWZ",
            "airportname": "Ahwaz"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "AZDA",
            "cityname": "Yazd",
            "airportcode": "AZD",
            "airportname": "Yazd"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "BDHA",
            "cityname": "Bandar Lengeh",
            "airportcode": "BDH",
            "airportname": "Bandar Lengeh"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "BJBA",
            "cityname": "Bojnord",
            "airportcode": "BJB",
            "airportname": "Bojnord"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "BNDA",
            "cityname": "Bandar Abbas",
            "airportcode": "BND",
            "airportname": "Bandar Abbas"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "BUZA",
            "cityname": "Bushehr",
            "airportcode": "BUZ",
            "airportname": "Bushehr"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "BXRA",
            "cityname": "Bam",
            "airportcode": "BXR",
            "airportname": "Bam"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "CQDA",
            "cityname": "Shahre-Kord",
            "airportcode": "CQD",
            "airportname": "Shahre-Kord"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "DEFA",
            "cityname": "Dezful",
            "airportcode": "DEF",
            "airportname": "Dezful"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "GBTA",
            "cityname": "Gorgan",
            "airportcode": "GBT",
            "airportname": "Gorgan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "GCHA",
            "cityname": "Gachsaran",
            "airportcode": "GCH",
            "airportname": "Gachsaran"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "GSMA",
            "cityname": "Gheshm",
            "airportcode": "GSM",
            "airportname": "Gheshm"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "HDMA",
            "cityname": "Hamadan",
            "airportcode": "HDM",
            "airportname": "Hamadan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "IFNA",
            "cityname": "Isfahan",
            "airportcode": "IFN",
            "airportname": "Isfahan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "IHRA",
            "cityname": "Iran Shahr",
            "airportcode": "IHR",
            "airportname": "Iran Shahr"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "IILA",
            "cityname": "Ilaam",
            "airportcode": "IIL",
            "airportname": "Ilaam"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "JWNA",
            "cityname": "Zanjan",
            "airportcode": "JWN",
            "airportname": "Zanjan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "JYRA",
            "cityname": "Jiroft",
            "airportcode": "JYR",
            "airportname": "Jiroft"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "KERA",
            "cityname": "Kerman",
            "airportcode": "KER",
            "airportname": "Kerman"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "KHDA",
            "cityname": "Khorramabad",
            "airportcode": "KHD",
            "airportname": "Khorramabad"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "KIHA",
            "cityname": "Kish Island",
            "airportcode": "KIH",
            "airportname": "Kish Island"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "KSHA",
            "cityname": "Kermanshah",
            "airportcode": "KSH",
            "airportname": "Kermanshah"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "LFMA",
            "cityname": "Lamerd",
            "airportcode": "LFM",
            "airportname": "Lamerd"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "LRRA",
            "cityname": "Lar",
            "airportcode": "LRR",
            "airportname": "Lar"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "LVPA",
            "cityname": "Lavan",
            "airportcode": "LVP",
            "airportname": "Lavan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "MHDA",
            "cityname": "Mashhad",
            "airportcode": "MHD",
            "airportname": "Mashhad"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "MRXA",
            "cityname": "Bandar Mahshahr",
            "airportcode": "MRX",
            "airportname": "Bandar Mahshahr"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "NSHA",
            "cityname": "Now Shahr",
            "airportcode": "NSH",
            "airportname": "Now Shahr"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "OMHA",
            "cityname": "Urmieh",
            "airportcode": "OMH",
            "airportname": "Urmieh"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "RASB",
            "cityname": "Rasht",
            "airportcode": "RAS",
            "airportname": "Rasht"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "RJNA",
            "cityname": "Rafsanjan",
            "airportcode": "RJN",
            "airportname": "Rafsanjan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "RZRA",
            "cityname": "Ramsar",
            "airportcode": "RZR",
            "airportname": "Ramsar"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "SDGA",
            "cityname": "Sanandaj",
            "airportcode": "SDG",
            "airportname": "Sanandaj"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "SHAH",
            "cityname": "Shahroud",
            "airportcode": "RUD",
            "airportname": "Shahroud"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "SRYA",
            "cityname": "Sary",
            "airportcode": "SRY",
            "airportname": "Sary"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "SXIA",
            "cityname": "Sirri Island",
            "airportcode": "SXI",
            "airportname": "Sirri Island"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "SYJA",
            "cityname": "Sirjan",
            "airportcode": "SYJ",
            "airportname": "Sirjan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "SYZA",
            "cityname": "Shiraz",
            "airportcode": "SYZ",
            "airportname": "Shiraz"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "TBZA",
            "cityname": "Tabriz",
            "airportcode": "TBZ",
            "airportname": "Tabriz"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "TCXA",
            "cityname": "Tabas",
            "airportcode": "TCX",
            "airportname": "Tabas"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "THRA",
            "cityname": "Tehran",
            "airportcode": "IKA",
            "airportname": "Tehran Imam Khomeini"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "THRA",
            "cityname": "Tehran",
            "airportcode": "THR",
            "airportname": "Mehrabad International Airport"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "XBJA",
            "cityname": "Birjand",
            "airportcode": "XBJ",
            "airportname": "Birjand"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "YEHA",
            "cityname": "Asaloyeh",
            "airportcode": "PGU",
            "airportname": "Asaloyeh Persian Gulf International"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "YESA",
            "cityname": "Yasouj",
            "airportcode": "YES",
            "airportname": "Yasouj"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "ZAHA",
            "cityname": "Zahedan",
            "airportcode": "ZAH",
            "airportname": "Zahedan"
        },
        {
            "countrycode": "IR",
            "countryname": "Iran",
            "citycode": "ZBRA",
            "cityname": "Chah-Bahar",
            "airportcode": "ZBR",
            "airportname": "Chah-Bahar"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "AKUR",
            "cityname": "Akureyri",
            "airportcode": "AEY",
            "airportname": "Akureyri"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "BILD",
            "cityname": "Bildudalur",
            "airportcode": "BIU",
            "airportname": "Bildudalur"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "EGIL",
            "cityname": "Egilsstadir",
            "airportcode": "EGS",
            "airportname": "Egilsstadir"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "GJOG",
            "cityname": "Gjogur",
            "airportcode": "GJR",
            "airportname": "Gjogur"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "GRIM",
            "cityname": "Grimsey",
            "airportcode": "GRY",
            "airportname": "Grimsey"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "HUSA",
            "cityname": "Husavik",
            "airportcode": "HZK",
            "airportname": "Husavik"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "ISAF",
            "cityname": "Isafjordur",
            "airportcode": "IFJ",
            "airportname": "Isafjordur"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "REYK",
            "cityname": "Reykjavik",
            "airportcode": "KEF",
            "airportname": "Reykjavik Keflavik"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "REYK",
            "cityname": "Reykjavik",
            "airportcode": "RKV",
            "airportname": "Reykjavik Domestic"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "THOR",
            "cityname": "Thorshofn",
            "airportcode": "THO",
            "airportname": "Thorshofn"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "VEST",
            "cityname": "Vestmannaeyjar",
            "airportcode": "VEY",
            "airportname": "Vestmannaeyjar"
        },
        {
            "countrycode": "IS",
            "countryname": "Iceland",
            "citycode": "VOPN",
            "cityname": "Vopnafjordur",
            "airportcode": "VPN",
            "airportname": "Vopnafjordur"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "ALBE",
            "cityname": "Albenga",
            "airportcode": "ALL",
            "airportname": "Albenga"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "CUNE",
            "cityname": "Cuneo",
            "airportcode": "CUF",
            "airportname": "Cuneo Levaldigi"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "FOGG",
            "cityname": "Foggia Gino Lisa",
            "airportcode": "FOG",
            "airportname": "Foggia Gino Lisa"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "TQRA",
            "cityname": "San Domino Island",
            "airportcode": "TQR",
            "airportname": "San Domino Island"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "VIFA",
            "cityname": "Vieste",
            "airportcode": "VIF",
            "airportname": "Vieste"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "PESC",
            "cityname": "Pescara",
            "airportcode": "PSR",
            "airportname": "Pescara"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "CORT",
            "cityname": "Crotone",
            "airportcode": "CRV",
            "airportname": "Crotone"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "MARA",
            "cityname": "Lamezia Terme",
            "airportcode": "SUF",
            "airportname": "Lamezia Terme"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "REGG",
            "cityname": "Reggio Calabria",
            "airportcode": "REG",
            "airportname": "Reggio Calabria"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "NAPL",
            "cityname": "Naples",
            "airportcode": "NAP",
            "airportname": "Naples International"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "NAPL",
            "cityname": "Naples",
            "airportcode": "ZMF",
            "airportname": "Naples Beverello Harbor"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "BOLO",
            "cityname": "Bologna",
            "airportcode": "BLQ",
            "airportname": "Bologna International"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "PARM",
            "cityname": "Parma",
            "airportcode": "PMF",
            "airportname": "Parma"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "RIMI",
            "cityname": "Rimini",
            "airportcode": "RMI",
            "airportname": "Rimini"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "TRIE",
            "cityname": "Trieste",
            "airportcode": "TRS",
            "airportname": "Trieste"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "ROME",
            "cityname": "Rome",
            "airportcode": "CIA",
            "airportname": "Rome Ciampino"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "ROME",
            "cityname": "Rome",
            "airportcode": "FCO",
            "airportname": "Rome Fiumicino"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "GENO",
            "cityname": "Genoa",
            "airportcode": "GOA",
            "airportname": "Genoa"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "MILA",
            "cityname": "Milan",
            "airportcode": "BGY",
            "airportname": "Milan Bergamo"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "MILA",
            "cityname": "Milan",
            "airportcode": "LIN",
            "airportname": "Milan Linate"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "MILA",
            "cityname": "Milan",
            "airportcode": "MXP",
            "airportname": "Milan Malpensa"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "ANCO",
            "cityname": "Ancona",
            "airportcode": "AOI",
            "airportname": "Ancona"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "TURI",
            "cityname": "Turin",
            "airportcode": "TRN",
            "airportname": "Turin"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "BARI",
            "cityname": "Bari",
            "airportcode": "BRI",
            "airportname": "Bari"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "BRIN",
            "cityname": "Brindisi",
            "airportcode": "BDS",
            "airportname": "Brindisi"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "ALGS",
            "cityname": "Alghero Sardinia",
            "airportcode": "AHO",
            "airportname": "Alghero Sardinia"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "CAGL",
            "cityname": "Cagliari",
            "airportcode": "CAG",
            "airportname": "Cagliari"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "OLBI",
            "cityname": "Olbia",
            "airportcode": "OLB",
            "airportname": "Olbia"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "CATA",
            "cityname": "Catania",
            "airportcode": "CTA",
            "airportname": "Catania Fontanarossa"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "COMI",
            "cityname": "Comiso",
            "airportcode": "CIY",
            "airportname": "Comiso"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "LAMP",
            "cityname": "Lampedusa",
            "airportcode": "LMP",
            "airportname": "Lampedusa"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "PALE",
            "cityname": "Palermo",
            "airportcode": "PMO",
            "airportname": "Palermo"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "PANT",
            "cityname": "Pantelleria",
            "airportcode": "PNL",
            "airportname": "Pantelleria"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "TRAP",
            "cityname": "Trapani Birgi",
            "airportcode": "TPS",
            "airportname": "Trapani Birgi"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "ELBA",
            "cityname": "Elba Island",
            "airportcode": "EBA",
            "airportname": "Elba Island"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "FLOR",
            "cityname": "Florence",
            "airportcode": "FLR",
            "airportname": "Florence"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "PISA",
            "cityname": "Pisa",
            "airportcode": "PSA",
            "airportname": "Pisa"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "BOLZ",
            "cityname": "Bolzano",
            "airportcode": "BZO",
            "airportname": "Bolzano"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "PERU",
            "cityname": "Perugia",
            "airportcode": "PEG",
            "airportname": "Perugia Santegidio"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "VENI",
            "cityname": "Venice",
            "airportcode": "TSF",
            "airportname": "Venice Treviso"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "VENI",
            "cityname": "Venice",
            "airportcode": "VCE",
            "airportname": "Venice Marco Polo"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "VERO",
            "cityname": "Verona",
            "airportcode": "VBS",
            "airportname": "Verona Brescia"
        },
        {
            "countrycode": "IT",
            "countryname": "Italy",
            "citycode": "VERO",
            "cityname": "Verona",
            "airportcode": "VRN",
            "airportname": "Verona International"
        },
        {
            "countrycode": "JM",
            "countryname": "Jamaica",
            "citycode": "KINA",
            "cityname": "Kingston",
            "airportcode": "KIN",
            "airportname": "Kingston Norman Manley"
        },
        {
            "countrycode": "JM",
            "countryname": "Jamaica",
            "citycode": "KINA",
            "cityname": "Kingston",
            "airportcode": "KTP",
            "airportname": "Kingston Tinson"
        },
        {
            "countrycode": "JM",
            "countryname": "Jamaica",
            "citycode": "MBJA",
            "cityname": "Montego Bay",
            "airportcode": "MBJ",
            "airportname": "Montego Bay"
        },
        {
            "countrycode": "JO",
            "countryname": "Jordan",
            "citycode": "AMMA",
            "cityname": "Amman",
            "airportcode": "ADJ",
            "airportname": "Amman Civil - Marka"
        },
        {
            "countrycode": "JO",
            "countryname": "Jordan",
            "citycode": "AMMA",
            "cityname": "Amman",
            "airportcode": "AMM",
            "airportname": "Amman Queen Alia"
        },
        {
            "countrycode": "JO",
            "countryname": "Jordan",
            "citycode": "AQJA",
            "cityname": "Aqaba",
            "airportcode": "AQJ",
            "airportname": "Aqaba"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "FSZA",
            "cityname": "Shizuoka",
            "airportcode": "FSZ",
            "airportname": "Shizuoka"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "IBRA",
            "cityname": "Omitama",
            "airportcode": "IBR",
            "airportname": "Omitama"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "IWKU",
            "cityname": "Iwakuni",
            "airportcode": "IWK",
            "airportname": "Iwakuni"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JAMX",
            "cityname": "Amakusa",
            "airportcode": "AXJ",
            "airportname": "Amakusa Airport"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JAOJ",
            "cityname": "Aomori",
            "airportcode": "AOJ",
            "airportname": "Aomori"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JASJ",
            "cityname": "Amami O Shima",
            "airportcode": "ASJ",
            "airportname": "Amami O Shima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JAXT",
            "cityname": "Akita",
            "airportcode": "AXT",
            "airportname": "Akita"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JFKS",
            "cityname": "Fukushima",
            "airportcode": "FKS",
            "airportname": "Fukushima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JFUJ",
            "cityname": "Fukue",
            "airportcode": "FUJ",
            "airportname": "Fukue"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JFUK",
            "cityname": "Fukuoka",
            "airportcode": "FUK",
            "airportname": "Fukuoka"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JGAJ",
            "cityname": "Yamagata",
            "airportcode": "GAJ",
            "airportname": "Yamagata"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JHAC",
            "cityname": "Hachijo Jima",
            "airportcode": "HAC",
            "airportname": "Hachijo Jima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JHIJ",
            "cityname": "Hiroshima",
            "airportcode": "HIJ",
            "airportname": "Hiroshima International"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JHNA",
            "cityname": "Hanamaki",
            "airportcode": "HNA",
            "airportname": "Hanamaki"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JHSG",
            "cityname": "Saga",
            "airportcode": "HSG",
            "airportname": "Saga"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JIKI",
            "cityname": "Iki",
            "airportcode": "IKI",
            "airportname": "Iki"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JISG",
            "cityname": "Ishigaki",
            "airportcode": "ISG",
            "airportname": "Ishigaki"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JIWJ",
            "cityname": "Iwami",
            "airportcode": "IWJ",
            "airportname": "Iwami"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JIZO",
            "cityname": "Izumo",
            "airportcode": "IZO",
            "airportname": "Izumo"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKCZ",
            "cityname": "Kochi",
            "airportcode": "KCZ",
            "airportname": "Kochi"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKIJ",
            "cityname": "Niigata",
            "airportcode": "KIJ",
            "airportname": "Niigata"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKKJ",
            "cityname": "Kita Kyushu",
            "airportcode": "KKJ",
            "airportname": "Kita Kyushu"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKKX",
            "cityname": "Kikaiga Shima",
            "airportcode": "KKX",
            "airportname": "Kikaiga Shima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKMI",
            "cityname": "Miyazaki",
            "airportcode": "KMI",
            "airportname": "Miyazaki"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKMJ",
            "cityname": "Kumamoto",
            "airportcode": "KMJ",
            "airportname": "Kumamoto"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKMQ",
            "cityname": "Komatsu",
            "airportcode": "KMQ",
            "airportname": "Komatsu"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKOJ",
            "cityname": "Kagoshima",
            "airportcode": "KOJ",
            "airportname": "Kagoshima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKTD",
            "cityname": "Kitadaito",
            "airportcode": "KTD",
            "airportname": "Kitadaito"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKUM",
            "cityname": "Yakushima",
            "airportcode": "KUM",
            "airportname": "Yakushima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JMMD",
            "cityname": "Minami Daito",
            "airportcode": "MMD",
            "airportname": "Minami Daito"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JMMJ",
            "cityname": "Matsumoto",
            "airportcode": "MMJ",
            "airportname": "Matsumoto"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JMMY",
            "cityname": "Miyako Jima",
            "airportcode": "MMY",
            "airportname": "Miyako Jima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JMSJ",
            "cityname": "Misawa",
            "airportcode": "MSJ",
            "airportname": "Misawa"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JMYJ",
            "cityname": "Matsuyama",
            "airportcode": "MYJ",
            "airportname": "Matsuyama"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JNGO",
            "cityname": "Nagoya",
            "airportcode": "NGO",
            "airportname": "Nagoya Chubu Centrair"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JNGO",
            "cityname": "Nagoya",
            "airportcode": "NKM",
            "airportname": "Nagoya Komaki Air Force Base"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JNGS",
            "cityname": "Nagasaki",
            "airportcode": "NGS",
            "airportname": "Nagasaki"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JNTQ",
            "cityname": "Wajima",
            "airportcode": "NTQ",
            "airportname": "Wajima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JOGN",
            "cityname": "Yonaguni Jima",
            "airportcode": "OGN",
            "airportname": "Yonaguni Jima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JOIT",
            "cityname": "Oita",
            "airportcode": "OIT",
            "airportname": "Oita"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JOKA",
            "cityname": "Okinawa",
            "airportcode": "OKA",
            "airportname": "Okinawa Naha"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JOKE",
            "cityname": "Okino Erabu",
            "airportcode": "OKE",
            "airportname": "Okino Erabu"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JOKI",
            "cityname": "Oki Island",
            "airportcode": "OKI",
            "airportname": "Oki Island"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JOKJ",
            "cityname": "Okayama",
            "airportcode": "OKJ",
            "airportname": "Okayama"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JONJ",
            "cityname": "Odate Noshiro",
            "airportcode": "ONJ",
            "airportname": "Odate Noshiro"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JRNJ",
            "cityname": "Yoronjima",
            "airportcode": "RNJ",
            "airportname": "Yoronjima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JSDJ",
            "cityname": "Sendai",
            "airportcode": "SDJ",
            "airportname": "Sendai"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JSHM",
            "cityname": "Shirahama",
            "airportcode": "SHM",
            "airportname": "Shirahama"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JSYO",
            "cityname": "Shonai",
            "airportcode": "SYO",
            "airportname": "Shonai"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JTAK",
            "cityname": "Takamatsu",
            "airportcode": "TAK",
            "airportname": "Takamatsu"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JTKN",
            "cityname": "Tokunoshima",
            "airportcode": "TKN",
            "airportname": "Tokunoshima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JTKS",
            "cityname": "Tokushima",
            "airportcode": "TKS",
            "airportname": "Tokushima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JTNE",
            "cityname": "Tanegashima",
            "airportcode": "TNE",
            "airportname": "Tanegashima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JTOY",
            "cityname": "Toyama",
            "airportcode": "TOY",
            "airportname": "Toyama"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JTRA",
            "cityname": "Taramajima",
            "airportcode": "TRA",
            "airportname": "Taramajima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JTSJ",
            "cityname": "Tsushima",
            "airportcode": "TSJ",
            "airportname": "Tsushima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JTTJ",
            "cityname": "Tottori",
            "airportcode": "TTJ",
            "airportname": "Tottori"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JUBJ",
            "cityname": "Ube",
            "airportcode": "UBJ",
            "airportname": "Ube"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JUEO",
            "cityname": "Kumejima",
            "airportcode": "UEO",
            "airportname": "Kumejima"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JUKB",
            "cityname": "Kobe",
            "airportcode": "UKB",
            "airportname": "Kobe"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JWKJ",
            "cityname": "Wakkanai",
            "airportcode": "WKJ",
            "airportname": "Wakkanai"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JYGJ",
            "cityname": "Yonago",
            "airportcode": "YGJ",
            "airportname": "Yonago"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "OSAA",
            "cityname": "Osaka",
            "airportcode": "ITM",
            "airportname": "Osaka Itami"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "OSAA",
            "cityname": "Osaka",
            "airportcode": "KIX",
            "airportname": "Osaka Kansai International"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "TYOA",
            "cityname": "Tokyo",
            "airportcode": "HND",
            "airportname": "Tokyo Haneda"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "TYOA",
            "cityname": "Tokyo",
            "airportcode": "NRT",
            "airportname": "Tokyo Narita"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JAKJ",
            "cityname": "Asahikawa",
            "airportcode": "AKJ",
            "airportname": "Asahikawa"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JHKD",
            "cityname": "Hakodate",
            "airportcode": "HKD",
            "airportname": "Hakodate"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JKUH",
            "cityname": "Kushiro",
            "airportcode": "KUH",
            "airportname": "Kushiro"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JMBE",
            "cityname": "Monbetsu",
            "airportcode": "MBE",
            "airportname": "Monbetsu"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JMMB",
            "cityname": "Memanbetsu",
            "airportcode": "MMB",
            "airportname": "Memanbetsu"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JOBO",
            "cityname": "Obihiro",
            "airportcode": "OBO",
            "airportname": "Obihiro"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JOIR",
            "cityname": "Okushiri",
            "airportcode": "OIR",
            "airportname": "Okushiri"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JRIS",
            "cityname": "Rishiri",
            "airportcode": "RIS",
            "airportname": "Rishiri"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "JSHB",
            "cityname": "Nakashibetsu",
            "airportcode": "SHB",
            "airportname": "Nakashibetsu"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "SPKA",
            "cityname": "Sapporo",
            "airportcode": "CTS",
            "airportname": "Sapporo Chitose"
        },
        {
            "countrycode": "JP",
            "countryname": "Japan",
            "citycode": "SPKA",
            "cityname": "Sapporo",
            "airportcode": "OKD",
            "airportname": "Sapporo Okadama"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "ASVA",
            "cityname": "Amboseli",
            "airportcode": "ASV",
            "airportname": "Amboseli"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "EDLA",
            "cityname": "Eldoret",
            "airportcode": "EDL",
            "airportname": "Eldoret"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "KAKA",
            "cityname": "Kakamega",
            "airportcode": "GGM",
            "airportname": "Kakamega"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "KINN",
            "cityname": "Kinna",
            "airportcode": "JJM",
            "airportname": "Kinna Meru"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "KISA",
            "cityname": "Kisumu",
            "airportcode": "KIS",
            "airportname": "Kisumu"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "KTLA",
            "cityname": "Kitale",
            "airportcode": "KTL",
            "airportname": "Kitale"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "LAUA",
            "cityname": "Lamu",
            "airportcode": "LAU",
            "airportname": "Lamu"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "LBNA",
            "cityname": "Lake Baringo",
            "airportcode": "LBN",
            "airportname": "Lake Baringo"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "LOKA",
            "cityname": "Lodwar",
            "airportcode": "LOK",
            "airportname": "Lodwar"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "MBAA",
            "cityname": "Mombasa",
            "airportcode": "MBA",
            "airportname": "Mombasa"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "MREA",
            "cityname": "Mara Lodges",
            "airportcode": "MRE",
            "airportname": "Mara Lodges"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "MUMA",
            "cityname": "Mumias",
            "airportcode": "MUM",
            "airportname": "Mumias"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "MYDA",
            "cityname": "Malindi",
            "airportcode": "MYD",
            "airportname": "Malindi"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "NBOA",
            "cityname": "Nairobi",
            "airportcode": "NBO",
            "airportname": "Nairobi Jomo Kenyatta"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "NBOA",
            "cityname": "Nairobi",
            "airportcode": "WIL",
            "airportname": "Nairobi Wilson"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "NYKA",
            "cityname": "Nanyuki",
            "airportcode": "NYK",
            "airportname": "Nanyuki"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "UASA",
            "cityname": "Samburu",
            "airportcode": "UAS",
            "airportname": "Samburu"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "UKAA",
            "cityname": "Ukunda",
            "airportcode": "UKA",
            "airportname": "Ukunda"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "VPGO",
            "cityname": "Vipingo",
            "airportcode": "VPG",
            "airportname": "Vipingo Airstrip"
        },
        {
            "countrycode": "KE",
            "countryname": "Kenya",
            "citycode": "WJRA",
            "cityname": "Wajir",
            "airportcode": "WJR",
            "airportname": "Wajir"
        },
        {
            "countrycode": "KG",
            "countryname": "Kyrgyzstan",
            "citycode": "FRUA",
            "cityname": "Bishkek",
            "airportcode": "FRU",
            "airportname": "Bishkek"
        },
        {
            "countrycode": "KG",
            "countryname": "Kyrgyzstan",
            "citycode": "OSSA",
            "cityname": "Osh",
            "airportcode": "OSS",
            "airportname": "Osh"
        },
        {
            "countrycode": "KH",
            "countryname": "Cambodia",
            "citycode": "KOSK",
            "cityname": "Sihanoukville",
            "airportcode": "KOS",
            "airportname": "Sihanoukville"
        },
        {
            "countrycode": "KH",
            "countryname": "Cambodia",
            "citycode": "PNHK",
            "cityname": "Phnom Penh",
            "airportcode": "PNH",
            "airportname": "Phnom Penh"
        },
        {
            "countrycode": "KH",
            "countryname": "Cambodia",
            "citycode": "REPK",
            "cityname": "Siem Reap",
            "airportcode": "REP",
            "airportname": "Siem Reap"
        },
        {
            "countrycode": "KI",
            "countryname": "Kiribati",
            "citycode": "CXIA",
            "cityname": "Christmas Island",
            "airportcode": "CXI",
            "airportname": "Christmas Island"
        },
        {
            "countrycode": "KI",
            "countryname": "Kiribati",
            "citycode": "TRWA",
            "cityname": "Tarawa",
            "airportcode": "TRW",
            "airportname": "Tarawa"
        },
        {
            "countrycode": "KM",
            "countryname": "Comoros",
            "citycode": "AJNA",
            "cityname": "Anjouan",
            "airportcode": "AJN",
            "airportname": "Anjouan"
        },
        {
            "countrycode": "KM",
            "countryname": "Comoros",
            "citycode": "NWAA",
            "cityname": "Moheli",
            "airportcode": "NWA",
            "airportname": "Moheli"
        },
        {
            "countrycode": "KM",
            "countryname": "Comoros",
            "citycode": "YVAA",
            "cityname": "Moroni",
            "airportcode": "HAH",
            "airportname": "Moroni Prince Said Ibrahim In"
        },
        {
            "countrycode": "KM",
            "countryname": "Comoros",
            "citycode": "YVAA",
            "cityname": "Moroni",
            "airportcode": "YVA",
            "airportname": "Moroni Iconi"
        },
        {
            "countrycode": "KN",
            "countryname": "Saint Kitts and Nevis",
            "citycode": "NEVA",
            "cityname": "Nevis",
            "airportcode": "NEV",
            "airportname": "Nevis"
        },
        {
            "countrycode": "KN",
            "countryname": "Saint Kitts and Nevis",
            "citycode": "SKBA",
            "cityname": "Basseterre",
            "airportcode": "SKB",
            "airportname": "Basseterre"
        },
        {
            "countrycode": "KO",
            "countryname": "Kosovo",
            "citycode": "PRIT",
            "cityname": "Pristina",
            "airportcode": "PRN",
            "airportname": "Pristina"
        },
        {
            "countrycode": "KP",
            "countryname": "North Korea",
            "citycode": "FNJA",
            "cityname": "Pyongyang",
            "airportcode": "FNJ",
            "airportname": "Pyongyang"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "CJJA",
            "cityname": "Cheongju",
            "airportcode": "CJJ",
            "airportname": "Cheongju"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "CJUA",
            "cityname": "Jeju",
            "airportcode": "CJU",
            "airportname": "Jeju"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "HINA",
            "cityname": "Jinju",
            "airportcode": "HIN",
            "airportname": "Jinju"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "KPOA",
            "cityname": "Pohang",
            "airportcode": "KPO",
            "airportname": "Pohang"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "KUVA",
            "cityname": "Gunsan",
            "airportcode": "KUV",
            "airportname": "Gunsan"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "KWJA",
            "cityname": "Gwangju",
            "airportcode": "KWJ",
            "airportname": "Gwangju"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "KWJA",
            "cityname": "Gwangju",
            "airportcode": "MWX",
            "airportname": "Gwangju Muan International"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "PUSA",
            "cityname": "Busan",
            "airportcode": "PUS",
            "airportname": "Busan"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "RSUA",
            "cityname": "Yeosu",
            "airportcode": "RSU",
            "airportname": "Yeosu"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "SELA",
            "cityname": "Seoul",
            "airportcode": "GMP",
            "airportname": "Seoul Gimpo"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "SELA",
            "cityname": "Seoul",
            "airportcode": "ICN",
            "airportname": "Seoul Incheon Int'l"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "SUKA",
            "cityname": "Samcheok",
            "airportcode": "SUK",
            "airportname": "Samcheok"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "SYSA",
            "cityname": "Suncheon",
            "airportcode": "SYS",
            "airportname": "Suncheon"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "TAEA",
            "cityname": "Daegu",
            "airportcode": "TAE",
            "airportname": "Daegu"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "USNA",
            "cityname": "Ulsan",
            "airportcode": "USN",
            "airportname": "Ulsan"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "WJUA",
            "cityname": "WonJu",
            "airportcode": "WJU",
            "airportname": "WonJu"
        },
        {
            "countrycode": "KR",
            "countryname": "South Korea",
            "citycode": "YNYA",
            "cityname": "Yangyang",
            "airportcode": "YNY",
            "airportname": "Yangyang"
        },
        {
            "countrycode": "KW",
            "countryname": "Kuwait",
            "citycode": "KWIA",
            "cityname": "Kuwait",
            "airportcode": "KWI",
            "airportname": "Kuwait"
        },
        {
            "countrycode": "KY",
            "countryname": "Cayman Islands",
            "citycode": "CYBA",
            "cityname": "Cayman Brac Is",
            "airportcode": "CYB",
            "airportname": "Cayman Brac Is"
        },
        {
            "countrycode": "KY",
            "countryname": "Cayman Islands",
            "citycode": "GCMA",
            "cityname": "Grand Cayman Island",
            "airportcode": "GCM",
            "airportname": "Grand Cayman Island"
        },
        {
            "countrycode": "KY",
            "countryname": "Cayman Islands",
            "citycode": "LYBA",
            "cityname": "Little Cayman",
            "airportcode": "LYB",
            "airportname": "Little Cayman"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "AKXA",
            "cityname": "Aktyubinsk",
            "airportcode": "AKX",
            "airportname": "Aktyubinsk"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "ALAA",
            "cityname": "Almaty",
            "airportcode": "ALA",
            "airportname": "Almaty"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "CITA",
            "cityname": "Shimkent",
            "airportcode": "CIT",
            "airportname": "Shimkent"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "DMBA",
            "cityname": "Zhambyl",
            "airportcode": "DMB",
            "airportname": "Zhambyl"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "DZNA",
            "cityname": "Zhezkazgan",
            "airportcode": "DZN",
            "airportname": "Zhezkazgan"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "GUWA",
            "cityname": "Atyrau",
            "airportcode": "GUW",
            "airportname": "Atyrau"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "KGFA",
            "cityname": "Karaganda",
            "airportcode": "KGF",
            "airportname": "Karaganda"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "KOVA",
            "cityname": "Kokshetau",
            "airportcode": "KOV",
            "airportname": "Kokshetau"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "KSNA",
            "cityname": "Kostanay",
            "airportcode": "KSN",
            "airportname": "Kostanay"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "KZOA",
            "cityname": "Kzyl-Orda",
            "airportcode": "KZO",
            "airportname": "Kzyl-Orda"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "PLXA",
            "cityname": "Semipalatinsk",
            "airportcode": "PLX",
            "airportname": "Semipalatinsk"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "PWQA",
            "cityname": "Pavlodar",
            "airportcode": "PWQ",
            "airportname": "Pavlodar"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "SCOA",
            "cityname": "Aktau",
            "airportcode": "SCO",
            "airportname": "Aktau"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "TDKA",
            "cityname": "Taldy-Kurgan",
            "airportcode": "TDK",
            "airportname": "Taldy-Kurgan"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "TSEA",
            "cityname": "Astana",
            "airportcode": "TSE",
            "airportname": "Astana"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "UKKA",
            "cityname": "Ust-Kamenogorsk",
            "airportcode": "UKK",
            "airportname": "Ust-Kamenogorsk"
        },
        {
            "countrycode": "KZ",
            "countryname": "Kazakhstan",
            "citycode": "URAA",
            "cityname": "Uralsk",
            "airportcode": "URA",
            "airportname": "Uralsk"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "AOUL",
            "cityname": "Attopeu",
            "airportcode": "AOU",
            "airportname": "Attopeu"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "HOEL",
            "cityname": "Houeisay",
            "airportcode": "HOE",
            "airportname": "Houeisay"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "LPQL",
            "cityname": "Luang Prabang",
            "airportcode": "LPQ",
            "airportname": "Luang Prabang"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "LXGL",
            "cityname": "Luang Namtha",
            "airportcode": "LXG",
            "airportname": "Luang Namtha"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "NEUL",
            "cityname": "Sam Neua",
            "airportcode": "NEU",
            "airportname": "Sam Neua"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "ODYL",
            "cityname": "Oudomxay",
            "airportcode": "ODY",
            "airportname": "Oudomxay"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "PCQL",
            "cityname": "Phongsaly",
            "airportcode": "PCQ",
            "airportname": "Phongsaly"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "PKZL",
            "cityname": "Pakse",
            "airportcode": "PKZ",
            "airportname": "Pakse"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "VTEL",
            "cityname": "Vientiane",
            "airportcode": "VTE",
            "airportname": "Vientiane"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "XKHA",
            "cityname": "Xieng Khouang",
            "airportcode": "XKH",
            "airportname": "Xieng Khouang"
        },
        {
            "countrycode": "LA",
            "countryname": "Laos",
            "citycode": "ZVKA",
            "cityname": "Savannakhet",
            "airportcode": "ZVK",
            "airportname": "Savannakhet"
        },
        {
            "countrycode": "LB",
            "countryname": "Lebanon",
            "citycode": "BEIR",
            "cityname": "Beirut",
            "airportcode": "BEY",
            "airportname": "Beirut"
        },
        {
            "countrycode": "LC",
            "countryname": "Saint Lucia",
            "citycode": "SLUA",
            "cityname": "Castries",
            "airportcode": "SLU",
            "airportname": "St Lucia Vigie"
        },
        {
            "countrycode": "LC",
            "countryname": "Saint Lucia",
            "citycode": "SLUA",
            "cityname": "Castries",
            "airportcode": "UVF",
            "airportname": "St Lucia Hewanorra"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "BJTA",
            "cityname": "Bentota River",
            "airportcode": "BJT",
            "airportname": "Bentota River"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "BTCA",
            "cityname": "Batticaloa",
            "airportcode": "BTC",
            "airportname": "Batticaloa"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "CMBA",
            "cityname": "Colombo",
            "airportcode": "CMB",
            "airportname": "Colombo Bandaranayake"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "CMBA",
            "cityname": "Colombo",
            "airportcode": "RML",
            "airportname": "Colombo Ratmalana"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "DIKW",
            "cityname": "Dikwella",
            "airportcode": "DIW",
            "airportname": "Dikwella"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "GOYA",
            "cityname": "Gal Oya",
            "airportcode": "GOY",
            "airportname": "Gal Oya"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "HAMT",
            "cityname": "Hambantota",
            "airportcode": "HRI",
            "airportname": "Hambantota International Airport"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "JAFA",
            "cityname": "Jaffna",
            "airportcode": "JAF",
            "airportname": "Jaffna"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "KATU",
            "cityname": "Katugastota",
            "airportcode": "KDZ",
            "airportname": "Katugastota"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "KCTA",
            "cityname": "Koggala",
            "airportcode": "KCT",
            "airportname": "Koggala"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "KDWA",
            "cityname": "Kandy",
            "airportcode": "KDW",
            "airportname": "Victoria Resevour Kandy"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "KEZA",
            "cityname": "Kelaniya",
            "airportcode": "KEZ",
            "airportname": "Kelaniya"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "MNHA",
            "cityname": "Minneriya",
            "airportcode": "MNH",
            "airportname": "Minneriya"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "NUAA",
            "cityname": "Nuwara Eliya",
            "airportcode": "NUA",
            "airportname": "Nuwara Eliya"
        },
        {
            "countrycode": "LK",
            "countryname": "Sri Lanka",
            "citycode": "TRRA",
            "cityname": "Trincomalee",
            "airportcode": "TRR",
            "airportname": "Trincomalee"
        },
        {
            "countrycode": "LR",
            "countryname": "Liberia",
            "citycode": "MLWA",
            "cityname": "Monrovia",
            "airportcode": "MLW",
            "airportname": "Monrovia Sprigg Payne"
        },
        {
            "countrycode": "LR",
            "countryname": "Liberia",
            "citycode": "MLWA",
            "cityname": "Monrovia",
            "airportcode": "ROB",
            "airportname": "Monrovia Roberts"
        },
        {
            "countrycode": "LS",
            "countryname": "Lesotho",
            "citycode": "MSUA",
            "cityname": "Maseru",
            "airportcode": "MSU",
            "airportname": "Maseru"
        },
        {
            "countrycode": "LT",
            "countryname": "Lithuania",
            "citycode": "KAUN",
            "cityname": "Kaunas",
            "airportcode": "KUN",
            "airportname": "Kaunas"
        },
        {
            "countrycode": "LT",
            "countryname": "Lithuania",
            "citycode": "PALA",
            "cityname": "Palanga",
            "airportcode": "PLQ",
            "airportname": "Palanga International"
        },
        {
            "countrycode": "LT",
            "countryname": "Lithuania",
            "citycode": "VILN",
            "cityname": "Vilnius",
            "airportcode": "VNO",
            "airportname": "Vilnius"
        },
        {
            "countrycode": "LU",
            "countryname": "Luxembourg",
            "citycode": "LUXE",
            "cityname": "Luxembourg",
            "airportcode": "LUX",
            "airportname": "Luxembourg"
        },
        {
            "countrycode": "LV",
            "countryname": "Latvia",
            "citycode": "RIGA",
            "cityname": "Riga",
            "airportcode": "RIX",
            "airportname": "Riga International"
        },
        {
            "countrycode": "LY",
            "countryname": "Libya",
            "citycode": "BENA",
            "cityname": "Benghazi",
            "airportcode": "BEN",
            "airportname": "Benghazi"
        },
        {
            "countrycode": "LY",
            "countryname": "Libya",
            "citycode": "GHTA",
            "cityname": "Ghat",
            "airportcode": "GHT",
            "airportname": "Ghat"
        },
        {
            "countrycode": "LY",
            "countryname": "Libya",
            "citycode": "LAQA",
            "cityname": "Beida",
            "airportcode": "LAQ",
            "airportname": "Beida"
        },
        {
            "countrycode": "LY",
            "countryname": "Libya",
            "citycode": "MJIA",
            "cityname": "Mitiga",
            "airportcode": "MJI",
            "airportname": "Mitiga"
        },
        {
            "countrycode": "LY",
            "countryname": "Libya",
            "citycode": "MRAA",
            "cityname": "Misurata",
            "airportcode": "MRA",
            "airportname": "Misurata"
        },
        {
            "countrycode": "LY",
            "countryname": "Libya",
            "citycode": "SEBA",
            "cityname": "Sebha",
            "airportcode": "SEB",
            "airportname": "Sebha"
        },
        {
            "countrycode": "LY",
            "countryname": "Libya",
            "citycode": "TIPA",
            "cityname": "Tripoli",
            "airportcode": "TIP",
            "airportname": "Tripoli"
        },
        {
            "countrycode": "LY",
            "countryname": "Libya",
            "citycode": "TOBA",
            "cityname": "Tobruk",
            "airportcode": "TOB",
            "airportname": "Tobruk"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "AGAD",
            "cityname": "Agadir",
            "airportcode": "AGA",
            "airportname": "Agadir"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "ALHO",
            "cityname": "Al Hoceima",
            "airportcode": "AHU",
            "airportname": "Al Hoceima Charif Idr"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "BENI",
            "cityname": "Beni Mellal",
            "airportcode": "BEM",
            "airportname": "Beni Mellal"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "CASA",
            "cityname": "Casablanca",
            "airportcode": "CAS",
            "airportname": "Casablanca Anfa"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "CASA",
            "cityname": "Casablanca",
            "airportcode": "CMN",
            "airportname": "Casablanca Mohamed V."
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "DAKH",
            "cityname": "Dakhla",
            "airportcode": "VIL",
            "airportname": "Dakhla"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "ERRA",
            "cityname": "Errachidia",
            "airportcode": "ERH",
            "airportname": "Errachidia"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "ESSA",
            "cityname": "Essaouira",
            "airportcode": "ESU",
            "airportname": "Essaouira"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "FEZS",
            "cityname": "Fes",
            "airportcode": "FEZ",
            "airportname": "Fes-Saïss"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "GOUL",
            "cityname": "Goulimime",
            "airportcode": "GLN",
            "airportname": "Goulimime"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "LAAY",
            "cityname": "Laayoune Hassan I",
            "airportcode": "EUN",
            "airportname": "Laayoune Hassan I"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "MARR",
            "cityname": "Marrakech Menara",
            "airportcode": "RAK",
            "airportname": "Marrakech Menara"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "NADO",
            "cityname": "Nador",
            "airportcode": "NDR",
            "airportname": "Nador"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "OUAR",
            "cityname": "Ouarzazate",
            "airportcode": "OZZ",
            "airportname": "Ouarzazate"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "OUJD",
            "cityname": "Oujda",
            "airportcode": "OUD",
            "airportname": "Oujda L. Angades"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "RABA",
            "cityname": "Rabat",
            "airportcode": "RBA",
            "airportname": "Rabat"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "TANG",
            "cityname": "Tangier",
            "airportcode": "TNG",
            "airportname": "Tangier Boukhalef"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "TANT",
            "cityname": "Tan Tan",
            "airportcode": "TTA",
            "airportname": "Tan Tan"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "TETU",
            "cityname": "Tetuan S. Ramel",
            "airportcode": "TTU",
            "airportname": "Tetuan S. Ramel"
        },
        {
            "countrycode": "MA",
            "countryname": "Morocco",
            "citycode": "ZAGO",
            "cityname": "Zagora",
            "airportcode": "OZG",
            "airportname": "Zagora"
        },
        {
            "countrycode": "MC",
            "countryname": "Monaco",
            "citycode": "MCMA",
            "cityname": "Monte Carlo",
            "airportcode": "MCM",
            "airportname": "Monte Carlo"
        },
        {
            "countrycode": "MD",
            "countryname": "Moldova",
            "citycode": "BZYA",
            "cityname": "Beltsy",
            "airportcode": "BZY",
            "airportname": "Beltsy"
        },
        {
            "countrycode": "MD",
            "countryname": "Moldova",
            "citycode": "KIVA",
            "cityname": "Chisinau",
            "airportcode": "KIV",
            "airportname": "Chisinau"
        },
        {
            "countrycode": "ME",
            "countryname": "Montenegro",
            "citycode": "PODG",
            "cityname": "Podgorica",
            "airportcode": "TGD",
            "airportname": "Podgorica"
        },
        {
            "countrycode": "ME",
            "countryname": "Montenegro",
            "citycode": "TIVA",
            "cityname": "Tivat",
            "airportcode": "TIV",
            "airportname": "Tivat"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "AMYA",
            "cityname": "Ambatomainty",
            "airportcode": "AMY",
            "airportname": "Ambatomainty"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "ANMA",
            "cityname": "Antalaha",
            "airportcode": "ANM",
            "airportname": "Antalaha"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "BMDA",
            "cityname": "Belo",
            "airportcode": "BMD",
            "airportname": "Belo"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "DIEA",
            "cityname": "Antsiranana",
            "airportcode": "DIE",
            "airportname": "Antsiranana / Arrachart"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "FTUA",
            "cityname": "Fort Dauphin",
            "airportcode": "FTU",
            "airportname": "Fort Dauphin"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "MJNA",
            "cityname": "Majunga",
            "airportcode": "MJN",
            "airportname": "Majunga"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "MOQA",
            "cityname": "Morondava",
            "airportcode": "MOQ",
            "airportname": "Morondava"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "NOSA",
            "cityname": "Nossi-be",
            "airportcode": "NOS",
            "airportname": "Nossi-be"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "SMSA",
            "cityname": "Sainte Marie",
            "airportcode": "SMS",
            "airportname": "Sainte Marie"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "SVBA",
            "cityname": "Sambava",
            "airportcode": "SVB",
            "airportname": "Sambava"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "TLEA",
            "cityname": "Tulear",
            "airportcode": "TLE",
            "airportname": "Tulear"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "TMMA",
            "cityname": "Tamatave",
            "airportcode": "TMM",
            "airportname": "Tamatave"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "TNRA",
            "cityname": "Antananarivo",
            "airportcode": "TNR",
            "airportname": "Antananarivo"
        },
        {
            "countrycode": "MG",
            "countryname": "Madagascar",
            "citycode": "WMNA",
            "cityname": "Maroantsetra",
            "airportcode": "WMN",
            "airportname": "Maroantsetra"
        },
        {
            "countrycode": "MH",
            "countryname": "Marshall Islands",
            "citycode": "AMRA",
            "cityname": "Arno",
            "airportcode": "AMR",
            "airportname": "Arno"
        },
        {
            "countrycode": "MH",
            "countryname": "Marshall Islands",
            "citycode": "EBOA",
            "cityname": "Ebon",
            "airportcode": "EBO",
            "airportname": "Ebon"
        },
        {
            "countrycode": "MH",
            "countryname": "Marshall Islands",
            "citycode": "KWAA",
            "cityname": "Kwajalein",
            "airportcode": "KWA",
            "airportname": "Kwajalein"
        },
        {
            "countrycode": "MH",
            "countryname": "Marshall Islands",
            "citycode": "MAJA",
            "cityname": "Majuro",
            "airportcode": "MAJ",
            "airportname": "Majuro"
        },
        {
            "countrycode": "MK",
            "countryname": "Republic of Macedonia",
            "citycode": "OHRI",
            "cityname": "Ohrid",
            "airportcode": "OHD",
            "airportname": "Ohrid"
        },
        {
            "countrycode": "MK",
            "countryname": "Republic of Macedonia",
            "citycode": "SKOP",
            "cityname": "Skopje",
            "airportcode": "SKP",
            "airportname": "Skopje"
        },
        {
            "countrycode": "ML",
            "countryname": "Mali",
            "citycode": "BKOA",
            "cityname": "Bamako",
            "airportcode": "BKO",
            "airportname": "Bamako"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "AKYM",
            "cityname": "Sittwe",
            "airportcode": "AKY",
            "airportname": "Sittwe"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "BMOM",
            "cityname": "Bhamo",
            "airportcode": "BMO",
            "airportname": "Bhamo"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "HEHM",
            "cityname": "Heho",
            "airportcode": "HEH",
            "airportname": "Heho"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "HOXM",
            "cityname": "Homalin",
            "airportcode": "HOX",
            "airportname": "Homalin"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "KAWM",
            "cityname": "Kawthaung",
            "airportcode": "KAW",
            "airportname": "Kawthaung"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "KETM",
            "cityname": "Keng Tung",
            "airportcode": "KET",
            "airportname": "Keng Tung"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "KHMM",
            "cityname": "Khamti",
            "airportcode": "KHM",
            "airportname": "Khamti"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "KMVM",
            "cityname": "Kalemyo",
            "airportcode": "KMV",
            "airportname": "Kalemyo"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "KYPM",
            "cityname": "Kyaukpyu",
            "airportcode": "KYP",
            "airportname": "Kyaukpyu"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "LSHM",
            "cityname": "Lashio",
            "airportcode": "LSH",
            "airportname": "Lashio"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "MDLM",
            "cityname": "Mandalay",
            "airportcode": "MDL",
            "airportname": "Mandalay"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "MGZM",
            "cityname": "Myeik",
            "airportcode": "MGZ",
            "airportname": "Myeik"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "MYTM",
            "cityname": "Myitkyina",
            "airportcode": "MYT",
            "airportname": "Myitkyina"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "NYTM",
            "cityname": "Naypyidaw",
            "airportcode": "NYT",
            "airportname": "Naypyidaw Airport"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "NYUM",
            "cityname": "Nyaung-u",
            "airportcode": "NYU",
            "airportname": "Nyaung-u"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "PBUM",
            "cityname": "Putao",
            "airportcode": "PBU",
            "airportname": "Putao"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "RGNM",
            "cityname": "Yangon",
            "airportcode": "RGN",
            "airportname": "Yangon"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "SNWM",
            "cityname": "Thandwe",
            "airportcode": "SNW",
            "airportname": "Thandwe"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "THLM",
            "cityname": "Tachilek",
            "airportcode": "THL",
            "airportname": "Tachilek"
        },
        {
            "countrycode": "MM",
            "countryname": "Myanmar",
            "citycode": "TVYM",
            "cityname": "Dawe",
            "airportcode": "TVY",
            "airportname": "Dawe"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "COQA",
            "cityname": "Choibalsan",
            "airportcode": "COQ",
            "airportname": "Choibalsan"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "DLZA",
            "cityname": "Dalanzadgad",
            "airportcode": "DLZ",
            "airportname": "Dalanzadgad"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "HTMA",
            "cityname": "Khatgal",
            "airportcode": "HTM",
            "airportname": "Khatgal"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "HVDA",
            "cityname": "Khovd",
            "airportcode": "HVD",
            "airportname": "Khovd"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "MXVA",
            "cityname": "Moron",
            "airportcode": "MXV",
            "airportname": "Moron"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "ULGA",
            "cityname": "Ulgit",
            "airportcode": "ULG",
            "airportname": "Ulgit"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "ULNA",
            "cityname": "Ulaanbaatar",
            "airportcode": "ULN",
            "airportname": "Ulaanbaatar"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "ULOA",
            "cityname": "Ulaangom",
            "airportcode": "ULO",
            "airportname": "Ulaangom"
        },
        {
            "countrycode": "MN",
            "countryname": "Mongolia",
            "citycode": "ULZA",
            "cityname": "Uliastai",
            "airportcode": "ULZ",
            "airportname": "Uliastai"
        },
        {
            "countrycode": "MO",
            "countryname": "Macau",
            "citycode": "MFMA",
            "cityname": "Macau",
            "airportcode": "MFM",
            "airportname": "Macau"
        },
        {
            "countrycode": "MP",
            "countryname": "Northern Mariana Islands",
            "citycode": "ROPA",
            "cityname": "Rota",
            "airportcode": "ROP",
            "airportname": "Rota"
        },
        {
            "countrycode": "MP",
            "countryname": "Northern Mariana Islands",
            "citycode": "SPNA",
            "cityname": "Saipan",
            "airportcode": "SPN",
            "airportname": "Saipan"
        },
        {
            "countrycode": "MQ",
            "countryname": "Martinique",
            "citycode": "FDFA",
            "cityname": "Fort De France",
            "airportcode": "FDF",
            "airportname": "Fort De France"
        },
        {
            "countrycode": "MR",
            "countryname": "Mauritania",
            "citycode": "NDBA",
            "cityname": "Nouadhibou",
            "airportcode": "NDB",
            "airportname": "Nouadhibou"
        },
        {
            "countrycode": "MR",
            "countryname": "Mauritania",
            "citycode": "NKCA",
            "cityname": "Nouakchott",
            "airportcode": "NKC",
            "airportname": "Nouakchott"
        },
        {
            "countrycode": "MR",
            "countryname": "Mauritania",
            "citycode": "OUZA",
            "cityname": "Zouerate",
            "airportcode": "OUZ",
            "airportname": "Zouerate"
        },
        {
            "countrycode": "MS",
            "countryname": "Montserrat",
            "citycode": "MNIA",
            "cityname": "Montserrat",
            "airportcode": "MNI",
            "airportname": "Montserrat"
        },
        {
            "countrycode": "MT",
            "countryname": "Malta",
            "citycode": "LUQA",
            "cityname": "Luqa",
            "airportcode": "MLA",
            "airportname": "Luqa Malta International"
        },
        {
            "countrycode": "MU",
            "countryname": "Mauritius",
            "citycode": "MRUA",
            "cityname": "Mauritius",
            "airportcode": "MRU",
            "airportname": "Mauritius"
        },
        {
            "countrycode": "MU",
            "countryname": "Mauritius",
            "citycode": "RRGA",
            "cityname": "Rodrigues Is",
            "airportcode": "RRG",
            "airportname": "Rodrigues Is"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "DRVA",
            "cityname": "Dharavandhoo Island",
            "airportcode": "DRV",
            "airportname": "Dharavandhoo Island"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "FVMA",
            "cityname": "Fuvahmulak Island",
            "airportcode": "FVM",
            "airportname": "Fuvahmulak Island"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "GANA",
            "cityname": "Gan Island",
            "airportcode": "GAN",
            "airportname": "Gan Island"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "HAQA",
            "cityname": "Hanimaadhoo",
            "airportcode": "HAQ",
            "airportname": "Hanimaadhoo"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "IFUA",
            "cityname": "Ifuru",
            "airportcode": "IFU",
            "airportname": "Ifuru"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "KDMA",
            "cityname": "Kaadedhdhoo",
            "airportcode": "KDM",
            "airportname": "Kaadedhdhoo"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "KDOA",
            "cityname": "Kadhdhoo",
            "airportcode": "KDO",
            "airportname": "Kadhdhoo"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "MLEA",
            "cityname": "Male",
            "airportcode": "MLE",
            "airportname": "Male"
        },
        {
            "countrycode": "MV",
            "countryname": "Maldives",
            "citycode": "TMFA",
            "cityname": "Thimarafushi",
            "airportcode": "TMF",
            "airportname": "Thimarafushi"
        },
        {
            "countrycode": "MW",
            "countryname": "Malawi",
            "citycode": "BLZA",
            "cityname": "Blantyre",
            "airportcode": "BLZ",
            "airportname": "Blantyre"
        },
        {
            "countrycode": "MW",
            "countryname": "Malawi",
            "citycode": "CEHA",
            "cityname": "Chelinda",
            "airportcode": "CEH",
            "airportname": "Chelinda"
        },
        {
            "countrycode": "MW",
            "countryname": "Malawi",
            "citycode": "CMKA",
            "cityname": "Club Makokola",
            "airportcode": "CMK",
            "airportname": "Club Makokola"
        },
        {
            "countrycode": "MW",
            "countryname": "Malawi",
            "citycode": "LIXA",
            "cityname": "Likoma Island",
            "airportcode": "LIX",
            "airportname": "Likoma Island"
        },
        {
            "countrycode": "MW",
            "countryname": "Malawi",
            "citycode": "LLWA",
            "cityname": "Lilongwe",
            "airportcode": "LLW",
            "airportname": "Lilongwe"
        },
        {
            "countrycode": "MW",
            "countryname": "Malawi",
            "citycode": "MYZA",
            "cityname": "Monkey Bay",
            "airportcode": "MYZ",
            "airportname": "Monkey Bay"
        },
        {
            "countrycode": "MW",
            "countryname": "Malawi",
            "citycode": "VUUA",
            "cityname": "Mvuu Camp",
            "airportcode": "VUU",
            "airportname": "Mvuu Camp"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "ACAA",
            "cityname": "Acapulco",
            "airportcode": "ACA",
            "airportname": "Acapulco"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "AGUA",
            "cityname": "Aguascalientes",
            "airportcode": "AGU",
            "airportname": "Aguascalientes"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "BJXS",
            "cityname": "Silao",
            "airportcode": "BJX",
            "airportname": "Silao"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CENA",
            "cityname": "Ciudad Obregon",
            "airportcode": "CEN",
            "airportname": "Ciudad Obregon"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CJSA",
            "cityname": "Ciudad Juarez",
            "airportcode": "CJS",
            "airportname": "Ciudad Juarez"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CLQA",
            "cityname": "Colima",
            "airportcode": "CLQ",
            "airportname": "Colima"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CMEA",
            "cityname": "Ciudad Del Carmen",
            "airportcode": "CME",
            "airportname": "Ciudad Del Carmen"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CPEA",
            "cityname": "Campeche",
            "airportcode": "CPE",
            "airportname": "Campeche"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CTMA",
            "cityname": "Chetumal",
            "airportcode": "CTM",
            "airportname": "Chetumal"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CULA",
            "cityname": "Culiacan",
            "airportcode": "CUL",
            "airportname": "Culiacan"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CUNA",
            "cityname": "Cancun",
            "airportcode": "CUN",
            "airportname": "Cancun"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CUUA",
            "cityname": "Chihuahua",
            "airportcode": "CUU",
            "airportname": "Chihuahua"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CVJA",
            "cityname": "Cuernavaca",
            "airportcode": "CVJ",
            "airportname": "Cuernavaca"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CVMA",
            "cityname": "Ciudad Victoria",
            "airportcode": "CVM",
            "airportname": "Ciudad Victoria"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "CZMA",
            "cityname": "Cozumel",
            "airportcode": "CZM",
            "airportname": "Cozumel"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "DGOA",
            "cityname": "Durango",
            "airportcode": "DGO",
            "airportname": "Durango"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "GDLA",
            "cityname": "Guadalajara",
            "airportcode": "GDL",
            "airportname": "Guadalajara"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "GYMA",
            "cityname": "Guaymas",
            "airportcode": "GYM",
            "airportname": "Guaymas"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "HMOA",
            "cityname": "Hermosillo",
            "airportcode": "HMO",
            "airportname": "Hermosillo"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "HUXA",
            "cityname": "Huatulco",
            "airportcode": "HUX",
            "airportname": "Huatulco"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "JALA",
            "cityname": "Jalapa",
            "airportcode": "JAL",
            "airportname": "Jalapa"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "LAPB",
            "cityname": "La Paz",
            "airportcode": "LAP",
            "airportname": "La Paz"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "LMMA",
            "cityname": "Los Mochis",
            "airportcode": "LMM",
            "airportname": "Los Mochis"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "LTOA",
            "cityname": "Loreto",
            "airportcode": "LTO",
            "airportname": "Loreto"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "LZCA",
            "cityname": "Lazaro Cardenas",
            "airportcode": "LZC",
            "airportname": "Lazaro Cardenas"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "MAMA",
            "cityname": "Matamoros",
            "airportcode": "MAM",
            "airportname": "Matamoros"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "MEXA",
            "cityname": "Mexico City",
            "airportcode": "MEX",
            "airportname": "Mexico City Juarez International"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "MIDA",
            "cityname": "Merida",
            "airportcode": "MID",
            "airportname": "Merida"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "MLMA",
            "cityname": "Morelia",
            "airportcode": "MLM",
            "airportname": "Morelia"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "MTTA",
            "cityname": "Minatitlan",
            "airportcode": "MTT",
            "airportname": "Minatitlan"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "MTYA",
            "cityname": "Monterrey",
            "airportcode": "MTY",
            "airportname": "Monterrey Gen Mariano Escobedo"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "MXLA",
            "cityname": "Mexicali",
            "airportcode": "MXL",
            "airportname": "Mexicali"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "MZTA",
            "cityname": "Mazatlan",
            "airportcode": "MZT",
            "airportname": "Mazatlan"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "NLDA",
            "cityname": "Nuevo Laredo",
            "airportcode": "NLD",
            "airportname": "Nuevo Laredo"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "OAXA",
            "cityname": "Oaxaca",
            "airportcode": "OAX",
            "airportname": "Oaxaca"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "PAZA",
            "cityname": "Poza Rica",
            "airportcode": "PAZ",
            "airportname": "Poza Rica"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "PBCA",
            "cityname": "Puebla",
            "airportcode": "PBC",
            "airportname": "Puebla"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "PDSA",
            "cityname": "Piedras Negras",
            "airportcode": "PDS",
            "airportname": "Piedras Negras"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "PPEA",
            "cityname": "Puerto Penasco",
            "airportcode": "PPE",
            "airportname": "Puerto Penasco"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "PQMA",
            "cityname": "Palenque",
            "airportcode": "PQM",
            "airportname": "Palenque"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "PVRA",
            "cityname": "Puerto Vallarta",
            "airportcode": "PVR",
            "airportname": "Puerto Vallarta"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "PXMB",
            "cityname": "Puerto Escondido",
            "airportcode": "PXM",
            "airportname": "Puerto Escondido"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "QUEA",
            "cityname": "Queretaro",
            "airportcode": "QRO",
            "airportname": "Queretaro"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "REXA",
            "cityname": "Reynosa",
            "airportcode": "REX",
            "airportname": "Reynosa"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "SFHA",
            "cityname": "San Felipe",
            "airportcode": "SFH",
            "airportname": "San Felipe"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "SJDA",
            "cityname": "San Jose Cabo",
            "airportcode": "SJD",
            "airportname": "San Jose Cabo"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "SLPA",
            "cityname": "San Luis Potosi",
            "airportcode": "SLP",
            "airportname": "San Luis Potosi"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "SLWA",
            "cityname": "Saltillo",
            "airportcode": "SLW",
            "airportname": "Saltillo"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "TAMA",
            "cityname": "Tampico",
            "airportcode": "TAM",
            "airportname": "Tampico"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "TAPA",
            "cityname": "Tapachula",
            "airportcode": "TAP",
            "airportname": "Tapachula"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "TGZA",
            "cityname": "Tuxtla Gutierrez",
            "airportcode": "TGZ",
            "airportname": "Tuxtla Gutierrez"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "TIJA",
            "cityname": "Tijuana",
            "airportcode": "TIJ",
            "airportname": "Tijuana"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "TLCA",
            "cityname": "Toluca",
            "airportcode": "TLC",
            "airportname": "Toluca"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "TPQA",
            "cityname": "Tepic",
            "airportcode": "TPQ",
            "airportname": "Tepic"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "TRCA",
            "cityname": "Torreon",
            "airportcode": "TRC",
            "airportname": "Torreon"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "UPNA",
            "cityname": "Uruapan",
            "airportcode": "UPN",
            "airportname": "Uruapan"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "VERA",
            "cityname": "Veracruz",
            "airportcode": "VER",
            "airportname": "Veracruz"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "VSAA",
            "cityname": "Villahermosa",
            "airportcode": "VSA",
            "airportname": "Villahermosa"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "ZCLA",
            "cityname": "Zacatecas",
            "airportcode": "ZCL",
            "airportname": "Zacatecas"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "ZIHA",
            "cityname": "Ixtapa / Zihuatanejo",
            "airportcode": "ZIH",
            "airportname": "Ixtapa / Zihuatanejo"
        },
        {
            "countrycode": "MX",
            "countryname": "Mexico",
            "citycode": "ZLOA",
            "cityname": "Manzanillo",
            "airportcode": "ZLO",
            "airportname": "Manzanillo"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "AORM",
            "cityname": "Alor Setar",
            "airportcode": "AOR",
            "airportname": "Alor Setar"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "BBNM",
            "cityname": "Bario",
            "airportcode": "BBN",
            "airportname": "Bario"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "BKIM",
            "cityname": "Kota Kinabalu",
            "airportcode": "BKI",
            "airportname": "Kota Kinabalu"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "BKMM",
            "cityname": "Bakalalan",
            "airportcode": "BKM",
            "airportname": "Bakalalan"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "BTUM",
            "cityname": "Bintulu",
            "airportcode": "BTU",
            "airportname": "Bintulu"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "GSAM",
            "cityname": "Long Pasia",
            "airportcode": "GSA",
            "airportname": "Long Pasia"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "IPHM",
            "cityname": "Ipoh",
            "airportcode": "IPH",
            "airportname": "Ipoh"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "JHBM",
            "cityname": "Johor Bahru",
            "airportcode": "JHB",
            "airportname": "Johor Bahru"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "KBRM",
            "cityname": "Kota Bharu",
            "airportcode": "KBR",
            "airportname": "Kota Bharu"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "KCHM",
            "cityname": "Kuching",
            "airportcode": "KCH",
            "airportname": "Kuching"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "KTEM",
            "cityname": "Kerteh",
            "airportcode": "KTE",
            "airportname": "Kerteh"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "KUAM",
            "cityname": "Kuantan",
            "airportcode": "KUA",
            "airportname": "Kuantan"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "KUDM",
            "cityname": "Kudat",
            "airportcode": "KUD",
            "airportname": "Kudat"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "KULM",
            "cityname": "Kuala Lumpur",
            "airportcode": "KUL",
            "airportname": "Kuala Lumpur International"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "KULM",
            "cityname": "Kuala Lumpur",
            "airportcode": "SZB",
            "airportname": "Kuala Lumpur Sultan Abdul Azziz Shah"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "LBPM",
            "cityname": "Long Banga",
            "airportcode": "LBP",
            "airportname": "Long Banga"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "LBUM",
            "cityname": "Labuan",
            "airportcode": "LBU",
            "airportname": "Labuan"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "LDUM",
            "cityname": "Lahad Datu",
            "airportcode": "LDU",
            "airportname": "Lahad Datu"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "LGKM",
            "cityname": "Langkawi",
            "airportcode": "LGK",
            "airportname": "Langkawi"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "LGLM",
            "cityname": "Long Lellang",
            "airportcode": "LGL",
            "airportname": "Long Lellang"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "LKHM",
            "cityname": "Long Akah",
            "airportcode": "LKH",
            "airportname": "Long Akah"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "LMNM",
            "cityname": "Limbang",
            "airportcode": "LMN",
            "airportname": "Limbang"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "LWYM",
            "cityname": "Lawas",
            "airportcode": "LWY",
            "airportname": "Lawas"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "MKMM",
            "cityname": "Mukah",
            "airportcode": "MKM",
            "airportname": "Mukah"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "MKZM",
            "cityname": "Malacca",
            "airportcode": "MKZ",
            "airportname": "Malacca"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "MUMM",
            "cityname": "Marudi",
            "airportcode": "MUR",
            "airportname": "Marudi"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "MYYM",
            "cityname": "Miri",
            "airportcode": "MYY",
            "airportname": "Miri"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "MZVM",
            "cityname": "Mulu",
            "airportcode": "MZV",
            "airportname": "Mulu"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "ODNM",
            "cityname": "Long Seridan",
            "airportcode": "ODN",
            "airportname": "Long Seridan"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "PENM",
            "cityname": "Penang",
            "airportcode": "PEN",
            "airportname": "Penang"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "RDNM",
            "cityname": "Redang",
            "airportcode": "RDN",
            "airportname": "Redang"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "SBWM",
            "cityname": "Sibu",
            "airportcode": "SBW",
            "airportname": "Sibu"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "SDKM",
            "cityname": "Sandakan",
            "airportcode": "SDK",
            "airportname": "Sandakan"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "TGCA",
            "cityname": "Tanjung Manis",
            "airportcode": "TGC",
            "airportname": "Tanjung Manis"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "TGGM",
            "cityname": "Kuala Terengganu",
            "airportcode": "TGG",
            "airportname": "Kuala Terengganu"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "TODM",
            "cityname": "Tioman",
            "airportcode": "TOD",
            "airportname": "Tioman"
        },
        {
            "countrycode": "MY",
            "countryname": "Malaysia",
            "citycode": "TWUM",
            "cityname": "Tawau",
            "airportcode": "TWU",
            "airportname": "Tawau"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "APLA",
            "cityname": "Nampula",
            "airportcode": "APL",
            "airportname": "Nampula"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "BEWA",
            "cityname": "Beira",
            "airportcode": "BEW",
            "airportname": "Beira"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "INHA",
            "cityname": "Inhambane",
            "airportcode": "INH",
            "airportname": "Inhambane"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "MNCA",
            "cityname": "Nacala",
            "airportcode": "MNC",
            "airportname": "Nacala"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "MPMA",
            "cityname": "Maputo",
            "airportcode": "MPM",
            "airportname": "Maputo"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "POLA",
            "cityname": "Pemba",
            "airportcode": "POL",
            "airportname": "Pemba"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "TETA",
            "cityname": "Tete",
            "airportcode": "TET",
            "airportname": "Tete Matunda"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "UELA",
            "cityname": "Quelimane",
            "airportcode": "UEL",
            "airportname": "Quelimane"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "VNXA",
            "cityname": "Vilanculos",
            "airportcode": "VNX",
            "airportname": "Vilanculos"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "VPYA",
            "cityname": "Chimoio",
            "airportcode": "VPY",
            "airportname": "Chimoio"
        },
        {
            "countrycode": "MZ",
            "countryname": "Mozambique",
            "citycode": "VXCA",
            "cityname": "Lichinga",
            "airportcode": "VXC",
            "airportname": "Lichinga"
        },
        {
            "countrycode": "NA",
            "countryname": "Namibia",
            "citycode": "LUDA",
            "cityname": "Luderitz",
            "airportcode": "LUD",
            "airportname": "Luderitz"
        },
        {
            "countrycode": "NA",
            "countryname": "Namibia",
            "citycode": "MPAA",
            "cityname": "Mpacha",
            "airportcode": "MPA",
            "airportname": "Mpacha"
        },
        {
            "countrycode": "NA",
            "countryname": "Namibia",
            "citycode": "NDUA",
            "cityname": "Rundu",
            "airportcode": "NDU",
            "airportname": "Rundu"
        },
        {
            "countrycode": "NA",
            "countryname": "Namibia",
            "citycode": "OMDA",
            "cityname": "Oranjemund",
            "airportcode": "OMD",
            "airportname": "Oranjemund"
        },
        {
            "countrycode": "NA",
            "countryname": "Namibia",
            "citycode": "ONDA",
            "cityname": "Ondangwa",
            "airportcode": "OND",
            "airportname": "Ondangwa"
        },
        {
            "countrycode": "NA",
            "countryname": "Namibia",
            "citycode": "WDHA",
            "cityname": "Windhoek",
            "airportcode": "ERS",
            "airportname": "Windhoek Eros"
        },
        {
            "countrycode": "NA",
            "countryname": "Namibia",
            "citycode": "WDHA",
            "cityname": "Windhoek",
            "airportcode": "WDH",
            "airportname": "Windhoek Hosea Kutako"
        },
        {
            "countrycode": "NA",
            "countryname": "Namibia",
            "citycode": "WVBA",
            "cityname": "Walvis Bay",
            "airportcode": "WVB",
            "airportname": "Walvis Bay"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "BMYN",
            "cityname": "Belep Island",
            "airportcode": "BMY",
            "airportname": "Belep Island"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "ILPN",
            "cityname": "Ile Des Pins",
            "airportcode": "ILP",
            "airportname": "Ile Des Pins"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "KNQN",
            "cityname": "Kone",
            "airportcode": "KNQ",
            "airportname": "Kone"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "KOCN",
            "cityname": "Koumac",
            "airportcode": "KOC",
            "airportname": "Koumac"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "LIFN",
            "cityname": "Lifou",
            "airportcode": "LIF",
            "airportname": "Lifou"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "MEEN",
            "cityname": "Mare",
            "airportcode": "MEE",
            "airportname": "Mare"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "NOUN",
            "cityname": "Noumea",
            "airportcode": "GEA",
            "airportname": "Noumea Magenta"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "NOUN",
            "cityname": "Noumea",
            "airportcode": "NOU",
            "airportname": "Noumea Tontouta"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "TGJN",
            "cityname": "Tiga",
            "airportcode": "TGJ",
            "airportname": "Tiga"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "TOUN",
            "cityname": "Touho",
            "airportcode": "TOU",
            "airportname": "Touho"
        },
        {
            "countrycode": "NC",
            "countryname": "New Caledonia",
            "citycode": "UVEN",
            "cityname": "Ouvea",
            "airportcode": "UVE",
            "airportname": "Ouvea"
        },
        {
            "countrycode": "NE",
            "countryname": "Niger",
            "citycode": "NIMA",
            "cityname": "Niamey",
            "airportcode": "NIM",
            "airportname": "Niamey"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "ABVA",
            "cityname": "Abuja",
            "airportcode": "ABV",
            "airportname": "Abuja"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "AKRA",
            "cityname": "Akure",
            "airportcode": "AKR",
            "airportname": "Akure"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "ASAB",
            "cityname": "Asaba",
            "airportcode": "ABB",
            "airportname": "Asaba International Airport"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "BCUA",
            "cityname": "Bauchi",
            "airportcode": "BCU",
            "airportname": "Bauchi"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "BNIA",
            "cityname": "Benin City",
            "airportcode": "BNI",
            "airportname": "Benin City"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "CBQA",
            "cityname": "Calabar",
            "airportcode": "CBQ",
            "airportname": "Calabar"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "ENUA",
            "cityname": "Enugu",
            "airportcode": "ENU",
            "airportname": "Enugu"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "GOMB",
            "cityname": "Gombe",
            "airportcode": "GMO",
            "airportname": "Gombe Lawanti"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "IBAA",
            "cityname": "Ibadan",
            "airportcode": "IBA",
            "airportname": "Ibadan"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "ILRA",
            "cityname": "Ilorin",
            "airportcode": "ILR",
            "airportname": "Ilorin"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "JOSA",
            "cityname": "Jos",
            "airportcode": "JOS",
            "airportname": "Jos"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "KADA",
            "cityname": "Kaduna",
            "airportcode": "KAD",
            "airportname": "Kaduna"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "KANA",
            "cityname": "Kano",
            "airportcode": "KAN",
            "airportname": "Aminu Kano Intl"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "KATS",
            "cityname": "Katsina",
            "airportcode": "DKA",
            "airportname": "Katsina Airport "
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "LOSA",
            "cityname": "Lagos",
            "airportcode": "LOS",
            "airportname": "Lagos"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "MIUA",
            "cityname": "Maiduguri",
            "airportcode": "MIU",
            "airportname": "Maiduguri"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "MXJA",
            "cityname": "Minna",
            "airportcode": "MXJ",
            "airportname": "Minna"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "OWEB",
            "cityname": "Owerri",
            "airportcode": "QOW",
            "airportname": "Owerri"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "PHCA",
            "cityname": "Port Harcourt",
            "airportcode": "PHC",
            "airportname": "Port Harcourt"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "PHCA",
            "cityname": "Port Harcourt",
            "airportcode": "PHG",
            "airportname": "Port Harcourt City"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "QRWA",
            "cityname": "Warri",
            "airportcode": "QRW",
            "airportname": "Warri"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "SKOA",
            "cityname": "Sokoto",
            "airportcode": "SKO",
            "airportname": "Sokoto"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "UYOA",
            "cityname": "Uyo",
            "airportcode": "QUO",
            "airportname": "Uyo"
        },
        {
            "countrycode": "NG",
            "countryname": "Nigeria",
            "citycode": "YOLA",
            "cityname": "Yola",
            "airportcode": "YOL",
            "airportname": "Yola"
        },
        {
            "countrycode": "NI",
            "countryname": "Nicaragua",
            "citycode": "ECIA",
            "cityname": "Rivas",
            "airportcode": "ECI",
            "airportname": "Costa Esmeralda"
        },
        {
            "countrycode": "NI",
            "countryname": "Nicaragua",
            "citycode": "MGAA",
            "cityname": "Managua",
            "airportcode": "MGA",
            "airportname": "Managua"
        },
        {
            "countrycode": "NL",
            "countryname": "Netherlands",
            "citycode": "AMST",
            "cityname": "Amsterdam",
            "airportcode": "AMS",
            "airportname": "Amsterdam"
        },
        {
            "countrycode": "NL",
            "countryname": "Netherlands",
            "citycode": "EIND",
            "cityname": "Eindhoven",
            "airportcode": "EIN",
            "airportname": "Eindhoven"
        },
        {
            "countrycode": "NL",
            "countryname": "Netherlands",
            "citycode": "GRON",
            "cityname": "Groningen",
            "airportcode": "GRQ",
            "airportname": "Groningen"
        },
        {
            "countrycode": "NL",
            "countryname": "Netherlands",
            "citycode": "MAAS",
            "cityname": "Maastricht",
            "airportcode": "MST",
            "airportname": "Maastricht"
        },
        {
            "countrycode": "NL",
            "countryname": "Netherlands",
            "citycode": "ROTT",
            "cityname": "Rotterdam",
            "airportcode": "RTM",
            "airportname": "Rotterdam"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "AALE",
            "cityname": "Aalesund Vigra",
            "airportcode": "AES",
            "airportname": "Aalesund Vigra"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "ALTA",
            "cityname": "Alta",
            "airportcode": "ALF",
            "airportname": "Alta"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "ANDE",
            "cityname": "Andenes",
            "airportcode": "ANX",
            "airportname": "Andenes"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "BARD",
            "cityname": "Bardufoss",
            "airportcode": "BDU",
            "airportname": "Bardufoss"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "BATS",
            "cityname": "Batsfjord",
            "airportcode": "BJF",
            "airportname": "Batsfjord"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "BERI",
            "cityname": "Bergen",
            "airportcode": "BGO",
            "airportname": "Bergen"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "BERM",
            "cityname": "Berlevag",
            "airportcode": "BVG",
            "airportname": "Berlevag"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "BODO",
            "cityname": "Bodo",
            "airportcode": "BOO",
            "airportname": "Bodo"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "BRON",
            "cityname": "Bronnoysund Bronnoy",
            "airportcode": "BNN",
            "airportname": "Bronnoysund Bronnoy"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "EVEN",
            "cityname": "Evenes",
            "airportcode": "EVE",
            "airportname": "Evenes"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "FAGE",
            "cityname": "Fagernes Valdres",
            "airportcode": "VDB",
            "airportname": "Fagernes Valdres"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "FLOT",
            "cityname": "Floro",
            "airportcode": "FRO",
            "airportname": "Floro"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "FORD",
            "cityname": "Forde",
            "airportcode": "FDE",
            "airportname": "Forde Bringeland"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "HAMM",
            "cityname": "Hammerfest",
            "airportcode": "HFT",
            "airportname": "Hammerfest"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "HASV",
            "cityname": "Hasvik",
            "airportcode": "HAA",
            "airportname": "Hasvik"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "HAUG",
            "cityname": "Haugesund",
            "airportcode": "HAU",
            "airportname": "Haugesund"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "HONN",
            "cityname": "Honningsvag Valan",
            "airportcode": "HVG",
            "airportname": "Honningsvag Valan"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "KIRK",
            "cityname": "Kirkenes Høybuktmoen",
            "airportcode": "KKN",
            "airportname": "Kirkenes Høybuktmoen"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "KRIT",
            "cityname": "Kristiansund",
            "airportcode": "KSU",
            "airportname": "Kristiansund"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "KRSA",
            "cityname": "Kristiansand",
            "airportcode": "KRS",
            "airportname": "Kristiansand Kjevik"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "LAKE",
            "cityname": "Lakselv",
            "airportcode": "LKL",
            "airportname": "Lakselv"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "LEKN",
            "cityname": "Leknes",
            "airportcode": "LKN",
            "airportname": "Leknes"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "LYRL",
            "cityname": "Longyearbyen",
            "airportcode": "LYR",
            "airportname": "Longyearbyen"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "MEHA",
            "cityname": "Mehamn",
            "airportcode": "MEH",
            "airportname": "Mehamn"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "MOIR",
            "cityname": "Mo I Rana Rossvoll",
            "airportcode": "MQN",
            "airportname": "Mo I Rana Rossvoll"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "MOLD",
            "cityname": "Molde Aro",
            "airportcode": "MOL",
            "airportname": "Molde Aro"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "MOSJ",
            "cityname": "Mosjoen Kjaerstad",
            "airportcode": "MJF",
            "airportname": "Mosjoen Kjaerstad"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "NAMS",
            "cityname": "Namsos",
            "airportcode": "OSY",
            "airportname": "Namsos"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "NARV",
            "cityname": "Narvik Framnes",
            "airportcode": "NVK",
            "airportname": "Narvik Framnes"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "NOTO",
            "cityname": "Notodden",
            "airportcode": "NTB",
            "airportname": "Notodden"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "ORLA",
            "cityname": "Orland",
            "airportcode": "OLA",
            "airportname": "Orland"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "ORST",
            "cityname": "Orsta / Volda Hovden",
            "airportcode": "HOV",
            "airportname": "Orsta / Volda Hovden"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "OSLO",
            "cityname": "Oslo",
            "airportcode": "OSL",
            "airportname": "Oslo Gardermoen"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "OSLO",
            "cityname": "Oslo",
            "airportcode": "RYG",
            "airportname": "Oslo Rygge"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "OSLO",
            "cityname": "Oslo",
            "airportcode": "TRF",
            "airportname": "Oslo Torp"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "ROER",
            "cityname": "Roervik Ryumsjoen",
            "airportcode": "RVK",
            "airportname": "Roervik Ryumsjoen"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "RORO",
            "cityname": "Roros",
            "airportcode": "RRS",
            "airportname": "Roros"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "ROSU",
            "cityname": "Rost",
            "airportcode": "RET",
            "airportname": "Rost"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "SAND",
            "cityname": "Sandane",
            "airportcode": "SDN",
            "airportname": "Sandane"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "SANE",
            "cityname": "Sandnessjoen",
            "airportcode": "SSJ",
            "airportname": "Sandnessjoen"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "SOGN",
            "cityname": "Sogndal Haukasen",
            "airportcode": "SOG",
            "airportname": "Sogndal Haukasen"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "SORK",
            "cityname": "Sorkjosen",
            "airportcode": "SOJ",
            "airportname": "Sorkjosen"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "STAV",
            "cityname": "Stavanger",
            "airportcode": "SVG",
            "airportname": "Stavanger"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "STOK",
            "cityname": "Stokmarknes",
            "airportcode": "SKN",
            "airportname": "Stokmarknes"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "STOS",
            "cityname": "Stord",
            "airportcode": "SRP",
            "airportname": "Stord"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "SVOL",
            "cityname": "Svolvaer",
            "airportcode": "SVJ",
            "airportname": "Svolvaer"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "TROM",
            "cityname": "Tromso",
            "airportcode": "TOS",
            "airportname": "Tromso"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "TRON",
            "cityname": "Trondheim",
            "airportcode": "TRD",
            "airportname": "Trondheim"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "VADS",
            "cityname": "Vadso",
            "airportcode": "VDS",
            "airportname": "Vadso"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "VAER",
            "cityname": "Vaeroy Stolport",
            "airportcode": "VRY",
            "airportname": "Vaeroy Stolport"
        },
        {
            "countrycode": "NO",
            "countryname": "Norway",
            "citycode": "VARD",
            "cityname": "Vardoe Lufthaun",
            "airportcode": "VAW",
            "airportname": "Vardoe Lufthaun"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "BDPA",
            "cityname": "Bhadrapur",
            "airportcode": "BDP",
            "airportname": "Bhadrapur"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "BHRA",
            "cityname": "Bharatpur",
            "airportcode": "BHR",
            "airportname": "Bharatpur"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "BIRA",
            "cityname": "Biratnagar",
            "airportcode": "BIR",
            "airportname": "Biratnagar"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "BWAA",
            "cityname": "Bhairawa",
            "airportcode": "BWA",
            "airportname": "Bhairawa"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "DHIA",
            "cityname": "Dhangarhi",
            "airportcode": "DHI",
            "airportname": "Dhangarhi"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "DOPA",
            "cityname": "Dolpa",
            "airportcode": "DOP",
            "airportname": "Dolpa"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "IMKA",
            "cityname": "Simikot",
            "airportcode": "IMK",
            "airportname": "Simikot"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "JKRA",
            "cityname": "Janakpur",
            "airportcode": "JKR",
            "airportname": "Janakpur"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "JMOA",
            "cityname": "Jomsom",
            "airportcode": "JMO",
            "airportname": "Jomsom"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "JUMA",
            "cityname": "Jumla",
            "airportcode": "JUM",
            "airportname": "Jumla"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "KEPA",
            "cityname": "Nepalganj",
            "airportcode": "KEP",
            "airportname": "Nepalganj"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "KTMA",
            "cityname": "Kathmandu",
            "airportcode": "KTM",
            "airportname": "Kathmandu"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "LUAA",
            "cityname": "Lukla",
            "airportcode": "LUA",
            "airportname": "Lukla"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "NGXA",
            "cityname": "Manang",
            "airportcode": "NGX",
            "airportname": "Manang"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "PKRA",
            "cityname": "Pokhara",
            "airportcode": "PKR",
            "airportname": "Pokhara"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "PPLA",
            "cityname": "Phaplu",
            "airportcode": "PPL",
            "airportname": "Phaplu"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "SIFA",
            "cityname": "Simara",
            "airportcode": "SIF",
            "airportname": "Simara"
        },
        {
            "countrycode": "NP",
            "countryname": "Nepal",
            "citycode": "TMIA",
            "cityname": "Tumling Tar",
            "airportcode": "TMI",
            "airportname": "Tumling Tar"
        },
        {
            "countrycode": "NR",
            "countryname": "Nauru",
            "citycode": "INUA",
            "cityname": "Nauru Island",
            "airportcode": "INU",
            "airportname": "Nauru Island"
        },
        {
            "countrycode": "NU",
            "countryname": "Niue",
            "citycode": "IUEA",
            "cityname": "Niue Island",
            "airportcode": "IUE",
            "airportname": "Niue Island"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "AKLN",
            "cityname": "Auckland",
            "airportcode": "AKL",
            "airportname": "Auckland International"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "BHEN",
            "cityname": "Blenheim",
            "airportcode": "BHE",
            "airportname": "Blenheim"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "CHCN",
            "cityname": "Christchurch",
            "airportcode": "CHC",
            "airportname": "Christchurch"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "CHTN",
            "cityname": "Chatham Island",
            "airportcode": "CHT",
            "airportname": "Chatham Island"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "DUDN",
            "cityname": "Dunedin",
            "airportcode": "DUD",
            "airportname": "Dunedin"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "GBZN",
            "cityname": "Great Barrier Island",
            "airportcode": "GBZ",
            "airportname": "Great Barrier Island"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "GISN",
            "cityname": "Gisborne",
            "airportcode": "GIS",
            "airportname": "Gisborne"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "HKKN",
            "cityname": "Hokitika",
            "airportcode": "HKK",
            "airportname": "Hokitika"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "HLZN",
            "cityname": "Hamilton",
            "airportcode": "HLZ",
            "airportname": "Hamilton"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "IVCN",
            "cityname": "Invercargill",
            "airportcode": "IVC",
            "airportname": "Invercargill"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "KATN",
            "cityname": "Kaitaia",
            "airportcode": "KAT",
            "airportname": "Kaitaia"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "KKEN",
            "cityname": "Kerikeri",
            "airportcode": "KKE",
            "airportname": "Kerikeri"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "KTFN",
            "cityname": "Takaka",
            "airportcode": "KTF",
            "airportname": "Takaka"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "NPEN",
            "cityname": "Napier-Hastings",
            "airportcode": "NPE",
            "airportname": "Napier-Hastings"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "NPLN",
            "cityname": "New Plymouth",
            "airportcode": "NPL",
            "airportname": "New Plymouth"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "NSNN",
            "cityname": "Nelson",
            "airportcode": "NSN",
            "airportname": "Nelson"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "NZKR",
            "cityname": "Karamea",
            "airportcode": "NZK",
            "airportname": "Karamea"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "PCNN",
            "cityname": "Picton",
            "airportcode": "PCN",
            "airportname": "Picton"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "PMRN",
            "cityname": "Palmerston North",
            "airportcode": "PMR",
            "airportname": "Palmerston North"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "PPQN",
            "cityname": "Paraparaumu",
            "airportcode": "PPQ",
            "airportname": "Paraparaumu"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "ROTN",
            "cityname": "Rotorua",
            "airportcode": "ROT",
            "airportname": "Rotorua"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "TIUN",
            "cityname": "Timaru",
            "airportcode": "TIU",
            "airportname": "Timaru"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "TRGN",
            "cityname": "Tauranga",
            "airportcode": "TRG",
            "airportname": "Tauranga"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "TUON",
            "cityname": "Taupo",
            "airportcode": "TUO",
            "airportname": "Taupo"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "WAGN",
            "cityname": "Wanganui",
            "airportcode": "WAG",
            "airportname": "Wanganui"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "WLGN",
            "cityname": "Wellington",
            "airportcode": "WLG",
            "airportname": "Wellington"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "WREN",
            "cityname": "Whangarei",
            "airportcode": "WRE",
            "airportname": "Whangarei"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "WSZN",
            "cityname": "Westport",
            "airportcode": "WSZ",
            "airportname": "Westport"
        },
        {
            "countrycode": "NZ",
            "countryname": "New Zealand",
            "citycode": "ZQNN",
            "cityname": "Queenstown",
            "airportcode": "ZQN",
            "airportname": "Queenstown"
        },
        {
            "countrycode": "OM",
            "countryname": "Oman",
            "citycode": "KHSA",
            "cityname": "Khasab",
            "airportcode": "KHS",
            "airportname": "Khasab"
        },
        {
            "countrycode": "OM",
            "countryname": "Oman",
            "citycode": "MCTA",
            "cityname": "Muscat",
            "airportcode": "MCT",
            "airportname": "Muscat"
        },
        {
            "countrycode": "OM",
            "countryname": "Oman",
            "citycode": "SLLA",
            "cityname": "Salalah",
            "airportcode": "SLL",
            "airportname": "Salalah"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "ACUA",
            "cityname": "Achutupo",
            "airportcode": "ACU",
            "airportname": "Achutupo"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "BFQA",
            "cityname": "Bahia Pinas",
            "airportcode": "BFQ",
            "airportname": "Bahia Pinas"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "BLBA",
            "cityname": "Balboa",
            "airportcode": "BLB",
            "airportname": "Balboa"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "BOCA",
            "cityname": "Bocas Del Toro",
            "airportcode": "BOC",
            "airportname": "Bocas Del Toro"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "CHXA",
            "cityname": "Changuinola",
            "airportcode": "CHX",
            "airportname": "Changuinola"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "CTDA",
            "cityname": "Chitre",
            "airportcode": "CTD",
            "airportname": "Chitre"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "DAVA",
            "cityname": "David",
            "airportcode": "DAV",
            "airportname": "David"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "JQEA",
            "cityname": "Jaque",
            "airportcode": "JQE",
            "airportname": "Jaque"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "MPPA",
            "cityname": "Mulatupo",
            "airportcode": "MPP",
            "airportname": "Mulatupo"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "OTDA",
            "cityname": "Contadora",
            "airportcode": "OTD",
            "airportname": "Contadora"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "PTYA",
            "cityname": "Panama City",
            "airportcode": "PAC",
            "airportname": "Panama City Paitilla"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "PTYA",
            "cityname": "Panama City",
            "airportcode": "PTY",
            "airportname": "Panama City Tocumen International"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "PUEA",
            "cityname": "Puerto Obaldia",
            "airportcode": "PUE",
            "airportname": "Puerto Obaldia"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "PYCA",
            "cityname": "Playon Chico",
            "airportcode": "PYC",
            "airportname": "Playon Chico"
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "RIHA",
            "cityname": "Rio Hato",
            "airportcode": "RIH",
            "airportname": "Scarlett Martinez International "
        },
        {
            "countrycode": "PA",
            "countryname": "Panama",
            "citycode": "SICA",
            "cityname": "San Jose Island",
            "airportcode": "SIC",
            "airportname": "Sinop"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "ANSA",
            "cityname": "Andahuaylas",
            "airportcode": "ANS",
            "airportname": "Andahuaylas"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "AQPA",
            "cityname": "Arequipa",
            "airportcode": "AQP",
            "airportname": "Arequipa"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "ATAA",
            "cityname": "Anta",
            "airportcode": "ATA",
            "airportname": "Anta"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "AYPA",
            "cityname": "Ayacucho",
            "airportcode": "AYP",
            "airportname": "Ayacucho"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "CIXA",
            "cityname": "Chiclayo",
            "airportcode": "CIX",
            "airportname": "Chiclayo"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "CJAA",
            "cityname": "Cajamarca",
            "airportcode": "CJA",
            "airportname": "Cajamarca"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "CUZA",
            "cityname": "Cuzco",
            "airportcode": "CUZ",
            "airportname": "Cuzco"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "HUUA",
            "cityname": "Huanuco",
            "airportcode": "HUU",
            "airportname": "Huanuco"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "IQTA",
            "cityname": "Iquitos",
            "airportcode": "IQT",
            "airportname": "Iquitos"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "JAUA",
            "cityname": "Jauja",
            "airportcode": "JAU",
            "airportname": "Jauja"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "JULA",
            "cityname": "Juliaca",
            "airportcode": "JUL",
            "airportname": "Juliaca"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "LIMA",
            "cityname": "Lima",
            "airportcode": "LIM",
            "airportname": "Lima"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "PCLA",
            "cityname": "Pucallpa",
            "airportcode": "PCL",
            "airportname": "Pucallpa"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "PEMA",
            "cityname": "Puerto Maldonado",
            "airportcode": "PEM",
            "airportname": "Puerto Maldonado"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "PIUA",
            "cityname": "Piura",
            "airportcode": "PIU",
            "airportname": "Piura"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "SMGA",
            "cityname": "Santa Maria",
            "airportcode": "SMG",
            "airportname": "Santa Maria"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "TBPA",
            "cityname": "Tumbes",
            "airportcode": "TBP",
            "airportname": "Tumbes"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "TCQA",
            "cityname": "Tacna",
            "airportcode": "TCQ",
            "airportname": "Tacna"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "TGIA",
            "cityname": "Tingo Maria",
            "airportcode": "TGI",
            "airportname": "Tingo Maria"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "TPPA",
            "cityname": "Tarapoto",
            "airportcode": "TPP",
            "airportname": "Tarapoto"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "TRUA",
            "cityname": "Trujillo",
            "airportcode": "TRU",
            "airportname": "Trujillo"
        },
        {
            "countrycode": "PE",
            "countryname": "Peru",
            "citycode": "TYLA",
            "cityname": "Talara",
            "airportcode": "TYL",
            "airportname": "Talara"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "AAAP",
            "cityname": "Anaa",
            "airportcode": "AAA",
            "airportname": "Anaa"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "AHEP",
            "cityname": "Ahe",
            "airportcode": "AHE",
            "airportname": "Ahe"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "APKP",
            "cityname": "Apataki",
            "airportcode": "APK",
            "airportname": "Apataki"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "AUQP",
            "cityname": "Atuona",
            "airportcode": "AUQ",
            "airportname": "Atuona"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "AXRP",
            "cityname": "Arutua",
            "airportcode": "AXR",
            "airportname": "Arutua"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "BOBP",
            "cityname": "Bora Bora",
            "airportcode": "BOB",
            "airportname": "Bora Bora"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "FACP",
            "cityname": "Faaite",
            "airportcode": "FAC",
            "airportname": "Faaite"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "FAVP",
            "cityname": "Fakarava",
            "airportcode": "FAV",
            "airportname": "Fakarava"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "FGUP",
            "cityname": "Fangatau",
            "airportcode": "FGU",
            "airportname": "Fangatau"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "FHZP",
            "cityname": "Fakahina",
            "airportcode": "FHZ",
            "airportname": "Fakahina"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "GMRP",
            "cityname": "Gambier Is",
            "airportcode": "GMR",
            "airportname": "Gambier Is"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "HHZP",
            "cityname": "Hikueru",
            "airportcode": "HHZ",
            "airportname": "Hikueru"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "HOIP",
            "cityname": "Hao Island",
            "airportcode": "HOI",
            "airportname": "Hao Island"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "HUHP",
            "cityname": "Huahine",
            "airportcode": "HUH",
            "airportname": "Huahine"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "KHZP",
            "cityname": "Kauehi",
            "airportcode": "KHZ",
            "airportname": "Kauehi"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "KKRP",
            "cityname": "Kaukura Atoll",
            "airportcode": "KKR",
            "airportname": "Kaukura Atoll"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "KXUP",
            "cityname": "Katiu",
            "airportcode": "KXU",
            "airportname": "Katiu"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "MAUP",
            "cityname": "Maupiti",
            "airportcode": "MAU",
            "airportname": "Maupiti"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "MKPP",
            "cityname": "Makemo",
            "airportcode": "MKP",
            "airportname": "Makemo"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "MOZP",
            "cityname": "Moorea",
            "airportcode": "MOZ",
            "airportname": "Moorea"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "MVTP",
            "cityname": "Mataiva",
            "airportcode": "MVT",
            "airportname": "Mataiva"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "NAUP",
            "cityname": "Napuka Island",
            "airportcode": "NAU",
            "airportname": "Napuka Island"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "NHVP",
            "cityname": "Nuku Hiva",
            "airportcode": "NHV",
            "airportname": "Nuku Hiva"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "NIUA",
            "cityname": "Niau",
            "airportcode": "NIU",
            "airportname": "Niau"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "NUKP",
            "cityname": "Nukutavake",
            "airportcode": "NUK",
            "airportname": "Nukutavake"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "PKPP",
            "cityname": "Puka Puka",
            "airportcode": "PKP",
            "airportname": "Puka Puka"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "PPTP",
            "cityname": "Papeete",
            "airportcode": "PPT",
            "airportname": "Papeete"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "PUKP",
            "cityname": "Pukarua",
            "airportcode": "PUK",
            "airportname": "Pukarua"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "REAP",
            "cityname": "Reao",
            "airportcode": "REA",
            "airportname": "Reao"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "RFPP",
            "cityname": "Raiatea",
            "airportcode": "RFP",
            "airportname": "Raiatea"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "RGIP",
            "cityname": "Rangiroa",
            "airportcode": "RGI",
            "airportname": "Rangiroa"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "RKAA",
            "cityname": "Aratika",
            "airportcode": "RKA",
            "airportname": "Aratika"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "RMTA",
            "cityname": "Rimatara",
            "airportcode": "RMT",
            "airportname": "Rimatara"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "RRRA",
            "cityname": "Raroia",
            "airportcode": "RRR",
            "airportname": "Raroia"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "RURP",
            "cityname": "Rurutu",
            "airportcode": "RUR",
            "airportname": "Rurutu"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "RVVP",
            "cityname": "Rairua",
            "airportcode": "RVV",
            "airportname": "Rairua"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "TIHP",
            "cityname": "Tikehau Atoll",
            "airportcode": "TIH",
            "airportname": "Tikehau Atoll"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "TJNP",
            "cityname": "Takume",
            "airportcode": "TJN",
            "airportname": "Takume"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "TKPP",
            "cityname": "Takapoto",
            "airportcode": "TKP",
            "airportname": "Takapoto"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "TKVP",
            "cityname": "Tatakoto",
            "airportcode": "TKV",
            "airportname": "Tatakoto"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "TKXP",
            "cityname": "Takaroa",
            "airportcode": "TKX",
            "airportname": "Takaroa"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "TUBP",
            "cityname": "Tubuai",
            "airportcode": "TUB",
            "airportname": "Tubuai"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "UAHP",
            "cityname": "Ua Huka",
            "airportcode": "UAH",
            "airportname": "Ua Huka"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "UAPP",
            "cityname": "Ua Pou",
            "airportcode": "UAP",
            "airportname": "Ua Pou"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "VHZP",
            "cityname": "Vahitahi",
            "airportcode": "VHZ",
            "airportname": "Vahitahi"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "XMHA",
            "cityname": "Manihi",
            "airportcode": "XMH",
            "airportname": "Manihi"
        },
        {
            "countrycode": "PF",
            "countryname": "French Polynesia",
            "citycode": "ZTAA",
            "cityname": "Tureia",
            "airportcode": "ZTA",
            "airportname": "Tureia"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "BSPP",
            "cityname": "Bensbach",
            "airportcode": "BSP",
            "airportname": "Bensbach"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "BUAP",
            "cityname": "Buka",
            "airportcode": "BUA",
            "airportname": "Buka"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "DAUP",
            "cityname": "Daru",
            "airportcode": "DAU",
            "airportname": "Daru"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "GKAP",
            "cityname": "Goroka",
            "airportcode": "GKA",
            "airportname": "Goroka"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "GURP",
            "cityname": "Alotau",
            "airportcode": "GUR",
            "airportname": "Alotau"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "HGUP",
            "cityname": "Mount Hagen",
            "airportcode": "HGU",
            "airportname": "Mount Hagen"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "HKNP",
            "cityname": "Hoskins",
            "airportcode": "HKN",
            "airportname": "Hoskins"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "KIEP",
            "cityname": "Kieta",
            "airportcode": "KIE",
            "airportname": "Kieta"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "KTKP",
            "cityname": "Kanua",
            "airportcode": "KTK",
            "airportname": "Kanua"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "KVGP",
            "cityname": "Kavieng",
            "airportcode": "KVG",
            "airportname": "Kavieng"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "LAEP",
            "cityname": "Lae",
            "airportcode": "LAE",
            "airportname": "Lae"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "LNVP",
            "cityname": "Lihir Island",
            "airportcode": "LNV",
            "airportname": "Lihir Island"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "LSAP",
            "cityname": "Losuia",
            "airportcode": "LSA",
            "airportname": "Losuia"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "MAGP",
            "cityname": "Madang",
            "airportcode": "MAG",
            "airportname": "Madang"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "MASP",
            "cityname": "Manus Island",
            "airportcode": "MAS",
            "airportname": "Manus Island"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "MDUP",
            "cityname": "Mendi",
            "airportcode": "MDU",
            "airportname": "Mendi"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "MISP",
            "cityname": "Misima Island",
            "airportcode": "MIS",
            "airportname": "Misima Island"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "MXHP",
            "cityname": "Moro",
            "airportcode": "MXH",
            "airportname": "Moro"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "OPUP",
            "cityname": "Balimo",
            "airportcode": "OPU",
            "airportname": "Balimo"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "PNPP",
            "cityname": "Popondetta",
            "airportcode": "PNP",
            "airportname": "Popondetta"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "POMP",
            "cityname": "Port Moresby",
            "airportcode": "POM",
            "airportname": "Port Moresby"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "RABP",
            "cityname": "Rabaul",
            "airportcode": "RAB",
            "airportname": "Rabaul"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "SPHP",
            "cityname": "Sopu",
            "airportcode": "SPH",
            "airportname": "Sopu"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "SQTP",
            "cityname": "Samarai Island",
            "airportcode": "SQT",
            "airportname": "Samarai Island"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "SSSP",
            "cityname": "Siassi",
            "airportcode": "SSS",
            "airportname": "Siassi"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "TBGP",
            "cityname": "Tabubil",
            "airportcode": "TBG",
            "airportname": "Tabubil"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "TFIP",
            "cityname": "Tufi",
            "airportcode": "TFI",
            "airportname": "Tufi"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "TIZP",
            "cityname": "Tari",
            "airportcode": "TIZ",
            "airportname": "Tari"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "UNGP",
            "cityname": "Kiunga",
            "airportcode": "UNG",
            "airportname": "Kiunga"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "VAIP",
            "cityname": "Vanimo",
            "airportcode": "VAI",
            "airportname": "Vanimo"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "WBMP",
            "cityname": "Wapenamanda",
            "airportcode": "WBM",
            "airportname": "Wapenamanda"
        },
        {
            "countrycode": "PG",
            "countryname": "Papua New Guinea",
            "citycode": "WWKP",
            "cityname": "Wewak",
            "airportcode": "WWK",
            "airportname": "Wewak"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "BCDP",
            "cityname": "Bacolod",
            "airportcode": "BCD",
            "airportname": "Bacolod-Silay"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "BSOP",
            "cityname": "Basco",
            "airportcode": "BSO",
            "airportname": "Basco (Batanes)"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "BXUP",
            "cityname": "Butuan",
            "airportcode": "BXU",
            "airportname": "Bancasi (Butuan)"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "CBOP",
            "cityname": "Cotabato",
            "airportcode": "CBO",
            "airportname": "Cotabato"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "CEBP",
            "cityname": "Cebu",
            "airportcode": "CEB",
            "airportname": "Mactan-Cebu International"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "CGMP",
            "cityname": "Camiguin",
            "airportcode": "CGM",
            "airportname": "Camiguin"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "CGYP",
            "cityname": "Cagayan De Oro",
            "airportcode": "CGY",
            "airportname": "Cagayan De Oro"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "CRKP",
            "cityname": "Angeles",
            "airportcode": "CRK",
            "airportname": "Clark International"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "CRMP",
            "cityname": "Catarman",
            "airportcode": "CRM",
            "airportname": "Catarman"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "CYPP",
            "cityname": "Calbayog",
            "airportcode": "CYP",
            "airportname": "Calbayog"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "CYZP",
            "cityname": "Cauayan",
            "airportcode": "CYZ",
            "airportname": "Cauayan"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "DGTP",
            "cityname": "Dumaguete",
            "airportcode": "DGT",
            "airportname": "Dumaguete"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "DPLP",
            "cityname": "Dipolog",
            "airportcode": "DPL",
            "airportname": "Dipolog"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "DVOP",
            "cityname": "Davao",
            "airportcode": "DVO",
            "airportname": "Davao International"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "ENIP",
            "cityname": "El Nido",
            "airportcode": "ENI",
            "airportname": "El Nido"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "GESP",
            "cityname": "General Santos",
            "airportcode": "GES",
            "airportname": "General Santos International"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "ILOP",
            "cityname": "Iloilo",
            "airportcode": "ILO",
            "airportname": "Iloilo International"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "KLOP",
            "cityname": "Kalibo",
            "airportcode": "KLO",
            "airportname": "Kalibo International (Boracay)"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "LAOP",
            "cityname": "Laoag",
            "airportcode": "LAO",
            "airportname": "Laoag International"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "LGPP",
            "cityname": "Legaspi",
            "airportcode": "LGP",
            "airportname": "Legaspi"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "MACO",
            "cityname": "Maconacon",
            "airportcode": "KCV",
            "airportname": "Maconacon"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "MBTP",
            "cityname": "Masbate",
            "airportcode": "MBT",
            "airportname": "Masbate"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "MNLP",
            "cityname": "Manila",
            "airportcode": "MNL",
            "airportname": "Manila Ninoy Aquino"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "MPHP",
            "cityname": "Caticlan",
            "airportcode": "MPH",
            "airportname": "Caticlan (Boracay)"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "MRQP",
            "cityname": "Marinduque",
            "airportcode": "MRQ",
            "airportname": "Marinduque"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "OZCP",
            "cityname": "Ozamis City",
            "airportcode": "OZC",
            "airportname": "Ozamis City"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "PAGP",
            "cityname": "Pagadian",
            "airportcode": "PAG",
            "airportname": "Pagadian"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "PPSP",
            "cityname": "Puerto Princesa",
            "airportcode": "PPS",
            "airportname": "Puerto Princesa (Palawan)"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "PZAM",
            "cityname": "Zamboanga",
            "airportcode": "ZAM",
            "airportname": "Zamboanga International"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "RXSP",
            "cityname": "Roxas City",
            "airportcode": "RXS",
            "airportname": "Roxas City"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "SIAR",
            "cityname": "Siargao Island",
            "airportcode": "IAO",
            "airportname": "Siargao Island"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "SJIP",
            "cityname": "San Jose",
            "airportcode": "SJI",
            "airportname": "San Jose (Mindoro)"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "SUGP",
            "cityname": "Surigao",
            "airportcode": "SUG",
            "airportname": "Surigao"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "TACP",
            "cityname": "Tacloban",
            "airportcode": "TAC",
            "airportname": "Tacloban"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "TAGP",
            "cityname": "Tagbilaran",
            "airportcode": "TAG",
            "airportname": "Tagbilaran"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "TBHP",
            "cityname": "Tablas",
            "airportcode": "TBH",
            "airportname": "Tablas"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "TDGP",
            "cityname": "Tandag",
            "airportcode": "TDG",
            "airportname": "Tandag"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "TUGP",
            "cityname": "Tuguegarao",
            "airportcode": "TUG",
            "airportname": "Tuguegarao"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "TWTP",
            "cityname": "Tawitawi",
            "airportcode": "TWT",
            "airportname": "Tawitawi"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "USUP",
            "cityname": "Busuanga",
            "airportcode": "USU",
            "airportname": "Busuanga"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "VGNP",
            "cityname": "Vigan",
            "airportcode": "VGN",
            "airportname": "Vigan"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "VRCP",
            "cityname": "Virac",
            "airportcode": "VRC",
            "airportname": "Virac"
        },
        {
            "countrycode": "PH",
            "countryname": "Philippines",
            "citycode": "WNPP",
            "cityname": "Naga",
            "airportcode": "WNP",
            "airportname": "Naga"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "BHVA",
            "cityname": "Bahawalpur",
            "airportcode": "BHV",
            "airportname": "Bahawalpur"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "CJLA",
            "cityname": "Chitral",
            "airportcode": "CJL",
            "airportname": "Chitral"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "DBAA",
            "cityname": "Dalbandin",
            "airportcode": "DBA",
            "airportname": "Dalbandin"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "DDUA",
            "cityname": "Dadu",
            "airportcode": "DDU",
            "airportname": "Dadu"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "DEAA",
            "cityname": "Dera Ghazi Khan",
            "airportcode": "DEA",
            "airportname": "Dera Ghazi Khan"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "DSKA",
            "cityname": "Dera Ismail Khan",
            "airportcode": "DSK",
            "airportname": "Dera Ismail Khan"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "GILA",
            "cityname": "Gilgit",
            "airportcode": "GIL",
            "airportname": "Gilgit"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "GWDA",
            "cityname": "Gwadar",
            "airportcode": "GWD",
            "airportname": "Gwadar"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "HDDA",
            "cityname": "Hyderabad",
            "airportcode": "HDD",
            "airportname": "Hyderabad"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "ISBA",
            "cityname": "Islamabad",
            "airportcode": "ISB",
            "airportname": "Islamabad"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "KCFA",
            "cityname": "Kadanwari",
            "airportcode": "KCF",
            "airportname": "Kadanwari"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "KDUA",
            "cityname": "Skardu",
            "airportcode": "KDU",
            "airportname": "Skardu"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "KHIA",
            "cityname": "Karachi",
            "airportcode": "KHI",
            "airportname": "Karachi"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "LHEA",
            "cityname": "Lahore",
            "airportcode": "LHE",
            "airportname": "Lahore"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "LYPA",
            "cityname": "Faisalabad",
            "airportcode": "LYP",
            "airportname": "Faisalabad"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "MJDA",
            "cityname": "Mohenjodaro",
            "airportcode": "MJD",
            "airportname": "Mohenjodaro"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "MUXA",
            "cityname": "Multan",
            "airportcode": "MUX",
            "airportname": "Multan"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "PEWA",
            "cityname": "Peshawar",
            "airportcode": "PEW",
            "airportname": "Peshawar"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "PJGA",
            "cityname": "Panjgur",
            "airportcode": "PJG",
            "airportname": "Panjgur"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "PZHA",
            "cityname": "Zhob",
            "airportcode": "PZH",
            "airportname": "Zhob"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "RYKA",
            "cityname": "Rahim Yar Khan",
            "airportcode": "RYK",
            "airportname": "Rahim Yar Khan"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "RZSA",
            "cityname": "Sawan",
            "airportcode": "RZS",
            "airportname": "Sawan"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "SDTA",
            "cityname": "Saidu Sharif",
            "airportcode": "SDT",
            "airportname": "Saidu Sharif"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "SKTA",
            "cityname": "Sialkot",
            "airportcode": "SKT",
            "airportname": "Sialkot"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "SKZA",
            "cityname": "Sukkur",
            "airportcode": "SKZ",
            "airportname": "Sukkur"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "TUKA",
            "cityname": "Turbat",
            "airportcode": "TUK",
            "airportname": "Turbat"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "UETA",
            "cityname": "Quetta",
            "airportcode": "UET",
            "airportname": "Quetta"
        },
        {
            "countrycode": "PK",
            "countryname": "Pakistan",
            "citycode": "WNSA",
            "cityname": "Nawabshah",
            "airportcode": "WNS",
            "airportname": "Nawabshah"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "BYDG",
            "cityname": "Bydgoszcz",
            "airportcode": "BZG",
            "airportname": "Bydgoszcz"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "CLUZ",
            "cityname": "Lublin",
            "airportcode": "LUZ",
            "airportname": "Lublin"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "GADA",
            "cityname": "Gdansk",
            "airportcode": "GDN",
            "airportname": "Gdansk"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "KATO",
            "cityname": "Katowice",
            "airportcode": "KTW",
            "airportname": "Katowice"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "KRAK",
            "cityname": "Krakow",
            "airportcode": "KRK",
            "airportname": "Krakow"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "LODZ",
            "cityname": "Lodz",
            "airportcode": "LCJ",
            "airportname": "Lodz"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "POZN",
            "cityname": "Poznan",
            "airportcode": "POZ",
            "airportname": "Poznan"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "RDOA",
            "cityname": "Radom",
            "airportcode": "RDO",
            "airportname": "Radom"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "RZES",
            "cityname": "Rzeszow",
            "airportcode": "RZE",
            "airportname": "Rzeszow"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "SZCZ",
            "cityname": "Szczecin",
            "airportcode": "SZZ",
            "airportname": "Szczecin Goleniow"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "SZYA",
            "cityname": "Szymany",
            "airportcode": "SZY",
            "airportname": "Szymany"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "WARS",
            "cityname": "Warsaw",
            "airportcode": "WAW",
            "airportname": "Warsaw Okecie"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "WARS",
            "cityname": "Warsaw",
            "airportcode": "WMI",
            "airportname": "Warsaw Modlin"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "WROC",
            "cityname": "Wroclaw",
            "airportcode": "WRO",
            "airportname": "Wroclaw"
        },
        {
            "countrycode": "PL",
            "countryname": "Poland",
            "citycode": "ZIEL",
            "cityname": "Zielona Gora Babimost",
            "airportcode": "IEG",
            "airportname": "Zielona Gora Babimost"
        },
        {
            "countrycode": "PM",
            "countryname": "St. Pierre and Miquelon",
            "citycode": "FSPA",
            "cityname": "St Pierre",
            "airportcode": "FSP",
            "airportname": "St Pierre"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "BQNA",
            "cityname": "Aguadilla",
            "airportcode": "BQN",
            "airportname": "Aguadilla"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "CEIB",
            "cityname": "Ceiba",
            "airportcode": "TJR",
            "airportname": "Ceiba"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "CPXA",
            "cityname": "Culebra",
            "airportcode": "CPX",
            "airportname": "Culebra"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "MAZA",
            "cityname": "Mayaguez",
            "airportcode": "MAZ",
            "airportname": "Mayaguez"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "NRRA",
            "cityname": "Roosevelt Roads",
            "airportcode": "NRR",
            "airportname": "Roosevelt Roads"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "PSEA",
            "cityname": "Ponce",
            "airportcode": "PSE",
            "airportname": "Ponce"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "SJUA",
            "cityname": "San Juan",
            "airportcode": "SIG",
            "airportname": "San Juan Isla Grande"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "SJUA",
            "cityname": "San Juan",
            "airportcode": "SJU",
            "airportname": "San Juan Luis Munoz Marin"
        },
        {
            "countrycode": "PR",
            "countryname": "Puerto Rico",
            "citycode": "VQSA",
            "cityname": "Vieques",
            "airportcode": "VQS",
            "airportname": "Vieques"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "CORV",
            "cityname": "Corvo Island",
            "airportcode": "CVU",
            "airportname": "Corvo Island"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "FARO",
            "cityname": "Faro",
            "airportcode": "FAO",
            "airportname": "Faro"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "FUNC",
            "cityname": "Madeira",
            "airportcode": "FNC",
            "airportname": "Madeira"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "GRAC",
            "cityname": "Graciosa Island",
            "airportcode": "GRW",
            "airportname": "Graciosa Island"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "HORT",
            "cityname": "Horta",
            "airportcode": "HOR",
            "airportname": "Horta"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "LISB",
            "cityname": "Lisbon",
            "airportcode": "LIS",
            "airportname": "Lisbon"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "PICO",
            "cityname": "Pico Island",
            "airportcode": "PIX",
            "airportname": "Pico Island"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "PONT",
            "cityname": "Ponta Delgada",
            "airportcode": "PDL",
            "airportname": "Ponta Delgada"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "PORT",
            "cityname": "Porto",
            "airportcode": "OPO",
            "airportname": "Porto"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "PORY",
            "cityname": "Porto Santo",
            "airportcode": "PXO",
            "airportname": "Porto Santo"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "SANJ",
            "cityname": "San Jorge Island",
            "airportcode": "SJZ",
            "airportname": "San Jorge Island"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "SANU",
            "cityname": "Flores Island",
            "airportcode": "FLW",
            "airportname": "Flores Island"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "SANV",
            "cityname": "Santa Maria",
            "airportcode": "SMA",
            "airportname": "Santa Maria"
        },
        {
            "countrycode": "PT",
            "countryname": "Portugal",
            "citycode": "TERC",
            "cityname": "Terceira Lajes",
            "airportcode": "TER",
            "airportname": "Terceira Lajes"
        },
        {
            "countrycode": "PW",
            "countryname": "Palau",
            "citycode": "RORA",
            "cityname": "Koror",
            "airportcode": "ROR",
            "airportname": "Koror"
        },
        {
            "countrycode": "PY",
            "countryname": "Paraguay",
            "citycode": "AGTA",
            "cityname": "Ciudad del Este",
            "airportcode": "AGT",
            "airportname": "Ciudad del Este"
        },
        {
            "countrycode": "PY",
            "countryname": "Paraguay",
            "citycode": "ASUA",
            "cityname": "Asuncion",
            "airportcode": "ASU",
            "airportname": "Asuncion"
        },
        {
            "countrycode": "QA",
            "countryname": "Qatar",
            "citycode": "DOHA",
            "cityname": "Doha",
            "airportcode": "DOH",
            "airportname": "Hamad International"
        },
        {
            "countrycode": "RE",
            "countryname": "Reunion",
            "citycode": "RUNA",
            "cityname": "Saint-Denis",
            "airportcode": "RUN",
            "airportname": "Saint-Denis"
        },
        {
            "countrycode": "RE",
            "countryname": "Reunion",
            "citycode": "ZSEB",
            "cityname": "Saint-Pierre",
            "airportcode": "ZSE",
            "airportname": "Saint-Pierre"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "ARAD",
            "cityname": "Arad",
            "airportcode": "ARW",
            "airportname": "Arad"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "BACA",
            "cityname": "Bacau",
            "airportcode": "BCM",
            "airportname": "Bacau International"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "BAIA",
            "cityname": "Baia Mare",
            "airportcode": "BAY",
            "airportname": "Baia Mare"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "BUCH",
            "cityname": "Bucharest",
            "airportcode": "BBU",
            "airportname": "Bucharest Baneasa"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "BUCH",
            "cityname": "Bucharest",
            "airportcode": "OTP",
            "airportname": "Bucharest Otopeni"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "CLUJ",
            "cityname": "Cluj-Napoca",
            "airportcode": "CLJ",
            "airportname": "Cluj-Napoca"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "CONS",
            "cityname": "Constanta Kogalniceanu",
            "airportcode": "CND",
            "airportname": "Constanta Kogalniceanu"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "CRAI",
            "cityname": "Craiova",
            "airportcode": "CRA",
            "airportname": "Craiova"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "IASI",
            "cityname": "Iasi",
            "airportcode": "IAS",
            "airportname": "Iasi"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "ORAD",
            "cityname": "Oradea",
            "airportcode": "OMR",
            "airportname": "Oradea"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "SATU",
            "cityname": "Satu Mare",
            "airportcode": "SUJ",
            "airportname": "Satu Mare"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "SIBI",
            "cityname": "Sibiu",
            "airportcode": "SBZ",
            "airportname": "Sibiu"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "SUCE",
            "cityname": "Suceava Salcea",
            "airportcode": "SCV",
            "airportname": "Suceava Salcea"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "TIMI",
            "cityname": "Timisoara",
            "airportcode": "TSR",
            "airportname": "Timisoara"
        },
        {
            "countrycode": "RO",
            "countryname": "Romania",
            "citycode": "TIRG",
            "cityname": "Tirgu Mures",
            "airportcode": "TGM",
            "airportname": "Tirgu Mures"
        },
        {
            "countrycode": "RS",
            "countryname": "Serbia",
            "citycode": "BELI",
            "cityname": "Belgrade",
            "airportcode": "BEG",
            "airportname": "Belgrade Nikola Tesla"
        },
        {
            "countrycode": "RS",
            "countryname": "Serbia",
            "citycode": "NISI",
            "cityname": "Nis",
            "airportcode": "INI",
            "airportname": "Nis"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ABAK",
            "cityname": "Abakan",
            "airportcode": "ABA",
            "airportname": "Abakan"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ACHI",
            "cityname": "Achinsk",
            "airportcode": "ACS",
            "airportname": "Achinsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ADLE",
            "cityname": "Sochi",
            "airportcode": "AER",
            "airportname": "Sochi"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ALDA",
            "cityname": "Aldan",
            "airportcode": "ADH",
            "airportname": "Aldan"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "AMDE",
            "cityname": "Amderma",
            "airportcode": "AMV",
            "airportname": "Amderma"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ANAD",
            "cityname": "Anadyr",
            "airportcode": "DYR",
            "airportname": "Anadyr"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ANAP",
            "cityname": "Anapa",
            "airportcode": "AAQ",
            "airportname": "Anapa"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ARKH",
            "cityname": "Arkhangelsk",
            "airportcode": "ARH",
            "airportname": "Arkhangelsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ASTR",
            "cityname": "Astrakhan",
            "airportcode": "ASF",
            "airportname": "Astrakhan"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BARN",
            "cityname": "Barnaul",
            "airportcode": "BAX",
            "airportname": "Barnaul"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BELH",
            "cityname": "Belgorod",
            "airportcode": "EGO",
            "airportname": "Belgorod"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BGJY",
            "cityname": "Batagay",
            "airportcode": "BQJ",
            "airportname": "Batagay Airport"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BGNC",
            "cityname": "Belaya Gora",
            "airportcode": "BGN",
            "airportname": "Belaya Gora"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BLAG",
            "cityname": "Blagoveschensk",
            "airportcode": "BQS",
            "airportname": "Blagoveschensk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BODA",
            "cityname": "Bodaybo",
            "airportcode": "ODO",
            "airportname": "Odessa-Schlemeyer Field"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BRAT",
            "cityname": "Bratsk",
            "airportcode": "BTK",
            "airportname": "Bratsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BRIA",
            "cityname": "Briansk",
            "airportcode": "BZK",
            "airportname": "Briansk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "BUGU",
            "cityname": "Bugulma",
            "airportcode": "UUA",
            "airportname": "Bugulma"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "CERV",
            "cityname": "Cherskiy",
            "airportcode": "CYX",
            "airportname": "Cherskiy"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "CHEB",
            "cityname": "Cheboksary",
            "airportcode": "CSY",
            "airportname": "Cheboksary"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "CHEL",
            "cityname": "Chelyabinsk",
            "airportcode": "CEK",
            "airportname": "Chelyabinsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "CHER",
            "cityname": "Cherepovets",
            "airportcode": "CEE",
            "airportname": "Cherepovets"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "CHIT",
            "cityname": "Chita",
            "airportcode": "HTA",
            "airportname": "Chita"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "CHOK",
            "cityname": "Chokurdah",
            "airportcode": "CKH",
            "airportname": "Chokurdah"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "CSHB",
            "cityname": "Solovetsky",
            "airportcode": "CSH",
            "airportname": "Solovetsky"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "DIKS",
            "cityname": "Dikson",
            "airportcode": "DKS",
            "airportname": "Dikson"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "DPTA",
            "cityname": "Deputatsky",
            "airportcode": "DPT",
            "airportname": "Deputatsky"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "EKAT",
            "cityname": "Ekaterinburg",
            "airportcode": "SVX",
            "airportname": "Ekaterinburg"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ELIS",
            "cityname": "Elista",
            "airportcode": "ESL",
            "airportname": "Elista"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "EYKA",
            "cityname": "Beloyarsky",
            "airportcode": "EYK",
            "airportname": "Beloyarsky"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "EZVA",
            "cityname": "Berezovo",
            "airportcode": "EZV",
            "airportname": "Berezovo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "GELE",
            "cityname": "Gelendzik",
            "airportcode": "GDZ",
            "airportname": "Gelendzik"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "GROZ",
            "cityname": "Grozny",
            "airportcode": "GRV",
            "airportname": "Grozny"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "HATA",
            "cityname": "Hatanga",
            "airportcode": "HTG",
            "airportname": "Hatanga"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "HMAA",
            "cityname": "Khanty-Mansiysk",
            "airportcode": "HMA",
            "airportname": "Khanty-Mansiysk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "IGAR",
            "cityname": "Igarka",
            "airportcode": "IAA",
            "airportname": "Igarka"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "IRKU",
            "cityname": "Irkutsk",
            "airportcode": "IKT",
            "airportname": "Irkutsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "IRMA",
            "cityname": "Igrim",
            "airportcode": "IRM",
            "airportname": "Igrim"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "IVAO",
            "cityname": "Ivanova",
            "airportcode": "IWA",
            "airportname": "Ivanovo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "IZHE",
            "cityname": "Izhevsk",
            "airportcode": "IJK",
            "airportname": "Izhevsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "JOSH",
            "cityname": "Joshkar-Ola",
            "airportcode": "JOK",
            "airportname": "Joshkar-Ola"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KALI",
            "cityname": "Kaliningrad",
            "airportcode": "KGD",
            "airportname": "Kaliningrad"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KALU",
            "cityname": "Kaluga",
            "airportcode": "KLF",
            "airportname": "Kaluga"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KAZA",
            "cityname": "Kazan",
            "airportcode": "KZN",
            "airportname": "Kazan"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KEME",
            "cityname": "Kemerovo",
            "airportcode": "KEJ",
            "airportname": "Kemerovo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KGPA",
            "cityname": "Kogalym",
            "airportcode": "KGP",
            "airportname": "Kogalym"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KHAB",
            "cityname": "Khabarovsk Novy",
            "airportcode": "KHV",
            "airportname": "Khabarovsk Novy"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KIRE",
            "cityname": "Kirensk",
            "airportcode": "KCK",
            "airportname": "Kansas City"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KIRP",
            "cityname": "Kirovsk",
            "airportcode": "KVK",
            "airportname": "Kirovsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KIRQ",
            "cityname": "Kirov",
            "airportcode": "KVX",
            "airportname": "Kirov"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KOMS",
            "cityname": "Komsomolsk Na Amure",
            "airportcode": "KXK",
            "airportname": "Komsomolsk Na Amure"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KOTL",
            "cityname": "Kotlas",
            "airportcode": "KSZ",
            "airportname": "Kotlas"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KPWA",
            "cityname": "Keperveyem",
            "airportcode": "KPW",
            "airportname": "Keperveyem"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KRAS",
            "cityname": "Krasnoyarsk",
            "airportcode": "KJA",
            "airportname": "Krasnoyarsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KRAT",
            "cityname": "Krasnodar",
            "airportcode": "KRR",
            "airportname": "Krasnodar"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KURG",
            "cityname": "Kurgan",
            "airportcode": "KRO",
            "airportname": "Kurgan"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KURS",
            "cityname": "Kursk",
            "airportcode": "URS",
            "airportname": "Kursk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KVMA",
            "cityname": "Markovo",
            "airportcode": "KVM",
            "airportname": "Markovo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KVRA",
            "cityname": "Kavalerovo",
            "airportcode": "KVR",
            "airportname": "Kavalerovo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "KYZY",
            "cityname": "Kyzyl",
            "airportcode": "KYZ",
            "airportname": "Kyzyl"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "LIPE",
            "cityname": "Lipetsk",
            "airportcode": "LPK",
            "airportname": "Lipetsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MAGA",
            "cityname": "Magadan",
            "airportcode": "GDX",
            "airportname": "Magadan"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MAGN",
            "cityname": "Magnitogorsk",
            "airportcode": "MQF",
            "airportname": "Magnitogorsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MAKH",
            "cityname": "Makhachkala",
            "airportcode": "MCX",
            "airportname": "Makhachkala"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MINE",
            "cityname": "Mineralnye Vody",
            "airportcode": "MRV",
            "airportname": "Mineralnye Vody"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MIRN",
            "cityname": "Mirny",
            "airportcode": "MJZ",
            "airportname": "Mirny"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MOSC",
            "cityname": "Moscow",
            "airportcode": "DME",
            "airportname": "Moscow Domodedovo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MOSC",
            "cityname": "Moscow",
            "airportcode": "SVO",
            "airportname": "Moscow Sheremetyevo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MOSC",
            "cityname": "Moscow",
            "airportcode": "VKO",
            "airportname": "Moscow Vnukovo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MQJC",
            "cityname": "Khonu",
            "airportcode": "MQJ",
            "airportname": "Moma Airport"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MURM",
            "cityname": "Murmansk",
            "airportcode": "MMK",
            "airportname": "Murmansk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "MYSK",
            "cityname": "Mys Kamennyy",
            "airportcode": "YMK",
            "airportname": "Mys Kamennyy"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NABE",
            "cityname": "Naberevnye Chelny",
            "airportcode": "NBC",
            "airportname": "Naberevnye Chelny"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NADY",
            "cityname": "Nadym",
            "airportcode": "NYM",
            "airportname": "Nadym"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NALC",
            "cityname": "Nalchik",
            "airportcode": "NAL",
            "airportname": "Nalchik"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NARY",
            "cityname": "Naryan-Mar",
            "airportcode": "NNM",
            "airportname": "Naryan-Mar"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NAZR",
            "cityname": "Nazran",
            "airportcode": "IGT",
            "airportname": "Magas"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NERY",
            "cityname": "Neryungri",
            "airportcode": "NER",
            "airportname": "Neryungri"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NIZH",
            "cityname": "Nizhniy Novgorod",
            "airportcode": "GOJ",
            "airportname": "Nizhniy Novgorod"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NIZI",
            "cityname": "Nizhnevartovsk",
            "airportcode": "NJC",
            "airportname": "Nizhnevartovsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NOGL",
            "cityname": "Nogliki",
            "airportcode": "NGK",
            "airportname": "Nogliki"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NOJA",
            "cityname": "Nojabrxsk",
            "airportcode": "NOJ",
            "airportname": "Nojabrxsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NORI",
            "cityname": "Norilsk",
            "airportcode": "NSK",
            "airportname": "Norilsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NOVP",
            "cityname": "Novokuzinetsk",
            "airportcode": "NOZ",
            "airportname": "Novokuzinetsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NOVY",
            "cityname": "Novy Urengoy",
            "airportcode": "NUX",
            "airportname": "Novy Urengoy"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NYAA",
            "cityname": "Nyagan",
            "airportcode": "NYA",
            "airportname": "Nyagan"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "NYRC",
            "cityname": "Nyurba",
            "airportcode": "NYR",
            "airportname": "Nyurba"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "OHHA",
            "cityname": "Okha",
            "airportcode": "OHH",
            "airportname": "Okha"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "OHOT",
            "cityname": "Ohotsk",
            "airportcode": "OHO",
            "airportname": "Ohotsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "OMSK",
            "cityname": "Omsk",
            "airportcode": "OMS",
            "airportname": "Omsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ONKC",
            "cityname": "Olenyok",
            "airportcode": "ONK",
            "airportname": "Olenyok"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "OREN",
            "cityname": "Orenburg",
            "airportcode": "REN",
            "airportname": "Orenburg"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ORSK",
            "cityname": "Orsk",
            "airportcode": "OSW",
            "airportname": "Orsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "OVBA",
            "cityname": "Novosibirsk",
            "airportcode": "OVB",
            "airportname": "Novosibirsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "OVSB",
            "cityname": "Sovetsky",
            "airportcode": "OVS",
            "airportname": "Sovetsky"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "PENZ",
            "cityname": "Penza",
            "airportcode": "PEZ",
            "airportname": "Penza"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "PERM",
            "cityname": "Perm",
            "airportcode": "PEE",
            "airportname": "Perm"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "PETE",
            "cityname": "St Petersburg",
            "airportcode": "LED",
            "airportname": "St Petersburg Pulkovo"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "PETR",
            "cityname": "Petrozavodsk",
            "airportcode": "PES",
            "airportname": "Petrozavodsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "PETS",
            "cityname": "Petropavlovsk-Kamchats",
            "airportcode": "PKC",
            "airportname": "Petropavlovsk-Kamchatsky"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "PEVE",
            "cityname": "Pevek",
            "airportcode": "PWE",
            "airportname": "Pevek"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "POLY",
            "cityname": "Polyarnyj",
            "airportcode": "PYJ",
            "airportname": "Polyarnyj"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "PSKO",
            "cityname": "Pskov",
            "airportcode": "PKV",
            "airportname": "Pskov"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "RGKA",
            "cityname": "Gorno-Altaysk",
            "airportcode": "RGK",
            "airportname": "Gorno-Altaysk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ROSV",
            "cityname": "Rostov-on-Don",
            "airportcode": "ROV",
            "airportname": "Rostov-on-Don"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SALE",
            "cityname": "Salehard",
            "airportcode": "SLY",
            "airportname": "Salehard"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SAMA",
            "cityname": "Samara",
            "airportcode": "KUF",
            "airportname": "Samara"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SARB",
            "cityname": "Saratov",
            "airportcode": "RTW",
            "airportname": "Saratov"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SARC",
            "cityname": "Saransk",
            "airportcode": "SKX",
            "airportname": "Saransk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SEKA",
            "cityname": "Srednekolymsk",
            "airportcode": "SEK",
            "airportname": "Srednekolymsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SHAK",
            "cityname": "Shakhtyorsk",
            "airportcode": "EKS",
            "airportname": "Big Sky"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "STAW",
            "cityname": "Stavropol",
            "airportcode": "STW",
            "airportname": "Stavropol"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SURG",
            "cityname": "Surgut",
            "airportcode": "SGC",
            "airportname": "Surgut"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SUYA",
            "cityname": "Suntar",
            "airportcode": "SUY",
            "airportname": "Suntar"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SWTA",
            "cityname": "Strzhewoi",
            "airportcode": "SWT",
            "airportname": "Strzhewoi"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SWVB",
            "cityname": "Evensk",
            "airportcode": "SWV",
            "airportname": "Severo-Evensk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "SYKT",
            "cityname": "Syktyvkar",
            "airportcode": "SCW",
            "airportname": "Syktyvkar"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "TAMB",
            "cityname": "Tambov",
            "airportcode": "TBW",
            "airportname": "Tambov"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "TGPA",
            "cityname": "Podkamennaya Tunguska",
            "airportcode": "TGP",
            "airportname": "Podkamennaya Tunguska"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "THXA",
            "cityname": "Turukhansk",
            "airportcode": "THX",
            "airportname": "Turukhansk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "TIKS",
            "cityname": "Tiksi",
            "airportcode": "IKS",
            "airportname": "Tiksi"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "TLYA",
            "cityname": "Plastun",
            "airportcode": "TLY",
            "airportname": "Plastun"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "TOMS",
            "cityname": "Tomsk",
            "airportcode": "TOF",
            "airportname": "Tomsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "TRKO",
            "cityname": "Tarko-Sale",
            "airportcode": "TQL",
            "airportname": "Tarko-Sale"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "TYUM",
            "cityname": "Tyumen",
            "airportcode": "TJM",
            "airportname": "Tyumen"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "UEMO",
            "cityname": "Olyokminsk",
            "airportcode": "OLZ",
            "airportname": "Olyokminsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "UFAI",
            "cityname": "Ufa",
            "airportcode": "UFA",
            "airportname": "Ufa"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "UKGA",
            "cityname": "Ust-Kuyga",
            "airportcode": "UKG",
            "airportname": "Ust-Kuyga"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "UKHT",
            "cityname": "Ukhta",
            "airportcode": "UCT",
            "airportname": "Ukhta"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ULAN",
            "cityname": "Ulan-Ude",
            "airportcode": "UUD",
            "airportname": "Ulan-Ude"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ULKC",
            "cityname": "Lensk",
            "airportcode": "ULK",
            "airportname": "Lensk Airport"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ULYA",
            "cityname": "Ulyanovsk",
            "airportcode": "ULV",
            "airportname": "Ulyanovsk Baratayevka"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ULYA",
            "cityname": "Ulyanovsk",
            "airportcode": "ULY",
            "airportname": "Ulyanovsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "UMSA",
            "cityname": "Ust-Maya",
            "airportcode": "UMS",
            "airportname": "Ust-Maya"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "URAJ",
            "cityname": "Uraj",
            "airportcode": "URJ",
            "airportname": "Uraj"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "USIN",
            "cityname": "Usinsk",
            "airportcode": "USK",
            "airportname": "Usinsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "USRC",
            "cityname": "Ust-Nera",
            "airportcode": "USR",
            "airportname": "Ust-Nera Airport"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "USTK",
            "cityname": "Ust-Kut",
            "airportcode": "UKX",
            "airportname": "Ust-Kut"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "USTY",
            "cityname": "Velikij Ustyug",
            "airportcode": "VUS",
            "airportname": "Velikij Ustyug"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "VHVA",
            "cityname": "Verkhnevilyuysk",
            "airportcode": "VHV",
            "airportname": "Verkhnevilyuysk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "VLAD",
            "cityname": "Vladivostok",
            "airportcode": "VVO",
            "airportname": "Vladivostok"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "VLAE",
            "cityname": "Vladikavkaz",
            "airportcode": "OGZ",
            "airportname": "Vladikavkaz"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "VOLH",
            "cityname": "Volgograd",
            "airportcode": "VOG",
            "airportname": "Volgograd"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "VORK",
            "cityname": "Vorkuta",
            "airportcode": "VKT",
            "airportname": "Vorkuta"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "VORO",
            "cityname": "Voronezh",
            "airportcode": "VOZ",
            "airportname": "Voronezh"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "VYIA",
            "cityname": "Vilyuysk",
            "airportcode": "VYI",
            "airportname": "Vilyuysk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "YAKU",
            "cityname": "Yakutsk",
            "airportcode": "GYG",
            "airportname": "Magan"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "YAKU",
            "cityname": "Yakutsk",
            "airportcode": "YKS",
            "airportname": "Yakutsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "YARO",
            "cityname": "Yaroslavl",
            "airportcode": "IAR",
            "airportname": "Yaroslavl"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "YERB",
            "cityname": "Yerbogachen",
            "airportcode": "ERG",
            "airportname": "Yerbogachen"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "YUZH",
            "cityname": "Yuzhno-Sakhalinsk",
            "airportcode": "UUS",
            "airportname": "Yuzhno-Sakhalinsk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ZIXC",
            "cityname": "Zhigansk",
            "airportcode": "ZIX",
            "airportname": "Zhigansk"
        },
        {
            "countrycode": "RU",
            "countryname": "Russia",
            "citycode": "ZKPC",
            "cityname": "Zyryanka",
            "airportcode": "ZKP",
            "airportname": "Zyryanka Airport"
        },
        {
            "countrycode": "RW",
            "countryname": "Rwanda",
            "citycode": "KGLA",
            "cityname": "Kigali",
            "airportcode": "KGL",
            "airportname": "Kigali"
        },
        {
            "countrycode": "RW",
            "countryname": "Rwanda",
            "citycode": "KMEA",
            "cityname": "Kamembe",
            "airportcode": "KME",
            "airportname": "Kamembe"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "ABTA",
            "cityname": "Al-Baha",
            "airportcode": "ABT",
            "airportname": "Al-Baha"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "AHBA",
            "cityname": "Abha",
            "airportcode": "AHB",
            "airportname": "Abha"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "AJFA",
            "cityname": "Jouf",
            "airportcode": "AJF",
            "airportname": "Jouf"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "ALUL",
            "cityname": "Al `Ula",
            "airportcode": "ULH",
            "airportname": "Al `Ula"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "AQIA",
            "cityname": "Qaisumah",
            "airportcode": "AQI",
            "airportname": "Qaisumah"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "BHHA",
            "cityname": "Bisha",
            "airportcode": "BHH",
            "airportname": "Bisha"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "DMMA",
            "cityname": "Dammam",
            "airportcode": "DMM",
            "airportname": "Dammam"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "DWDA",
            "cityname": "Dawadmi",
            "airportcode": "DWD",
            "airportname": "Dawadmi"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "EAMA",
            "cityname": "Nejran",
            "airportcode": "EAM",
            "airportname": "Nejran"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "EJHA",
            "cityname": "Wedjh",
            "airportcode": "EJH",
            "airportname": "Wedjh"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "ELQA",
            "cityname": "Gassim",
            "airportcode": "ELQ",
            "airportname": "Gassim"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "GIZA",
            "cityname": "Jazan",
            "airportcode": "GIZ",
            "airportname": "Jazan"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "HASA",
            "cityname": "Hail",
            "airportcode": "HAS",
            "airportname": "Hail"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "HOFA",
            "cityname": "Alahsa",
            "airportcode": "HOF",
            "airportname": "Alahsa"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "JEDA",
            "cityname": "Jeddah",
            "airportcode": "JED",
            "airportname": "Jeddah"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "KMCA",
            "cityname": "King Khalid Mil. City",
            "airportcode": "KMC",
            "airportname": "King Khalid Mil. City"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "MEDA",
            "cityname": "Madinah",
            "airportcode": "MED",
            "airportname": "Madinah"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "RAEA",
            "cityname": "Arar",
            "airportcode": "RAE",
            "airportname": "Arar"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "RAHA",
            "cityname": "Rafha",
            "airportcode": "RAH",
            "airportname": "Rafha"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "RUHA",
            "cityname": "Riyadh",
            "airportcode": "RUH",
            "airportname": "Riyadh"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "SHWA",
            "cityname": "Sharurah",
            "airportcode": "SHW",
            "airportname": "Sharurah"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "TIFA",
            "cityname": "Taif",
            "airportcode": "TIF",
            "airportname": "Taif"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "TUIA",
            "cityname": "Turaif",
            "airportcode": "TUI",
            "airportname": "Turaif"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "TUUA",
            "cityname": "Tabuk",
            "airportcode": "TUU",
            "airportname": "Tabuk"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "URYA",
            "cityname": "Gurayat",
            "airportcode": "URY",
            "airportname": "Gurayat"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "WAEA",
            "cityname": "Wadi Ad Dawasir",
            "airportcode": "WAE",
            "airportname": "Wadi Ad Dawasir"
        },
        {
            "countrycode": "SA",
            "countryname": "Saudi Arabia",
            "citycode": "YNBA",
            "cityname": "Yanbu",
            "airportcode": "YNB",
            "airportname": "Yanbu"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "AKSA",
            "cityname": "Auki",
            "airportcode": "AKS",
            "airportname": "Auki"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "ATDA",
            "cityname": "Atoifi",
            "airportcode": "ATD",
            "airportname": "Atoifi"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "BASA",
            "cityname": "Balalae",
            "airportcode": "BAS",
            "airportname": "Balalae"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "BNYA",
            "cityname": "Bellona",
            "airportcode": "BNY",
            "airportname": "Bellona"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "CHYA",
            "cityname": "Choiseul Bay",
            "airportcode": "CHY",
            "airportname": "Choiseul Bay"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "EGMA",
            "cityname": "Sege",
            "airportcode": "EGM",
            "airportname": "Sege"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "FREA",
            "cityname": "Fera Island",
            "airportcode": "FRE",
            "airportname": "Fera Island"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "GZOA",
            "cityname": "Gizo",
            "airportcode": "GZO",
            "airportname": "Gizo"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "HIRA",
            "cityname": "Honiara",
            "airportcode": "HIR",
            "airportname": "Honiara"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "IRAA",
            "cityname": "Kirakira",
            "airportcode": "IRA",
            "airportname": "Kirakira"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "KGEA",
            "cityname": "Kagau",
            "airportcode": "KGE",
            "airportname": "Kagau"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "MUAA",
            "cityname": "Munda",
            "airportcode": "MUA",
            "airportname": "Munda"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "NNBA",
            "cityname": "Santa Ana",
            "airportcode": "NNB",
            "airportname": "Santa Ana"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "RBVA",
            "cityname": "Ramata",
            "airportcode": "RBV",
            "airportname": "Ramata"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "RNAA",
            "cityname": "Arona",
            "airportcode": "RNA",
            "airportname": "Arona"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "RNLA",
            "cityname": "Rennell",
            "airportcode": "RNL",
            "airportname": "Rennell"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "RUSA",
            "cityname": "Marau Sound",
            "airportcode": "RUS",
            "airportname": "Marau Sound"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "SCZA",
            "cityname": "Santa Cruz Is",
            "airportcode": "SCZ",
            "airportname": "Santa Cruz Is"
        },
        {
            "countrycode": "SB",
            "countryname": "Solomon Islands",
            "citycode": "VAOA",
            "cityname": "Suavanao",
            "airportcode": "VAO",
            "airportname": "Suavanao"
        },
        {
            "countrycode": "SC",
            "countryname": "Seychelles",
            "citycode": "PRIA",
            "cityname": "Praslin Island",
            "airportcode": "PRI",
            "airportname": "Praslin Island"
        },
        {
            "countrycode": "SC",
            "countryname": "Seychelles",
            "citycode": "SEZA",
            "cityname": "Mahe Island",
            "airportcode": "SEZ",
            "airportname": "Mahe Island"
        },
        {
            "countrycode": "SD",
            "countryname": "Sudan",
            "citycode": "EGNA",
            "cityname": "Geneina",
            "airportcode": "EGN",
            "airportname": "Geneina"
        },
        {
            "countrycode": "SD",
            "countryname": "Sudan",
            "citycode": "ELFA",
            "cityname": "El Fasher",
            "airportcode": "ELF",
            "airportname": "El Fasher"
        },
        {
            "countrycode": "SD",
            "countryname": "Sudan",
            "citycode": "KRTA",
            "cityname": "Khartoum",
            "airportcode": "KRT",
            "airportname": "Khartoum"
        },
        {
            "countrycode": "SD",
            "countryname": "Sudan",
            "citycode": "PZUA",
            "cityname": "Port Sudan",
            "airportcode": "PZU",
            "airportname": "Port Sudan"
        },
        {
            "countrycode": "SD",
            "countryname": "Sudan",
            "citycode": "RSSA",
            "cityname": "Roseires",
            "airportcode": "RSS",
            "airportname": "Roseires"
        },
        {
            "countrycode": "SD",
            "countryname": "Sudan",
            "citycode": "UYLA",
            "cityname": "Nyala",
            "airportcode": "UYL",
            "airportname": "Nyala"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "ARVI",
            "cityname": "Arvidsjaur",
            "airportcode": "AJR",
            "airportname": "Arvidsjaur"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "BORL",
            "cityname": "Borlange Dala",
            "airportcode": "BLE",
            "airportname": "Borlange Dala"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "GALL",
            "cityname": "Gallivare",
            "airportcode": "GEV",
            "airportname": "Gallivare"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "GOTH",
            "cityname": "Gothenburg",
            "airportcode": "GOT",
            "airportname": "Gothenburg Landvetter"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "GOTH",
            "cityname": "Gothenburg",
            "airportcode": "GSE",
            "airportname": "Gothenburg Save"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "HAGF",
            "cityname": "Hagfors",
            "airportcode": "HFS",
            "airportname": "Hagfors"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "HALM",
            "cityname": "Halmstad",
            "airportcode": "HAD",
            "airportname": "Halmstad"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "HELT",
            "cityname": "Helsingborg",
            "airportcode": "AGH",
            "airportname": "Helsingborg Angelholm"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "HEMA",
            "cityname": "Hemavan",
            "airportcode": "HMV",
            "airportname": "Hemavan"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "JONK",
            "cityname": "Jonkoping Axamo",
            "airportcode": "JKG",
            "airportname": "Jonkoping Axamo"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "KALM",
            "cityname": "Kalmar",
            "airportcode": "KLR",
            "airportname": "Kalmar"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "KARL",
            "cityname": "Karlstad",
            "airportcode": "KSD",
            "airportname": "Karlstad"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "KIRU",
            "cityname": "Kiruna",
            "airportcode": "KRN",
            "airportname": "Kiruna"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "KRAM",
            "cityname": "Kramfors",
            "airportcode": "KRF",
            "airportname": "Kramfors"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "KRIS",
            "cityname": "Kristianstad",
            "airportcode": "KID",
            "airportname": "Kristianstad"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "LINK",
            "cityname": "Linkoping",
            "airportcode": "LPI",
            "airportname": "Linkoping City"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "LULE",
            "cityname": "Lulea Kallax",
            "airportcode": "LLA",
            "airportname": "Lulea Kallax"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "LYCK",
            "cityname": "Lycksele Hedlunda",
            "airportcode": "LYC",
            "airportname": "Lycksele Hedlunda"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "MALM",
            "cityname": "Malmo",
            "airportcode": "MMX",
            "airportname": "Malmo Sturup"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "MORA",
            "cityname": "Mora",
            "airportcode": "MXX",
            "airportname": "Mora-Siljan"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "NORR",
            "cityname": "Norrkoping Kungsangen",
            "airportcode": "NRK",
            "airportname": "Norrkoping Kungsangen"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "OREB",
            "cityname": "Orebro",
            "airportcode": "ORB",
            "airportname": "Orebro"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "ORNS",
            "cityname": "Ornskoldsvik",
            "airportcode": "OER",
            "airportname": "Ornskoldsvik"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "OSKA",
            "cityname": "Oskarshamn",
            "airportcode": "OSK",
            "airportname": "Oskarshamn"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "OSTE",
            "cityname": "Ostersund",
            "airportcode": "OSD",
            "airportname": "Ostersund Froesoe"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "PAJA",
            "cityname": "Pajala",
            "airportcode": "PJA",
            "airportname": "Pajala"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "RONN",
            "cityname": "Ronneby",
            "airportcode": "RNB",
            "airportname": "Ronneby"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "SKEL",
            "cityname": "Skelleftea",
            "airportcode": "SFT",
            "airportname": "Skelleftea"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "STOC",
            "cityname": "Stockholm",
            "airportcode": "ARN",
            "airportname": "Stockholm Arlanda"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "STOC",
            "cityname": "Stockholm",
            "airportcode": "BMA",
            "airportname": "Stockholm Bromma"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "STOC",
            "cityname": "Stockholm",
            "airportcode": "NYO",
            "airportname": "Stockholm Skavsta"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "STOC",
            "cityname": "Stockholm",
            "airportcode": "VST",
            "airportname": "Stockholm Vasteras"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "SUND",
            "cityname": "Sundsvall",
            "airportcode": "SDL",
            "airportname": "Sundsvall Midlanda"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "SVEG",
            "cityname": "Sveg",
            "airportcode": "EVG",
            "airportname": "Sveg"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "TORS",
            "cityname": "Torsby Fryklanda",
            "airportcode": "TYF",
            "airportname": "Torsby Fryklanda"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "TROL",
            "cityname": "Trollhattan",
            "airportcode": "THN",
            "airportname": "Trollhattan"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "UMEA",
            "cityname": "Umea",
            "airportcode": "UME",
            "airportname": "Umea"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "VAXJ",
            "cityname": "Vaxjo",
            "airportcode": "VXO",
            "airportname": "Vaxjo"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "VILH",
            "cityname": "Vilhelmina Sagadal",
            "airportcode": "VHM",
            "airportname": "Vilhelmina Sagadal"
        },
        {
            "countrycode": "SE",
            "countryname": "Sweden",
            "citycode": "VISB",
            "cityname": "Visby",
            "airportcode": "VBY",
            "airportname": "Visby"
        },
        {
            "countrycode": "SG",
            "countryname": "Singapore",
            "citycode": "SINS",
            "cityname": "Singapore",
            "airportcode": "SIN",
            "airportname": "Singapore Changi"
        },
        {
            "countrycode": "SI",
            "countryname": "Slovenia",
            "citycode": "LJUB",
            "cityname": "Ljubljana",
            "airportcode": "LJU",
            "airportname": "Ljubljana"
        },
        {
            "countrycode": "SI",
            "countryname": "Slovenia",
            "citycode": "MARI",
            "cityname": "Maribor",
            "airportcode": "MBX",
            "airportname": "Maribor"
        },
        {
            "countrycode": "SK",
            "countryname": "Slovakia",
            "citycode": "BRAS",
            "cityname": "Bratislava",
            "airportcode": "BTS",
            "airportname": "Bratislava"
        },
        {
            "countrycode": "SK",
            "countryname": "Slovakia",
            "citycode": "KOSI",
            "cityname": "Kosice",
            "airportcode": "KSC",
            "airportname": "Kosice"
        },
        {
            "countrycode": "SK",
            "countryname": "Slovakia",
            "citycode": "POPR",
            "cityname": "Poprad",
            "airportcode": "TAT",
            "airportname": "Poprad-Tatry"
        },
        {
            "countrycode": "SL",
            "countryname": "Sierra Leone",
            "citycode": "FNAA",
            "cityname": "Freetown",
            "airportcode": "FNA",
            "airportname": "Freetown Lungi International"
        },
        {
            "countrycode": "SN",
            "countryname": "Senegal",
            "citycode": "CSKA",
            "cityname": "Cap Skirring",
            "airportcode": "CSK",
            "airportname": "Cap Skirring"
        },
        {
            "countrycode": "SN",
            "countryname": "Senegal",
            "citycode": "DKRA",
            "cityname": "Dakar",
            "airportcode": "DKR",
            "airportname": "Dakar"
        },
        {
            "countrycode": "SN",
            "countryname": "Senegal",
            "citycode": "ZIGA",
            "cityname": "Ziguinchor",
            "airportcode": "ZIG",
            "airportname": "Ziguinchor"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "ALUA",
            "cityname": "Alula",
            "airportcode": "ALU",
            "airportname": "Alula"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "BBOA",
            "cityname": "Berbera",
            "airportcode": "BBO",
            "airportname": "Berbera"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "BSAA",
            "cityname": "Bossaso",
            "airportcode": "BSA",
            "airportname": "Bossaso"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "GLKA",
            "cityname": "Galcaio",
            "airportcode": "GLK",
            "airportname": "Galcaio"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "GSRA",
            "cityname": "Gardo",
            "airportcode": "GSR",
            "airportname": "Gardo"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "HCMA",
            "cityname": "Eil",
            "airportcode": "HCM",
            "airportname": "Eil"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "HGAA",
            "cityname": "Hargeisa",
            "airportcode": "HGA",
            "airportname": "Hargeisa"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "KMUA",
            "cityname": "Kismayu",
            "airportcode": "KMU",
            "airportname": "Kismayu"
        },
        {
            "countrycode": "SO",
            "countryname": "Somalia",
            "citycode": "MGQA",
            "cityname": "Mogadishu",
            "airportcode": "MGQ",
            "airportname": "Mogadishu"
        },
        {
            "countrycode": "SR",
            "countryname": "Suriname",
            "citycode": "PBMA",
            "cityname": "Paramaribo",
            "airportcode": "PBM",
            "airportname": "Paramaribo Zanderij"
        },
        {
            "countrycode": "SS",
            "countryname": "South Sudan",
            "citycode": "JUBA",
            "cityname": "Juba",
            "airportcode": "JUB",
            "airportname": "Juba"
        },
        {
            "countrycode": "SS",
            "countryname": "South Sudan",
            "citycode": "WUUA",
            "cityname": "Wau",
            "airportcode": "WUU",
            "airportname": "Wau"
        },
        {
            "countrycode": "ST",
            "countryname": "Sao Tome and Principe",
            "citycode": "TMSA",
            "cityname": "Sao Tome Is",
            "airportcode": "TMS",
            "airportname": "Sao Tome Is"
        },
        {
            "countrycode": "SV",
            "countryname": "El Salvador",
            "citycode": "SALB",
            "cityname": "San Salvador",
            "airportcode": "SAL",
            "airportname": "San Salvador"
        },
        {
            "countrycode": "SX",
            "countryname": "St Maarten",
            "citycode": "SXMA",
            "cityname": "St Maarten",
            "airportcode": "SXM",
            "airportname": "St Maarten"
        },
        {
            "countrycode": "SY",
            "countryname": "Syria",
            "citycode": "ALPA",
            "cityname": "Aleppo",
            "airportcode": "ALP",
            "airportname": "Aleppo"
        },
        {
            "countrycode": "SY",
            "countryname": "Syria",
            "citycode": "DAMA",
            "cityname": "Damascus",
            "airportcode": "DAM",
            "airportname": "Damascus"
        },
        {
            "countrycode": "SY",
            "countryname": "Syria",
            "citycode": "KACA",
            "cityname": "Kameshli",
            "airportcode": "KAC",
            "airportname": "Kameshli"
        },
        {
            "countrycode": "SY",
            "countryname": "Syria",
            "citycode": "LTKA",
            "cityname": "Latakia",
            "airportcode": "LTK",
            "airportname": "Latakia"
        },
        {
            "countrycode": "SZ",
            "countryname": "Swaziland",
            "citycode": "MTSA",
            "cityname": "Manzini",
            "airportcode": "MTS",
            "airportname": "Manzini"
        },
        {
            "countrycode": "SZ",
            "countryname": "Swaziland",
            "citycode": "MTSA",
            "cityname": "Manzini",
            "airportcode": "SHO",
            "airportname": "King Mswati III International"
        },
        {
            "countrycode": "TC",
            "countryname": "Turks and Caicos Islands",
            "citycode": "GDTA",
            "cityname": "Grand Turk Is",
            "airportcode": "GDT",
            "airportname": "Grand Turk Is"
        },
        {
            "countrycode": "TC",
            "countryname": "Turks and Caicos Islands",
            "citycode": "PLSA",
            "cityname": "Providenciales",
            "airportcode": "PLS",
            "airportname": "Providenciales"
        },
        {
            "countrycode": "TC",
            "countryname": "Turks and Caicos Islands",
            "citycode": "SLXA",
            "cityname": "Salt Cay",
            "airportcode": "SLX",
            "airportname": "Salt Cay"
        },
        {
            "countrycode": "TC",
            "countryname": "Turks and Caicos Islands",
            "citycode": "XSCA",
            "cityname": "South Caicos",
            "airportcode": "XSC",
            "airportname": "South Caicos"
        },
        {
            "countrycode": "TD",
            "countryname": "Chad",
            "citycode": "NDJA",
            "cityname": "N’Djamena",
            "airportcode": "NDJ",
            "airportname": "N'Djamena"
        },
        {
            "countrycode": "TG",
            "countryname": "Togo",
            "citycode": "LFWA",
            "cityname": "Lome",
            "airportcode": "LFW",
            "airportname": "Lome"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "BFVT",
            "cityname": "Buri Ram",
            "airportcode": "BFV",
            "airportname": "Buri Ram"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "BKKT",
            "cityname": "Bangkok",
            "airportcode": "BKK",
            "airportname": "Bangkok Suvarnabhumi"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "BKKT",
            "cityname": "Bangkok",
            "airportcode": "DMK",
            "airportname": "Bangkok Don Meung"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "CEIT",
            "cityname": "Chiang Rai",
            "airportcode": "CEI",
            "airportname": "Chiang Rai"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "CJMT",
            "cityname": "Chumphon",
            "airportcode": "CJM",
            "airportname": "Chumphon"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "CNXT",
            "cityname": "Chiang Mai",
            "airportcode": "CNX",
            "airportname": "Chiang Mai"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "HDYT",
            "cityname": "Hat Yai (Songkhla)",
            "airportcode": "HDY",
            "airportname": "Hat Yai"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "HGNT",
            "cityname": "Mae Hong Son",
            "airportcode": "HGN",
            "airportname": "Mae Hong Son"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "HHQT",
            "cityname": "Hua Hin (Prachuap Khiri Khan)",
            "airportcode": "HHQ",
            "airportname": "Hua Hin (Prachuap Khiri Khan)"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "HKTT",
            "cityname": "Phuket",
            "airportcode": "HKT",
            "airportname": "Phuket"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "KBVT",
            "cityname": "Krabi",
            "airportcode": "KBV",
            "airportname": "Krabi"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "KKCT",
            "cityname": "Khon Kaen",
            "airportcode": "KKC",
            "airportname": "Khon Kaen"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "KKMT",
            "cityname": "Lop Buri",
            "airportcode": "KKM",
            "airportname": "Lop Buri"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "KOPT",
            "cityname": "Nakhon Phanom",
            "airportcode": "KOP",
            "airportname": "Nakhon Phanom"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "LOET",
            "cityname": "Loei",
            "airportcode": "LOE",
            "airportname": "Loei"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "LPTT",
            "cityname": "Lampang",
            "airportcode": "LPT",
            "airportname": "Lampang"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "MAQT",
            "cityname": "Mae Sot (Tak)",
            "airportcode": "MAQ",
            "airportname": "Mae Sot (Tak)"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "NAWT",
            "cityname": "Narathiwat",
            "airportcode": "NAW",
            "airportname": "Narathiwat"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "NNTT",
            "cityname": "Nan",
            "airportcode": "NNT",
            "airportname": "Nan"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "NSTT",
            "cityname": "Nakhon Si Thammarat",
            "airportcode": "NST",
            "airportname": "Nakhon Si Thammarat"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "PHST",
            "cityname": "Phitsanulok",
            "airportcode": "PHS",
            "airportname": "Phitsanulok"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "PRHT",
            "cityname": "Phrae",
            "airportcode": "PRH",
            "airportname": "Phrae"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "PYYA",
            "cityname": "Pai (Mae Hong Son)",
            "airportcode": "PYY",
            "airportname": "Pai (Mae Hong Son)"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "ROIT",
            "cityname": "Roi Et",
            "airportcode": "ROI",
            "airportname": "Roi Et"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "SNOT",
            "cityname": "Sakon Nakhon",
            "airportcode": "SNO",
            "airportname": "Sakon Nakhon"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "TDXT",
            "cityname": "Trat",
            "airportcode": "TDX",
            "airportname": "Trat"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "THST",
            "cityname": "Sukhothai",
            "airportcode": "THS",
            "airportname": "Sukhothai"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "TSTT",
            "cityname": "Trang",
            "airportcode": "TST",
            "airportname": "Trang"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "UBPT",
            "cityname": "Ubon Ratchathani",
            "airportcode": "UBP",
            "airportname": "Ubon Ratchathani"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "UNNT",
            "cityname": "Ranong",
            "airportcode": "UNN",
            "airportname": "Ranong"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "URTT",
            "cityname": "Surat Thani",
            "airportcode": "URT",
            "airportname": "Surat Thani"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "USMT",
            "cityname": "Koh Samui / Samui Island",
            "airportcode": "USM",
            "airportname": "Koh Samui / Samui Island"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "UTHT",
            "cityname": "Udon Thani",
            "airportcode": "UTH",
            "airportname": "Udon Thani"
        },
        {
            "countrycode": "TH",
            "countryname": "Thailand",
            "citycode": "UTPT",
            "cityname": "Pattaya (Chonburi)",
            "airportcode": "UTP",
            "airportname": "Pattaya (Chonburi)"
        },
        {
            "countrycode": "TJ",
            "countryname": "Tajikistan",
            "citycode": "DYUA",
            "cityname": "Dushanbe",
            "airportcode": "DYU",
            "airportname": "Dushanbe"
        },
        {
            "countrycode": "TJ",
            "countryname": "Tajikistan",
            "citycode": "KRGN",
            "cityname": "Kurgon-Tyube",
            "airportcode": "KQT",
            "airportname": "Kurgon-Tyube"
        },
        {
            "countrycode": "TJ",
            "countryname": "Tajikistan",
            "citycode": "LBDA",
            "cityname": "Khudzhand",
            "airportcode": "LBD",
            "airportname": "Khudzhand"
        },
        {
            "countrycode": "TJ",
            "countryname": "Tajikistan",
            "citycode": "TJUA",
            "cityname": "Kulyab",
            "airportcode": "TJU",
            "airportname": "Kulyab"
        },
        {
            "countrycode": "TL",
            "countryname": "East Timor",
            "citycode": "DILA",
            "cityname": "Dili",
            "airportcode": "DIL",
            "airportname": "Dili"
        },
        {
            "countrycode": "TM",
            "countryname": "Turkmenistan",
            "citycode": "ASBA",
            "cityname": "Ashgabat",
            "airportcode": "ASB",
            "airportname": "Ashgabat"
        },
        {
            "countrycode": "TM",
            "countryname": "Turkmenistan",
            "citycode": "CRZA",
            "cityname": "Turkmenabad",
            "airportcode": "CRZ",
            "airportname": "Turkmenabad"
        },
        {
            "countrycode": "TM",
            "countryname": "Turkmenistan",
            "citycode": "KRWA",
            "cityname": "Turkmenbashi",
            "airportcode": "KRW",
            "airportname": "Turkmenbashi"
        },
        {
            "countrycode": "TM",
            "countryname": "Turkmenistan",
            "citycode": "MYPA",
            "cityname": "Mary",
            "airportcode": "MYP",
            "airportname": "Mary"
        },
        {
            "countrycode": "TM",
            "countryname": "Turkmenistan",
            "citycode": "TAZA",
            "cityname": "Dashoguz",
            "airportcode": "TAZ",
            "airportname": "Dashoguz"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "DJER",
            "cityname": "Djerba",
            "airportcode": "DJE",
            "airportname": "Djerba"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "GABE",
            "cityname": "Gabes",
            "airportcode": "GAE",
            "airportname": "Gabes"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "GAFS",
            "cityname": "Gafsa",
            "airportcode": "GAF",
            "airportname": "Gafsa"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "MONA",
            "cityname": "Monastir",
            "airportcode": "MIR",
            "airportname": "Monastir"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "NBEA",
            "cityname": "Enfidha",
            "airportcode": "NBE",
            "airportname": "Enfidha"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "SFAX",
            "cityname": "Sfax El Maou",
            "airportcode": "SFA",
            "airportname": "Sfax El Maou"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "TABA",
            "cityname": "Tabarka",
            "airportcode": "TBJ",
            "airportname": "Tabarka"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "TOZE",
            "cityname": "Tozeur",
            "airportcode": "TOE",
            "airportname": "Tozeur"
        },
        {
            "countrycode": "TN",
            "countryname": "Tunisia",
            "citycode": "TUNI",
            "cityname": "Tunis Carthage",
            "airportcode": "TUN",
            "airportname": "Tunis Carthage"
        },
        {
            "countrycode": "TO",
            "countryname": "Tonga",
            "citycode": "EUAA",
            "cityname": "Eua",
            "airportcode": "EUA",
            "airportname": "Eua"
        },
        {
            "countrycode": "TO",
            "countryname": "Tonga",
            "citycode": "HPAA",
            "cityname": "Ha'Apai",
            "airportcode": "HPA",
            "airportname": "Ha'Apai"
        },
        {
            "countrycode": "TO",
            "countryname": "Tonga",
            "citycode": "NFOA",
            "cityname": "Niuafo'ou",
            "airportcode": "NFO",
            "airportname": "Niuafo'ou"
        },
        {
            "countrycode": "TO",
            "countryname": "Tonga",
            "citycode": "NTTA",
            "cityname": "Niuatoputapu",
            "airportcode": "NTT",
            "airportname": "Niuatoputapu"
        },
        {
            "countrycode": "TO",
            "countryname": "Tonga",
            "citycode": "TONG",
            "cityname": "Tongatapu",
            "airportcode": "TBU",
            "airportname": "Tongatapu"
        },
        {
            "countrycode": "TO",
            "countryname": "Tonga",
            "citycode": "VAVA",
            "cityname": "Vava'u",
            "airportcode": "VAV",
            "airportname": "Vava'u"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ADAN",
            "cityname": "Adana",
            "airportcode": "ADA",
            "airportname": "Adana"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ADFA",
            "cityname": "Adiyaman",
            "airportcode": "ADF",
            "airportname": "Adiyaman"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "AGRO",
            "cityname": "Agri",
            "airportcode": "AJI",
            "airportname": "Agri"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ANKA",
            "cityname": "Ankara",
            "airportcode": "ANK",
            "airportname": "Ankara Etimesgut"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ANKA",
            "cityname": "Ankara",
            "airportcode": "ESB",
            "airportname": "Ankara Esenboga"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ANTA",
            "cityname": "Antalya",
            "airportcode": "AYT",
            "airportname": "Antalya"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "AOEA",
            "cityname": "Eskisehir",
            "airportcode": "AOE",
            "airportname": "Eskisehir"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "BATM",
            "cityname": "Batman",
            "airportcode": "BAL",
            "airportname": "Batman"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "BING",
            "cityname": "Bingöl",
            "airportcode": "BGG",
            "airportname": "Bingöl"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "BODR",
            "cityname": "Bodrum",
            "airportcode": "BJV",
            "airportname": "Bodrum"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "BURS",
            "cityname": "Bursa",
            "airportcode": "BTZ",
            "airportname": "Bursa"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "CANA",
            "cityname": "Canakkale",
            "airportcode": "CKZ",
            "airportname": "Canakkale"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "DALA",
            "cityname": "Dalaman",
            "airportcode": "DLM",
            "airportname": "Dalaman"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "DENI",
            "cityname": "Denizli Cardak",
            "airportcode": "DNZ",
            "airportname": "Denizli Cardak"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "DIYA",
            "cityname": "Diyarbakir",
            "airportcode": "DIY",
            "airportname": "Diyarbakir"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "EDOA",
            "cityname": "Edremit / Korfez",
            "airportcode": "EDO",
            "airportname": "Edremit / Korfez"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ELAZ",
            "cityname": "Elazig",
            "airportcode": "EZS",
            "airportname": "Elazig"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ERZI",
            "cityname": "Erzincan",
            "airportcode": "ERC",
            "airportname": "Erzincan"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ERZU",
            "cityname": "Erzurum",
            "airportcode": "ERZ",
            "airportname": "Erzurum"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "GAZI",
            "cityname": "Gaziantep",
            "airportcode": "GZT",
            "airportname": "Gaziantep"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "GZPA",
            "cityname": "Gazipasa",
            "airportcode": "GZP",
            "airportname": "Gazipasa"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "HTYA",
            "cityname": "Antakya",
            "airportcode": "HTY",
            "airportname": "Antakya"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "IGDR",
            "cityname": "Igdir",
            "airportcode": "IGD",
            "airportname": "Igdir Airport"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ISEA",
            "cityname": "Isparta",
            "airportcode": "ISE",
            "airportname": "Isparta"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ISTA",
            "cityname": "Istanbul",
            "airportcode": "IST",
            "airportname": "Istanbul Ataturk"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ISTA",
            "cityname": "Istanbul",
            "airportcode": "SAW",
            "airportname": "Istanbul Sabiha"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "IZMI",
            "cityname": "Izmir",
            "airportcode": "ADB",
            "airportname": "Izmir"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "KARS",
            "cityname": "Kars",
            "airportcode": "KSY",
            "airportname": "Kars"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "KAYS",
            "cityname": "Kayseri",
            "airportcode": "ASR",
            "airportname": "Kayseri"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "KCMA",
            "cityname": "Kahramanmaras",
            "airportcode": "KCM",
            "airportname": "Kahramanmaras"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "KCOA",
            "cityname": "Kocaeli",
            "airportcode": "KCO",
            "airportname": "Kocaeli"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "KFSA",
            "cityname": "Kastamonu",
            "airportcode": "KFS",
            "airportname": "Kastamonu"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "KONY",
            "cityname": "Konya",
            "airportcode": "KYA",
            "airportname": "Konya"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "KUTH",
            "cityname": "Kütahya",
            "airportcode": "KZR",
            "airportname": "Kütahya"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "MALB",
            "cityname": "Malatya",
            "airportcode": "MLX",
            "airportname": "Malatya"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "MARD",
            "cityname": "Mardin",
            "airportcode": "MQM",
            "airportname": "Mardin"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "MERZ",
            "cityname": "Merzifon",
            "airportcode": "MZH",
            "airportname": "Merzifon"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "MUSI",
            "cityname": "Mus",
            "airportcode": "MSR",
            "airportname": "Mus"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "NAVA",
            "cityname": "Nevsehir",
            "airportcode": "NAV",
            "airportname": "Nevsehir"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "OGUA",
            "cityname": "Ordu-Giresun",
            "airportcode": "OGU",
            "airportname": "Ordu-Giresun"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "ONQA",
            "cityname": "Zonguldak",
            "airportcode": "ONQ",
            "airportname": "Zonguldak"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "SAMS",
            "cityname": "Samsun",
            "airportcode": "SZF",
            "airportname": "Samsun Carsamba"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "SANL",
            "cityname": "Sanliurfa",
            "airportcode": "GNY",
            "airportname": "Sanliurfa Guney Anadoulu Projesi"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "SANL",
            "cityname": "Sanliurfa",
            "airportcode": "SFQ",
            "airportname": "Sanliurfa"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "SINO",
            "cityname": "Sinop",
            "airportcode": "NOP",
            "airportname": "Sinop Airport"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "SIRN",
            "cityname": "Sirnak",
            "airportcode": "NKT",
            "airportname": "Sirnak"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "SIVA",
            "cityname": "Sivas",
            "airportcode": "VAS",
            "airportname": "Sivas"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "SXZA",
            "cityname": "Siirt",
            "airportcode": "SXZ",
            "airportname": "Siirt"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "TEQA",
            "cityname": "Tekirdag",
            "airportcode": "TEQ",
            "airportname": "Tekirdag"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "TJKA",
            "cityname": "Tokat",
            "airportcode": "TJK",
            "airportname": "Tokat"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "TRAB",
            "cityname": "Trabzon",
            "airportcode": "TZX",
            "airportname": "Trabzon"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "USQA",
            "cityname": "Usak",
            "airportcode": "USQ",
            "airportname": "Usak"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "VANI",
            "cityname": "Van",
            "airportcode": "VAN",
            "airportname": "Van"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "YEIA",
            "cityname": "Bursa",
            "airportcode": "YEI",
            "airportname": "Bursa"
        },
        {
            "countrycode": "TR",
            "countryname": "Turkey",
            "citycode": "YKOA",
            "cityname": "Hakkari",
            "airportcode": "YKO",
            "airportname": "Yusekova"
        },
        {
            "countrycode": "TT",
            "countryname": "Trinidad and Tobago",
            "citycode": "POSA",
            "cityname": "Port Of Spain",
            "airportcode": "POS",
            "airportname": "Port Of Spain"
        },
        {
            "countrycode": "TT",
            "countryname": "Trinidad and Tobago",
            "citycode": "TOBB",
            "cityname": "Tobago",
            "airportcode": "TAB",
            "airportname": "Tobago"
        },
        {
            "countrycode": "TV",
            "countryname": "Tuvalu",
            "citycode": "FUNA",
            "cityname": "Funafuti",
            "airportcode": "FUN",
            "airportname": "Funafuti"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "CMJT",
            "cityname": "Chi Mei",
            "airportcode": "CMJ",
            "airportname": "Chi Mei"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "CYIT",
            "cityname": "Chiayi",
            "airportcode": "CYI",
            "airportname": "Chiayi"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "GNIT",
            "cityname": "Green Island",
            "airportcode": "GNI",
            "airportname": "Green Island"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "HCNT",
            "cityname": "Hengchun",
            "airportcode": "HCN",
            "airportname": "Hengchun"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "HUNT",
            "cityname": "Hualien",
            "airportcode": "HUN",
            "airportname": "Hualien"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "KHHT",
            "cityname": "Kaohsiung",
            "airportcode": "KHH",
            "airportname": "Kaohsiung"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "KNHT",
            "cityname": "Kinmen",
            "airportcode": "KNH",
            "airportname": "Kinmen"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "KYDT",
            "cityname": "Orchid Island",
            "airportcode": "KYD",
            "airportname": "Orchid Island"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "LZNA",
            "cityname": "Nangan",
            "airportcode": "LZN",
            "airportname": "Nangan"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "MFKT",
            "cityname": "Matsu",
            "airportcode": "MFK",
            "airportname": "Matsu"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "MZGT",
            "cityname": "Makung",
            "airportcode": "MZG",
            "airportname": "Makung"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "RMQT",
            "cityname": "Taichung",
            "airportcode": "RMQ",
            "airportname": "Taichung"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "TNNT",
            "cityname": "Tainan",
            "airportcode": "TNN",
            "airportname": "Tainan"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "TPET",
            "cityname": "Taipei",
            "airportcode": "TPE",
            "airportname": "Taipei Taiwan Taoyuan"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "TPET",
            "cityname": "Taipei",
            "airportcode": "TSA",
            "airportname": "Taipei Sung Shan"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "TTTT",
            "cityname": "Taitung",
            "airportcode": "TTT",
            "airportname": "Taitung"
        },
        {
            "countrycode": "TW",
            "countryname": "Taiwan",
            "citycode": "WOTT",
            "cityname": "Wonan",
            "airportcode": "WOT",
            "airportname": "Wonan"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "ARKA",
            "cityname": "Arusha",
            "airportcode": "ARK",
            "airportname": "Arusha"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "BKZA",
            "cityname": "Bukoba",
            "airportcode": "BKZ",
            "airportname": "Bukoba"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "DARA",
            "cityname": "Dar Es Salaam",
            "airportcode": "DAR",
            "airportname": "Dar Es Salaam"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "DODA",
            "cityname": "Dodoma",
            "airportcode": "DOD",
            "airportname": "Dodoma"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "GRUM",
            "cityname": "Grumeti",
            "airportcode": "GTZ",
            "airportname": "Grumeti Airstrip"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "IRIA",
            "cityname": "Iringa",
            "airportcode": "IRI",
            "airportname": "Iringa"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "JOMA",
            "cityname": "Njombe",
            "airportcode": "JOM",
            "airportname": "Njombe"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "JROA",
            "cityname": "Kilimanjaro",
            "airportcode": "JRO",
            "airportname": "Kilimanjaro"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "KIYA",
            "cityname": "Kilwa",
            "airportcode": "KIY",
            "airportname": "Kilwa"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "LKYA",
            "cityname": "Lake Manyara",
            "airportcode": "LKY",
            "airportname": "Lake Manyara"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "MBIA",
            "cityname": "Mbeya",
            "airportcode": "MBI",
            "airportname": "Mbeya"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "MFAA",
            "cityname": "Mafia",
            "airportcode": "MFA",
            "airportname": "Mafia"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "MUZA",
            "cityname": "Musoma",
            "airportcode": "MUZ",
            "airportname": "Musoma"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "MWZA",
            "cityname": "Mwanza",
            "airportcode": "MWZ",
            "airportname": "Mwanza"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "MYWA",
            "cityname": "Mtwara",
            "airportcode": "MYW",
            "airportname": "Mtwara"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "PMAA",
            "cityname": "Pemba",
            "airportcode": "PMA",
            "airportname": "Pemba"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "QSIA",
            "cityname": "Moshi",
            "airportcode": "QSI",
            "airportname": "Moshi"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "SEUA",
            "cityname": "Seronera",
            "airportcode": "SEU",
            "airportname": "Seronera"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "SGXA",
            "cityname": "Songea",
            "airportcode": "SGX",
            "airportname": "Songea"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "SUTA",
            "cityname": "Sumbawanga",
            "airportcode": "SUT",
            "airportname": "Sumbawanga"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "TBOA",
            "cityname": "Tabora",
            "airportcode": "TBO",
            "airportname": "Tabora"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "TGTA",
            "cityname": "Tanga",
            "airportcode": "TGT",
            "airportname": "Tanga"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "TKQA",
            "cityname": "Kigoma",
            "airportcode": "TKQ",
            "airportname": "Kigoma"
        },
        {
            "countrycode": "TZ",
            "countryname": "Tanzania",
            "citycode": "ZNZA",
            "cityname": "Zanzibar",
            "airportcode": "ZNZ",
            "airportname": "Zanzibar"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "CERW",
            "cityname": "Chernovtsy",
            "airportcode": "CWC",
            "airportname": "Chernovtsy"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "DNEP",
            "cityname": "Dnepropetrovsk",
            "airportcode": "DNK",
            "airportname": "Dnepropetrovsk"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "IVAN",
            "cityname": "Ivano-Frankovsk",
            "airportcode": "IFO",
            "airportname": "Ivano-Frankovsk"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "KHAR",
            "cityname": "Kharkov",
            "airportcode": "HRK",
            "airportname": "Kharkov"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "KHER",
            "cityname": "Kherson",
            "airportcode": "KHE",
            "airportname": "Kherson"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "KIEV",
            "cityname": "Kiev",
            "airportcode": "IEV",
            "airportname": "Kiev Zhulhany"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "KIEV",
            "cityname": "Kiev",
            "airportcode": "KBP",
            "airportname": "Kiev Borispol"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "LUGB",
            "cityname": "Lugansk",
            "airportcode": "VSG",
            "airportname": "Lugansk"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "LVOV",
            "cityname": "Lviv",
            "airportcode": "LWO",
            "airportname": "Lviv"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "MARL",
            "cityname": "Mariupol",
            "airportcode": "MPW",
            "airportname": "Mariupol"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "NIKO",
            "cityname": "Nikolaev",
            "airportcode": "NLV",
            "airportname": "Nikolaev"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "ODES",
            "cityname": "Odessa",
            "airportcode": "ODS",
            "airportname": "Odessa Central"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "UZHG",
            "cityname": "Uzhgorod",
            "airportcode": "UDJ",
            "airportname": "Uzhgorod"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "VINN",
            "cityname": "Vinnitsa",
            "airportcode": "VIN",
            "airportname": "Vinnitsa"
        },
        {
            "countrycode": "UA",
            "countryname": "Ukraine",
            "citycode": "ZAPO",
            "cityname": "Zaporozhye",
            "airportcode": "OZH",
            "airportname": "Zaporozhye"
        },
        {
            "countrycode": "UG",
            "countryname": "Uganda",
            "citycode": "EBBA",
            "cityname": "Entebbe",
            "airportcode": "EBB",
            "airportname": "Entebbe"
        },
        {
            "countrycode": "UG",
            "countryname": "Uganda",
            "citycode": "KSEA",
            "cityname": "Kasese",
            "airportcode": "KSE",
            "airportname": "Kasese"
        },
        {
            "countrycode": "UG",
            "countryname": "Uganda",
            "citycode": "PAFA",
            "cityname": "Pakuba",
            "airportcode": "PAF",
            "airportname": "Pakuba"
        },
        {
            "countrycode": "UG",
            "countryname": "Uganda",
            "citycode": "RUAA",
            "cityname": "Arua",
            "airportcode": "RUA",
            "airportname": "Arua"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "CBGA",
            "cityname": "Cambridge",
            "airportcode": "CBG",
            "airportname": "Cambridge"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "CEGA",
            "cityname": "Chester",
            "airportcode": "CEG",
            "airportname": "Chester"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "FIEA",
            "cityname": "Fair Isle",
            "airportcode": "FIE",
            "airportname": "Fair Isle"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "FOAA",
            "cityname": "Foula",
            "airportcode": "FOA",
            "airportname": "Foula"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "PSVA",
            "cityname": "Papa Stour",
            "airportcode": "PSV",
            "airportname": "Papa Stour"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "SUMB",
            "cityname": "Sumburgh",
            "airportcode": "LWK",
            "airportname": "Sumburgh Lerwick / Tingwall"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "ALDE",
            "cityname": "Alderney",
            "airportcode": "ACI",
            "airportname": "Alderney"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "BIRM",
            "cityname": "Birmingham",
            "airportcode": "BHX",
            "airportname": "Birmingham"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "BLAC",
            "cityname": "Blackpool",
            "airportcode": "BLK",
            "airportname": "Blackpool"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "BOUR",
            "cityname": "Bournemouth",
            "airportcode": "BOH",
            "airportname": "Bournemouth"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "BRIS",
            "cityname": "Bristol",
            "airportcode": "BRS",
            "airportname": "Bristol"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "CAST",
            "cityname": "Castletown",
            "airportcode": "IOM",
            "airportname": "Ronaldsway"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "DONC",
            "cityname": "Doncaster",
            "airportcode": "DSA",
            "airportname": "Doncaster Sheffield"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "EXET",
            "cityname": "Exeter",
            "airportcode": "EXT",
            "airportname": "Exeter"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "GLOA",
            "cityname": "Gloucester",
            "airportcode": "GLO",
            "airportname": "Gloucestershire"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "HUMB",
            "cityname": "Humberside",
            "airportcode": "HUY",
            "airportname": "Humberside"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "JERS",
            "cityname": "Jersey",
            "airportcode": "JER",
            "airportname": "Jersey"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LEED",
            "cityname": "Leeds",
            "airportcode": "LBA",
            "airportname": "Leeds Bradford"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LEQA",
            "cityname": "Lands End",
            "airportcode": "LEQ",
            "airportname": "Lands End"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LIVE",
            "cityname": "Liverpool",
            "airportcode": "LPL",
            "airportname": "Liverpool"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LOND",
            "cityname": "London",
            "airportcode": "LCY",
            "airportname": "London City"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LOND",
            "cityname": "London",
            "airportcode": "LGW",
            "airportname": "London Gatwick"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LOND",
            "cityname": "London",
            "airportcode": "LHR",
            "airportname": "London Heathrow"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LOND",
            "cityname": "London",
            "airportcode": "LTN",
            "airportname": "London Luton"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LOND",
            "cityname": "London",
            "airportcode": "SEN",
            "airportname": "London Southend"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LOND",
            "cityname": "London",
            "airportcode": "STN",
            "airportname": "London Stansted"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "LYXA",
            "cityname": "Lydd",
            "airportcode": "LYX",
            "airportname": "Lydd"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "MANC",
            "cityname": "Manchester",
            "airportcode": "MAN",
            "airportname": "Manchester"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "MMEA",
            "cityname": "Durham",
            "airportcode": "MME",
            "airportname": "Durham Tees Valley"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "MSEA",
            "cityname": "Manston",
            "airportcode": "MSE",
            "airportname": "Kent International Airport (Manston)"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "NEWC",
            "cityname": "Newcastle",
            "airportcode": "NCL",
            "airportname": "Newcastle"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "NEWQ",
            "cityname": "Newquay",
            "airportcode": "NQY",
            "airportname": "Newquay"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "NORW",
            "cityname": "Norwich",
            "airportcode": "NWI",
            "airportname": "Norwich"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "NOTT",
            "cityname": "Nottingham",
            "airportcode": "EMA",
            "airportname": "East Midlands"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "SCIL",
            "cityname": "Isles Of Scilly",
            "airportcode": "ISC",
            "airportname": "Isles of Scilly St. Mary's"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "SOUT",
            "cityname": "Southampton",
            "airportcode": "SOU",
            "airportname": "Southampton"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "BELF",
            "cityname": "Belfast",
            "airportcode": "BFS",
            "airportname": "Belfast International"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "BELF",
            "cityname": "Belfast",
            "airportcode": "BHD",
            "airportname": "Belfast City"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "DERR",
            "cityname": "Derry",
            "airportcode": "LDY",
            "airportname": "Derry"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "ABER",
            "cityname": "Aberdeen",
            "airportcode": "ABZ",
            "airportname": "Aberdeen"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "BARR",
            "cityname": "Barra",
            "airportcode": "BRR",
            "airportname": "Barra"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "BENB",
            "cityname": "Benbecula",
            "airportcode": "BEB",
            "airportname": "Benbecula"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "CAMP",
            "cityname": "Campbeltown",
            "airportcode": "CAL",
            "airportname": "Campbeltown"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "COLA",
            "cityname": "Coll Island",
            "airportcode": "COL",
            "airportname": "Coll Island"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "CSAA",
            "cityname": "Colonsay Is",
            "airportcode": "CSA",
            "airportname": "Colonsay Is"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "DUND",
            "cityname": "Dundee",
            "airportcode": "DND",
            "airportname": "Dundee"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "EDIN",
            "cityname": "Edinburgh",
            "airportcode": "EDI",
            "airportname": "Edinburgh"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "EOIA",
            "cityname": "Eday",
            "airportcode": "EOI",
            "airportname": "Eday"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "GLAS",
            "cityname": "Glasgow",
            "airportcode": "GLA",
            "airportname": "Glasgow International"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "GLAS",
            "cityname": "Glasgow",
            "airportcode": "PIK",
            "airportname": "Glasgow Prestwick"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "INVE",
            "cityname": "Inverness",
            "airportcode": "INV",
            "airportname": "Inverness"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "ISLA",
            "cityname": "Islay",
            "airportcode": "ILY",
            "airportname": "Islay Glenegedale"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "NDYA",
            "cityname": "Sanday",
            "airportcode": "NDY",
            "airportname": "Sanday"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "NRLA",
            "cityname": "North Ronaldsay",
            "airportcode": "NRL",
            "airportname": "North Ronaldsay"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "OBNA",
            "cityname": "Oban",
            "airportcode": "OBN",
            "airportname": "Oban Connel"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "ORKN",
            "cityname": "Orkney",
            "airportcode": "KOI",
            "airportname": "Orkney Kirkwall"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "PPWA",
            "cityname": "Papa Westray",
            "airportcode": "PPW",
            "airportname": "Papa Westray"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "SOYA",
            "cityname": "Stronsay",
            "airportcode": "SOY",
            "airportname": "Stronsay"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "STOR",
            "cityname": "Stornoway",
            "airportcode": "SYY",
            "airportname": "Stornoway"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "SUMB",
            "cityname": "Sumburgh",
            "airportcode": "LSI",
            "airportname": "Sumburgh Shetland"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "TIRE",
            "cityname": "Tiree",
            "airportcode": "TRE",
            "airportname": "Tiree"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "WICK",
            "cityname": "Wick",
            "airportcode": "WIC",
            "airportname": "Wick"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "WRYA",
            "cityname": "Westray",
            "airportcode": "WRY",
            "airportname": "Westray"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "ANGA",
            "cityname": "Anglesey",
            "airportcode": "VLY",
            "airportname": "Anglesey"
        },
        {
            "countrycode": "UK",
            "countryname": "United Kingdom",
            "citycode": "CARD",
            "cityname": "Cardiff",
            "airportcode": "CWL",
            "airportname": "Cardiff"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ATLA",
            "cityname": "Atlanta",
            "airportcode": "PDK",
            "airportname": "Atlanta De Kalb / Peachtree"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CDVA",
            "cityname": "Cordova",
            "airportcode": "CKU",
            "airportname": "Cordova City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CLRA",
            "cityname": "Calipatria",
            "airportcode": "CLR",
            "airportname": "Calipatria"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DSIA",
            "cityname": "Destin",
            "airportcode": "DSI",
            "airportname": "Destin"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ERRB",
            "cityname": "Errol",
            "airportcode": "ERR",
            "airportname": "Errol"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FHUA",
            "cityname": "Fort Huachuca",
            "airportcode": "FHU",
            "airportname": "Fort Huachuca"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FNLA",
            "cityname": "Fort Collins",
            "airportcode": "FNL",
            "airportname": "Fort Collins Loveland Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JRFA",
            "cityname": "Kapolei",
            "airportcode": "JRF",
            "airportname": "Kalaeloa"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MIAA",
            "cityname": "Miami",
            "airportcode": "MPB",
            "airportname": "Miami SPB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MLKA",
            "cityname": "Malta",
            "airportcode": "MLK",
            "airportname": "Malta"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MVLA",
            "cityname": "Stowe",
            "airportcode": "MVL",
            "airportname": "Morrisville-Stowe"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TOCA",
            "cityname": "Toccoa",
            "airportcode": "TOC",
            "airportname": "Toccoa"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "UTOA",
            "cityname": "Utopia Creek",
            "airportcode": "UTO",
            "airportname": "Utopia Creek"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VRBA",
            "cityname": "Vero Beach",
            "airportcode": "VRB",
            "airportname": "Vero Beach"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BHMA",
            "cityname": "Birmingham",
            "airportcode": "BHM",
            "airportname": "Birmingham"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DHNA",
            "cityname": "Dothan",
            "airportcode": "DHN",
            "airportname": "Dothan"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HSVA",
            "cityname": "Huntsville",
            "airportcode": "HSV",
            "airportname": "Huntsville International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MGMA",
            "cityname": "Montgomery",
            "airportcode": "MGM",
            "airportname": "Montgomery Dannelly Fld"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MOBA",
            "cityname": "Mobile",
            "airportcode": "MOB",
            "airportname": "Mobile Municipal Arpt"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MSLA",
            "cityname": "Muscle Shoals",
            "airportcode": "MSL",
            "airportname": "Muscle Shoals"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ABLA",
            "cityname": "Ambler",
            "airportcode": "ABL",
            "airportname": "Ambler"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ADKA",
            "cityname": "Adak Island",
            "airportcode": "ADK",
            "airportname": "Adak Island"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ADQA",
            "cityname": "Kodiak",
            "airportcode": "ADQ",
            "airportname": "Kodiak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AETA",
            "cityname": "Allakaket",
            "airportcode": "AET",
            "airportname": "Allakaket"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AGNA",
            "cityname": "Angoon",
            "airportcode": "AGN",
            "airportname": "Angoon"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AINA",
            "cityname": "Wainwright",
            "airportcode": "AIN",
            "airportname": "Wainwright"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AKBA",
            "cityname": "Atka",
            "airportcode": "AKB",
            "airportname": "Atka"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AKIA",
            "cityname": "Akiak",
            "airportcode": "AKI",
            "airportname": "Akiak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AKKA",
            "cityname": "Akhiok",
            "airportcode": "AKK",
            "airportname": "Akhiok"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AKNA",
            "cityname": "King Salmon",
            "airportcode": "AKN",
            "airportname": "King Salmon"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AKPA",
            "cityname": "Anaktuvuk",
            "airportcode": "AKP",
            "airportname": "Anaktuvuk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ALZA",
            "cityname": "Alitak",
            "airportcode": "ALZ",
            "airportname": "Alitak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ANCA",
            "cityname": "Anchorage",
            "airportcode": "ANC",
            "airportname": "Anchorage International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ANIA",
            "cityname": "Aniak",
            "airportcode": "ANI",
            "airportname": "Aniak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ANVA",
            "cityname": "Anvik",
            "airportcode": "ANV",
            "airportname": "Anvik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AOSA",
            "cityname": "Amook",
            "airportcode": "AOS",
            "airportname": "Amook"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ARCA",
            "cityname": "Arctic Village",
            "airportcode": "ARC",
            "airportname": "Arctic Village"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ATKA",
            "cityname": "Atqasuk",
            "airportcode": "ATK",
            "airportname": "Atqasuk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ATTA",
            "cityname": "Atmautluak",
            "airportcode": "ATT",
            "airportname": "Atmautluak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AUKA",
            "cityname": "Alakanuk",
            "airportcode": "AUK",
            "airportname": "Alakanuk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BETA",
            "cityname": "Bethel",
            "airportcode": "BET",
            "airportname": "Bethel"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BKCA",
            "cityname": "Buckland",
            "airportcode": "BKC",
            "airportname": "Buckland"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BRWA",
            "cityname": "Barrow",
            "airportcode": "BRW",
            "airportname": "Barrow Wiley Post / W.Rogers M"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BTIA",
            "cityname": "Barter Island",
            "airportcode": "BTI",
            "airportname": "Barter Island"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BTTA",
            "cityname": "Bettles",
            "airportcode": "BTT",
            "airportname": "Bettles"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CDBA",
            "cityname": "Cold Bay",
            "airportcode": "CDB",
            "airportname": "Cold Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CDVA",
            "cityname": "Cordova",
            "airportcode": "CDV",
            "airportname": "Cordova Mudhole Smith"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CEMA",
            "cityname": "Central",
            "airportcode": "CEM",
            "airportname": "Central"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CGAA",
            "cityname": "Craig",
            "airportcode": "CGA",
            "airportname": "Craig"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CHUA",
            "cityname": "Chuathbaluk",
            "airportcode": "CHU",
            "airportname": "Chuathbaluk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CIKA",
            "cityname": "Chalkyitsik",
            "airportcode": "CIK",
            "airportname": "Chalkyitsik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CKDA",
            "cityname": "Crooked Creek",
            "airportcode": "CKD",
            "airportname": "Crooked Creek"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CKXA",
            "cityname": "Chicken",
            "airportcode": "CKX",
            "airportname": "Chicken"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CLPA",
            "cityname": "Clarks Point",
            "airportcode": "CLP",
            "airportname": "Clarks Point"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CXFA",
            "cityname": "Coldfoot",
            "airportcode": "CXF",
            "airportname": "Coldfoot"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CYFA",
            "cityname": "Chefornak",
            "airportcode": "CYF",
            "airportname": "Chefornak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DLGA",
            "cityname": "Dillingham",
            "airportcode": "DLG",
            "airportname": "Dillingham"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DOFA",
            "cityname": "Dora Bay",
            "airportcode": "DOF",
            "airportname": "Dora Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DRGA",
            "cityname": "Deering",
            "airportcode": "DRG",
            "airportname": "Deering"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DUTA",
            "cityname": "Dutch Harbor",
            "airportcode": "DUT",
            "airportname": "Dutch Harbor"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EAAA",
            "cityname": "Eagle",
            "airportcode": "EAA",
            "airportname": "Eagle"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EDAA",
            "cityname": "Edna Bay",
            "airportcode": "EDA",
            "airportname": "Edna Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EEKA",
            "cityname": "Eek",
            "airportcode": "EEK",
            "airportname": "Eek"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EGXA",
            "cityname": "Egegik",
            "airportcode": "EGX",
            "airportname": "Egegik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ELIA",
            "cityname": "Elim",
            "airportcode": "ELI",
            "airportname": "Elim"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ELVA",
            "cityname": "Elfin Cove",
            "airportcode": "ELV",
            "airportname": "Elfin Cove"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EMKA",
            "cityname": "Emmonak",
            "airportcode": "EMK",
            "airportname": "Emmonak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ENAA",
            "cityname": "Kenai",
            "airportcode": "ENA",
            "airportname": "Kenai"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EXIA",
            "cityname": "Excursion Inlet",
            "airportcode": "EXI",
            "airportname": "Excursion Inlet"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FAIA",
            "cityname": "Fairbanks",
            "airportcode": "FAI",
            "airportname": "Fairbanks International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FYUA",
            "cityname": "Fort Yukon",
            "airportcode": "FYU",
            "airportname": "Fort Yukon"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GALA",
            "cityname": "Galena",
            "airportcode": "GAL",
            "airportname": "Galena"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GAMA",
            "cityname": "Gambell",
            "airportcode": "GAM",
            "airportname": "Gambell"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GLVA",
            "cityname": "Golovin",
            "airportcode": "GLV",
            "airportname": "Golovin"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GNUA",
            "cityname": "Goodnews Bay",
            "airportcode": "GNU",
            "airportname": "Goodnews Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GSTA",
            "cityname": "Gustavus",
            "airportcode": "GST",
            "airportname": "Gustavus Arpt"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HCRA",
            "cityname": "Holy Cross",
            "airportcode": "HCR",
            "airportname": "Holy Cross"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HKBA",
            "cityname": "Healy Lake",
            "airportcode": "HKB",
            "airportname": "Healy Lake"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HNHA",
            "cityname": "Hoonah",
            "airportcode": "HNH",
            "airportname": "Hoonah"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HNSA",
            "cityname": "Haines",
            "airportcode": "HNS",
            "airportname": "Haines"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HOMA",
            "cityname": "Homer",
            "airportcode": "HOM",
            "airportname": "Homer"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HPBA",
            "cityname": "Hooper Bay",
            "airportcode": "HPB",
            "airportname": "Hooper Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HSLA",
            "cityname": "Huslia",
            "airportcode": "HSL",
            "airportname": "Huslia"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HUSB",
            "cityname": "Hughes",
            "airportcode": "HUS",
            "airportname": "Hughes Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HYGA",
            "cityname": "Hydaburg",
            "airportcode": "HYG",
            "airportname": "Hydaburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HYLA",
            "cityname": "Hollis",
            "airportcode": "HYL",
            "airportname": "Hollis"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IANA",
            "cityname": "Kiana",
            "airportcode": "IAN",
            "airportname": "Kiana"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IGGA",
            "cityname": "Igiugig",
            "airportcode": "IGG",
            "airportname": "Igiugig"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IKOA",
            "cityname": "Nikolski",
            "airportcode": "IKO",
            "airportname": "Nikolski"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ILIA",
            "cityname": "Iliamna",
            "airportcode": "ILI",
            "airportname": "Iliamna"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IRCA",
            "cityname": "Circle",
            "airportcode": "IRC",
            "airportname": "Circle"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JNUA",
            "cityname": "Juneau",
            "airportcode": "JNU",
            "airportname": "Juneau"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KAEA",
            "cityname": "Kake",
            "airportcode": "KAE",
            "airportname": "Kake"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KALB",
            "cityname": "Kaltag",
            "airportcode": "KAL",
            "airportname": "Kaltag"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KBCA",
            "cityname": "Birch Creek",
            "airportcode": "KBC",
            "airportname": "Birch Creek"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KCCA",
            "cityname": "Coffman Cove",
            "airportcode": "KCC",
            "airportname": "Coffman Cove"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KCLA",
            "cityname": "Chignik",
            "airportcode": "KCG",
            "airportname": "Chignik Fisheries"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KCLA",
            "cityname": "Chignik",
            "airportcode": "KCL",
            "airportname": "Chignik Lagoon"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KCLA",
            "cityname": "Chignik",
            "airportcode": "KCQ",
            "airportname": "Chignik Lake"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KEBA",
            "cityname": "Nanwalek",
            "airportcode": "KEB",
            "airportname": "Nanwalek"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KEKA",
            "cityname": "Ekwok",
            "airportcode": "KEK",
            "airportname": "Ekwok"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KFPA",
            "cityname": "False Pass",
            "airportcode": "KFP",
            "airportname": "False Pass"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KGKA",
            "cityname": "New Koliganek",
            "airportcode": "KGK",
            "airportname": "New Koliganek"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KGXA",
            "cityname": "Grayling",
            "airportcode": "KGX",
            "airportname": "Grayling"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KKAA",
            "cityname": "Koyuk",
            "airportcode": "KKA",
            "airportname": "Koyuk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KKBA",
            "cityname": "Kitoi Bay",
            "airportcode": "KKB",
            "airportname": "Kitoi Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KKHA",
            "cityname": "Kongiganak",
            "airportcode": "KKH",
            "airportname": "Kongiganak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KLGA",
            "cityname": "Kalskag",
            "airportcode": "KLG",
            "airportname": "Kalskag"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KLLA",
            "cityname": "Levelock",
            "airportcode": "KLL",
            "airportname": "Levelock"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KLNA",
            "cityname": "Larsen Bay",
            "airportcode": "KLN",
            "airportname": "Larsen Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KLWA",
            "cityname": "Klawock",
            "airportcode": "KLW",
            "airportname": "Klawock"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KMOA",
            "cityname": "Manokotak",
            "airportcode": "KMO",
            "airportname": "Manokotak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KMYA",
            "cityname": "Moser Bay",
            "airportcode": "KMY",
            "airportname": "Moser Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KNKA",
            "cityname": "Kakhonak",
            "airportcode": "KNK",
            "airportname": "Kakhonak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KNWA",
            "cityname": "New Stuyahok",
            "airportcode": "KNW",
            "airportname": "New Stuyahok"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KOTA",
            "cityname": "Kotlik",
            "airportcode": "KOT",
            "airportname": "Kotlik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KOYA",
            "cityname": "Olga Bay",
            "airportcode": "KOY",
            "airportname": "Olga Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KOZB",
            "cityname": "Ouzinkie",
            "airportcode": "KOZ",
            "airportname": "Ouzinkie SPB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KPBA",
            "cityname": "Point Baker",
            "airportcode": "KPB",
            "airportname": "Point Baker"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KPNA",
            "cityname": "Kipnuk",
            "airportcode": "KPN",
            "airportname": "Kipnuk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KPRA",
            "cityname": "Port Williams",
            "airportcode": "KPR",
            "airportname": "Port Williams"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KPVA",
            "cityname": "Perryville",
            "airportcode": "KPV",
            "airportname": "Perryville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KPYA",
            "cityname": "Port Bailey",
            "airportcode": "KPY",
            "airportname": "Port Bailey"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KQAA",
            "cityname": "Akutan",
            "airportcode": "KQA",
            "airportname": "Akutan"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KSMA",
            "cityname": "Saint Marys",
            "airportcode": "KSM",
            "airportname": "Saint Marys"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KTBA",
            "cityname": "Thorne Bay",
            "airportcode": "KTB",
            "airportname": "Thorne Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KTNA",
            "cityname": "Ketchikan",
            "airportcode": "KTN",
            "airportname": "Ketchikan International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KTNA",
            "cityname": "Ketchikan",
            "airportcode": "WFB",
            "airportname": "Ketchikan Waterfront SPB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KTSA",
            "cityname": "Teller Mission",
            "airportcode": "KTS",
            "airportname": "Teller Mission"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KUKA",
            "cityname": "Kasigluk",
            "airportcode": "KUK",
            "airportname": "Kasigluk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KVCA",
            "cityname": "King Cove",
            "airportcode": "KVC",
            "airportname": "King Cove"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KVLA",
            "cityname": "Kivalina",
            "airportcode": "KVL",
            "airportname": "Kivalina"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KWFA",
            "cityname": "Waterfall",
            "airportcode": "KWF",
            "airportname": "Waterfall"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KWKA",
            "cityname": "Kwigillingok",
            "airportcode": "KWK",
            "airportname": "Kwigillingok"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KWNA",
            "cityname": "Quinhagak",
            "airportcode": "KWN",
            "airportname": "Quinhagak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KWPA",
            "cityname": "West Point",
            "airportcode": "KWP",
            "airportname": "West Point"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KWTA",
            "cityname": "Kwethluk",
            "airportcode": "KWT",
            "airportname": "Kwethluk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KXAA",
            "cityname": "Kasaan",
            "airportcode": "KXA",
            "airportname": "Kasaan"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KYKA",
            "cityname": "Karluk",
            "airportcode": "KYK",
            "airportname": "Karluk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KYUA",
            "cityname": "Koyukuk",
            "airportcode": "KYU",
            "airportname": "Koyukuk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KZBA",
            "cityname": "Zachar Bay",
            "airportcode": "KZB",
            "airportname": "Zachar Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LMAA",
            "cityname": "Lake Minchumina",
            "airportcode": "LMA",
            "airportname": "Lake Minchumina"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LURA",
            "cityname": "Cape Lisburne",
            "airportcode": "LUR",
            "airportname": "Cape Lisburne"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MCGA",
            "cityname": "Mcgrath",
            "airportcode": "MCG",
            "airportname": "Mcgrath"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MLLA",
            "cityname": "Marshall",
            "airportcode": "MLL",
            "airportname": "Marshall"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MLYA",
            "cityname": "Manley Hot Springs",
            "airportcode": "MLY",
            "airportname": "Manley Hot Springs"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MNTA",
            "cityname": "Minto",
            "airportcode": "MNT",
            "airportname": "Minto"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MOUA",
            "cityname": "Mountain Village",
            "airportcode": "MOU",
            "airportname": "Mountain Village"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MTMA",
            "cityname": "Metlakatla",
            "airportcode": "MTM",
            "airportname": "Metlakatla"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MYUA",
            "cityname": "Mekoryuk",
            "airportcode": "MYU",
            "airportname": "Mekoryuk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NIBA",
            "cityname": "Nikolai",
            "airportcode": "NIB",
            "airportname": "Nikolai"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NKIA",
            "cityname": "Naukiti",
            "airportcode": "NKI",
            "airportname": "Naukiti"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NLGA",
            "cityname": "Nelson Lagoon",
            "airportcode": "NLG",
            "airportname": "Nelson Lagoon"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NMEA",
            "cityname": "Nightmute",
            "airportcode": "NME",
            "airportname": "Nightmute"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NNLA",
            "cityname": "Nondalton",
            "airportcode": "NNL",
            "airportname": "Nondalton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NUIA",
            "cityname": "Nuiqsut",
            "airportcode": "NUI",
            "airportname": "Nuiqsut"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NULA",
            "cityname": "Nulato",
            "airportcode": "NUL",
            "airportname": "Nulato"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NUPA",
            "cityname": "Nunapitchuk",
            "airportcode": "NUP",
            "airportname": "Nunapitchuk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OBUA",
            "cityname": "Kobuk",
            "airportcode": "OBU",
            "airportname": "Kobuk / Wien"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OLHA",
            "cityname": "Old Harbor",
            "airportcode": "OLH",
            "airportname": "Old Harbor"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OMEA",
            "cityname": "Nome",
            "airportcode": "OME",
            "airportname": "Nome"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OOKA",
            "cityname": "Toksook Bay",
            "airportcode": "OOK",
            "airportname": "Toksook Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ORIA",
            "cityname": "Port Lions",
            "airportcode": "ORI",
            "airportname": "Port Lions"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ORVA",
            "cityname": "Noorvik",
            "airportcode": "ORV",
            "airportname": "Noorvik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OTZA",
            "cityname": "Kotzebue",
            "airportcode": "OTZ",
            "airportname": "Kotzebue"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PDBA",
            "cityname": "Pedro Bay",
            "airportcode": "PDB",
            "airportname": "Pedro Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PECA",
            "cityname": "Pelican",
            "airportcode": "PEC",
            "airportname": "Pelican"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PGMA",
            "cityname": "Port Graham",
            "airportcode": "PGM",
            "airportname": "Port Graham"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PHOA",
            "cityname": "Point Hope",
            "airportcode": "PHO",
            "airportname": "Point Hope"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PIPA",
            "cityname": "Pilot Point",
            "airportcode": "PIP",
            "airportname": "Pilot Point Arpt"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PIPA",
            "cityname": "Pilot Point",
            "airportcode": "UGB",
            "airportname": "Pilot Point Ugashik Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PIZA",
            "cityname": "Point Lay",
            "airportcode": "PIZ",
            "airportname": "Point Lay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PKAA",
            "cityname": "Napaskiak",
            "airportcode": "PKA",
            "airportname": "Napaskiak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PMLA",
            "cityname": "Port Moller",
            "airportcode": "PML",
            "airportname": "Port Moller"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PPVA",
            "cityname": "Port Protection",
            "airportcode": "PPV",
            "airportname": "Port Protection"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PQSA",
            "cityname": "Pilot Station",
            "airportcode": "PQS",
            "airportname": "Pilot Station"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PSGA",
            "cityname": "Petersburg",
            "airportcode": "PSG",
            "airportname": "Petersburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PTAA",
            "cityname": "Port Alsworth",
            "airportcode": "PTA",
            "airportname": "Port Alsworth"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PTHA",
            "cityname": "Port Heiden",
            "airportcode": "PTH",
            "airportname": "Port Heiden"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PTUA",
            "cityname": "Platinum",
            "airportcode": "PTU",
            "airportname": "Platinum"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RBYA",
            "cityname": "Ruby",
            "airportcode": "RBY",
            "airportname": "Ruby"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RDVA",
            "cityname": "Red Devil",
            "airportcode": "RDV",
            "airportname": "Red Devil"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RMPA",
            "cityname": "Rampart",
            "airportcode": "RMP",
            "airportname": "Rampart"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RSHA",
            "cityname": "Russian Mission",
            "airportcode": "RSH",
            "airportname": "Russian Mission"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SCCA",
            "cityname": "Deadhorse",
            "airportcode": "SCC",
            "airportname": "Deadhorse (Prudhoe Bay)"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SCMA",
            "cityname": "Scammon Bay",
            "airportcode": "SCM",
            "airportname": "Scammon Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SDPA",
            "cityname": "Sand Point",
            "airportcode": "SDP",
            "airportname": "Sand Point"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SGYA",
            "cityname": "Skagway",
            "airportcode": "SGY",
            "airportname": "Skagway"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SHGA",
            "cityname": "Shungnak",
            "airportcode": "SHG",
            "airportname": "Shungnak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SHHA",
            "cityname": "Shishmaref",
            "airportcode": "SHH",
            "airportname": "Shishmaref"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SHXA",
            "cityname": "Shageluk",
            "airportcode": "SHX",
            "airportname": "Shageluk"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SITA",
            "cityname": "Sitka",
            "airportcode": "SIT",
            "airportname": "Sitka"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SKKA",
            "cityname": "Shaktoolik",
            "airportcode": "SKK",
            "airportname": "Shaktoolik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SLQA",
            "cityname": "Sleetmute",
            "airportcode": "SLQ",
            "airportname": "Sleetmute"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SMKA",
            "cityname": "St Michael",
            "airportcode": "SMK",
            "airportname": "St Michael"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SNPA",
            "cityname": "Saint Paul Island",
            "airportcode": "SNP",
            "airportname": "Saint Paul Island"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SOVA",
            "cityname": "Seldovia",
            "airportcode": "SOV",
            "airportname": "Seldovia"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SRVA",
            "cityname": "Stony River",
            "airportcode": "SRV",
            "airportname": "Stony River"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "STGA",
            "cityname": "St George Island",
            "airportcode": "STG",
            "airportname": "St George Island"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SVAA",
            "cityname": "Savoonga",
            "airportcode": "SVA",
            "airportname": "Savoonga"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SVSA",
            "cityname": "Stevens Village",
            "airportcode": "SVS",
            "airportname": "Stevens Village"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SXPA",
            "cityname": "Sheldon Point",
            "airportcode": "SXP",
            "airportname": "Sheldon Point"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SYBA",
            "cityname": "Seal Bay",
            "airportcode": "SYB",
            "airportname": "Seal Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TALA",
            "cityname": "Tanana",
            "airportcode": "TAL",
            "airportname": "Tanana"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TCTA",
            "cityname": "Takotna",
            "airportcode": "TCT",
            "airportname": "Takotna"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TKEA",
            "cityname": "Tenakee Springs",
            "airportcode": "TKE",
            "airportname": "Tenakee Springs"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TKJA",
            "cityname": "Tok",
            "airportcode": "TKJ",
            "airportname": "Tok"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TLAA",
            "cityname": "Teller",
            "airportcode": "TLA",
            "airportname": "Teller"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TLJA",
            "cityname": "Tatalina",
            "airportcode": "TLJ",
            "airportname": "Tatalina"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TLTA",
            "cityname": "Tuluksak",
            "airportcode": "TLT",
            "airportname": "Tuluksak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TNCA",
            "cityname": "Tin City",
            "airportcode": "TNC",
            "airportname": "Tin City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TNKA",
            "cityname": "Tununak",
            "airportcode": "TNK",
            "airportname": "Tununak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TOGA",
            "cityname": "Togiak Village",
            "airportcode": "TOG",
            "airportname": "Togiak Village"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TWAA",
            "cityname": "Twin Hills",
            "airportcode": "TWA",
            "airportname": "Twin Hills"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "UGIA",
            "cityname": "Uganik",
            "airportcode": "UGI",
            "airportname": "Uganik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "UNKA",
            "cityname": "Unalakleet",
            "airportcode": "UNK",
            "airportname": "Unalakleet"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VAKA",
            "cityname": "Chevak",
            "airportcode": "VAK",
            "airportname": "Chevak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VDZA",
            "cityname": "Valdez",
            "airportcode": "VDZ",
            "airportname": "Valdez"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VEEA",
            "cityname": "Venetie",
            "airportcode": "VEE",
            "airportname": "Venetie"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WAAA",
            "cityname": "Wales",
            "airportcode": "WAA",
            "airportname": "Wales"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WBBA",
            "cityname": "Stebbins",
            "airportcode": "WBB",
            "airportname": "Stebbins"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WBQA",
            "cityname": "Beaver",
            "airportcode": "WBQ",
            "airportname": "Beaver"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WHDA",
            "cityname": "Hyder",
            "airportcode": "WHD",
            "airportname": "Hyder"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WKKA",
            "cityname": "Aleknagik",
            "airportcode": "WKK",
            "airportname": "Aleknagik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WLKA",
            "cityname": "Selawik",
            "airportcode": "WLK",
            "airportname": "Selawik"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WMKA",
            "cityname": "Meyers Chuck",
            "airportcode": "WMK",
            "airportname": "Meyers Chuck"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WMOA",
            "cityname": "White Mountain",
            "airportcode": "WMO",
            "airportname": "White Mountain"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WNAA",
            "cityname": "Napakiak",
            "airportcode": "WNA",
            "airportname": "Napakiak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WRGA",
            "cityname": "Wrangell",
            "airportcode": "WRG",
            "airportname": "Wrangell"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WSNA",
            "cityname": "South Naknek",
            "airportcode": "WSN",
            "airportname": "South Naknek"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WTKA",
            "cityname": "Noatak",
            "airportcode": "WTK",
            "airportname": "Noatak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WTLA",
            "cityname": "Tuntutuliak",
            "airportcode": "WTL",
            "airportname": "Tuntutuliak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WWPA",
            "cityname": "Whale Pass",
            "airportcode": "WWP",
            "airportname": "Whale Pass"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WWTA",
            "cityname": "Newtok",
            "airportcode": "WWT",
            "airportname": "Newtok"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "YAKA",
            "cityname": "Yakutat",
            "airportcode": "YAK",
            "airportname": "Yakutat"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GCNA",
            "cityname": "Grand Canyon",
            "airportcode": "FLG",
            "airportname": "Grand Canyon Pulliam Field"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GCNA",
            "cityname": "Grand Canyon",
            "airportcode": "GCN",
            "airportname": "Grand Canyon National Park"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IFPA",
            "cityname": "Bullhead City",
            "airportcode": "IFP",
            "airportname": "Bullhead City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PGAA",
            "cityname": "Page",
            "airportcode": "PGA",
            "airportname": "Page"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PGSA",
            "cityname": "Peach Springs",
            "airportcode": "GCW",
            "airportname": "Peach Springs Grand Canyon West"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PHXA",
            "cityname": "Phoenix",
            "airportcode": "AZA",
            "airportname": "Phoenix-Mesa Gateway"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PHXA",
            "cityname": "Phoenix",
            "airportcode": "PHX",
            "airportname": "Phoenix Sky Harbor"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PRCA",
            "cityname": "Prescott",
            "airportcode": "PRC",
            "airportname": "Prescott"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SOWA",
            "cityname": "Show Low",
            "airportcode": "SOW",
            "airportname": "Show Low"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TUSA",
            "cityname": "Tucson",
            "airportcode": "TUS",
            "airportname": "Tucson International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "YUMA",
            "cityname": "Yuma",
            "airportcode": "YUM",
            "airportname": "Yuma International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ELDA",
            "cityname": "El Dorado",
            "airportcode": "ELD",
            "airportname": "El Dorado"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FSMA",
            "cityname": "Fort Smith",
            "airportcode": "FSM",
            "airportname": "Fort Smith"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FYVA",
            "cityname": "Fayetteville",
            "airportcode": "FYV",
            "airportname": "Fayetteville Municipal (Drake Fld)"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FYVA",
            "cityname": "Fayetteville",
            "airportcode": "XNA",
            "airportname": "Fayetteville Northwest Arkansas Rgn"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HOTB",
            "cityname": "Hot Springs",
            "airportcode": "HOT",
            "airportname": "Hot Springs"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HROA",
            "cityname": "Harrison",
            "airportcode": "HRO",
            "airportname": "Harrison"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JBRA",
            "cityname": "Jonesboro",
            "airportcode": "JBR",
            "airportname": "Jonesboro"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LITA",
            "cityname": "Little Rock",
            "airportcode": "LIT",
            "airportname": "Little Rock"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SGTA",
            "cityname": "Stuttgart",
            "airportcode": "SGT",
            "airportname": "Stuttgart"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TXKA",
            "cityname": "Texarkana",
            "airportcode": "TXK",
            "airportname": "Texarkana"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ACVA",
            "cityname": "Arcata",
            "airportcode": "ACV",
            "airportname": "Arcata"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BFLA",
            "cityname": "Bakersfield",
            "airportcode": "BFL",
            "airportname": "Bakersfield"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BURA",
            "cityname": "Burbank",
            "airportcode": "BUR",
            "airportname": "Burbank"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CECA",
            "cityname": "Crescent City",
            "airportcode": "CEC",
            "airportname": "Crescent City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CICA",
            "cityname": "Chico",
            "airportcode": "CIC",
            "airportname": "Chico"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CSLA",
            "cityname": "San Luis Obispo",
            "airportcode": "SBP",
            "airportname": "San Luis Obispo County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FATA",
            "cityname": "Fresno",
            "airportcode": "FAT",
            "airportname": "Fresno Yosemite"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HLIB",
            "cityname": "Branson",
            "airportcode": "BKG",
            "airportname": "Branson"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IPLA",
            "cityname": "Imperial",
            "airportcode": "IPL",
            "airportname": "Imperial County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KKIA",
            "cityname": "Akiachak",
            "airportcode": "KKI",
            "airportname": "Akiachak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LAXA",
            "cityname": "Los Angeles",
            "airportcode": "LAX",
            "airportname": "Los Angeles International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LGBA",
            "cityname": "Long Beach",
            "airportcode": "LGB",
            "airportname": "Long Beach Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MCEA",
            "cityname": "Merced",
            "airportcode": "MCE",
            "airportname": "Merced Municipal Arpt"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MMHA",
            "cityname": "Mammoth Lakes",
            "airportcode": "MMH",
            "airportname": "Mammoth Lakes"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MODA",
            "cityname": "Modesto",
            "airportcode": "MOD",
            "airportname": "Modesto"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MRYA",
            "cityname": "Carmel",
            "airportcode": "MRY",
            "airportname": "Carmel Monterey Peninsula"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OAKA",
            "cityname": "Oakland",
            "airportcode": "OAK",
            "airportname": "Oakland Metropolitan Oak"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ONTA",
            "cityname": "Ontario",
            "airportcode": "ONT",
            "airportname": "Ontario International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PSPA",
            "cityname": "Palm Springs",
            "airportcode": "PSP",
            "airportname": "Palm Springs Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RALA",
            "cityname": "Riverside",
            "airportcode": "RIV",
            "airportname": "Riverside March AFB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RDDA",
            "cityname": "Redding",
            "airportcode": "RDD",
            "airportname": "Redding"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SACA",
            "cityname": "Sacramento",
            "airportcode": "SCK",
            "airportname": "Sacramento Stockton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SACA",
            "cityname": "Sacramento",
            "airportcode": "SMF",
            "airportname": "Sacramento International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SANA",
            "cityname": "San Diego",
            "airportcode": "CLD",
            "airportname": "San Diego Carlsbad"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SANA",
            "cityname": "San Diego",
            "airportcode": "SAN",
            "airportname": "San Diego International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SBAA",
            "cityname": "Santa Barbara",
            "airportcode": "SBA",
            "airportname": "Santa Barbara Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SFOA",
            "cityname": "San Francisco",
            "airportcode": "SFO",
            "airportname": "San Francisco International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SJCA",
            "cityname": "San Jose",
            "airportcode": "SJC",
            "airportname": "San Jose International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SMXA",
            "cityname": "Santa Maria",
            "airportcode": "SMX",
            "airportname": "Santa Maria"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SNAA",
            "cityname": "Santa Ana",
            "airportcode": "SNA",
            "airportname": "Santa Ana John Wayne"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "STSA",
            "cityname": "Santa Rosa",
            "airportcode": "STS",
            "airportname": "Santa Rosa"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VCVA",
            "cityname": "Victorville",
            "airportcode": "VCV",
            "airportname": "Victorville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VISA",
            "cityname": "Visalia",
            "airportcode": "VIS",
            "airportname": "Visalia"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ALSA",
            "cityname": "Alamosa",
            "airportcode": "ALS",
            "airportname": "Alamosa"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ASEA",
            "cityname": "Aspen",
            "airportcode": "ASE",
            "airportname": "Aspen"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CEZA",
            "cityname": "Cortez",
            "airportcode": "CEZ",
            "airportname": "Cortez"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "COSA",
            "cityname": "Colorado Springs",
            "airportcode": "COS",
            "airportname": "Colorado Springs Peterson Field"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DENA",
            "cityname": "Denver",
            "airportcode": "DEN",
            "airportname": "Denver International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DROA",
            "cityname": "Durango",
            "airportcode": "DRO",
            "airportname": "Durango La Plata"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EGEA",
            "cityname": "Vail",
            "airportcode": "EGE",
            "airportname": "Vail Eagle County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GJTA",
            "cityname": "Grand Junction",
            "airportcode": "GJT",
            "airportname": "Grand Junction"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GUCA",
            "cityname": "Gunnison",
            "airportcode": "GUC",
            "airportname": "Gunnison"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HDNA",
            "cityname": "Hayden",
            "airportcode": "HDN",
            "airportname": "Hayden"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MTJA",
            "cityname": "Montrose",
            "airportcode": "MTJ",
            "airportname": "Montrose"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PUBA",
            "cityname": "Pueblo",
            "airportcode": "PUB",
            "airportname": "Pueblo"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TEXA",
            "cityname": "Telluride",
            "airportcode": "TEX",
            "airportname": "Telluride"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HFDA",
            "cityname": "Hartford",
            "airportcode": "BDL",
            "airportname": "Hartford Bradley International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HFDA",
            "cityname": "Hartford",
            "airportcode": "HFD",
            "airportname": "Hartford Brainard"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HVNA",
            "cityname": "New Haven",
            "airportcode": "HVN",
            "airportname": "New Haven"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "APFA",
            "cityname": "Naples",
            "airportcode": "APF",
            "airportname": "Naples"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CLWA",
            "cityname": "Clearwater",
            "airportcode": "PIE",
            "airportname": "Clearwater International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DABA",
            "cityname": "Daytona Beach",
            "airportcode": "DAB",
            "airportname": "Daytona Beach"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EYWA",
            "cityname": "Key West",
            "airportcode": "EYW",
            "airportname": "Key West International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FLLA",
            "cityname": "Fort Lauderdale",
            "airportcode": "FXE",
            "airportname": "Fort Lauderdale Executive"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FMYA",
            "cityname": "Fort Myers",
            "airportcode": "FMY",
            "airportname": "Fort Myers Page Field"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FMYA",
            "cityname": "Fort Myers",
            "airportcode": "RSW",
            "airportname": "Fort Myers Southwest Florida Reg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GNVA",
            "cityname": "Gainesville",
            "airportcode": "GNV",
            "airportname": "Gainesville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JAXA",
            "cityname": "Jacksonville",
            "airportcode": "JAX",
            "airportname": "Jacksonville International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LALA",
            "cityname": "Lakeland",
            "airportcode": "LAL",
            "airportname": "Lakeland"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MIAA",
            "cityname": "Miami",
            "airportcode": "FLL",
            "airportname": "Fort Lauderdale International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MIAA",
            "cityname": "Miami",
            "airportcode": "MIA",
            "airportname": "Miami International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MLBA",
            "cityname": "Melbourne",
            "airportcode": "MLB",
            "airportname": "Melbourne"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ORLB",
            "cityname": "Orlando",
            "airportcode": "MCO",
            "airportname": "Orlando International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ORLB",
            "cityname": "Orlando",
            "airportcode": "SFB",
            "airportname": "Orlando Sanford"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PBIA",
            "cityname": "West Palm Beach",
            "airportcode": "PBI",
            "airportname": "West Palm Beach International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PFNA",
            "cityname": "Panama City",
            "airportcode": "ECP",
            "airportname": "Northwest Florida Beaches International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PGDA",
            "cityname": "Punta Gorda",
            "airportcode": "PGD",
            "airportname": "Punta Gorda"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PNSA",
            "cityname": "Pensacola",
            "airportcode": "PNS",
            "airportname": "Pensacola"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SRQA",
            "cityname": "Sarasota",
            "airportcode": "SRQ",
            "airportname": "Sarasota"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TLHA",
            "cityname": "Tallahassee",
            "airportcode": "TLH",
            "airportname": "Tallahassee"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TPAA",
            "cityname": "Tampa",
            "airportcode": "TPA",
            "airportname": "Tampa International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "USTB",
            "cityname": "St Augustine",
            "airportcode": "UST",
            "airportname": "St Augustine"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VPSA",
            "cityname": "Valparaiso",
            "airportcode": "VPS",
            "airportname": "Valparaiso Ft. Walton Beach"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ABYA",
            "cityname": "Albany",
            "airportcode": "ABY",
            "airportname": "Albany Dougherty County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AGSA",
            "cityname": "Augusta",
            "airportcode": "AGS",
            "airportname": "Augusta Bush Field"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AHNA",
            "cityname": "Athens",
            "airportcode": "AHN",
            "airportname": "Athens Ben Epps"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ATLA",
            "cityname": "Atlanta",
            "airportcode": "ATL",
            "airportname": "Atlanta Hartsfield-Jackson"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CSGA",
            "cityname": "Columbus",
            "airportcode": "CSG",
            "airportname": "Columbus Metropolitain"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MCNA",
            "cityname": "Macon",
            "airportcode": "MCN",
            "airportname": "Macon Lewis B Wilson"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SAVA",
            "cityname": "Savannah",
            "airportcode": "SAV",
            "airportname": "Savannah / Hilton Head"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SSIA",
            "cityname": "Brunswick",
            "airportcode": "BQK",
            "airportname": "Brunswick Glynco Jetport"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VLDA",
            "cityname": "Valdosta",
            "airportcode": "VLD",
            "airportname": "Valdosta Regional"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HNLA",
            "cityname": "Honolulu",
            "airportcode": "HNL",
            "airportname": "Honolulu International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HNMA",
            "cityname": "Hana",
            "airportcode": "HNM",
            "airportname": "Hana"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ITOA",
            "cityname": "Hilo",
            "airportcode": "ITO",
            "airportname": "Hilo"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JHMA",
            "cityname": "Kapalua",
            "airportcode": "JHM",
            "airportname": "Kapalua"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KOAA",
            "cityname": "Kona",
            "airportcode": "KOA",
            "airportname": "Kona"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LIHA",
            "cityname": "Kauai Island",
            "airportcode": "LIH",
            "airportname": "Kauai Island Lihue"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LNYA",
            "cityname": "Lanai City",
            "airportcode": "LNY",
            "airportname": "Lanai City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LUPA",
            "cityname": "Kalaupapa",
            "airportcode": "LUP",
            "airportname": "Kalaupapa"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MKKA",
            "cityname": "Hoolehua",
            "airportcode": "MKK",
            "airportname": "Hoolehua"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MUEA",
            "cityname": "Kamuela",
            "airportcode": "MUE",
            "airportname": "Kamuela"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OGGA",
            "cityname": "Kahului",
            "airportcode": "OGG",
            "airportname": "Maui Kahului"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BOIA",
            "cityname": "Boise",
            "airportcode": "BOI",
            "airportname": "Boise"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IDAA",
            "cityname": "Idaho Falls",
            "airportcode": "IDA",
            "airportname": "Idaho Falls"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LWSA",
            "cityname": "Lewiston",
            "airportcode": "LWS",
            "airportname": "Lewiston-Nez Perce County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PIHA",
            "cityname": "Pocatello",
            "airportcode": "PIH",
            "airportname": "Pocatello"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SUNA",
            "cityname": "Hailey",
            "airportcode": "SUN",
            "airportname": "Hailey"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TWFA",
            "cityname": "Twin Falls",
            "airportcode": "TWF",
            "airportname": "Twin Falls"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BLVA",
            "cityname": "Belleville",
            "airportcode": "BLV",
            "airportname": "Belleville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BMIA",
            "cityname": "Bloomington-Normal",
            "airportcode": "BMI",
            "airportname": "Bloomington-Normal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CHIA",
            "cityname": "Chicago",
            "airportcode": "GYY",
            "airportname": "Chicago Gary Regional"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CHIA",
            "cityname": "Chicago",
            "airportcode": "MDW",
            "airportname": "Chicago Midway"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CHIA",
            "cityname": "Chicago",
            "airportcode": "ORD",
            "airportname": "Chicago O'Hare International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CHIA",
            "cityname": "Chicago",
            "airportcode": "RFD",
            "airportname": "Chicago Rockford"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CMIA",
            "cityname": "Champaign",
            "airportcode": "CMI",
            "airportname": "Champaign"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DECA",
            "cityname": "Decatur",
            "airportcode": "DEC",
            "airportname": "Decatur"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MLIA",
            "cityname": "Moline",
            "airportcode": "MLI",
            "airportname": "Moline"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MWAA",
            "cityname": "Marion",
            "airportcode": "MWA",
            "airportname": "Marion"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PIAA",
            "cityname": "Peoria",
            "airportcode": "PIA",
            "airportname": "Greater Peoria"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SLOA",
            "cityname": "Salem",
            "airportcode": "SLO",
            "airportname": "Salem"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SPIA",
            "cityname": "Springfield",
            "airportcode": "SPI",
            "airportname": "Springfield"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "UINA",
            "cityname": "Quincy",
            "airportcode": "UIN",
            "airportname": "Quincy"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EVVA",
            "cityname": "Evansville",
            "airportcode": "EVV",
            "airportname": "Evansville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FWAA",
            "cityname": "Fort Wayne",
            "airportcode": "FWA",
            "airportname": "Fort Wayne"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "INDA",
            "cityname": "Indianapolis",
            "airportcode": "IND",
            "airportname": "Indianapolis"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SBNA",
            "cityname": "South Bend",
            "airportcode": "SBN",
            "airportname": "South Bend"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ALOA",
            "cityname": "Waterloo",
            "airportcode": "ALO",
            "airportname": "Waterloo"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BRLA",
            "cityname": "Burlington",
            "airportcode": "BRL",
            "airportname": "Burlington"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CIDA",
            "cityname": "Cedar Rapids",
            "airportcode": "CID",
            "airportname": "Cedar Rapids"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DBQA",
            "cityname": "Dubuque",
            "airportcode": "DBQ",
            "airportname": "Dubuque"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DSMA",
            "cityname": "Des Moines",
            "airportcode": "DSM",
            "airportname": "Des Moines"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FODA",
            "cityname": "Fort Dodge",
            "airportcode": "FOD",
            "airportname": "Fort Dodge"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MCWA",
            "cityname": "Mason City",
            "airportcode": "MCW",
            "airportname": "Mason City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SUXA",
            "cityname": "Sioux City",
            "airportcode": "SUX",
            "airportname": "Sioux City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DDCA",
            "cityname": "Dodge City",
            "airportcode": "DDC",
            "airportname": "Dodge City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GBDA",
            "cityname": "Great Bend",
            "airportcode": "GBD",
            "airportname": "Great Bend"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GCKA",
            "cityname": "Garden City",
            "airportcode": "GCK",
            "airportname": "Garden City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HYSA",
            "cityname": "Hays",
            "airportcode": "HYS",
            "airportname": "Hays"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ICTA",
            "cityname": "Wichita",
            "airportcode": "ICT",
            "airportname": "Wichita Mid-Continent"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LBLA",
            "cityname": "Liberal",
            "airportcode": "LBL",
            "airportname": "Liberal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MHKA",
            "cityname": "Manhattan",
            "airportcode": "MHK",
            "airportname": "Manhattan"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MKCA",
            "cityname": "Kansas City",
            "airportcode": "MKC",
            "airportname": "Kansas City Downtown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SLNA",
            "cityname": "Salina",
            "airportcode": "SLN",
            "airportname": "Salina"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TOPA",
            "cityname": "Topeka",
            "airportcode": "FOE",
            "airportname": "Topeka Forbes AFB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CVGA",
            "cityname": "Cincinnati",
            "airportcode": "CVG",
            "airportname": "Cincinnati Northern Kentucky"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LEXA",
            "cityname": "Lexington",
            "airportcode": "LEX",
            "airportname": "Lexington Blue Grass"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OWBA",
            "cityname": "Owensboro",
            "airportcode": "OWB",
            "airportname": "Owensboro"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PAHA",
            "cityname": "Paducah",
            "airportcode": "PAH",
            "airportname": "Paducah"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SDFA",
            "cityname": "Louisville",
            "airportcode": "SDF",
            "airportname": "Louisville Standiford Field"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AEXA",
            "cityname": "Alexandria",
            "airportcode": "AEX",
            "airportname": "Alexandria Internation"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BTRA",
            "cityname": "Baton Rouge",
            "airportcode": "BTR",
            "airportname": "Baton Rouge Ryan"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LCHA",
            "cityname": "Lake Charles",
            "airportcode": "LCH",
            "airportname": "Lake Charles"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LFTA",
            "cityname": "Lafayette",
            "airportcode": "LFT",
            "airportname": "Lafayette"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MLUA",
            "cityname": "Monroe",
            "airportcode": "MLU",
            "airportname": "Monroe"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MSYA",
            "cityname": "New Orleans",
            "airportcode": "MSY",
            "airportname": "New Orleans Louis Armstrong"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SHVA",
            "cityname": "Shreveport",
            "airportcode": "SHV",
            "airportname": "Shreveport Regional"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AUGA",
            "cityname": "Augusta",
            "airportcode": "AUG",
            "airportname": "Augusta"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BGRA",
            "cityname": "Bangor",
            "airportcode": "BGR",
            "airportname": "Bangor"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BHBA",
            "cityname": "Bar Harbor",
            "airportcode": "BHB",
            "airportname": "Bar Harbor"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PQIA",
            "cityname": "Presque Isle",
            "airportcode": "PQI",
            "airportname": "Presque Isle"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PWMA",
            "cityname": "Portland",
            "airportcode": "PWM",
            "airportname": "Portland"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RKDA",
            "cityname": "Rockland",
            "airportcode": "RKD",
            "airportname": "Rockland"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HGRA",
            "cityname": "Hagerstown",
            "airportcode": "HGR",
            "airportname": "Hagerstown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SBYA",
            "cityname": "Salisbury-Ocean City",
            "airportcode": "SBY",
            "airportname": "Salisbury-Ocean City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WASA",
            "cityname": "Washington",
            "airportcode": "BWI",
            "airportname": "Baltimore Washington International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ACKA",
            "cityname": "Nantucket",
            "airportcode": "ACK",
            "airportname": "Nantucket"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BOSA",
            "cityname": "Boston",
            "airportcode": "BOS",
            "airportname": "Boston Logan International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EWBA",
            "cityname": "Fall River",
            "airportcode": "EWB",
            "airportname": "Fall River"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HYAA",
            "cityname": "Hyannis",
            "airportcode": "HYA",
            "airportname": "Hyannis"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MVYA",
            "cityname": "Martha's Vineyard",
            "airportcode": "MVY",
            "airportname": "Martha's Vineyard"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ORHA",
            "cityname": "Worcester",
            "airportcode": "ORH",
            "airportname": "Worcester"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PVCA",
            "cityname": "Provincetown",
            "airportcode": "PVC",
            "airportname": "Provincetown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "APNA",
            "cityname": "Alpena",
            "airportcode": "APN",
            "airportname": "Alpena"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AZOA",
            "cityname": "Kalamazoo",
            "airportcode": "AZO",
            "airportname": "Kalamazoo"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CMXA",
            "cityname": "Hancock",
            "airportcode": "CMX",
            "airportname": "Hancock"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DTTA",
            "cityname": "Detroit",
            "airportcode": "DTW",
            "airportname": "Detroit Wayne County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ESCA",
            "cityname": "Escanaba",
            "airportcode": "ESC",
            "airportname": "Escanaba"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FNTA",
            "cityname": "Flint",
            "airportcode": "FNT",
            "airportname": "Flint"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GRRA",
            "cityname": "Grand Rapids",
            "airportcode": "GRR",
            "airportname": "Grand Rapids"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IMTA",
            "cityname": "Iron Mountain",
            "airportcode": "IMT",
            "airportname": "Iron Mountain"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IWDA",
            "cityname": "Ironwood",
            "airportcode": "IWD",
            "airportname": "Ironwood"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LANA",
            "cityname": "Lansing",
            "airportcode": "LAN",
            "airportname": "Lansing"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MBLA",
            "cityname": "Manistee",
            "airportcode": "MBL",
            "airportname": "Manistee"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MBSA",
            "cityname": "Midland",
            "airportcode": "MBS",
            "airportname": "Midland"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MKGA",
            "cityname": "Muskegon",
            "airportcode": "MKG",
            "airportname": "Muskegon"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MQTA",
            "cityname": "Marquette",
            "airportcode": "MQT",
            "airportname": "Marquette"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PLNA",
            "cityname": "Pellston",
            "airportcode": "PLN",
            "airportname": "Pellston"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PTKA",
            "cityname": "Pontiac",
            "airportcode": "PTK",
            "airportname": "Pontiac"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SSMA",
            "cityname": "Sault Ste Marie",
            "airportcode": "CIU",
            "airportname": "Sault Ste Marie Chippewa County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TVCA",
            "cityname": "Traverse City",
            "airportcode": "TVC",
            "airportname": "Traverse City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BJIA",
            "cityname": "Bemidji",
            "airportcode": "BJI",
            "airportname": "Bemidji"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BRDA",
            "cityname": "Brainerd",
            "airportcode": "BRD",
            "airportname": "Brainerd"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DLHA",
            "cityname": "Duluth",
            "airportcode": "DLH",
            "airportname": "Duluth International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HIBA",
            "cityname": "Hibbing",
            "airportcode": "HIB",
            "airportname": "Hibbing"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "INLA",
            "cityname": "International Falls",
            "airportcode": "INL",
            "airportname": "International Falls"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MSPA",
            "cityname": "Minneapolis",
            "airportcode": "MSP",
            "airportname": "Minneapolis St Paul"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RSTA",
            "cityname": "Rochester",
            "airportcode": "RST",
            "airportname": "Rochester Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "STCB",
            "cityname": "St Cloud",
            "airportcode": "STC",
            "airportname": "St Cloud"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TVFA",
            "cityname": "Thief River Falls",
            "airportcode": "TVF",
            "airportname": "Thief River Falls"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GLHA",
            "cityname": "Greenville",
            "airportcode": "GLH",
            "airportname": "Greenville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GPTA",
            "cityname": "Gulfport",
            "airportcode": "GPT",
            "airportname": "Gulfport"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JANA",
            "cityname": "Jackson",
            "airportcode": "JAN",
            "airportname": "Jackson-Evers International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LULA",
            "cityname": "Laurel",
            "airportcode": "PIB",
            "airportname": "Hattiesburg-Laurel"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MEIA",
            "cityname": "Meridian",
            "airportcode": "MEI",
            "airportname": "Meridian"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TUPA",
            "cityname": "Tupelo",
            "airportcode": "TUP",
            "airportname": "Tupelo"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "UBSA",
            "cityname": "Columbus",
            "airportcode": "GTR",
            "airportname": "Columbus Golden Triangle Reg."
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CGIA",
            "cityname": "Cape Girardeau",
            "airportcode": "CGI",
            "airportname": "Cape Girardeau"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "COUA",
            "cityname": "Columbia",
            "airportcode": "COU",
            "airportname": "Columbia"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FAMA",
            "cityname": "Farmington",
            "airportcode": "FAM",
            "airportname": "Farmington"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IRKA",
            "cityname": "Kirksville",
            "airportcode": "IRK",
            "airportname": "Kirksville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JLNA",
            "cityname": "Joplin",
            "airportcode": "JLN",
            "airportname": "Joplin"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MKCA",
            "cityname": "Kansas City",
            "airportcode": "MCI",
            "airportname": "Kansas City International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SGFA",
            "cityname": "Springfield",
            "airportcode": "SGF",
            "airportname": "Springfield-Branson Rg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "STLA",
            "cityname": "St Louis",
            "airportcode": "CPS",
            "airportname": "St Louis Bi-State Parks"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "STLA",
            "cityname": "St Louis",
            "airportcode": "STL",
            "airportname": "St Louis"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TBNA",
            "cityname": "Fort Leonard Wood",
            "airportcode": "TBN",
            "airportname": "Fort Leonard Wood"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BILA",
            "cityname": "Billings",
            "airportcode": "BIL",
            "airportname": "Billings"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BTMA",
            "cityname": "Butte",
            "airportcode": "BTM",
            "airportname": "Butte"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BZNA",
            "cityname": "Bozeman",
            "airportcode": "BZN",
            "airportname": "Bozeman"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FCAA",
            "cityname": "Kalispell",
            "airportcode": "FCA",
            "airportname": "Kalispell"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GDVA",
            "cityname": "Glendive",
            "airportcode": "GDV",
            "airportname": "Glendive"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GGWA",
            "cityname": "Glasgow",
            "airportcode": "GGW",
            "airportname": "Glasgow"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GTFA",
            "cityname": "Great Falls",
            "airportcode": "GTF",
            "airportname": "Great Falls International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HLNA",
            "cityname": "Helena",
            "airportcode": "HLN",
            "airportname": "Helena"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HVRA",
            "cityname": "Havre",
            "airportcode": "HVR",
            "airportname": "Havre"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MSOA",
            "cityname": "Missoula",
            "airportcode": "MSO",
            "airportname": "Missoula"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OLFA",
            "cityname": "Wolf Point",
            "airportcode": "OLF",
            "airportname": "Wolf Point"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SDYA",
            "cityname": "Sidney",
            "airportcode": "SDY",
            "airportname": "Sidney"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WYSA",
            "cityname": "West Yellowstone",
            "airportcode": "WYS",
            "airportname": "West Yellowstone"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AVLA",
            "cityname": "Asheville",
            "airportcode": "AVL",
            "airportname": "Asheville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CLTA",
            "cityname": "Charlotte",
            "airportcode": "CLT",
            "airportname": "Charlotte Douglas"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EWNA",
            "cityname": "New Bern",
            "airportcode": "EWN",
            "airportname": "New Bern"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FAYA",
            "cityname": "Fayetteville",
            "airportcode": "FAY",
            "airportname": "Fayetteville Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GSOA",
            "cityname": "Greensboro / High Point",
            "airportcode": "GSO",
            "airportname": "Greensboro / High Point"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ILMA",
            "cityname": "Wilmington",
            "airportcode": "ILM",
            "airportname": "Wilmington"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "INTB",
            "cityname": "Winston-Salem",
            "airportcode": "INT",
            "airportname": "Winston-Salem"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OAJA",
            "cityname": "Jacksonville",
            "airportcode": "OAJ",
            "airportname": "Jacksonville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PGVA",
            "cityname": "Greenville",
            "airportcode": "PGV",
            "airportname": "Pitt-Greenville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RDUA",
            "cityname": "Durham",
            "airportcode": "RDU",
            "airportname": "Raleigh / Durham"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "USAA",
            "cityname": "Concord",
            "airportcode": "USA",
            "airportname": "Concord Regional"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BISA",
            "cityname": "Bismarck",
            "airportcode": "BIS",
            "airportname": "Bismarck"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DIKA",
            "cityname": "Dickinson",
            "airportcode": "DIK",
            "airportname": "Dickinson"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DVLA",
            "cityname": "Devils Lake",
            "airportcode": "DVL",
            "airportname": "Devils Lake"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FARA",
            "cityname": "Fargo",
            "airportcode": "FAR",
            "airportname": "Fargo"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GFKA",
            "cityname": "Grand Forks",
            "airportcode": "GFK",
            "airportname": "Grand Forks"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ISNA",
            "cityname": "Williston",
            "airportcode": "ISN",
            "airportname": "Williston"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JMSA",
            "cityname": "Jamestown",
            "airportcode": "JMS",
            "airportname": "Jamestown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MOTA",
            "cityname": "Minot",
            "airportcode": "MOT",
            "airportname": "Minot International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AIAA",
            "cityname": "Alliance",
            "airportcode": "AIA",
            "airportname": "Alliance"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BFFA",
            "cityname": "Scottsbluff",
            "airportcode": "BFF",
            "airportname": "Scottsbluff"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CDRA",
            "cityname": "Chadron",
            "airportcode": "CDR",
            "airportname": "Chadron"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EARA",
            "cityname": "Kearney",
            "airportcode": "EAR",
            "airportname": "Kearney"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GRIA",
            "cityname": "Grand Island",
            "airportcode": "GRI",
            "airportname": "Grand Island"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LBFA",
            "cityname": "North Platte",
            "airportcode": "LBF",
            "airportname": "North Platte"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LNKA",
            "cityname": "Lincoln",
            "airportcode": "LNK",
            "airportname": "Lincoln"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MCKA",
            "cityname": "Mccook",
            "airportcode": "MCK",
            "airportname": "Mccook"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OMAA",
            "cityname": "Omaha",
            "airportcode": "OMA",
            "airportname": "Omaha Eppley Airfield"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BLDA",
            "cityname": "Boulder City",
            "airportcode": "BLD",
            "airportname": "Boulder City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EKOA",
            "cityname": "Elko",
            "airportcode": "EKO",
            "airportname": "Elko"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LASA",
            "cityname": "Las Vegas",
            "airportcode": "LAS",
            "airportname": "Las Vegas Mccarran"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RNOA",
            "cityname": "Reno",
            "airportcode": "RNO",
            "airportname": "Reno / Tahoe"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LEBA",
            "cityname": "Lebanon",
            "airportcode": "LEB",
            "airportname": "Lebanon"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MHTA",
            "cityname": "Manchester",
            "airportcode": "MHT",
            "airportname": "Manchester"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PSMA",
            "cityname": "Portsmouth",
            "airportcode": "PSM",
            "airportname": "Portsmouth"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AIYA",
            "cityname": "Atlantic City",
            "airportcode": "ACY",
            "airportname": "Atlantic City International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MMUA",
            "cityname": "Morristown",
            "airportcode": "MMU",
            "airportname": "Morristown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NYCA",
            "cityname": "New York",
            "airportcode": "EWR",
            "airportname": "New York Newark"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ABQA",
            "cityname": "Albuquerque",
            "airportcode": "ABQ",
            "airportname": "Albuquerque"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CAOA",
            "cityname": "Clayton",
            "airportcode": "CAO",
            "airportname": "Clayton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CNMA",
            "cityname": "Carlsbad",
            "airportcode": "CNM",
            "airportname": "Carlsbad"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CVNA",
            "cityname": "Clovis",
            "airportcode": "CVN",
            "airportname": "Clovis Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FMNA",
            "cityname": "Farmington",
            "airportcode": "FMN",
            "airportname": "Farmington"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HOBA",
            "cityname": "Hobbs",
            "airportcode": "HOB",
            "airportname": "Hobbs Lea County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LAMA",
            "cityname": "Los Alamos",
            "airportcode": "LAM",
            "airportname": "Los Alamos"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ROWA",
            "cityname": "Roswell",
            "airportcode": "ROW",
            "airportname": "Roswell"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SVCA",
            "cityname": "Silver City",
            "airportcode": "SVC",
            "airportname": "Silver City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ZSHA",
            "cityname": "Santa Fe",
            "airportcode": "SAF",
            "airportname": "Santa Fe"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ALBA",
            "cityname": "Albany",
            "airportcode": "ALB",
            "airportname": "Albany"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ARTA",
            "cityname": "Watertown",
            "airportcode": "ART",
            "airportname": "Watertown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BGMA",
            "cityname": "Binghamton",
            "airportcode": "BGM",
            "airportname": "Binghamton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BUFA",
            "cityname": "Buffalo",
            "airportcode": "BUF",
            "airportname": "Buffalo Niagara"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ELMA",
            "cityname": "Elmira",
            "airportcode": "ELM",
            "airportname": "Elmira"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HPNA",
            "cityname": "Westchester County",
            "airportcode": "HPN",
            "airportname": "Westchester County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IAGA",
            "cityname": "Niagara Falls",
            "airportcode": "IAG",
            "airportname": "Niagara Falls"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ISPA",
            "cityname": "Islip",
            "airportcode": "ISP",
            "airportname": "Islip"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ITHA",
            "cityname": "Ithaca",
            "airportcode": "ITH",
            "airportname": "Ithaca"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JHWA",
            "cityname": "Jamestown",
            "airportcode": "JHW",
            "airportname": "Jamestown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MSSA",
            "cityname": "Massena",
            "airportcode": "MSS",
            "airportname": "Massena"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NYCA",
            "cityname": "New York",
            "airportcode": "JFK",
            "airportname": "New York John F. Kennedy"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "NYCA",
            "cityname": "New York",
            "airportcode": "LGA",
            "airportname": "New York La Guardia"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OGSA",
            "cityname": "Ogdensburg",
            "airportcode": "OGS",
            "airportname": "Ogdensburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PLBA",
            "cityname": "Plattsburgh",
            "airportcode": "PBG",
            "airportname": "Plattsburgh AFB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ROCA",
            "cityname": "Rochester",
            "airportcode": "ROC",
            "airportname": "Rochester"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SLKA",
            "cityname": "Saranac Lake",
            "airportcode": "SLK",
            "airportname": "Saranac Lake"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SWFA",
            "cityname": "Newburgh",
            "airportcode": "SWF",
            "airportname": "Newburgh"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SYRA",
            "cityname": "Syracuse",
            "airportcode": "SYR",
            "airportname": "Syracuse"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AKRB",
            "cityname": "Akron",
            "airportcode": "CAK",
            "airportname": "Akron / Canton Regional"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CLEA",
            "cityname": "Cleveland",
            "airportcode": "BKL",
            "airportname": "Cleveland Burke Lakefront"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CLEA",
            "cityname": "Cleveland",
            "airportcode": "CLE",
            "airportname": "Cleveland Hopkins International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CMHA",
            "cityname": "Columbus",
            "airportcode": "CMH",
            "airportname": "Port Columbus"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CMHA",
            "cityname": "Columbus",
            "airportcode": "LCK",
            "airportname": "Columbus Rickenbacker"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CVGA",
            "cityname": "Cincinnati",
            "airportcode": "LUK",
            "airportname": "Cincinnati Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DAYA",
            "cityname": "Dayton",
            "airportcode": "DAY",
            "airportname": "Dayton International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TOLA",
            "cityname": "Toledo",
            "airportcode": "TOL",
            "airportname": "Toledo Express"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "YNGA",
            "cityname": "Youngstown",
            "airportcode": "YNG",
            "airportname": "Youngstown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LAWA",
            "cityname": "Lawton",
            "airportcode": "LAW",
            "airportname": "Lawton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OKCA",
            "cityname": "Oklahoma City",
            "airportcode": "OKC",
            "airportname": "Oklahoma City Will Rogers World"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SWOA",
            "cityname": "Stillwater",
            "airportcode": "SWO",
            "airportname": "Stillwater"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TULB",
            "cityname": "Tulsa",
            "airportcode": "TUL",
            "airportname": "Tulsa International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EUGA",
            "cityname": "Eugene",
            "airportcode": "EUG",
            "airportname": "Eugene"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MFRA",
            "cityname": "Medford",
            "airportcode": "MFR",
            "airportname": "Medford"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OTHA",
            "cityname": "North Bend",
            "airportcode": "OTH",
            "airportname": "North Bend"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PDTA",
            "cityname": "Pendleton",
            "airportcode": "PDT",
            "airportname": "Pendleton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PDXA",
            "cityname": "Portland",
            "airportcode": "PDX",
            "airportname": "Portland"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RDMA",
            "cityname": "Redmond",
            "airportcode": "RDM",
            "airportname": "Redmond"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ABEA",
            "cityname": "Allentown",
            "airportcode": "ABE",
            "airportname": "Allentown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AOOA",
            "cityname": "Martinsburg",
            "airportcode": "AOO",
            "airportname": "Martinsburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AVPA",
            "cityname": "Wilkes-Barre",
            "airportcode": "AVP",
            "airportname": "Wilkes-Barre International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BFDA",
            "cityname": "Bradford",
            "airportcode": "BFD",
            "airportname": "Bradford"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DUJA",
            "cityname": "Dubois",
            "airportcode": "DUJ",
            "airportname": "Dubois"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ERIA",
            "cityname": "Erie",
            "airportcode": "ERI",
            "airportname": "Erie"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FKLA",
            "cityname": "Franklin",
            "airportcode": "FKL",
            "airportname": "Franklin"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HARA",
            "cityname": "Harrisburg",
            "airportcode": "HAR",
            "airportname": "Harrisburg Skyport"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HARA",
            "cityname": "Harrisburg",
            "airportcode": "MDT",
            "airportname": "Harrisburg International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "IPTA",
            "cityname": "Williamsport",
            "airportcode": "IPT",
            "airportname": "Williamsport"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JSTA",
            "cityname": "Johnstown",
            "airportcode": "JST",
            "airportname": "Johnstown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LBEA",
            "cityname": "Latrobe",
            "airportcode": "LBE",
            "airportname": "Latrobe"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LNSA",
            "cityname": "Lancaster",
            "airportcode": "LNS",
            "airportname": "Lancaster"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PHLA",
            "cityname": "Philadelphia",
            "airportcode": "PHL",
            "airportname": "Philadelphia International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PHLA",
            "cityname": "Philadelphia",
            "airportcode": "TTN",
            "airportname": "Philadelphia Trenton-Mercer"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PITA",
            "cityname": "Pittsburgh",
            "airportcode": "PIT",
            "airportname": "Pittsburgh Int'l Apt."
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SCEA",
            "cityname": "State College",
            "airportcode": "SCE",
            "airportname": "State College"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BIDA",
            "cityname": "Block Island",
            "airportcode": "BID",
            "airportname": "Block Island"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PVDA",
            "cityname": "Providence",
            "airportcode": "PVD",
            "airportname": "Providence"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CAEA",
            "cityname": "Columbia",
            "airportcode": "CAE",
            "airportname": "Columbia Metropolitan"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CHSA",
            "cityname": "Charleston",
            "airportcode": "CHS",
            "airportname": "Charleston"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FLOA",
            "cityname": "Florence",
            "airportcode": "FLO",
            "airportname": "Florence"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GSPA",
            "cityname": "Greenville",
            "airportcode": "GSP",
            "airportname": "Greenville-Spartanburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HHHA",
            "cityname": "Hilton Head",
            "airportcode": "HHH",
            "airportname": "Hilton Head"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MYRA",
            "cityname": "Myrtle Beach",
            "airportcode": "MYR",
            "airportname": "Myrtle Beach AFB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ABRA",
            "cityname": "Aberdeen",
            "airportcode": "ABR",
            "airportname": "Aberdeen"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ATYA",
            "cityname": "Watertown",
            "airportcode": "ATY",
            "airportname": "Watertown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FSDA",
            "cityname": "Sioux Falls",
            "airportcode": "FSD",
            "airportname": "Sioux Falls"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HONA",
            "cityname": "Huron",
            "airportcode": "HON",
            "airportname": "Huron"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PIRA",
            "cityname": "Pierre",
            "airportcode": "PIR",
            "airportname": "Pierre"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RAPA",
            "cityname": "Rapid City",
            "airportcode": "RAP",
            "airportname": "Rapid City Regional"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BNAA",
            "cityname": "Nashville",
            "airportcode": "BNA",
            "airportname": "Nashville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CHAA",
            "cityname": "Chattanooga",
            "airportcode": "CHA",
            "airportname": "Chattanooga"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MEMA",
            "cityname": "Memphis",
            "airportcode": "MEM",
            "airportname": "Memphis International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MKLA",
            "cityname": "Jackson",
            "airportcode": "MKL",
            "airportname": "Jackson"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TRIA",
            "cityname": "Kingsport",
            "airportcode": "TRI",
            "airportname": "Tri-Cities"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TYSA",
            "cityname": "Knoxville",
            "airportcode": "TYS",
            "airportname": "Knoxville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ABIA",
            "cityname": "Abilene",
            "airportcode": "ABI",
            "airportname": "Abilene Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ACTA",
            "cityname": "Waco",
            "airportcode": "ACT",
            "airportname": "Waco Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AMAA",
            "cityname": "Amarillo",
            "airportcode": "AMA",
            "airportname": "Amarillo International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AUSA",
            "cityname": "Austin",
            "airportcode": "AUS",
            "airportname": "Austin-Bergstrom"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BPTA",
            "cityname": "Beaumont",
            "airportcode": "BPT",
            "airportname": "Beaumont Jefferson County"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BROA",
            "cityname": "Brownsville",
            "airportcode": "BRO",
            "airportname": "Brownsville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CLLA",
            "cityname": "College Station",
            "airportcode": "CLL",
            "airportname": "College Station"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CRPA",
            "cityname": "Corpus Christi",
            "airportcode": "CRP",
            "airportname": "Corpus Christi International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DFWA",
            "cityname": "Dallas",
            "airportcode": "DAL",
            "airportname": "Dallas Love Field"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DFWA",
            "cityname": "Dallas",
            "airportcode": "DFW",
            "airportname": "Dallas Fort Worth International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "DRTA",
            "cityname": "Del Rio",
            "airportcode": "DRT",
            "airportname": "Del Rio International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ELPA",
            "cityname": "El Paso",
            "airportcode": "BIF",
            "airportname": "El Paso Biggs AAF"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ELPA",
            "cityname": "El Paso",
            "airportcode": "ELP",
            "airportname": "El Paso International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GGGA",
            "cityname": "Gladewater",
            "airportcode": "GGG",
            "airportname": "Gladewater"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HOUA",
            "cityname": "Houston",
            "airportcode": "HOU",
            "airportname": "Houston Hobby"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HOUA",
            "cityname": "Houston",
            "airportcode": "IAH",
            "airportname": "Houston George Bush Intercntl."
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HRLA",
            "cityname": "Harlingen",
            "airportcode": "HRL",
            "airportname": "Harlingen"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ILEA",
            "cityname": "Killeen",
            "airportcode": "GRK",
            "airportname": "Killeen Gray AAF"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ILEA",
            "cityname": "Killeen",
            "airportcode": "ILE",
            "airportname": "Killeen Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LBBA",
            "cityname": "Lubbock",
            "airportcode": "LBB",
            "airportname": "Lubbock International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LRDA",
            "cityname": "Laredo",
            "airportcode": "LRD",
            "airportname": "Laredo"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MAFA",
            "cityname": "Midland",
            "airportcode": "MAF",
            "airportname": "Midland Odessa Regional"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MFEA",
            "cityname": "Mcallen",
            "airportcode": "MFE",
            "airportname": "Mcallen"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SATA",
            "cityname": "San Antonio",
            "airportcode": "SAT",
            "airportname": "San Antonio International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SJTA",
            "cityname": "San Angelo",
            "airportcode": "SJT",
            "airportname": "San Angelo Mathis Fld"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SPSA",
            "cityname": "Wichita Falls",
            "airportcode": "SPS",
            "airportname": "Wichita Falls Sheppard AFB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "TYRA",
            "cityname": "Tyler",
            "airportcode": "TYR",
            "airportname": "Tyler"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VCTA",
            "cityname": "Victoria",
            "airportcode": "VCT",
            "airportname": "Victoria"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CDCA",
            "cityname": "Cedar City",
            "airportcode": "CDC",
            "airportname": "Cedar City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CNYA",
            "cityname": "Moab",
            "airportcode": "CNY",
            "airportname": "Moab"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "OGDA",
            "cityname": "Ogden",
            "airportcode": "OGD",
            "airportname": "Ogden Municipal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PVUA",
            "cityname": "Provo",
            "airportcode": "PVU",
            "airportname": "Provo"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SGUA",
            "cityname": "Saint George",
            "airportcode": "SGU",
            "airportname": "Saint George"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SLCA",
            "cityname": "Salt Lake City",
            "airportcode": "SLC",
            "airportname": "Salt Lake City"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "VELA",
            "cityname": "Vernal",
            "airportcode": "VEL",
            "airportname": "Vernal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BTVA",
            "cityname": "Burlington",
            "airportcode": "BTV",
            "airportname": "Burlington"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RUTA",
            "cityname": "Rutland",
            "airportcode": "RUT",
            "airportname": "Rutland"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CHOA",
            "cityname": "Charlottesville",
            "airportcode": "CHO",
            "airportname": "Charlottesville"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LYHA",
            "cityname": "Lynchburg",
            "airportcode": "LYH",
            "airportname": "Lynchburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ORFA",
            "cityname": "Norfolk",
            "airportcode": "ORF",
            "airportname": "Norfolk International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PHFA",
            "cityname": "Newport News",
            "airportcode": "PHF",
            "airportname": "Newport News / Williamsb"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RICA",
            "cityname": "Richmond",
            "airportcode": "RIC",
            "airportname": "Richmond"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ROAA",
            "cityname": "Roanoke",
            "airportcode": "ROA",
            "airportname": "Roanoke"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SHDA",
            "cityname": "Staunton",
            "airportcode": "SHD",
            "airportname": "Staunton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WASA",
            "cityname": "Washington",
            "airportcode": "DCA",
            "airportname": "Washington Ronald Reagan"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WASA",
            "cityname": "Washington",
            "airportcode": "IAD",
            "airportname": "Washington Dulles"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ALWA",
            "cityname": "Walla Walla",
            "airportcode": "ALW",
            "airportname": "Walla Walla"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BLIA",
            "cityname": "Bellingham",
            "airportcode": "BLI",
            "airportname": "Bellingham"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CLMA",
            "cityname": "Port Angeles",
            "airportcode": "CLM",
            "airportname": "Port Angeles"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EATA",
            "cityname": "Wenatchee",
            "airportcode": "EAT",
            "airportname": "Wenatchee"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ESDA",
            "cityname": "Eastsound",
            "airportcode": "DHB",
            "airportname": "Deer Harbor Seaplane"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ESDA",
            "cityname": "Eastsound",
            "airportcode": "ESD",
            "airportname": "Eastsound"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FBSA",
            "cityname": "Friday Harbor SPB",
            "airportcode": "FBS",
            "airportname": "Friday Harbor SPB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FRDA",
            "cityname": "Friday Harbor",
            "airportcode": "FRD",
            "airportname": "Friday Harbor"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GEGA",
            "cityname": "Spokane",
            "airportcode": "GEG",
            "airportname": "Spokane International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "KEHA",
            "cityname": "Kenmore Air Harbor",
            "airportcode": "KEH",
            "airportname": "Kenmore Air Harbor"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LPSA",
            "cityname": "Lopez Island",
            "airportcode": "LPS",
            "airportname": "Lopez Island"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PSCA",
            "cityname": "Pasco",
            "airportcode": "PSC",
            "airportname": "Pasco"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PUWA",
            "cityname": "Pullman",
            "airportcode": "PUW",
            "airportname": "Pullman"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RCEA",
            "cityname": "Roche Harbor",
            "airportcode": "RCE",
            "airportname": "Roche Harbor"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SEAA",
            "cityname": "Seattle",
            "airportcode": "BFI",
            "airportname": "Seattle Boeing Fld"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SEAA",
            "cityname": "Seattle",
            "airportcode": "LKE",
            "airportname": "Seattle Lake Union SPB"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SEAA",
            "cityname": "Seattle",
            "airportcode": "SEA",
            "airportname": "Seattle / Tacoma International"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WSXA",
            "cityname": "Westsound",
            "airportcode": "WSX",
            "airportname": "Westsound"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "YKMA",
            "cityname": "Yakima",
            "airportcode": "YKM",
            "airportname": "Yakima Air Terminal"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "BKWA",
            "cityname": "Beckley",
            "airportcode": "BKW",
            "airportname": "Beckley"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CKBA",
            "cityname": "Clarksburg",
            "airportcode": "CKB",
            "airportname": "Clarksburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CRWA",
            "cityname": "Charleston",
            "airportcode": "CRW",
            "airportname": "Charleston"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "HTSA",
            "cityname": "Ashland",
            "airportcode": "HTS",
            "airportname": "Ashland"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LWBA",
            "cityname": "Lewisburg",
            "airportcode": "LWB",
            "airportname": "Lewisburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MGWA",
            "cityname": "Morgantown",
            "airportcode": "MGW",
            "airportname": "Morgantown"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "PKBA",
            "cityname": "Parkersburg",
            "airportcode": "PKB",
            "airportname": "Parkersburg"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "ATWA",
            "cityname": "Appleton",
            "airportcode": "ATW",
            "airportname": "Appleton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "AUWA",
            "cityname": "Wausau",
            "airportcode": "CWA",
            "airportname": "Wausau Central Wisconsin"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "EAUA",
            "cityname": "Eau Claire",
            "airportcode": "EAU",
            "airportname": "Eau Claire"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "FLDA",
            "cityname": "Fond Du Lac",
            "airportcode": "FLD",
            "airportname": "Fond Du Lac"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GRBA",
            "cityname": "Green Bay",
            "airportcode": "GRB",
            "airportname": "Green Bay"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LSEA",
            "cityname": "La Crosse",
            "airportcode": "LSE",
            "airportname": "La Crosse"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MKEA",
            "cityname": "Milwaukee",
            "airportcode": "MKE",
            "airportname": "Milwaukee General Mitchell"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MSNA",
            "cityname": "Madison",
            "airportcode": "MSN",
            "airportname": "Madison"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "MTWA",
            "cityname": "Manitowoc",
            "airportcode": "MTW",
            "airportname": "Manitowoc"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RHIA",
            "cityname": "Rhinelander",
            "airportcode": "RHI",
            "airportname": "Rhinelander"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CODA",
            "cityname": "Cody / Yellowstone",
            "airportcode": "COD",
            "airportname": "Cody / Yellowstone"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CPRA",
            "cityname": "Casper",
            "airportcode": "CPR",
            "airportname": "Casper"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "CYSA",
            "cityname": "Cheyenne",
            "airportcode": "CYS",
            "airportname": "Cheyenne"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "GCCA",
            "cityname": "Gillette",
            "airportcode": "GCC",
            "airportname": "Gillette"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "JACA",
            "cityname": "Jackson",
            "airportcode": "JAC",
            "airportname": "Jackson Hole"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "LARA",
            "cityname": "Laramie",
            "airportcode": "LAR",
            "airportname": "Laramie"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RIWA",
            "cityname": "Riverton",
            "airportcode": "RIW",
            "airportname": "Riverton"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "RKSA",
            "cityname": "Rock Springs",
            "airportcode": "RKS",
            "airportname": "Rock Springs"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "SHRA",
            "cityname": "Sheridan",
            "airportcode": "SHR",
            "airportname": "Sheridan"
        },
        {
            "countrycode": "US",
            "countryname": "United States",
            "citycode": "WRLA",
            "cityname": "Worland",
            "airportcode": "WRL",
            "airportname": "Worland"
        },
        {
            "countrycode": "UY",
            "countryname": "Uruguay",
            "citycode": "MVDA",
            "cityname": "Montevideo",
            "airportcode": "MVD",
            "airportname": "Montevideo"
        },
        {
            "countrycode": "UY",
            "countryname": "Uruguay",
            "citycode": "PDPA",
            "cityname": "Punta Del Este",
            "airportcode": "PDP",
            "airportname": "Punta Del Este"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "AZNA",
            "cityname": "Andizhan",
            "airportcode": "AZN",
            "airportname": "Andizhan"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "BHKA",
            "cityname": "Bukhara",
            "airportcode": "BHK",
            "airportname": "Bukhara"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "FEGA",
            "cityname": "Fergana",
            "airportcode": "FEG",
            "airportname": "Fergana"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "KSQA",
            "cityname": "Karshi",
            "airportcode": "KSQ",
            "airportname": "Karshi"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "NCUA",
            "cityname": "Nukus",
            "airportcode": "NCU",
            "airportname": "Nukus"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "NMAA",
            "cityname": "Namangan",
            "airportcode": "NMA",
            "airportname": "Namangan"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "NVIA",
            "cityname": "Navoiy",
            "airportcode": "NVI",
            "airportname": "Navoiy"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "SKDA",
            "cityname": "Samarkand",
            "airportcode": "SKD",
            "airportname": "Samarkand"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "TASA",
            "cityname": "Tashkent",
            "airportcode": "TAS",
            "airportname": "Tashkent"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "TMJA",
            "cityname": "Termez",
            "airportcode": "TMJ",
            "airportname": "Termez"
        },
        {
            "countrycode": "UZ",
            "countryname": "Uzbekistan",
            "citycode": "UGCA",
            "cityname": "Urgench",
            "airportcode": "UGC",
            "airportname": "Urgench"
        },
        {
            "countrycode": "VC",
            "countryname": "Saint Vincent and the Grenadines",
            "citycode": "SVDA",
            "cityname": "Kingstown",
            "airportcode": "SVD",
            "airportname": "Kingstown"
        },
        {
            "countrycode": "VC",
            "countryname": "Saint Vincent and the Grenadines",
            "citycode": "UNIA",
            "cityname": "Union Island",
            "airportcode": "UNI",
            "airportname": "Union Island"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "BLAA",
            "cityname": "Barcelona",
            "airportcode": "BLA",
            "airportname": "Barcelona"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "BNSA",
            "cityname": "Barinas",
            "airportcode": "BNS",
            "airportname": "Barinas"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "BRMA",
            "cityname": "Barquisimeto",
            "airportcode": "BRM",
            "airportname": "Barquisimeto"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "CBLA",
            "cityname": "Ciudad Bolivar",
            "airportcode": "CBL",
            "airportname": "Ciudad Bolivar"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "CCSA",
            "cityname": "Caracas",
            "airportcode": "CCS",
            "airportname": "Caracas"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "CUMA",
            "cityname": "Cumana",
            "airportcode": "CUM",
            "airportname": "Cumana"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "CUPA",
            "cityname": "Carupano",
            "airportcode": "CUP",
            "airportname": "Carupano"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "CZEA",
            "cityname": "Coro",
            "airportcode": "CZE",
            "airportname": "Coro"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "LFRA",
            "cityname": "La Fria",
            "airportcode": "LFR",
            "airportname": "La Fria"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "LRVA",
            "cityname": "Los Roques",
            "airportcode": "LRV",
            "airportname": "Los Roques"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "LSPA",
            "cityname": "Las Piedras",
            "airportcode": "LSP",
            "airportname": "Las Piedras"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "MARB",
            "cityname": "Maracaibo",
            "airportcode": "MAR",
            "airportname": "Maracaibo"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "MRDA",
            "cityname": "Merida",
            "airportcode": "MRD",
            "airportname": "Merida"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "MUNA",
            "cityname": "Maturin",
            "airportcode": "MUN",
            "airportname": "Maturin"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "PMVA",
            "cityname": "Porlamar",
            "airportcode": "PMV",
            "airportname": "Porlamar"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "PYHA",
            "cityname": "Puerto Ayacucho",
            "airportcode": "PYH",
            "airportname": "Puerto Ayacucho"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "PZOA",
            "cityname": "Puerto Ordaz",
            "airportcode": "PZO",
            "airportname": "Puerto Ordaz"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "SFDA",
            "cityname": "San Fernando De Apure",
            "airportcode": "SFD",
            "airportname": "San Fernando De Apure"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "SOMA",
            "cityname": "San Tome",
            "airportcode": "SOM",
            "airportname": "San Tome"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "STDA",
            "cityname": "Santo Domingo",
            "airportcode": "STD",
            "airportname": "Santo Domingo"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "SVZA",
            "cityname": "San Antonio",
            "airportcode": "SVZ",
            "airportname": "San Antonio"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "VIGA",
            "cityname": "El Vigia",
            "airportcode": "VIG",
            "airportname": "El Vigia"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "VLNA",
            "cityname": "Valencia",
            "airportcode": "VLN",
            "airportname": "Valencia"
        },
        {
            "countrycode": "VE",
            "countryname": "Venezuela",
            "citycode": "VLVA",
            "cityname": "Valera",
            "airportcode": "VLV",
            "airportname": "Valera"
        },
        {
            "countrycode": "VG",
            "countryname": "British Virgin Islands",
            "citycode": "EISA",
            "cityname": "Beef Island",
            "airportcode": "EIS",
            "airportname": "Beef Island"
        },
        {
            "countrycode": "VG",
            "countryname": "British Virgin Islands",
            "citycode": "NGDA",
            "cityname": "Anegada",
            "airportcode": "NGD",
            "airportname": "Anegada"
        },
        {
            "countrycode": "VG",
            "countryname": "British Virgin Islands",
            "citycode": "VIJA",
            "cityname": "Virgin Gorda",
            "airportcode": "VIJ",
            "airportname": "Virgin Gorda"
        },
        {
            "countrycode": "VI",
            "countryname": "Virgin Islands",
            "citycode": "STTA",
            "cityname": "Saint Thomas",
            "airportcode": "STT",
            "airportname": "Saint Thomas Cyril E King"
        },
        {
            "countrycode": "VI",
            "countryname": "Virgin Islands",
            "citycode": "STXA",
            "cityname": "St Croix Island",
            "airportcode": "SSB",
            "airportname": "St Croix Island SPB"
        },
        {
            "countrycode": "VI",
            "countryname": "Virgin Islands",
            "citycode": "STXA",
            "cityname": "St Croix Island",
            "airportcode": "STX",
            "airportname": "Henry E. Rohlsen"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "BMVV",
            "cityname": "Banmethuot",
            "airportcode": "BMV",
            "airportname": "Banmethuot"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "CAHV",
            "cityname": "Ca Mau",
            "airportcode": "CAH",
            "airportname": "Ca Mau"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "DADV",
            "cityname": "Da Nang",
            "airportcode": "DAD",
            "airportname": "Da Nang"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "DINV",
            "cityname": "Dien Bien Phu",
            "airportcode": "DIN",
            "airportname": "Dien Bien Phu"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "DLIV",
            "cityname": "Dalat",
            "airportcode": "DLI",
            "airportname": "Dalat"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "DONG",
            "cityname": "Dong Hoi",
            "airportcode": "VDH",
            "airportname": "Dong Hoi"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "HANV",
            "cityname": "Hanoi",
            "airportcode": "HAN",
            "airportname": "Hanoi"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "HPHV",
            "cityname": "Haiphong",
            "airportcode": "HPH",
            "airportname": "Haiphong"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "HUIV",
            "cityname": "Hue",
            "airportcode": "HUI",
            "airportname": "Hue"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "NHAV",
            "cityname": "Nha Trang",
            "airportcode": "CXR",
            "airportname": "Nha Trang Cam Ranh"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "PQCV",
            "cityname": "Phu Quoc",
            "airportcode": "PQC",
            "airportname": "Phu Quoc"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "PXUV",
            "cityname": "Pleiku",
            "airportcode": "PXU",
            "airportname": "Pleiku"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "SGNV",
            "cityname": "Ho Chi Minh City",
            "airportcode": "SGN",
            "airportname": "Ho Chi Minh City"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "TBBV",
            "cityname": "Tuy Hoa",
            "airportcode": "TBB",
            "airportname": "Tuy Hoa"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "THDV",
            "cityname": "Thanh Hoa",
            "airportcode": "THD",
            "airportname": "Thanh Hoa Tho Xuan"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "UIHV",
            "cityname": "Qui Nhon",
            "airportcode": "UIH",
            "airportname": "Qui Nhon"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "VCAV",
            "cityname": "Can Tho",
            "airportcode": "VCA",
            "airportname": "Can Tho"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "VCLV",
            "cityname": "Tamky",
            "airportcode": "VCL",
            "airportname": "Tamky"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "VCSV",
            "cityname": "Con Dao",
            "airportcode": "VCS",
            "airportname": "Con Dao"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "VIIV",
            "cityname": "Vinh City",
            "airportcode": "VII",
            "airportname": "Vinh City"
        },
        {
            "countrycode": "VN",
            "countryname": "Vietnam",
            "citycode": "VKGV",
            "cityname": "Rach Gia",
            "airportcode": "VKG",
            "airportname": "Rach Gia"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "AUYV",
            "cityname": "Aneityum",
            "airportcode": "AUY",
            "airportname": "Aneityum"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "AWDV",
            "cityname": "Aniwa",
            "airportcode": "AWD",
            "airportname": "Aniwa"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "CCVV",
            "cityname": "Craig Cove",
            "airportcode": "CCV",
            "airportname": "Craig Cove"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "DLYV",
            "cityname": "Dillons Bay",
            "airportcode": "DLY",
            "airportname": "Dillons Bay"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "EAEV",
            "cityname": "Emae",
            "airportcode": "EAE",
            "airportname": "Emae"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "FTAV",
            "cityname": "Futuna Island",
            "airportcode": "FTA",
            "airportname": "Futuna Island"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "IPAV",
            "cityname": "Ipota",
            "airportcode": "IPA",
            "airportname": "Ipota"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "LNBV",
            "cityname": "Lamen Bay",
            "airportcode": "LNB",
            "airportname": "Lamen Bay"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "LNEV",
            "cityname": "Lonorore",
            "airportcode": "LNE",
            "airportname": "Lonorore"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "LODV",
            "cityname": "Longana",
            "airportcode": "LOD",
            "airportname": "Longana"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "LPMV",
            "cityname": "Lamap",
            "airportcode": "LPM",
            "airportname": "Lamap"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "MTVV",
            "cityname": "Mota Lava",
            "airportcode": "MTV",
            "airportname": "Mota Lava"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "MWFV",
            "cityname": "Maewo",
            "airportcode": "MWF",
            "airportname": "Maewo"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "NUSV",
            "cityname": "Norsup",
            "airportcode": "NUS",
            "airportname": "Norsup"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "PBJV",
            "cityname": "Paama",
            "airportcode": "PBJ",
            "airportname": "Paama"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "SLHV",
            "cityname": "Sola",
            "airportcode": "SLH",
            "airportname": "Sola"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "SONV",
            "cityname": "Espiritu Santo",
            "airportcode": "SON",
            "airportname": "Espiritu Santo"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "SSRV",
            "cityname": "Sara",
            "airportcode": "SSR",
            "airportname": "Sara"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "SWJV",
            "cityname": "South West Bay",
            "airportcode": "SWJ",
            "airportname": "South West Bay"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "TAHV",
            "cityname": "Tanna",
            "airportcode": "TAH",
            "airportname": "Tanna"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "TGHV",
            "cityname": "Tongoa",
            "airportcode": "TGH",
            "airportname": "Tongoa"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "TOHV",
            "cityname": "Torres",
            "airportcode": "TOH",
            "airportname": "Torres"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "ULBV",
            "cityname": "Ulei",
            "airportcode": "ULB",
            "airportname": "Ulei"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "VLIV",
            "cityname": "Port Vila",
            "airportcode": "VLI",
            "airportname": "Port Vila"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "VLSV",
            "cityname": "Valesdir",
            "airportcode": "VLS",
            "airportname": "Valesdir"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "WLHV",
            "cityname": "Walaha",
            "airportcode": "WLH",
            "airportname": "Walaha"
        },
        {
            "countrycode": "VU",
            "countryname": "Vanuatu",
            "citycode": "ZGUA",
            "cityname": "Gaua",
            "airportcode": "ZGU",
            "airportname": "Gaua"
        },
        {
            "countrycode": "WF",
            "countryname": "Wallis and Futuna Islands",
            "citycode": "FUTA",
            "cityname": "Futuna Island",
            "airportcode": "FUT",
            "airportname": "Futuna Island"
        },
        {
            "countrycode": "WF",
            "countryname": "Wallis and Futuna Islands",
            "citycode": "WLSA",
            "cityname": "Wallis Island",
            "airportcode": "WLS",
            "airportname": "Wallis Island"
        },
        {
            "countrycode": "WS",
            "countryname": "Samoa",
            "citycode": "APWW",
            "cityname": "Apia",
            "airportcode": "APW",
            "airportname": "Apia Faleolo"
        },
        {
            "countrycode": "WS",
            "countryname": "Samoa",
            "citycode": "APWW",
            "cityname": "Apia",
            "airportcode": "FGI",
            "airportname": "Apia Fagali I"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "AAYA",
            "cityname": "Al Ghaydah",
            "airportcode": "AAY",
            "airportname": "Al Ghaydah"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "ADEA",
            "cityname": "Aden",
            "airportcode": "ADE",
            "airportname": "Aden"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "AXKA",
            "cityname": "Ataq",
            "airportcode": "AXK",
            "airportname": "Ataq"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "GXFA",
            "cityname": "Seiyun",
            "airportcode": "GXF",
            "airportname": "Seiyun"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "HODA",
            "cityname": "Hodeidah",
            "airportcode": "HOD",
            "airportname": "Hodeidah"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "RIYA",
            "cityname": "Riyan Mukalla",
            "airportcode": "RIY",
            "airportname": "Riyan Mukalla"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "SAHA",
            "cityname": "Sana'a",
            "airportcode": "SAH",
            "airportname": "Sana'a"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "SCTA",
            "cityname": "Socotra",
            "airportcode": "SCT",
            "airportname": "Socotra"
        },
        {
            "countrycode": "YE",
            "countryname": "Yemen",
            "citycode": "TAIA",
            "cityname": "Taiz",
            "airportcode": "TAI",
            "airportname": "Taiz"
        },
        {
            "countrycode": "YT",
            "countryname": "Mayotte",
            "citycode": "DZAA",
            "cityname": "Dzaoudzi",
            "airportcode": "DZA",
            "airportname": "Dzaoudzi"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "BFNA",
            "cityname": "Bloemfontein",
            "airportcode": "BFN",
            "airportname": "Bloemfontein"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "CPTA",
            "cityname": "Cape Town",
            "airportcode": "CPT",
            "airportname": "Cape Town"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "DURA",
            "cityname": "Durban",
            "airportcode": "DUR",
            "airportname": "Durban King Shaka International"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "DURA",
            "cityname": "Durban",
            "airportcode": "VIR",
            "airportname": "Durban Virginia"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "ELSA",
            "cityname": "East London",
            "airportcode": "ELS",
            "airportname": "East London"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "GRJA",
            "cityname": "George",
            "airportcode": "GRJ",
            "airportname": "George"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "HDSA",
            "cityname": "Hoedspruit",
            "airportcode": "HDS",
            "airportname": "Hoedspruit"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "JNBA",
            "cityname": "Johannesburg",
            "airportcode": "HLA",
            "airportname": "Lanseria"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "JNBA",
            "cityname": "Johannesburg",
            "airportcode": "JNB",
            "airportname": "Johannesburg O.R. Tambo"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "KIMA",
            "cityname": "Kimberley",
            "airportcode": "KIM",
            "airportname": "Kimberley"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "LDZA",
            "cityname": "Londolozi",
            "airportcode": "LDZ",
            "airportname": "Londolozi"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "MBDA",
            "cityname": "Mmabatho",
            "airportcode": "MBD",
            "airportname": "Mmabatho"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "MGHA",
            "cityname": "Margate",
            "airportcode": "MGH",
            "airportname": "Margate"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "MQPA",
            "cityname": "Nelspruit",
            "airportcode": "MQP",
            "airportname": "Nelspruit"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "NLPA",
            "cityname": "Nelspruit",
            "airportcode": "NLP",
            "airportname": "Nelspruit"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "NTYA",
            "cityname": "Sun City",
            "airportcode": "NTY",
            "airportname": "Sun City"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "PBZA",
            "cityname": "Plettenberg Bay",
            "airportcode": "PBZ",
            "airportname": "Plettenberg Bay"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "PHWA",
            "cityname": "Phalaborwa",
            "airportcode": "PHW",
            "airportname": "Phalaborwa"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "PLZA",
            "cityname": "Port Elizabeth",
            "airportcode": "PLZ",
            "airportname": "Port Elizabeth"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "PRYA",
            "cityname": "Pretoria",
            "airportcode": "PRY",
            "airportname": "Pretoria Wonderboom Apt."
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "PTGA",
            "cityname": "Polokwane",
            "airportcode": "PTG",
            "airportname": "Polokwane"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "PZBA",
            "cityname": "Pietermaritzburg",
            "airportcode": "PZB",
            "airportname": "Pietermaritzburg"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "RCBA",
            "cityname": "Richards Bay",
            "airportcode": "RCB",
            "airportname": "Richards Bay"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "SISA",
            "cityname": "Sishen",
            "airportcode": "SIS",
            "airportname": "Sishen"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "SZKA",
            "cityname": "Skukuza",
            "airportcode": "SZK",
            "airportname": "Skukuza"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "ULDA",
            "cityname": "Ulundi",
            "airportcode": "ULD",
            "airportname": "Ulundi"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "ULXA",
            "cityname": "Ulusaba",
            "airportcode": "ULX",
            "airportname": "Ulusaba"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "UTNA",
            "cityname": "Upington",
            "airportcode": "UTN",
            "airportname": "Upington"
        },
        {
            "countrycode": "ZA",
            "countryname": "South Africa",
            "citycode": "UTTA",
            "cityname": "Umtata",
            "airportcode": "UTT",
            "airportname": "Umtata"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "CIPA",
            "cityname": "Chipata",
            "airportcode": "CIP",
            "airportname": "Chipata"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "KAAA",
            "cityname": "Kasama",
            "airportcode": "KAA",
            "airportname": "Kasama"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "LUNA",
            "cityname": "Lusaka",
            "airportcode": "LUN",
            "airportname": "Lusaka"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "LVIA",
            "cityname": "Livingstone",
            "airportcode": "LVI",
            "airportname": "Livingstone"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "MFUA",
            "cityname": "Mfuwe",
            "airportcode": "MFU",
            "airportname": "Mfuwe"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "MMQA",
            "cityname": "Mbala",
            "airportcode": "MMQ",
            "airportname": "Mbala"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "NLAA",
            "cityname": "Ndola",
            "airportcode": "NLA",
            "airportname": "Ndola"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "SLIB",
            "cityname": "Solwezi",
            "airportcode": "SLI",
            "airportname": "Solwezi"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "ZAMB",
            "cityname": "Lower Zambezi National Park",
            "airportcode": "JEK",
            "airportname": "Jeki"
        },
        {
            "countrycode": "ZM",
            "countryname": "Zambia",
            "citycode": "ZAMB",
            "cityname": "Lower Zambezi National Park",
            "airportcode": "RYL",
            "airportname": "Royal"
        },
        {
            "countrycode": "ZW",
            "countryname": "Zimbabwe",
            "citycode": "BUQA",
            "cityname": "Bulawayo",
            "airportcode": "BUQ",
            "airportname": "Bulawayo"
        },
        {
            "countrycode": "ZW",
            "countryname": "Zimbabwe",
            "citycode": "HREA",
            "cityname": "Harare",
            "airportcode": "HRE",
            "airportname": "Harare"
        },
        {
            "countrycode": "ZW",
            "countryname": "Zimbabwe",
            "citycode": "KABA",
            "cityname": "Kariba",
            "airportcode": "KAB",
            "airportname": "Kariba"
        },
        {
            "countrycode": "ZW",
            "countryname": "Zimbabwe",
            "citycode": "VFAA",
            "cityname": "Victoria Falls",
            "airportcode": "VFA",
            "airportname": "Victoria Falls"
        },
        {
            "countrycode": ""
        }
    ];
    return Countries;
}