
const inputGroesse = document.querySelector('#input__groesse') as HTMLInputElement;
const inputAlter = document.querySelector('#input__alter') as HTMLInputElement;
const koerperbauBreit = document.querySelector('#koerperbau__breit') as HTMLInputElement;
const koerperbauSchmal = document.querySelector('#koerperbau__schmal') as HTMLInputElement;
const btn = document.querySelector('.btn') as HTMLButtonElement;
const outputGewicht = document.querySelector('#output__gewicht') as HTMLSpanElement;

console.log(inputAlter,inputGroesse,koerperbauBreit,koerperbauSchmal, btn, outputGewicht);


btn?.addEventListener('click', () => {
    const inputGroesseValue = Number(inputGroesse.value);
    const inputAlterValue = Number(inputAlter.value);
    console.log(koerperbauBreit.checked);
    const koerperbauValue = (koerperbauBreit.checked)? 1.1:0.9 // if checked true then 1.1, else 0.9
   console.log(koerperbauValue);
   outputGewicht.textContent = `${((inputGroesseValue - 100) + (inputAlterValue / 10) * 0.9 * koerperbauValue).toFixed(2)}`
    
});