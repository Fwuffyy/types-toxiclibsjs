/**
 * @class
 * @memberOf toxi.color
 * 
 * This class defines color hues and allows them to be access by name. There are
 * also methods to check if a hue is one of the 7 primary hues (rainbow) or to
 * find the closest defined hue for a given color.
 */
declare class Hue {
    public _isPrimary: boolean;
    public hue: number;
    public name: string;

    /**
     * construct a new hue
     * @param name 
     * @param hue (range 0-1)
     * @param isPrimary optionally flag as primary hue
     * @constructor
     */
    constructor(name: string, hue: number, isPrimary?: boolean);

    public getHue(): number;
    
    public getName(): string;

    public isPrimary(): boolean;

    public toString(): string;

    public static readonly PRESETS: {
        RED: Hue;
        ORANGE: Hue;
        YELLOW: Hue;
        LIME: Hue;
        GREEN: Hue;
        TEAL: Hue;
        CYAN: Hue;
        AZURE: Hue;
        BLUE: Hue;
        INDIGO: Hue;
        PURPLE: Hue;
        PINK: Hue;
    };

    public static readonly RED: Hue;
    public static readonly ORANGE: Hue;
    public static readonly YELLOW: Hue;
    public static readonly LIME: Hue;
    public static readonly GREEN: Hue;
    public static readonly TEAL: Hue;
    public static readonly CYAN: Hue;
    public static readonly AZURE: Hue;
    public static readonly BLUE: Hue;
    public static readonly INDIGO: Hue;
    public static readonly PURPLE: Hue;
    public static readonly PINK: Hue;

    public static readonly PRIMARY_VARIANCE: 0.01;

    /**
     * Finds the closest defined & named Hue for the given hue value.
     * Optionally, the serach can be limited to primary hues only.
     * @param hue
     * @param primaryOnly
     */
    public static getClosest(hue: number, primaryOnly?: boolean): Hue;

    public static getForName(name: string): Hue;

    public static isPrimary(hue: number, variance?: number): boolean;
}

export = Hue;