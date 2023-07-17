import FloatRange from "../util/datatypes/FloatRange";
import ColorList from "./ColorList";
import Hue from "./Hue";
import TColor from "./TColor";

/**
 * construct a new ColorRange,
 * this constructor takes a wide variety of param signatures
 */
declare class ColorRange {
    /**
     * From a ColorList
     * @param list
     */
    constructor(list: ColorList);

    /**
     * Hue, saturation, brightness, alpha, black, white, name
     * @param hue
     * @param sat
     * @param bri
     * @param alpha
     * @param black
     * @param white
     * @param name
     */
    constructor(hue: FloatRange, sat: FloatRange, bri: FloatRange, alpha: FloatRange, black: FloatRange, white: FloatRange, name: string);
    
    /**
     * Hue, saturation, brightness, alpha, name
     * @param [hue]
     * @param [sat]
     * @param [bri]
     * @param [alpha]
     * @param [name]
     */
    constructor(hue?: FloatRange, sat?: FloatRange, bri?: FloatRange, alpha?: FloatRange, name?: string);

    /**
     * Hue, saturation, brightness, name
     * @param [hue]
     * @param [sat]
     * @param [bri]
     * @param [name]
     */
    constructor(hue?: FloatRange, sat?: FloatRange, bri?: FloatRange, name?: string);

    /**
     * Hue
     * @param hue
     */
    constructor(hue: Hue);

    /**
     * From a color
     * @param c
     */
    constructor(c: TColor);

    public add(rc: TColor): this;
    public add(rc: ColorRange): this;

    public addAlphaRange(range: FloatRange): this;
    public addAlphaRange(min: number, max: number): this;
    
    public addBrightnessRange(range: FloatRange): this;
    public addBrightnessRange(min: number, max: number): this;
    
    public addHue(hue: Hue): this;
    
    public addHueRange(range: FloatRange): this;
    public addHueRange(min: number, max: number): this;
    
    public addSaturationRange(range: FloatRange): this;
    public addSaturationRange(min: number, max: number): this;

    public contains(c: TColor): boolean;

    public copy(c: TColor, variance?: number): ColorRange;

    public getColor(hue_c: Hue): TColor;
    public getColor(hue_c: TColor, variance: number): TColor;

    public getColors(num: number): ColorList;
    public getColors(c: TColor, num: number, variance: number): ColorList;

    public getGrayscale(brightness: number, variance: number): TColor;

    public getName(): string;

    public getSum(range: ColorRange): ColorRange;

    public isValueInConstraint(val: number, rangeSet: FloatRange[]): boolean;

    public static readonly DEFAULT_VARIANCE: 0.035;

    public static readonly PRESETS: {
        LIGHT: FloatRange;
        DARK: FloatRange;
        BRIGHT: FloatRange;
        WEAK: FloatRange;
        NEUTRAL: FloatRange;
        FRESH: FloatRange;
        SOFT: FloatRange;
        HARD: FloatRange;
        WARM: FloatRange;
        COOL: FloatRange;
        INTENSE: FloatRange;
    };

    public static readonly LIGHT: FloatRange;
    public static readonly DARK: FloatRange;
    public static readonly BRIGHT: FloatRange;
    public static readonly WEAK: FloatRange;
    public static readonly NEUTRAL: FloatRange;
    public static readonly FRESH: FloatRange;
    public static readonly SOFT: FloatRange;
    public static readonly HARD: FloatRange;
    public static readonly WARM: FloatRange;
    public static readonly COOL: FloatRange;
    public static readonly INTENSE: FloatRange;

    public static getPresetForName(name: string): FloatRange;
}

export = ColorRange;