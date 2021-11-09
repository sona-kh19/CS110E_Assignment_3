function reverseNumber(num){
    let rem, strnum = "";
     while (num > 0){
         rem = num % 10;
         strnum = strnum + rem;
         num = (num - rem)/10;
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

