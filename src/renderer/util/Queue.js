//head 表示队列的起始位置，
// tail 表示队列的结束位置。

class Queue {
  constructor(val = 20) {
    this.data = [];
    this.len = val;
    this.head = -1;
    this.tail = -1;
  }
  enQueue(val) {
    if (this.isFull()) {
      return false;
    }
    if (this.isEmpty()) {
      this.head = 0;
    }
    this.tail = (this.tail + 1) % this.len;
    this.data[this.tail] = val;
  }
  deQueue(obj) {
    if (this.isEmpty()) {
      return false;
    }
    if (!!obj) {
      if (this.tail >= this.head) {
        for (let i = this.head; i <= this.tail; i++) {
          if (this.data[i]["pid"] === obj["pid"]) {
            this.data.splice(i, 1);
            if (this.head == this.tail) {
              this.head = -1;
              this.tail = -1;
              this.data = [];
              return true;
            }
            this.tail = (this.tail - 1) % this.len;
            return true;
          }
        }
      } else {
        for (let i = this.head; i < this.len; i++) {
          if (this.data[i]["pid"] === obj["pid"]) {
            this.data.splice(i, 1);
            this.head = (this.head + 1) % this.len;
            return true;
          }
        }
        for (let i = 0; i <= this.tail; i++) {
          if (this.data[i]["pid"] === obj["pid"]) {
            this.data.splice(i, 1);
            this.tail = (this.tail - 1) % this.len;
            return true;
          }
        }
      }
    } else {
      if (this.head == this.tail) {
        this.head = -1;
        this.tail = -1;
        this.data = [];
        return true;
      }
      this.head = (this.head + 1) % this.len;
      return true;
    }
  }
  Front() {
    return this.isEmpty() ? -1 : this.data[this.head];
  }
  Rear() {
    return this.isEmpty() ? -1 : this.data[this.tail];
  }
  isFull() {
    return (this.tail + 1) % this.len == this.head;
  }
  length() {
    return (this.tail - this.head + this.len) % this.len;
  }
  isEmpty() {
    return this.head == -1;
  }

  getQueue() {
    return this.data.filter((item, index) => {
      return this.tail >= this.head
        ? index >= this.head && index <= this.tail && !!item
        : index >= this.head || (index <= this.tail && !!item);
    });
  }
  getEleBy(item) {
    console.log(item);
  }
}
export default Queue;
