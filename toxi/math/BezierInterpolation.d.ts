import Interpolation2D from "./Interpolation2D";

/**
 * @class Bezier curve interpolation with configurable coefficients. The curve
 * parameters need to be normalized offsets relative to the start and end values
 * passed to the {@link #interpolate(float, float, float)} method, but can
 * exceed the normal 0 .. 1.0 interval. Use symmetrical offsets to create a
 * symmetrical curve, e.g. this will create a curve with 2 dips reaching the
 * minimum and maximum values at 25% and 75% of the interval...
 * @member toxi
 *
 * @example
 * const b = new BezierInterpolation(3,-3);
 *
 * // The curve will be a straight line with this configuration:
 *
 * const b = new BezierInterpolation(1 / 3, -1 / 3);
 */
declare class BezierInterpolation implements Interpolation2D.InterpolatorT {
    public c1: number;
    public c2: number;

    constructor(h1: number, h2: number);

    public interpolate(a: number, b: number, t: number): number;

    public setCoefficients(a: number, b: number): void;

    public static interpolate(a: number, b: number, t: number, c1: number, c2: number): number;
}

export = BezierInterpolation;