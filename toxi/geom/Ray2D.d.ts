import Line2D from "./Line2D";
import { Vec2D } from "./vectors";

declare class Ray2D extends Vec2D {
    public dir: Vec2D;

    constructor();
    constructor(x: number, y: number, direction: Vec2D);
    constructor(position: Vec2D, direction: Vec2D);

    public getDirection(): Vec2D;

    /**
     * Calculates the distance between the given point and the infinite line
     * coinciding with this ray.
     */
    public getDistanceToPoint(p: Vec2D): number;

    public getPointAtDistance(dist: number): Vec2D;

    /**
     * Uses a normalized copy of the given vector as the ray direction.
     *
     * @param d new direction
     * @return itself
     */
    public setDirection(d: Vec2D): this;

    /**
     * Converts the ray into a 2D Line segment with its start point coinciding
     * with the ray origin and its other end point at the given distance along
     * the ray.
     *
     * @param dist end point distance
     * @return line segment
     */
    public toLine2DWithPointAtDistance(dist: number): Line2D;

    public toString(): string;
}

export = Ray2D;