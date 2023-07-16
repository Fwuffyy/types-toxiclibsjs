import { ArrayIterator } from "../internals/Iterator";
import Line3D from "./Line3D";
import { Vec3D } from "./vectors";

declare class LineStrip3D {
    public vertices: Vec3D[];

    /**
     * construct a LineStrip3D
     * @param vertices optional vertices to start with
     */
    constructor(vertices: Vec3D[]);

    /**
	 * Add a vector to the line-strip, it will always be a copy
     * @param Vec3D p
     * @return itself
     */
    public add(p: Vec3D): this;

    /**
	 * Add a vector to the line-strip, it will always be a copy
     * @param number x
     * @param number y
     * @param number z
     * @return itself
     */
    public add(x: number, y: number, z: number): this;

    /**
     * Returns the vertex at the given index. This function follows Python
     * convention, in that if the index is negative, it is considered relative
     * to the list end. Therefore the vertex at index -1 is the last vertex in
     * the list.
     * 
     * @param i index
     * @return vertex
     */
    public get(i: number): Vec3D;


    /**
     * Computes a list of points along the spline which are uniformly separated
     * by the given step distance.
     *
     * @param number step
     * @param boolean [doAddFinalVertex] true by default
     * @return Vec3D[] point list
     */
    public getDecimatedVertices(step: number, doAddFinalVertex?: boolean = true): Vec3D[];

    public getEstimatedArcLength(): number;

    public getSegments(): Line3D[];

    public getVertices(): Vec3D[];

    public iterator(): ArrayIterator<Vec3D>;

    public setVertices(vertices: Vec3D[]);
}

export = LineStrip3D;