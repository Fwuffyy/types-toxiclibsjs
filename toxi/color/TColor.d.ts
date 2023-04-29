import Hue from "./Hue";
import { AccessorT } from "./accessors";

type HSVArray = [ number, number, number ];
type HSVAArray = [ number, number, number, number ];

type RGBArray = [ number, number, number ];
type RGBAArray = [ number, number, number, number ];

type CMYKArray = [ number, number, number, number ];
type CMYKAArray = [ number, number, number, number, number];

/**
 * @class Creates a new TColor instance
 * @memberOf toxi.color
 */
declare class TColor {

	public rgb: [number, number, number];
	public hsv: [number, number, number];
	public cmyk: [number, number, number, number];
	public _alpha: number;

	constructor(tcolor?: TColor);

	public add(c: TColor): this;

	public addSelf(c: TColor): this;

	/**
	 * Changes the brightness of the color by the given amount in the direction
	 * towards either the black or white point (depending on if current
	 * brightness >= 50%)
	 *
	 * @param amount
	 * @return itself
	 */
	public adjustContrast(amount: number): this;

	/**
	 * Adds the given HSV values as offsets to the current color. Hue will
	 * automatically wrap.
	 *
	 * @param h
	 * @param s
	 * @param v
	 * @return itself
	 */
	public adjustHSV(h: number, s: number, v: number): this;

	/**
	 * Adds the given RGB values as offsets to the current color. TColor will
	 * clip at black or white.
	 * @param r
	 * @param g
	 * @param b
	 * @return itself
	 */
	public adjustRGB(r: number, g: number, b: number): this;

	public alpha(): number;

	/**
	 * Rotates this color by a random amount (not exceeding the one specified)
	 * and creates variations in saturation and brightness based on the 2nd
	 * parameter.
	 * @param theta
	 *            max. rotation angle (in radians)
	 * @param delta
	 *            max. sat/bri variance
	 * @return itself
	 */
	public analog(theta: number, delta: number): this;

	public black(): number;


	/**
	 * Blends the color with the given one by the stated amount
	 * @param c
	 *            target color
	 * @param t
	 *            interpolation factor
	 * @return itself
	 */
	public blend(c: TColor, t: number): this;

	public blue(): number;

	public brightness(): number;

	public complement(): this;

	public copy(): TColor;

	public darken(step: number): this;

	/**
	 * Reduced the color's saturation by the given amount.
	 * @param step
	 * @return itself
	 */
	public desaturate(step: number): this;

	public differenceTo(c: TColor): TColor;

	public distanceToCMYK(c: TColor): number;
	public distanceToHSV(c: TColor): number;
	public distanceToRGB(c: TColor): number;

	public equals(o: any): boolean;

	public getAnalog(theta: number, delta: number): TColor;

	public getBlended(c: TColor, t: number): TColor;

	public getClosestHue(primaryOnly?: boolean): Hue;

	public getComplement(): TColor;

	public getComponentValue(criteria: AccessorT): number;

	public getDarkened(step: number): TColor;

	public getDifferenceTo(c: TColor): TColor;

	public getInverted(): TColor;

	public getLightened(step: number): TColor;

	public getRotatedRYB(theta: number): TColor;

	public getSaturated(step: number): TColor;

	public green(): number;
	public hue(): number;

	public invert(): this;

	public isBlack(): boolean;
	public isGrey(): boolean;
	public isWhite(): boolean;
	
	public lighten(step: number): this;

	public luminance(): number;
	public magenta(): number;
	public red(): number;

	public rotateRYB(theta: number): this;

	public saturate(step: number): this;

	public saturation(): number;

	public setAlpha(alpha: number): this;

	public setARGB(argb: number): this;

	public setBlack(val: number): this;

	public setBlue(val: number): this;

	public setCMYK(cmyk: CMYKArray): this;
	public setCMYK(c: number, m: number, y: number, k: number): this;

	public setComponent(criteria: AccessorT, val: number): this;

	public setCyan(val: number): this;

	public setGreen(green: number): this;

	public setHSV(hsv: HSVArray): this;
	public setHSV(h: number, s: number, v: number): this;

	public setHue(hue: number): this;

	public setMagenta(val: number): this;

	public setRed(red: number): this;

	public setRGB(rgb: RGBArray): this;
	public setRGB(r: number, g: number, b: number): this;

	public setSaturation(saturation: number): this;

	public setYellow(val: number): this;

	public sub(c: TColor): TColor;

	public subSelf(c: TColor): this;

	public toARGB(): number;

	public toCMYKAArray(cmyka?: CMYKAArray): CMYKAArray;

	public toHex(): string;

	public toHexCSS(): string;

	public toHSVAArray(hsva?: HSVAArray): HSVAArray;

	/**
	 * To CSS's hsl() string
	 * @returns {string}
	 */
	public toHSLCSS(): string;

	/**
	 * To CSS's hsla() string
	 */
	public toHSLACSS(): string;

	/**
	 * To integer for color
	 */
	public toInt(): number;

