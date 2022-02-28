const buildCount=(i)=>{
    let count=i;
    const displayCount=()=>{
        console.log(count++);
    };
    return displayCount;
}
let counter=buildCount(1);
counter();
counter();
counter();

let otherCounter=buildCount(10);
otherCounter();
otherCounter();
otherCounter();