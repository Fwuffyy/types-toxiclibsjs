import AABB from "./AABB";
import { Vec3D } from "./vectors";

declare class Triangle3D {
    public a: Vec3D;
    public b: Vec3D;
    public c: Vec3D;
    public normal: Vec3D;
    public centroid: Vec3D;

    public t: Vec3D;

    constructor();
    constructor(a: Vec3D, b: Vec3D, c: Vec3D);

    public closestPointOnSurface(p: Vec3D): Vec3D;

    public computeCentroid(): Vec3D;

    public computeNormal(): Vec3D;

    public containsPoint(p: Vec3D): boolean;

    public flipVertexOrder(): this;

    public fromBarycentric(p: Vec3D): Vec3D;

    public getBoundingBox(): AABB;

    public getClosestPointTo(p: Vec3D): Vec3D;

    public isClockwiseInXY(): boolean;

    public isClockwiseInXZ(): boolean;
    
    public isClockwiseInYZ(): boolean;

    public set(a2: Vec3D, b2: Vec3D, c2: Vec3D);

    public toBarycentric(p: Vec3D): Vec3D;

    public toString(): string;

    public static createEquilateralFrom(a: Vec3D, b: Vec3D): Triangle3D;

    public static isClockwiseInXY(a: Vec3D, b: Vec3D, c: Vec3D): boolean;

    public static isClockwiseInXZ(a: Vec3D, b: Vec3D, c: Vec3D): boolean;

    public static isClockwiseInYZ(a: Vec3D, b: Vec3D, c: Vec3D): boolean;
}

export = Triangle3D;