	/**
	 * To an array of RGBA values
	 * @param rgba
	 * @param offset (optional)
	 * @return RGBA array
	 */
	public toRGBAArray(rgba?: RGBAArray, offset?: number): RGBAArray;

    /**
     * To an Array of RGBA decimal values, i.e. [255,255,255,255] for solid white
     * @param {Array|TypedArray} [rgba] optionally pass in an array or a TypedArray such as Uint8ClampedArray
     * @param {Number} [offset] index offset to put these values in the array
     * @return {Array}
     */
	public toRGBADecimalArray(rgba?: RGBAArray, offset?: number): RGBAArray;

	public toRGBCSS(asPercents?: boolean): string;

	public toRGBACSS(asPercents?: boolean): string;

	public toString(): string;

	public yellow(): number;


	public static readonly INV60DEGREES: 0.1666666666666666666;

	public static readonly INV8BIT: 0.00392157;

	public static readonly EPS: 0.001;

	/**
	 * Maximum rgb component value for a color to be classified as black.
	 * @see #isBlack()
	 */
	public static readonly BLACK_POINT: 0.08;

	/**
	 * Minimum rgb component value for a color to be classified as white.
	 * @see #isWhite()
	 */
	public static readonly WHITE_POINT: 1;

	/**
 	 * Maximum saturations value for a color to be classified as grey
	 * @see #isGrey()
	 */
	public static readonly GREY_THRESHOLD: 0.01;
	
	/**
	 * Converts CMYK floats into an RGB array.
	 * @param c
	 * @param m
	 * @param y
	 * @param k
	 * @param rgb optional rgb array to populate
	 * @return rgb array
	 */
	public static cmykToRGB(c: number, m: number, y: number, k: number, rgb?: RGBArray): RGBArray;

	/**
	 * Converts hex string into a RGB array.
	 * @param hexRGB
	 * @param rgb array optional
	 * @return rgb array
	 */
	public static hexToRGB(hexRGB: string, rgb?: RGBArray): RGBArray;

	/**
	 * Converts HSV values into RGB array.
	 * @param h
	 * @param s
	 * @param v
	 * @param rgb array optional
	 * @return rgb array
	 */
	public static hsvToRGB(h: number, s: number, v: number, rgb?: RGBArray): RGBArray;

	/**
	 * Converts CIE Lab to RGB components.
	 * First we have to convert to XYZ color space. Conversion involves using a
	 * white point, in this case D65 which represents daylight illumination.
	 * Algorithm adopted from: http://www.easyrgb.com/math.php
	 * @param l
	 * @param a
	 * @param b
	 * @param rgb
	 * @return rgb array
	 */
	public static labToRGB(l: number, a: number, b: number, rgb?: RGBArray): RGBArray;

	/**
	 * Factory method. Creates new color from ARGB int.
	 * @param argb
	 * @return new color
	 */
	public static newARGB(argb: number): TColor;

	/**
	 * Factory method. Creates new color from CMYK values.
	 * @param c
	 * @param m
	 * @param y
	 * @param k
	 * @return new color
	 */
	public static newCMYK(c: number, m: number, y: number, k: number): TColor;

	/**
	 * Factory method. Creates new color from CMYK + alpha values.
	 * @param c
	 * @param m
	 * @param y
	 * @param k
	 * @param a
	 * @return new color
	 */
	public static newCMYKA(c: number, m: number, y: number, k: number, a: number): TColor;

	/**
	 * Factory method. Creats a new color from any CSS color values
	 * @param css value
	 * @return new color
	 */
	public static newCSS(css: string): TColor;

	/**
	 * Factory method. Creates a new shade of gray + alpha.
	 * @param gray
	 * @return new color
	 */
	public static newGray(gray: number): TColor;

	public static newGrayAlpha(gray: number, alpha: number): TColor;

	/**
	 * Factory method. New color from hex string.
	 * @param hexRGB
	 * @return new color
	 */
	public static newHex(hexRGB: string): TColor;

	/**
	 * Factory method. New color from hsv values.
	 * @param h
	 * @param s
	 * @param v
	 * @return new color
	 */
	public static newHSV(h: number, s: number, v: number): TColor;

	public static newHSVA(h: number, s: number, v: number, a: number): TColor;

	/**
	 * Factory method. Creates new random color. Alpha is always 1.0.
	 * @return random color
	 */
	public static newRandom(): TColor;

	/**
	 * Factory method. Creates new color from RGB values. Alpha is set to 1.0.
	 * @param r
	 * 	@param g
	 * @param b
	 * @return new color
	 */
	public static newRGB(r: number, g: number, b: number): TColor;
	
	public static newRGBA(r: number, g: number, b: number, a: number): TColor;

	/**
	 * Converts the RGB values into a CMYK array.
	 * @param r 
	 * @param g 
	 * @param b 
	 * @param cmyk array optional
	 * @return cmyk array
	 */
	public static rgbToCMYK(r: number, g: number, b: number, cmyk?: CMYKArray): CMYKArray;

