const fs = require('fs');

const currentCode = fs.readFileSync('product-data.js', 'utf8');
const originalCode = fs.readFileSync('original-product-data.js', 'utf8');

const evalData = (code) => {
    const jsonStr = code.replace('const productData = ', '').trim().replace(/;$/, '');
    return new Function('return ' + jsonStr)();
};

const currentData = evalData(currentCode);
const originalData = evalData(originalCode);

for (const category in currentData) {
    if (typeof currentData[category] === 'object') {
        for (const productKey in currentData[category]) {
            if (originalData[category] && originalData[category][productKey] && originalData[category][productKey].images) {
                // Restore original images array
                currentData[category][productKey].images = originalData[category][productKey].images;
            }
        }
    }
}

const newCode = 'const productData = ' + JSON.stringify(currentData, null, 2) + ';\n';
fs.writeFileSync('product-data.js', newCode);
console.log('Successfully restored nested images arrays.');
