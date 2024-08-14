function duplicates(nums){
    const countMap = new Map();
    let duplNums = 0;

    nums.forEach(num => {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    });

    countMap.forEach(value => {if(value>1) duplNums++});
    console.log(duplNums);
    return duplNums;
}

duplicates([1,2,2,3,4,4,4,5]);