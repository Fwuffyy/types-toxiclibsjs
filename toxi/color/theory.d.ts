declare namespace theory {
    export const AnalagousStrategy: typeof import("./theory/AnalagousStrategy");
    export const ColorTheoryRegistry: typeof import("./theory/colorTheoryRegistry");
    /** @deprecated for back compatability */
    export const colorTheoryRegistry: typeof ColorTheoryRegistry;
    export const ComplementaryStrategy: typeof import("./theory/ComplementaryStrategy");
    export const CompoundTheoryStrategy: typeof import("./theory/CompoundTheoryStrategy");
    export const LeftSplitComplementaryStrategy: typeof import("./theory/LeftSplitComplementaryStrategy");
    export const MonochromeTheoryStrategy: typeof import("./theory/MonochromeTheoryStrategy");
    export const RightSplitComplementaryStrategy: typeof import("./theory/RightSplitComplementaryStrategy");
    export const SingleComplementStrategy: typeof import("./theory/SingleComplementStrategy");
    export const SplitComplementaryStrategy: typeof import("./theory/SplitComplementaryStrategy");
    export const TetradTheoryStrategy: typeof import("./theory/TetradTheoryStrategy");
    export const TriadTheoryStrategy: typeof import("./theory/TriadTheoryStrategy");

    /**
     * for creating custom strategies
     */
    export const strategies: typeof import("./theory/strategies");
}

export = theory;