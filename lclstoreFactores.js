let listaResumen = new Array(101);
const Factores = [
    { name: 'FactorA', company: 'Google' },
    { name: 'Firefox', company: 'Mozilla' },
    { name: 'Safari', company: 'Apple' },
    { name: 'Edge', company: 'Microsoft' }
];
 
localStorage.setItem('browsers', JSON.stringify(browsers));
 
var localStorageObject = localStorage.getItem('browsers');
console.log(JSON.parse(localStorageObject));