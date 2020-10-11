function Dog() {
	this.stomatch = [];
}
Dog.prototype.eat = function(cat) {
	this.stomatch.push(cat);
};
Dog.prototype.sayHi = function() {
	console.log('Hi! I am dog. My name is' + chalk.red(this.name));
}
module.exports = Dog;