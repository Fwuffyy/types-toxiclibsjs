import Vec3D from "./Vec3D";

declare class IsectData3D {
    public isIntersection: boolean;
    public dist: number;
    public pos: Vec3D;
    public dir: Vec3D;
    public normal: Vec3D;

    constructor(isec?: IsectData3D);

    public clear(): void;

    public toString(): string;
}

export = IsectData3D;