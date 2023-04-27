import { AlphaAccessor, CMYKAccessor, HSVAccessor, LuminanceAccessor, RGBAccessor } from "./accessors";

declare const HUE: HSVAccessor;
declare const SATURATION: HSVAccessor;
declare const BRIGHTNESS: HSVAccessor;

declare const RED: RGBAccessor
declare const GREEN: RGBAccessor
declare const BLUE: RGBAccessor

declare const CYAN: CMYKAccessor
declare const MAGENTA: CMYKAccessor
declare const YELLOW: CMYKAccessor
declare const BLACK: CMYKAccessor

declare const ALPHA: AlphaAccessor
declare const LUMINANCE: LuminanceAccessor

export {
	HUE,
	SATURATION,
	BRIGHTNESS,
	
	RED,
	GREEN,
	BLUE,
	
	CYAN,
	MAGENTA,
	YELLOW,
	BLACK,

	ALPHA,
	LUMINANCE
};