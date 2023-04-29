import { MathInterpolatorT } from "../common";

interface ScaleMapOptions {
    input: _RangeOptions;
    output: _RangeOptions;
}

interface _RangeOptions {
    min: number;
    max: number;
}

/**
 * @private
 */
declare class _Range {
    constructor(min: number, max: number);

    public toString(): string;
}

/**
 * @class This class maps values from one interval into another. By default the mapping
 * is using linear projection, but can be changed by using alternative
 * {@link math.InterpolateStrategy} implementations to achieve a
 * non-regular mapping.
 *
 * @member toxi
 *
 * @description Creates a new instance to map values between the 2 number ranges
 * specified. By default linear projection is used.
 */ 
declare class ScaleMap {
    public mapFunction: MathInterpolatorT;
    public _interval: number;
    public _in: _Range;
    public _out: _Range;

    /**
     * @param {Number} minIn
     * @param {Number} maxIn
     * @param {Number} minOut
     * @param {Number} maxOut
     */
    constructor(minIn: number, maxIn: number, minOut: number, maxOut: number);

    /**
     * Options object
     * @param options options
     */
    constructor(options: ScaleMapOptions);

    /**
     * Computes mapped value in the target interval and ensures the input value
     * is clipped to source interval.
     * 
     * @param val
     * @return mapped value
     */
    public getClippedValueFor(val: number): number;

    /**
     * @return the middle value of the input range.
     */
    public getInputMedian(): number;

    /**
     * @return the in
     */
    public getInputRange(): _Range;

    /**
     * @return the mapped middle value of the output range. Depending on the
     *         mapping function used, this value might be different to the one
     *         returned by {@link #getOutputMedian()}.
     */
    public getMappedMedian(): number;

    /**
     * Computes mapped value in the target interval. Does check if input value
     * is outside the input range.
     * 
     * @param val
     * @return mapped value
     */
    public getMappedValueFor(val: number): number;

    /**
     * @return the middle value of the output range
     */
    public getOutputMedian(): number;

    /**
     * @return the output range
     */
    public getOutputRange(): _Range;

    /**
     * Sets new minimum & maximum values for the input range
     * 
     * @param min
     * @param max
     */
    public setInputRange(min: number, max: number): void;

    /**
     * Overrides the mapping function used for the scale conversion.
     * 
     * @param func
     *            interpolate strategy implementation
     */
    public setMapFunction(func: MathInterpolatorT): void;

    /**
     * Sets new minimum & maximum values for the output/target range
     * 
     * @param min
     *            new min output value
     * @param max
     *            new max output value
     */
    public setOutputRange(min: number, max: number): void;

    public toString(): string;
}

export = ScaleMap;