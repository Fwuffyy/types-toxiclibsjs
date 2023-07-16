import Ray3D from "./Ray3D";
import Vec3D from "./Vec3D";

declare type LineIntersectionType = (typeof Line3DIntersection.Type)[keyof typeof Line3DIntersection.Type];

declare class Line3DIntersection {
    public type: LineIntersectionType;
    public line: Line3D;
    public coeff: [ number, number ];

    constructor(type: Line3DIntersection, line: Line3D, mua?: number, mub?: number);

    public getCoefficient(): [ number, number ];

    public getLength(): number | undefined;

    public getLine(): Line3D | undefined;

    public getType(): LineIntersectionType;

    public isIntersectionInside(): boolean;

    public toString(): string;

    public static readonly Type: {
        NON_INTERSECTING: 0,
        INTERSECTING: 1
    }
}

declare class Line3D {
    public a: Vec3D;
    public b: Vec3D;

    constructor(vec_a: Vec3D, vec_b: Vec3D);

    public closestLineTo(l: Line3D): Line3DIntersection;

    /**
     * Computes the closest point on this line to the given one.
     *
     * @param p point to check against
     * @return closest point on the line
     */
    public closestPointTo(p: Vec3D): Vec3D;

    public copy(): Line3D;

    public equals(obj: any): boolean;

    public equals(obj: Line3D): boolean;

    public getDirection(): Vec3D;

    public getLength(): number;

    public getLengthSquared(): number;

    public getMidPoint(): Vec3D;

    public getNormal(): Vec3D;

    public hasEndPoint(p: Vec3D): boolean;

    public offsetAndGrowBy(offset: Vec3D, scale: number, ref?: Vec3D): this;

    public set(vec_a: Vec3D, vec_b: Vec3D): this;

    public splitIntoSegments(segments: Vec3D[], stepLength: number, addFirst?: boolean): Vec3D[];

    public toRay3D(): Ray3D;

    public toString(): string;

    /**
     * Splits the line between A and B into segments of the given length,
     * starting at point A. The tweened points are added to the given result
     * list. The last point added is B itself and hence it is likely that the
     * last segment has a shorter length than the step length requested. The
     * first point (A) can be omitted and not be added to the list if so
     * desired.
     *
     * @param a start point
     * @param b end point (always added to results)
     * @param stepLength desired distance between points
     * @param segments existing array list for results (or a new list, if null)
     * @param addFirst false, if A is NOT to be added to results
     * @return list of result vectors
     */
    public static splitIntoSegments(vec_a: Vec3D, vec_b: Vec3D, stepLength: number, segments?: Vec3D[] | null, addFirst?: boolean): Vec3D[];

    public static readonly LineIntersection: typeof Line3DIntersection;
}

export = Line3D;