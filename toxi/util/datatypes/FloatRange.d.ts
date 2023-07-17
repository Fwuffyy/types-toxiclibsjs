declare class FloatRange {
    public min: number;
    public max: number;
    public currValue: number;

    /**
     * construct a new `FloatRange`
     * provides utilities for dealing with a range of Numbers.
     * @param {Number} [min=0] the minimum in the range
     * @param {Number} [max=1.0] the maximum in the range
     * @constructor
     */
    constructor(min: number = 0, max?: number = 1);

    public adjustCurrentBy(val: number): number;

    public copy(): FloatRange;

    /**
     * Returns the value at the normalized position <code>(0.0 = min ... 1.0 =
     * max-EPS)</code> within the range. Since the max value is exclusive, the
     * value returned for position 1.0 is the range max value minus
     * {@link MathUtils#EPS}. Also note the given position is not being clipped
     * to the 0.0-1.0 interval, so when passing in values outside that interval
     * will produce out-of-range values too.
     * @param {Number} perc
     * @return {Number} value within the range
     */
    public getAt(perc: nunber): number;

    public getCurrent(): number;

    public getMedian(): number;

    public getRange(): number;

    public isValueInRange(val: number): boolean;

    public pickRandom(): number;

    public setCurrent(val: number): number;

    public toArray(step: number): number[];

    public toString(): string;
}

export = FloatRange;