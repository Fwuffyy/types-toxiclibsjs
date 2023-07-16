import Interpolation2D from "./Interpolation2D";

/**
 * @class Delivers a number of decimated/stepped values for a given interval. E.g. by
 * using 5 steps the interpolation factor is decimated to: 0, 20, 40, 60, 80 and
 * 100%. By default {@link LinearInterpolation} is used, however any other
 * {@link InterpolateStrategy} can be specified via the constructor.
 * @member toxi
 */
declare class DecimatedInterpolation<T extends Interpolation2D.InterpolatorT> implements Interpolation2D.InterpolatorT {
    public numSteps: number;
    public strategy: T;

    constructor(steps: number, strategy?: T);

    public interpolate(a: number, b: number, f: number): number;
}

export = DecimatedInterpolation;