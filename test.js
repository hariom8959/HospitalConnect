const data = require('./sample.json');
// console.log(data)

myarray = ['skin rash', 'blister'];
var max = 0;
var disease = "NoMatch";
for(let i in data)
{
    let common = data[i].filter(x => myarray.indexOf(x) !== -1);
    if(common.length > max) {
        max = common.length;
        disease = i;
    }
}

