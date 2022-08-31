// Code for Singly Linked List

// Introduce the Node class.
// Introduce the SLL class.

// Add the method PUSH and POP, SHIFT, UNSHIFT, GET, SET, INSERT, REMOVE, REVERSE

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        var node = new Node(value);
        if(!this.head) {
            this.head = node;
            this.tail = node;
        } else {
           this.tail.next = node;
           this.tail = node;
        }
        this.length ++;
    }

    pop() {
        var newTail;
        var current = this.head;
        if(this.head === this.tail) {
            this.head = null;
            this.tail = null;
            this.length = 0
        } else {
            while(current){
                if(current.next === this.tail) {
                    newTail = current;
                    this.tail = newTail;
                    this.tail.next = null;
                    this.length --;
                } else {
                    current = current.next;
                }
            }
        } 
    }

    shift() {
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            var newHead = this.head.next;
            this.head = newHead;
        }
        this.length --
    }

    unshift(value) {
        var node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            var currHead = this.head;
            this.head = node;
            this.head.next = currHead;
        }
        this.length ++;
    }

    get(i) {
        var index = 0;
        if(i === 0) {
            return this.head;
        } else if(i >= this.head) {
            return undefined;
        } else {
            var current = this.head;
            while (current) {
                current = current.next;
                index ++
                if (index === i) {
                    return current;
                }
            }
        }
    }

    set(i, value) {
        var node = new Node(value);
        var index = 0;
        var current = this.head;
        while(current) {
            index ++;
            console.log(index)
            var next = current.next;
            if(index === i) {
                current = node;
                current.next = next;
                console.log(index, i)
                return current;
                // need to set the node as next of the previous one
            } else {
                current = current.next;
            }
        }
    }
}

var ssl = new SLL();
ssl.push(2);
ssl.push(3);
ssl.push(4);
ssl.push(5);
//ssl.pop();
//ssl.shift();
//ssl.unshift(1);
console.log(ssl.set(1,3))
console.log(ssl.get(2))
console.log('Hello')