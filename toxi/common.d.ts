declare type CallbackIterator<T> = (item: T, index: number, array: T[]) => void;

declare type NumberComparatorResult = -1 | 0 | 1;

export {
    CallbackIterator,
    NumberComparatorResult
}