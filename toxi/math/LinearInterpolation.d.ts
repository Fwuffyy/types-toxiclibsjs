import { MathInterpolatorT } from "../common";

/**
 * @class Implementation of the linear interpolation function
 *
 * i = a + ( b - a ) * f
 * 
 * @member toxi
 */
declare class LinearInterpolation implements MathInterpolatorT {
    public interpolate(a: number, b: number, f: number): number;

    public static interpolate(a: number, b: number, f: number): number;
}

export = LinearInterpolation;