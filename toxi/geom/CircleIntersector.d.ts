import Circle from "./Circle";
import IsectData2D from "./IsectData2D";
import Ray2D from "./Ray2D";

declare class CircleIntersector {
    public circle: Circle;
    public isec: IsectData2D;

    constructor(circle: Circle);

    public getIntersectionData(): IsectData2D;
    
    public intersectsRay(ray: Ray2D): boolean;
}

export = CircleIntersector;