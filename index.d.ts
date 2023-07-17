declare module "toxiclibsjs" {
    export const color: typeof import("./toxi/color");
    
    export const geom: typeof import("./toxi/geom");
    
    export const internals: typeof import("./toxi/internals");
    
    export const math: typeof import("./toxi/math");
    
    export const physics2d: any;
    
    export const processing: any;
    
    export const THREE: any;
    
    export const util: typeof import("./toxi/util");
}