function reverseNumber(num){
    let digit, strnum = "";
     while (num > 0){
         digit = num % 10;
         strnum = strnum + digit;
         num = (num-digit)/10;
     }
 return strnum;
 }
 



function isPalindrome(number){
    const num1 = number;
    let reverse = reverseNumber(number);
   
    if(reverse == num1){
        return true;
    }
         return false;


}
console.log(isPalindrome(121));



