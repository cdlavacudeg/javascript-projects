// For Each
const letters=['a','b','c'];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log('for',element);
};

letters.forEach(element => console.log('forEach',element));

// Map

const newArray=letters.map(item=>item+'++');
// const newArray=[];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element+'++');
// };

console.log(letters);
console.log(newArray);

// Map Reload
const orders = [
    {
    customerName: 'Nicolas',
    total: 60,
    delivered:true,
    },
    { 
        customerName: 'Zulema',
        total: 120,
        delivered: false,
    },
    {
        customerName: 'Santiago',
        total: 180,
        delivered: true,
    },
    {
        customerName:'Valentina',
        total:240,
        delivered: true,
    },
];

console.log('original: ',orders);
const rta=orders.map(item=>item.total);
console.log('rta',rta);
// const rta2=orders.map(item=>{
//     item.tax=0.19;
//     return item;
// });
// console.log('rta2: ',rta2);
// console.log('original: ',orders);

const rta3=orders.map(item=>{
    return {
        ...item,
        tax:0.19,
    };
});
console.log('rta2: ',rta3);
console.log('original: ',orders);