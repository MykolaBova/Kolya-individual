var object1 = {
	name: "11",
	age: 90,
	getInfo: function () {
		return "my name is" + this.name;
	}

}

var Car = function (brand) {
	this.wheels = 3;
	this.brand = brand;
	this.toString = function() {
		return "wheels" + this.wheels + " brand " + this.brand;
	}
	Car.prototype.cars++;
	return this;
};

function Car1 (brand) {
	this.wheels = 3;
	this.brand = brand;
	this.toString = function() {
		return "wheels" + this.wheels + " brand " + this.brand;
	}
	Car1.prototype.cars++;
	return this;
};

Car.prototype.cars = 0;

var car1 = new Car("BMW");
var bike1 = new Car("Java");

alert(car1);
alert(bike1);
