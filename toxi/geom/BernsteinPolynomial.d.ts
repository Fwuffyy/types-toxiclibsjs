declare class BernsteinPolynomial {
    public resolution: number;
    public b0: number;
    public b1: number;
    public b2: number;
    public b3: number;

    /**
     * @param {Number} res number of subdivision steps between each control point of the spline3d
     */
    constructor(res: number);
}

export = BernsteinPolynomial;