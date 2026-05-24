"use strict";
let dataList = [
// тут залишаєш свій великий масив без змін
];
// 1) Загальна вартість товарів за новими цінами price
const totalPrice = dataList.reduce((sum, product) => {
    return sum + product.price;
}, 0);
console.log("Загальна вартість товарів:", totalPrice);
// 2) Кількість товарів, у яких ціна зменшилась price < old_price
const productsWithDiscountCount = dataList.filter((product) => {
    return product.old_price > 0 && product.price < product.old_price;
}).length;
console.log("Кількість товарів, у яких ціна зменшилась:", productsWithDiscountCount);
// 3) Товари, які доступні sell_status: "available"
const availableProducts = dataList.filter((product) => {
    return product.sell_status === "available";
});
console.log("Доступні товари:", availableProducts);
// 4) Новий список тільки доступних товарів з потрібними властивостями
const availableProductsInfo = dataList
    .filter((product) => product.sell_status === "available")
    .map((product) => ({
    id: product.id,
    price: product.price,
    old_price: product.old_price,
    usd_price: product.usd_price,
}));
console.log("Короткий список доступних товарів:", availableProductsInfo);
