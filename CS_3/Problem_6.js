function inverseBinaryNum(num){
    let rem, arr = [], inverse_arr = [];
    while (num > 0){
        rem = num % 10;
        arr.unshift(rem);
        num = (num-rem)/10;
    }
    for (let i = 0; i <= arr.length - 1; i++){
        
        if (arr[i] == 0){
            inverse_arr[i] = 1;
        }
        else{
            inverse_arr[i] = 0;
        }
    }
    return inverse_arr.join("");
}
console.log(inverseBinaryNum(1101));