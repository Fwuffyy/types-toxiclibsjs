import ColorList from "../ColorList";
import TColor from "../TColor";
import { ColorStrategyI } from "./strategies";

declare class AnalagousStrategy implements ColorStrategyI {
    public theta: number;
    public contrast: number;

    constructor(theta: number, contrast?: number);

    public createListFromColor(src: TColor): ColorList;

    public getName(): string;
    public toString(): string;
}

export = AnalagousStrategy;