import { EachIterator } from "../common";

type KeyGeneratorFunction = (key: any) => string;

declare class LinkedMap<K, V> {
    public __list: V[];
    public __map: { [key: string]: V };
    public generateKey: KeyGeneratorFunction;

    /**
    * @param keyGeneratorFunction Key to use to return the identifier
     */
    constructor(keyGeneratorFunction: KeyGeneratorFunction);

    public each<T>(fn: EachIterator<T>): void;
    public get(id_or_val: K | V): K | V;
    public getArray(): V[];
    public has(id_or_val: K | V): boolean;
    public put(id: K, val: V): void;
    public remove(val: V): V;
    public size(): number;
    public values(): V[];
}

export = LinkedMap;