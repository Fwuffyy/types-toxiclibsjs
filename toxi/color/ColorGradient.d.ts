import { NumberComparatorResult } from "../common";
import ColorList from "./ColorList";
import TColor from "./TColor";

/**
 * A protected object for every point on the gradient
 */
declare class _GradPoint {
    public pos: number;
    public c: TColor;

    constructor(p: number, c: TColor);

    public compareTo(p: _GradPoint): NumberComparatorResult

    public getColor(): TColor;

    public getPosition(): number;
}

declare class ColorGradient {
    public gradient: _GradPoint[];
    public interpolator: any; // TODO LinearInterpolation class
    public maxDither: number;

	/**
	 * Adds a new color at specified position.
	 * @param p position in the gradient
	 * @param c color to add
	 */
    public addColorAt(p: number, c: TColor): void;

	/**
	 * Calculates the gradient from specified position.
	 * @param pos position to start at (float)
	 * @param width (integer)
	 * @return list of interpolated gradient colors
	 */
    public calcGradient(pos: number, width: number): ColorList;

    public getGradientPoints(): _GradPoint[];

    /**
     * @return th einterpolator
     */
    public getInterpolator(): any; // TODO LinearInterpolator

    /**
     * @return the maximum dither amount
     */
    public getMaxDither(): number;

    /**
     * @param interpolator the interpolator to set
     */
    public setInterpolator(interpolator: any): void // TODO Some interpolator type

	/**
	 * Sets the maximum dither amount. Setting this to values >0 will jitter the
	 * interpolated colors in the calculated gradient. The value range for this
	 * parameter is 0.0 (off) to 1.0 (100%).
	 * @param maxDither
	 */
    public setMaxDither(maxDither: number): void;
}

export = ColorGradient;