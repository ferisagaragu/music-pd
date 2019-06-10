import React, {Component, ReactElement} from 'react';
import { COLORS } from '../../../core/consts/chord-colors';
import GuitarInterface from '../../../core/interfaces/guitar-draw.interface';
import './draw-guitar-chord.css';

class DrawGuitarChord extends Component<GuitarInterface,{}> {

    //Posiciones
    private getVerticalPosition = (index: number): number => {
        switch (index) {
            case 0: return 0;
            case 1: return 12;
            case 2: return 24;
            case 3: return 36;
            case 4: return 48;
            case 5: return 60;
            default: return 0;
        }
    }

    private setChordPosition = (chord: number, index: number): string => {
        switch (chord) {
            case 1: return `translate(${this.getVerticalPosition(index)},0)`;
            case 2: return `translate(${this.getVerticalPosition(index)},20)`;
            case 3: return `translate(${this.getVerticalPosition(index)},40)`;
            case 4: return `translate(${this.getVerticalPosition(index)},60)`;
            default: return '';
        }
    }

    private setNutPosition = (index: number): number => {
        switch (index) {
            case 1: return 0;
            case 2: return 20;
            case 3: return 40;
            case 4: return 60;
            default: return -60;
        }
    }

    private setNutTextPosition = (index: number): number => {
        switch (index) {
            case 1: return 4;
            case 2: return 24;
            case 3: return 44;
            case 4: return 64;
            default: return -60;
        } 
    }

    //Tamaños
    private getSize = (size: string, base: number): number => {
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

    private getWidth = (size: string): number => {
        const base = 90;
        return this.getSize(size,base); 
    }

    private getHeight = (size: string): number => {
        const base = 134;
        return this.getSize(size,base); 
    }

    //Dedos
    private getChordColor = (): string =>  {
        const rand = Math.trunc(0 + Math.random() * (7 - 0));
        switch (rand) {
            case 0: return COLORS.YELLOW;
            case 1: return COLORS.ORANGE;
            case 2: return COLORS.GREEN;
            case 3: return COLORS.PURPLE;
            case 4: return COLORS.PINK;
            case 5: return COLORS.BLUE;
            case 6: return COLORS.RED;
            default: return '#fff';
        }
    }

    private getChords = (chords: number[], fingers: number[]): ReactElement[] => {
        if (!chords) {
            return [<></>];
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

    private getNut = (nut: number, nutText: string): ReactElement => {
        if (!nut) {
            return <></>;
        }

        return (
            <g>
                <line 
                    className="nut" 
                    x1="0" 
                    x2="60" 
                    y1={this.setNutPosition(nut)} 
                    y2={this.setNutPosition(nut)} 
                    stroke={this.getChordColor()} 
                />
                
                <text 
                    className="text-chord" 
                    y={this.setNutTextPosition(nut)} 
                    x={30}
                >
                    {nutText}
                </text>
            </g>
        );
    }

    //Cuerdas al aire
    private getOpenChord = (chords: number[]): ReactElement[] => {
        if (!chords) {
            return [<></>];
        }

        return chords.map((chord: number, index: number) => (
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
    private getNotes = (notes: string[]): ReactElement[] => {
        if (!notes) {
            return [<></>];
        }

        return notes.map((note: string, index: number) => (
            <text 
                className="text-notes"
                x={this.getVerticalPosition(index)} 
            >
                {note}
            </text>
        ));
    }

    public render(): ReactElement {
        const { title, position, chords, fingers, nut, nutText, notes, size } = this.props;
        
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
                        <rect className="sheet" height="80" width="2" x="12" />
                        <rect className="sheet" height="80" width="2" x="24" />
                        <rect className="sheet" height="80" width="2" x="36" />
                        <rect className="sheet" height="80" width="2" x="48" />
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
                        {nut === 0 ? this.getOpenChord(chords) : <></>}
                    </g>

                    {/*Acordes*/}
                    <g transform="translate(1,13)">
                        {this.getChords(chords,fingers)}
                        {this.getNut(nut,nutText)}
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

export default DrawGuitarChord;