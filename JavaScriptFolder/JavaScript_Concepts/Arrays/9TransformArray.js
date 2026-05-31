
//map
let scores = [45,82,91,60,73];
let grades=scores.map(s=> s>70 ? "pass" : "fail");
console.log(grades);

//filter
let passing= scores.filter(s=> s>70)
console.log(passing);

//accumulate elements into a single value by adding
let total= scores.reduce((a,b)=>a+b,0);
console.log(total);

//flat -- flattens nested arrays
let nested = [[1,2], [3,4],[5]];
console.log(nested.flat());