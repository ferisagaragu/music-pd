export const C = {
    higher: {
        base: {
            frets: '0003',
            fingers: '0003',
            name: 'C',
            position: 0,
            sub: 'G,C,E,C'
        },
        normal: [
            {
                frets: '1003',
                fingers: '1003',
                name: 'C aug',
                position: 0,
                sub: 'G#,C,E,C'
            },{
                frets: '0323',
                fingers: '0213',
                name: 'C dim',
                position: 0,
                sub: 'G,D#,F#,C'
            }
        ],
        _7: [
            {
                frets: '0001',
                fingers: '0001',
                name: 'C7',
                position: 0,
                sub: 'G,C,E,A#'
            },{
                frets: '0002',
                fingers: '0002',
                name: 'Cmaj7',
                position: 0,
                sub: 'G,C,E,B'
            },{
                frets: '1001',
                fingers: '1002',
                name: 'Caug7',
                position: 0,
                sub: 'G#,C,E,A#'
            },{
                frets: '2323',
                fingers: '1324',
                name: 'Cdim7',
                position: 0,
                sub: 'A,D#,F#,C'
            }
        ],
        _9: [
            {
                frets: '0203',
                fingers: '0203',
                name: 'Cadd9',
                position: 0,
                sub: 'G,D,E,C'
            },{
                frets: '3001',
                fingers: '3001',
                name: 'C9',
                position: 0,
                sub: 'A#,C,E,A#'
            }
        ],
        _6: {
            frets: '0000',
            fingers: '0000',
            name: 'C6',
            position: 0,
            sub: 'G,C,E,A'
        },
        _5: {
            frets: '0033',
            fingers: '0011',
            name: 'C5',
            position: 0,
            sub: 'G,C,G,C' 
        },
        _11: {
            frets: '0011',
            fingers: '0011',
            name: 'C11',
            position: 0,
            sub: 'G,C,F,A#'
        }
    },
    minor: {
        base: {
            frets: '0333',
            fingers: '0111',
            name: 'Cm',
            position: 0,
            sub: 'G,D#,G,C'
        }
    }
}

export const D = {
    higher: {
        base: {
            frets: '2220',
            fingers: '2310',
            name: 'D',
            position: 0,
            sub: 'A,D,F#,A'
        }
    },
    minor: {
        base: {
            frets: '2210',
            fingers: '2310',
            name: 'Dm',
            position: 0,
            sub: 'A,D,F,A',
            size: 'L'
        }
    }
}

export const E = {
    higher: {
        base: {
            frets: '1402',
            fingers: '1402',
            name: 'E',
            position: 0,
            sub: 'G#,E,E,B'
        }
    },
    minor: {
        base: {
            frets: '0432',
            fingers: '0321',
            name: 'Em',
            position: 0,
            sub: 'G,E,G,B'
        }
    }
}

export const F = {
    higher: {
        base: {
            frets: '2010',
            fingers: '2010',
            name: 'F',
            position: 0,
            sub: 'A,C,F,A'
        }
    },
    minor: {
        base: {
            frets: '1013',
            fingers: '1024',
            name: 'Fm',
            position: 0,
            sub: 'G#,C,F,C'
        }
    }
}

export const G = {
    higher: {
        base: {
            frets: '0232',
            fingers: '0132',
            name: 'G',
            position: 0,
            sub: 'G,D,G,B'
        }
    },
    minor: {
        base: {
            frets: '0231',
            fingers: '0231',
            name: 'Gm',
            position: 0,
            sub: 'G,D,G,A#'
        }
    }
}

export const A = {
    higher: {
        base: {
            frets: '2100',
            fingers: '2100',
            name: 'A',
            position: 0,
            sub: 'A,C#,E,A'
        }
    },
    minor: {
        base: {
            frets: '2000',
            fingers: '2000',
            name: 'Am',
            position: 0,
            sub: 'A,C,E,A'
        }
    }
}

export const B = {
    higher: {
        base: {
            frets: '4322',
            fingers: '3211',
            name: 'B',
            position: 0,
            sub: 'B,D#,F#,B'
        }
    },
    minor: {
        base: {
            frets: '4222',
            fingers: '3111',
            name: 'Bm',
            position: 0,
            sub: 'A,C,E,A'
        }
    }
}

/*    {
        frets: '0003',
        fingers: '0003',
        name: 'C',
        position: 0,
        sub: 'G,C,E,C'
    },{
        frets: '0333',
        fingers: '0111',
        name: 'Cm',
        position: 0,
        sub: 'G,D#,G,C'
    },{
        frets: '1003',
        fingers: '1003',
        name: 'C aug',
        position: 0,
        sub: 'G#,C,E,C'
    },{
        frets: '0323',
        fingers: '0213',
        name: 'C dim',
        position: 0,
        sub: 'G,D#,F#,C'
    },{
        frets: '0001',
        fingers: '0001',
        name: 'C7',
        position: 0,
        sub: 'G,C,E,A#'
    },{
        frets: '3333',
        fingers: '1111',
        name: 'Cm7',
        position: 0,
        sub: 'G,C,E,C'
    },{
        frets: '0002',
        fingers: '0002',
        name: 'Cmaj7',
        position: 0,
        sub: 'G,C,E,C'
    },{
        frets: '1001',
        fingers: '1002',
        name: 'Caug7',
        position: 0,
        sub: 'G,C,E,C'
    },{
        frets: '2323',
        fingers: '1324',
        name: 'Cdim7',
        position: 0,
        sub: 'G,C,E,C'
    },{
        frets: '3323',
        fingers: '2314',
        name: 'Cm7b5',
        position: 0,
        sub: 'G,C,E,C'
    }
]*/