declare namespace geom {
    /**
     * @class Axis-aligned Bounding Box
     */
	export const AABB: typeof import("./geom/AABB");
	
	export const mesh: typeof import("./geom/mesh");

	/**
	 * @class
	 * Helper class for the spline3d classes in this package. Used to compute
	 * subdivision points of the curve.
	 * @member toxi
	 */
	export const BernsteinPolynomial: typeof import("./geom/BernsteinPolynomial");

	/**
	 * Factory method to construct a circle which has the two given points lying
	 * on its perimeter. If the points are coincident, the circle will have a
	 * radius of zero.
	 * @return new circle instance
	 */
	export const Circle: typeof import("./geom/Circle");
	
	/**
	 * @class CircleIntersector
	 * @member toxi
	*/
	export const CircleIntersector: typeof import("./geom/CircleIntersector");
	
	/**
	 * @class A geometric definition of a cone (and cylinder as a special case) with
	 * support for mesh creation/representation. The class is currently still
	 * incomplete in that it doesn't provide any other features than the
	 * construction of a cone shaped mesh.
	 * @param pos centre position
	 * @param dir direction vector
	 * @param rNorth radius on the side in the forward direction
	 * @param rSouth radius on the side in the opposite direction
	 * @param len length of the cone
	 */
	export const Cone: typeof import("./geom/Cone");


	/**
	 * A more generic version of the Sutherland-Hodgeman algorithm to limit 2D
	 * polygons to convex clipping regions. Uses the clipping region's centroid and
	 * {@link Line2D#classifyPoint(Vec2D)} to identify if an edge needs to
	 * be clipped or not.
	 */
    export const ConvexPolygonClipper: typeof import("./geom/ConvexPolygonClipper");

	/**
	 * @class defines a 2D ellipse and provides several utility methods for it.
	 * @member toxi
	 * @augments Vec2D
	 */
	export const Ellipse: typeof import("./geom/Ellipse");

	/**
	 * @class
	 * @member toxi
	 */
	export const IsectData2D: typeof import("./geom/IsectData2D");

	/**
	 * @class
	 * @member toxi
	 */
	export const IsectData3D: typeof import("./geom/IsectData3D");

	/**
	 * @class
	 * @member toxi
	 */
	export const Line2D: typeof import("./geom/Line2D");

	export const Line3D: typeof import("./geom/Line3D");
    
	export const LineStrip3D: typeof import("./geom/LineStrip3D");
	
	/**
	 * Implements a simple row-major 4x4 matrix class, all matrix operations are
	 * applied to new instances. Use {@link #transpose()} to convert from
	 * column-major formats.
	 */
	export const Matrix4x4: typeof import("./geom/Matrix4x4");

	export const Plane: typeof import("./geom/Plane");

	export const Polygon2D: typeof import("./geom/Polygon2D");

	export const Quaternion: typeof import("./geom/Quaternion");

	export const Ray2D: typeof import("./geom/Ray2D");

	export const Ray3D: typeof import("./geom/Ray3D");

	export const Ray3DIntersector: typeof import("./geom/Ray3DIntersector");

	export const Rect: typeof import("./geom/Rect");

	export const Sphere: typeof import("./geom/Sphere");

	export const Spline2D: typeof import("./geom/Spline2D");

    export const Spline3D: typeof import("./geom/Spline3D");

    export const SutherlandHodgemanClipper: typeof import("./geom/SutherlandHodgemanClipper");

	export const Triangle2D: typeof import("./geom/Triangle2D");

	export const Triangle3D: typeof import("./geom/Triangle3D");
	/**
	 * @class a two-dimensional vector class 
	 */
	export const Vec2D: typeof import("./geom/Vec2D");

    /**
	 * @member toxi
	 * @class Creates a new vector with the given coordinates. Coordinates will default to zero
	 */
	export const Vec3D: typeof import("./geom/Vec3D");
    
	/**
     * X-axis aligned Cylinder
     * @author Kyle Phillips
     */
	export const XAxisCylinder: typeof import("./geom/XAxisCylinder");
    
	/**
     * Y-axis aligned Cylinder
     * @author Kyle Phillips
     */
	export const YAxisCylinder: typeof import("./geom/YAxisCylinder");
    
	/**
     * Z-axis aligned Cylinder
     * @author Kyle Phillips
     */
	export const ZAxisCylinder: typeof import("./geom/ZAxisCylinder");
}

export = geom;