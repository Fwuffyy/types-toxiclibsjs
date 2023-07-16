import BernsteinPolynomial from "./BernsteinPolynomial";
import Vec2D from "./Vec2D";

interface Spline2DOptions {
    points?: Vec2D[];
    bernsteinPoly?: BernsteinPolynomial;
    tightness?: number;
}

declare class Spline2D {
    public static readonly DEFAULT_TIGHTNESS: 0.25;
    public static readonly DEFAULT_RES: 16;

    public pointList: Vec2D[];
    public bernstein: BernsteinPolynomial;
    public tightness: number;
    public coeffA: Vec2D[];
    public delta: Vec2D[];
    public bi: number[];
    
    public invTightness: number;
    public points: Vec2D[];
    public vertices: Vec2D[] | undefined;
    public numP: number;
    public arcLenIndex: number[] | undefined;

    constructor();
    constructor(rawPoints: Vec2D[]);
    constructor(options: Spline2DOptions);
    constructor(rawPoints: Vec2D[], bernsteinPolynomial: BernsteinPolynomial, tightness: number);

    public add(p: Vec2D[]): this;
    
    public computeVertices(res: number): Vec2D[];

    public findCPoints();

    public getDecimatedVertices(step: number, doAddFinalVertex?: boolean = true): Vec2D[];

    public getEstimatedArcLength(): number;

    public getNumPoints(): number;

    public getPointList(): Vec2D[];

    public getTightness(): number;

    public setPointList(plist: Vec2D[]): this;

    public setTightness(tight: number): this;

    public updateCoefficients();
}

export = Spline2D;