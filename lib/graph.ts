export class Graph {
    private nodes:Object;

    constructor() {
        this.nodes = {};
    }

    setNode(name:string, value?:Object):Node {
        const node = new Node(name, value);
        this.nodes[name] = node;
        return node;
    }

    setEdge(from:string, to:string, value:Object, twoWay?:boolean) {
        this._setEdge(from, to, value);
        if (twoWay) this._setEdge(to, from, value); // add edges the other way if twoWay is set to true
    }

    private _setEdge(a:string, b:string, value:Object) {
        this.nodes[a].setEdge(b, value);
    }

    getNode(name:string):Node {
        return this.nodes[name];
    }

    getNodes():Array<string> {
        return Object.keys(this.nodes);
    }

    getEdges(name:string):Object {
        return this.nodes[name].edges;
    }
}

export class Edge {
    private from:string;
    private to:string;
    private value:Object;

    constructor(from:string, to:string, value?:Object) {
        this.from = from;
        this.to = to;
        this.value = value;
    }
}

export class Node {
    setEdge(to:string, value:Object) {
        this.edges[to] = new Edge(this._name, to, value);
    }

    get edges():Object {
        return this._edges;
    }

    get value():Object {
        return this._value;
    }

    get name():string {
        return this._name;
    }

    private _name:string;
    private _value:Object;
    private _edges:Object;

    constructor(name, value) {
        this._edges = {};
        this._name = name;
        this._value = value;
    }
}

