function primesInInterval(num1, num2) {
    
    let i, primeArr = [];
    
    for (i = num1; i <= num2; i++) { 
        let check = true; 
        
        for (n = 2; n <= Math.sqrt(i); n++) {
           if (i % n === 0) {
            check = false;
           }
        } 
     
        if(check === true && i>1){
        primeArr.push(i);
    }
    }
    return primeArr;
}
console.log(primesInInterval(4, 9))
