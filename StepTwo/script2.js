const practise_one = () => {
    let nodes = document.body.childNodes;

    // we can use for of to iterate it
    for (let node of nodes) {
        console.log(node)
    }

    // getElementById
    let one = document.getElementById('one')
    console.log('one is', one)

    // querySelector
    let querySelect = document.querySelectorAll('div')
    console.log(querySelect)

    // attribute
    let oneData = document.getElementById('one');
    // attribute adding
    oneData.setAttribute('class', 'oneUp')
    console.log('one data', oneData.className)

    // changing property
    oneData.id = 'oneIdUp'
    console.log('id updated', oneData.id)

}

const practise_two = () => {

    // create element
    let divEle = document.createElement('div')
    divEle.setAttribute('class', 'imagine')
    divEle.innerHTML = 'Working fine'
    document.body.append(divEle)
    console.log(divEle)

    // remove element
    let newEle = document.createElement('div')
    newEle.setAttribute('id', 'newE')
    newEle.innerHTML = 'hey there how are you'
    document.body.append(newEle)
    newEle.style.background = 'red'

    setTimeout(() => {
        newEle.remove();
    }, 5000)
}

// --------------------
const backToNormal = () => {
    setTimeout(() => {
        document.body.style.backgroundColor = '';
    }, 5000)
}
// -----------------------

const practise_three = () => {

    // events like onClick
    document.body.style.backgroundColor = 'red'

    backToNormal();
}

const practise_four = () => {

    // dianamic events
    let inputData = document.getElementById('inTwo');
    inputData.onclick = function () {
        document.body.style.backgroundColor = 'orange'
    }

    backToNormal();
}
practise_four();

const practise_five = (condition) => {

    let data = document.getElementById('inthree');
    if (condition) {
        data.onclick = function () {
            console.log('onclick one')
            document.body.style.backgroundColor = 'blue'
        }
        backToNormal();
    } else {
        data.onclick = function () {
            console.log('onclick two')
            document.body.style.backgroundColor = 'skyBlue'
        }
        backToNormal();
    }
}

const liveReminder=(fromData)=>{
    alert('this from',fromData)
}

const changeColor = (event)=>{

    console.log('working')
    if(event.target.tagName !='TD'){
        return;
    }

    // adding new class
    event.target.classList.add('tableClass');

}
// event deligations --> we can pass event and and perform actions on that event
const practise_six =()=>{

    let dataIs = document.querySelectorAll('table')

    console.log('six call',dataIs,dataIs[0])

    // passing even
    dataIs[0].addEventListener('click',changeColor);
}
practise_six();