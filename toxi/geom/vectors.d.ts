import AABB from "./AABB";
import Rect from "./Rect";

declare type Vec2DAxisComponent = typeof Vec2D.Axis.X | typeof Vec2D.Axis.Y;
declare type Vec2DAxisComponentEnum = 0 | 1;

declare type Vec3DAxisComponent = typeof Vec3D.Axis.X | typeof Vec3D.Axis.Y | typeof Vec3D.Axis.Z;
declare type Vec3DAxisComponentEnum = 0 | 1 | 2;

/**
 * @class a two-dimensional vector class
 */
declare class Vec2D {
    public x: number;
    public y: number;

    constructor();

    constructor(vec2d: Vec2D);

    constructor(a: number, b: number);

    public abs(): this;

    public add(a: number, b: number): Vec2D;

    /**
     * Adds vector {a,b,c} and overrides coordinates with result.
     *
     * @param a X coordinate
     * @param b Y coordinate
     * @return itself
     */
    public addSelf(a: number, b: number): this;

    public angleBetween(v: Vec2D, faceNormalize?: boolean): number;

    /**
     * Sets all vector components to 0.
     *
     * @return itself
     */
    public clear(): this;

    public compareTo(vec: Vec2D): number;

    /**
     * Forcefully fits the vector in the given rectangle.
     *
     * @param rect A rectangle
     * @return itself
     */
    public constrain(rect: Rect): this;

    /**
     * Forcefully fits the vector in the given rectangle.
     *
     * @param min Vec2D min
     * @param max Vec2D max
     * @return itself
     */
    public constrain(min: Vec2D, max: Vec3D): this;

    public copy(): Vec2D;

    public cross(v: Vec2D): number;

    public distanceTo(v: Vec2D): number;

    public distanceToSquared(v: Vec2D): number;

    public dot(v: Vec2D): number;

    public equals(obj: any): boolean;
    
    public equals(obj: Vec2D): boolean;

    public equalsWithTolerance(v: any): boolean;

    public equalsWithTolerance(v: Vec2D, tolerance: number): boolean;

    public floor(): this;

    /**
     * Replaces the vector components with the fractional part of their current
     * values
     *
     * @return itself
     */
    public frac(): this;

    public getAbs(): Vec2D;

    public getComponent(id: Vec2DAxisComponentEnum): number;

    public getComponent(id: Vec2DAxisComponent): number;

    public getConstrained(r: number): Vec2D;

    public getFloored(): Vec2D;

    public getFrac(): Vec2D;

    public getInverted(): Vec2D;

    public getLimited(lim: number): Vec2D;

    public getNormalized(): Vec2D;

    public getPerpendicular(): Vec2D;

    public getReciprocal(): Vec2D;

    public getReflected(normal: Vec2D): Vec2D;

    public getRotated(theta: number): Vec2D;

    public getSignum(): Vec2D;

    public heading(): number;

    // TODO MathInterpolatorT
    public interpolateTo(v: Vec2D, f: number, s: any): Vec2D;

    // TODO MathInterpolatorT
    /**
     * Interpolates the vector towards the given target vector, using linear
     * interpolation
     *
     * @param v target vector
     * @param f interpolation factor (should be in the range 0..1)
     * @return itself, result overrides current vector
     */
    public interpolateToSelf(v: Vec2D, f: number, s: any): this;

    public invert(): this;

    public isInCircle(sO: Vec2D, sR: number): boolean;

    public isInRectangle(rect: Rect): boolean;

    public isInTriangle(a: Vec2D, b: Vec2D, c: Vec2D): boolean;

    public isMajorAxis(tol: number): boolean;

    public isZeroVector(): boolean;

    /**
     * Adds random jitter to the vector in the range -j ... +j using the default
     * {@link Random} generator of {@link MathUtils}.
     *
     * @param a maximum x jitter
     * @param b maximum y jitter
     * @return itself
     */
    public jitter(a: number, b: number): this;

    /**
     * Adds random jitter to the vector in the range -j ... +j using the default
     * {@link Random} generator of {@link MathUtils}.
     *
     * @param a maximum Vec2D jitter
     * @return itself
     */
    public jitter(v: Vec2D): this;

    public limit(lim: number): this;

    public magnitude(): number;

    public max(v: Vec2D): Vec2D;

    public maxSelf(v: Vec2D): this;

    public min(v: Vec2D): Vec2D;

    public minSelf(v: Vec2D): this;

    /**
     * Normalizes the vector so that its magnitude = 1
     *
     * @return itself
     */
    public normalize(): this;

