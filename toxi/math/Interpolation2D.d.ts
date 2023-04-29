/**
 * @namespace Implementations of 2D interpolation functions (currently only bilinear).
 * @member toxi
 */
declare namespace Interpolation2D {
    // TODO Vec2D
    /**
     * @param {Vec2D} p coord of point to filter
     * @param {Vec2D} p1 coord of top-left corner
     * @param {Vec2D} p2 coord of bottom-right corner
     * @param {Number} tl top-left value
     * @param {Number} tr top-right value
     * @param {Number} bl bottom-left value
     * @param {Number} br bottom-right value
     * @return {Number} interpolated value
     */
    export function bilinear(p: any, p1: any, p2: any, tl: number, tr: number, bl: number, br: number): number;

    /**
     * @param {Number} x x coord of point to filter
     * @param {Number} y y coord of point to filter
     * @param {Number} x1 x coord of top-left corner
     * @param {Number} y1 y coord of top-left corner
     * @param {Number} x2 x coord of bottom-right corner
     * @param {Number} y2 y coord of bottom-right corner
     * @param {Number} tl top-left value
     * @param {Number} tr top-right value
     * @param {Number} bl bottom-left value
     * @param {Number} br bottom-right value
     * @return {Number} interpolated value
     */
    export function bilinear(x: number, y: number, x1: number, y1: number, x2: number, y2: number, tl: number, tr: number, bl: number, br: number): number;
}

export = Interpolation2D;