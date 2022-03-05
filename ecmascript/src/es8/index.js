const data={
    frontend:'Oscar',
    bakend:'Isabel',
    design:'Ana'
}

const entries=Object.entries(data);
console.log(entries);
console.log(entries.length);

// Values

const data2={
    frontend:'Oscar',
    bakend:'Isabel',
    design:'Ana',//Trailing Comas
};
const values=Object.values(data2);
console.log(values);
console.log(values.length);

// Padding
const string='Hello';
console.log(string.padStart(8,'hi,'));
console.log(string.padEnd('12',' ------'));

// Async Await
// https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/
const helloWorld=()=>{
    return new Promise((resolve,reject)=>{
        (false)
            ? setTimeout(()=>resolve("Hello World"),3000)
            : reject(new Error('Test Error'));
    });
};

const helloAsync= async ()=>{
    const hello= await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction= async ()=>{
    try {
        const hello=await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
}

anotherFunction();
