import React, {Component} from 'react';
import { YELLOW, ORANGE, GREEN, PURPLE, PINK, BLUE, RED } from '../../../core/consts/chord-colors';
import './draw-ukulele-chord.css';

class DrawUkuleleChordTest extends Component {

    //Posiciones
    getVerticalPosition = index => {
        switch (index) {
            case 0: return 0;
            case 1: return 20;
            case 2: return 40;
            case 3: return 60;
            default: return 0;
        }
    }

    setChordPosition = (chord,index) => {
        switch (chord) {
            case 1: return `translate(${this.getVerticalPosition(index)},0)`;
            case 2: return `translate(${this.getVerticalPosition(index)},20)`;
            case 3: return `translate(${this.getVerticalPosition(index)},40)`;
            case 4: return `translate(${this.getVerticalPosition(index)},60)`;
            default: return '';
        }
    }

    //Tamaños
    getSize = (size,base) => {
        if (size) {
            switch (size) {
                case 'x2': 
                case 'X2': 
                case 'md': return base * 2;
                case 'x3':
                case 'X3':
                case 'lg': return base * 3;
                case 'x4':
                case 'X4':
                case 'xl': return base * 4;
                default: return base;
            }
        }
        return base;
    }

    getWidth = size => {
        const base = 90;
        return this.getSize(size,base); 
    }

    getHeight = size => {
        const base = 134;
        return this.getSize(size,base); 
    }

    //Dedos
    getChordColor = () => {
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

    getChords = (chords,fingers,nut) => {
        if (!chords) {
            return;
        }

        return chords.map( (chord,index) => (
            <> {
                chord !== 0 ? <>
                    <g 
                        key={index} 
                        transform={this.setChordPosition(chord, index)}
                    >
                        <circle r="6" fill={this.getChordColor()} />
                        <text className="text-chord" y="4">
                            {fingers ? fingers[index] : null}
                        </text>
                    </g> 
                </>
                :
                    <></>
            } </>
        ));
    }

    //Cuerdas al aire
    getOpenChord = chords => {
        if (!chords) {
            return;
        }

        return chords.map( (chord,index) => (
            <> {
                chord === 0 ? 
                    <circle 
                        className="open-chord"
                        cx={this.getVerticalPosition(index)} 
                        r="4" 
                    />
                :
                    <></>
            } </>
        ));
    }

    //Notas
    getNotes = notes => {
        if (!notes) {
            return;
        }

        return notes.map( (note,index) => (
            <text 
                className="text-notes"
                x={this.getVerticalPosition(index)} 
            >
                {note}
            </text>
        ));
    }

    render() {
        const { title, position, chords, fingers, nut, notes, size } = this.props;

        return (
            <svg className="base" width={this.getWidth(size)} height={this.getHeight(size)} viewBox="0 0 84 134" xmlns="http://www.w3.org/2000/svg">
                <title>{title}</title>    
                
                <text className="text-title" x="48" y="16">
                    {title}
                </text>
            
                <g transform="translate(16,28)">
                    {
                        position ?
                            <text className="text-position" x="-14" y="17">
                                {position}
                            </text>
                        :
                            <rect className="nut" height="4" width="62" />
                    }

                    {/*Lineas rectas |*/}
                    <g transform="translate(0,2)">
                        <rect className="sheet" height="80" width="2" x="0" />
                        <rect className="sheet" height="80" width="2" x="20" />
                        <rect className="sheet" height="80" width="2" x="40" />
                        <rect className="sheet" height="80" width="2" x="60" />
                    </g>

                    {/*Lineas rectas -*/}
                    <g transform="translate(0,2)">
                        <rect className="sheet" height="2" width="62" y="0" />
                        <rect className="sheet" height="2" width="62" y="20" />
                        <rect className="sheet" height="2" width="62" y="40" />
                        <rect className="sheet" height="2" width="62" y="60" />
                        <rect className="sheet" height="2" width="62" y="80" />
                    </g>

                    {/*Cuerdas al aire*/}
                    <g transform="translate(1,-5)">
                        {this.getOpenChord(chords)}
                    </g>

                    {/*Acordes*/}
                    <g transform="translate(1,13)">
                        {this.getChords(chords,fingers,nut)}
                    </g>

                    {/*Notas*/}
                    <g transform="translate(1,98)">
                        {this.getNotes(notes)}
                    </g>
                </g>
          </svg>
        );
    }
}

export default DrawUkuleleChordTest;