    /**
     * Normalizes the vector to the given length.
     *
     * @param len desired length
     * @return itself
     */
    public normalizeTo(len: number): this;

    public perpendicular(): this;

    public positiveHeading(): number;

    public reciprocal(): this;

    public reflect(normal: Vec2D): this;

    /**
     * Rotates the vector by the given angle around the Z axis.
     *
     * @param theta
     * @return itself
     */
    public rotate(theta: number): this;

    public roundToAxis(): this;

    public scale(v: Vec2D): Vec2D;
    public scale(a: number, b: number): Vec2D;

    public scaleSelf(v: Vec2D): this;
    public scaleSelf(a: number, b: number): this;

    public set(v: Vec2D): this;
    public set(a: number, b: number): this;

    public setComponent(id: Vec2DAxisComponent, val: number): this;
    public setComponent(id: Vec2DAxisComponentEnum, val: number): this;

    /**
     * Replaces all vector components with the signum of their original values.
     * In other words if a components value was negative its new value will be
     * -1, if zero => 0, if positive => +1
     *
     * @return itself
     */
    public signum(): this;

    public sub(v: Vec2D): Vec2D;
    public sub(a: number, b: number): Vec2D;

    /**
     * Subtracts vector {a,b,c} and overrides coordinates with result.
     * 
     * @param v Vector
     * @return itself
     */
    public subSelf(v: Vec2D): this;

    /**
     * Subtracts vector {a,b,c} and overrides coordinates with result.
     *
     * @param a X coordinate
     * @param b Y coordinate
     * @return itself
     */
    public subSelf(a: number, b: number): this;

    public tangentNormalOfEllipse(eO: Vec2D, eR: Vec2D): Vec2D;

    public toArray(): [ number, number ];

    public toCartesian(): this;

    public toPolar(): this;

    public toString(): string;


    public static bisect(b: Vec2D): Vec3D;

    public static to3DXY(): Vec3D;

    public static to3DXZ(): Vec3D;

    public static to3DYZ(): Vec3D;

    public static X_AXIS: Vec2D;
    public static Y_AXIS: Vec2D;
    public static ZERO: Vec2D;
    public static MIN_VALUE: Vec2D;
    public static MAX_VALUE: Vec2D;

    public static fromTheta(theta: number): Vec2D;
    
    public static max(a: Vec2D, b: Vec2D): Vec2D;

    public static min(a: Vec2D, b: Vec2D): Vec2D;

    public static randomVector(): Vec2D;

    /**
     * @param rnd unused
     * @deprecated
     */
    public static randomVector(rnd: any): Vec2D;

    public static readonly Axis: Axis.Vec2DAxis;
}

/**
 * @member toxi
 * @class Creates a new vector with the given coordinates. Coordinates will default to zero
 */
declare class Vec3D {
    public x: number;
    public y: number;
    public z: number;
    
    constructor();

    /**
     * @param vec3d Vector3D
     */
    constructor(vec3d: Vec3D);

    /**
     * @param {Number} x the x
     * @param {Number} y the y
     * @param {Number} z the z
     */
    constructor(x: number, y: number, z: number);

    public abs(): this;

    public add(v: Vec3D): this;
    public add(a: number, b: number, c: number): this;
    
    /**
     * Adds vector {a,b,c} and overrides coordinates with result.
     *
     * @param v Vector3D
     * @return itself
     */
    public addSelf(v: Vec3D): this;
    
    /**
     * Adds vector {a,b,c} and overrides coordinates with result.
     *
     * @param a X coordinate
     * @param b Y coordinate
     * @param c Z coordinate
     * @return itself
     */
    public addSelf(a: number, b: number, c: number): this;

    public angleBetween(vec: Vec3D, faceNormalizeBool?: boolean): number;

    public clear(): this;

    public compareTo(vec: Vec3D): number;

    /**
     * Forcefully fits the vector in the given AABB
     *
     * @param box the AABB box
     * @return itself
     */
    public constrain(box: AABB): this;

    /**
     * Forcefully fits the vector in the given AABB specified by the 2 given
     * points.
     *
     * @param box_or_min min Vec3D
     * @param max accompanying max Vec3D
     * @return itself
     */
    public constrain(min: Vec3D, max: Vec3D): this;

    public copy(): Vec3D;

    public cross(vec: Vec3D): Vec3D;

    public crossInto(vec: Vec3D, result: Vec3D): Vec3D;

