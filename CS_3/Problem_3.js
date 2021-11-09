function reverseNumber(num){
   let rem, strnum = "";
    while (num > 0){
        rem = num % 10;
        strnum = strnum + rem;
        num = (num-rem)/10;
    }
return strnum;
}
console.log(reverseNumber(123));
