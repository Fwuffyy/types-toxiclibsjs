import { CallbackIterator } from "./Iterator";

declare function each<T>(obj: T[], iterator: CallbackIterator<T>, context: any): void;

export = each;