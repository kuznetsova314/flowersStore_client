
export const calcSum = function (products) {
    let temp = products.reduce((sum, item) => sum + item.price.value * item.count, 0);
    return temp;
}