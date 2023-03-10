// class for salaries 
class Salary {
    constructor(salary, tax) {
        this.salary = salary;
        this.tax = tax;
    }
    // create a function to calculate the cost
    getItemSalary () {
        return Number(this.salary) + Number(this.salary) * (Number(this.tax.slice(0, 2)) / 100);
    }
    // create a proto func to calculate the total spec budget
    getTotalBudgetSalary () {
        let totalSpecBudget = 0;
        return totalSpecBudget += this.getItemSalary();
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
    budgetItem += Number(cost);
    return budgetItem;
}
// 
const showSpecBudget = (spec, number, specList) => {
    let str = ''
    for (const char in specList) {
        if(spec == char) {
            str = specList[char].getItemSalary() * number;
        }
    }
    return str;
}
// calculation of specializations and their number, show the budget for specializations
const specArrCalc = (arr) => {
    let result = {};
    arr.forEach(function(a){
        result[a] = result[a] + 1 || 1;
    });
    let str = [];
    const containerSpecBudget = document.querySelector('#category > span');
    for (var key in result) {
        str.push(' ' + key + ' : ' + specList[key].getItemSalary() * result[key]);
    }
    containerSpecBudget.textContent = str;
    return containerSpecBudget;
}
// array of specializations
const specArr = []
// the function of checking the presence of an employee's specialization in the list
const searchSal = (data, member) => {
    for(const char in data) {
        if(char == member.value) {
            // add specialties to the array for their calculation and further output
            specArr.push(member.value)
            specArrCalc(specArr)
            showTotalBudget(showBudgetItem(data[char].getTotalBudgetSalary()))
        }
    }
}
// the function of displaying total budget
const showTotalBudget = (total) => {
    const containerTotalBudget = document.querySelector('#total > span');
    containerTotalBudget.textContent = total;
    return containerTotalBudget;
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

