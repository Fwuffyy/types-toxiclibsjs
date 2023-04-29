declare module "toxiclibsjs" {
    export const internals: typeof import("./toxi/internals");
    export const color: typeof import("./toxi/color");
    export const math: typeof import("./toxi/math");
}