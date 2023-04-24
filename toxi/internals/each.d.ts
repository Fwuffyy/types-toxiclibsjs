import { CallbackIterator } from "./common";

declare function each<T>(obj: T[], iterator: CallbackIterator<T>, context: any): void;

export = each;