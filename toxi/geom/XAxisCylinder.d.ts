import AxisAlignedCylinder from "./AxisAlignedCylinder";
import { Axis, Vec3D } from "./vectors";

declare class XAxisCylinder extends AxisAlignedCylinder {
    /**
     * X-axis aligned Cylinder
     * @author Kyle Phillips
     */
    constructor(pos: Vec3D, radius: number, length: number);

    override public containsPoint(p: Vec3D): boolean;

    override public getMajorAxis(): Axis.Vec3DAxis["X"];
}

export = XAxisCylinder;