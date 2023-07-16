import { Vec3D } from "./vectors";

declare class Sphere extends Vec3D {
    public static EARTH_RADIUS: 6371.00877141;
    
    public radius: number;

    constructor();
    constructor(s: Sphere);
    constructor(radius: number);
    constructor(v: Vec3D, r: number);

    public containsPoint(p: Vec3D);
    
    /**
     * Alternative to {@link SphereIntersectorReflector}. Computes primary &
     * secondary intersection points of this sphere with the given ray. If no
     * intersection is found the method returns null. In all other cases, the
     * returned array will contain the distance to the primary intersection
     * point (i.e. the closest in the direction of the ray) as its first index
     * and the other one as its second. If any of distance values is negative,
     * the intersection point lies in the opposite ray direction (might be
     * useful to know). To get the actual intersection point coordinates, simply
     * pass the returned values to {@link Ray3D#getPointAtDistance(float)}.
     * @param ray
     * @return 2-element float array of intersection points or null if ray
     * doesn't intersect sphere at all.
     */
    public intersectsRay(ray: Ray3D): [number, number];

    /**
     * Considers the current vector as centre of a collision sphere with radius
     * r and checks if the triangle abc intersects with this sphere. The Vec3D p
     * The point on abc closest to the sphere center is returned via the
     * supplied result vector argument.
     * @param t triangle to check for intersection
     * @param result a non-null vector for storing the result
     * @return true, if sphere intersects triangle ABC
     */
    public intersectsSphereTriangle(t: any, result: Vec3D); // TODO Triangle3D

    /**
     * Calculates the normal vector on the sphere in the direction of the
     * current point.
     * @param q
     * @return a unit normal vector to the tangent plane of the ellipsoid in the
     * point.
     */
    public tangentPlaneNormalAt(q: Vec3D): Vec3D;

    public toMesh(res: number): any;
    public toMesh(mesh: any, res: number): any; // TODO Mesh3D
}

declare namespace Sphere {
    /**
     * @class This implementation of a {@link SurfaceFunction} samples a given
     * {@link Sphere} instance when called by the {@link SurfaceMeshBuilder}.
     */
    declare class SphereFunction {
        public sphere: Sphere;
        public phiRange: number;
        public thetaRange: number;

        constructor();
        constructor(sphere: Sphere);
        constructor(radius: number);

        public computeVertexFor(p: Vec3D, phi: number, theta: number);

        public getPhiRange(): number;

        public getPhiResolutionLimit(res: number): number;
        public getPhiResolutionLimit<T>(res: T): T;

        public getThetaRange(): number;

        public getThetaResolutionLimit(res: number): number;
        public getThetaResolutionLimit<T>(res: T): T;

        public setMaxPhi(max: number);

        public setMaxTheta(max: number);
    }
}

export = Sphere;