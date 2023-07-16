import IsectData3D from "./IsectData3D";
import Ray3D from "./Ray3D";

declare class Ray3DIntersector {
    public ray: Ray3D;
    public isec: IsectData3D;

    constructor(ray: Ray3D);

    public getIntersectionData(): IsectData3D;

    public intersectsRay(other: Ray3D): boolean;
}

export = Ray3DIntersector;