declare namespace color {
    export const AccessCriteria: typeof import("./color/accessCriteria");
    /** @deprecated for back compatability */
    export const accessCriteria: typeof AccessCriteria;
    export const AlphaAccessor: typeof import("./color/AlphaAccessor");
    export const CMYKAccessor: typeof import("./color/CMYKAccessor");
    export const CMYKDistanceProxy: typeof import("./color/CMYKDistanceProxy");
    export const ColorGradient: typeof import("./color/ColorGradient");
    export const ColorList: typeof import("./color/ColorList");
    export const ColorRange: typeof import("./color/ColorRange");
    export const ColorTheme: typeof import("./color/ColorTheme");
    export const createListUsingStrategy: typeof import("./color/createListUsingStrategy");
    export const HistEntry: typeof import("./color/HistEntry");
    export const Histogram: typeof import("./color/Histogram");
    export const HSVAccessor: typeof import("./color/HSVAccessor");
    export const HSVDistanceProxy: typeof import("./color/HSVDistanceProxy");
    export const Hue: typeof import("./color/Hue");
    export const LuminanceAccessor: typeof import("./color/LuminanceAccessor");
    export const NamedColor: typeof import("./color/namedColor");
    /** @deprecated for back compatability */
    export const namedColor: typeof NamedColor;
    export const ProximityComparator: typeof import("./color/ProximityComparator");
    export const RGBAccessor: typeof import("./color/RGBAccessor");
    export const RGBDistanceProxy: typeof import("./color/RGBDistanceProxy");
    export const TColor: typeof import("./color/TColor");
    export const theory: typeof import("./color/theory");
    export const ToneMap: typeof import("./color/ToneMap");
}

export = color;