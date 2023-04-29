import ColorList from "./ColorList";
import TColor from "./TColor";
import { ColorStrategiesI } from "./theory/colorTheoryRegistry";
import { ColorStrategyI } from "./theory/strategies";

/**
 * Factory method. Creates a new ColorList based on the given
 * {@link ColorTheoryStrategy} instance and the given source color. The
 * number of colors returned will vary with the strategy chosen.
 * @param strategy either a string
 * for a strategy, such as "splitComplementary" or an instance of a strategy
 * @param c a color to base the strategy off
 * @return new list
 */
declare function createListUsingStrategy(strategy: keyof ColorStrategiesI, c: TColor): ColorList;
declare function createListUsingStrategy(strategy: ColorStrategyI, c: TColor): ColorList;

export = createListUsingStrategy;