    /**
     * Calculates cross-product with vector v. The resulting vector is
     * perpendicular to both the current and supplied vector and overrides the
     * current.
     *
     * @param v the v
     * @return itself
     */
    public crossSelf(vec: Vec3D): this;

    public distanceTo(vec: Vec3D): number;

    public distanceToSquared(vec: Vec3D): number;

    public dot(vec: Vec3D): number;

    public equals(vec: Vec3D): boolean;

    public equalsWithTolerance(vec: Vec3D, tolerance: number): boolean;;

    public floor(): this;

    /**
     * Replaces the vector components with the fractional part of their current
     * values.
     *
     * @return itself
     */
    public frac(): this;

    public getAbs(): Vec3D;

    public getComponent(id: Vec3DAxisComponent): number;
    public getComponent(id: Vec3DAxisComponentEnum): number;

    public getConstrained(box: AABB): Vec3D;

    public getFloored(): Vec3D;

    public getFrac(): Vec3D;

    public getInverted(): Vec3D;

    public getLimited(limit: number): Vec3D;

    public getNormalized(): Vec3D;

    public getNormalizedTo(length: number): Vec3D;

    public getReciprocal(): Vec3D;

    public getReflected(normal: Vec3D): Vec3D;

    public getRotatedAroundAxis(vec_axis: Vec3D, theta: number): this;

    public getRotatedX(theta: number): Vec3D;

    public getRotatedY(theta: number): Vec3D;

    public getRotatedZ(theta: number): Vec3D;

    public getSignum(): Vec3D;

    public headingXY(): number;

    public headingXZ(): number;

    public headingYZ(): number;

    public immutable(): this;

    // TODO MathInterpolatorT
    public interpolateTo(v: Vec3D, f: number, s: any): Vec3D;

    // TODO MathInterpolatorT
    public interpolateToSelf(v: Vec3D, f: number, s: any): this;

    public invert(): this;

    public isInAABB(box: AABB): boolean;
    public isInAABB(orgin: Vec3D, boxExtent: Vec3D): boolean;

    public isMajorAxis(tol: number): boolean;

    public isZeroVector(): boolean;

    /**
     * Add random jitter to the vector in the range -j ... +j using the default
     * {@link Random} generator of {@link MathUtils}.
     *
     * @param a jitter x
     * @param b jitter y
     * @param c jitter z
     *
     * @return the vec3d
     */
    public jitter(a: number, b: number, c: number): this;
    
    /**
     * Add random jitter to the vector in the range -j ... +j using the default
     * {@link Random} generator of {@link MathUtils}.
     *
     * @param jitter the jitter
     *
     * @return the vec3d
     */
    public jitter(jitter: number): this;

    public limit(lim: number): this;

    public magnitude(): number;

    public magSquared(): number;

    public maxSelf(vec: Vec3D): this;

    public minSelf(vec: Vec3D): this;

    public modSelf(base: number): this;
    public modSelf(basex: number, basey: number, basez: number): this;

    public normalize(): this;

    public normalizeTo(length: number): this;

    public reciprocal(): this;

    public reflect(normal: Vec3D): this;

    /**
     * Rotates the vector around the giving axis.
     *
     * @param axis rotation axis vector
     * @param theta rotation angle (in radians)
     *
     * @return itself
     */
    public rotateAroundAxis(vec_axis: Vec3D, theta: number): this;

    /**
     * Rotates the vector by the given angle around the X axis.
     *
     * @param theta the theta
     *
     * @return itself
     */
    public rotateX(theta: number): this;

    /**
     * Rotates the vector by the given angle around the Y axis.
     *
     * @param theta the theta
     *
     * @return itself
     */
    public rotateY(theta: number): this;

    /**
     * Rotates the vector by the given angle around the Z axis.
     *
     * @param theta
     *				the theta
     *
     * @return itself
     */
    public rotateZ(theta: number): this;

    /**
     * Rounds the vector to the closest major axis. Assumes the vector is
     * normalized.
     *
     * @return itself
     */
    public roundToAxis(): this;

    public scale(v: Vec3D): Vec3D;
    public scale(a: number, b: number, c: number): Vec3D;

    public scaleSelf(v: Vec3D): this;
    public scaleSelf(a: number, b: number, c: number): this;

    public set(v: Vec3D): this;
    public set(a: number, b: number, c: number): this;

    public setXY(v: Vec2D): this;

    public shuffle(nIterations: number): this;

    /**
     * Replaces all vector components with the signum of their original values.
     * In other words if a components value was negative its new value will be
     * -1, if zero => 0, if positive => +1
     *
     * @return itself
     */
    public signum(): this;

