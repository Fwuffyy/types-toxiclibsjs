import ColorList from "../ColorList";
import TColor from "../TColor";
import { ColorStrategyI } from "./strategies";

declare class MonochromeTheoryStrategy implements ColorStrategyI {
    public createListFromColor(src: TColor): ColorList;

    public getName(): string;
    public toString(): string;
}

export = MonochromeTheoryStrategy;