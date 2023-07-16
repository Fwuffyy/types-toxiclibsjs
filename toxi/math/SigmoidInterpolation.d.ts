import Interpolation2D from "./Interpolation2D";

/**
 * @class Initializes the s-curve with the default sharpness = 2
 * @member toxi
 */
declare class SigmoidInterpolation implements Interpolation2D.InterpolatorT {
    public sharpness: number;
    public sharpPremult: number;

    /**
     * @param s sharpness
     */
    constructor(s?: number);

    public getSharpness(): number;

    public interpolate(a: number, b: number, f: number): number;

    public setSharpness(s: number): void;

    public static interpolate(a: number, b: number, f: number, sharpness: number): number;
}

export = SigmoidInterpolation;