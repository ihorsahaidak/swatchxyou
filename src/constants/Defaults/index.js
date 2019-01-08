const DEFAULTS = {
    gent: {
        watchheads:[
            'HGB302_sa000_sr11a',
            'HGN253_sa000_sr11a',
            'HGP151_sa000_sr11a',
            'HGS156_sa000_sr11a',
            'HGW187_sa000_sr11a',
        ],
        upperstraps: [
            'ACM0005H12_sa000_sr11b',
            'ACM0016H12_sa000_sr11b',
            'ACM0017H12_sa000_sr11b',
            'ACM0021H12_sa000_sr11b',
            'ACM0023H12_sa000_sr11b',
        ],
        lowerstraps: [
            'ACM0002H6_sa000_sr11b',
            'ACM0016H6_sa000_sr11b',
            'ACM0020H6_sa000_sr11b',
            'ACM0021H6_sa000_sr11b',
            'ACM0023H6_sa000_sr11b',
        ],
        loops: [
            'S6501010001_sa000_sr11a',
            'S6501010004_sa000_sr11a',
            'S6501010005_sa000_sr11a',
            'S6501010010_sa000_sr11a',
            'S6501010011_sa000_sr11a',
        ],
        accessories: {
            loops_large: [
                'S6511010001_sa000_sr11a',
                'S6511010002_sa000_sr11a',
                'S6511010003_sa000_sr11a',
                'S6511010004_sa000_sr11a',
                'S6511010005_sa000_sr11a',
            ],
            pins: [
                'S689000901_sa000_sr11a',
                'S689000902_sa000_sr11a',
            ],
            rings: [

            ]
        }
    },
    new_gent: {
        watchheads:[
            'HSUOB155_sa000_sr11a',
            'HSUOJ107_sa000_sr11a',
            'HSUON128_sa000_sr11a',
            'HSUOR111_sa000_sr11a',
            'HSUOW147_sa000_sr11a',
        ],
        upperstraps: [
            'ACM0010H12_sa000_sr11b',
            'ACM0025H12_sa000_sr11b',
            'ACM0026H12_sa000_sr11b',
            'ACM0027H12_sa000_sr11b',
            'ACM0028H12_sa000_sr11b',
        ],
        lowerstraps: [
            'ACM0006H6_sa000_sr11b',
            'ACM0007H6_sa000_sr11b',
            'ACM0008H6_sa000_sr11b',
            'ACM0009H6_sa000_sr11b',
            'ACM0010H6_sa000_sr11b',
        ],
        loops: [
            'S6501220001_sa000_sr11a',
            'S6501220002_sa000_sr11a',
            'S6501220003_sa000_sr11a',
            'S6501220004_sa000_sr11a',
            'S6501220005_sa000_sr11a',
        ],
        accessories: {
            loops_large: [
                'S6511220001_sa000_sr11a',
                'S6511220002_sa000_sr11a',
                'S6511220003_sa000_sr11a',
                'S6511220004_sa000_sr11a',
                'S6511220005_sa000_sr11a',
            ],
            pins: [
                'S689000901_sa000_sr11a',
                'S689000902_sa000_sr11a',
            ],
            rings: [
                'S689000879_sa000_sr11a',
                'S689000880_sa000_sr11a',
                'S689000881_sa000_sr11a',
            ]
        }
    }
};

export function getDefaults() {
    return DEFAULTS;
}
