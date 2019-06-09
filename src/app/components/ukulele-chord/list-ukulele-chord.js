import React,{ Component } from 'react';

import DrawUkuleleChord from './draw-ukulele-chord/draw-ukulele-chord';
import { Col } from 'react-bootstrap';

class ListUkuleleChord extends Component {

    createChords = data => {
        if (Array.isArray(data)) {
            return data.map( (chord, index) => {
                const { title, position, chords, fingers, notes } = chord;
                return ( 
                    <Col lg={2} md={3} sm={6} xl={2} xs={12} className="text-center">
                        <DrawUkuleleChord
                            title={title} 
                            position={position} 
                            chords={chords} 
                            fingers={fingers}
                            notes={notes}
                            size={'md'}
                        />
                    </Col>
                )    
            });
        } else {
            const { title, position, chords, fingers, notes } = data;
            
            return (
                <Col lg={2} md={3} sm={6} xl={2} xs={12} className="text-center">
                    <DrawUkuleleChord
                        title={title} 
                        position={position} 
                        chords={chords} 
                        fingers={fingers}
                        notes={notes}
                        size={'md'}
                    />
                </Col>
            );
        }
    
    } 

    render() {
        const { data } = this.props;

        return(
            <>
                {this.createChords(data)}
            </>   
        );
    }

}

export default ListUkuleleChord;