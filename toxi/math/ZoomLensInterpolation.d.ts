import CircularInterpolation from "./CircularInterpolation";
import Interpolation2D from "./Interpolation2D";

/**
 * @class This class provides an adjustable zoom lens to either bundle or dilate values
 * around a focal point within a given interval. For a example use cases, please
 * have a look at the provided ScaleMapDataViz and ZoomLens examples.
 * @member toxi
 */
declare class ZoomLensInterpolation implements Interpolation2D.InterpolatorT {
    public leftImpl: CircularInterpolation;
    public rightImpl: CircularInterpolation;
    public lensPos: number;
    public lensStrength: number;
    public absStrength: number;

    constructor(lensPos: number, lensStrength: number);

    public interpolate(min: number, max: number, t: number): number;

    public setLensPos(pos: number, smooth: number): void;

    public setLensStrength(str: number, smooth: number): void;
}

export = ZoomLensInterpolation;