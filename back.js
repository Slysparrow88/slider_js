// 1 Number
var num = 5;


// // 2 Spring
// var str = '5';



// 3 Boolean
var bool = 1 > 5;

// 4 Null
var nul = null;


// 5 undefined
var un;

// 6 object
// -array
var names = ['An', 'Vasa', 'Pit'];

// names.push('Ira', 'Vitya');

// names.unshift('Db', 'bb');

// names.splice(1, 0, 'dddd');

// - object

var user = {name: 'Vasya', age: 25};

user.email = 'vasa@gmail.com';

// delete user.age;

console.log(user.age);

var a = prompt('enter value');


// CALCULATER
var num1 = +prompt('Enter num1');
var op = prompt('Enter operation:');
var num2 = +prompt('Enter num2');

console.log(typeof num1);

var res;
if(op==='+'){
    res = num1 + num2;
}

else if(op==='-'){
    res = num1 - num2;
}
else{
    alert('Underfined operation');
}
alert('Sum: ' + res);
// SWITCH
switch (a) {
    case 'v1': alert('v1'); break;
    case 'v2': alert('v2'); break;
    case 'v3': alert('v3'); break;
    case 'v3': alert('v4'); break; 

    default:
    break;
}

// ЦИКЛЫ

var cities = ['Dnepr', 'Kiev', 'Odessa', 'Lviv'];

for(var i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

var cities = ['Dnepr', 'Kiev', 'Odessa', 'Lviv'];

for(var i in cities){
    console.log(cities[i]);
}

var cities = ['Dnepr', 'Kiev', 'Odessa', 'Lviv'];

for(var name of cities){
    console.log(name);
}

// ФУНКЦИЯ

var names = ['vasa', 'pit', 'an', 'alex','vare'];

var cities = ['Dnipro', 'Kiev', 'Lviv', 'Odessa'];


function renderList(list, block_id){

    var block = document.querySelector(block_id);

    var html = '';
    
    for(var item of list){
        html += `<li>${item}</li>`;
    }

    block.innerHTML = html;
}

renderList(names,'#block-users');
renderList(cities,'#block-cities');

// ЗАМЫКАНИЕ (дочерняя функция замкнута на переменные родительской функции или функции windows)

var a = 1;

function parent(){
    var a = 5;

    function child (){
        return ++a;
    }
    return child;
}
var res = parent();

console.log(res());


var document ={
    body:{
        class: null,
        id: null,
    },
    div1:{
        class: 'div-1',
        id: null,
    },
    div2:{
        class: 'div-2',
        id: null,
    },
}

var User = {
    name: 'vasa',
    age: 88,
    email: 'user.com',

    show: function () {
        console.log(this);
    }
}

var car = {name: 'Car'};

car.display = user.show

car.display();

User.show();


var addBtn = document.querySelector('#add');
var list = document.querySelector('#list');

var createCouneiner = function(){
    var value = 0;

    return function(){
        return ++value;
    }
}

var counter = createCouneiner();

addBtn.onclick = function(){
    var index = counter();

    list.innerHTML += `<li>${index}</li>`;
    if(this.className === 'red'){
        this.className = 'orange'
    }else{
        this.className = 'red'
    }
}

// НАСЛЕДОВАНИЕ

var parent = {
    name: 'vasa',
    age: 25,
    show: function(message){
        alert(`${message} ${this.name}`);
    }
}

var child = {
    name: 'pitya'
}

var ar = {};
ar.__proto__ = parent;

parent.show('pidar')

child.__proto__ = parent;

child.show('loh');



console.log(ar);



