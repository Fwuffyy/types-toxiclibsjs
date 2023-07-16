import Ellipse from "./Ellipse";
import Vec2D from "./Vec2D";

declare class Circle extends Ellipse {
    /**
     * @return new circle instance
     */
    constructor();

    constructor(c: Circle);
    
    constructor(r: number);
    
    constructor(v: Vec2D, r: number);
    
    constructor(x: number, y: number, r: number);

    public containsPoint(p: Vec2D): boolean;

    public getCircumference(): number;

    public getRadius(): number;

    public getTangentPoints(p: Vec2D): [ Vec2D, Vec2D ];

    public setRadius(r: number): this;

    /**
     * Factory method to construct a circle which has the two given points lying
     * on its perimeter. If the points are coincident, the circle will have a
     * radius of zero.
     *
     * @param p1
     * @param p2
     * @return new circle instance
     */
    public static from2Points(p1: Vec2D, p2: Vec2D): Circle;

    /**
     * Factory method to construct a circle which has the three given points
     * lying on its perimeter. The function returns null, if the 3 points are
     * co-linear (in which case it's impossible to find a circle).
     *
     * Based on CPP code by Paul Bourke:
     * http://local.wasp.uwa.edu.au/~pbourke/geometry/circlefrom3/
     *
     * @param p1
     * @param p2
     * @param p3
     * @return new circle instance or null
     */
    public static from3Points(p1: number, p2: number, p3: number): Circle;

    public static newBoundingCircle(vertices: Vec2D[]): Circle;
}

export = Circle;