import ColorList from "../ColorList";
import TColor from "../TColor";
import { ColorStrategyI } from "./strategies";

/**
 * creates an instance of a LeftSplitComplementaryStrategy
 * @constructor
 */
declare class LeftSplitComplementaryStrategy implements ColorStrategyI {
    public createListFromColor(src: TColor): ColorList;

    public getName(): string;
    public toString(): string;
}

export = LeftSplitComplementaryStrategy;