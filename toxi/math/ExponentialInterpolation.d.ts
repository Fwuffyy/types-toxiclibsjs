import Interpolation2D from "./Interpolation2D";

/**
 * @class Exponential curve interpolation with adjustable exponent. Use exp in the
 * following ranges to achieve these effects:
 * <ul>
 * <li>0.0 &lt; x &lt; 1.0 : ease in (steep changes towards b)</li>
 * <li>1.0 : same as {@link LinearInterpolation}</li>
 * <li>&gt; 1.0 : ease-out (steep changes from a)</li>
 * </ul>
 * @member toxi
 */
declare class ExponentialInterpolation implements Interpolation2D.InterpolatorT {
    public exponent: number;

    constructor(exp?: number);

    public interpolate(a: number, b: number, f: number): number;

    public static interpolate(a: number, b: number, f: number, exponent: number): number;
}

export = ExponentialInterpolation;