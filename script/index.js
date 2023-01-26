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
    // add the result of the display function to the element
    inputItem.append(showDataItem(data.specialization, 'Specialization'), showDataItem(data.salary, 'Salary'), showDataItem(data.tax, 'Tax'));
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

