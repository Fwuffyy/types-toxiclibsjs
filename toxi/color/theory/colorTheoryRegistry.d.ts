import AnalagousStrategy from "./AnalagousStrategy";
import ComplementaryStrategy from "./ComplementaryStrategy";
import CompoundTheoryStrategy from "./CompoundTheoryStrategy";
import LeftSplitComplementaryStrategy from "./LeftSplitComplementaryStrategy";
import MonochromeTheoryStrategy from "./MonochromeTheoryStrategy";
import RightSplitComplementaryStrategy from "./RightSplitComplementaryStrategy";
import SingleComplementStrategy from "./SingleComplementStrategy";
import SplitComplementaryStrategy from "./SplitComplementaryStrategy";
import TetradTheoryStrategy from "./TetradTheoryStrategy";
import TriadTheoryStrategy from "./TriadTheoryStrategy";
import { ColorStrategyI } from "./strategies";

declare interface ColorStrategiesI {
    "analagous": typeof AnalagousStrategy;
    "complementary": typeof ComplementaryStrategy;
    "compound": typeof CompoundTheoryStrategy;
    "leftSplitComplementary": typeof LeftSplitComplementaryStrategy;
    "monochrome": typeof MonochromeTheoryStrategy;
    "rightSplitComplementary": typeof RightSplitComplementaryStrategy;
    "singleComplementary": typeof SingleComplementStrategy;
    "splitComplementary": typeof SplitComplementaryStrategy;
    "tetrad": typeof TetradTheoryStrategy;
    "triad": typeof TriadTheoryStrategy;
}

declare function getRegisteredNames(): (keyof ColorStrategiesI)[];

declare function getRegisteredStrategies(): (ColorStrategiesI[keyof ColorStrategiesI])[];

declare function getStrategyForName<T extends keyof ColorStrategiesI>(id: T): ColorStrategiesI[T];

declare function registerImplementation(impl: ColorStrategyI): void;

declare const analagous: AnalagousStrategy;
declare const complementary: ComplementaryStrategy;
declare const compound: CompoundTheoryStrategy;
declare const leftSplitComplementary: LeftSplitComplementaryStrategy;
declare const monochrome: MonochromeTheoryStrategy;
declare const rightSplitComplementary: RightSplitComplementaryStrategy;
declare const singleComplementary: SingleComplementStrategy;
declare const splitComplementary: SplitComplementaryStrategy;
declare const tetrad: TetradTheoryStrategy;
declare const triad: TriadTheoryStrategy;

export {
    getRegisteredNames,
    getRegisteredStrategies,
    getStrategyForName,
    registerImplementation,

    ColorStrategiesI,

    analagous as ANALAGOUS,
    complementary as COMPLEMENTARY,
    compound as COMPOUND,
    leftSplitComplementary as LEFT_SPLIT_COMPLEMENTARY,
    monochrome as MONOCHROME,
    rightSplitComplementary as RIGHT_SPLIT_COMPLEMENTARY,
    singleComplementary as SINGLE_COMPLEMENT,
    splitComplementary as SPLIT_COMPLEMENTARY,
    tetrad as TETRAD,
    triad as TRIAD
}