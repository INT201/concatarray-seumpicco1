const { template } = require('@babel/core')

function concatArray(array1, array2) {
  

// let a =array1 
// let b =array2

// if(a===null || a===undefined && b==null || b===undefined) {return undefined}

// else if (a==[] || a==null||a==undefined){ return  b}

// else if (b===[] || b==null || b==undefined){return a}

// else {return array1.concat(array2)}



//  if(array1===null || array1===undefined && array2===null || array2===undefined) {return undefined}

// else if (array1===[] || array1===null||array1===undefined){ return  array2}

//  else if (array2===[] || array2===null || array2===undefined){return array1}

// else {return array1.concat(array2)}





let a = array1
let b = array2



if (a===null || a===undefined&&b===null ||b===undefined){return undefined}
else if(a===[] || a===null ||a===undefined ){return b}
else if (b===[]|| b===null||b===undefined){return a}


else {return a.concat(b)} 

}

//console.log(concatArray([2, 4, 6, 7], null))
//console.log(concatArray(undefined, [2, 4, 6, 7]))
module.exports = concatArray
