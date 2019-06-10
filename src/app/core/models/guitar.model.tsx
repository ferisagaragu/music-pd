export default class GuitarModel {
    title: string = '';
    position: number = 0;
    chords: number[] = [];
    fingers: number[] = [];
    nut: number = 0;
    nutText: string = '';
    notes: string[] = []; 
    size: string = '';

    constructor(data: any | GuitarModel) {
        Object.assign(this, data);
    }
}