import { ColorStrategyI } from "./strategies";

/**
 * Implements the <a href="http://www.tigercolor.com/color-lab/color-theory/color-theory-intro.htm#split-complementary">
 * split-complementary color scheme
 * </a> to create 2 compatible colors for the
 * given one.
 */
declare class SplitComplementaryStrategy implements ColorStrategyI {
    public createListFromColor(src: import("../TColor")): import("../ColorList");
    
    public toString(): string;
    public getName(): string;
}

export = SplitComplementaryStrategy;