import ColorRange from "./ColorRange";
import ColorList from "./ColorList";
import TColor from "./TColor";

/**
 * @private
 * internal object for a part of the theme
 * @param {ColorRange} range
 * @param {TColor} color
 * @param {Number} weight
 */
declare class _ThemePart {
    public range: ColorRange;
    public color: TColor;
    public weight: number;

    constructor(range: ColorRange, color: TColor, weight: number);

    public getColor(): TColor;
}

/**
 * A ColorTheme is a weighted collection of {@link ColorRange}s used to define
 * custom palettes with a certain balance between individual colors/shades. New
 * theme parts can be added via textual descriptors referring to one of the
 * preset {@link ColorRange}s and/or {@link NamedColor}s: e.g.
 * "warm springgreen". For each theme part a weight has to be specified. The
 * magnitude of the weight value is irrelevant and is only important in relation
 * to the weights of other theme parts. For example: Theme part A with a weight
 * of 0.5 will only have 1/20 of the weight of theme part B with a weight of 5.0...
 */
declare class ColorTheme {
    public name: string;
    public parts: _ThemePart[];
    public _weightedSum: number;

    constructor(name: string);

    /**
     * Add a range to the theme
     * @param {ColorRange} range a range
     * @param {TColor} color a color
     * @param {number} [weight] a weight
     * @return itself
     */
    public addRange(range: ColorRange, color: TColor, weight: number): this;

    /**
     * Add a range to the theme
     * @param {string} descriptor a tokenized string
     * @param {number} weight a weight
     * @return itself
     */
    public addRange(descriptor: string, weight: number): this;

    public getColor(): TColor | null;

    /**
     * Creates a {ColorList} of {TColor} based on the theme's
     * ranges and balance defined by their weights
     * @param {number} num the number of colors to put in the list
     */
    public getColors(num: number): ColorList;

    /**
     * @return the theme's name
     */
    public getName(): string;
}

export = ColorTheme;