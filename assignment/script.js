$(document).ready(function () {
    console.log('ready!');

    $(document).on('click', '#SubmitBtn', AddEmployeeInfo);
    $(document).on('click', '.delete-btn' , onDelete); 
        








});

function  AddEmployeeInfo() {
    console.log('In AddEmployeeInfo');

    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let ID = $('#ID').val();
    let jobTitle = $('#jobTitle').val();
    let annuelSalary = $('#annualSalary').val();

    $('#employeesTable').append(`
    <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${ID}</td>
        <td>${jobTitle}</td>
        <td>${annuelSalary}</td>

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

}

function onDelete() {
    console.log('in onDelete', $(this));

    let tr = $(this)
    .parent().parent()
    
    tr.remove();
}
