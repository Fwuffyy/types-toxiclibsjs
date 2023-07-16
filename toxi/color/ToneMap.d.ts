import Interpolation2D from "../math/Interpolation2D";
import ScaleMap from "../math/ScaleMap";
import ColorGradient from "./ColorGradient";
import ColorList from "./ColorList";
import TColor from "./TColor";

/**
 * ToneMap
 * 
 * @usages
 * `new ToneMap( min, max, gradient );`
 * 
 * or
 * 
 * `new ToneMap( min, max, colorList );`
 * 
 * or
 * 
 * `new ToneMap( a, b, colorA, colorB );`
 * 
 * or
 * 
 * `new ToneMap( min, max, colorA, colorB, resolution );`
 */
declare class ToneMap {
    public map: ScaleMap;
    public colors: ColorList;

    /**
     * @param {Number} min `min` or `a`
     * @param {Number} max `max` or `b`
     * @param {ColorGradient} gradient
     */
    constructor(min: number, max: number, gradient: ColorGradient);
    
    /**
     * @param {Number} min `min` or `a`
     * @param {Number} max `max` or `b`
     * @param {ColorList} colorList
     */
    constructor(min: number, max: number, colorList: ColorList);
    
    /**
     * @param {Number} a `min` or `a`
     * @param {Number} b `max` or `b`
     * @param {TColor} colorA
     * @param {TColor} colorB
     */
    constructor(a: number, b: number, colorA: TColor, colorB: TColor);
    
    /**
     * @param {Number} min `min` or `a`
     * @param {Number} max `max` or `b`
     * @param {TColor} colorA
     * @param {TColor} colorB
     * @param {number} resolution
     */
    constructor(min: number, max: number, colorA: TColor, colorB: TColor, resolution: number);

    public getARGBToneFor(t: number): number;

    /**
     * Get a color from a tonal value
     * @param t
     * @return {TColor}
     */
    public getToneFor(t: number): TColor;

    /**
     * Applies the tonemap to all elements in the given source array of
     * values and places the resulting ARGB color in the corresponding
     * index of the target pixel buffer. If the target buffer is null, a new one
     * will be created automatically.
     *
     * @param {Array<Number>} src source array of values to be tone mapped
     * @param {Array<Number>} pixels target pixel buffer
     * @param {Number} [offset] optionally provide an index-offset to start
     * at in the destination pixels array
     * @return pixel array
     */
    public getToneMappedArray(src: number[], pixels: number[], offset?: number): number[];

    /**
     * @param {InterpolateStrategy} func
     */
    public setMapFunction(func: Interpolation2D.InterpolatorT): void;
}

export = ToneMap;