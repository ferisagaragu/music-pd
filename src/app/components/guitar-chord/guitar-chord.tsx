import React, { ReactElement } from 'react';

import { C, D, E, F, G, A, B } from '../../core/consts/guitar-chords-map';
import { Container,Row } from 'react-bootstrap';
import { ReactComponent as GuitarIcon } from './../../res/guitar/guitar.svg';
import ListGuitarChord from './list-guitar-chord';
import GuitarModel from '../../core/models/guitar.model';

const GuitarChord = (): ReactElement => (
    <Container className="mt-3">
        <h1><GuitarIcon/> Guitarra</h1>

        <h3 className="mt-5">
            Notas Mayores
        </h3>

        <Row>
            <ListGuitarChord data={new GuitarModel(C.higher.base)} />
            <ListGuitarChord data={new GuitarModel(D.higher.base)} />
            <ListGuitarChord data={new GuitarModel(E.higher.base)} />
            <ListGuitarChord data={new GuitarModel(F.higher.base)} />
            <ListGuitarChord data={new GuitarModel(G.higher.base)} />
            <ListGuitarChord data={new GuitarModel(A.higher.base)} />
            <ListGuitarChord data={new GuitarModel(B.higher.base)} />
        </Row>

        <h3 className="mt-5">
            Notas Menores
        </h3>   

        <Row>
            <ListGuitarChord data={new GuitarModel(C.minor.base)} />
            <ListGuitarChord data={new GuitarModel(D.minor.base)} />
            <ListGuitarChord data={new GuitarModel(E.minor.base)} />
            <ListGuitarChord data={new GuitarModel(F.minor.base)} />
            <ListGuitarChord data={new GuitarModel(G.minor.base)} />
            <ListGuitarChord data={new GuitarModel(A.minor.base)} />
            <ListGuitarChord data={new GuitarModel(B.minor.base)} />
        </Row>
    </Container>
);

export default GuitarChord;