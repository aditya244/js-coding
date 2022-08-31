class Node {
	constructor(value){
  	this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST{
	constructor() {
  	this.root = null;
  }
  
  insert(value) {
  	var node = new Node(value);
    if (this.root === null) {
    	this.root = node;
    } else {
        var current = this.root
        while(current){
            if (current.value > node.value) {
              if(current.left) {
                current = current.left;
            } else {
                current.left = node;
              return current.left
            }
            } else if(current.value < node.value) {
                if(current.right) {
                  current = current.right;
              } else {
                  current.right = node;
                return current.right
              }
          }
        }
    }
  }

  find(value){
      if(this.root.value === value) {
          return value
      } else {
          var current = this.root;
          while (current) {
              if (value < current.value) {
                  current = current.left;
              } else if (value > current.value) {
                  current = current.right;
              } else {
                  return current;
              }
          }
      }
  }
}

var tree = new BST();
tree.insert(8);
tree.insert(6);
tree.insert(10)
tree.insert(5);
tree.insert(11);
//console.log(tree, 'TREE')
console.log(tree.find(5))