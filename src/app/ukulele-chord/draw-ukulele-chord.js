import React, { Component } from 'react';
import { YELLOW, ORANGE, GREEN, PURPLE, PINK, BLUE, RED } from './../../core/consts/chord-colors';

class DrawUkuleleChord extends Component {

    constructor(props) {
        super(props);
        const {frets,fingers,name,position,sub} = props.draw;

        this.state = {
            frets,
            fingers,
            name,
            position,
            sub
        }
    }

    setChordColor = () => {
        const rand = Math.trunc(0 + Math.random() * (7 - 0));
        let outColor = null;

        switch(rand) {
            case 0:
                outColor = YELLOW;
            break;

            case 1:
                outColor = ORANGE;
            break;

            case 2:
                outColor = GREEN;
            break;

            case 3:
                outColor = PURPLE;
            break;

            case 4:
                outColor = PINK;
            break;

            case 5:
                outColor = BLUE;
            break;
            
            case 6:
                outColor = RED;
            break;    

            default: 
                outColor = '#fff';
        }
        
        return outColor;
    }

    render() {
        const {frets,fingers,name,position,sub} = this.state;

        return (
            <div>
                <uke-chord 
                    frets={frets} 
                    fingers={fingers} 
                    name={name} 
                    position={position} 
                    size= 'L'
                    sub={sub} 
                    titlecolor="#faffdf"
                    sheet="gray" 
                    nut="#f0ad4e"
                    endtext="gray"
                    upsymbol="#f0ad4e"
                    finger1textcolor="#f5f5f5"
                    finger1circlecolor={this.setChordColor()}
                    finger2textcolor="#f5f5f5"
                    finger2circlecolor={this.setChordColor()}
                    finger3textcolor="#f5f5f5"
                    finger3circlecolor={this.setChordColor()}
                    finger4textcolor="#f5f5f5"
                    finger4circlecolor={this.setChordColor()}
                    />
            </div>
        );
    }

}

export default DrawUkuleleChord;