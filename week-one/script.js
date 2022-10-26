'use strict'

const _ = require('lodash');
_.camelCase

// Ex.1
console.log("hello world lmao hahah lolz XD")
console.log("something")    

//Ex.2 
const output = 'Just testing nodemon, using loadast to conve' + 
                'this camel case';
console.log(output);
output = _.camelCase(output)

console.log(output)
