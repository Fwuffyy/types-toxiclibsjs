import ColorList from "toxiclibsjs/color/ColorList";
import TColor from "toxiclibsjs/color/TColor";

// TODO StrategyT

/**
 * Factory method. Creates a new ColorList based on the given
 * {@link ColorTheoryStrategy} instance and the given source color. The
 * number of colors returned will vary with the strategy chosen.
 * @param strategy either a string
 * for a strategy, such as "splitComplementary" or an instance of a strategy
 * @param c a color to base the strategy off
 * @return new list
 */
declare function createListUsingStrategy(strategy: any, c: TColor): ColorList;
// TODO strategy names
declare function createListUsingStrategy(strategy: any, c: TColor): ColorList;

export = createListUsingStrategy;