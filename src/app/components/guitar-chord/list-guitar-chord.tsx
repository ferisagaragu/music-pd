import React,{ Component, ReactElement } from 'react';

import { Col } from 'react-bootstrap';
import DrawGuitarChord from './draw-guitar-chord/draw-guitar-chord';
import GuitarModel from '../../core/models/guitar.model';
import GuitarListInterface from '../../core/interfaces/guitar-list.interface';

class ListGuitarChord extends Component<GuitarListInterface,{}> {

    private createChords = (data: GuitarModel | GuitarModel[]): ReactElement[] | ReactElement => {
        if (Array.isArray(data)) {
            return data.map((chord: GuitarModel) => {
                const { title, position, chords, fingers, nut, nutText, notes } = chord;
            
                return ( 
                    <Col lg={2} md={3} sm={6} xl={2} xs={12} className="text-center">
                        <DrawGuitarChord
                            title={title} 
                            position={position} 
                            chords={chords} 
                            fingers={fingers}
                            nut={nut}
                            nutText={nutText}
                            notes={notes}
                            size={'md'}
                        />
                    </Col>
                )    
            });

        } else {
            const { title, position, chords, fingers, nut, nutText, notes } = data;
            
            return (
                <Col lg={2} md={3} sm={6} xl={2} xs={12} className="text-center">
                    <DrawGuitarChord
                        key={0}
                        title={title} 
                        position={position} 
                        chords={chords} 
                        fingers={fingers}
                        nut={nut}
                        nutText={nutText}
                        notes={notes}
                        size={'md'}
                    />
                </Col>
            );
        }
    
    } 

    public render(): ReactElement {
        const { data } = this.props;

        return(
            <>
                {this.createChords(data)}
            </>   
        );
    }

}

export default ListGuitarChord;