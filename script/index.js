// the salary form was thrown out
const salariesForm = document.querySelector('#salaries');
// added an event - obtaining a specialty - salary and tax per click
const addSpec = document.querySelector('#addSpec');
addSpec.addEventListener('click', (e) => {
    e.preventDefault();
    // while outputting to the console, in the future it will be transferred for output to the corresponding block and will be transferred to the calculation function
    for(let i = 0; i < salariesForm.length; i++) {
        console.log(salariesForm[i].value)
    }
})