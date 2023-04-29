import { ArrayIterator } from "../internals/Iterator";
import { CallbackIterator } from "../common";
import TColor from "./TColor";
import { AccessorT } from "./accessors";

/**
 * @class Creates a ColorList by wrapping the given ArrayList of colors. No copies
 * of the given colors are created (shallow copy only).
 * @memberOf toxi.color
 * A container class of concrete colors. ColorLists can be built manually and
 * are also created when working with {@link ColorRange}s. The class has various
 * methods to manipulate all colors in the list in parallel, as well as sort
 * them by various criteria.
 * @see {ColorRange}
 * @see {AccessCriteria}
 */
declare class ColorList {
	public colors: TColor[];

	constructor();

	/** tcolor */
	constructor(colors: TColor);

	/** an array of tcolors */
	constructor(colors: TColor[]);
	
	/** argb integers */
	constructor(colors: number[]);

	/**
	 * Adds a copy of the given color to the list
	 * @param c 
	 * @return itself
	 */
	public add(c: TColor): this;

	/**
	 * Adds all entries of the TColor collection to the list (shallow copy only,
	 * manipulating the new list will modify the original colors).
	 * @param {Array} collection
	 * @return itself
	 */
	public addAll(collection: TColor[]): this;

	/**
	 * Adjusts the brightness component of all list colors by the given amount.
	 * @param step adjustment value
	 * @return itself
	 */
	public adjustBrightness(step: number): this;

	/**
	 * Adjusts the saturation component of all list colors by the given amount.
	 * @param step
	 * @return itself
	 */
	public adjustSaturation(step: number): this;

	/**
	 * Sorts the list based on two criteria to create clusters/segments within
	 * the list
	 * @param clusterCriteria main sort criteria
	 * @param subClusterCriteria secondary sort criteria
	 * @param numClusters number of clusters
	 * @param isReversed true, if reversed sort
	 * @return itself
	 */
	public clusterSort(clusterCriteria: AccessorT, subClusterCriteria: AccessorT, numClusters: number, isReversed?: boolean): this;

	/**
	 * Switches all list colors to their complementary color.
	 * @return itself
	 */
	public complement(): this;

	/**
  	 * Checks if the given color is part of the list. Check is done by value,
	 * not instance.
	 * @param color
	 * @return true, if the color is present.
	 */
	public contains(color: TColor): boolean;

	public each(fn: CallbackIterator<TColor>): this;

	/**
	 * Returns the color at the given index. This function follows Python
	 * convention, in that if the index is negative, it is considered relative
	 * to the list end. Therefore the color at index -1 is the last color in the
	 * list.
	 * @param i index
	 * @return color
	 */
	public get(i: number): TColor;

	/**
	 * Calculates and returns the average color of the list.
	 * @return average color or null, if there're no entries yet.
	 */
	public getAverage(): TColor | undefined;

	/**
  	 * Creates a new ColorList by blending all colors in the list with each
   	 * other (successive indices only)
	 * @param amount blend amount
	 * @return new color list
	 */
	public getBlended(amount: number): ColorList;

	/**
	 * Finds and returns the darkest color of the list.
	 * @return darkest color or null if there're no entries yet.
	 */
	public getDarkest(): TColor;

	/**
	 * Finds and returns the lightest (luminance) color of the list.
	 * @return lightest color or null, if there're no entries yet.
	 */
	public getLightest(): TColor;

	public getRandom(): TColor;

	public getReverse(): ColorList;
	
	public invert(): this;

	public iterator(): ArrayIterator<TColor>;
	
	public reverse(): TColor[];

	public rotateRYB(theta: number, isRadians: boolean): this;

	public size(): number;

	public sort(): this;


	/**
	 * Sorts the list using the given comparator.
	 * @param comp comparator
	 * @param isReversed true, if reversed sort
	 * @return itself
	 */
	public sortByComparator(comp: Comparator<TColor> | AccessorT, isReversed: boolean): this;


	/**
	* Sorts the list using the given {@link AccessCriteria}.
	* @param criteria sort criteria
	* @param isReversed true, if reversed sort
	* @return itself
	*/
	public sortByCriteria(criteria: AccessorT, isReversed: boolean): this;

	// TODO HSVDistanceProxy and etc types
	// Distance proxy
	
	/**
	 * Sorts the list by relative distance to each predecessor, starting with
	 * the darkest color in the list.
     * @param {toxi.color.*{DistanceProxy}} proxy
	 * @param isReversed true, if list is to be sorted in reverse.
	 * @return itself
	 */
	public sortByDistance(proxy: any, isReversed?: boolean): this;

	// TODO Proxy
	/**
	 * Sorts the list by proximity to the given target color (using RGB distance
	 * metrics).
	 * @param target color
	 * @param proxy proxy
	 * @param isReversed true, if reverse sorted
	 * @return sorted list
	 */
	public sortByProximityTo(target: TColor, proxy: any, isReversed: boolean): this;

	public toARGBArray(): number[];

	/**
	 * Factory method. Creates a new ColorList of colors randomly sampled from
	 * the given ARGB image array. If the number of samples equals or exceeds
	 * the number of pixels in the source image and no unique colors are
	 * required, the function will simply return the same as
	 * {@link #ColorList(int[])}.
	 * @param pixels
	 *            int array of ARGB pixels
	 * @param num
	 *            number of colors samples (clipped automatically to number of
	 *            pixels in the image)
	 * @param uniqueOnly
	 *            flag if only unique samples are to be taken (doesn't guarantee
	 *            unique colors though)
	 * @param maxIterations (optional)
	 *            max number of attempts to find a unique color. If no more
	 *            unique colors can be found the search is terminated.
	 * @return new color list of samples
	 */
	public static createFromARGBArray(pixels: number[], num: number, uniqueOnly: boolean, maxIterations: number): ColorList;

	/**
	 * Not allowed, use toxi/color/createListUsingStrategy instead
	 * @deprecated
	 * @throws {Error}
	 */
	public static createUsingStrategy(): ColorList;
}

// TODO ProximityComparator
type Comparator<T> = (a: T, b: T) => number;

export = ColorList;