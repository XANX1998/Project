class PriorityQueue {
    constructor(comparator = (a, b) => a > b) {
      this._heap = [];
      this._comparator = comparator;
    }
  
    size() {
      return this._heap.length;
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    peek() {
      return this._heap[0];
    }
  
    enqueue(value) {
      this._heap.push(value);
      this._siftUp();
    }
  
    dequeue() {
      const poppedValue = this._heap[0];
      const bottom = this.size() - 1;
      if (bottom > 0) {
        this._swap(0, bottom);
      }
      this._heap.pop();
      this._siftDown();
      return poppedValue;
    }
  
    _siftUp() {
      let nodeIdx = this.size() - 1;
      while (nodeIdx > 0 && this._comparator(this._heap[nodeIdx], this._heap[this._parent(nodeIdx)])) {
        this._swap(nodeIdx, this._parent(nodeIdx));
        nodeIdx = this._parent(nodeIdx);
      }
    }
  
    _siftDown() {
      let nodeIdx = 0;
      while (
        (this._left(nodeIdx) < this.size() && this._comparator(this._heap[this._left(nodeIdx)], this._heap[nodeIdx])) ||
        (this._right(nodeIdx) < this.size() && this._comparator(this._heap[this._right(nodeIdx)], this._heap[nodeIdx]))
      ) {
        let greaterChildIdx =
          this._right(nodeIdx) < this.size() && this._comparator(this._heap[this._right(nodeIdx)], this._heap[this._left(nodeIdx)])
            ? this._right(nodeIdx)
            : this._left(nodeIdx);
        this._swap(nodeIdx, greaterChildIdx);
        nodeIdx = greaterChildIdx;
      }
    }
  
    _parent(idx) {
      return Math.floor((idx - 1) / 2);
    }
  
    _left(idx) {
      return 2 * idx + 1;
    }
  
    _right(idx) {
      return 2 * idx + 2;
    }
  
    _swap(idx1, idx2) {
      [this._heap[idx1], this._heap[idx2]] = [this._heap[idx2], this._heap[idx1]];
    }
  }
  
  export default PriorityQueue;
  