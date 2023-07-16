import Interpolation2D from "../math/Interpolation2D";
import Matrix4x4 from "./Matrix4x4";
import { Vec3D } from "./vectors";

declare class Quaternion {
    public static readonly DOT_THRESHOLD: 0.9995;

    public x: number;
    public y: number;
    public z: number;
    public w: number;

    constructor();
    constructor(q: Quaternion);
    constructor(w: number, v: Vec3D);
    constructor(w: number, x: number, y: number, z: number);

    public add(q: Quaternion): Quaternion;

    public addSelf(q: Quaternion): this;

    public copy(): Quaternion;

    public dot(q: Quaternion): number;

    public getConjugate(): Quaternion;

    public identity(): this;

    public interpolateTo(target: Quaternion, t: number): Quaternion;
    public interpolateTo(target: Quaternion, t: number, is: Interpolation2D.InterpolatorT): Quaternion;

    public interpolateToSelf(target: Quaternion, t: number): this;
    public interpolateToSelf(target: Quaternion, t: number, is: Interpolation2D.InterpolatorT): this;

    public magnitude(): number;

    public multiply(q2: Quaternion): Quaternion;

    public normalize(): this;

    public scale(t: number): Quaternion;

    public scaleSelf(t: number): this;

    public set(q: Quaternion): this;
    public set(w: number, v: Vec3D);
    public set(w: number, x: number, y: number, z: number);

    public sub(q: Quaternion): Quaternion;

    public subSelf(q: Quaternion): this;

    public toArray(): [number, number, number, number];

    public toAxisAngle(): [number, number, number, number];

    public toMatrix4x4(result?: Matrix4x4): Matrix4x4;

    public toString(): string;

    public static createFromAxisAngle(axis: Vec3D, angle: number): Quaternion;

    public static createFromEuler(pitch: number, yaw: number, roll: number): Quaternion;

    public static createFromMatrix(m: Matrix4x4): Quaternion;

    public static getAlignmentQuat(dir: Vec3D, forward: Vec3D): Quaternion;
}

export = Quaternion;