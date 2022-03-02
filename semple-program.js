var examName = 'Do not adopt unfairmeans in the exam.'
// console.log( examName)

//Two decemel Number sum
var number1 = 20.21;
var number2 = 30.20
var total = number1 + number2 ;
// console.log(total);

// A program to find the sum of n number.

function numbersN (n){
    let sum = 0;
    for ( let i = 1; i<=n; i++){
       
        sum  = sum + i;
    }
    return sum
}
console.log( numbersN(5))

//Find the area of a triangle
function triangleArea ( a, b, c){
    if ( (a+b)>c && (b+c) > a && (c+a)> b){
        let s = (a + b + c) / 2;
        let area = s * (s-a) * (s-b)* (s-c)
          Area = area;
    }else{'Triangle is not possible.'}
    return Area
}
// console.log(triangleArea( 10, 8, 9))

// avareagNumber 
function avareagNumber (num1, num2, num3, num4){
    var avareag = (num1 + num2 + num3 + num4) / 4;
    return avareag;
}
// console.log(avareagNumber(10, 20, 30, 40))
function compare ( a, b){
    if( a == b){
        return true
    }
    else{return false}
}
// console.log(compare( 15, '15'))
function compares ( a,b){
     if ( a.toString() === b){
         return true;
     }else{return false;}
}
// console.log( compares(25, 25))
// console.log( '123' + 123);
let a = 'hi'
let b = 'there'
// console.log( a + b);

const array = [1, 2, 3, 4, 5, 6, 7];
for ( let i= 1; i<array.length; i++ ){
    if( i == 5){
        continue;
    }
    // console.log( array [ i])
}

// oddFriend name
const firentNameList = [ 'pranto', 'roni', 'nahar', 'riaj'];
function oddFriend(namelist){
    for(let i = 0; i<namelist.length; i++){
        // console.log(namelist)
        let oddname = namelist[i]
        if ( oddname.length%2 == 1){
            return oddname
        }
    }
}
// console.log(oddFriend(firentNameList))

