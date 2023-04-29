import { MathInterpolatorT } from "../common";

/**
 * @class Implementation of the circular interpolation function.
 * 
 * i = a-(b-a) * (sqrt(1 - (1 - f) * (1 - f) ))
 * 
 * @description The interpolation slope can be flipped to have its steepest ascent
 * towards the end value, rather than at the beginning in the default
 * configuration.
 * @member toxi
 * 
 * @param isFlipped true, if slope is inverted
 */
declare class CircularInterpolation implements MathInterpolatorT {
    public isFlipped: boolean;

    constructor(isFlipped?: boolean);

    public interpolate(a: number, b: number, f: number): number;

    public setFlipped(isFlipped: boolean): void;

    public static interpolate(a: number, b: number, f: number, isFlipped?: boolean): number;
}

export = CircularInterpolation;