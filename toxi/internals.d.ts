/**
 * @namespace contains helper functions used internally
 * THESE MODULES ARE NOT ALLOWED TO HAVE DEPENDENCIES OUTSIDE
 * THE `internals` PACKAGE
 */
declare namespace internals {
    /**
     * Do type-tests to detect properties on objects
     */
    export const has: typeof import("./internals/has");

    /**
     * Test if objects have properties
     */
    export const is: typeof import("./internals/is");

    /**
     * Extend the prototype of a class
     */
    export const extend: typeof import("./internals/extend");
    
    /**
     * From Underscore.js
     * 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
     * basic forEach, use native implementation is available
     */
    export const each: typeof import("./internals/each");
    
    export const bind: typeof import("./internals/bind");
    export const keys: typeof import("./internals/keys");
    export const values: typeof import("./internals/values");
    export const filter: typeof import("./internals/filter");

    /**
     * Receives an object of properties to set on source object
     */
    export const mixin: typeof import("./internals/mixin");

    /**
     * Imitates java-style Iterator
     */
    export const Iterator: typeof import("./internals/Iterator").Iterator;

    /**
     * Used for keeping HashMap-like collections
     */
    export const LinkedMap: typeof import("./internals/LinkedMap");

    /**
     * Import sort comparator for numbers
     */
    export const numberComparator: typeof import("./internals/numberComparator");

    export const removeItemFrom: typeof import("./internals/removeItemFrom");
}

export = internals;