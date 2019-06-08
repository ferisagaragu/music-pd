import React,{ Component } from 'react';
import DrawUkuleleChord from './draw-ukulele-chord';

import { Col } from 'react-bootstrap';

class ListUkuleleChord extends Component {

    constructor(props) {
        super(props);
        const {render} = props; 

        this.state = {
            render
        }
    }

    createChords = render => {

        if (Array.isArray(render)) {
            return render.map( (chord, index) => (
                <Col lg={2} md={2} sm={2} xl={2} xs={2} >
                    <DrawUkuleleChord key={index} draw={chord} />
                </Col>
            ));
        } else {
            return (
                <Col lg={2} md={2} sm={2} xl={2} xs={2} >
                    <DrawUkuleleChord draw={render} />
                </Col>
            );
        }
    
    } 

    render() {
        const {render} = this.state;
        return(
            <div>
                {this.createChords(render)}
            </div>   
        );
    }

}

export default ListUkuleleChord;