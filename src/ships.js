export function Ships(type, size, hits, sink) {
    this.type = type;
    this.size = size; 
    this.hits = hits;
    this.sink = sink;

    return {type, size, hits, sink};
}

// Ships.prototype.hit = () => { }
 