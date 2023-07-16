import { Vec3D } from "./vectors";

type Fixed4x4NumberArray = [Fixed4WideNumberArray, Fixed4WideNumberArray, Fixed4WideNumberArray, Fixed4WideNumberArray];
type Fixed4WideNumberArray = [number, number, number, number];
type Fixed9WideNumberArray = [number, number, number, number, number, number, number, number, number];
type Fixed16WideNumberArray = [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number, number];

declare class Matrix4x4 {
    public matrix: Fixed4x4NumberArray;
    public temp: Fixed4x4NumberArray;

    /**
	 * Implements a simple row-major 4x4 matrix class, all matrix operations are
	 * applied to new instances. Use {@link #transpose()} to convert from
	 * column-major formats.
	 */
    constructor();

    constructor(m: Matrix4x4);

    constructor(v11: number, v12: number, v13: number, v14: number, v21: number, v22: number, v23: number, v24: number, v31: number, v32: number, v33: number, v34: number, v41: number, v42: number, v43: number, v44: number);

    constructor(array: Fixed9WideNumberArray | Fixed16WideNumberArray);

    public add(rhs: Matrix4x4): Matrix4x4;

    public addSelf(m: Matrix4x4): this;

    public applyTo(v: Vec3D): Vec3D;

    public applyToSelf(v: Vec3D): typeof v;

    public copy(): Matrix4x4;

    public getInverted(): Matrix4x4;

    public getRotatedAroundAxis(axis: Vec3D, theta: number): Matrix4x4;

    public getRotatedX(theta: number): Matrix4x4;

    public getRotatedY(theta: number): Matrix4x4;
    
    public getRotatedZ(theta: number): Matrix4x4;

    public getTransposed(): Matrix4x4;

    public identity(): this;

    /**
     * Matrix Inversion using Cramer's Method Computes Adjoint matrix divided by
     * determinant Code modified from
     * http://www.intel.com/design/pentiumiii/sml/24504301.pdf
     * 
     * @return itself
     */
    public invert(): this;

    public multiply(a: number): Matrix4x4;
    public multiply(mat: Matrix4x4): Matrix4x4;

    public multiplySelf(a: number): this;
    public multiplySelf(mat: Matrix4x4): this;

    /**
     * Applies rotation about arbitrary axis to matrix
     *
     * @param axis
     * @param theta
     * @return rotation applied to this matrix
     */
    public rotateAroundAxis(axis: Vec3D, theta: number): Matrix4x4;

    /**
     * Applies rotation about X to this matrix.
     *
     * @param theta rotation angle in radians
     * @return itself
     */
    public rotateX(theta: number): this;

    /**
     * Applies rotation about Y to this matrix.
     *
     * @param theta rotation angle in radians
     * @return itself
     */
    public rotateY(theta: number): this;

    /**
     * Applies rotation about Z to this matrix.
     *
     * @param theta rotation angle in radians
     * @return itself
     */
    public rotateZ(theta: number): this;

    public scale(scale: number): Matrix4x4;
    public scale(v: Vec3D): Matrix4x4;
    public scale(a: number, b: number, c: number);

    public scaleSelf(scale: number): Matrix4x4;
    public scaleSelf(v: Vec3D): Matrix4x4;
    public scaleSelf(a: number, b: number, c: number);

    public set(mat: Matrix4x4): this;
    public set(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number): this;

    public setFrustrum(left: number, right: number, top: number, bottom: number, near: number, far: number): this;

    public setOrtho(left: number, right: number, top: number, bottom: number, near: number, far: number): this;

    public setPerspective(fov: number, aspect: number, near: number, far: number): this;

    public setPosition(x: number, y: number, z: number): this;

    public setScale(scaleX: number, scaleY: number, scaleZ: number): this;

    public sub(m: Matrix4x4): Matrix4x4;

    public subSelf(mat: Matrix4x4): this;

    /**
     * Copies all matrix elements into an linear array.
     *
     * @param result array (or null to create a new one)
     * @return matrix as 16 element array
     */
    public toArray(result?: Fixed16WideNumberArray): Fixed16WideNumberArray;

    public toFloatArray(result?: Float32Array<Vec3D>): Float32Array<Vec3D>;

    public toString(): string;

    public toTransposedFloatArray(result?: Fixed16WideNumberArray): Fixed16WideNumberArray;

    public translate(dx: number, dy: number, dz: number): Matrix4x4;

    public translateSelf(dx: number, dy: number, dz: number): this;

    /**
     * Converts the matrix (in-place) between column-major to row-major order
     * (and vice versa).
     *
     * @return itself
     */
    public transpose(): this;
}

export = Matrix4x4;