	/**
	 * Formats the RGB float values into hex integers.
	 * @param r
	 * @param g
	 * @param b
	 * @return hex string
	 */
	public static rgbToHex(r: number, g: number, b: number): string;

	/**
	 * Converts the RGB values into an HSV array.
	 * @param r 
	 * @param g 
	 * @param b 
	 * @param hsv optional
	 * @return hsv array
	 */
	public static rgbToHSV(r: number, g: number, b: number, hsv: HSVArray): HSVArray;

	public static readonly RED: TColor;

	public static readonly RYB_WHEEL: [
		any, // TODO Vec2D type
		any, any, any,
		any, any, any,
		any, any, any,
		any, any, any,
		any, any, any,
		any, any, any,
		any, any, any,
		any, any, any
	];

	public static readonly GREEN: TColor;
	public static readonly BLUE: TColor;
	public static readonly CYAN: TColor;
	public static readonly MAGENTA: TColor;
	public static readonly YELLOW: TColor;
	public static readonly BLACK: TColor;
	public static readonly WHITE: TColor;

	public static readonly X11: {
		indianred: TColor;
		lightcoral: TColor;
		salmon: TColor;
		darksalmon: TColor;
		lightsalmon: TColor;
		red: TColor;
		crimson: TColor;
		fireBrick: TColor;
		darkred: TColor;
		pink: TColor;
		lightpink: TColor;
		hotpink: TColor;
		deeppink: TColor;
		mediumvioletred: TColor;
		palevioletred: TColor;
		coral: TColor;
		tomato: TColor;
		orangered: TColor;
		darkorange: TColor;
		orange: TColor;
		gold: TColor;
		yellow: TColor;
		lightyellow: TColor;
		lemonchiffon: TColor;
		lightgoldenrodyellow: TColor;
		papayawhip: TColor;
		moccasin: TColor;
		peachpuff: TColor;
		palegoldenrod: TColor;
		khaki: TColor;
		darkkhaki: TColor;
		lavender: TColor;
		thistle: TColor;
		plum: TColor;
		violet: TColor;
		orchid: TColor;
		fuchsia: TColor;
		Magenta: TColor;
		mediumorchid: TColor;
		mediumpurple: TColor;
		blueviolet: TColor;
		darkviolet: TColor;
		darkorchid: TColor;
		darkmagenta: TColor;
		purple: TColor;
		indigo: TColor;
		darkslateblue: TColor;
		slateblue: TColor;
		mediumslateblue: TColor;
		greenyellow: TColor;
		chartreuse: TColor;
		lawngreen: TColor;
		lime: TColor;
		limegreen: TColor;
		palegreen: TColor;
		lightgreen: TColor;
		mediumspringgreen: TColor;
		springgreen: TColor;
		mediumseagreen: TColor;
		seagreen: TColor;
		forestgreen: TColor;
		green: TColor;
		darkgreen: TColor;
		yellowgreen: TColor;
		olivedrab: TColor;
		olive: TColor;
		darkolivegreen: TColor;
		mediumaquamarine: TColor;
		darkseagreen: TColor;
		lightseagreen: TColor;
		darkcyan: TColor;
		teal: TColor;
		aqua: TColor;
		cyan: TColor;
		lightcyan: TColor;
		paleturquoise: TColor;
		aquamarine: TColor;
		turquoise: TColor;
		mediumturquoise: TColor;
		darkturquoise: TColor;
		cadetblue: TColor;
		steelblue: TColor;
		lightsteelblue: TColor;
		powderblue: TColor;
		lightblue: TColor;
		skyblue: TColor;
		lightskyblue: TColor;
		deepskyblue: TColor;
		dodgerblue: TColor;
		cornflowerblue: TColor;
		royalblue: TColor;
		blue: TColor;
		mediumblue: TColor;
		darkblue: TColor;
		navy: TColor;
		midnightblue: TColor;
		cornsilk: TColor;
		blanchedalmond: TColor;
		bisque: TColor;
		navajowhite: TColor;
		wheat: TColor;
		burlywood: TColor;
		tan: TColor;
		rosybrown: TColor;
		sandybrown: TColor;
		goldenrod: TColor;
		darkgoldenrod: TColor;
		Peru: TColor;
		chocolate: TColor;
		saddlebrown: TColor;
		sienna: TColor;
		brown: TColor;
		maroon: TColor;
		white: TColor;
		snow: TColor;
		honeydew: TColor;
		mintcream: TColor;
		azure: TColor;
		aliceblue: TColor;
		ghostwhite: TColor;
		whitesmoke: TColor;
		seashell: TColor;
		beige: TColor;
		oldlace: TColor;
		floralwhite: TColor;
		ivory: TColor;
		antiquewhite: TColor;
		linen: TColor;
		lavenderblush: TColor;
		mistyrose: TColor;
		gainsboro: TColor;
		lightgray: TColor;
		silver: TColor;
		darkgray: TColor;
		gray: TColor;
		dimgray: TColor;
		lightslategray: TColor;
		slategray: TColor;
		darkslategray: TColor;
		black: TColor;
		bark: TColor;
		
		transparent: TColor;
	};
}

export = TColor;