let tableEmployees = [];

let salarytotals = [];

$(document).ready(function () {
    console.log('ready!');

    $(document).on('click', '#SubmitBtn', AddEmployeeInfo);
    $(document).on('click', '.delete-btn', onDelete);







});



function AddEmployeeInfo() {

    console.log('In AddEmployeeInfo');

    // I could not understand how to access the annualSalary colum fromm my html table that I created. 
    // gets input firstName  assigns it to variable called firstName

    let firstName = $('#firstName').val(); 

    let lastName = $('#lastName').val();

    let ID = $('#ID').val();

    let jobTitle = $('#jobTitle').val();

    let annuelSalary = $('#annualSalary').val();

    newEmployee = { 
        // I tried to take in the values entered and create a object called newEmployee with them which I pushed to a array called tableEmployees.  Simular to the Object-group-bonus calculator. I had trouble getting the annual salary values from tableEmployees array.
        
        firstName: $('#firstName').val(),

        lastName: $('#lastName').val(),

        ID: $('#ID').val(),

        jobTitle: $('#jobTitle').val(),

        annuelSalary: $('#annualSalary').val(),
    }

    tableEmployees.push(newEmployee); 
    
    // added newEmployee object to tableEmployees array

    // Adds inputs from variables assigned above and appends them to the DOM is a table format

    $('#employeesTable').append(`
    <tr>
        <td>${firstName}</td> 
        <td>${lastName}</td>
        <td>${ID}</td>
        <td>${jobTitle}</td>
        <td class"salary" >$${annuelSalary}</td> // I tried to create a class called "salary" to access all the salaries in my table but that seemed to not work

        <td>
            <button class="delete-btn">
                delete 
            </button>
        </td>
    </tr>
`)

    $('#firstName').val('');

    $('#lastName').val('');

    $('#ID').val('');

    $('#jobTitle').val('');

    $('#annualSalary').val('');

    calcAnnualSalary();
}

function onDelete() {

    console.log('in onDelete', $(this));

    let tr = $(this)

        .parent().parent()
    // assigns tr variable to this parent tr parent td

    tr.remove();
    //removes the row with the delete button on it
}

function findEmployeeSalary(employeeArray) { 

    // takes in array of newEmployee objects and calculate the salary for each of them
    // for every employee in the employeeArray 


    for (const employee of employeeArray) {

        let res = calcAnnualSalary(employee)

    }

}

function calcAnnualSalary(employeeObject) {

    // lets totalSalary variable = array of employee objects which it then goes inside newEmployee and then annuelSalary
    
    let totalSalary = (tableEmployees.newEmployee.annuelSalary); // I'm not sure why I get undefined 

    let value = Number(totalSalary); // changes totalSalary from string to Number

    console.log('the salary is', value);






}

for (employee of tableEmployees) {

    // Checks to see if variable total salary is greater than 20000 

    if (totalSalary > 20000) {

        // If true change the id total background-color to red
        
        $('#total').css('background-color', 'red');
    }
}