import TColor from "toxiclibsjs/color/TColor";
import { NumberComparatorResult } from "../common";

declare class HistEntry {
	public col: TColor;
	public freq: number;

	constructor(c: TColor);

	public compareTo(entry: HistEntry): NumberComparatorResult;

	public getColor(): TColor;

	public getFrequency(): number;
}

export = HistEntry;