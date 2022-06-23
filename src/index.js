module.exports = function toReadable (number) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 
    'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
    'seventeen', 'eighteen', 'nineteen'];
    const arr1 = ['zero', 'ten', 'twenty', 'thirty', 'forty', 
    'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let numLong = String(number).length;
    let str = String(number);
    switch(numLong){
        case 1:
            return arr[number];
        case 2:
          if(number <= 19){
            return `${arr[number]}`;
          }else if(number >= 20 && number < 100){
            if (str[1] === '0'){
                return `${arr1[str[0]]}`;  
            }else{
                return `${arr1[str[0]]} ${arr[str[1]]}`;
            }
          }
          break;
        case 3:
            if(number >= 100 && number < 1000){
                if(str[1] === '0' && str[2] === '0'){
                    return `${arr[str[0]]} ${hundred}`;
                }else if(str[1] === '0'){
                    return `${arr[str[0]]} ${hundred} ${arr[str[2]]}`;
                }else if(str[2] === '0'){
                    return `${arr[str[0]]} ${hundred} ${arr1[str[1]]}`;
                }else if(str[1] === '1'){
                    return `${arr[str[0]]} ${hundred} ${arr[+str.slice(1)]}`;
                }else{
                    return `${arr[str[0]]} ${hundred} ${arr1[str[1]]} ${arr[str[2]]}`;
                }
            }
          break;
        default:
            return `я не понимаю ${number}`;
    }


};
