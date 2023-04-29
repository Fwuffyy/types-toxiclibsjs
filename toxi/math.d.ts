declare namespace math {
    /**
     * @class Bezier curve interpolation with configurable coefficients. The curve
     * parameters need to be normalized offsets relative to the start and end values
     * passed to the {@link #interpolate(float, float, float)} method, but can
     * exceed the normal 0 .. 1.0 interval. Use symmetrical offsets to create a
     * symmetrical curve, e.g. this will create a curve with 2 dips reaching the
     * minimum and maximum values at 25% and 75% of the interval...
     * @member toxi
     *
     * @example
     * <p>
     * <code>BezierInterpolation b=new BezierInterpolation(3,-3);</code>
     * </p>
     *
     * The curve will be a straight line with this configuration:
     *
     * <p>
     * <code>BezierInterpolation b=new BezierInterpolation(1f/3,-1f/3);</code>
     * </p>
     */
    export const BezierInterpolation: typeof import("./math/BezierInterpolation");

    /**
     * @class Implementation of the circular interpolation function.
     *
     * i = a-(b-a) * (sqrt(1 - (1 - f) * (1 - f) ))
     * @description The interpolation slope can be flipped to have its steepest ascent
     * towards the end value, rather than at the beginning in the default
     * configuration.
     * @member toxi
     *
     * @param isFlipped
     *            true, if slope is inverted
     */
    export const CircularInterpolation: typeof import("./math/CircularInterpolation");

    /**
     * @class Implementation of the cosine interpolation function:
     * i = b+(a-b)*(0.5+0.5*cos(f*PI))
     * @member toxi
     */
    export const CosineInterpolation: typeof import("./math/CosineInterpolation");

    /**
     * @class Delivers a number of decimated/stepped values for a given interval. E.g. by
     * using 5 steps the interpolation factor is decimated to: 0, 20, 40, 60, 80 and
     * 100%. By default {@link LinearInterpolation} is used, however any other
     * {@link InterpolateStrategy} can be specified via the constructor.
     * @member toxi
     */
    export const DecimatedInterpolation: typeof import("./math/DecimatedInterpolation");

    /**
     * @class Exponential curve interpolation with adjustable exponent. Use exp in the
     * following ranges to achieve these effects:
     * <ul>
     * <li>0.0 &lt; x &lt; 1.0 : ease in (steep changes towards b)</li>
     * <li>1.0 : same as {@link LinearInterpolation}</li>
     * <li>&gt; 1.0 : ease-out (steep changes from a)</li>
     * </ul>
     * @member toxi
     */
    export const ExponentialInterpolation: typeof import("./math/ExponentialInterpolation");

    /**
     * @namespace Implementations of 2D interpolation functions (currently only bilinear).
     * @member toxi
     */
    export const Interpolation2D: typeof import("./math/Interpolation2D");

    /**
     * @class Implementation of the linear interpolation function
     *
     * i = a + ( b - a ) * f
     * @member toxi
     */
    export const LinearInterpolation: typeof import("./math/LinearInterpolation");

    /**
     * @class
     * @static
     * @member toxi
     * @description math utilities
     */
    export const MathUtils: typeof import("./math/mathUtils");
    /** @deprecated for backwards compatability */
    export const mathUtils: typeof MathUtils;

    /**
     * @class This class maps values from one interval into another. By default the mapping
     * is using linear projection, but can be changed by using alternative
     * {@link math.InterpolateStrategy} implementations to achieve a
     * non-regular mapping.
     *
     * @member toxi
     *
     * @description Creates a new instance to map values between the 2 number ranges
     * specified. By default linear projection is used.
     * @param {Number} minIn
     * @param {Number} maxIn
     * @param {Number} minOut
     * @param {Number} maxOut
     */ 
    export const ScaleMap: typeof import("./math/ScaleMap");

    /**
     * @class Initializes the s-curve with default sharpness = 2
     * @member toxi
     */
    export const SigmoidInterpolation: typeof import("./math/SigmoidInterpolation");

    /**
     * @class Lookup table for fast sine & cosine computations. Tables with varying
     * precisions can be created to which input angles will be rounded to. The
     * sin/cos methods can be used with both positive and negative input angles as
     * with the normal Math.sin()/Math.cos() versions.
     * @member toxi
     */
    export const SinCosLUT: typeof import("./math/SinCosLUT");

    /**
     * @class Defines a single step/threshold function which returns the min value for all
     * factors &lt; threshold and the max value for all others.
     * @member toxi
     */
    export const ThresholdInterpolation: typeof import("./math/ThresholdInterpolation");

    /**
     * @class This class provides an adjustable zoom lens to either bundle or dilate values
     * around a focal point within a given interval. For a example use cases, please
     * have a look at the provided ScaleMapDataViz and ZoomLens examples.
     * @member toxi
     */
    export const ZoomLensInterpolation: typeof import("./math/ZoomLensInterpolation");

    export const noise: any;
    export const waves: any;
}

export = math;