import Ray3D from "./Ray3D";
import Triangle3D from "./Triangle3D";
import { Vec3D } from "./vectors";

enum Classifier {
    FRONT = "front",
    BACK = "back",
    ON_PLANE = "on plane"
}

declare class Plane extends Vec3D {
    public static readonly Classifier: typeof Classifier;
    
    public static readonly XY: Plane;
    public static readonly XZ: Plane;
    public static readonly YZ: Plane;

    public normal: Vec3D;

    constructor();
    constructor(t: Triangle3D);
    constructor(origin: Vec3D, norm: Vec3D);

    /**
    * Classifies the relative position of the given point to the plane using
    * the given tolerance.
    * @return One of the 3 classification types: FRONT, BACK, ON_PLANE
    */
   public classifyPoint(p: Vec3D, tolerance: number): Classifier;

   public containsPoint(p: Vec3D): boolean;

   public getDistanceToPoint(p: Vec3D): number;

   public getIntersectionWithRay(r: Ray3D): Vec3D | undefined;

   public getProjectedPoint(p: Vec3D): Vec3D;

    /**
     * Calculates the distance of the vector to the given plane in the specified
     * direction. A plane is specified by a 3D point and a normal vector
     * perpendicular to the plane. Normalized directional vectors expected (for
     * rayDir and planeNormal).
     *
     * @param {Ray3D} ray intersection ray
     * @return {Number} distance to plane in world units, -1 if no intersection.
     */
    public intersectRayDistance(ray: Ray3D): number;

    /**
     * Creates a TriangleMesh representation of the plane as a finite, squared
     * quad of the requested size, centred around the current plane point.
     * @param size desired edge length
     * @return mesh
     */
    public toMesh(size: number)
    /**
     * Creates a TriangleMesh representation of the plane as a finite, squared
     * quad of the requested size, centred around the current plane point.
     * @param {TriangleMesh} mesh (optional)
     * @param size desired edge length
     * @return mesh
     */
    public toMesh(mesh: any, size: number) // TODO TriangleMesh
}

export = Plane;