    public sub(v: Vec3D): Vec3D;
    public sub(a: number, b: number, c: number): Vec3D;

    public subSelf(v: Vec3D): this;
    public subSelf(a: number, b: number, c: number): this;

    public to2DXY(): Vec2D;

    public to2DXZ(): Vec2D;

    public to2DYZ(): Vec2D;

    public toArray(): [ number, number, number ];

    public toArray4(w: number): [ number, number, number, number ];

    public toCartesian(): this;

    public toSpherical(): number;

    public toString(): string;

	/**
	 * Creates a new vector from the given angle in the XY plane. The Z
	 * component of the vector will be zero.
	 *
	 * The resulting vector for theta=0 is equal to the positive X axis.
	 *
	 * @param theta the theta
	 *
	 * @return new vector in the XY plane
	 */
    public static fromXYTheta(theta: number): Vec3D;

	/**
	 * Creates a new vector from the given angle in the XZ plane. The Y
	 * component of the vector will be zero.
	 *
	 * The resulting vector for theta=0 is equal to the positive X axis.
	 *
	 * @param theta the theta
	 *
	 * @return new vector in the XZ plane
	 */
    public static fromXZTheta(theta: number): Vec3D;

	/**
	 * Creates a new vector from the given angle in the YZ plane. The X
	 * component of the vector will be zero.
	 *
	 * The resulting vector for theta=0 is equal to the positive Y axis.
	 *
	 * @param theta
	 *				the theta
	 *
	 * @return new vector in the YZ plane
	 */
    public static fromYZTheta(theta: number): Vec3D;

	/**
	 * Constructs a new vector consisting of the largest components of both
	 * vectors.
	 *
	 * @param b the b
	 * @param a the a
	 *
	 * @return result as new vector
	 */
    public static max(a: Vec3D, b: Vec3D): Vec3D;

	/**
	 * Constructs a new vector consisting of the smallest components of both
	 * vectors.
	 *
	 * @param b comparing vector
	 * @param a the a
	 *
	 * @return result as new vector
	 */
    public static min(a: Vec3D, b: Vec3D): Vec3D;

	/**
	 * Static factory method. Creates a new random unit vector using the Random
	 * implementation set as default for the {@link MathUtils} class.
	 *
	 * @return a new random normalized unit vector.
	 */
    public static randomVector(): Vec3D;

	/**
	 * Defines vector with all coords set to Float.MIN_VALUE. Useful for
	 * bounding box operations.
	 */
    public static readonly MIN_VALUE: Vec3D;

	/**
	 * Defines vector with all coords set to Float.MAX_VALUE. Useful for
	 * bounding box operations.
	 */
    public static readonly MAX_VALUE: Vec3D;

    public static readonly ZERO: Vec3D;
    public static readonly X_AXIS: Vec3D;
    public static readonly Y_AXIS: Vec3D;
    public static readonly Z_AXIS: Vec3D;

    public static readonly Axis: Axis.Vec3DAxis;
}

declare namespace Axis {
    declare type Vec2DAxisStrings = "Vec2D.Axis.X" | "Vec2D.Axis.Y";
    declare type Vec3DAxisStrings = "Vec3D.Axis.X" | "Vec3D.Axis.Y" | "Vec3D.Axis.Z";
    declare type VecAxisStrings = Vec2DAxisStrings | Vec3DAxisStrings;
    
    declare type VecAxis<V extends Vec2D | Vec3D, S extends VecAxisStrings> =
        { getVector: () => V, toString: () => S };

    declare interface Vec2DAxis {
        X: VecAxis<Vec2D, "Vec2D.Axis.X">;
        Y: VecAxis<Vec2D, "Vec2D.Axis.Y">;
    }

    export declare type Vec2DAxes = VecAxis<Vec2D, "Vec2D.Axis.X"> | VecAxis<Vec2D, "Vec2D.Axis.Y">;
    
    declare interface Vec3DAxis {
        X: VecAxis<Vec3D, "Vec3D.Axis.X">;
        Y: VecAxis<Vec3D, "Vec3D.Axis.Y">;
        Y: VecAxis<Vec3D, "Vec3D.Axis.Z">;
    }

    export declare type Vec3DAxes = VecAxis<Vec3D, "Vec3D.Axis.X"> | VecAxis<Vec3D, "Vec3D.Axis.Y"> | VecAxis<Vec3D, "Vec3D.Axis.Z">
}

export {
    Axis,
    Vec2D,
    Vec3D
}