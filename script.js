import {add,power} from './functionsImp/collectionData.js'

const practice_one = () => {

    let num = 10;
    num = 20;
    // let num = 1;

    var num2 = 100;
    num2 = 90;
    var num2 = 110;

    const num3 = 100;
    // num3 = 90; //TypeError: Assignment to constant variable.
    // const num3 = 110;

    // type conversion
    let number = "100";
    console.log(typeof number, number)
    number = Number(number)
    console.log(typeof number, number)

    number = "ghj";
    number = Number(number)
    console.log(typeof number, number)

    // nullish operator ??
    let number1 = null;
    console.log(number1)
    // work like if not null use it or else use given value (?? value)
    console.log((number1 ?? 1) * 100)

    // simple function
    function addition(a, b) {
        return a + b;
    }
    console.log('addition is ', addition(90, 10))

    // arrow function
    const value = (a, b) => {
        return a + b;
    }

    console.log('addition is ', value(90, 90))
}

const practice_two = () => {

    let student = {
        name: "",
        email: "",
        subject: {
            subName: "",
            subScore: "",
            books: [
                {
                    bookName: '',
                    price: ''
                },
                {
                    bookName: '',
                    price: ''
                }
            ]
        }
    }

    console.log(student)

    student.name = 'Thor',
        student.email = 'thor1@gmail.com',
        student.subject.subName = 'Avenger',
        student.subject.subScore = 120,
        student.subject.books[0].bookName = 'Deseride quibe'
    student.subject.books[0].price = 'infinity'
    student.subject.books[1].bookName = 'AI'
    student.subject.books[1].price = 'infinity'

    console.log(student)
    for (let a = 0; a < student.subject.books.length; a++) {
        console.log(student.subject.books[a].bookName, student.subject.books[a].price)
    }

    student.subject = null; // books in garbage collector now we cant asses it
    // console.log(student.subject.books.length) // TypeError: Cannot read properties of null (reading 'books')


    // this
    let objectTwo = {
        name: 'user',
        emial: 'user@gmail.com',
        phone: '**********'
    }

    let work = (a) => {
        var a = a;
        console.log(a)
    }
    work(objectTwo);

    // optional chaining
    console.log(objectTwo?.phone)

}

const practice_three = () => {

    // arrays
    let user = [{ id: 1, name: 'user1' }, { id: 2, name: 'user2' }, { id: 3, name: 'user3' }, { id: 4, name: 'user4' }]

    // filter
    let filterdData = user.filter(item => item.id > 2)
    console.log(filterdData)

    // map
    let arr = ["I", "Am", 'Inevitable.'];
    let eachCount = arr.map(item => item.length)
    console.log(typeof eachCount, eachCount)


    // split
    let words = 'I am Iron Man.'
    let worldArr = words.split(' ')
    console.log(typeof worldArr, worldArr)

    // iterator
    let wordsData = 'The best way to find out if you can trust somebody is to trust them.';
    for (let c of wordsData) {
        console.log(c)
    }
}
const practice_four = () => {

    // map
    // key - value pair
    let map = new Map();
    map.set(1, 'hello there')
    map.set('2', 'hello who are you')
    map.set(3, "i'm Jarvis AI from tony stark")
    map.set('4', "what I'm doing here")
    map.set(4, 'You are Tony Stark creation')
    map.set(5, 'wait how is tony stark')

    console.log(map)
    console.log(map.get('4'))
    map.clear()
    console.log('after clearing data', map)

    // set -- only value
    let setData = new Set()
    setData.add('Hello')
    setData.add('there')
    setData.add('how')
    setData.add('are')
    setData.add('you')

    console.log(setData)
    setData.forEach(data => {
        console.log(data)
    });

    let obj = { name: '' }
    let obj1 = { name: 'user1' }
    let obj2 = { name: 'user2' }
    let obj3 = { name: 'user3' }
    let obj4 = { name: 'user4' }

    let setData2 = new Set()
    setData2.add(obj1)
    setData2.add(obj2)
    setData2.add(obj3)
    setData2.add(obj4)

    for (let a of setData2) {
        console.log('from setData2', a.name)
    }

    // array destructuring
    let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine', 'ten']
    // let suppose I want only first two values
    let [fistOne, secondOne] = arr;
    console.log(fistOne, secondOne)
    // let suppose you want second and fifth value form arr
    let [, secondVal, , , fifthVal] = arr
    console.log(secondVal, fifthVal)
}

const practice_five = () => {

    // date time
    let date = new Date();
    console.log(date);

    console.log(date.getFullYear(), date.getMonth(), date.getDay())

    // call back function

    let funOneAddition = (a, b) => {
        return a + b;
    }

    let funTwoOperator = (num1, num2, funOneAddition) => {

        // we use call back when we need to wait for get response from other function
        // call back funtion
        // we do it when we want to wait for get result first and then perform operations
        if (num1 != null && num2 != null) {
            console.log('addition of num1 and num2 is ', funOneAddition(num1, num2))
        } else {
            console.log('num1 is', num1, 'and num2 is', num2)
        }
        console.log('work done')
    }

    funTwoOperator(10, 90, funOneAddition)
}

const practice_six = () => {

    // promises

    let promise = new Promise((resolve, reject) => {
        // asume response
        let success = true
        if (success) {
            resolve('data is fine');
        } else {
            reject('something from in data')
        }
    });

    // promise.then(res => {
    //     console.log(res)
    // }).catch(error => {
    //     console.log(error)
    // })
    // console.log('-------------------------')

    // chaining promises
    promise.then(res => {
        console.log(res)
        return 'new data for next link';
    }).then(res => {
        console.log(res)
    }).catch(error => {
        console.log('error',error)
    })
}

const practice_seven = ()=>{

    // imports
    let sum = add(90,10);
    console.log(sum)

    console.log('power is',power(100))
}
practice_seven()