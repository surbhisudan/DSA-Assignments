function maxProduct(nums) {
    const n = nums.length;
    let max1 = -Infinity; // First maximum number
    let max2 = -Infinity; // Second maximum number
    let max3 = -Infinity; // Third maximum number

    let min1 = Infinity; 
    let min2 = Infinity; 

    for (let num of nums) {
        if (num >= max1) {
            max3 = max2;
            max2 = max1;
            max1 = num;
        } else if (num >= max2) {
            max3 = max2;
            max2 = num;
        } else if (num > max3) {
            max3 = num;
        }

        if (num <= min1) {
            min2 = min1;
            min1 = num;
        } else if (num < min2) {
            min2 = num;
        }
    }

    const product1 = max1 * max2 * max3;
    const product2 = max1 * min1 * min2;

    return Math.max(product1, product2);
}

const nums = [1, 2, 3];
console.log(maxProduct(nums)); // Output:6
