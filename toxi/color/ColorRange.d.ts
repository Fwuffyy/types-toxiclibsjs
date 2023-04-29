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

    // TODO FloatRange class
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
    constructor(hue: any, sat: any, bri: any, alpha: any, black: any, white: any, name: string);
    
    /**
     * Hue, saturation, brightness, alpha, name
     * @param [hue]
     * @param [sat]
     * @param [bri]
     * @param [alpha]
     * @param [name]
     */
    constructor(hue: any, sat: any, bri: any, alpha: any, name: string);

    /**
     * Hue, saturation, brightness, name
     * @param [hue]
     * @param [sat]
     * @param [bri]
     * @param [name]
     */
    constructor(hue: any, sat: any, bri: any, name: string);

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

    public addAlphaRange(range: any): this; // TODO float range
    public addAlphaRange(min: number, max: number): this;
    
    public addBrightnessRange(range: any): this; // TODO float range
    public addBrightnessRange(min: number, max: number): this;
    
    public addHue(hue: Hue): this;
    
    public addHueRange(range: any): this; // TODO float range
    public addHueRange(min: number, max: number): this;
    
    public addSaturationRange(range: any): this; // TODO float range
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

    // TODO Range set?
    public isValueInConstraint(val: number, rangeSet: any[]): boolean;

    public static readonly DEFAULT_VARIANCE: 0.035;

    public static readonly PRESETS: {
        LIGHT: any; // TODO float range
        DARK: any;
        BRIGHT: any;
        WEAK: any;
        NEUTRAL: any;
        FRESH: any;
        SOFT: any;
        HARD: any;
        WARM: any;
        COOL: any;
        INTENSE: any;
    };

    public static readonly LIGHT: any; // TODO float range
    public static readonly DARK: any;
    public static readonly BRIGHT: any;
    public static readonly WEAK: any;
    public static readonly NEUTRAL: any;
    public static readonly FRESH: any;
    public static readonly SOFT: any;
    public static readonly HARD: any;
    public static readonly WARM: any;
    public static readonly COOL: any;
    public static readonly INTENSE: any;

    // TODO float range
    public static getPresetForName(name: string): any;
}

export = ColorRange;