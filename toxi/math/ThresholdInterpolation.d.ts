import Interpolation2D from "./Interpolation2D";

/**
 * @class Defines a single step/threshold function which returns the min value for all
 * factors &lt; threshold and the max value for all others.
 * @member toxi
 */
declare class ThresholdInterpolation implements Interpolation2D.InterpolatorT {
    public threshold: number;

    constructor(threshold: number);

    public interpolate(a: number, b: number, f: number): number;

    public static interpolate(a: number, b: number, f: number, threshold: number): number;
}

export = ThresholdInterpolation;