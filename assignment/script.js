let tableEmployees = []; // empty array of tableEmployees

$(document).ready(function () {
    console.log('ready!');

    $(document).on('click', '#SubmitBtn', addEmployeeInfo); // readys the document for SubmitBtn for AddEmployeeInfo function
    $(document).on('click', '.delete-btn', onDelete); // readys document for delete-btn for onDelete function

});



function addEmployeeInfo() {

    console.log('In AddEmployeeInfo');

    // gets input firstName  assigns it to variable called firstName

    let firstName = $('#firstName').val();

    let lastName = $('#lastName').val();

    let ID = $('#ID').val();

    let jobTitle = $('#jobTitle').val();

    let annuelSalary = $('#annualSalary').val();

    let newEmployee = {

        firstName: $('#firstName').val(),

        lastName: $('#lastName').val(),

        ID: $('#ID').val(),

        jobTitle: $('#jobTitle').val(),

        annuelSalary: Number($('#annualSalary').val()),

        // converted the annuelSalary string to a number in my employee object
    }

    tableEmployees.push(newEmployee);

    // pushed the newEmployee to my array called tableEmployees

    // added newEmployee object to tableEmployees array

    // Adds inputs from variables assigned above and appends them to the DOM is a table format

    //$('#employeesTable').empty();

    $('#employeesTable').append(`
    <tr data-id=${ID} data-employee-annuel-salary=${annuelSalary}>
        <td>${firstName}</td> 
        <td>${lastName}</td>
        <td>${ID}</td>
        <td>${jobTitle}</td>
        <td class"salary">$${annuelSalary}</td> 

        <td>
            <button class="delete-btn">
                delete 
            </button>
        </td>
    </tr>
`)

    $('.input').val('');

    calcAnnualSalary(tableEmployees);
}

function onDelete() {

    console.log('in onDelete', $(this));

    let tr = $(this)
        .parent().parent()
    // assigns tr variable to this parent tr parent td

    tr.remove();

    //removes the row with the delete button on it
}


function calcAnnualSalary(array) {

    let totalEmployeeSalary = 0;

    // sets totalEmployeeSalary to 0;

    for (let employee of array) {

        // loops through an array for every employee object

        totalEmployeeSalary += employee.annuelSalary;

        // takes totalEmployeeSalry and adds employee object annuelSalary 

    }

    totalEmployeeSalary /= 12;

    // divides total yearly salry and divides by 12

    if (totalEmployeeSalary > 20000) {

        // If true change the id total background-color to red

        $('#total').css('background-color', 'red');
    }

    $('.totalCost').text(totalEmployeeSalary);


    console.log(totalEmployeeSalary);

}

