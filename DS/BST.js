class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }
    insert(value) {
        var node = new Node(value)
        if(!this.root) {
            this.root = node;
            return this
        } else {
            var current = this.root;
            while(current) {
                if(value < current.value){
                    if(current.left === null){
                        current.left = node;
                        return this
                    } else {
                        current = current.left
                    }
                } else if( value > current.value) {
                    if(current.right === null){
                        current.right = node;
                        return this
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value) {
        if(this.root.value === value) {
            return true
        } else {
            var current = this.root;
            while(current){
                if(current.value === value) {
                    return true
                } else if(value > current.value) {
                    if(current.right) {
                        if(current.right.value === value) {
                            return true
                        } else {
                            current = current.right;
                        }
                    } else {
                        return false
                    }
                } else {
                    if(current.left){
                        if(current.left.value === value) {
                            return true
                        } else {
                            current = current.left;
                        }
                    } else {
                        return false;
                    }
                }
            }
        }
    }
}


var tree = new BST();
tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(7);
console.log(tree.find(7));
console.log(tree.find(11));
console.log(tree.find(8));
console.log(tree.find(9));
console.log(tree.find(37));
console.log(tree.find(2));
console.log(tree.find(10));
//console.log(tree)