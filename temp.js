let celcius = document.getElementById('cel')
let farhenheit = document.getElementById('frn')

celcius.oninput = () => {
     let output = (parseFloat(celcius.value)*9) / 5 + 32;
     farhenheit.value = parseFloat(output.toFixed(2));
};

farhenheit.oninput = () => {
    let output = (parseFloat(farhenheit.value)-32) * 5 / 9;
    celcius.value = parseFloat(output.toFixed(2));
};