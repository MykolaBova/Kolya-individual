var a = 9;

(function () {

	var a = 10;

	console.log(this);

	document.getElementById('newBlock').innerHTML = 'new text for block';
})();

console.log(a);


var obj = {
	name: 9,
	method: function () {
		return this.name;
	}
};



var arr = [8, 6, 7, 8, 9];

arr.forEach(function () {

});

var api = 'pp';

// 1
function calls(){
	name.apply(this, arguments);
}

// 2
function calls(a, b){
	var args = [a, b];

	args.push(api);

	name.apply(this, args);
}

// 3
function calls(t, y) {
	var args = [].slice.call(arguments);

	args.push(api);

	name.apply(this, args);

	//t = {};
}

var obj1 = {};
var obj2 = {};

obj1 === obj2; // false разные ссылки

var obj3;
var obj4;

obj3 = calls(obj3, obj4);

function name(hereName, jjj, api) {}

name();
name.call(this, 'kkk', 'l');
name.apply(this, ['kkk', 'l']);



function Person(name, age, walk) {
	// this = {}
	console.log(this, arguments);
	this.name = name;
	this.age = age;
	this.canWalk = function () {
		return walk;
	};

	// return this
}

Person.prototype.h = 0;

var KOLYA = new Person('','','');
var Lylya = new Person('','','');

function ClassMate() {
	Person.apply(this, arguments);
}


var r = new ClassMate();

r.prototype === Person.prototype