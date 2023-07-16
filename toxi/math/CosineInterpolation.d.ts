import Interpolation2D from "./Interpolation2D";

/**
 * @class Implementation of the cosine interpolation function:
 * i = b+(a-b)*(0.5+0.5*cos(f*PI))
 * @member toxi
 */
declare class CosineInterpolation implements Interpolation2D.InterpolatorT {
    public interpolate(a: number, b: number, f: number): number;

    public static interpolate(a: number, b: number, f: number): number;
}

export = CosineInterpolation;