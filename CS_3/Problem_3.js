function reverseNumber(num){
   let digit, strnum = "";
    while (num > 0){
        digit = num % 10;
        strnum = strnum + digit;
        num = (num-digit)/10;
    }
return strnum;
}
console.log(reverseNumber(123));