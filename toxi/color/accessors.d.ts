import TColor from "./TColor";

declare abstract class Accessor {
	public component: number;

	constructor(comp: number);

	public static compare(a: TColor, b: TColor): boolean;

	public static getComponentValueFor(col: TColor): number;
	
	public static setComponentValueFor(col: TColor, val: number): void;
}

export type AccessorT = typeof Accessor;

declare function RGBAccessor(): void;
declare function HSVAccessor(): void;
declare function CMYKAccessor(): void;

declare function LuminanceAccessor(): void;
declare function AlphaAccessor(): void;

declare class RGBAccessor extends Accessor {}
declare class HSVAccessor extends Accessor {}
declare class CMYKAccessor extends Accessor {}

declare class LuminanceAccessor extends Accessor {
	public static setComponentValueFor(): void;
}

declare class AlphaAccessor extends Accessor {
	public static setComponentValueFor(col: TColor, value: number): void;
}

export {
	RGBAccessor,
	HSVAccessor,
	CMYKAccessor,

	LuminanceAccessor,
	AlphaAccessor
}