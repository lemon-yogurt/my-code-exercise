class MaxPQ {
    private pq: number[] = []
    private size: number = 0

    public max():number {
        return this.pq[1];
    }

    private swap(i: number, j: number): void {
        [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]]
    }

    private less(i: number, j: number): boolean {
        return this.pq[i] < this.pq[j];
    }

    private left(x: number): number {
        return x*2;
    }

    private right(x: number): number {
        return x*2 + 1;
    }

    private parent(x: number): number {
        return Math.floor(x/2);
    }

    private swim(xParam: number): void {
        let x = xParam;
        while(x>1 && this.less(this.parent(x),x)) {
            this.swap(x, this.parent(x));
            x = this.parent(x);
        }
    }

    private sink(xParam: number): void {
        let x = xParam;
        while(x<this.size) {
            let max = this.left(x);
            if(this.right(x) <= this.size && this.less(max, this.right(x))) {
                max = this.right(x);
            }
            if (this.less(max, x)) {
                break;
            }
            this.swap(max, x);
            x = max;
        }
    }

    public insert(num: number) {
        this.size++;
        this.pq[this.size] = num;
        this.swim(this.size);
    }

    public delMax() {
        let max = this.pq[1];
        this.swap(1, this.size);
        this.pq.pop();
        this.size--;
        this.sink(1);
        return max;
    }


}

export default function testMaxPQ() {
    const pq = new MaxPQ();
    pq.insert(4);
    pq.insert(2);
    pq.insert(5);
    pq.insert(8);
    pq.insert(3);
    
    console.log(pq.delMax());
    console.log(pq.delMax());
    console.log(pq.delMax());
}
