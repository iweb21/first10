
//  Name cases:Store a person name in a variable,and then print that person name in loercase,uppercase, and titlecase.


var PersonName = "sumera";
// in lowercase:
console.log("lowercase:", PersonName.toLowerCase());

// in uppercase:
console.log("uppercase:", PersonName.toUpperCase());

// in titlecase:
console.log("titlecase:", PersonName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
