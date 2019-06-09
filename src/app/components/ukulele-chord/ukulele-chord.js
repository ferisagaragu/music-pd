import React from 'react';

import ListUkuleleChord from './list-ukulele-chord';
import { C, D, E, F, G, A, B } from '../../core/consts/ukulele-chords-map';
import { Container,Row } from 'react-bootstrap';
import { ReactComponent as UkeleleIcon } from './../../res/ukulele/ukelele.svg';
import { ReactComponent as GuitarIcon } from './../../res/guitar/guitar.svg';

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
        
        
        {
            /*<h3>Do mayor otras</h3>
            <ListUkuleleChord render={C.higher.normal}></ListUkuleleChord>
            <h3>Do 7</h3>
            <ListUkuleleChord render={C.higher._7}></ListUkuleleChord>
            <h3>Do 9</h3>
            <ListUkuleleChord render={C.higher._9}></ListUkuleleChord>
            <h3>Do 6</h3>
            <ListUkuleleChord render={C.higher._6}></ListUkuleleChord>
            <h3>Do 5</h3>
            <ListUkuleleChord render={C.higher._5}></ListUkuleleChord>*/
        }
    </div>
);

export default UkuleleChord;