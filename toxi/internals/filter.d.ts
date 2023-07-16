import { CallbackIterator } from "./Iterator";

declare function filter<T>(obj: T[], iterator: CallbackIterator<T>, context: any): any[];

export = filter;