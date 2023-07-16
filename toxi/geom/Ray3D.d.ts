import Line3D from "./Line3D";
import { Vec3D } from "./vectors";

declare class Ray3D extends Vec3D {
    public dir: Vec3D;

    constructor();
    constructor(o: Vec3D, d: Vec3D);
    constructor(x: number, y: number, z: number, d: Vec3D);

    /**
     * Returns a copy of the ray's direction vector.
     * 
     * @return vector
     */
    public getDirection(): Vec3D;

    /**
     * Calculates the distance between the given point and the infinite line
     * coinciding with this ray.
     * @param p
     */
    public getDistanceToPoint(p: Vec3D): number;

    /**
     * Returns the point at the given distance on the ray. The distance can be
     * any real number.
     * @param dist
     * @return vector
     */
    public getPointAtDistance(dist: number): Vec3D;

    /**
     * Uses a normalized copy of the given vector as the ray direction.
     * @param d new direction
     * @return itself
     */
    public setDirection(d: Vec3D): this;

    /**
     * Converts the ray into a 3D Line segment with its start point coinciding
     * with the ray origin and its other end point at the given distance along
     * the ray.
     * @param dist end point distance
     * @return line segment
     */
    public toLine3DWithPointAtDistance(dist: number): Line3D;

    public toString(): string;
}

export = Ray3D;