let tableEmployees = []; // empty array of tableEmployees

$(document).ready(function () {
    console.log('ready!');

    $(document).on('click', '#SubmitBtn', AddEmployeeInfo); // readys the document for SubmitBtn for AddEmployeeInfo function
    $(document).on('click', '.delete-btn', onDelete); // readys document for delete-btn for onDelete function


    




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
        // Now working : )
        firstName: $('#firstName').val(),

        lastName: $('#lastName').val(),

        ID: $('#ID').val(),

        jobTitle: $('#jobTitle').val(),

        annuelSalary: Number($('#annualSalary').val()), // converted the annuelSalary string to a number in my employee object
    }

    tableEmployees.push(newEmployee); // pushed the newEmployee to my array called tableEmployees

    
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

    let totalEmployeeSalry = 0; 
    
    // sets totalEmployeeSalary to 0;

    for (let employee of array) { 
        
        // loops through an array for every employee object

        totalEmployeeSalry += employee.annuelSalary; 
        
        // takes totalEmployeeSalry and adds employee object annuelSalary 
    
    }

    totalEmployeeSalry /= 12 ; 
    
    // divides total yearly salry and divides by 12

    if (totalEmployeeSalry > 20000) {

    // If true change the id total background-color to red

    $('#total').css('background-color', 'red');
    }

    $('.totalCost').text(totalEmployeeSaary);


    console.log(totalEmployeeSaary);

}