import ColorList from "../ColorList";
import TColor from "../TColor";
import { ColorStrategyI } from "./strategies";

/**
 * Implements the <a href="http://www.tigercolor.com/color-lab/color-theory/color-theory-intro.htm#triadic">
 * triadic color scheme
 * </a> to create 3 compatible colors for the given one.
 */
declare class TriadTheoryStrategy implements ColorStrategyI {
    public createListFromColor(src: TColor): ColorList;

    public getName(): "triad";
    public toString(): string;
}

export = TriadTheoryStrategy;