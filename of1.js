const products = [
    { id: 1, name: 'xiaomi phone', price: 20000 },
    { id: 2, name: 'wlaton phone', price: 22000 },
    { id: 3, name: 'redmi phone', price: 25000 },
    { id: 4, name: 'infinix ', price: 10000 },
    { id: 5, name: 'macbook laptop', price: 120000 },
    { id: 6, name: 'hp laptop', price: 80000 },
    { id: 7, name: 'asus laptop', price: 70000 },
    { id: 8, name: 'acer laptop', price: 50000 },
    { id: 9, name: 'lenovo pad', price: 50000 },

];


// for (let product of products) {
//     console.log(product);
// }


function m(products, s) {

    const find1 = [];

    for (const product of products) {
        if (product.name.toLowerCase().includes(s.toLowerCase())) {
            find1.push(product);

        }
    }
    return find1;
}

const result = m(products, 'Laptop');
console.log(result);