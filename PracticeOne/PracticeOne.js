
const dataTypeAndItsConversion = () => {

    let number = 100;
    console.log(typeof number, number)

    // number to string
    number = String(number)
    console.log(typeof number, number)

    // string to number
    number = Number(number)
    console.log(typeof number, number)

    // if string have some something which can't convertable in number then anser is NAN
    number = number + 'A'
    console.log(number, Number(number))
}

const nullishOperator = () => {

    // ??
    let number = null;
    console.log(number * 100)
    console.log((number ?? 1) * 100)
}

// simple function
function simpleFunction() {

    console.log('this is the simple function call')
}

// arrow function
const arrowFunction = () => {
    console.log('this is the arrow function')
}

const functionTypes = () => {


    simpleFunction();
    arrowFunction();

}

const objectOperation = () => {

    let obj = {
        id: '',
        name: '',
        chileObj1: {
            id: '',
            c1Name: '',
            superChild: {
                id: '',
                superC: '',
                listing: [
                    {
                        id: '',
                        name: ''
                    }, {
                        id: '',
                        name: ''
                    }
                ]
            }
        }
    }

    console.log(obj)

    // assigning values
    obj.id = 1;
    obj.name = 'object name';
    obj.chileObj1.id = 2;
    obj.chileObj1.c1Name = 'child name';
    obj.chileObj1.superChild.id = 3;
    obj.chileObj1.superChild.superC = 'super child'
    obj.chileObj1.superChild.listing[0].id = 4;
    obj.chileObj1.superChild.listing[0].name = 'list one'
    obj.chileObj1.superChild.listing[1].id = 5;
    obj.chileObj1.superChild.listing[1].name = 'list two'

    console.log(obj)

    for (let i = 0; i < obj.chileObj1.superChild.listing.length; i++) {
        console.log(obj.chileObj1.superChild.listing[i].name)
    }

    // garbage collector
    // if we make parent is null we can't access it's child then
    // like obj = null then we cant access any this inside obj
}

const arrayOperation = () => {

    let arr = 
    [
        {
            id: 1,
            name: 'one'
        },
        {
            id: 2,
            name: 'two'
        },
        {
            id: 3,
            name: 'three'
        },
        {
            id: 4,
            name: 'four'
        }
    ];

    // filter -- we can use for filter data
    let filteredData = arr.filter(item=>item.id>2)
    console.log('filtered data',filteredData)

    // map -- we can you it to eterate each object and do something
    let eachWordLength = arr.map(item=>item.name.length)
    console.log('word length is ',eachWordLength)

    // split -- we can use it to separate by come conditions
    let dataIs = 'this is the simple data we have here'
    let splitData = dataIs.split(' ')
    console.log('split data is',splitData)

    // Iteration
    for(let a of dataIs){
        console.log(a)
    }
}

const mapOperations=()=>{

    let map = new Map();

    // set
    map.set(1,'data one')
    map.set(2,'data two')
    map.set(3,'data is three')
    map.set(4,'data is four')

    console.log('map is',map)

    // get
    console.log(map.get(1))

    // clear
    map.clear();
    console.log('map after clear',map)
}

const setOperation =()=>{

    let setData = new Set()
    setData.add('data one')
    setData.add('data two')
    setData.add('data three')
    setData.add('data four')

    console.log('set is',setData)
    
    // getting
    setData.forEach(item=>{
        console.log(item)
    })
}

const arrayDistructuringOperations=()=>{

    let arr = ['one','two','three','four','five'];
    console.log('array is',arr)
    // array destructuring 
    let [first,second] = arr;
    console.log(first,second)
    // if we want two and four data
    let [,secondData,,fourthData] = arr;
    console.log(secondData,fourthData)
}

const dateOperations=()=>{

    let date = new Date();
    console.log(date)

    console.log(date.getFullYear(),date.getMonth(),date.getDay())
}

// this is the simple function but in functionHaveCallBack we use it as call back
const collerBackFunction=()=>{

    console.log('data form call back function')
}

const functionHaveCallBack=(collerBackFunction)=>{

    collerBackFunction();
    console.log('this data is printing after call back is finish its working')

}
// function calling which have call back
// functionHaveCallBack(collerBackFunction);

// promises
const promisesOperation=()=>{

    let promise = new Promise((resolve,reject)=>{

        let success = true;
        if(success){
            resolve('success code');
        }else{
            reject('error code')
        }
    });

    // using promises
    promise.then((res)=>{
        console.log(res)
    }).catch(error=>{
        console.log(error)
    })
}

import {getMessage} from './FunctionForTest.js'
const importOperations=()=>{

    getMessage('Good Day')
}
importOperations();