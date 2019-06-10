import React from 'react';

import ListUkuleleChord from './list-ukulele-chord';
import { C, D, E, F, G, A, B } from '../../core/consts/ukulele-chords-map';
import { Container,Row } from 'react-bootstrap';
import { ReactComponent as UkeleleIcon } from './../../res/ukulele/ukelele.svg';

const UkuleleChord = () => (
    <div>
        <Container className="mt-3">
            <h1><UkeleleIcon/> Ukulele</h1>
    
            <h3 className="mt-5">
                Notas Mayores
            </h3>

            <Row>
                <ListUkuleleChord data={C.higher.base}></ListUkuleleChord>
                <ListUkuleleChord data={D.higher.base}></ListUkuleleChord>
                <ListUkuleleChord data={E.higher.base}></ListUkuleleChord>
                <ListUkuleleChord data={F.higher.base}></ListUkuleleChord>
                <ListUkuleleChord data={G.higher.base}></ListUkuleleChord>
                <ListUkuleleChord data={A.higher.base}></ListUkuleleChord>
                <ListUkuleleChord data={B.higher.base}></ListUkuleleChord>
            </Row>

            <h3 className="mt-5">
                Notas Menores
            </h3>   

            <Row>
                <ListUkuleleChord data={C.minor.base}></ListUkuleleChord>
                <ListUkuleleChord data={D.minor.base}></ListUkuleleChord>
                <ListUkuleleChord data={E.minor.base}></ListUkuleleChord>
                <ListUkuleleChord data={F.minor.base}></ListUkuleleChord>
                <ListUkuleleChord data={G.minor.base}></ListUkuleleChord>
                <ListUkuleleChord data={A.minor.base}></ListUkuleleChord>
                <ListUkuleleChord data={B.minor.base}></ListUkuleleChord>
            </Row>

        </Container>
        
    </div>
);

export default UkuleleChord;