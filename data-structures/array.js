//const array=[];
//

class MyArray{
  constructor (){
    this.length=0;
    this.data={};
  }

  get(index){
    return this.data[index];
  }
  // Add elements
  push(item){
    this.data[this.length]= item;
    this.length++;
    return this.data;
  }

  pop(){
    const lastItem=this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return [lastItem, this.data];
  }

  delete(index){
    const item=this.data[index];
    this.shiftIndex(index);
    return [item,this.data];
  }

  shiftIndex(index){
    for(let i=index;i<this.length-1;i++){
      this.data[i]=this.data[i+1];
    }
    delete this.data[this.length-1];
    this.length--;
  }
  
  shift(){
    const item=this.data[0];
    this.shiftIndex(0);
    return [item,this.data];
  }
  unshift(item){
    for(let i=this.length;i>0;i--){
      this.data[i]=this.data[i-1];
    }
    this.data[0]=item;
    return [item,this.data];
  }
}

const myArr= new MyArray();
console.log(myArr.push("Cristian"));
console.log(myArr.push("Adriana"));
console.log(myArr.push("Omar"));
console.log(myArr.push("Martha"));
console.log(myArr.push("Oscar"));
console.log(myArr.pop());
console.log(myArr.delete(2));
console.log("Shift methods");
console.log(myArr.shift());
console.log(myArr.unshift("Pedro"));
console.log(myArr.data);
