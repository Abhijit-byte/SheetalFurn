const fs = require('fs');

const currentCode = fs.readFileSync('product-data.js', 'utf8');
const originalCode = fs.readFileSync('original-product-data.js', 'utf8');

const evalData = (code) => {
    const jsonStr = code.replace('const productData = ', '').trim().replace(/;$/, '');
    return new Function('return ' + jsonStr)();
};

const currentData = evalData(currentCode);
const originalData = evalData(originalCode);

console.log("Original Jupiter Images:", originalData['jupiter'].images);
console.log("Current Jupiter Images before:", currentData['jupiter'].images);

for (const key in currentData) {
    if (originalData[key] && originalData[key].images) {
        currentData[key].images = [...originalData[key].images];
    }
}

console.log("Current Jupiter Images after:", currentData['jupiter'].images);

const newCode = 'const productData = ' + JSON.stringify(currentData, null, 2) + ';\n';
fs.writeFileSync('product-data.js', newCode);
