import Polygon2D from "./Polygon2D";
import Rect from "./Rect";
import Vec2D from "./Vec2D";

declare class SutherlandHodgemanClipper {
    public bounds: Rect;

    constructor(bounds: Rect);

    public clipPolygon(poly: Polygon2D);

    public getBounds(): Rect;

    public isKnownVertex(list: Vec2D, q: Vec2D): boolean;

    public setBounds(bounds: Rect);
}

export = SutherlandHodgemanClipper;