import Ray3D from "./Ray3D";
import Sphere from "./Sphere";
import Triangle3D from "./Triangle3D";
import Vec3D from "./Vec3D";

/**
 * @class Axis-aligned Bounding Box
 */
declare class AABB extends Vec3D {
    public extent: Vec3D;
    public min: Vec3D;
    public max: Vec3D;

    constructor();

    constructor(a: number);
    
    constructor(aabb: AABB);
    
    constructor(a: Vec3D, b: number);

    constructor(a: Vec3D, b: AABB);

    public containsPoint(p: Vec3D): boolean;

    public copy(): AABB;

    /**
     * Returns the current box size as new Vec3D instance (updating this vector
     * will NOT update the box size! Use {@link #setExtent(ReadonlyVec3D)} for
     * those purposes)
     *
     * @return box size
     */
    public getExtent(): Vec3D;

    public getMax(): Vec3D;

    public getMin(): Vec3D;

    public getNormalForPoint(p: Vec3D): Vec3D;

    /**
     * Adjusts the box size and position such that it includes the given point.
     *
     * @param p point to include
     * @return itself
     */
    public includePoint(p: Vec3D): this;

    /**
     * Checks if the box intersects the passed in one.
     *
     * @param box box to check
     * @return true, if boxes overlap
     */
    public intersectsBox(box: AABB): boolean;

    /**
     * Calculates intersection with the given ray between a certain distance
     * interval.
     *
     * Ray-box intersection is using IEEE numerical properties to ensure the
     * test is both robust and efficient, as described in:
     *
     * Amy Williams, Steve Barrus, R. Keith Morley, and Peter Shirley: "An
     * Efficient and Robust Ray-Box Intersection Algorithm" Journal of graphics
     * tools, 10(1):49-54, 2005
     *
     * @param ray incident ray
     * @param minDist
     * @param maxDist
     * @return intersection point on the bounding box (only the first is
     *         returned) or null if no intersection
     */
    public intersectsRay(ray: Ray3D, minDist: number, maxDist: number): boolean;

    /**
     * @param c sphere centre
     * @param r sphere radius
     * @return true, if AABB intersects with sphere
     */
    public intersectsSphere(c: Vec3D, r: number): boolean;

    /**
     * @param c sphere
     * @return true, if AABB intersects with sphere
     */
    public intersectsSphere(c: Sphere): boolean;

    public intersectsTriangle(tri: Triangle3D): boolean;

    public planeBoxOverlap(normal: Vec3D, d: number, maxbox: AABB): boolean;

    /**
     * Updates the position of the box in space and calls
     * {@link #updateBounds()} immediately
     *
     * @see geom.Vec3D#set(float, float, float)
     */
    public set(a: number, b: number, c: number): this;

    public set(aabb: AABB): this;

    public set(v: Vec3D): this;

    public setExtent(extent: Vec3D): this;

    public testAxis(a: number, b: number, fa: number, fb: number, va: number, vb: number, wa: number, wb: number, ea: number, eb: number): boolean;

    public toMesh(mesh?: any): any // TODO Mesh classes

    public static fromMinMax(min: number, max: number): AABB;

    public toString(): string;

    /**
     * Updates the min/max corner points of the box. MUST be called after moving
     * the box in space by manipulating the public x,y,z coordinates directly.
     *
     * @return itself
     */
    public updateBounds(): this;
}

export = AABB;