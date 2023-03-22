export function Ships(type, size, hits, sink) {
    this.type = type;
    this.size = size; 
    this.hits = hits;
    this.sink = sink;

    this.hit = () => { 
        this.hits++;
    }
    
    this.isSunk = () => {
        if (this.hits == this.size) this.sink = true;
    }
}
