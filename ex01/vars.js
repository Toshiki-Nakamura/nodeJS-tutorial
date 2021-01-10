var value;

value = "42";
console.log("42 is a %s.", typeof(value));

value = 42;
console.log("%d is a %s.",value, typeof(value));

value = [42];
console.log("%d is an %s.",value, typeof(value));

value = [];
var obj = {
object: {
	name: "tnakamur",
	group: "42Tokyo",
  }
};

console.log("%s is an %s.", value + obj, typeof(value));

value = true;
console.log("%s is a %s.", value, typeof(value));

value = undefined;
console.log("%s is an %s.",value, typeof(value));
