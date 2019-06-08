import React from 'react';
import ListUkuleleChord from './list-ukulele-chord';
import { C, D, E, F, G, A, B } from '../../core/consts/ukulele-chords-map';
import { Container,Row } from 'react-bootstrap';
import { ReactComponent as UkeleleIcon } from './../../res/ukulele/ukelele.svg'


const UkuleleChord = () => (
    <div>
        <Container className="mt-3">
            <h1><UkeleleIcon/> Ukulele</h1>
    
            <h3 className="mt-5">
                Notas Mayores
            </h3>

            <Row>
                <ListUkuleleChord render={C.higher.base}></ListUkuleleChord>
                <ListUkuleleChord render={D.higher.base}></ListUkuleleChord>
                <ListUkuleleChord render={E.higher.base}></ListUkuleleChord>
                <ListUkuleleChord render={F.higher.base}></ListUkuleleChord>
                <ListUkuleleChord render={G.higher.base}></ListUkuleleChord>
                <ListUkuleleChord render={A.higher.base}></ListUkuleleChord>
                <ListUkuleleChord render={B.higher.base}></ListUkuleleChord>
            </Row>

            <h3>
                Notas Menores
            </h3>

            <Row>
                <ListUkuleleChord render={C.minor.base}></ListUkuleleChord>
                <ListUkuleleChord render={D.minor.base}></ListUkuleleChord>
                <ListUkuleleChord render={E.minor.base}></ListUkuleleChord>
                <ListUkuleleChord render={F.minor.base}></ListUkuleleChord>
                <ListUkuleleChord render={G.minor.base}></ListUkuleleChord>
                <ListUkuleleChord render={A.minor.base}></ListUkuleleChord>
                <ListUkuleleChord render={B.minor.base}></ListUkuleleChord>
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