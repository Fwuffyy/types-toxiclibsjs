declare interface MathInterpolatorT {
    public interpolate(a: number, b: number, ...args: any): number;

    public static interpolate(a: number, b: number, ...args: any): number;
}

declare type CallbackIterator<T> = (item: T, index: number, array: T[]) => void;

declare type NumberComparatorResult = -1 | 0 | 1;

export {
    CallbackIterator,
    NumberComparatorResult,
    MathInterpolatorT
}