import BernsteinPolynomial from "./BernsteinPolynomial";
import { Vec3D } from "./vectors";

interface Spline3DOptions {
    points?: Vec3D[];
    bernsteinPolynomial?: BernsteinPolynomial;
    tightness?: number;
}

declare class Spline3D {
    public static readonly DEFAULT_TIGHTNESS: 0.25;
    public static readonly DEFAULT_RES: 16;
    
    public pointList: Vec3D[];
    public tightness: number;
    public bernstein: BernsteinPolynomial;
    public coeffA: Vec3D[];
    public delta: Vec3D[];
    public bi: number[];

    public vertices: Vec3D[];
    public points: Vec3D[];
    public numP: number;

    constructor();
    constructor(rawPoints: Vec3D[]);
    constructor(options: Spline3DOptions);
    constructor(rawPoints: Vec3D[], bernsteinPolynomial: BernsteinPolynomial, tightness: number);

    public add(p: Vec3D[]): this;

    public computeVertices(res: number): Vec3D[];

    public findCPoints();

    public getDecimatedVertices(step: number, doAddFinalVertex?: boolean = true): Vec3D[];

    public getEstimatedArcLength(): number;

    public getNumPoints(): number;

    public getPointList(): Vec3D[];

    public getTightness(): number;

    public setPointList(plist: Vec3D[]): this;

    public setTightness(tight: number): this;

    public updateCoefficients();
}

export = Spline3D;