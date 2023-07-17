declare class UndirectedGraph<T> {
    public _nodeLinks: Record<T, T[]>;
    public _nodeIDs: T[];

    constructor();

    public add(node: T): void;

    public connect(nodeA: T, nodeB: T): void;

    public disconnect(nodeA: T, nodeB: T): void;

    public getConnectedNodesFor(node: T): T[];

    public getNodes(): T[];

    public remove(node: T): void;
}

export = UndirectedGraph;