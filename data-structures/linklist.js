//singly.JSON.stringify
// 1 --> 2 -->3 -->4 -->5 -->null
//

let singlyLinkedList={
  head:{
    value:1,
    next:{
      value:2,
      next:{
        value:3,
        next:{
          value:4,
          next: null
        }
      }
    }
  }
}

// Implementation methods
class Node{
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class MySinglyLinkedList{
  constructor(value){
    this.head={
      value: value,
      next:null,
    }
    this.tail=this.head;

    this.length=1;
  }

  //Add Node to the list
  //
  append(value){
    //Instance of Node
    const newNode= new Node(value);
    //change next value to the new node
    this.tail.next=newNode;
    //change the reference to the new tail$
    this.tail=newNode;
    this.length++;
    return this;
  }

  //Add Node to the beginnig of the list
  prepend(value){
    const newNode=new Node(value);

    newNode.next=this.head;
    this.head=newNode;
    this.length++;
    return this;
  }
  
  //Insert an intermediate node

  insert(value,index){
    if(index>=this.length){
      return this.append(value)
    }

    const newNode=new Node(value);

    const firstPointer=this.getTheIndex(index-1);
    const holdingPointer=firstPointer.next;

    firstPointer.next=newNode;
    newNode.next=holdingPointer;
    this.length++;
    return this;
  }

  //Auxiliar method to get the value at a specific index
  
  getTheIndex(i){
    let counter=0;
    let currentNode=this.head;
    while(counter !== i){
      console.log(currentNode);
      currentNode=currentNode.next;
      counter++;
    }
    return currentNode;
  }
}

class Node_Double {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;

    this.length = 1;
  }
  append(value) {
    const newNode = new Node_Double(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1);

let myLinkedList= new MySinglyLinkedList(1);
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.prepend(0));
console.log(myLinkedList.insert(1.5,1));
