import ColorList from "../ColorList";
import TColor from "../TColor";
import { ColorStrategyI } from "./strategies";

/**
 * Implements the <a href="http://www.tigercolor.com/color-lab/color-theory/color-theory-intro.htm#complementary">
 * single complementary color scheme
 * </a> to create a compatible color for the
 * given one.
 */
declare class SingleComplementStrategy implements ColorStrategyI {
    public createListFromColor(src: TColor): ColorList;

    public toString(): string;
    public getName(): "complement";
}

export = SingleComplementStrategy;