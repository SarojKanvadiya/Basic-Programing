function primeNumber(num){
    let temp=0;
    for(i=2; i<=num/2; i++)
    { if(num%i == 0){
        temp++;
    }
    
   }
   if(temp==0 && num>1){
    return true;
}
else{
    return false;
}
}
let number=primeNumber(9);
console.log(number);
console.log(primeNumber(1));
console.log(primeNumber(10));
console.log(primeNumber(5));
console.log(primeNumber(2));
console.log(primeNumber(25));

// even odd check in check even oddbranch
console.log("Even Odd Function")
function evenOdd(num){
    if(num%2==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(evenOdd(5));
console.log(evenOdd(2));
console.log(evenOdd(8));
console.log(evenOdd(3));