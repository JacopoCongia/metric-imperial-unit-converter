const btnEl = document.getElementById("btn-el"); // Convert button
const inputEl = document.getElementById("input-el"); // Input field
const pLength = document.getElementById("p-length");
const pVolume = document.getElementById("p-volume");
const pMass = document.getElementById("p-mass");
const convMeToIm = [3.281, 0.264, 2.204]; // 0: Meters to Feet, 1: Liters to Gallons, 2: Kilograms to Pounds
let userInput = "";

btnEl.addEventListener("click", function() {
    userInput = Number(inputEl.value);
    inputEl.value = "";
    let convertedValuesMI = []; // Metric to Imperial - 0 Length, 1 Volume, 2 Mass
    let convertedValuesIM = []; // Imperial to Metric - 0 Length, 1 Volume, 2 Mass
    
    for (let i= 0; i < convMeToIm.length; i++) {
        convertedValuesMI.push((userInput * convMeToIm[i]).toFixed(2));
        convertedValuesIM.push((userInput / convMeToIm[i]).toFixed(2));
    }

    pLength.textContent = `
        ${userInput} m = ${convertedValuesMI[0]} ft | 
        ${userInput} ft = ${convertedValuesIM[0]} m
    `;
    pVolume.textContent = `
        ${userInput} l = ${convertedValuesMI[1]} gal | 
        ${userInput} gal = ${convertedValuesIM[1]} l
    `;
    pMass.textContent = `
        ${userInput} kg = ${convertedValuesMI[2]} lbs | 
        ${userInput} lbs = ${convertedValuesIM[2]} kg
    `;
})