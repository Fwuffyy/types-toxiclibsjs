/**
 * @param pos centre position
 * @param dir direction vector
 * @param rNorth radius on the side in the forward direction
 * @param rSouth radius on the side in the opposite direction
 * @param len length of the cone
 */

import { Vec3D } from "./vectors";

interface ConeOptions {
    position?: Vec3D;
    direction: Vec3D;
    radiusNorth: number;
    radiusSouth: number;
    length: number;
}

interface ConeMeshOptions {
    steps: number;
    mesh?: any; // TODO mesh
    thetaOffset?: number;
    topClosed?: boolean;
    bottomClosed?: boolean;
}

declare class Cone extends Vec3D {
    public dir: Vec3D;
    public radiusNorth: number;
    public radiusSouth: number;
    public length: number;

    constructor(cone: ConeParameterObject);

    constructor(pos: Vec3D, dir: Vec3D, rNorth: number, rSouth: number, len: number);

    public toMesh(options: ConeMeshOptions): any; // TODO mesh
    public toMesh(steps: number): any; // TODO mesh
    public toMesh(steps: number, thetaOffset: number): any; // TODO mesh
    public toMesh(mesh: any, steps: number, thetaOffset: number, topClosed: boolean, bottomClosed: boolean): any // TODO mesh
}

export = Cone;