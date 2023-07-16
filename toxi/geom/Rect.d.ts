import Line2D from "./Line2D";
import Polygon2D from "./Polygon2D";
import Ray2D from "./Ray2D";
import { Vec2D } from "./vectors";

declare class Rect {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    constructor();
    constructor(p1: Vec2D, p2: Vec2D);
    constructor(x: number, y: number, width: number, height: number);

    public containsPoint(p: Vec2D): boolean;

    public copy(): Vec2D;

    public getArea(): number;

    public getAspect(): number;

    public getBottom(): number;

    public getBottomRight(): Vec2D;

    public getCentroid(): Vec2D;

    public getDimensions(): Vec2D;

    public getEdge(id: 0 | 1 | 2 | 3): Line2D;

    public getLeft(): number;

    public getRight(): number;

    public getTop(): number;

    public getTopLeft(): Vec2D;

    public growToContainPoint(p: Vec2D): this;

    public intersectsRay(ray: Ray2D, minDist: number, maxDist: number)

    public intersectsRect(r: Rect): boolean;

    public scale(s: number): this;

    public set(r: Rect);
    public set(x: number, y: number, width: number, height: number);

    public setDimensions(dim: Vec2D): this;

    public setPosition(pos: Vec2D): this;

    public toPolygon2D(): Polygon2D;

    public toString(): string;

    public union(r: Rect): this;

    public static fromCenterExtent(center: Vec2D, extent: Vec2D): Rect;

    public static getBoundingRect(points: Vec2D[]): Rect;
}

export = Rect;