import Vec2D from "./Vec2D";

declare class Line2D {
    public a: Vec2D;
    public b: Vec2D;

    constructor(a: Vec2D, b: Vec2D);

    /**
     * Computes the dot product of these 2 vectors: line start -> point
     * and the perpendicular line direction if the result is negative.
     *
     * @param {Vec2D} p
     * @return classifier Number
     */
    public classifyPoint(p: Vec2D): -1 | 0 | 1;

	/**
     * Computes the closest point on this line to the point given.
     *
     * @param {Vec2D} p point to check against
     * @return closest point on the line
     */
    public closestPointTo(p: Vec2D): Vec2D;

    public copy(): Line2D;

    public distanceToPoint(p: Vec2D): number;

    public distanceToPointSquared(p: Vec2D): number;

    public equals(obj: any): boolean;

    public equals(obj: Line2D): boolean;

    public getDirection(): Vec2D;

    public getHeading(): number;

    public getLength(): number;

    public getLengthSquared(): number;

    public getMidPoint(): Vec2D;

    public getNormal(): number;

    public getTheta(): number;

    public hasEndPoint(p: Vec2D): boolean;

	/**
     * Computes intersection between this and the given line. The returned value
     * is a {@link Line2DIntersection} instance and contains both the type of
     * intersection as well as the intersection point (if existing).
     *
     * Based on: http://local.wasp.uwa.edu.au/~pbourke/geometry/lineline2d/
     *
     * @param l line to intersect with
     * @return intersection result
     */
    public intersectLine(l: Line2D): Line2DIntersection;

    public offsetAndGrowBy(offset: Vec2D, scale: number, ref?: Vec2D): this;

    public scale(scale: number): this;

    public set(a: Vec2D, b: Vec2D): this;

    public splitIntoSegments(segments: Vec2D[] | null, stepLength: number, addFirst?: boolean): Vec2D[];

    public toRay2D(): any; // TODO Ray2D

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
    public static splitIntoSegments(a: Vec2D, b: Vec2D, stepLength: number, segments?: Vec2D[] | null, addFirst?: boolean): Vec2D[];
}

declare namespace Line2D {
    declare enum Line2DIntersectionType {
        COINCIDENT = 0,
        COINCIDENT_NO_INTERSECT = 4,
        PARALLEL = 1,
        NON_INTERSECTING = 2,
        INTERSECTING = 3
    }
    
    /**
     * Internal class for LineIntersection
     */
    declare class Line2DIntersection {
        public type: LineIntersectionType;
        public pos: Vec2D;
        public coeff: [ number, number ];
    
        /**
         * @param {Number} type one of the Line2D.LineIntersection.Type
         * @param {Vec2D} pos the intersected point
         * @param {Number} ua coefficient
         * @param {Number} ub coefficient
         */
        constructor(type: LineIntersectionType, pos: Vec2D, ua: number, ub: number);
    
        public getPos(): Vec2D | undefined;
    
        public getCoefficients(): [ number, number ];
    
        public getType(): LineIntersectionType;
    
        public toString(): string;
    
        public static readonly Type: typeof Line2DIntersectionType;
    }
}

export = Line2D;