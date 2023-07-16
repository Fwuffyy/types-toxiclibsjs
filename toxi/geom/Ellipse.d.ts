import Circle from "./Circle";
import Polygon2D from "./Polygon2D";
import Vec2D from "./Vec2D";

/**
 * @class defines a 2D ellipse and provides several utility methods for it.
 * @member toxi
 * @augments Vec2D
 */
declare class Ellipse extends Vec2D {
    public radius: Vec2D;
    public focus: number;

    constructor();

    constructor(v: Vec2D, r: Vec2D);

    constructor(v: Vec2D, rx: number, ry: number);

    constructor(rx: number, ry: number);

    constructor(x: number, y: number, r: number);

    constructor(x: number, y: number, ry: number, rx: number);

    public containsPoint(p: Vec2D): boolean;

    /**
     * Computes the area covered by the ellipse.
     */
    public getArea(): number;

    /**
     * Computes the approximate circumference of the ellipse, using this
     * equation: <code>2 * PI * sqrt(1/2 * (rx*rx+ry*ry))</code>.
     *
     * The precise value is an infinite series elliptical integral, but the
     * approximation comes sufficiently close. See Wikipedia for more details:
     *
     * http://en.wikipedia.org/wiki/Ellipse
     *
     * @return circumference
     */
    public getCircumference(): number;

    /**
     * @return the focus
     */
    public getFoci(): [ Vec2D, Vec2D ];

    /**
     * @return the 2 radii of the ellipse as a Vec2D
     */
    public getRadii(): Vec2D;

    /**
     * Sets the radii of the ellipse to the new values.
     *
     * @param rx
     * @param ry
     * @return itself
     */
    public setRadii(rx: number, ry: number): this;

    /**
     * Sets the radii of the ellipse to the new values.
     *
     * @param r
     * @return itself
     */
    public setRadii(r: Vec2D): this;

    /**
     * Creates a {@link Polygon2D} instance of the ellipse sampling it at the
     * given resolution.
     *
     * @param res number of steps
     * @return ellipse as polygon
     */
    public toPolygon2D(res: number): Polygon2D;

    public static readonly Circle: typeof Circle;
}

export = Ellipse;