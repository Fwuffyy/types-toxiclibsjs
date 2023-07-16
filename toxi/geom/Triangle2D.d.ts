import Circle from "./Circle";
import Polygon2D from "./Polygon2D";
import Vec2D from "./Vec2D";

declare class Triangle2D {
    public a: Vec2D;
    public b: Vec2D;
    public c: Vec2D;
    public centroid: Vec2D;

    constructor();
    constructor(a: Vec2D, b: Vec2D, c: Vec2D);

    public adjustTriangleSizeBy(offset: number): this;
    public adjustTriangleSizeBy(offAB: number, offBC: number, offCA: number): this;

	/**
     * Checks if point vector is inside the triangle created by the points a, b
     * and c. These points will create a plane and the point checked will have
     * to be on this plane in the region between a,b,c.
     * 
     * Note: The triangle must be defined in clockwise order a,b,c
     * 
     * @return true, if point is in triangle.
     */
    public computeCentroid(): Vec2D;

    public containsPoint(p: Vec2D): boolean;

    public copy(): Triangle2D;

    public flipVertexOrder(): this;

    public getArea(): number;

    public getBounds(): Rect;

    public getCircumCircle(): Circle;

    public getCircumference(): number;

    public getClosestPointTo(p: Vec2D): Vec2D;

    public intersectsTriangle(tri: Triangle2D): boolean;

    public isClockwise(): boolean;

    public set(a2: number, b2: number, c2: number);

    public toPolygon2D(): Polygon2D;

    public toString(): string;

    public static createEquilateralFrom(a: Vec2D, b: Vec2D): Triangle2D;

    public static isClockwise(a: Vec2D, b: Vec2D, c: Vec2D): boolean;
}

export = Triangle2D;