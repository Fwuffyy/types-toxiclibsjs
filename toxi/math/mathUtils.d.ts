/**
 * @namespace
 * @member toxi
 * @description math utilities
 */
declare namespace MathUtils {
    export const SQRT2: 1.41421356237;
    export const SQRT3: 1.73205080757;
    export const LOG2: 0.30102999566;
    export const PI: 3.14159265358979323846;

    export const INV_PI: 0.31830988618;
    export const HALF_PI: 1.57079632679;
    export const THIRD_PI: 1.0471975512;
    export const QUARTER_PI: 0.78539816339;
    export const TWI_PI: 6.28318530718;
    export const THREE_HALVES_PI: 4.71238898038;
    export const PI_SQUARED: 9.86960440109;

    /** Epsilon value */
    export const EPS: 1.1920928955078125E-7;

    /** Degrees to radians conversion factor */
    export const DEG2RAD: 0.01745329251;

    /** Radians to degrees conversion factor */
    export const RAD2DEG: 57.2957795131;

    export const SHIFT23: 8388608;
    export const INV_SHIFT: 1.1920928955078125e-7;
    export const SIN_A: -0.4052847345693511;
    export const SIN_B: 1.2732395447351628;
    export const SIN_P: 0.225;
    export const abs: typeof Math.abs;

    /**
     * Rounds up the value to the nearest higher power^2 value.
     *
     * @param x
     * @return power^2 value
     */
    export function ceilPowerOf2(x: number): number;

    export function clip(a: number, _min: number, _max: number): number;

    /**
     * Clips the value to the 0.0 .. 1.0 interval.
     *
     * @param a
     * @return clipped value
     * @since 0012
     */
    export function clipNormalized(a: number): number;

    export const cos: typeof Math.cos;

    export function degrees(radians: number): number;

    /**
     * Fast cosine approximation.
     *
     * @param x angle in -PI/2 .. +PI/2 interval
     * @return cosine
     */
    export function fastCos(x: number): number;

    /**
     * Fast sine approximation.
     *
     * @param x angle in -PI/2 .. +PI/2 interval
     * @return sine
     */
    export function fastSin(x: number): number;

    export function flipCoin(rnd: number): number;

    /**
     * This method is a *lot* faster than using (int)Math.floor(x).
     *
     * @param x value to be floored
     * @return floored value as integer
     */
    export function floor(x: number): number;

    /**
     * Rounds down the value to the nearest lower power^2 value.
     *
     * @param x
     * @return power^2 value
     */
    export function floorPowerOf2(x: number): number;

    export function max(a: number, b: number, c?: number): number;
    
    export function min(a: number, b: number, c?: number): number;

    /**
     * Returns a random number in the interval -1 .. +1.
     * 
     * @return random float
     */
    export function normalizedRandom(): number;

    export function radians(degrees: number): number;

    export function random(max: number): number;

    export function random(min: number, max: number): number;

    export function random(rand: any, min: 0, max: 0): number;

    export function random(rand: () => number, min: 0, max: number): number;

    export function random(rand: () => number, min: number, max: 0): number;

    export function reduceAngle(theta: number): number;

    export function sign(x: number): -1 | 1;

    export function sin(theta: number): number;
}

export = MathUtils;