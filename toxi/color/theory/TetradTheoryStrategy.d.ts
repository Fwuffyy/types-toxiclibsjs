import ColorList from "../ColorList";
import TColor from "../TColor";
import { ColorStrategyI } from "./strategies";

/**
 * Implements the <a href="http://www.tigercolor.com/color-lab/color-theory/color-theory-intro.htm#rectangle">
 * tetradic color scheme
 * </a> to create 4 compatible colors for the given one.
 */
declare class TetradTheoryStrategy implements ColorStrategyI {
    public theya: number;

    constructor(theta?: number);

    public createListFromColor(src: TColor): ColorList;

    public getName(): string;
    public toString(): string;
}

export = TetradTheoryStrategy;