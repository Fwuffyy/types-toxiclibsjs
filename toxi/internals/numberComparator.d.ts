declare function numberComparator(f1: number, f2: number): numberComparator.NumberComparatorResult;

declare namespace numberComparator {
    declare type NumberComparatorResult = -1 | 0 | 1;
}

export = numberComparator;