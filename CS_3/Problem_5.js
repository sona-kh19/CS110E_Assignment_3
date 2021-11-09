function binarySum(num1, num2){
    let rem1, rem2, arr1 = [], arr2 = [];
    while(num1 > 0){
        rem1 = num1 % 10;
        arr1.unshift(rem1);
        num1 = (num1 - rem1)/10;
    }
    while(num2 > 0){
        rem2 = num2 % 10;
        arr2.unshift(rem2);
        num2 = (num2 - rem2)/10;
    }

    if (arr1.length < arr2.length){
        for (let i = arr1.length; i < arr2.length; i++){
            arr1.unshift(0);
        }
    }
    else if (arr1.length > arr2.length){
        for (let i = arr2.length; i < arr1.length; i++){
            arr2.unshift(0);
        }
    }

    let sumArr = [], carry = 0, a = arr1.length - 1, b = arr2.length - 1; 
    while (a >= 0 || b >= 0 || carry == 1) {
        carry += (+arr1[a] || 0) + (+arr2[b] || 0);
        sumArr.unshift(carry % 2);
        carry >>= 1;
        a--;
        b--;
    }
    return sumArr.join("");
}
console.log(binarySum(1011, 1));