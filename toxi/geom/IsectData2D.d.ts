import Vec2D from "./Vec2D";

declare class IsectData2D {
    public isIntersection: boolean;
    public dist: number;
    public pos: Vec2D;
    public dir: Vec2D;
    public normal: Vec2D;

    constructor(isec?: IsectData2D);

    public clear(): void;

    public toString(): string;
}

export = IsectData2D;