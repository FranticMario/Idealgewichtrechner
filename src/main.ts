const inputGroesse = document.querySelector('#input__groesse') as HTMLInputElement;
const inputAlter = document.querySelector('#input__alter') as HTMLInputElement;
const koerperbauBreit = document.querySelector('#koerperbau__breit') as HTMLInputElement;
const btn = document.querySelector('.btn') as HTMLButtonElement;
const outputGewicht = document.querySelector('#output__gewicht') as HTMLSpanElement;


btn?.addEventListener('click', () => {
    const inputGroesseValue = Number(inputGroesse.value);
    const inputAlterValue = Number(inputAlter.value);
    const koerperbauValue = (koerperbauBreit.checked)? 1.1 : 0.9 // if checked true then 1.1, else 0.9
   outputGewicht.textContent = `${((inputGroesseValue - 100) + (inputAlterValue / 10) * 0.9 * koerperbauValue).toFixed(2)}`
});
