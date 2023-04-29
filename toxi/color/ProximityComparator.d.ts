import { NumberComparatorResult } from "../common";
import TColor from "./TColor";
import { DistanceProxyT } from "./distanceProxies";

declare class ProximityComparator {
	constructor(col: TColor, proxy: DistanceProxyT);

	public compare(a: TColor, b: TColor): NumberComparatorResult;
}

export = ProximityComparator;