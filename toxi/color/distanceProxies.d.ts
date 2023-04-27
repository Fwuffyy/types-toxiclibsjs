import TColor from "./TColor";

declare class DistanceProxy {
	public distanceBetween(a: TColor, b: TColor): number;
}

declare class HSVDistanceProxy extends DistanceProxy {}
declare class RGBDistanceProxy extends DistanceProxy {}
declare class CMYKDistanceProxy extends DistanceProxy {}

declare type DistanceProxyT = HSVDistanceProxy |
	RGBDistanceProxy |
	CMYKDistanceProxy;

export {
	HSVDistanceProxy,
	RGBDistanceProxy,
	CMYKDistanceProxy,
	
	DistanceProxyT
}