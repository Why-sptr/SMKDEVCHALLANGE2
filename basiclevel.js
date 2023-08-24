// Data 1
const beratUdin1 = 78; // kg
const tinggiUdin1 = 1.69; // m
const beratNanang1 = 92; // kg
const tinggiNanang1 = 1.95; // m

const bmiUdin1 = beratUdin1 / (tinggiUdin1 ** 2);
const bmiNanang1 = beratNanang1 / (tinggiNanang1 ** 2);

const udinLebihTinggi1 = bmiUdin1 > bmiNanang1;

// Data 2
const beratUdin2 = 95; // kg
const tinggiUdin2 = 1.88; // m
const beratNanang2 = 85; // kg
const tinggiNanang2 = 1.76; // m

const bmiUdin2 = beratUdin2 / (tinggiUdin2 ** 2);
const bmiNanang2 = beratNanang2 / (tinggiNanang2 ** 2);

const udinLebihTinggi2 = bmiUdin2 > bmiNanang2;

// Menampilkan hasil
console.log(`Data 1:`);
console.log(`BMI Udin (${bmiUdin1.toFixed(1)}) ${udinLebihTinggi1 ? 'lebih tinggi dari' : 'lebih rendah dari'} Nanang (${bmiNanang1.toFixed(1)})!`);
console.log();

console.log(`Data 2:`);
console.log(`BMI Udin (${bmiUdin2.toFixed(1)}) ${udinLebihTinggi2 ? 'lebih tinggi dari' : 'lebih rendah dari'} Nanang (${bmiNanang2.toFixed(1)})!`);
