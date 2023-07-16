import Line2D from "./Line2D";
import Polygon2D from "./Polygon2D";
import { Vec2D } from "./vectors";

declare class ConvexPolygonClipper {
    constructor(polygonBounds: Polygon2D);

    public clipPolygon(poly: Polygon2D): Polygon2D;

    public getBounds(): Polygon2D;

    public _getClippedPosOnEdge(clipEdge: Line2D, p: Vec2D, q: Vec2D): Vec2D;

    public _isKnownVertex(list: Vec2D[], q: Vec2D): boolean;

    public setBounds(bounds: Polygon2D);
}

export = ConvexPolygonClipper;