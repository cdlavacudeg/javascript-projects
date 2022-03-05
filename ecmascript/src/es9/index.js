// Spread operator
const obj={
    name:'oscar',
    age:32,
    country:'MX'
};

let {name,...all}=obj;//encapsula all en un objeto
console.log(name,all);

// Propagation properties

const obj1={
    name:'Oscar',
    age:32
}

const obj2={
    ...obj1,
    country:'MX'
}

console.log(obj2);

// Promise finally

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        true
        ? setTimeout(() => {
            resolve('Hello World!');
            }, 3000)
        : reject(new Error('Test Error'));
    });
};
  
helloWorld()
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));

// Regex
// const regexData=/([0-9]{4})-([0-9]{2})-([0-9]{2})/;
// const match=regexData.exec('2018-04-20');
// const year=match[1];
// const month=match[2];
// const day=match[3];

console.log(year,month,day);

const regexData = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match = regexData.exec('2018-04-20');
const { year, month, day } = match.groups;

console.log(year, month, day);