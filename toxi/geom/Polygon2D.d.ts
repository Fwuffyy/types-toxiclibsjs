import Circle from "./Circle";
import Rect from "./Rect";
import { Vec2D } from "./vectors";

declare class Polygon2D {
    public vertices: Vec2D[];

    constructor();

    constructor(points: Vec2D[]);

    constructor(...points: Vec2D[]);

    public add(p: Vec2D);
    public add(points: Vec2D[]);

    /**
     * centers the polygon so that its new centroid is at the given point
     * @param {Vec2D} [origin]
     * @return itself
     */
    public center(origin?: Vec2D): this;

    public containsPoint(p: Vec2D): boolean;

    public containsPolygon(poly: Polygon2D): boolean;

    public copy(): Polygon2D;

    public flipVertexOrder(): this;

    /**
     * Returns the vertex at the given index. This function follows Python
     * convention, in that if the index is negative, it is considered relative
     * to the list end. Therefore the vertex at index -1 is the last vertex in
     * the list.
     * @param {Number} i index
     * @return vertex
     */
    public get(i: number): Vec2D;

    /**
     * Computes the length of this polygon's apothem. This will only be valid if
     * the polygon is regular. More info: http://en.wikipedia.org/wiki/Apothem
     * @return apothem length
     */
    public getApothem(): number;

    public getArea(): number;

    public getBoundingCircle(): Circle;

    public getBounds(): Rect;

    public getCentroid(): Vec2D;

    public getCircumference(): number;

    public getClosestPointTo(p: Vec2D): Vec2D;

    public getClosestVertexTo(p: Vec2D): Vec2D;

    public getEdges(): Vec2D[];

    /**
     * @deprecated
     */
    public getNumPoints(): number;

    public getNumVertices(): number;

    public getRandomPoint(): Vec2D;

    /**
     * Repeatedly inserts vertices as mid points of the longest edges until the
     * new vertex count is reached.
     * @param {Number} count new vertex count
     * @return itself
     */
    public increaseVertexCount(count: number): this;

    public intersectsPolygon(poly: Polygon2D): boolean;

    public isClockwise(): boolean;

    /**
     * Checks if the polygon is convex.
     * @return true, if convex.
     */
    public isConvex(): boolean;

    /**
     * Given the sequentially connected points p1, p2, p3, this function returns
     * a bevel-offset replacement for point p2.
     *
     * Note: If vectors p1->p2 and p2->p3 are exactly 180 degrees opposed, or if
     * either segment is zero then no offset will be applied.
     *
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param x3
     * @param y3
     * @param distance
     * @param out
     *
     * @see http://alienryderflex.com/polygon_inset/
     */
    public _offsetCorner(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, distance: number, out: Vec2D);

    /**
     * Moves each line segment of the polygon in/outward perpendicular by the
     * given distance. New line segments and polygon vertices are created by
     * computing the intersection points of the displaced segments. Choosing an
     * too large displacement amount will result in deformation/undefined
     * behavior with various self intersections. Should that happen, please try
     * to clean up the shape using the {@link #toOutline()} method.
     *
     * @param distance offset/inset distance (negative for inset)
     * @return itself
     */
    public offsetShape(distance: number): this;

    /**
     * Reduces the number of vertices in the polygon based on the given minimum
     * edge length. Only vertices with at least this distance between them will
     * be kept.
     *
     * @param minEdgeLen
     * @return itself
     */
    public reduceVertices(minEdgeLength: number): this;

    /**
     * Removes duplicate vertices from the polygon. Only successive points are
     * recognized as duplicates.
     * @param {Number} tolerance snap distance for finding duplicates
     * @return itself
     */
    public removeDuplicates(tolerance: number): this;

    public rotate(theta: number): this;

    public scale(scale: number): this;
    public scale(scale: Vec2D): this;
    public scale(x: number, y: number): this;
    
    public scaleSize(scale: number): this;
    public scaleSize(scale: Vec2D): this;
    public scaleSize(x: number, y: number): this;
    
    public smooth(amount: number, baseWeight: number): this;
    
    public toMesh(mesh: any): any; // TODO mesh
    public toMesh(mesh: any, centroid2D: Vec2D, extrude: number): any; // TODO mesh

    public toPolygon2D(): this;

    public toString(): string;

    public translate(p: Vec2D): this;
    public translate(x: number, y: number): this;

    /**
     * Constructs a new regular polygon from the given base line/edge.
     * @param {Vec2D} baseA left point of the base edge
     * @param {Vec2D} baseB right point of the base edge
     * @param {Number} res number of polygon vertices
     * @return polygon
     */
    public static fromBaseEdge(baseA: Vec2D, baseB: Vec2D, res: number): Polygon2D;

    /**
     * Constructs a regular polygon from the given edge length and number of
     * vertices. This automatically computes the radius of the circle the
     * polygon is inscribed in.
     * More information: http://en.wikipedia.org/wiki/Regular_polygon#Radius
     *
     * @param {Number} len desired edge length
     * @param {Number} res number of vertices
     * @return polygon
     */
    public static fromEdgeLength(len: number, res: number): Polygon2D;

    /**
     * Computes the radius of the circle the regular polygon with the desired
     * edge length is inscribed in
     * @param {Number} len edge length
     * @param {Number} res number of polygon vertices
     * @return radius
     */
    public static getRadiusForEdgeLength(len: number, res: number): number;
}

export = Polygon2D;