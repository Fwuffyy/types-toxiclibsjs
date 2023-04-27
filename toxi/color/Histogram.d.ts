import ColorList from "./ColorList";
import { ArrayIterator } from "../internals/Iterator";
import HistEntry from "./HistEntry";

declare class Histogram {
	public palette: ColorList;
	public entries: HistEntry[];

	/**
	 * Histogram constructor
	 * @param palette
	 */
	constructor(palette: ColorList);

	/**
	 * @param {Number} tolerance color tolerance used to merge similar colors
	 * (based on RGB distance)
	 * @param {Boolean} blendCols switch to enable color blending of binned colors
	 * @type sorted histogram as List of HistEntry
	 */
	public compute(tolerance: number, blendCols: boolean): HistEntry[];

	public getEntries(): HistEntry[];

	public getPalette(): ColorList;

	public iterator(): ArrayIterator<HistEntry>;

	public setPalette(palette: ColorList): void;
}

export = Histogram;