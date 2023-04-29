import ColorList from "../ColorList";
import TColor from "../TColor";

interface ColorStrategyI {
    getName(): string;

    toString(): string;

    createListFromColor(src: TColor): ColorList
}

declare abstract class ColorStrategy implements ColorStrategyI {
    public getName(): string;

    public toString(): string;

    public createListFromColor(src: TColor): ColorList
}

declare function create(name: string, constructor: any, extend?: any): ColorStrategy;

declare function wrap(x: number, min: number, threshold: number, plus: number): number;

export {
    create,
    wrap,
    ColorStrategyI
}