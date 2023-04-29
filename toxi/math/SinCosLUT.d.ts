/**
 * @class Lookup table for fast sine & cosine computations. Tables with varying
 * precisions can be created to which input angles will be rounded to. The
 * sin/cos methods can be used with both positive and negative input angles as
 * with the normal Math.sin()/Math.cos() versions.
 * @member toxi
 */
declare class SinCosLUT {
    public precision: number;
    public period: number;
    public quadrant: number;
    public deg2rad: number;
    public rad2deg: number;
    public sinLUT: number[];

    constructor(precision?: number);

    /**
     * Calculate cosine for the passed in angle in radians.
     *
     * @param theta
     * @return cosine value for theta
     */
    public cos(theta: number): number;

    public getPeriod(): number;

    public getPrecision: number;

    public getSinLUT(): number[];

    /**
     * Calculates sine for the passed angle in radians.
     *
     * @param theta
     * @return sine value for theta
     */
    public sin(theta: number): number;

    public static DEFAULT_PRECISION: 0.25;
    public static DEFAULT_INSTANCE: SinCosLUT;
    
    public static getDefaultInstance(): SinCosLUT;
}

export = SinCosLUT;