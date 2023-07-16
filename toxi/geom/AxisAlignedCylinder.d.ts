import { Vec3D } from "./vectors";

/**
 * An Abstract (don't use this directly) Axis-aligned Cylinder class
 */
declare class AxisAlignedCylinder {
    public pos: Vec3D;
    public length: number;
    public radius: number;
    public radiusSquared: number;

    /**
     * An Abstract (don't use this directly) Axis-aligned Cylinder class
     */
    constructor(pos: Vec3D | undefined, radius: number, length: number);

    /**
     * @deprecated Not implemented
     * 
     * Checks if the given point is inside the cylinder.
     * @param p 
     * @return true, if inside
     */
    public containsPoint(p: Vec3D): void;

    /**
     * @return the length
     */
    public getLength(): number;

    /**
     * @deprecated Not implemented
     * 
     * @return the cylinder's orientation axis
     */
    public getMajorAxis(): void;

    /**
     * Returns the cylinder's position (centroid).
     * @return the pos
     */
    public getPosition(): Vec3D;

    /**
     * @return the cylinder radius
     */
    public getRadius(): number;

    /**
     * @param length the length to set
     */
    public setLength(length: number): void;

    /**
     * @param pos the pos to set
     */
    public setPosition(pos: Vec3D);

    public setRadius(radius: number);

	/**
	 * Builds a TriangleMesh representation of the cylinder at a default
	 * resolution 30 degrees. 
	 * @return mesh instance
	 */
    public toMesh(): any; // TODO mesh
    public toMesh(options: AxisAlignedCylinderMeshOptions): any; // TODO mesh
    public toMesh(steps: number, thetaOffset: number): any; // TODO mesh
    public toMesh(mesh: any, steps: number, thetaOffset: number): any; // TODO mesh
}

interface AxisAlignedCylinderMeshOptions {
    mesh?: any; // TODO mesh
    steps?: number;
    thetaOffset?: number;
}

export = AxisAlignedCylinder;