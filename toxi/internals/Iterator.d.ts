/**
 * Imitate the basic functinoality of a Java Iterator
 */
declare class ArrayIterator<T> {
    public __it: T[];

    /**
     * @param collection Any iterable/collection
     */
    constructor(collection: T[]);

    public hasNext(): boolean;

    public next(): T[keyof T];
}

declare class ObjectIterator<T> {
    public __obj: T;
    public __keys: (keyof T)[];
    public __it: ArrayIterator<T>;

    constructor(object: T);

    public hasNext(): boolean;

    public next(): T[keyof T];
}

declare function Iterator<T>(collection: T[] | Record<string, T>): ArrayIterator<T> | ObjectIterator<T>;

// declare function Iterator<T>(collection: T[]): ArrayIterator<T>;
// declare function Iterator<T>(collection: T): ObjectIterator<T>;

export {
    ArrayIterator,
    ObjectIterator,
    Iterator
};