import { NumberComparatorResult } from "../common";
import TColor from "./TColor";

declare class ProximityComparator {
	// TODO proxy
	constructor(col: TColor, proxy: any);

	public compare(a: TColor, b: TColor): NumberComparatorResult;
}

export = ProximityComparator;