//
export function getRandomIndex(arr) {
    const amount = arr.length;

    if(!amount) return -1;

    if(amount === 1) return 0;

    return Math.round(Math.random() * (amount - 1));
}

//
export function getRandomDouble(currId, amount) {
    let currValue = null;
    let result = [];

    while (result.length < 2){
        let tmpValue = Math.round(Math.random() * (amount - 1) + 1);

        if(tmpValue !== currId && tmpValue !== currValue){
            currValue = tmpValue;
            result.push(tmpValue);
        }
    }

    return result;
}
