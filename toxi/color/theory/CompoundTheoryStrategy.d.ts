import ColorList from "../ColorList";
import TColor from "../TColor";
import { ColorStrategyI } from "./strategies";

declare class CompoundTheoryStrategy implements ColorStrategyI {
    public _isFlipped: boolean;

    constructor(flipped: boolean);

    public createListFromColor(src: TColor): ColorList;

    public isFlipped(): boolean;

    public setFlipped(state: boolean): void;

    public toString(): string;
    public getName(): string;
}

export = CompoundTheoryStrategy;