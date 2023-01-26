// class for salaries 
class Salary {
    constructor(salary, tax) {
        this.salary = salary;
        this.tax = tax;
    }
    // create a function to calculate the cost
    getFullSalary () {
        return Number(this.salary) + Number(this.salary) * (Number(this.tax.slice(0, 2)) / 100);
    }
}
// obj list for spec 
const specList = {};

// function to create a salary instance
const createSalaryInstance = (instanceName, instanceSalary, instanceTax) => {
    specList[`${instanceName.value}`] = new Salary(instanceSalary.value, instanceTax.value);
    // return the element
    return specList;
}

// the beginning of the development of the function of budget calculations
let budgetItem = 0;
const showBudgetItem = (cost) => {
    console.log(typeof cost)
    budgetItem += Number(cost);
    console.log(typeof cost)
    return budgetItem;
}
const searchSal = (data, member) => {
    console.log(data, member)
    for(const char in data) {
        if(char == member.value) {
            console.log(showBudgetItem(data[char].salary))
        } else {
            console.log('-')
        }
    }
}

// function to display each form field
const showDataItem = (data, nameItem) => {
    // create an element to display form field data
    const dataItem = document.createElement('p');
    // set the text content of the element - the name and value of the form field
    dataItem.textContent = `${nameItem}: ${data.value}`;
    // return the element
    return dataItem;
};
// getting form field data and passing it for display
const showSalariesItem = (data) => {
    // create an element to display form data
    const inputItem = document.createElement('div');
    // add a class for the container
    inputItem.classList = 'out-item';
    createSalaryInstance(data.specialization, data.salary, data.tax)
    // add the result of the display function to the element
    const itemList = document.querySelectorAll('.out-item');
    inputItem.append(showDataItem(data.specialization, 'Specialization'), showDataItem(data.salary, 'Salary'), showDataItem(data.tax, 'Tax'));
    // sorting through the salary elements available in the list
    for(const char in [...itemList]) {
        if([...itemList][char].textContent != inputItem.textContent) {
            // return the element
        } else {
            // create a `block to display an error if an attempt is made to add an existing value
            const errorBlock = document.createElement('div');
            errorBlock.classList = 'error';
            errorBlock.textContent = 'The item is available in the list! Enter another value!';
            document.body.append(errorBlock);
            // automatic removal of the error block after 3 seconds
            setTimeout(function () {
                errorBlock.remove()
                }, 2000)
                // return the element
            return errorBlock;
    }}
    // return the element
    return inputItem;
};
// the salary form was thrown out
const salariesForm = document.querySelector('#salaries');
// call the button to receive the data of the instance salary positions
const addSpec = document.querySelector('#addSpec');
// added an event - obtaining a specialty - salary and tax per click
addSpec.addEventListener('click', (e) => {
    // cancellation of the event by default
    e.preventDefault();
    // creating a container to display form data
    const container = document.createElement('div');
    // add a class for the container
    container.classList = 'out-container';
    // add to the container the result of the function of transferring and displaying the data of the form fields
    container.append(showSalariesItem(salariesForm))
    // add the result of functions of receiving, transmitting and displaying form data in the DOM
    document.querySelector('.salaries-out').append(container);
});
// getting form field data and passing it for display
const showTeamItem = (data) => {
    // create an element to display form data
    const inputItem = document.createElement('div');
    // add a class for the container
    inputItem.classList = 'out-item';
    // add the result of the display function to the element
    inputItem.append(showDataItem(data.name, 'Name'), showDataItem(data.spec, 'Specialization'));
    // passing arguments to the budget calculation function
    searchSal(specList, data.spec);
    // return the element
    return inputItem;
};
// the team form was thrown out
const teamForm = document.querySelector('#team');
// call the button to receive the data of the instance team positions
const addEmpl = document.querySelector('#addEmpl');
// added an event - receiving a worker - position and name
addEmpl.addEventListener('click', (e) => {
    // cancellation of the event by default
    e.preventDefault();
    // creating a container to display form data
    const container = document.createElement('div');
    // add a class for the container
    container.classList = 'out-container';
    // add to the container the result of the function of transferring and displaying the data of the form fields
    container.append(showTeamItem(teamForm))
    // add the result of functions of receiving, transmitting and displaying form data in the DOM
    document.querySelector('.team-out').append(container);
});

