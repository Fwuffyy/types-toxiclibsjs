import { NumberComparatorResult } from "../common";
import TColor from "./TColor";

declare class HistEntry {
	public col: TColor;
	public freq: number;

	constructor(c: TColor);

	public compareTo(entry: HistEntry): NumberComparatorResult;

	public getColor(): TColor;

	public getFrequency(): number;
}

export = HistEntry;