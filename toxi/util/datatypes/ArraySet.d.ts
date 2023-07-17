import { ArrayIterator } from "../../internals/Iterator";

declare class ArraySet<T> extends Array<T> {
    constructor<T>(collection?: T[]);

    public add(item: T): boolean;

    public addAll(collection: T[]): void;

    public clear(): void;

    public clone(): ArraySet<T>;

    public contains(item: T): boolean;

    public containsAll(collection: T[]): boolean;

    public containsAny(collection: T[]): boolean;

    public equals(object: any): boolean;
    public equals(collection: []): boolean;
    public equals(collection: T[]): boolean;

    public get(index: number): T | undefined;

    public iterator(): ArrayIterator<T>;

    public isEmpty(): boolean;

    public remove(o: T): boolean;

    public removeAll(): void;

    public retainAll(collection: T[]): boolean;

    public size(): number;

    public toArray(arr: any[]): any[];
    public toArray(arr: T[]): T[];
}

export = ArraySet;